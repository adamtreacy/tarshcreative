import { forms, isFormKind, type Field } from "@/app/lib/forms";

// Saves each enquiry into the matching Google Form (so the Sheets keep
// filling) and, when RESEND_API_KEY is set, emails it straight to the team.
// Outside production nothing is sent anywhere, so testing never adds
// fake rows to the real Sheets. Set ENQUIRE_LIVE=1 to override.

const live = process.env.NODE_ENV === "production" || process.env.ENQUIRE_LIVE === "1";

function clean(v: unknown, max = 4000): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function values(f: Field, raw: unknown): string[] {
  if (f.kind === "checks") {
    const arr = Array.isArray(raw) ? raw : [];
    return arr.map((x) => clean(x, 200)).filter((x) => f.options?.includes(x));
  }
  const v = clean(raw, f.kind === "textarea" ? 4000 : 300);
  if (!v) return [];
  if (f.kind === "radio") return f.options?.includes(v) ? [f.googleMap?.[v] ?? v] : [];
  return [v];
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Bad request" }, { status: 400 });
  }

  // Honeypot: real people never fill this in. Pretend it worked.
  if (clean(body.website)) return Response.json({ ok: true });

  if (!isFormKind(body.type)) return Response.json({ error: "Unknown form" }, { status: 400 });
  const def = forms[body.type];
  const answers = (body.answers ?? {}) as Record<string, unknown>;

  const params = new URLSearchParams();
  const summary: string[] = [];

  for (const f of def.fields) {
    const vals = values(f, answers[f.name]);
    if (f.required && vals.length === 0) {
      return Response.json({ error: `Please fill in: ${f.label}` }, { status: 422 });
    }
    if (f.kind === "email" && vals[0] && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(vals[0])) {
      return Response.json({ error: "That email address doesn't look right" }, { status: 422 });
    }
    if (vals.length === 0) continue;

    if (f.kind === "date") {
      const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(vals[0]);
      if (!m) return Response.json({ error: `Please enter a valid date for: ${f.label}` }, { status: 422 });
      params.set(`entry.${f.entry}_year`, m[1]);
      params.set(`entry.${f.entry}_month`, String(Number(m[2])));
      params.set(`entry.${f.entry}_day`, String(Number(m[3])));
      summary.push(`${f.label}: ${m[3]}/${m[2]}/${m[1]}`);
    } else {
      for (const v of vals) params.append(`entry.${f.entry}`, v);
      summary.push(`${f.label}: ${vals.join(", ")}`);
    }
  }

  if (!live) {
    console.log(`[enquire:dev] not sent (${def.kind})\n${summary.join("\n")}`);
    return Response.json({ ok: true, dev: true });
  }

  // 1. Google Form (the record of truth, shows up in the Sheet)
  let saved = false;
  try {
    const res = await fetch(`https://docs.google.com/forms/d/e/${def.googleFormId}/formResponse`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
      redirect: "manual",
    });
    saved = res.ok || (res.status >= 300 && res.status < 400);
    if (!saved) console.error("enquire: Google Form rejected", res.status);
  } catch (e) {
    console.error("enquire: Google Form failed", e);
  }

  // 2. Email, if configured
  let emailed = false;
  const key = process.env.RESEND_API_KEY;
  if (key) {
    try {
      const replyTo = clean(answers.email, 200);
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.ENQUIRE_FROM ?? "Tarsh Creative <onboarding@resend.dev>",
          to: (process.env.ENQUIRE_TO ?? "tarshcreative@ga-productions.com").split(",").map((s) => s.trim()),
          ...(replyTo ? { reply_to: replyTo } : {}),
          subject: `New ${def.kind} enquiry`,
          text: summary.join("\n"),
        }),
      });
      emailed = res.ok;
      if (!emailed) console.error("enquire: Resend rejected", res.status, await res.text());
    } catch (e) {
      console.error("enquire: Resend failed", e);
    }
  }

  // Only tell the visitor it worked if at least one place has it.
  if (!saved && !emailed) {
    return Response.json(
      { error: "Something went wrong sending that. Please email us or message on Instagram." },
      { status: 502 },
    );
  }
  return Response.json({ ok: true });
}

"use client";

import { useState } from "react";
import { forms, type FormKind, type Field } from "@/app/lib/forms";
import { subscriptionPackages } from "@/app/lib/content";

const input =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-taupe/60 focus:outline-none focus:ring-0";
const label = "mb-2 block text-xs uppercase tracking-[0.2em] text-taupe/80";

type Props = {
  /** Which version to open on, if the visitor came from a package button */
  initialKind: FormKind | null;
  /** Pre-filled answers (package, note), applied to the version the visitor arrived on */
  preset?: Record<string, string>;
};

const choices: { kind: FormKind; label: string }[] = [
  { kind: "wedding", label: "A wedding" },
  { kind: "business", label: "My business" },
  { kind: "subscription", label: "A monthly subscription" },
  { kind: "corporate", label: "A corporate event" },
  { kind: "general", label: "Something else" },
];

export default function EnquiryForm({ initialKind, preset = {} }: Props) {
  const [kind, setKind] = useState<FormKind | null>(initialKind);
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");
  const def = kind ? forms[kind] : null;
  const [plan, setPlan] = useState(initialKind === "subscription" ? (preset.package ?? "") : "");
  const chosenPlan = subscriptionPackages.find((p) => p.name === plan);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!kind || !def) return;
    setError("");
    const fd = new FormData(e.currentTarget);
    const answers: Record<string, string | string[]> = {};
    for (const f of def.fields) {
      answers[f.name] = f.kind === "checks" ? (fd.getAll(f.name) as string[]) : String(fd.get(f.name) ?? "");
    }
    setState("sending");
    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: kind, answers, website: fd.get("website") ?? "" }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        setState("idle");
        return;
      }
      setState("done");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError("Couldn't reach the server. Check your connection and try again.");
      setState("idle");
    }
  }

  if (state === "done") {
    return (
      <div className="rounded-2xl border border-white/15 bg-white/10 p-10 text-center">
        <p className="font-display text-3xl font-light italic text-cream">Thank you.</p>
        <p className="mx-auto mt-4 max-w-[40ch] text-cream/70">
          Your enquiry is in. I&apos;ll be in touch within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      onChange={(e) => {
        const t = e.target as unknown as HTMLInputElement;
        if (t.name === "package") setPlan(t.value);
      }}
      className="space-y-7 rounded-2xl border border-white/15 bg-white/10 p-6 sm:p-10">
      <fieldset>
        <legend>
          <span className={label}>
            What&apos;s this enquiry about? <span className="text-cream/50">*</span>
          </span>
        </legend>
        <div className="flex flex-wrap gap-3">
          {choices.map((c) => (
            <button
              key={c.kind}
              type="button"
              aria-pressed={kind === c.kind}
              onClick={() => {
                setKind(c.kind);
                setError("");
              }}
              className={`rounded-full border px-5 py-2.5 text-sm transition-colors ${
                kind === c.kind
                  ? "border-cream bg-cream text-[#214960]"
                  : "border-white/20 text-cream/80 hover:border-white/40"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </fieldset>

      {def && kind && (
        <div key={kind} className="space-y-7">
          <p className="text-sm leading-relaxed text-cream/65">{def.intro}</p>
          {def.fields.map((f) => (
            <div key={f.name} className="space-y-7">
              <FieldInput f={f} defaultValue={kind === initialKind ? preset[f.name] : undefined} />
              {kind === "subscription" && f.name === "package" && chosenPlan && (
                <p className="-mt-3 text-sm text-cream/70">
                  <span className="font-display text-xl text-cream">{chosenPlan.price}</span> {chosenPlan.cadence}
                  <span className="mt-1 block text-cream/55">{chosenPlan.description}</span>
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Honeypot, hidden from people */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {error && (
        <p role="alert" className="rounded-xl border border-red-300/30 bg-red-300/10 px-4 py-3 text-sm text-red-100">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending" || !def}
        className="inline-flex w-full items-center justify-center rounded-full bg-cream px-8 py-4 text-[0.68rem] uppercase tracking-[0.24em] text-[#214960] transition-colors hover:bg-sand disabled:opacity-60"
      >
        {state === "sending" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}

function FieldInput({ f, defaultValue }: { f: Field; defaultValue?: string }) {
  const id = `f-${f.name}`;
  const req = f.required;
  const head = (
    <span className={label}>
      {f.label}
      {req && <span className="text-cream/50"> *</span>}
    </span>
  );

  if (f.kind === "radio" || f.kind === "checks") {
    const type = f.kind === "radio" ? "radio" : "checkbox";
    return (
      <fieldset>
        <legend>{head}</legend>
        <div className="flex flex-wrap gap-3">
          {f.options!.map((o, i) => (
            <label key={o} className="cursor-pointer">
              <input
                type={type}
                name={f.name}
                value={o}
                defaultChecked={defaultValue === o}
                required={req && f.kind === "radio" && i === 0}
                className="peer sr-only"
              />
              <span className="inline-block rounded-full border border-white/20 px-5 py-2.5 text-sm text-cream/80 transition-colors peer-checked:border-cream peer-checked:bg-cream peer-checked:text-[#214960] peer-focus-visible:ring-2 peer-focus-visible:ring-taupe hover:border-white/40">
                {o}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
    );
  }

  if (f.kind === "textarea") {
    return (
      <div>
        <label htmlFor={id}>{head}</label>
        <textarea
          id={id}
          name={f.name}
          rows={4}
          required={req}
          defaultValue={defaultValue}
          placeholder={f.placeholder}
          className={`${input} resize-none`}
        />
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={id}>{head}</label>
      <input
        id={id}
        name={f.name}
        type={f.kind}
        required={req}
        defaultValue={defaultValue}
        placeholder={f.placeholder}
        autoComplete={f.kind === "email" ? "email" : f.kind === "tel" ? "tel" : f.name === "name" ? "name" : undefined}
        className={`${input} ${f.kind === "date" ? "[color-scheme:dark]" : ""}`}
      />
    </div>
  );
}

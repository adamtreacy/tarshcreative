"use client";

import { useState, type FormEvent } from "react";
import {
  brand,
  corporateBaseRates,
  corporateBaseIncludes,
  corporateEditing,
  corporateAddons,
  corporateBookingLink,
} from "@/app/lib/content";

type FormState = {
  name: string;
  email: string;
  eventDate: string;
  notes: string;
};

export default function CorporateQuoteBuilder() {
  const [selectedBase, setSelectedBase] = useState<string>("half-day");
  const [editingQtys, setEditingQtys] = useState<Record<string, number>>({});
  const [addonQtys, setAddonQtys] = useState<Record<string, number>>({});
  const [form, setForm] = useState<FormState>({ name: "", email: "", eventDate: "", notes: "" });

  // ── helpers ─────────────────────────────────────────────────────────────────

  const baseRate = corporateBaseRates.find((r) => r.id === selectedBase)!;

  function editingQty(id: string) { return editingQtys[id] ?? 0; }
  function addonQty(id: string) { return addonQtys[id] ?? 0; }

  function setEditingQty(id: string, val: number) {
    setEditingQtys((prev) => ({ ...prev, [id]: Math.max(0, val) }));
  }
  function setAddonQty(id: string, val: number) {
    setAddonQtys((prev) => ({ ...prev, [id]: Math.max(0, val) }));
  }

  // ── total ────────────────────────────────────────────────────────────────────

  const subtotal = (() => {
    let t = baseRate.value;
    for (const item of corporateEditing) {
      const qty = editingQty(item.id);
      if (qty > 0) t += item.value * qty;
    }
    for (const item of corporateAddons) {
      if (item.id === "extra-hours") {
        t += item.value * addonQty("extra-hours");
      } else if (item.id === "second-shooter") {
        if (addonQty("second-shooter") > 0) t += baseRate.value;
      }
      // travel & urgent: dynamic — excluded from total
    }
    return t;
  })();

  const urgentSelected = addonQty("urgent") > 0;
  const total = urgentSelected ? Math.round(subtotal * 1.25) : subtotal;

  const hasItems =
    editingQtys["highlight"] > 0 ||
    editingQtys["footage"] > 0 ||
    Object.values(editingQtys).some((v) => v > 0) ||
    Object.values(addonQtys).some((v) => v > 0);

  // ── quote summary for email ──────────────────────────────────────────────────

  function buildSummary() {
    const lines: string[] = [];
    lines.push(`Base: ${baseRate.name} (${baseRate.duration}) — ${baseRate.price} + GST`);

    for (const item of corporateEditing) {
      const qty = editingQty(item.id);
      if (qty > 0) lines.push(`${item.label} × ${qty} — ${item.price}`);
    }

    const extraHrs = addonQty("extra-hours");
    if (extraHrs > 0) lines.push(`Additional capture hours × ${extraHrs} — $${extraHrs * 200} + GST`);
    if (addonQty("second-shooter") > 0) lines.push(`Second shooter — ${baseRate.price} + GST`);
    if (urgentSelected) lines.push(`Urgent turnaround — +25% of total`);

    lines.push("");
    lines.push(`Estimated total (excl. GST): $${total.toLocaleString()}`);
    if (urgentSelected) lines.push(`(Urgent surcharge of 25% applied)`);

    return lines.join("\n");
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Corporate Events Enquiry — Tarsh Creative");
    const summary = buildSummary();
    const body = encodeURIComponent(
      `Hi Tarsh,\n\nHere's my event enquiry:\n\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      (form.eventDate ? `Event Date: ${form.eventDate}\n` : "") +
      `\n── Quote Summary ──\n${summary}\n` +
      (form.notes ? `\nNotes:\n${form.notes}\n` : "") +
      `\nLooking forward to hearing from you!`
    );
    const link = document.createElement("a");
    link.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // ── stepper component ────────────────────────────────────────────────────────

  function Stepper({ value, onChange }: { value: number; onChange: (v: number) => void }) {
    return (
      <div className="flex items-center gap-2 shrink-0">
        <button
          type="button"
          onClick={() => onChange(value - 1)}
          disabled={value === 0}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-cream/70 transition-colors hover:border-white/40 hover:text-cream disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Decrease"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <span className="w-4 text-center text-sm text-cream tabular-nums">{value}</span>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-cream/70 transition-colors hover:border-white/40 hover:text-cream"
          aria-label="Increase"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    );
  }

  function Toggle({ active, onToggle }: { active: boolean; onToggle: () => void }) {
    return (
      <button
        type="button"
        onClick={onToggle}
        className={`relative h-6 w-10 shrink-0 rounded-full transition-colors ${active ? "bg-taupe" : "bg-white/15"}`}
        aria-pressed={active}
      >
        <span
          className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-cream shadow transition-transform ${active ? "translate-x-4" : "translate-x-0"}`}
        />
      </button>
    );
  }

  // ── render ───────────────────────────────────────────────────────────────────

  return (
    <div className="mx-auto w-full max-w-3xl">

      {/* ── Step 1: Base Rate ── */}
      <section className="mt-14">
        <h2 className="text-center text-xs uppercase tracking-[0.28em] text-taupe/70 mb-6">
          1. Content Capture
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {corporateBaseRates.map((rate) => {
            const active = selectedBase === rate.id;
            return (
              <button
                key={rate.id}
                type="button"
                onClick={() => setSelectedBase(rate.id)}
                className={`flex flex-col rounded-2xl border p-8 text-left transition-all duration-200 ${
                  active
                    ? "border-taupe bg-taupe/20 shadow-[0_0_0_2px_rgba(183,168,146,0.4)]"
                    : "border-white/15 bg-white/10 hover:border-white/30 hover:bg-white/15"
                }`}
              >
                <span className="font-display text-2xl font-light text-cream">{rate.name}</span>
                <span className="mt-1 text-sm text-cream/55">{rate.duration}</span>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-4xl text-cream">{rate.price}</span>
                  <span className="text-sm text-cream/55">{rate.cadence}</span>
                </div>
                {active && (
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs text-taupe">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path d="M2 6.5l2.5 2.5 5.5-5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Selected
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Includes */}
        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 px-7 py-5">
          <p className="mb-3 text-[0.7rem] uppercase tracking-[0.25em] text-taupe/70">
            Every booking includes
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {corporateBaseIncludes.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-cream/80">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-taupe" aria-hidden>
                  <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Step 2: Editing ── */}
      <section className="mt-12">
        <h2 className="text-center text-xs uppercase tracking-[0.28em] text-taupe/70 mb-6">
          2. Editing & Post-Production
        </h2>
        <div className="rounded-2xl border border-white/15 bg-white/10 divide-y divide-white/10">
          {corporateEditing.map((item) => {
            const qty = editingQty(item.id);
            const active = qty > 0;
            return (
              <div key={item.id} className={`flex items-start justify-between px-7 py-4 gap-4 transition-colors ${active ? "bg-white/5" : ""}`}>
                <div className="flex-1 min-w-0">
                  <span className="text-sm text-cream/80">{item.label} — {item.price}</span>
                  {item.note && (
                    <span className="block mt-0.5 text-xs text-cream/45">{item.note}</span>
                  )}
                </div>
                {item.qtySelectable ? (
                  <Stepper value={qty} onChange={(v) => setEditingQty(item.id, v)} />
                ) : (
                  <Toggle active={active} onToggle={() => setEditingQty(item.id, active ? 0 : 1)} />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Step 3: Add-ons ── */}
      <section className="mt-10">
        <h2 className="text-center text-xs uppercase tracking-[0.28em] text-taupe/70 mb-6">
          3. Add-Ons
        </h2>
        <div className="rounded-2xl border border-white/15 bg-white/10 divide-y divide-white/10">
          {corporateAddons.map((item) => {
            const qty = addonQty(item.id);
            const active = qty > 0;
            return (
              <div key={item.id} className={`flex items-start justify-between px-7 py-4 gap-4 transition-colors ${active ? "bg-white/5" : ""}`}>
                <div className="flex-1 min-w-0">
                  <span className="text-sm text-cream/80">{item.label} — {item.price}</span>
                  {item.note && (
                    <span className="block mt-0.5 text-xs text-cream/45">{item.note}</span>
                  )}
                </div>
                {item.qtySelectable ? (
                  <Stepper value={qty} onChange={(v) => setAddonQty(item.id, v)} />
                ) : (
                  <Toggle active={active} onToggle={() => setAddonQty(item.id, active ? 0 : 1)} />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Running Total ── */}
      <div className="mt-8 rounded-2xl border border-taupe/30 bg-taupe/10 px-7 py-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-taupe/70">Estimated total</p>
          </div>
          <div className="text-right">
            <span className="font-display text-4xl text-cream">${total.toLocaleString()}</span>
            <span className="ml-1 text-sm text-cream/55">+ GST</span>
          </div>
        </div>
        {urgentSelected && (
          <p className="mt-3 text-xs text-taupe/80">Urgent surcharge of 25% applied to subtotal of ${subtotal.toLocaleString()}.</p>
        )}
        {addonQty("second-shooter") > 0 && (
          <p className="mt-2 text-xs text-taupe/80">Second shooter rate matches your selected base rate ({baseRate.price} + GST).</p>
        )}
      </div>

      {/* ── Contact Form ── */}
      <section className="mt-10">
        <h2 className="text-center text-xs uppercase tracking-[0.28em] text-taupe/70 mb-6">
          4. Send Your Enquiry
        </h2>
        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/15 bg-white/10 px-7 py-7 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block mb-1.5 text-xs uppercase tracking-[0.2em] text-taupe/70" htmlFor="name">
                Name <span className="text-taupe">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="Your name"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-cream placeholder:text-cream/30 focus:border-taupe/50 focus:outline-none focus:ring-0"
              />
            </div>
            <div>
              <label className="block mb-1.5 text-xs uppercase tracking-[0.2em] text-taupe/70" htmlFor="email">
                Email <span className="text-taupe">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="your@email.com"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-cream placeholder:text-cream/30 focus:border-taupe/50 focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1.5 text-xs uppercase tracking-[0.2em] text-taupe/70" htmlFor="eventDate">
              Event Date <span className="text-cream/30">(optional)</span>
            </label>
            <input
              id="eventDate"
              type="date"
              value={form.eventDate}
              onChange={(e) => setForm((f) => ({ ...f, eventDate: e.target.value }))}
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-cream placeholder:text-cream/30 focus:border-taupe/50 focus:outline-none focus:ring-0"
            />
          </div>

          <div>
            <label className="block mb-1.5 text-xs uppercase tracking-[0.2em] text-taupe/70" htmlFor="notes">
              Anything else
            </label>
            <textarea
              id="notes"
              rows={3}
              value={form.notes}
              onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
              placeholder="Event type, venue, anything we should know..."
              className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-cream placeholder:text-cream/30 focus:border-taupe/50 focus:outline-none focus:ring-0"
            />
          </div>

          <p className="text-[0.7rem] text-cream/35">
            Clicking &quot;Send Enquiry&quot; will open your email client with your quote pre-filled and ready to send.
          </p>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center rounded-full bg-cream px-7 py-3 text-sm font-medium text-brand transition-colors hover:bg-sand"
          >
            Send Enquiry
          </button>
        </form>
      </section>

      {/* ── OR just use the form ── */}
      <div className="mt-6 text-center">
        <p className="text-sm text-cream/40">or</p>
        <a
          href={corporateBookingLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1.5 text-sm text-cream/60 underline underline-offset-4 transition-colors hover:text-cream"
        >
          Use the enquiry form instead
        </a>
      </div>

    </div>
  );
}

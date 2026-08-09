import Link from "next/link";
import Logo from "@/app/components/Logo";
import {
  brand,
  corporateIntro,
  corporateSubIntro,
  corporateEventTypes,
  corporateBaseRates,
  corporateBaseIncludes,
  corporateEditing,
  corporateAddons,
  corporateBookingLink,
} from "@/app/lib/content";

export const metadata = {
  title: "Corporate Events",
  description: "Professional event content coverage. Transparent day rates, editing, and add-on pricing.",
};

export default function CorporatePage() {
  return (
    <>
      <main className="flex flex-1 flex-col px-6 py-10">
        {/* Top bar */}
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-cream"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M13 8H3M7 4L3 8l4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back
          </Link>
          <Link href="/">
            <Logo size={80} />
          </Link>
        </div>

        {/* Header */}
        <header className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-taupe">
            Tarsh Creative Corporate Events
          </p>
          <p className="mt-3 text-xs text-cream/45 tracking-wide">
            {corporateEventTypes}
          </p>
          <p className="mt-5 text-balance text-lg leading-relaxed text-cream/75">
            {corporateIntro}
          </p>
          <p className="mt-2 text-base text-cream/50">
            {corporateSubIntro}
          </p>
        </header>

        {/* Base Rates */}
        <section className="mx-auto mt-14 w-full max-w-3xl">
          <h2 className="text-center text-xs uppercase tracking-[0.28em] text-taupe/70 mb-6">
            Content Capture
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {corporateBaseRates.map((rate) => (
              <div
                key={rate.name}
                className="flex flex-col rounded-2xl border border-white/15 bg-white/10 p-8"
              >
                <span className="font-display text-2xl font-light text-cream">{rate.name}</span>
                <span className="mt-1 text-sm text-cream/55">{rate.duration}</span>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-4xl text-cream">{rate.price}</span>
                  <span className="text-sm text-cream/55">{rate.cadence}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Base includes */}
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

        {/* Editing & Post-Production */}
        <section className="mx-auto mt-12 w-full max-w-3xl">
          <h2 className="text-center text-xs uppercase tracking-[0.28em] text-taupe/70 mb-6">
            Editing & Post-Production
          </h2>
          <div className="rounded-2xl border border-white/15 bg-white/10 divide-y divide-white/10">
            {corporateEditing.map((item) => (
              <div key={item.label} className="flex items-center justify-between px-7 py-4 gap-4">
                <span className="text-sm text-cream/80">{item.label}</span>
                <div className="text-right shrink-0">
                  <span className="text-sm font-medium text-cream">{item.price}</span>
                  {item.note && (
                    <span className="block text-xs text-cream/45">{item.note}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Add-ons */}
        <section className="mx-auto mt-10 w-full max-w-3xl">
          <h2 className="text-center text-xs uppercase tracking-[0.28em] text-taupe/70 mb-6">
            Add-Ons
          </h2>
          <div className="rounded-2xl border border-white/15 bg-white/10 divide-y divide-white/10">
            {corporateAddons.map((item) => (
              <div key={item.label} className="flex items-center justify-between px-7 py-4 gap-4">
                <span className="text-sm text-cream/80">{item.label}</span>
                <span className="text-sm font-medium text-cream shrink-0">{item.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="mx-auto mt-16 max-w-2xl text-center">
          <p className="font-display text-2xl font-light italic text-cream">
            Ready to lock in your event? Let&apos;s chat.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={corporateBookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-cream px-7 py-3 text-sm font-medium text-brand transition-colors hover:bg-sand"
            >
              Enquiry Form
            </a>
            <a
              href={brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-cream transition-colors hover:border-white/60"
            >
              Message on Instagram
            </a>
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t border-white/10 px-6 py-4">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 text-xs text-cream/40">
          <p>© 2024 GA Productions Pty Ltd · ABN 72 682 945 142</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-cream">{brand.instagramHandle}</a>
            <span>·</span>
            <a href={`mailto:${brand.email}`} className="transition-colors hover:text-cream">{brand.email}</a>
          </div>
        </div>
      </footer>
    </>
  );
}

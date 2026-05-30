import Link from "next/link";
import Logo from "@/app/components/Logo";
import { brand, type Package } from "@/app/lib/content";

type PricingPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  packages: Package[];
  notes?: string[];
};

export default function PricingPage({
  eyebrow,
  title,
  intro,
  packages,
  notes,
}: PricingPageProps) {
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
          <p className="text-xs uppercase tracking-[0.32em] text-taupe">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-display text-5xl font-light text-cream">
            {title}
          </h1>
          <p className="mt-5 text-balance text-lg leading-relaxed text-cream/75">
            {intro}
          </p>
        </header>

        {/* Packages */}
        <section className={`mx-auto mt-14 grid w-full gap-6 ${packages.length === 4 ? "max-w-6xl sm:grid-cols-2 xl:grid-cols-4" : "max-w-5xl md:grid-cols-3"}`}>
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all duration-300 ${
                pkg.featured
                  ? "border-cream/40 bg-cream text-brand shadow-[0_24px_60px_-24px_rgba(0,0,0,0.5)] md:-translate-y-3"
                  : "border-white/15 bg-white/10 text-cream hover:border-white/30 hover:bg-white/20"
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-taupe px-4 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-cream">
                  Most popular
                </span>
              )}

              <h2
                className={`font-display text-2xl font-light ${
                  pkg.featured ? "text-brand" : "text-cream"
                }`}
              >
                {pkg.name}
              </h2>
              <p
                className={`mt-1 text-sm ${
                  pkg.featured ? "text-brand/70" : "text-cream/60"
                }`}
              >
                {pkg.description}
              </p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-display text-4xl">{pkg.price}</span>
                {pkg.cadence && (
                  <span
                    className={`text-sm ${
                      pkg.featured ? "text-brand/60" : "text-cream/55"
                    }`}
                  >
                    {pkg.cadence}
                  </span>
                )}
              </div>

              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="mt-0.5 shrink-0 text-taupe"
                      aria-hidden
                    >
                      <path
                        d="M3 8.5l3 3 7-7"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className={pkg.featured ? "text-brand/85" : "text-cream/80"}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={brand.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-7 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                  pkg.featured
                    ? "bg-brand text-cream hover:bg-brand-deep"
                    : "bg-cream text-brand hover:bg-sand"
                }`}
              >
                Book Now
              </a>
            </div>
          ))}
        </section>

        {/* Additional notes */}
        {notes && notes.length > 0 && (
          <div className="mx-auto mt-8 max-w-6xl text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-taupe/80">
              {notes.join(" · ")}
            </p>
          </div>
        )}

        {/* Closing CTA */}
        <section className="mx-auto mt-16 max-w-2xl text-center">
          <p className="font-display text-2xl font-light italic text-cream">
            Not sure which package fits? Let&apos;s chat.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={brand.bookingLink}
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
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-cream">{brand.instagramHandle}</a>
            <span>·</span>
            <a href={`mailto:${brand.email}`} className="transition-colors hover:text-cream">{brand.email}</a>
            <span>·</span>
            <span>{brand.location}</span>
          </div>
        </div>
      </footer>
    </>
  );
}

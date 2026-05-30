import Link from "next/link";
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
    <div className="min-h-screen flex flex-col bg-navy text-cream">
      <main className="flex flex-1 flex-col px-6 py-10">
        {/* Top bar */}
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-cream"
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
          <Link
            href="/"
            className="font-display text-xl tracking-wide text-chartreuse"
          >
            {brand.name}
          </Link>
        </div>

        {/* Header */}
        <header className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-cream/50">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-display text-5xl font-light text-cream">
            {title}
          </h1>
          <p className="mt-5 text-balance text-lg leading-relaxed text-cream/70">
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
                  ? "border-chartreuse bg-chartreuse text-navy shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)] md:-translate-y-3"
                  : "border-cream/10 bg-white/5 hover:border-chartreuse/30 hover:bg-white/10"
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-navy px-4 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-chartreuse">
                  Most popular
                </span>
              )}

              <h2
                className={`font-display text-2xl font-light ${
                  pkg.featured ? "text-navy" : "text-cream"
                }`}
              >
                {pkg.name}
              </h2>
              <p
                className={`mt-1 text-sm ${
                  pkg.featured ? "text-navy/70" : "text-cream/50"
                }`}
              >
                {pkg.description}
              </p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className={`font-display text-4xl ${pkg.featured ? "text-navy" : "text-chartreuse"}`}>
                  {pkg.price}
                </span>
                {pkg.cadence && (
                  <span
                    className={`text-sm ${
                      pkg.featured ? "text-navy/60" : "text-cream/40"
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
                      className={`mt-0.5 shrink-0 ${
                        pkg.featured ? "text-navy" : "text-chartreuse"
                      }`}
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
                      className={pkg.featured ? "text-navy/80" : "text-cream/70"}
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
                    ? "bg-navy text-chartreuse hover:bg-navy/80"
                    : "bg-chartreuse text-navy hover:bg-chartreuse/80"
                }`}
              >
                Enquire
              </a>
            </div>
          ))}
        </section>

        {/* Additional notes */}
        {notes && notes.length > 0 && (
          <div className="mx-auto mt-8 max-w-6xl text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-cream/30">
              {notes.join(" · ")}
            </p>
          </div>
        )}

        {/* Closing CTA */}
        <section className="mx-auto mt-16 max-w-2xl text-center">
          <p className="font-display text-2xl font-light italic text-cream">
            Not sure which package fits? Let&apos;s chat.
          </p>
          <p className="mt-3 text-cream/60">
            Every booking is a little different — tell me your date, location and
            what you&apos;re after, and I&apos;ll tailor a quote.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={brand.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-chartreuse px-7 py-3 text-sm font-medium text-navy transition-colors hover:bg-chartreuse/80"
            >
              Get a quote
            </a>
            <a
              href={brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-cream/20 px-7 py-3 text-sm font-medium text-cream transition-colors hover:border-cream/50"
            >
              Message on Instagram
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-cream/10 px-6 py-10 text-center text-sm text-cream/40">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-3">
          <p className="font-display text-xl tracking-wide text-cream/80">
            {brand.name}
          </p>
          <p>{brand.location}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a
              href={brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-cream"
            >
              {brand.instagramHandle}
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="transition-colors hover:text-cream"
            >
              {brand.email}
            </a>
          </div>
          <p className="mt-2 text-xs text-cream/20">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

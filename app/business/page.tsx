import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/app/components/Logo";
import { brand } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Business Content",
  description:
    "Business and brand social media content packages and subscriptions. Darwin based, servicing Australia wide.",
};

const choices = [
  {
    href: "/business/packages",
    eyebrow: "One-off",
    title: "Packages",
    description: "A single shoot with everything delivered. Perfect for launching or refreshing your brand content.",
  },
  {
    href: "/business/subscriptions",
    eyebrow: "Recurring",
    title: "Subscriptions",
    description: "Consistent monthly content so your brand never runs dry. No brief needed.",
  },
] as const;

export default function BusinessPage() {
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
            Tarsh Creative Business Content
          </p>
          <p className="mt-5 text-balance text-lg leading-relaxed text-cream/75">
            Make your brand impossible to scroll past.
          </p>
        </header>

        {/* Choices */}
        <div className="mx-auto mt-10 grid w-full max-w-3xl gap-5 sm:grid-cols-2">
          {choices.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className={`group relative flex flex-col rounded-2xl border p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_-24px_rgba(0,0,0,0.4)] ${
                  c.href === "/business/subscriptions"
                    ? "border-taupe/20 bg-taupe/10 hover:border-taupe/40 hover:bg-taupe/20"
                    : "border-white/15 bg-white/10 hover:border-white/30 hover:bg-white/20"
                }`}
            >
              <span className="text-[0.7rem] uppercase tracking-[0.3em] text-taupe">
                {c.eyebrow}
              </span>
              <span className="mt-2 font-display text-3xl font-light text-cream">
                {c.title}
              </span>
              <span className="mt-3 text-sm leading-relaxed text-cream/70">
                {c.description}
              </span>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cream">
                View prices
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <section className="mx-auto mt-12 max-w-2xl text-center">
          <p className="font-display text-2xl font-light italic text-cream">
            Not sure which suits you? Let&apos;s chat.
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

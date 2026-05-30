import Link from "next/link";
import Logo from "@/app/components/Logo";
import Footer from "@/app/components/Footer";
import { brand } from "@/app/lib/content";

const choices = [
  {
    href: "/wedding",
    eyebrow: "For couples",
    title: "Wedding Content",
    description:
      "4 to 9 hours of coverage — ceremony edits, highlight reels, and same-day teasers. For modern couples wanting to relive the feeling, not just the timeline.",
  },
  {
    href: "/business",
    eyebrow: "For brands",
    title: "Business Content",
    description:
      "On-location shoots with edited videos and a full content library — for new businesses starting out to established brands wanting to level up.",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-navy text-cream">
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        {/* Hero */}
        <div className="flex flex-col items-center text-center">
          <Logo size={148} />

          <h1 className="mt-8 font-display text-5xl font-light tracking-wide text-chartreuse sm:text-6xl">
            {brand.name}
          </h1>
          <p className="mt-3 text-xs uppercase tracking-[0.42em] text-cream/50">
            {brand.tagline}
          </p>

          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-cream/70">
            {brand.blurb}
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-cream/40">
            {brand.location}
          </p>
        </div>

        {/* The two choices */}
        <div className="mt-14 grid w-full max-w-3xl gap-5 sm:grid-cols-2">
          {choices.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group relative flex flex-col rounded-2xl border border-cream/10 bg-white/5 p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:border-chartreuse/40 hover:bg-white/10 hover:shadow-[0_22px_50px_-24px_rgba(0,0,0,0.6)]"
            >
              <span className="text-[0.7rem] uppercase tracking-[0.3em] text-cream/40">
                {c.eyebrow}
              </span>
              <span className="mt-2 font-display text-3xl font-light text-cream">
                {c.title}
              </span>
              <span className="mt-3 text-sm leading-relaxed text-cream/60">
                {c.description}
              </span>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-chartreuse">
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

        <a
          href={brand.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 text-sm tracking-wide text-cream/40 underline-offset-4 transition-colors hover:text-cream hover:underline"
        >
          See recent work on Instagram {brand.instagramHandle}
        </a>
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

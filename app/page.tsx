import Link from "next/link";
import Logo from "@/app/components/Logo";
import { brand } from "@/app/lib/content";

const choices = [
  {
    href: "/wedding",
    eyebrow: "For couples",
    title: "Wedding Content",
    description: "Relive the feeling, not just the timeline.",
  },
  {
    href: "/business",
    eyebrow: "For brands",
    title: "Business Content",
    description: "Content that makes your brand impossible to scroll past.",
  },
] as const;

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        {/* Hero */}
        <div className="flex flex-col items-center text-center">
          <Logo size={300} />

          <p className="mt-6 text-xs uppercase tracking-[0.42em] text-cream/60">
            {brand.tagline}
          </p>

          <p className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-cream/75">
            {brand.blurb}
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-taupe">
            {brand.location}
          </p>
        </div>

        {/* The two choices */}
        <div className="mt-14 grid w-full max-w-3xl gap-5 sm:grid-cols-2">
          {choices.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group relative flex flex-col rounded-2xl border border-white/15 bg-white/10 p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/20 hover:shadow-[0_22px_50px_-24px_rgba(0,0,0,0.4)]"
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
      </main>

      <footer className="mt-auto border-t border-white/10 px-6 py-10 text-center text-sm text-cream/70">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-3">
          <p className="font-display text-xl tracking-wide text-cream">
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
          <p className="mt-2 text-xs text-cream/40">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

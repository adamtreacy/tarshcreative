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
    description: "Make your brand impossible to scroll past.",
  },
  {
    href: "/corporate",
    eyebrow: "For events",
    title: "Corporate Events",
    description: "For the socials, the board and the ATO.",
  },
] as const;

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        {/* Hero */}
        <div className="flex flex-col items-center text-center">
          <Logo size={416} className="w-[160px] sm:w-[224px] lg:w-[416px] -mt-[76px] sm:-mt-[106px] lg:-mt-[198px] -mb-[72px] sm:-mb-[104px] lg:-mb-[196px]" />

          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-taupe text-center">
            <span>Darwin Based<span className="hidden sm:inline"> ·</span></span>
            <br className="sm:hidden" />
            <span className="sm:ml-2">Servicing Australia Wide</span>
          </p>
        </div>

        {/* The two choices */}
        <div className="mt-8 grid w-full max-w-5xl gap-5 sm:grid-cols-3">
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

        {/* CTA */}
        <section className="mx-auto mt-12 max-w-2xl text-center">
          <p className="font-display text-2xl font-light italic text-cream">
            Looking for a different content type? Let&apos;s chat.
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

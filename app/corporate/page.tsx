import Link from "next/link";
import Logo from "@/app/components/Logo";
import CorporateQuoteBuilder from "@/app/components/CorporateQuoteBuilder";
import { brand, corporateEventTypes, corporateIntro } from "@/app/lib/content";

export const metadata = {
  title: "Corporate Events",
  description: "Professional event content coverage. Build your quote and send an enquiry in minutes.",
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
          <p className="mt-4 font-display text-2xl font-light text-cream/85">
            {corporateEventTypes}
          </p>
          <p className="mt-3 text-sm text-cream/55">{corporateIntro}</p>
        </header>

        {/* Interactive Quote Builder */}
        <CorporateQuoteBuilder />
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

import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/app/components/Logo";
import EnquiryForm from "@/app/components/EnquiryForm";
import { brand } from "@/app/lib/content";
import { forms, isFormKind } from "@/app/lib/forms";

export const metadata: Metadata = {
  title: "Enquire",
  description: "Get in touch with Tarsh Creative about wedding or business content. I'll be in touch within 48 hours.",
};

type Search = { type?: string; package?: string; note?: string };

export default async function EnquirePage({ searchParams }: { searchParams: Promise<Search> }) {
  const sp = await searchParams;
  const kind = isFormKind(sp.type) ? sp.type : null;
  const def = forms[kind ?? "general"];

  // Carry a chosen package (or plan) into the form
  const preset: Record<string, string> = {};
  if (sp.package && def.fields.find((f) => f.name === "package")?.options?.includes(sp.package)) {
    preset.package = sp.package;
  }
  if (sp.note) {
    const target = def.fields.find((f) => f.kind === "textarea");
    if (target) preset[target.name] = sp.note.slice(0, 300);
  }

  return (
    <>
      <main className="flex flex-1 flex-col px-6 py-10">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-cream"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </Link>
          <Link href="/">
            <Logo size={80} />
          </Link>
        </div>

        <header className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-taupe">Enquire</p>
          <h1 className="mt-5 text-balance font-display text-4xl font-light text-cream sm:text-5xl">Let&apos;s work together</h1>
          <p className="mt-5 text-balance text-lg leading-relaxed text-cream/75">
            Tell me a little about what you&apos;re after. No pressure, no essay required. I&apos;ll be in touch within 48 hours.
          </p>
        </header>

        <section className="mx-auto mt-12 w-full max-w-2xl">
          <EnquiryForm key={(kind ?? "") + (sp.package ?? "") + (sp.note ?? "")} initialKind={kind} preset={preset} />
        </section>
      </main>

      <footer className="mt-auto border-t border-white/10 px-6 py-4">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 text-xs text-cream/40">
          <p>© 2024 GA Productions Pty Ltd · ABN 72 682 945 142</p>
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

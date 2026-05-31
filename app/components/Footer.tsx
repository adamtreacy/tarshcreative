import { brand } from "@/app/lib/content";

export default function Footer() {
  return (
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
  );
}

import { brand } from "@/app/lib/content";

export default function Footer() {
  return (
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
  );
}

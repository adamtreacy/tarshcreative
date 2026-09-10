"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { brand } from "@/app/lib/content";

/** Quiet at the top of the page, solid once you start scrolling. */
export default function WeddingHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-ink/10 bg-[#FBF9F5]/90 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[86rem] items-center justify-between px-6 py-3.5 md:px-10">
        <Link href="/" aria-label="Tarsh Creative home" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Tarsh Creative"
            width={54}
            height={68}
            priority
            className="h-9 w-auto mix-blend-multiply"
          />
        </Link>

        <nav className="flex items-center gap-6 text-[0.68rem] uppercase tracking-[0.24em] text-ink/60">
          <a
            href={brand.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden transition-colors hover:text-ink sm:inline"
          >
            Instagram
          </a>
          <a
            href="#packages"
            className="hidden transition-colors hover:text-ink sm:inline"
          >
            Packages
          </a>
          <a
            href="#enquire"
            className="rounded-full border border-ink/25 px-5 py-2 transition-colors hover:border-ink hover:bg-ink hover:text-[#FBF9F5]"
          >
            Enquire
          </a>
        </nav>
      </div>
    </header>
  );
}

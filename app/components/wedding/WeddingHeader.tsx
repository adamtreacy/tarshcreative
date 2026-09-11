"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { brand } from "@/app/lib/content";

const otherServices = [
  {
    href: "/business/packages",
    title: "Business Content",
    description: "Make your brand impossible to scroll past.",
  },
  {
    href: "/business/subscriptions",
    title: "Content Subscriptions",
    description: "Monthly content, shot and delivered.",
  },
  {
    href: "/corporate",
    title: "Corporate Events",
    description: "For the socials, the board and the ATO.",
  },
] as const;

/** Quiet at the top of the page, solid once you start scrolling. */
export default function WeddingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the other services menu on an outside click or Escape.
  useEffect(() => {
    if (!openMenu) return;
    const onDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpenMenu(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [openMenu]);

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

          {/* Business and corporate live behind this. Deliberately visible on
              mobile, unlike the links above, or a phone could not reach them. */}
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setOpenMenu((v) => !v)}
              aria-expanded={openMenu}
              aria-haspopup="menu"
              className="inline-flex items-center gap-1.5 uppercase tracking-[0.24em] transition-colors hover:text-ink"
            >
              Business
              <svg
                width="9"
                height="9"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden
                className={`transition-transform duration-200 ${openMenu ? "rotate-180" : ""}`}
              >
                <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {openMenu && (
              <div
                role="menu"
                className="fixed inset-x-4 top-[3.9rem] z-50 overflow-hidden rounded-xl border border-ink/10 bg-[#FBF9F5] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] sm:absolute sm:inset-x-auto sm:right-0 sm:top-full sm:mt-3 sm:w-60"
              >
                {otherServices.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    onClick={() => setOpenMenu(false)}
                    className="block border-b border-ink/5 px-5 py-3.5 last:border-b-0 transition-colors hover:bg-ink/5"
                  >
                    <span className="block text-[0.7rem] uppercase tracking-[0.2em] text-ink/80">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-[0.72rem] normal-case tracking-normal text-ink/45">
                      {item.description}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
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

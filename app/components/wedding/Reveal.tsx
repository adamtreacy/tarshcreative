"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Milliseconds to wait once it enters view, for gentle stagger */
  delay?: number;
};

/** Fades and lifts its children into place the first time they scroll into view. */
export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    let fired = false;
    let timer = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        fired = true;
        if (entry.isIntersecting) {
          timer = window.setTimeout(() => setShown(true), delay);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    observer.observe(el);

    // Safety net: if the observer never reports at all, show the content
    // anyway. Nothing on this page is allowed to stay invisible.
    const failsafe = window.setTimeout(() => {
      if (!fired) setShown(true);
    }, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      window.clearTimeout(failsafe);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

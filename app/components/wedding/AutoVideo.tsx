"use client";

import { useEffect, useRef, useState } from "react";

type AutoVideoProps = {
  src: string;
  poster?: string;
  className?: string;
};

/**
 * A silent looping clip that only plays while it is on screen, so a page
 * full of wedding footage does not melt a phone battery.
 */
export default function AutoVideo({ src, poster, className = "" }: AutoVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      onLoadedData={() => setReady(true)}
      className={`h-full w-full object-cover transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"} ${className}`}
    />
  );
}

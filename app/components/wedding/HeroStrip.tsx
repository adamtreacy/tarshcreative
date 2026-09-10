import Media from "@/app/components/wedding/Media";
import type { MediaSlot } from "@/app/lib/wedding";

/**
 * The row of portrait moments under the headline. Five clips on a desktop,
 * a swipeable row on a phone. Every second one sits slightly lower so the
 * strip reads as a scattered set of moments rather than a grid.
 */
export default function HeroStrip({ clips }: { clips: MediaSlot[] }) {
  return (
    <div className="relative w-full">
      <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-4 sm:gap-4 md:justify-center md:overflow-visible md:px-8 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {clips.map((clip, i) => (
          <div
            key={clip.file}
            className={`w-[58vw] shrink-0 snap-center sm:w-[38vw] md:w-auto md:flex-1 md:max-w-[16rem] ${
              i % 2 === 1 ? "md:translate-y-8" : ""
            }`}
          >
            <Media
              slot={clip}
              className="aspect-[9/16] w-full rounded-[2px] shadow-[0_30px_60px_-40px_rgba(31,36,41,0.55)]"
              sizes="(max-width: 768px) 58vw, 16rem"
              priority={i < 2}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

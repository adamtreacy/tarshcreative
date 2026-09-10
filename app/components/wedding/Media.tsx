import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import AutoVideo from "@/app/components/wedding/AutoVideo";
import type { MediaSlot } from "@/app/lib/wedding";

const MEDIA_DIR = path.join(process.cwd(), "public", "wedding");

function has(file?: string) {
  if (!file) return false;
  try {
    return fs.existsSync(path.join(MEDIA_DIR, file));
  } catch {
    return false;
  }
}

type MediaProps = {
  slot: MediaSlot;
  /** Tailwind aspect class, eg aspect-[9/16] */
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Renders whatever is in public/wedding/ for this slot. If the file is not
 * there yet it draws a quiet placeholder instead, so the layout still reads
 * exactly as designed while the footage is being chosen.
 */
export default function Media({ slot, className = "", priority = false, sizes = "(max-width: 768px) 90vw, 40vw" }: MediaProps) {
  const exists = has(slot.file);
  const posterExists = has(slot.poster);

  return (
    <div className={`relative overflow-hidden bg-[#EDE6DB] ${className}`}>
      {exists && slot.kind === "video" && (
        <AutoVideo
          src={`/wedding/${slot.file}`}
          poster={posterExists ? `/wedding/${slot.poster}` : undefined}
        />
      )}

      {exists && slot.kind === "image" && (
        <Image
          src={`/wedding/${slot.file}`}
          alt={slot.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      )}

      {!exists && <Placeholder slot={slot} />}
    </div>
  );
}

function Placeholder({ slot }: { slot: MediaSlot }) {
  const showFileName = process.env.NODE_ENV === "development";

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[linear-gradient(150deg,#F1EAE0_0%,#E4D9C8_55%,#D9CDBA_100%)] p-6 text-center">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-[#8C7F6C]" aria-hidden>
        <rect x="2.5" y="6" width="14" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.1" />
        <path d="M16.5 11l5-2.6v7.2l-5-2.6z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
      </svg>
      <p className="font-display text-lg font-light leading-snug text-[#6F6353]">{slot.label}</p>
      {showFileName && (
        <p className="text-[0.6rem] uppercase tracking-[0.2em] text-[#8C7F6C]">
          public/wedding/{slot.file}
        </p>
      )}
    </div>
  );
}

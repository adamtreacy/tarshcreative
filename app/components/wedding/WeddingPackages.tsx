import Reveal from "@/app/components/wedding/Reveal";
import { brand, type Package } from "@/app/lib/content";

/**
 * The prices, kept deliberately quiet: no boxes shouting for attention,
 * no table. Just three columns of type on paper.
 */
export default function WeddingPackages({
  packages,
  notes,
}: {
  packages: Package[];
  notes?: string[];
}) {
  return (
    <>
      <div className="mt-14 grid gap-px overflow-hidden rounded-[3px] bg-ink/10 sm:mt-20 lg:grid-cols-3">
        {packages.map((pkg, i) => (
          <Reveal key={pkg.name} delay={i * 90} className="h-full">
            <div
              className={`flex h-full flex-col p-8 sm:p-10 ${
                pkg.featured ? "bg-[#F4EDE2]" : "bg-[#FBF9F5]"
              }`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-3xl font-light text-ink">{pkg.name}</h3>
                {pkg.featured && (
                  <span className="font-display text-sm italic text-[#8C7F6C]">
                    Most booked
                  </span>
                )}
              </div>

              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-ink/45">
                {pkg.description}
              </p>

              <div className="mt-8 flex items-baseline gap-2 border-b border-ink/10 pb-8">
                <span className="font-display text-[2.75rem] font-light leading-none text-ink">
                  {pkg.price}
                </span>
                {pkg.cadence && (
                  <span className="text-xs uppercase tracking-[0.18em] text-ink/40">
                    {pkg.cadence}
                  </span>
                )}
              </div>

              <ul className="mt-8 flex-1 space-y-4 text-[0.95rem] leading-relaxed text-ink/70">
                {pkg.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="mt-[0.6em] h-px w-4 shrink-0 bg-[#B7A892]" aria-hidden />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={pkg.bookingLink ?? brand.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-10 inline-flex items-center justify-center rounded-full px-7 py-3.5 text-xs uppercase tracking-[0.22em] transition-colors ${
                  pkg.featured
                    ? "bg-ink text-[#FBF9F5] hover:bg-[#214960]"
                    : "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-[#FBF9F5]"
                }`}
              >
                Enquire
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      {notes && notes.length > 0 && (
        <p className="mt-8 text-center text-xs uppercase tracking-[0.2em] text-ink/40">
          {notes.join("  ·  ")}
        </p>
      )}
    </>
  );
}

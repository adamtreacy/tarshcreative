import type { Metadata } from "next";
import Media from "@/app/components/wedding/Media";
import Reveal from "@/app/components/wedding/Reveal";
import HeroStrip from "@/app/components/wedding/HeroStrip";
import WeddingHeader from "@/app/components/wedding/WeddingHeader";
import WeddingPackages from "@/app/components/wedding/WeddingPackages";
import { brand, weddingPackages, weddingNotes } from "@/app/lib/content";
import {
  about,
  closing,
  faqs,
  hero,
  heroClips,
  offerings,
  packagesSection,
  storyBeats,
  testimonials,
  work,
} from "@/app/lib/wedding";

export const metadata: Metadata = {
  title: "Wedding Content",
  description:
    "Vertical wedding films and content, shot on professional cameras and delivered within days. Darwin based, servicing Australia wide.",
};

const Eyebrow = ({ children, tone = "dark" }: { children: React.ReactNode; tone?: "dark" | "light" }) => (
  <p
    className={`text-[0.68rem] uppercase tracking-[0.34em] ${
      tone === "dark" ? "text-[#8C7F6C]" : "text-cream/55"
    }`}
  >
    {children}
  </p>
);

export default function WeddingPage() {
  return (
    <div className="wedding-light w-full bg-[#FBF9F5] text-ink">
      <WeddingHeader />

      <main>
        {/* ── The top: the work before anything else ─────────────────────── */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 md:pb-24">
          <div className="mx-auto max-w-[86rem] px-6 md:px-10">
            <Reveal>
              <Eyebrow>
                {hero.eyebrow}
                <span className="mx-3 hidden text-ink/20 sm:inline">/</span>
                <span className="hidden sm:inline">{brand.location}</span>
              </Eyebrow>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-6 max-w-[15ch] font-display text-[clamp(2.9rem,8.5vw,7rem)] font-light leading-[0.95] tracking-[-0.01em] text-ink">
                {hero.headline}{" "}
                <span className="italic text-[#526B78]">{hero.headlineAccent}</span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-8 max-w-[46ch] text-[1.02rem] leading-relaxed text-ink/60 md:ml-auto md:mt-0 md:-translate-y-8">
                {hero.standfirst}
              </p>
            </Reveal>
          </div>

          <div className="mt-12 md:mt-16">
            <HeroStrip clips={heroClips} />
          </div>

          <div className="mx-auto mt-14 flex max-w-[86rem] items-center gap-4 px-6 md:mt-24 md:px-10">
            <span className="h-px flex-1 bg-ink/12" aria-hidden />
            <span className="text-[0.62rem] uppercase tracking-[0.3em] text-ink/35">
              {hero.scrollHint}
            </span>
          </div>
        </section>

        {/* ── The day, in order ──────────────────────────────────────────── */}
        <section className="pb-8">
          {storyBeats.map((beat, i) =>
            beat.shape === "wide" ? (
              <div key={beat.index} className="relative my-16 md:my-28">
                <Media
                  slot={beat.media}
                  className="aspect-[4/5] w-full sm:aspect-[16/9]"
                  sizes="100vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-14">
                  <div className="mx-auto max-w-[86rem]">
                    <Reveal>
                      <p className="text-[0.68rem] uppercase tracking-[0.34em] text-cream/70">
                        {beat.index}
                        <span className="mx-3">/</span>
                        {beat.eyebrow}
                      </p>
                      <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(2rem,5vw,3.8rem)] font-light leading-[1.02] text-cream">
                        {beat.title}
                      </h2>
                      <p className="mt-5 max-w-[52ch] text-[0.98rem] leading-relaxed text-cream/80">
                        {beat.body}
                      </p>
                    </Reveal>
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={beat.index}
                className="mx-auto grid max-w-[86rem] items-center gap-10 px-6 py-14 md:grid-cols-12 md:gap-16 md:px-10 md:py-20"
              >
                <Reveal
                  className={`md:col-span-5 ${i % 2 === 1 ? "md:order-2 md:col-start-8" : ""}`}
                >
                  <Media
                    slot={beat.media}
                    className="aspect-[4/5] w-full rounded-[2px] shadow-[0_40px_80px_-60px_rgba(31,36,41,0.7)]"
                    sizes="(max-width: 768px) 90vw, 40vw"
                  />
                </Reveal>

                <Reveal
                  delay={120}
                  className={`md:col-span-6 ${i % 2 === 1 ? "md:order-1 md:col-start-1" : "md:col-start-7"}`}
                >
                  <Eyebrow>
                    {beat.index}
                    <span className="mx-3 text-ink/20">/</span>
                    {beat.eyebrow}
                  </Eyebrow>
                  <h2 className="mt-5 max-w-[16ch] font-display text-[clamp(2rem,4.6vw,3.6rem)] font-light leading-[1.03] text-ink">
                    {beat.title}
                  </h2>
                  <p className="mt-6 max-w-[52ch] text-[1rem] leading-[1.85] text-ink/60">
                    {beat.body}
                  </p>
                </Reveal>
              </div>
            ),
          )}
        </section>

        {/* ── Meet Tarsh ─────────────────────────────────────────────────── */}
        <section className="bg-[#F4EDE2] py-20 md:py-28">
          <div className="mx-auto grid max-w-[86rem] items-center gap-12 px-6 md:grid-cols-12 md:gap-20 md:px-10">
            <Reveal className="md:col-span-5">
              <Media
                slot={about.media}
                className="aspect-[4/5] w-full rounded-[2px]"
                sizes="(max-width: 768px) 90vw, 40vw"
              />
            </Reveal>

            <Reveal delay={120} className="md:col-span-7">
              <Eyebrow>{about.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,4rem)] font-light leading-[1.02] text-ink">
                {about.title}
              </h2>
              <div className="mt-7 max-w-[54ch] space-y-5 text-[1rem] leading-[1.85] text-ink/65">
                {about.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <p className="mt-8 font-display text-2xl font-light italic text-[#526B78]">
                {about.signoff}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── What I actually do ─────────────────────────────────────────── */}
        <section className="bg-[#214960] py-20 text-cream md:py-28">
          <div className="mx-auto max-w-[86rem] px-6 md:px-10">
            <Reveal>
              <Eyebrow tone="light">{offerings.eyebrow}</Eyebrow>
              <h2 className="mt-5 max-w-[18ch] font-display text-[clamp(2.2rem,5vw,4rem)] font-light leading-[1.02] text-cream">
                {offerings.title}
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-x-14 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {offerings.items.map((item, i) => (
                <Reveal key={item.index} delay={i * 70}>
                  <div className="border-t border-cream/20 pt-6">
                    <p className="font-display text-sm italic text-cream/50">{item.index}</p>
                    <h3 className="mt-3 font-display text-2xl font-light text-cream">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-[1.8] text-cream/65">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── More work, then off to Instagram ───────────────────────────── */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-[86rem] px-6 md:px-10">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <Eyebrow>{work.eyebrow}</Eyebrow>
                  <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,4rem)] font-light leading-[1.02] text-ink">
                    {work.title}
                  </h2>
                  <p className="mt-4 max-w-[42ch] text-[0.98rem] leading-relaxed text-ink/55">
                    {work.body}
                  </p>
                </div>

                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.24em] text-ink/70 transition-colors hover:text-ink"
                >
                  {brand.instagramHandle}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
              {work.clips.map((clip, i) => (
                <Reveal key={clip.file} delay={i * 60}>
                  <a
                    href={brand.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <Media
                      slot={clip}
                      className="aspect-[9/16] w-full rounded-[2px] transition-opacity duration-500 group-hover:opacity-85"
                      sizes="(max-width: 768px) 45vw, 16vw"
                    />
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={150}>
              <div className="mt-12 text-center">
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-ink/25 px-8 py-3.5 text-[0.68rem] uppercase tracking-[0.24em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-[#FBF9F5]"
                >
                  {work.cta}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Kind words ─────────────────────────────────────────────────── */}
        {testimonials.length > 0 && (
          <section className="border-y border-ink/10 py-20 md:py-28">
            <div className="mx-auto grid max-w-[86rem] gap-14 px-6 md:grid-cols-2 md:gap-20 md:px-10">
              {testimonials.map((t, i) => (
                <Reveal key={t.couple + i} delay={i * 120}>
                  <figure>
                    <blockquote className="font-display text-[clamp(1.5rem,2.6vw,2.1rem)] font-light italic leading-[1.35] text-ink/85">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-6 text-[0.68rem] uppercase tracking-[0.28em] text-[#8C7F6C]">
                      {t.couple}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* ── Packages ───────────────────────────────────────────────────── */}
        <section id="packages" className="scroll-mt-24 bg-[#EFE7DA] py-20 md:py-28">
          <div className="mx-auto max-w-[86rem] px-6 md:px-10">
            <Reveal>
              <div className="max-w-[52ch]">
                <Eyebrow>{packagesSection.eyebrow}</Eyebrow>
                <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,4rem)] font-light leading-[1.02] text-ink">
                  {packagesSection.title}
                </h2>
                <p className="mt-5 text-[1rem] leading-[1.85] text-ink/60">
                  {packagesSection.body}
                </p>
              </div>
            </Reveal>

            <WeddingPackages packages={weddingPackages} notes={weddingNotes} />
          </div>
        </section>

        {/* ── Questions ──────────────────────────────────────────────────── */}
        <section className="py-20 md:py-28">
          <div className="mx-auto grid max-w-[86rem] gap-12 px-6 md:grid-cols-12 md:px-10">
            <Reveal className="md:col-span-4">
              <Eyebrow>Good to know</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3rem)] font-light leading-[1.05] text-ink">
                Your questions, answered
              </h2>
            </Reveal>

            <div className="md:col-span-8">
              {faqs.map((faq, i) => (
                <Reveal key={faq.q} delay={i * 70}>
                  <details className="group border-b border-ink/10 py-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl font-light text-ink marker:hidden">
                      {faq.q}
                      <span className="relative h-3 w-3 shrink-0" aria-hidden>
                        <span className="absolute inset-x-0 top-1/2 h-px bg-ink/50" />
                        <span className="absolute inset-y-0 left-1/2 w-px bg-ink/50 transition-transform duration-300 group-open:scale-y-0" />
                      </span>
                    </summary>
                    <p className="mt-4 max-w-[62ch] text-[0.98rem] leading-[1.85] text-ink/60">
                      {faq.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Enquire ────────────────────────────────────────────────────── */}
        <section id="enquire" className="scroll-mt-24 bg-[#214960] py-24 text-cream md:py-32">
          <div className="mx-auto max-w-[86rem] px-6 text-center md:px-10">
            <Reveal>
              <Eyebrow tone="light">{closing.eyebrow}</Eyebrow>
              <h2 className="mx-auto mt-6 max-w-[16ch] font-display text-[clamp(2.4rem,6vw,5rem)] font-light leading-[1.0] text-cream">
                {closing.title}
              </h2>
              <p className="mx-auto mt-6 max-w-[48ch] text-[1rem] leading-relaxed text-cream/65">
                {closing.body}
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={brand.bookingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-cream px-8 py-4 text-[0.68rem] uppercase tracking-[0.24em] text-[#214960] transition-colors hover:bg-sand"
                >
                  {closing.primary}
                </a>
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-cream/30 px-8 py-4 text-[0.68rem] uppercase tracking-[0.24em] text-cream transition-colors hover:border-cream"
                >
                  {closing.secondary}
                </a>
              </div>

              <p className="mt-10 text-[0.8rem] text-cream/45">
                Or email{" "}
                <a href={`mailto:${brand.email}`} className="underline underline-offset-4 transition-colors hover:text-cream">
                  {brand.email}
                </a>
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10 bg-[#FBF9F5] px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-[86rem] flex-wrap items-center justify-between gap-x-8 gap-y-3 text-[0.72rem] text-ink/40">
          <p>© 2024 GA Productions Pty Ltd · ABN 72 682 945 142</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
              {brand.instagramHandle}
            </a>
            <span aria-hidden>·</span>
            <a href={`mailto:${brand.email}`} className="transition-colors hover:text-ink">
              {brand.email}
            </a>
            <span aria-hidden>·</span>
            <span>{brand.location}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

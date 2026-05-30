import type { Metadata } from "next";
import PricingPage from "@/app/components/PricingPage";
import { weddingIntro, weddingPackages, weddingNotes } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Wedding Content & Prices",
  description:
    "Wedding social media content packages. Teasers, highlight reels and vertical short form clips of your day. Darwin based, servicing Australia wide.",
};

export default function WeddingPage() {
  return (
    <PricingPage
      eyebrow="Wedding Content Creation"
      title="Wedding Content"
      intro={weddingIntro}
      packages={weddingPackages}
      notes={weddingNotes}
    />
  );
}

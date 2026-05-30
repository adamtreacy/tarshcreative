import type { Metadata } from "next";
import PricingPage from "@/app/components/PricingPage";
import { weddingIntro, weddingPackages } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Wedding Content & Prices",
  description:
    "Wedding social media content packages — teasers, highlight reels and vertical short-form clips of your day. Darwin based, servicing Australia wide.",
};

export default function WeddingPage() {
  return (
    <PricingPage
      eyebrow="For couples"
      title="Wedding Content"
      intro={weddingIntro}
      packages={weddingPackages}
    />
  );
}

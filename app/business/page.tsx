import type { Metadata } from "next";
import PricingPage from "@/app/components/PricingPage";
import { businessIntro, businessPackages, businessNotes } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Business Content & Prices",
  description:
    "Business and brand social media content packages. On brand reels, photos and monthly content shoots. Darwin based, servicing Australia wide.",
};

export default function BusinessPage() {
  return (
    <PricingPage
      eyebrow="Tarsh Creative Business Packages"
      title="Business Content"
      intro={businessIntro}
      packages={businessPackages}
      notes={businessNotes}
    />
  );
}

import type { Metadata } from "next";
import PricingPage from "@/app/components/PricingPage";
import { businessIntro, businessPackages, businessNotes } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Business Content Packages",
  description:
    "One-off business and brand social media content packages. On brand reels, photos and content shoots. Darwin based, servicing Australia wide.",
};

export default function BusinessPackagesPage() {
  return (
    <PricingPage
      eyebrow="Tarsh Creative Business Packages"
      title="Business Packages"
      intro={businessIntro}
      packages={businessPackages}
      notes={businessNotes}
      backHref="/business"
    />
  );
}

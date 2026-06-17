import type { Metadata } from "next";
import PricingPage from "@/app/components/PricingPage";
import { subscriptionIntro, subscriptionPackages, subscriptionNotes } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Business Content Subscriptions",
  description:
    "Recurring monthly business content subscriptions. Consistent social media content for your brand every month. Darwin based, servicing Australia wide.",
};

export default function BusinessSubscriptionsPage() {
  return (
    <PricingPage
      eyebrow="Tarsh Creative Business Subscriptions"
      title="Business Subscriptions"
      intro={subscriptionIntro}
      packages={subscriptionPackages}
      notes={subscriptionNotes}
      backHref="/business"
      ctaLabel="Subscribe"
    />
  );
}

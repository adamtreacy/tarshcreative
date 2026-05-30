// ─────────────────────────────────────────────────────────────
//  Tarsh Creative — site content & pricing
//  Edit this file to update contact details and package prices.
//  Prices below are PLACEHOLDERS — swap in the real numbers.
// ─────────────────────────────────────────────────────────────

export const brand = {
  name: "Tarsh Creative",
  tagline: "Wedding & Business Content",
  location: "Darwin based · Servicing Australia wide",
  blurb:
    "Scroll-stopping social media content for weddings and brands, captured on professional equipment — and edited to feel like you.",
  instagram: "https://instagram.com/tarshcreative",
  instagramHandle: "@tarshcreative",
  email: "tarshcreative@ga-productions.com",
};

export type Package = {
  name: string;
  price: string;
  cadence?: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export const weddingIntro =
  "For modern couples wanting to relive the feeling; not just the timeline.";

export const weddingNotes = [
  "Additional coverage available at $120/hr",
  "Recording of vows and speeches at extra cost",
  "Travel fees may apply",
];

export const weddingPackages: Package[] = [
  {
    name: "The Basics",
    price: "$970",
    cadence: "+ GST",
    description: "4 hours coverage",
    features: [
      "Pre wedding consultation",
      "Up to 4 hrs coverage",
      "1x 30–60 second ceremony edit",
    ],
  },
  {
    name: "The Essentials",
    price: "$1,350",
    cadence: "+ GST",
    description: "5 hours coverage",
    features: [
      "Pre wedding consultation",
      "Up to 5 hrs capturing",
      "1x 15–30 second highlight edit (within 24 hrs)",
      "1x 30–60 second ceremony edit",
    ],
  },
  {
    name: "The Ultimate",
    price: "$1,940",
    cadence: "+ GST",
    description: "7 hours coverage",
    features: [
      "Pre wedding consultation",
      "Up to 7 hrs capturing",
      "1x 15–30 second highlight edit (within 24 hrs)",
      "1x 30–60 second pre-wedding bridal party edit",
      "1x 30–60 second ceremony edit",
    ],
    featured: true,
  },
  {
    name: "The Full Story",
    price: "$3,400",
    cadence: "+ GST",
    description: "9 hours coverage",
    features: [
      "Pre wedding consultation",
      "Up to 9 hrs capturing",
      "1x 15–30 second highlight edit (within 24 hrs)",
      "1x 30–60 second pre-wedding bridal party edit",
      "1x 30–60 second ceremony edit",
      "1x 30–60 second reception edit",
      "1x 30–60 second 'Bride's Choice' edit",
      "Private link to all content",
      "All content delivered within 7 days",
    ],
  },
];

export const businessIntro =
  "Consistent, on-brand content that does the heavy lifting on socials — without you having to be behind (or in front of) the camera. Built for businesses that want to show up online and actually look the part.";

export const businessNotes = [
  "Need something different? Custom packages and add-ons available",
];

export const businessPackages: Package[] = [
  {
    name: "Package One",
    price: "$870",
    cadence: "+ GST",
    description: "Perfect for new or small businesses starting out.",
    features: [
      "30 minute planning call",
      "1 hr on location shoot",
      "Full content library delivered for ongoing use",
    ],
  },
  {
    name: "Package Two",
    price: "$1,200",
    cadence: "+ GST",
    description: "For growing businesses needing consistent content.",
    features: [
      "30 minute planning call",
      "2 hour on location shoot",
      "2x edited videos (20–35 sec)",
      "Full content library delivered for ongoing use",
    ],
    featured: true,
  },
  {
    name: "Package Three",
    price: "$1,530",
    cadence: "+ GST",
    description: "Perfect for established brands wanting to level up.",
    features: [
      "30 minute planning call",
      "3 hr on location shoot",
      "2x edited videos (10–35 sec)",
      "25 high res images",
      "Full content library delivered for ongoing use",
    ],
  },
];

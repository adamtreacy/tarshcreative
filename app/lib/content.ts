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
  email: "hello@tarshcreative.com", // TODO: confirm real enquiry email
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
  "Your day, captured for the way you actually relive it — vertical, cinematic, ready to share. Same-day teasers, full highlight reels and all the in-between moments your photographer can't be everywhere for.";

export const weddingPackages: Package[] = [
  {
    name: "The Elopement",
    price: "$POA",
    description: "Intimate ceremonies & small celebrations.",
    features: [
      "Up to 3 hours of coverage",
      "1 × 60–90s social highlight reel",
      "3–5 vertical short-form clips",
      "Delivered within 2 weeks",
    ],
  },
  {
    name: "The Celebration",
    price: "$POA",
    description: "Our most-loved full-day wedding package.",
    features: [
      "Up to 8 hours of coverage",
      "Same-day / next-day teaser reel",
      "1 × 2–3 min highlight film",
      "8–10 vertical short-form clips",
      "Getting-ready to first-dance",
      "Delivered within 3 weeks",
    ],
    featured: true,
  },
  {
    name: "The Full Story",
    price: "$POA",
    description: "Multi-day & destination celebrations.",
    features: [
      "Up to 10 hours + extras",
      "Same-day teaser reel",
      "Extended highlight film",
      "12+ vertical short-form clips",
      "Welcome event / recovery coverage",
      "Priority delivery",
    ],
  },
];

export const businessIntro =
  "Consistent, on-brand content that does the heavy lifting on socials — without you having to be behind (or in front of) the camera. Built for businesses that want to show up online and actually look the part.";

export const businessPackages: Package[] = [
  {
    name: "The Taster",
    price: "$POA",
    description: "A one-off shoot to refresh your feed.",
    features: [
      "Half-day content shoot",
      "10–15 short-form vertical videos",
      "A bank of branded photos",
      "Professionally edited & captioned",
    ],
  },
  {
    name: "Monthly Content",
    price: "$POA",
    cadence: "per month",
    description: "Show up consistently, every single month.",
    features: [
      "Monthly content shoot",
      "12–16 reels / month",
      "Trend & caption suggestions",
      "Posting-ready, on-brand edits",
      "Priority booking",
    ],
    featured: true,
  },
  {
    name: "Brand Day",
    price: "$POA",
    description: "A full day to stockpile content.",
    features: [
      "Full-day content shoot",
      "25+ short-form videos",
      "Photo & video library",
      "Multiple locations / looks",
      "Content plan to roll it out",
    ],
  },
];

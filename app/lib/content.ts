// ─────────────────────────────────────────────────────────────
//  Tarsh Creative — site content & pricing
//  Edit this file to update contact details and package prices.
//  Prices below are PLACEHOLDERS — swap in the real numbers.
// ─────────────────────────────────────────────────────────────

export const brand = {
  name: "Tarsh Creative",
  tagline: "Wedding & Business Content",
  location: "Darwin Based · Servicing Australia Wide",
  blurb:
    "Scroll stopping social media content for weddings and brands, captured on professional equipment and videoed to feel like you.",
  instagram: "https://instagram.com/tarshcreative",
  instagramHandle: "@tarshcreative",
  email: "tarshcreative@ga-productions.com",
  bookingLink: "https://forms.gle/G7LcuPKJcXAmYr4i7",
};

export type Package = {
  name: string;
  price: string;
  cadence?: string;
  description: string;
  features: string[];
  featured?: boolean;
  bookingLink?: string;
};

export const weddingIntro =
  "Relive the moments that you can't plan for.";

export const weddingNotes = [
  "Additional coverage available at $120/hr",
  "Recording of vows and speeches at extra cost",
  "Travel fees may apply",
];

const weddingBookingLink = "https://docs.google.com/forms/d/e/1FAIpQLSeU85Pj5vrdqJBrp0XUMnv-d6ndJCb3VchHMmqv9MorPFTfwQ/viewform?usp=publish-editor";

export const weddingPackages: Package[] = [
  {
    name: "The Basics",
    price: "$970",
    cadence: "+ GST",
    description: "4 hours coverage",
    features: [
      "Pre wedding consultation",
      "Up to 4 hrs coverage",
      "1x 30 to 60 second ceremony video",
    ],
    bookingLink: weddingBookingLink,
  },
  {
    name: "The Essentials",
    price: "$1,350",
    cadence: "+ GST",
    description: "5 hours coverage",
    features: [
      "Pre wedding consultation",
      "Up to 5 hrs capturing",
      "1x 15 to 30 second highlight video (within 24 hrs)",
      "1x 30 to 60 second ceremony video",
    ],
    bookingLink: weddingBookingLink,
  },
  {
    name: "The Ultimate",
    price: "$1,940",
    cadence: "+ GST",
    description: "7 hours coverage",
    features: [
      "Pre wedding consultation",
      "Up to 7 hrs capturing",
      "1x 15 to 30 second highlight video (within 24 hrs)",
      "1x 30 to 60 second pre wedding bridal party video",
      "1x 30 to 60 second ceremony video",
    ],
    featured: true,
    bookingLink: weddingBookingLink,
  },
  {
    name: "The Full Story",
    price: "$3,400",
    cadence: "+ GST",
    description: "9 hours coverage",
    features: [
      "Pre wedding consultation",
      "Up to 9 hrs capturing",
      "1x 15 to 30 second highlight video (within 24 hrs)",
      "1x 30 to 60 second pre wedding bridal party video",
      "1x 30 to 60 second ceremony video",
      "1x 30 to 60 second reception video",
      "1x 30 to 60 second Brides Choice video",
      "Private link to all content",
      "All content delivered within 7 days",
    ],
    bookingLink: weddingBookingLink,
  },
];

export const businessIntro =
  "Make your brand impossible to scroll past.";

export const businessNotes = [
  "Need something different? Custom packages and add-ons available",
];

const businessBookingLink = "https://docs.google.com/forms/d/e/1FAIpQLSfxridE62y8vkWreixnU9opEncN2-5-lDDPxCa3R9sGspNKXw/viewform?usp=publish-editor";

export const subscriptionIntro =
  "Never run out of content again. We show up, shoot, and deliver. Every month.";

export const subscriptionNotes = [
  "Minimum 2 month commitment",
  "Commit to 4 months for 10% off · Commit to 6 months for 20% off",
];

const subscriptionBookingLink = "https://forms.gle/G7LcuPKJcXAmYr4i7";

export const subscriptionPackages: Package[] = [
  {
    name: "Self-Edit",
    price: "$500",
    cadence: "/ month + GST",
    description: "High-quality content to use and curate yourself.",
    features: [
      "1 hr on location shoot per month",
      "Private link to all captured content",
      "Yours to use freely",
    ],
    bookingLink: subscriptionBookingLink,
  },
  {
    name: "Growth",
    price: "$1,500",
    cadence: "/ month + GST",
    description: "For businesses ready to grow their social media presence.",
    features: [
      "2 hr on location shoot per month",
      "8x edited content pieces per month",
      "Private link to all captured content",
    ],
    bookingLink: subscriptionBookingLink,
  },
  {
    name: "Pro",
    price: "$2,500",
    cadence: "/ month + GST",
    description: "Every post professionally edited and curated for your brand.",
    features: [
      "4 hr on location shoot per month",
      "Monthly content planning meeting",
      "12x edited content pieces per month",
      "Private link to all captured content",
    ],
    featured: true,
    bookingLink: subscriptionBookingLink,
  },
  {
    name: "Agency",
    price: "$4,500",
    cadence: "/ month + GST",
    description: "Full-scale content production for brands that never stop posting.",
    features: [
      "2x shoots per month (4 hrs each)",
      "Monthly strategy session",
      "30x edited content pieces per month",
      "Content calendar planning",
      "Priority turnaround",
      "Private link to all captured content",
    ],
    bookingLink: subscriptionBookingLink,
  },
];

// ─── Corporate Events ───────────────────────────────────────────────────────

export const corporateIntro =
  "Professional content coverage for events of any scale. Every rate listed. No surprises.";

export type RateItem = {
  label: string;
  price: string;
  note?: string;
};

export const corporateBaseRates = [
  { name: "Half Day", duration: "up to 4 hours", price: "$600", cadence: "+ GST" },
  { name: "Full Day", duration: "up to 8 hours", price: "$950", cadence: "+ GST" },
];

export const corporateBaseIncludes = [
  "Pre-event planning call",
  "Professional camera, lighting & audio kit",
  "Travel within 30km of Darwin",
  "Raw footage library",
  "Additional hours at $200/hr + GST",
];

export const corporateEditing: RateItem[] = [
  { label: "Social media edit (under 60s)", price: "$150 / video + GST" },
  { label: "Social media edit (60–90s)", price: "$250 / video + GST" },
  { label: "Event highlight video (2–5 min)", price: "$1,150 + GST" },
  { label: "Photo retouching", price: "$45 / image + GST", note: "or $300 for 10" },
];

export const corporateAddons: RateItem[] = [
  { label: "Second shooter", price: "$500–800 + GST" },
  { label: "Branded captions / subtitles", price: "$50 / video + GST" },
  { label: "Licensed music track", price: "$45 / track + GST" },
  { label: "Extended travel", price: "$0.85 / km beyond 30km" },
  { label: "Urgent turnaround (under 72 hrs)", price: "+25% of total" },
];

export const corporateBookingLink = "https://forms.gle/G7LcuPKJcXAmYr4i7";

// ─── Business Packages ──────────────────────────────────────────────────────

export const businessPackages: Package[] = [
  {
    name: "Package One",
    price: "$870",
    cadence: "+ GST",
    description: "We capture, you edit.",
    features: [
      "30 minute planning call",
      "1 hr on location shoot",
      "Full content library delivered for ongoing use",
    ],
    bookingLink: businessBookingLink,
  },
  {
    name: "Package Two",
    price: "$1,200",
    cadence: "+ GST",
    description: "For growing businesses needing consistent content.",
    features: [
      "30 minute planning call",
      "2 hour on location shoot",
      "2x edited videos (20 to 35 sec)",
      "Full content library delivered for ongoing use",
    ],
    featured: true,
    bookingLink: businessBookingLink,
  },
  {
    name: "Package Three",
    price: "$1,530",
    cadence: "+ GST",
    description: "Perfect for established brands wanting to level up.",
    features: [
      "30 minute planning call",
      "3 hr on location shoot",
      "2x edited videos (10 to 35 sec)",
      "25 high res images",
      "Full content library delivered for ongoing use",
    ],
    bookingLink: businessBookingLink,
  },
];

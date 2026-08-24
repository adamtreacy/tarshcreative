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
  "Additional coverage available at $120/hr incl. GST",
  "Travel fees may apply",
];

const weddingBookingLink = "https://docs.google.com/forms/d/e/1FAIpQLSeU85Pj5vrdqJBrp0XUMnv-d6ndJCb3VchHMmqv9MorPFTfwQ/viewform?usp=publish-editor";

export const weddingPackages: Package[] = [
  {
    name: "Package One",
    price: "$1,697",
    cadence: "incl. GST",
    description: "Up to 5 hours coverage",
    features: [
      "Pre wedding consultation",
      "1x 15 to 30 second highlight video (within 24 hrs)",
      "1x 30 to 60 second ceremony video (within 48 hrs)",
    ],
    bookingLink: weddingBookingLink,
  },
  {
    name: "Package Two",
    price: "$2,997",
    cadence: "incl. GST",
    description: "Full day coverage",
    features: [
      "Pre wedding consultation",
      "Engagement shoot with 90 second highlight video",
      "Full ceremony and speeches with professional audio (within 48 hrs)",
      "1x 30 second sneak peek (within 24 hrs)",
      "Highlight video of the entire day (within 48 hrs)",
      "2x moment reels",
      "Camcorder footage and camcorder",
    ],
    featured: true,
    bookingLink: weddingBookingLink,
  },
  {
    name: "Package Three",
    price: "$5,997",
    cadence: "incl. GST",
    description: "Full day coverage",
    features: [
      "Pre wedding consultation",
      "Engagement shoot with 90 second highlight video",
      "2 pre wedding events, each with a 90 second highlight video",
      "Full ceremony and speeches with professional audio (within 48 hrs)",
      "1x 30 second sneak peek (within 24 hrs)",
      "Highlight video of the entire day (within 48 hrs)",
      "4x moment reels",
      "Second shooter",
      "Drone footage",
      "Camcorder footage and camcorder",
      "Polaroid camera and film for the wedding and events",
      "All raw footage",
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

export const corporateEventTypes =
  "Golf days · Award nights · Charity events · Corporate retreats";

export const corporateIntro = "The event ends. The content doesn't.";
export const corporateSubIntro = "For the socials, the board and the ATO.";

export type RateItem = {
  id: string;
  label: string;
  price: string;
  value: number;       // numeric for calculation; 0 = dynamic or percentage
  qtySelectable?: boolean;
  note?: string;
};

export const corporateBaseRates = [
  { id: "half-day", name: "Half Day", duration: "up to 4 hours", price: "$700", value: 700, cadence: "+ GST" },
  { id: "full-day", name: "Full Day", duration: "up to 8 hours", price: "$1,100", value: 1100, cadence: "+ GST" },
];

export const corporateBaseIncludes = [
  "Pre-event planning call",
  "Professional camera & audio kit",
  "Travel within 30km of Darwin",
];

export const corporateEditing: RateItem[] = [
  { id: "social-60", label: "Social media edit", price: "$250 / video + GST", value: 250, qtySelectable: true, note: "Short-form edited content, ready to post to your socials." },
  { id: "social-90", label: "Social media edit", price: "$350 / video + GST", value: 350, qtySelectable: true, note: "Mid-form edited content for more in-depth storytelling." },
  { id: "highlight", label: "Long form video", price: "$1,050 + GST", value: 1050, qtySelectable: true, note: "Event highlights, speeches and other standout moments." },
  { id: "footage", label: "Footage library", price: "$500 + GST", value: 500, note: "A curated library of the day's best footage, unedited and ready to use." },
];

export const corporateAddons: RateItem[] = [
  { id: "extra-hours", label: "Additional capture hours", price: "$200 / hr + GST", value: 200, qtySelectable: true, note: "Extra time on location beyond your booked session." },
  { id: "second-shooter", label: "Second shooter", price: "$700 / $1,100 + GST", value: 0, note: "A second camera operator to capture more of the day." },
  { id: "urgent", label: "Urgent turnaround", price: "+25% of total", value: 0, note: "Content delivered within 72 hours of your event." },
];

export const corporateBookingLink = "https://forms.gle/EEzthxACjLroNHxu9";

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

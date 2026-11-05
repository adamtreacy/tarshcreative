// ─────────────────────────────────────────────────────────────
//  Enquiry forms. One definition drives both the page and the
//  server route. Each answer is still saved into the matching
//  Google Form (so the existing Sheets keep filling up).
// ─────────────────────────────────────────────────────────────

export type FieldKind = "text" | "email" | "tel" | "textarea" | "date" | "radio" | "checks";

export type Field = {
  name: string;
  label: string;
  kind: FieldKind;
  required?: boolean;
  options?: string[];
  /** Site wording to the exact option text the Google Form expects */
  googleMap?: Record<string, string>;
  placeholder?: string;
  /** Google Forms entry id, e.g. "164903274" */
  entry: string;
};

export type FormKind = "general" | "wedding" | "business" | "corporate";

export type FormDef = {
  kind: FormKind;
  eyebrow: string;
  title: string;
  intro: string;
  googleFormId: string;
  submitLabel: string;
  fields: Field[];
};

const contact: Field[] = [
  { name: "name", label: "Your name", kind: "text", required: true, entry: "1000020" },
  { name: "phone", label: "Phone number", kind: "tel", required: true, entry: "1000022" },
  { name: "email", label: "Email", kind: "email", required: true, entry: "1000025" },
  {
    name: "contactMethod",
    label: "Preferred contact method",
    kind: "checks",
    options: ["Phone", "Email"],
    entry: "1000026",
  },
];

export const forms: Record<FormKind, FormDef> = {
  general: {
    kind: "general",
    eyebrow: "Let's work together",
    title: "Tell me a little about what you're after",
    intro: "No pressure, no essay required. I'll be in touch within 48 hours.",
    googleFormId: "1FAIpQLScAecd56SOUJJgDe4yoUvqbsS5Jrg5C8N90qB5o_EgM8wJf3Q",
    submitLabel: "Send enquiry",
    fields: [
      {
        name: "looking",
        label: "What are you looking for?",
        kind: "checks",
        required: true,
        options: [
          "Wedding Content",
          "Business Content",
          "Social Media Management",
          "Social Media Audit",
          "Not sure yet! Happy to chat",
        ],
        entry: "164903274",
      },
      { name: "instagram", label: "Instagram handle", kind: "text", required: true, placeholder: "@yourhandle", entry: "768829893" },
      { name: "email", label: "Email address", kind: "email", required: true, entry: "977141807" },
      { name: "phone", label: "Best contact number", kind: "tel", entry: "721487384" },
      {
        name: "about",
        label: "Tell me a bit about yourself or your vision",
        kind: "textarea",
        entry: "1314216092",
      },
    ],
  },

  wedding: {
    kind: "wedding",
    eyebrow: "Wedding enquiry",
    title: "Let's talk about your day",
    intro:
      "We will contact you to go over details and date availability before any payment or deposit is requested.",
    googleFormId: "1FAIpQLSeU85Pj5vrdqJBrp0XUMnv-d6ndJCb3VchHMmqv9MorPFTfwQ",
    submitLabel: "Send enquiry",
    fields: [
      {
        name: "package",
        label: "Which wedding package are you interested in?",
        kind: "radio",
        required: true,
        options: ["Package One", "Package Two", "Package Three"],
        googleMap: { "Package One": "Package 1", "Package Two": "Package 2", "Package Three": "Package 3" },
        entry: "1000057",
      },
      { name: "location", label: "Location of your wedding", kind: "text", required: true, entry: "967112212" },
      { name: "date", label: "Date of your wedding", kind: "date", required: true, entry: "1454571498" },
      { name: "heard", label: "How did you hear about me?", kind: "text", entry: "1961616579" },
      ...contact,
      { name: "questions", label: "Any further questions?", kind: "textarea", entry: "1000023" },
    ],
  },

  business: {
    kind: "business",
    eyebrow: "Business enquiry",
    title: "Let's grow your content",
    intro:
      "We will contact you to go over details and date availability before any payment or deposit is requested.",
    googleFormId: "1FAIpQLSfxridE62y8vkWreixnU9opEncN2-5-lDDPxCa3R9sGspNKXw",
    submitLabel: "Send enquiry",
    fields: [
      {
        name: "package",
        label: "Which business package are you interested in?",
        kind: "radio",
        required: true,
        options: ["Package One", "Package Two", "Package Three"],
        entry: "1000057",
      },
      { name: "industry", label: "What industry is your business?", kind: "text", required: true, entry: "967112212" },
      { name: "where", label: "Where is your business?", kind: "text", required: true, entry: "41156978" },
      ...contact,
      { name: "questions", label: "Any further questions?", kind: "textarea", entry: "1000023" },
    ],
  },

  corporate: {
    kind: "corporate",
    eyebrow: "Corporate events",
    title: "Tell me about your event",
    intro:
      "We will contact you to go over details and date availability before any payment or deposit is requested.",
    googleFormId: "1FAIpQLSfWUwFQlkbpEqM_Sjegx8BNa-Z5ui8jYWHDpy7Km9dA5aCxrA",
    submitLabel: "Send enquiry",
    fields: [
      { name: "event", label: "What event is your company planning?", kind: "textarea", required: true, entry: "1000057" },
      { name: "industry", label: "What industry is your business?", kind: "text", required: true, entry: "967112212" },
      { name: "where", label: "Where is your business?", kind: "text", required: true, entry: "41156978" },
      ...contact,
      { name: "questions", label: "Any further questions?", kind: "textarea", entry: "1000023" },
    ],
  },
};

export function isFormKind(v: unknown): v is FormKind {
  return typeof v === "string" && v in forms;
}

/** Where a package button should send people. */
export function enquireHref(kind: FormKind, pkg?: string, note?: string): string {
  const q = new URLSearchParams({ type: kind });
  if (pkg) q.set("package", pkg);
  if (note) q.set("note", note);
  return `/enquire?${q.toString()}`;
}

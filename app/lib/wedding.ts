// ─────────────────────────────────────────────────────────────
//  Tarsh Creative, the wedding page
//
//  Everything on the wedding page lives in this one file: the words,
//  and the list of photos and videos it expects to find.
//
//  TO ADD YOUR OWN FOOTAGE
//  Drop the file into  public/wedding/  using the exact file name
//  listed below and it appears on the page. Until then the page shows
//  a soft placeholder in its place, so nothing ever looks broken.
//
//  Videos: mp4, portrait 9:16, 6 to 12 seconds, no sound needed.
//  Photos: jpg, and please keep them under about 1 MB each.
// ─────────────────────────────────────────────────────────────

export type MediaSlot = {
  /** File name inside public/wedding/ */
  file: string;
  kind: "video" | "image";
  /** Optional still frame shown before a video starts */
  poster?: string;
  /** Described for screen readers and search engines */
  alt: string;
  /** Shown inside the placeholder while the file is missing */
  label: string;
};

// ─── The strip of clips at the very top ──────────────────────────────────────
// Five portrait moments that walk through a wedding day.

export const heroClips: MediaSlot[] = [
  { file: "hero1.mp4", kind: "video", poster: "hero1.jpg", alt: "Wedding morning details", label: "Details and getting ready" },
  { file: "hero2.mp4", kind: "video", poster: "hero2.jpg", alt: "An emotional moment during the ceremony", label: "Ceremony emotion" },
  { file: "hero3.mp4", kind: "video", poster: "hero3.jpg", alt: "The couple together after the ceremony", label: "The couple" },
  { file: "hero4.mp4", kind: "video", poster: "hero4.jpg", alt: "Champagne and celebrating", label: "Champagne" },
  { file: "hero5.mp4", kind: "video", poster: "hero5.jpg", alt: "The dance floor at night", label: "Dance floor" },
];

export const hero = {
  eyebrow: "Wedding Content",
  headline: "Relive the moments",
  headlineAccent: "you can't plan for",
  standfirst:
    "Vertical wedding films made for the way you actually watch them back. Shot on professional cameras in Darwin and anywhere in Australia, and in your hands while the day still feels close.",
  scrollHint: "Keep scrolling",
};

// ─── The day, told in order ──────────────────────────────────────────────────

export type StoryBeat = {
  index: string;
  eyebrow: string;
  title: string;
  body: string;
  media: MediaSlot;
  /** portrait sits beside the text, wide runs full width */
  shape: "portrait" | "wide";
};

export const storyBeats: StoryBeat[] = [
  {
    index: "01",
    eyebrow: "The morning",
    title: "Before anyone is watching",
    body:
      "The dress hanging on the door. Your mum doing your hair. The bracelet that belonged to your grandmother, the note that arrives from the other room, the three of you laughing at something nobody will remember by lunchtime. This is the hour that disappears fastest, so it is the hour I start.",
    media: { file: "story_morning.mp4", kind: "video", poster: "story_morning.jpg", alt: "Getting ready on the wedding morning", label: "Getting ready" },
    shape: "portrait",
  },
  {
    index: "02",
    eyebrow: "The ceremony",
    title: "The ten seconds you will want back",
    body:
      "You will be looking at each other. You will not see your dad's face, or your best friend crying in the second row, or the way the whole place went quiet. I am there for that, with proper audio running, so your vows sound like your vows and not like wind.",
    media: { file: "story_ceremony.mp4", kind: "video", poster: "story_ceremony.jpg", alt: "The ceremony", label: "The ceremony" },
    shape: "wide",
  },
  {
    index: "03",
    eyebrow: "The party",
    title: "Then it gets loud",
    body:
      "Champagne on the lawn, the speech that went completely off script, your uncle on the dance floor at eleven. The last part of the night is usually the part you have the least of, and it is my favourite part to shoot.",
    media: { file: "story_party.mp4", kind: "video", poster: "story_party.jpg", alt: "The dance floor and celebrations", label: "The party" },
    shape: "portrait",
  },
];

// ─── Meet Tarsh ──────────────────────────────────────────────────────────────
// Tarsh: rewrite this in your own words. It should sound like you.

export const about = {
  eyebrow: "The person behind the camera",
  title: "Hey, I'm Tarsh",
  paragraphs: [
    "I'm a mum of two, a lover of the outdoors, good people, good energy and making the most of the little things.",
    "Tarsh Creative started at a time when I was looking for something that was just for me outside of motherhood. What I didn't expect was to find something I genuinely love so much. Weddings quickly became my happy place. I love the people, the emotion, the energy and getting to be part of such a special day in someone's life.",
    "I'm naturally a people person and I love getting amongst it. I'm not someone who just turns up, does the job and leaves. I'll chat with your family, laugh with your bridal party, help wherever I can and bring a calm, fun energy to the day.",
    "Outside of weddings, you'll usually find me with my family, outdoors somewhere, probably barefoot, and happiest when life feels simple.",
  ],
  signoff: "See you on the dance floor",
  media: { file: "tarsh.jpg", kind: "image", alt: "Tarsh filming at a wedding", label: "A photo of you working at a wedding" } as MediaSlot,
};

// ─── What you actually get ───────────────────────────────────────────────────

export const offerings = {
  eyebrow: "What I do",
  title: "Made for the way you'll watch it back",
  items: [
    {
      index: "01",
      title: "Professional Sony cameras",
      body: "Not a phone on a gimbal. Proper cameras, proper lenses and proper audio, so the footage still looks beautiful in five years.",
    },
    {
      index: "02",
      title: "Vertical storytelling",
      body: "Filmed for the screen you and everybody you love actually hold. Ready to post, ready to send, no black bars and no cropping something important out.",
    },
    {
      index: "03",
      title: "Candid, emotional, fun",
      body: "Nothing staged and nothing stiff. I shoot the real version of your day, which is usually the funnier one.",
    },
    {
      index: "04",
      title: "Beautifully edited films",
      body: "Cut to music, paced to feel like the day felt. Your highlight film is something you will watch on your anniversary, not once and never again.",
    },
    {
      index: "05",
      title: "Fast turnaround",
      body: "A sneak peek within 24 hours and everything else within 72, while everyone is still talking about it. No waiting six months for a wedding film.",
    },
    {
      index: "06",
      title: "All the things you'll miss",
      body: "You will be busy getting married. I'll be catching everything happening just outside your eyeline and handing it back to you later.",
    },
  ],
};

// ─── More work, then straight to Instagram ───────────────────────────────────

export const work = {
  eyebrow: "Recent weddings",
  title: "Have a look around",
  body: "A few from this season. There are plenty more where these came from.",
  cta: "Watch more on Instagram",
  clips: [
    { file: "work1.mp4", kind: "video", poster: "work1.jpg", alt: "Wedding reel", label: "Reel 1" },
    { file: "work2.mp4", kind: "video", poster: "work2.jpg", alt: "Wedding reel", label: "Reel 2" },
    { file: "work3.mp4", kind: "video", poster: "work3.jpg", alt: "Wedding reel", label: "Reel 3" },
    { file: "work4.mp4", kind: "video", poster: "work4.jpg", alt: "Wedding reel", label: "Reel 4" },
    { file: "work5.mp4", kind: "video", poster: "work5.jpg", alt: "Wedding reel", label: "Reel 5" },
    { file: "work6.mp4", kind: "video", poster: "work6.jpg", alt: "Wedding reel", label: "Reel 6" },
  ] as MediaSlot[],
};

// ─── Kind words ──────────────────────────────────────────────────────────────
// Real words from real couples. Quote them exactly: cut whole sentences to
// keep them short, never reword what somebody said. Two sits cleanly in the
// two column layout; a third wraps onto its own row.

export type Testimonial = { quote: string; couple: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "It was exactly what I was hoping for... and so much more. You somehow managed to bottle up all the love, laughter, and little in-between moments that made the day so special. From the way you included the kids, and attention to detail, you nailed it.",
    couple: "Mr & Mrs Elder",
  },
  {
    quote:
      "It was an absolute privilege and joy to have you shooting our wedding - you brought the BEST vibes and we had so many people complimenting you on the night. This highlight video is EPIC!!!! I can't believe that's our wedding?!?!!?",
    couple: "Harriet",
  },
];

// ─── Packages ────────────────────────────────────────────────────────────────
// The prices themselves live in app/lib/content.ts

export const packagesSection = {
  eyebrow: "Investment",
  title: "Packages",
  body: "Three ways to have me there. Every one of them includes a call before the day so we can talk through your run sheet and what matters most to you.",
};

// ─── Questions ───────────────────────────────────────────────────────────────

export const faqs = [
  {
    q: "What do you actually do on my wedding day?",
    a: "I shoot primarily in portrait, capturing the real, natural moments of your day, including all the little things you might have missed. I then turn those moments into stylish, polished edits that feel like you and your wedding.",
  },
  {
    q: "Will you travel for our wedding?",
    a: "Absolutely. I'm based in Darwin and available for weddings across Australia and beyond. Travel is quoted on top of your package.",
  },
  {
    q: "How soon do we get everything?",
    a: "You'll receive a sneak peek within 24 hours of your wedding, with all other edited content delivered within 72 hours.",
  },
  {
    q: "What if our day runs longer than we booked?",
    a: "It happens! If you decide you'd like me to stick around a little longer, additional coverage is $150 per hour including GST and can easily be added on the day.",
  },
];

// ─── The last word ───────────────────────────────────────────────────────────

export const closing = {
  eyebrow: "Enquire",
  title: "Tell me about your day",
  body: "Send me your date, your venue and anything you already know. I'll come back to you with availability and a straight answer on cost.",
  primary: "Check my date",
  secondary: "Message on Instagram",
};

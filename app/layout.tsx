import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tarshcreative.com"),
  title: {
    default: "Tarsh Creative — Wedding & Business Content",
    template: "%s — Tarsh Creative",
  },
  description:
    "Tarsh Creative captures wedding and business social media content, shot on professional equipment. Darwin-based, servicing Australia wide.",
  keywords: [
    "wedding content creator",
    "wedding videographer Darwin",
    "social media content",
    "business content creator",
    "Darwin content creator",
    "Australia wedding content",
  ],
  openGraph: {
    title: "Tarsh Creative — Wedding & Business Content",
    description:
      "Wedding and business social media content, shot on professional equipment. Darwin-based, servicing Australia wide.",
    url: "https://tarshcreative.com",
    siteName: "Tarsh Creative",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}

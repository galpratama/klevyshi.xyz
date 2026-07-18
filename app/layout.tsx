import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#0b0a0d",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://klevyshi.xyz"),
  title: {
    default: "Klevy シロガネ | Personal corner on the internet",
    template: "%s | Klevy シロガネ",
  },
  description:
    "Personal corner milik Klevy. Friendly, calm, playful. Suka Roblox, Ayodance, Cities: Skylines, coding, gitar, jazz, dan kadang siaran Ceritanya Radio di 103.9 FM.",
  keywords: [
    "Klevyshi",
    "Klevy",
    "Klevy シロガネ",
    "クレヴィ",
    "Klepi",
    "Bang Klep",
    "Roblox",
    "Ayodance",
    "Cities Skylines",
    "Ceritanya Radio",
    "103.9 FM",
  ],
  authors: [{ name: "Klevy シロガネ", url: "https://klevyshi.xyz" }],
  creator: "Klevy シロガネ",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "id_ID",
    url: "https://klevyshi.xyz",
    siteName: "Klevy シロガネ",
    title: "Klevy シロガネ | Personal corner on the internet",
    description: "Friendly, calm, playful. Kadang plenger, kadang ngomongnya kepanjangan.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klevy シロガネ | Personal corner on the internet",
    description: "Friendly, calm, playful. Kadang plenger, kadang ngomongnya kepanjangan.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/logo-mark.svg", type: "image/svg+xml" },
      { url: "/logo-mark-32.png", type: "image/png", sizes: "32x32" },
      { url: "/logo-mark-96.png", type: "image/png", sizes: "96x96" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Klevy シロガネ",
  alternateName: ["クレヴィ", "Kurevi", "Klevyshi", "Klevy", "Klepi", "Bang Klep"],
  url: "https://klevyshi.xyz",
  image: "https://klevyshi.xyz/klevy-hero.webp",
  description:
    "Friendly, calm, playful. Suka Roblox, Ayodance, Cities: Skylines, coding, belajar gitar, jazz, dan membawakan Ceritanya Radio.",
  sameAs: [
    "https://www.instagram.com/klevyshi",
    "https://www.tiktok.com/@klevyshi",
    "https://www.roblox.com/share?code=70e0c65e2c6c4f4bad3270886038109a&type=Profile&source=ProfileShare&stamp=1784366537053",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${display.variable} ${mono.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}

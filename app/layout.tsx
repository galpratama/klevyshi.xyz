import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Manrope } from "next/font/google";
import "./globals.css";

const display = Chakra_Petch({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#080712",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://klevyshi.xyz"),
  title: {
    default: "Klevyshi — Personal Space",
    template: "%s — Klevyshi",
  },
  description:
    "Klevyshi's personal corner of the internet — games, social links, and a little bit of midnight violet.",
  keywords: ["Klevyshi", "Klevy", "gaming", "Roblox", "personal website"],
  authors: [{ name: "Klevyshi", url: "https://klevyshi.xyz" }],
  creator: "Klevyshi",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://klevyshi.xyz",
    siteName: "Klevyshi",
    title: "Klevyshi — Personal Space",
    description: "Games, social links, and a little bit of midnight violet.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klevyshi — Personal Space",
    description: "Games, social links, and a little bit of midnight violet.",
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
  name: "Klevyshi",
  alternateName: "Klevy",
  url: "https://klevyshi.xyz",
  image: "https://klevyshi.xyz/klevy-avatar.webp",
  sameAs: [
    "https://www.instagram.com/klevyshi",
    "https://www.tiktok.com/@klevyshi",
    "https://www.roblox.com/share?code=70e0c65e2c6c4f4bad3270886038109a&type=Profile&source=ProfileShare&stamp=1784366537053",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
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

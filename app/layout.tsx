import type { Metadata, Viewport } from "next";
import { Doto, Martian_Mono, Newsreader } from "next/font/google";
import { profile } from "@/content/site";
import "./globals.css";

const display = Doto({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-display",
  display: "swap",
});

const mono = Martian_Mono({
  subsets: ["latin"],
  weight: "variable",
  axes: ["wdth"],
  variable: "--font-mono",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  style: "italic",
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const fullName = `${profile.firstName} ${profile.lastName}`;

export const metadata: Metadata = {
  title: fullName,
  description: profile.description,
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏔️</text></svg>",
  },
  openGraph: {
    title: fullName,
    description: profile.description,
    images: [profile.photo.src],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}

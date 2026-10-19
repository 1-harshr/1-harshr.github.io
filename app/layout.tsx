import type { Metadata, Viewport } from "next";
import { Doto, Martian_Mono, Newsreader } from "next/font/google";
import { profile } from "@/content/site";
import { themeScript } from "@/components/ThemeToggle";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? profile.url),
  title: fullName,
  description: profile.description,
  authors: [{ name: fullName, url: profile.url }],
  creator: fullName,
  keywords: [
    fullName,
    "software engineer",
    "mobile developer",
    "Android",
    "iOS",
    "Kotlin Multiplatform",
    "Jetpack Compose",
    "Swift",
    "backend",
    "IIT Kanpur",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏔️</text></svg>",
  },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: fullName,
    title: fullName,
    description: profile.description,
    firstName: profile.firstName,
    lastName: profile.lastName,
    images: [{ url: profile.photo.src, alt: profile.photo.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: fullName,
    description: profile.description,
    creator: "@roamingHarsh",
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
    <html lang="en" className={`${display.variable} ${mono.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

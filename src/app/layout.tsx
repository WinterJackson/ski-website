import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ski Extension — Auto-Skip YouTube Ads With One Key (Free & Private)",
    template: "%s | Ski Extension",
  },
  description:
    "Skip YouTube ads the millisecond they become skippable using the Tab key or smart Auto-Skip. Zero ad-blocker warnings, zero tracking, 100% open source for Firefox, Edge & Chrome.",
  metadataBase: new URL("https://ski.xinteck.co.ke"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  keywords: [
    "ski extension",
    "skip youtube ads",
    "auto skip youtube ads",
    "youtube ad skipper",
    "skip youtube ads without adblocker",
    "youtube skip ad hotkey",
    "press tab to skip youtube ad",
    "firefox youtube ad skipper",
    "edge youtube ad skipper",
    "xinteck digital solutions",
    "winter jackson",
  ],
  authors: [{ name: "Winter Jackson", url: "https://github.com/WinterJackson" }],
  creator: "Winter Jackson under Xinteck Digital Solutions",
  publisher: "Xinteck Digital Solutions",
  openGraph: {
    title: "Ski Extension — Auto-Skip YouTube Ads With One Key (Free & Private)",
    description:
      "Click YouTube's official Skip Ad button in milliseconds with Tab or Auto-Skip. Never triggers anti-adblock popups. 100% free & open source.",
    url: "https://ski.xinteck.co.ke",
    siteName: "Ski Extension",
    images: [
      {
        url: "/icon/512.png",
        width: 512,
        height: 512,
        alt: "Ski Extension Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ski Extension — Skip YouTube Ads With a Single Keypress",
    description:
      "Automate clicking YouTube's Skip button with Tab or smart Auto-Skip. Free, private, zero tracking, open source.",
    images: ["/icon/512.png"],
  },
  icons: {
    icon: "/icon/48.png",
    shortcut: "/icon/32.png",
    apple: "/icon/128.png",
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
      className={`dark scroll-smooth ${bricolage.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" href="/icon/32.png" />
      </head>
      <body className="min-h-screen bg-background font-sans text-zinc-100 antialiased selection:bg-accent selection:text-black">
        {children}
      </body>
    </html>
  );
}

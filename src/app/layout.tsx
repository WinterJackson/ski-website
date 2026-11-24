import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ski Extension — Skip YouTube Ads with a Key | By Xinteck",
  description: "Press one key to click YouTube's official Skip Ad button instantly. Fast, privacy-first, zero tracking, open source. Built by Winter Jackson under Xinteck Digital Solutions.",
  metadataBase: new URL("https://ski.xinteck.co.ke"),
  keywords: [
    "ski extension",
    "skip youtube ads",
    "youtube ad skipper",
    "youtube skip ad keypress",
    "xinteck digital solutions",
    "winter jackson",
    "privacy youtube extension",
    "auto skip youtube ads"
  ],
  authors: [{ name: "Winter Jackson", url: "https://github.com/WinterJackson" }],
  creator: "Winter Jackson under Xinteck Digital Solutions",
  publisher: "Xinteck Digital Solutions",
  openGraph: {
    title: "Ski Extension — Skip YouTube Ads with a Key",
    description: "Press one key to click YouTube's Skip button the millisecond it appears. 100% free, private, and open source.",
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
    title: "Ski Extension — Skip YouTube Ads with a Key",
    description: "Automate clicking YouTube's Skip button with one keypress or smart auto-skip. Free, private, open-source.",
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
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/icon/32.png" />
      </head>
      <body className="min-h-screen bg-[#09090b] text-zinc-100 antialiased selection:bg-[#3ea6ff] selection:text-black">
        {children}
      </body>
    </html>
  );
}

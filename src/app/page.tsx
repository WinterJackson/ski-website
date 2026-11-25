import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InteractiveSimulator from "@/components/InteractiveSimulator";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import BlogPreview from "@/components/BlogPreview";
import FaqSection, { FAQS } from "@/components/FaqSection";
import SupportSection from "@/components/SupportSection";
import Footer from "@/components/Footer";

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Ski Extension",
  operatingSystem: "Windows, macOS, Linux, Android",
  applicationCategory: "BrowserApplication",
  url: "https://ski.xinteck.co.ke",
  downloadUrl: "https://addons.mozilla.org/en-GB/firefox/addon/ski-extension/",
  softwareVersion: "1.0.0",
  description:
    "Fast, privacy-first browser extension that skips YouTube ads the millisecond the Skip Ad button appears using a customizable hotkey (Tab) or smart Auto-Skip.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: "Winter Jackson",
    url: "https://github.com/WinterJackson",
  },
  publisher: {
    "@type": "Organization",
    name: "Xinteck Digital Solutions",
    url: "https://xinteck.co.ke/",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <Hero />
      <InteractiveSimulator />
      <Features />
      <HowItWorks />
      <BlogPreview />
      <FaqSection />
      <SupportSection />
      <Footer />
    </main>
  );
}

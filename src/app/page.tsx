import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InteractiveSimulator from "@/components/InteractiveSimulator";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import BlogPreview from "@/components/BlogPreview";
import SupportSection from "@/components/SupportSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col">
      <Navbar />
      <Hero />
      <InteractiveSimulator />
      <Features />
      <HowItWorks />
      <BlogPreview />
      <SupportSection />
      <Footer />
    </main>
  );
}

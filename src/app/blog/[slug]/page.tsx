import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/components/BlogPreview";

const POST_CONTENTS: Record<string, { title: string; date: string; category: string; content: string[] }> = {
  "why-traditional-youtube-ad-blockers-keep-breaking": {
    title: "Why Traditional YouTube Ad Blockers Keep Breaking (And Why Native Automation Wins)",
    date: "November 24, 2026",
    category: "Technical Deep Dive",
    content: [
      "Over the last two years, anyone using conventional ad blockers has encountered black screens, buffering spinners, and YouTube's dreaded popup: 'Ad blockers violate YouTube's Terms of Service.'",
      "Why does this keep happening? Traditional ad blockers rely on network-level request interception. They inspect incoming network requests and attempt to block manifest files or segments that belong to Google's ad servers (like googleads.g.doubleclick.net).",
      "In response, YouTube engineers began injecting ad segments directly into the primary video stream (Server-Side Ad Insertion, or SSAI). When a network blocker attempts to drop those segments, the video player's internal state machine detects missing byte chunks and stalls entirely.",
      "Ski Extension was built on an entirely different philosophy: don't break the stream. YouTube already provides an official 'Skip Ad' button for skippable ads. By dispatching trusted, browser-native click events to that button the millisecond it becomes available, Ski remains 100% compliant with standard player behavior.",
      "No network interception, no streaming anomalies, and zero anti-adblock detection. It is the cleanest, most reliable way to skip ads without running into cat-and-mouse breakage."
    ],
  },
  "inside-ski-8-signal-heuristic-engine": {
    title: "Inside Ski's 8-Signal Heuristic Engine: Building a Self-Healing Extension",
    date: "November 22, 2026",
    category: "Architecture",
    content: [
      "One of the biggest hazards in browser extension development is DOM fragility. YouTube frequently redesigns its player, rotates class names, and tests experimental Polymer layouts across different A/B user buckets.",
      "If an extension relies solely on hardcoded CSS selectors like '.ytp-ad-skip-button-modern', it will inevitably break as soon as YouTube rolls out an update.",
      "To solve this, Ski Extension implements an 8-signal heuristic detector. When an ad is playing, every candidate interactive element inside the player is scored based on weighted criteria:",
      "1. Skip Text Match (0.30 weight): Multilingual match across 30+ languages (Skip, Passer, Saltar, Überspringen, etc.).\n2. Player Geometry (0.15 weight): Skip buttons reside in the bottom-right quadrant.\n3. Class Name Hints (0.12 weight): Subtle semantic traces like 'skip' or 'ad'.\n4. Hierarchy Proximity (0.13 weight): Enclosed inside ad overlay containers.\n5. Element Type (0.10 weight): <button> or role='button' elements.\n6. Text Length (0.10 weight): Short, imperative action text (under 20 characters).\n7. ARIA Label Match (0.05 weight): Screen-reader accessible attributes.\n8. Physical Dimensions (0.05 weight): Valid clickable button area.",
      "When the cumulative score exceeds the 0.55 threshold, Ski identifies the element and automatically persists the newly discovered selector to storage for instant execution next time. This self-healing architecture ensures Ski continues working even after major YouTube redesigns."
    ],
  },
  "how-to-skip-youtube-ads-with-one-key": {
    title: "How to Skip YouTube Ads with One Key in 2027",
    date: "November 20, 2026",
    category: "Guide",
    content: [
      "Reaching for your mouse and aiming for a tiny button at the bottom-right of your screen takes focus away from your workflow.",
      "With Ski Extension, your keyboard becomes a dedicated remote control for YouTube. By default, pressing the Tab key during any skippable ad skips it immediately.",
      "Why the Tab key? The Tab key has no default conflict with YouTube's own player shortcuts (J, K, L, Space, Arrow keys, etc.). It is naturally positioned right under your left hand.",
      "If you prefer another shortcut, you can customize it in the Ski Extension Options page by pressing 'Change' and recording any combination—including modifiers like Shift+Tab or Ctrl+Space.",
      "And on mobile devices (via Firefox for Android or Kiwi Browser), Ski detects the touch screen and enables hands-free Auto-Skip automatically, so you don't even need a keyboard to enjoy ad-free viewing."
    ],
  },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POST_CONTENTS[slug];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col">
      <Navbar />

      <article className="pt-32 pb-24 max-w-3xl mx-auto px-4 sm:px-6 flex-1">
        <div className="space-y-4 mb-10 border-b border-zinc-800 pb-8">
          <Link href="/blog" className="text-xs text-[#3ea6ff] hover:underline">
            ← Back to all articles
          </Link>
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="px-2.5 py-0.5 rounded bg-[#3ea6ff]/10 text-[#3ea6ff] font-semibold">
              {post.category}
            </span>
            <span>·</span>
            <span>{post.date}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {post.title}
          </h1>
        </div>

        <div className="space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 flex items-center justify-between">
          <Link href="/#download" className="px-5 py-2.5 rounded-xl bg-[#3ea6ff] text-black font-bold text-xs hover:bg-[#65b8ff] transition-all">
            Install Ski Extension Free
          </Link>
          <Link href="/blog" className="text-xs text-zinc-400 hover:text-white">
            More articles →
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}


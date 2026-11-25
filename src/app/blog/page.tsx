import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog & Guides — Skip YouTube Ads Without Ad-Blocker Warnings",
  description:
    "Engineering deep dives, YouTube ad-skipping guides, and browser extension privacy research from Winter Jackson & Xinteck Digital Solutions.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Ski Extension Blog — Research, Guides & YouTube Ad-Skipping",
    description:
      "Learn how Ski skips YouTube ads cleanly without breaking playback or triggering anti-adblock warnings.",
    url: "https://ski.xinteck.co.ke/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col">
      <Navbar />

      <section className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 flex-1">
        <div className="space-y-4 mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700 text-zinc-300 text-xs font-semibold">
            📰 Knowledge Base
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ski Extension Blog
          </h1>
          <p className="text-base text-zinc-400">
            Articles, guides, and engineering insights into YouTube player internals, ad skipping, and browser automation.
          </p>
        </div>

        <div className="space-y-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:border-[#3ea6ff]/50 hover:bg-zinc-900/60 transition-all group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 text-xs text-zinc-500">
                <span className="px-2.5 py-1 rounded-md bg-[#3ea6ff]/10 text-[#3ea6ff] font-semibold border border-[#3ea6ff]/20">
                  {post.category}
                </span>
                <span>{post.date} · {post.readingTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-white group-hover:text-[#3ea6ff] transition-colors mb-3">
                {post.title}
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                {post.summary}
              </p>
              <span className="text-xs font-semibold text-[#3ea6ff] group-hover:translate-x-1 inline-flex items-center gap-1 transition-transform">
                Read full article →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

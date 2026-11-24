import Link from "next/link";

export const BLOG_POSTS = [
  {
    slug: "why-traditional-youtube-ad-blockers-keep-breaking",
    title: "Why Traditional YouTube Ad Blockers Keep Breaking (And Why Native Automation Wins)",
    date: "November 24, 2026",
    readingTime: "5 min read",
    summary:
      "YouTube's aggressive countermeasures against network-level ad blockers have created a game of cat-and-mouse. Here is how Ski takes a fundamentally different, compliant approach.",
    category: "Technical Deep Dive",
  },
  {
    slug: "inside-ski-8-signal-heuristic-engine",
    title: "Inside Ski's 8-Signal Heuristic Engine: Building a Self-Healing Extension",
    date: "November 22, 2026",
    readingTime: "7 min read",
    summary:
      "A deep dive into how Ski Extension detects, scores, and adapts to obfuscated class names and layout shifts without breaking video playback.",
    category: "Architecture",
  },
  {
    slug: "how-to-skip-youtube-ads-with-one-key",
    title: "How to Skip YouTube Ads with One Key in 2027",
    date: "November 20, 2026",
    readingTime: "4 min read",
    summary:
      "Stop reaching for your mouse every time an ad plays. Learn how to configure Ski Extension across desktop, tablet, and mobile browsers.",
    category: "Guide",
  },
];

export default function BlogPreview() {
  return (
    <section id="blog" className="py-24 border-t border-zinc-800/80 bg-[#0c0c0e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700 text-zinc-300 text-xs font-semibold">
              📝 Research & Guides
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Latest from the Blog
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl">
              Insights into the YouTube player ecosystem, browser extension engineering, and open-source privacy.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-[#3ea6ff] hover:text-[#65b8ff] transition-colors flex items-center gap-1.5"
          >
            <span>View all articles</span>
            <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-[#3ea6ff]/40 transition-all hover:bg-zinc-900/80 group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-zinc-500 font-medium">
                  <span className="text-[#3ea6ff]">{post.category}</span>
                  <span>{post.readingTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#3ea6ff] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="pt-6 text-xs text-zinc-500 flex items-center justify-between">
                <span>{post.date}</span>
                <span className="text-[#3ea6ff] font-semibold group-hover:translate-x-1 transition-transform">
                  Read article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

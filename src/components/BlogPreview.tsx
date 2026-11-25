import Link from "next/link";
import { BLOG_POSTS } from "@/data/posts";

export default function BlogPreview() {
  return (
    <section id="blog" className="py-24 border-t border-zinc-800/80 bg-background">
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
            className="text-sm font-semibold text-accent hover:text-accent-hover transition-colors flex items-center gap-1.5"
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
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-accent/40 transition-all hover:bg-zinc-900/80 group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-zinc-500 font-medium">
                  <span className="text-accent">{post.category}</span>
                  <span>{post.readingTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="pt-6 text-xs text-zinc-500 flex items-center justify-between">
                <span>{post.date}</span>
                <span className="text-accent font-semibold group-hover:translate-x-1 transition-transform">
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

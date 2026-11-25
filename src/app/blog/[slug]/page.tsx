import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/data/posts";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url: `https://ski.xinteck.co.ke/blog/${post.slug}`,
      type: "article",
      publishedTime: post.isoDate,
      authors: ["Winter Jackson"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ski.xinteck.co.ke/blog/${post.slug}`,
    },
  };

  return (
    <main className="min-h-screen bg-background text-zinc-100 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Navbar />

      <article className="pt-32 pb-24 max-w-3xl mx-auto px-4 sm:px-6 flex-1">
        <div className="space-y-4 mb-10 border-b border-zinc-800 pb-8">
          <Link href="/blog" className="text-xs text-accent hover:underline">
            ← Back to all articles
          </Link>
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="px-2.5 py-0.5 rounded bg-accent/10 text-accent font-semibold">
              {post.category}
            </span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {post.title}
          </h1>
          <p className="text-base text-zinc-400 leading-relaxed">{post.summary}</p>
        </div>

        <div className="space-y-10 text-zinc-300 text-base sm:text-lg leading-relaxed">
          {post.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
              {section.bullets && (
                <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                  {section.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* High-converting bottom CTA */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-accent/5 border border-accent/30 space-y-4">
          <h3 className="text-xl font-bold text-white">
            Try Ski Extension Free on Your Browser
          </h3>
          <p className="text-sm text-zinc-400">
            Skip YouTube ads with a single tap of Tab or hands-free Auto-Skip. Zero tracking, open source, and ready in seconds.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="/#download"
              className="px-5 py-2.5 rounded-xl bg-accent text-black font-bold text-xs hover:bg-accent-hover transition-all"
            >
              Install Ski Extension Free
            </Link>
            <Link
              href="/#simulator"
              className="px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white font-semibold text-xs hover:border-accent transition-all"
            >
              Try Interactive Demo
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-800 flex items-center justify-between">
          <Link href="/blog" className="text-xs text-accent hover:underline">
            ← More articles
          </Link>
          <Link href="/privacy" className="text-xs text-zinc-400 hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}

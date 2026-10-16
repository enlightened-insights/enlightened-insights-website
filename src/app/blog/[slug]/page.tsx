import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { getAllPostSlugs, getPostBySlug, type BlogPost } from "@/lib/blog";
import { ORGANIZATION_ID, SITE_NAME, SITE_URL } from "@/lib/site";

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post not found | Enlightened Insights" };
  return {
    title: `${post.title} | Enlightened Insights`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${slug}`,
      siteName: SITE_NAME,
      publishedTime: post.date || undefined,
      modifiedTime: post.updated || post.date || undefined,
      tags: post.tags,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

function formatDate(date: string) {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Structured data for search engines and answer engines: the article itself,
// plus an FAQPage when the post's frontmatter lists the FAQ shown on the page.
function buildJsonLd(post: BlogPost) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const organization = {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
  };
  const isPerson = post.author && !/team|enlightened insights/i.test(post.author);
  const blocks: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      datePublished: post.date,
      dateModified: post.updated || post.date,
      author: isPerson ? { "@type": "Person", name: post.author } : organization,
      publisher: organization,
      ...(post.coverImage ? { image: `${SITE_URL}${post.coverImage}` } : {}),
      ...(post.tags?.length ? { keywords: post.tags.join(", ") } : {}),
      inLanguage: "en-CA",
    },
  ];
  if (post.faq.length) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
  }
  return blocks;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const showUpdated = post.updated && post.updated !== post.date;

  return (
    <SectionWrapper className="pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildJsonLd(post)).replace(/</g, "\\u003c"),
        }}
      />
      <article className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-block text-sm font-semibold text-primary hover:text-on-surface transition-colors mb-8"
        >
          ← All posts
        </Link>

        <header className="mb-10">
          {post.date && (
            <p className="text-xs font-medium uppercase tracking-widest text-on-surface-muted mb-4">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {showUpdated && (
                <>
                  {" · Updated "}
                  <time dateTime={post.updated}>{formatDate(post.updated!)}</time>
                </>
              )}
              {post.author ? ` · ${post.author}` : ""}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-on-surface mb-4">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-lg text-on-surface/70 leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </header>

        <div
          className="blog-prose"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </SectionWrapper>
  );
}

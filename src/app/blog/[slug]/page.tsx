import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";

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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <SectionWrapper className="pt-32">
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
              {formatDate(post.date)}
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

import Link from "next/link";
import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import { getAllPostsMeta } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Enlightened Insights",
  description:
    "Playbooks, teardowns, and field notes on AI marketing, automation, and the operating systems behind modern growth.",
};

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

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();

  return (
    <>
      {/* Intro */}
      <SectionWrapper id="blog-intro" className="pt-32 pb-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-on-surface mb-6">
            The Enlightened Insights Blog
          </h1>
          <p className="text-lg text-on-surface/70 leading-relaxed">
            Playbooks, teardowns, and thought leadership on digital analytics and
            AI automation. AI and human generated content. No slop.
          </p>
        </div>
      </SectionWrapper>

      {/* Tile grid */}
      <SectionWrapper id="blog-list" surface="raised" className="pt-12">
        {posts.length === 0 ? (
          <p className="text-on-surface/60">No posts yet — check back soon.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                <Card
                  level="high"
                  className="h-full flex flex-col gap-4 transition-all duration-300 group-hover:bg-surface-bright group-hover:-translate-y-1"
                >
                  {post.date && (
                    <p className="text-xs font-medium uppercase tracking-widest text-on-surface-muted">
                      {formatDate(post.date)}
                    </p>
                  )}
                  <h2 className="text-xl font-bold tracking-tight text-on-surface group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-on-surface/70 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <span className="text-sm font-semibold text-primary">
                    Read more →
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </SectionWrapper>
    </>
  );
}

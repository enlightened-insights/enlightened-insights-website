import type { MetadataRoute } from "next";
import { getAllPostsMeta } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPostsMeta().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.updated || post.date || undefined,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  // The home page and blog index change whenever a post is published.
  const latestPost = posts.reduce<string | undefined>(
    (latest, p) => (p.lastModified && (!latest || p.lastModified > latest) ? p.lastModified : latest),
    undefined,
  );
  return [
    { url: SITE_URL, lastModified: latestPost, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/blog`, lastModified: latestPost, changeFrequency: "weekly", priority: 0.8 },
    ...posts,
    { url: `${SITE_URL}/partners`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/partners/ripenn`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms-of-service`, changeFrequency: "yearly", priority: 0.2 },
  ];
}

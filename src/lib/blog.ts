import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface FaqItem {
  q: string;
  a: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  excerpt: string;
  author?: string;
  coverImage?: string;
  tags?: string[];
}

export interface BlogPost extends BlogPostMeta {
  contentHtml: string;
  faq: FaqItem[];
  // Optional per-post overrides for the sticky consultation bar.
  ctaHeading?: string;
  ctaService?: string;
}

function readPostFile(slug: string) {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { data, content };
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPostsMeta(): BlogPostMeta[] {
  return getAllPostSlugs()
    .map((slug) => {
      const { data } = readPostFile(slug);
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        updated: data.updated,
        excerpt: data.excerpt ?? "",
        author: data.author,
        coverImage: data.coverImage,
        tags: data.tags,
      } as BlogPostMeta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const { data, content } = readPostFile(slug);
    const processed = await remark()
      .use(html, { sanitize: false })
      .process(content);
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      updated: data.updated,
      excerpt: data.excerpt ?? "",
      author: data.author,
      coverImage: data.coverImage,
      tags: data.tags,
      faq: Array.isArray(data.faq) ? data.faq : [],
      ctaHeading: data.ctaHeading,
      ctaService: data.ctaService,
      contentHtml: processed.toString(),
    };
  } catch {
    return null;
  }
}

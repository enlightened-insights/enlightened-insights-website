import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");

// Hand-edited HTML from the content/ folder (see content/README.md).
// Read at build time, so an edit ships with the next deploy.
export function readContentHtml(file: string): string {
  return fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
}

function plainText(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

// Each <h3> question followed by its first <p> answer, so FAQ schema always
// matches whatever the FAQ file shows.
export function faqFromHtml(html: string): { q: string; a: string }[] {
  const pairs: { q: string; a: string }[] = [];
  const re = /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/g;
  for (const m of html.matchAll(re)) {
    pairs.push({ q: plainText(m[1]), a: plainText(m[2]) });
  }
  return pairs;
}

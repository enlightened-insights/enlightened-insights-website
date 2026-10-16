import fs from "fs";
import path from "path";
import Link from "next/link";
import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import JsonLd from "@/components/seo/JsonLd";
import { AEO_GUIDE_PATH, ORGANIZATION_ID, SITE_URL } from "@/lib/site";

// DRAFT: placeholders are visible, the page is noindex, and it is left out of
// the sitemap and navigation. Set to false once the human-written sections and
// the Ripenn logo are in, and Ripenn has agreed in writing to be named as a partner.
const DRAFT = true;

const RIPENN_URL = "https://ripenn.ai";
// Ripenn's own wordmark from https://ripenn.ai/brand, unmodified. Drop the file here.
const LOGO_PUBLIC_PATH = "/partners/ripenn/ripenn-wordmark.png";
const PAGE_PATH = "/partners/ripenn";

export const metadata: Metadata = {
  title: "Ripenn: AI Search Visibility Measurement Partner | Enlightened Insights",
  description:
    "Enlightened Insights pairs AEO and SEO work with Ripenn, which tracks how ChatGPT, Claude, Perplexity, and Gemini mention and cite your brand.",
  alternates: { canonical: PAGE_PATH },
  robots: DRAFT ? { index: false, follow: true } : undefined,
};

// A dashed box showing where human-written copy or images go. Renders nothing
// once DRAFT is false, so an unfilled slot can't ship.
function Placeholder({ children }: { children: React.ReactNode }) {
  if (!DRAFT) return null;
  return (
    <div className="my-6 rounded-lg border-2 border-dashed border-primary/40 bg-primary/5 p-6 text-sm text-primary">
      <span className="font-bold uppercase tracking-widest text-xs block mb-2">Placeholder</span>
      {children}
    </div>
  );
}

const steps = [
  {
    title: "Discover",
    text: "Ripenn builds a brand profile from your website and suggests the prompts buyers are likely to ask AI assistants about your category.",
  },
  {
    title: "Scan",
    text: "Ripenn runs those prompts across AI engines, stores the full response from each one, and records whether your brand is mentioned and with what sentiment.",
  },
  {
    title: "Benchmark",
    text: "Ripenn compares your mention rate with competitors' side by side, tracks share of voice over time, and flags the prompts where a competitor wins.",
  },
  {
    title: "Monitor",
    text: "Ripenn tracks which domains get cited and how visibility trends across engines, with CSV and Excel export for reporting.",
  },
];

export default function RipennPartnerPage() {
  const logoReady = fs.existsSync(path.join(process.cwd(), "public", LOGO_PUBLIC_PATH));

  return (
    <SectionWrapper className="pt-32">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Ripenn: AI search visibility measurement partner",
          url: `${SITE_URL}${PAGE_PATH}`,
          publisher: { "@id": ORGANIZATION_ID },
          about: { "@type": "Organization", name: "Ripenn", url: RIPENN_URL },
        }}
      />
      <article className="max-w-3xl mx-auto">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">Partners</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-on-surface mb-6">
          Ripenn: measuring how AI assistants talk about your brand
        </h1>

        {/* Ripenn's guidelines: wordmark on a clean background, clear space equal to the mark's height. */}
        <div className="mb-10 rounded-lg bg-[#fafafa] p-10 flex items-center justify-center min-h-40">
          {logoReady ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={LOGO_PUBLIC_PATH} alt="Ripenn" className="h-12 w-auto" />
          ) : (
            DRAFT && (
              <p className="text-sm text-[#52525b] text-center">
                Ripenn wordmark goes here: save it as <code>public{LOGO_PUBLIC_PATH}</code>
                <br />
                (from Ripenn&apos;s brand kit; don&apos;t recolor, stretch, or crop it)
              </p>
            )
          )}
        </div>

        <Placeholder>
          Human-written intro: who Ripenn is to you, how you met, and why you chose to work together.
        </Placeholder>

        <div className="blog-prose">
          <h2 id="what-is-ripenn">What is Ripenn?</h2>
          <p>
            Ripenn is an AI search visibility platform that tracks how AI models such as ChatGPT, Claude,
            Perplexity, and Gemini talk about your brand, both when buyers are researching a category and when
            they are asking which option to pick. It shows where your brand is mentioned, where competitors are
            recommended instead, and which sources the engines cite.
          </p>

          <h2 id="how-ripenn-works">How does Ripenn measure AI visibility?</h2>
          <p>Ripenn describes its process in four steps:</p>
          <ul>
            {steps.map((s) => (
              <li key={s.title}>
                <strong>{s.title}.</strong> {s.text}
              </li>
            ))}
          </ul>

          <h2 id="why-measurement">Why does AEO need a measurement tool?</h2>
          <p>
            Answer engine optimization has no cross-engine equivalent of Google Search Console. Google and Bing
            report some AI visibility for their own engines, but ChatGPT, Claude, and Perplexity do not offer
            publishers a comparable report, so the practical way to see whether you are being cited is to run a
            fixed set of buyer prompts across engines and record the answers over time. That is the gap a tool
            like Ripenn fills. Our <Link href={`${AEO_GUIDE_PATH}#measure-aeo`}>AEO guide</Link> covers the
            measurement problem in more detail.
          </p>

          <h2 id="working-together">How do Enlightened Insights and Ripenn work together?</h2>
        </div>

        <Placeholder>
          Human-written section: how the partnership works for a client. For example, what Enlightened
          Insights does (strategy, site and content changes) versus what Ripenn does (tracking and
          reporting), and what a client gets from using both.
        </Placeholder>

        <Placeholder>
          Optional: a screenshot or branded image from Ripenn, saved under <code>public/partners/ripenn/</code>.
          Only use images Ripenn has supplied or approved.
        </Placeholder>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={RIPENN_URL}
            target="_blank"
            rel="noopener"
            className="bg-primary-container text-on-primary-container px-7 py-3.5 rounded-lg font-bold hover:bg-primary hover:text-on-primary transition-all"
          >
            Visit ripenn.ai
          </a>
          <Link
            href="/?service=ai-search#contact"
            className="bg-surface-variant/20 border border-primary/20 text-primary px-7 py-3.5 rounded-lg font-bold hover:bg-surface-bright transition-all"
          >
            Book an AI search visibility consultation
          </Link>
        </div>
      </article>
    </SectionWrapper>
  );
}

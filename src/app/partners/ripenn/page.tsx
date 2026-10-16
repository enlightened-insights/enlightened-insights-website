import fs from "fs";
import path from "path";
import Link from "next/link";
import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import JsonLd from "@/components/seo/JsonLd";
import { ORGANIZATION_ID, SITE_URL } from "@/lib/site";

// DRAFT: placeholders are visible, the page is noindex, and it is left out of
// the sitemap and navigation. Set to false once the human-written sections and
// the Ripenn logo are in.
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

        <div className="blog-prose">
          <h2 id="what-is-ripenn">What is Ripenn?</h2>
          <p>
            Ripenn is an AI search visibility platform. It runs the questions your buyers ask through ChatGPT,
            Claude, Perplexity, and Gemini, then shows whether your brand is mentioned, which competitors are
            recommended instead, and which sources the answers cite, tracked over time.
          </p>
        </div>

        <Placeholder>
          Human-written: why you partnered with Ripenn and how you met the founder.
        </Placeholder>

        <Placeholder>
          Human-written: how you use Ripenn with clients (what Enlightened Insights does versus what Ripenn
          measures), and your work testing and improving the tool with its founder.
        </Placeholder>

        <Placeholder>
          Optional: a screenshot or branded image from Ripenn, saved under <code>public/partners/ripenn/</code>.
          Only use images Ripenn has supplied or approved.
        </Placeholder>

        <p className="mt-10 text-sm text-on-surface-muted italic">
          Disclosure: Enlightened Insights uses Ripenn free of charge in exchange for promoting it, and helps the
          founder test and improve the tool. We are not paid for referrals.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={RIPENN_URL}
            target="_blank"
            // Free product use in exchange for promotion is compensation, so the link is marked sponsored.
            rel="sponsored noopener"
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

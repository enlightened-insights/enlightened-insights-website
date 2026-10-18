import fs from "fs";
import path from "path";
import Link from "next/link";
import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import JsonLd from "@/components/seo/JsonLd";
import { ORGANIZATION_ID, SITE_URL } from "@/lib/site";

const RIPENN_URL = "https://ripenn.ai";
// Ripenn's own wordmark from https://ripenn.ai/brand, unmodified. Shown once the file exists.
const LOGO_PUBLIC_PATH = "/partners/ripenn/ripenn-wordmark.png";
const PAGE_PATH = "/partners/ripenn";

export const metadata: Metadata = {
  title: "Ripenn: Our AEO Measurement and Optimization Partner | Enlightened Insights",
  description:
    "Why Enlightened Insights uses Ripenn to measure AI search visibility across ChatGPT, Claude, Perplexity, and Gemini, and how it fits alongside GA4.",
  alternates: { canonical: PAGE_PATH },
};

const external = { target: "_blank", rel: "noopener" } as const;

export default function RipennPartnerPage() {
  const logoReady = fs.existsSync(path.join(process.cwd(), "public", LOGO_PUBLIC_PATH));

  return (
    <SectionWrapper className="pt-32">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Ripenn: our AEO measurement and optimization partner",
          url: `${SITE_URL}${PAGE_PATH}`,
          publisher: { "@id": ORGANIZATION_ID },
          about: { "@type": "Organization", name: "Ripenn", url: RIPENN_URL },
        }}
      />
      <article className="max-w-3xl mx-auto">
        <Link
          href="/partners"
          className="inline-block text-sm font-semibold text-primary hover:text-on-surface transition-colors mb-8"
        >
          ← Partners
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-on-surface mb-8">
          Ripenn: our AEO measurement and optimization partner
        </h1>

        {logoReady && (
          // Ripenn's guidelines: wordmark on a clean background, clear space equal to the mark's height.
          <div className="mb-10 rounded-lg bg-[#fafafa] p-10 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_PUBLIC_PATH} alt="Ripenn" className="h-12 w-auto" />
          </div>
        )}

        <div className="blog-prose">
          <p>
            <strong>Ripenn:</strong> Ripenn is an AI search visibility platform. It runs the questions your buyers
            ask through ChatGPT, Claude, Perplexity, and Gemini, then shows whether your brand is mentioned, which
            competitors are recommended instead, and which sources the answers cite. Scans repeat over time, so you
            can watch visibility move as content is published and optimized.
          </p>
          <p>
            Our preferred AEO measurement and optimization partner is{" "}
            <a href={RIPENN_URL} target="_blank" rel="sponsored noopener">
              Ripenn.ai
            </a>
            . Ripenn is essential to our AEO workflows because it helps us understand how our clients stack up
            against competitors in AI search, and what sorts of queries we need to optimize content for.
          </p>
          <p>
            We love Ripenn because marketing data and analytics nerds need to track and quantify everything.
            Ripenn starts with an audit of a site&apos;s AI visibility against its competitors, then tracks
            performance over time, so we can see how each change to a site affects its visibility.
          </p>

          <h2 id="case-study">Case study: AEO with Ripenn</h2>
        </div>

        <div className="my-6 rounded-lg bg-surface-container border-l-2 border-primary p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Coming soon</p>
          <p className="text-on-surface leading-relaxed">
            We&apos;re documenting a full AEO engagement measured with Ripenn: the buyer questions we tracked, where
            competitors were winning, what we changed, and how AI visibility moved afterwards. Case study coming
            soon.
          </p>
        </div>

        <div className="blog-prose">
          <h2 id="why-measurement">Why does AEO need a measurement tool?</h2>
          <p>
            Answer engine optimization has no equivalent of Google Search Console for ChatGPT, Claude, or
            Perplexity. Without a tool, the only way to know whether an assistant recommends you is to ask it
            yourself, and one manual check tells you very little.
          </p>
          <ul>
            <li>
              <strong>Answers vary.</strong> The same question can get a different answer on each engine and on
              each run, so visibility has to be measured across engines and repeated over time.
            </li>
            <li>
              <strong>Competitors set the bar.</strong> Knowing that you are mentioned matters less than knowing
              who is mentioned instead of you, and for which questions. That gap list becomes the content plan.
            </li>
            <li>
              <strong>Citations show what engines trust.</strong> The sources an answer cites point to the pages,
              publications, and review sites worth earning a place on.
            </li>
            <li>
              <strong>Optimization needs a before and after.</strong> Without a baseline, there is no way to tell
              whether a rewritten page or a new post changed anything.
            </li>
          </ul>
          <p>
            Our <Link href="/blog/answer-engine-optimization#measure-aeo">AEO guide</Link> covers the measurement
            problem in more detail.
          </p>

          <h2 id="ga4">How does Ripenn fit with GA4?</h2>
          <p>
            Ripenn and Google Analytics 4 answer different questions. Ripenn measures visibility inside AI answers:
            are you mentioned, and is your site cited? GA4 measures what happens when someone clicks through: how
            many visits arrive from AI assistants, which pages they land on, and whether they convert. AEO reporting
            needs both, because visibility that never turns into visits or leads is hard to justify.
          </p>
          <ul>
            <li>
              <strong>Referral tagging.</strong>{" "}
              <a href="https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" {...external}>
                OpenAI says ChatGPT adds <code>utm_source=chatgpt.com</code>
              </a>{" "}
              to the links it sends, so those visits can be identified in GA4.
            </li>
            <li>
              <strong>An AI channel in GA4.</strong> Google has been{" "}
              <a
                href="https://www.techwyse.com/news/platform-updates/google-analytics-ai-assistant-channel-ga4-default-channel-group"
                {...external}
              >
                reported to be rolling out an &ldquo;AI Assistant&rdquo; channel
              </a>{" "}
              in GA4&apos;s default channel grouping. Where it hasn&apos;t appeared yet, a custom channel group does
              the same job.
            </li>
            <li>
              <strong>Gaps to expect.</strong>{" "}
              <a
                href="https://searchengineland.com/chatgpt-appears-to-drop-utm-tracking-making-ai-referral-traffic-harder-to-measure-496552"
                {...external}
              >
                Search Engine Land reported in October 2026
              </a>{" "}
              that some ChatGPT traffic now arrives without UTM or referrer data, so part of it lands in Direct.
              Visibility data from Ripenn helps explain movements that GA4 alone can&apos;t attribute.
            </li>
            <li>
              <strong>One dashboard.</strong> Ripenn exports to CSV and Excel, so its visibility trends can sit next
              to GA4 traffic and conversions in the same report. That is the kind of{" "}
              <Link href="/#services">integrated reporting</Link> we build for clients.
            </li>
          </ul>
          <p>
            On our own site, we also send a GA4 event whenever a visit arrives from ChatGPT, Perplexity, Gemini,
            Copilot, or Claude, so AI-referred visits can be followed through to a contact-form submission.
          </p>
        </div>

        <p className="mt-10 text-sm text-on-surface-muted italic">
          Disclosure: Enlightened Insights uses Ripenn free of charge in exchange for promoting it, and helps the
          founder test and improve the tool. We are not paid for referrals.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
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

export const SITE_URL = "https://enlightenedinsights.org";
export const SITE_NAME = "Enlightened Insights";
export const CONTACT_EMAIL = "jeremy@enlightenedinsights.org";

// One plain-language sentence that says who we are. Reused in the About
// section and Organization schema so they never disagree.
export const SITE_SUMMARY =
  "Enlightened Insights is a Toronto-based consultancy that builds marketing data systems and AI automation, including SEO and answer engine optimization (AEO) content pipelines.";

export const SITE_DESCRIPTION =
  "Toronto consultancy building marketing analytics, data pipelines, and AI automation, including SEO and AEO content pipelines that get brands cited by AI.";

export const CASE_STUDY_PATH = "/blog/claude-code-seo-automation-pipeline";
export const AEO_GUIDE_PATH = "/blog/answer-engine-optimization";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const organizationJsonLd = {
  "@type": "ProfessionalService",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  description: SITE_SUMMARY,
  email: CONTACT_EMAIL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  knowsAbout: [
    "Answer engine optimization",
    "Search engine optimization",
    "Marketing analytics",
    "Data pipelines",
    "Website tagging",
    "AI automation",
    "Privacy compliance for digital advertising",
  ],
};

export interface FaqItem {
  q: string;
  a: string;
}

// Shown on the homepage and emitted as FAQPage schema from the same data.
export const HOME_FAQ: FaqItem[] = [
  {
    q: "What does Enlightened Insights do?",
    a: "Enlightened Insights builds marketing data systems and AI automation for growth teams: integrated dashboards, data pipelines, website tagging, privacy compliance, team training, and AI content pipelines for SEO and answer engine optimization (AEO). The consultancy is based in Toronto, Canada.",
  },
  {
    q: "What is answer engine optimization (AEO)?",
    a: "Answer engine optimization (AEO) is the practice of structuring content so AI assistants such as ChatGPT, Perplexity, and Google AI Overviews can extract a passage from your page and cite it. Enlightened Insights builds AEO content pipelines and explains the method in its AEO guide on the blog.",
  },
  {
    q: "What results have your content pipelines produced?",
    a: "For a Shopify ecommerce client, the Enlightened Insights SEO content pipeline grew organic clicks by 17.7% in five weeks while impressions fell 10%, at roughly $1.50 to $2.00 in AI model fees per post. The full case study is on the blog.",
  },
  {
    q: "How do I start working with Enlightened Insights?",
    a: "Book a consultation through the contact form on this page or email jeremy@enlightenedinsights.org. The first conversation is a discovery call about your data, your marketing goals, and where automation or AEO would make the biggest difference.",
  },
];

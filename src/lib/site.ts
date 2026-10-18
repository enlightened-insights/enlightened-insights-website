export const SITE_URL = "https://enlightenedinsights.org";
export const SITE_NAME = "Enlightened Insights";
export const CONTACT_EMAIL = "jeremy@enlightenedinsights.org";

// One plain-language sentence that says who we are, used in Organization schema.
// Keep it in step with the first paragraph of content/home/02-about.html.
export const SITE_SUMMARY =
  "Enlightened Insights is a Toronto-based consultancy that builds marketing data systems and AI automation, and optimizes brands' visibility in search engines and AI answers (SEO and AEO).";

export const SITE_DESCRIPTION =
  "Toronto consultancy for marketing analytics, AI automation, and AI search visibility: SEO and AEO that help brands rank in Google and get cited by AI.";

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
    "AI search visibility",
    "Answer engine optimization",
    "Search engine optimization",
    "Marketing analytics",
    "Data pipelines",
    "Website tagging",
    "AI automation",
    "Privacy compliance for digital advertising",
  ],
};

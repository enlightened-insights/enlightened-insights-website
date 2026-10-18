import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import HtmlBlock from "@/components/ui/HtmlBlock";
import JsonLd from "@/components/seo/JsonLd";
import { faqFromHtml, readContentHtml } from "@/lib/content";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Homepage text lives in content/home/, one HTML file per section, in page order.
export default function Home() {
  const faqHtml = readContentHtml("home/05-faq.html");
  const faq = faqFromHtml(faqHtml);

  return (
    <>
      <HtmlBlock html={readContentHtml("home/01-hero.html")} />
      <HtmlBlock html={readContentHtml("home/02-about.html")} />
      <HtmlBlock html={readContentHtml("home/03-services.html")} />
      <HtmlBlock html={readContentHtml("home/04-testimonials.html")} />
      {faq.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }}
        />
      )}
      <HtmlBlock html={faqHtml} />
      <Contact introHtml={readContentHtml("home/06-contact.html")} />
    </>
  );
}

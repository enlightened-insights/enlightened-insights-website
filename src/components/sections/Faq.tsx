import { HOME_FAQ } from "@/lib/site";
import JsonLd from "@/components/seo/JsonLd";

// Visible FAQ and its FAQPage schema come from the same data, so the schema
// never describes questions the page does not show.
export default function Faq() {
  return (
    <section id="faq" className="py-32 bg-surface-lowest">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: HOME_FAQ.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }}
      />
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface mb-12">
          Frequently asked questions
        </h2>
        <div className="divide-y divide-outline-variant/60">
          {HOME_FAQ.map((item) => (
            <div key={item.q} className="py-8">
              <h3 className="text-xl font-bold text-on-surface mb-3">{item.q}</h3>
              <p className="text-on-surface-muted leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

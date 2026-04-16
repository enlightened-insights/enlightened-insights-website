import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";

const testimonials = [
  {
    quote:
      "Within 90 days of working with Enlightened Insights, our paid acquisition CAC dropped 38% and our email sequences were fully automated. It felt like hiring a full marketing ops team overnight.",
    name: "Marcus Sterling",
    role: "CMO, NexaCorp Systems",
    initials: "MS",
  },
  {
    quote:
      "They rebuilt our entire lead nurture flow with AI. Conversion from MQL to SQL went from 12% to 31% in one quarter. The automation runs itself — our team just reviews the results.",
    name: "Sarah Chen",
    role: "VP Marketing, Lumina Digital",
    initials: "SC",
  },
  {
    quote:
      "The predictive churn model they built identified at-risk accounts two weeks before renewal. We saved $400K in ARR in the first month alone. Genuinely transformative.",
    name: "Priya Nair",
    role: "Head of Growth, Axiom Health",
    initials: "PN",
  },
  {
    quote:
      "We went from manually writing 50 ad variations a week to deploying 300+ AI-generated, performance-tested variants automatically. Our ROAS is up 2.4× since launch.",
    name: "James O'Sullivan",
    role: "CEO, Bridgewater Commerce",
    initials: "JO",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-primary fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" surface="raised">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-4">
          Client Results
        </p>
        <h2
          className="text-4xl font-extrabold text-on-surface"
          style={{ letterSpacing: "-0.02em" }}
        >
          Real results, not projections
        </h2>
        <p className="mt-4 text-on-surface-muted text-lg max-w-xl mx-auto">
          Measurable growth from brands that bet on AI marketing.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {testimonials.map((t) => (
          <Card key={t.name} level="high" className="flex flex-col gap-4">
            <Stars />
            <p className="text-on-surface leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
            {/* Author row — exaggerated vertical spacing per spec */}
            <div className="flex items-center gap-4 pt-6">
              <div
                className="w-9 h-9 rounded flex items-center justify-center text-on-primary text-xs font-bold flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #76d5de, #00818a)" }}
              >
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-on-surface">{t.name}</p>
                <p className="text-xs text-on-surface-muted">{t.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

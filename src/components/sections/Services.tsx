import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "AI Campaign Optimization",
    description:
      "Real-time, cross-channel campaign management powered by machine learning — continuously adjusting bids, audiences, and creatives to maximize ROI.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Marketing Automation & Workflows",
    description:
      "End-to-end automation of your marketing funnel — from lead capture and nurture sequences to CRM triggers, re-engagement, and retention flows.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "AI Content & Copywriting",
    description:
      "LLM-powered content engines that produce on-brand ads, emails, landing pages, and social copy at scale — with built-in A/B testing loops.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Predictive Customer Intelligence",
    description:
      "Churn prediction, LTV modeling, and behavioral segmentation — so you can act on what customers are about to do, not just what they already did.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    title: "Marketing Data Architecture",
    description:
      "Unified data pipelines connecting your ad platforms, CRM, and analytics stack — giving AI models clean, real-time signals to act on.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "AI Strategy & Team Enablement",
    description:
      "Fractional AI leadership and hands-on workshops to align your marketing team on strategy, tooling, and how to get the most from AI-driven systems.",
  },
];

export default function Services() {
  return (
    <SectionWrapper id="services" surface="base">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-4">
          Our Solutions
        </p>
        <h2
          className="text-4xl font-extrabold text-on-surface"
          style={{ letterSpacing: "-0.02em" }}
        >
          AI-Powered Marketing
        </h2>
        <p className="mt-4 text-on-surface-muted text-lg max-w-2xl mx-auto leading-relaxed">
          From automated campaigns to predictive intelligence — we build the
          AI marketing infrastructure that compounds over time.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Card key={service.title} level="container" className="transition-colors hover:bg-surface-high">
            {/* Icon tab — surface_container_high header "tab" */}
            <div className="w-11 h-11 rounded bg-surface-high flex items-center justify-center text-primary mb-5">
              {service.icon}
            </div>
            <h3 className="font-semibold text-on-surface mb-2">{service.title}</h3>
            <p className="text-on-surface-muted text-sm leading-relaxed">{service.description}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

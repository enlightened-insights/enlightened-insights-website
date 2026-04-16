import SectionWrapper from "@/components/ui/SectionWrapper";

const values = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Systems-First",
    description: "We don't run one-off campaigns. We build self-improving marketing systems that get smarter with every touchpoint.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Revenue-Obsessed",
    description: "Every automation we deploy is tied to a business outcome — pipeline, CAC reduction, LTV, or conversion rate.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast to Deploy",
    description: "We move quickly. Most clients have live automations running within weeks, not quarters.",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about" surface="raised">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        {/* Text */}
        <div>
          <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-4">
            Who We Are
          </p>
          <h2
            className="text-4xl font-extrabold text-on-surface leading-snug mb-8"
            style={{ letterSpacing: "-0.02em" }}
          >
            AI that doesn&apos;t just assist — it drives growth
          </h2>
          <p className="text-on-surface-muted text-lg leading-relaxed mb-6">
            Enlightened Insights was built on a single realization: modern
            marketing is no longer a battle of budget — it&apos;s a battle of
            systems. We engineer AI automation stacks that turn your marketing
            channel into a compounding growth engine.
          </p>
          <p className="text-on-surface-muted leading-relaxed">
            Whether you&apos;re launching your first automated campaign or
            rebuilding your entire marketing stack with AI, we work alongside
            your team as embedded partners — not just consultants.
          </p>
        </div>

        {/* Values */}
        <div className="flex flex-col gap-8">
          {values.map((v) => (
            <div key={v.title} className="flex gap-5">
              <div className="mt-0.5 w-10 h-10 rounded bg-surface-high flex items-center justify-center text-primary flex-shrink-0">
                {v.icon}
              </div>
              <div>
                <h3 className="font-semibold text-on-surface mb-1.5">{v.title}</h3>
                <p className="text-on-surface-muted text-sm leading-relaxed">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

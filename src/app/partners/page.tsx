import Link from "next/link";
import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Partners | Enlightened Insights",
  description: "The tools and partners Enlightened Insights works with on AI search visibility and marketing analytics.",
  alternates: { canonical: "/partners" },
};

const partners = [
  {
    href: "/partners/ripenn",
    name: "Ripenn",
    role: "AEO measurement and optimization",
    blurb:
      "Tracks how ChatGPT, Claude, Perplexity, and Gemini mention and cite your brand against competitors, so we know which questions to optimize for.",
  },
];

export default function PartnersPage() {
  return (
    <SectionWrapper className="pt-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-on-surface mb-4">Partners</h1>
        <p className="text-lg text-on-surface-muted leading-relaxed mb-12">
          The tools we rely on in client work, and why.
        </p>
        <div className="space-y-6">
          {partners.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="block p-8 rounded-lg bg-surface-container hover:bg-surface-bright transition-colors border-l-2 border-primary"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">{p.role}</p>
              <h2 className="text-2xl font-bold text-on-surface mb-3">{p.name}</h2>
              <p className="text-on-surface-muted leading-relaxed">{p.blurb}</p>
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

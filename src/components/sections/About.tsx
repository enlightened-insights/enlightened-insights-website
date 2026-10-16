import Link from "next/link";
import { AEO_GUIDE_PATH, CASE_STUDY_PATH, SITE_SUMMARY } from "@/lib/site";

// Plain, quotable statements about who we are and what we've shipped. Answer
// engines lift single passages, so each paragraph names its subject and stands alone.
export default function About() {
  return (
    <section id="about" className="py-32 bg-surface">
      <div className="max-w-4xl mx-auto px-8">
        <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-surface-highest text-primary border-l-2 border-primary">
          About
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface mb-8">
          What is Enlightened Insights?
        </h2>
        <p className="text-xl text-on-surface leading-relaxed mb-6">{SITE_SUMMARY}</p>
        <p className="text-lg text-on-surface-muted leading-relaxed mb-6">
          Enlightened Insights connects the tools marketing teams already use, such as Meta Ads,
          Google Ads, and Google Analytics, into dashboards and pipelines the whole team can trust,
          then automates the repetitive work around them.
        </p>
        <p className="text-lg text-on-surface-muted leading-relaxed">
          For a Shopify ecommerce client, Enlightened Insights grew organic search clicks by 17.7%
          in five weeks.{" "}
          <Link href={CASE_STUDY_PATH} className="text-primary underline underline-offset-4 hover:text-on-surface">
            Read the case study
          </Link>
          , or see{" "}
          <Link href={AEO_GUIDE_PATH} className="text-primary underline underline-offset-4 hover:text-on-surface">
            how answer engine optimization works
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

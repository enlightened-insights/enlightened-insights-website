"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-16 bg-surface"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 70% 60% at 65% 40%, rgba(118,213,222,0.07) 0%, transparent 70%)",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-high text-primary text-xs font-semibold uppercase tracking-widest mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          AI Marketing &amp; Automation
        </div>

        {/* Display heading — editorial tight tracking */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-on-surface leading-tight mb-6"
          style={{ letterSpacing: "-0.02em" }}
        >
          Scale smarter with{" "}
          <span className="text-primary">AI marketing</span>
        </h1>

        <p className="text-lg text-on-surface-muted max-w-2xl mx-auto mb-12 leading-relaxed">
          We build AI-powered marketing systems that generate demand,
          automate growth, and compound results — so your team focuses on
          strategy, not repetitive execution.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded font-semibold text-on-primary transition-colors"
            style={{
              background: "linear-gradient(135deg, #76d5de, #00818a)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "linear-gradient(135deg, #8de0e8, #00919c)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "linear-gradient(135deg, #76d5de, #00818a)";
            }}
          >
            See Our Solutions
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded font-semibold text-primary transition-colors"
            style={{
              background: "rgba(26,46,46,0.40)",
              backdropFilter: "blur(8px)",
              boxShadow: "inset 0 0 0 1px rgba(118,213,222,0.20)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(26,46,46,0.70)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(26,46,46,0.40)";
            }}
          >
            Contact Us
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-24 flex justify-center animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <svg
              className="w-5 h-5 text-on-surface-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

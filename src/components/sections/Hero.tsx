export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image — more visible, less transparent */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-full object-cover opacity-25"
          alt="Abstract digital network representing AI connectivity"
          src="/hero-bg.png"
        />
        {/* Dark gradient overlay so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-surface/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full py-24 pt-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-surface-highest text-primary border-l-2 border-primary">
            Future of Growth
          </span>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-6 text-on-surface">
            Take Control Of Your Marketing Data
          </h1>

          {/* Subtext */}
          <p className="text-lg text-on-surface-muted leading-relaxed mb-8 font-light max-w-xl">
            Running marketing campaigns without data is like driving with a
            blindfold on. Let us take your complex, disjointed, and incomplete
            data systems and build a symphony of actionable insight.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="bg-primary-container text-on-primary-container px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary transition-all shadow-lg"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="bg-surface-variant/20 backdrop-blur-md border border-primary/20 text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-bright transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

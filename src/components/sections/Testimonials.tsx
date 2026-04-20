const testimonials = [
  {
    quote:
      "Jeremy is an excellent digital analytics craftsman and AI specialist. We had an excellent experience working with him on multiple projects.",
    name: "Janus Yi",
    role: "CMO, Genuine Tea",
    elevated: false,
  },
  {
    quote:
      "Fantastic, Jeremy is a data powerhouse that will turn your data chaos into a symphony of clarity and understanding.",
    name: "Cole Lamkin",
    role: "founder, the click click company",
    elevated: true,
  },
  {
    quote:
      "Jeremy is incredibly knowledgeable and capable within his field and I wouldn't hesitate to recommend him to any friend, family member, or colleague who was seeking to beef up their analytics/tracking/reporting infrastructure.",
    name: "Ian Pribyl",
    role: "fractional CMO & owner, Agency",
    elevated: false,
  },
];

function Stars() {
  return (
    <div className="flex text-primary mb-4">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined text-sm"
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          star
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`p-8 rounded-lg flex flex-col justify-between ${
                t.elevated
                  ? "bg-surface-bright -translate-y-4 md:translate-y-4"
                  : "bg-surface-high"
              }`}
            >
              <div>
                <Stars />
                <p className="italic text-on-surface mb-6 font-light leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div>
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-primary text-[10px] uppercase tracking-widest">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

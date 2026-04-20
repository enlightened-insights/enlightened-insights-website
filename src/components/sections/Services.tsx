const services = [
  {
    icon: "hub",
    title: "Integrated Dashboards",
    description:
      "Combine data from Meta Ads, Google Ads, Google Analytics and more into interactive reports the whole marketing team can enjoy.",
  },
  {
    icon: "database",
    title: "Data Pipelines",
    description:
      "Connect data from disparate systems into unified data lakes for easy control, integration, and management.",
  },
  {
    icon: "smart_toy",
    title: "AI Automation",
    description:
      "Give your team time back for the things that matter by automating repetitive tasks.",
  },
  {
    icon: "settings_suggest",
    title: "Website Tagging",
    description:
      "Track every click and page on your website to understand where your customers get stuck on their conversion journey.",
  },
  {
    icon: "gavel",
    title: "Privacy & Security",
    description:
      "Guidance for GDPR, PECR, CCPA and all the other acronyms for the rules digital advertisers need to follow to stay compliant.",
  },
  {
    icon: "model_training",
    title: "Training & Workshops",
    description:
      "Upskilling your internal teams to master prompt engineering and advanced context management.",
  },
];

const cardBg = ["bg-surface-low", "bg-surface-container"];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-surface-lowest">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section header */}
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <h2 className="text-5xl font-extrabold tracking-tighter text-on-surface">
            Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group p-10 ${cardBg[i % 2]} rounded-lg hover:bg-surface-bright transition-all duration-500 relative overflow-hidden`}
            >
              {/* Decorative ghost icon — first card only */}
              {i === 0 && (
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                  <span className="material-symbols-outlined text-8xl">{service.icon}</span>
                </div>
              )}
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">
                {service.icon}
              </span>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-on-surface-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

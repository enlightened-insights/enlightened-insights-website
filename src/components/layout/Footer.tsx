export default function Footer() {
  return (
    <footer className="bg-surface-lowest py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 font-bold text-on-surface">
          <span
            className="w-6 h-6 rounded flex items-center justify-center text-on-primary text-xs font-extrabold"
            style={{ background: "linear-gradient(135deg, #76d5de, #00818a)" }}
          >
            EI
          </span>
          <span>Enlightened Insights</span>
        </div>
        <p className="text-sm text-on-surface-muted text-center">
          © {new Date().getFullYear()} Enlightened Insights. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <a href="#about" className="text-on-surface-muted hover:text-primary transition-colors">About</a>
          <a href="#services" className="text-on-surface-muted hover:text-primary transition-colors">Services</a>
          <a href="#contact" className="text-on-surface-muted hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}

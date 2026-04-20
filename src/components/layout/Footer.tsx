export default function Footer() {
  return (
    <footer className="bg-surface-lowest py-10">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Enlightened Insights Logo" className="h-6 w-auto" />
          <span className="text-lg font-extrabold tracking-tighter uppercase text-on-surface">ENLIGHTENED INSIGHTS</span>
        </div>
        <p className="text-sm text-on-surface-muted text-center">
          © {new Date().getFullYear()} Enlightened Insights. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <a href="#services" className="text-on-surface-muted hover:text-primary transition-colors">Services</a>
          <a href="#testimonials" className="text-on-surface-muted hover:text-primary transition-colors">Testimonials</a>
          <a href="#contact" className="text-on-surface-muted hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}

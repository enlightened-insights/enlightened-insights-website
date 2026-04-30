"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md shadow-xl shadow-surface-lowest/40 ${
        scrolled ? "bg-surface-variant/60" : "bg-surface-variant/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-on-surface"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Enlightened Insights Logo" className="h-8 w-auto" />
          <span className="text-xl font-bold tracking-tighter">ENLIGHTENED INSIGHTS</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-on-surface/70 hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="text-sm font-bold px-5 py-2 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition-all active:scale-95 duration-200"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-on-surface/70 hover:text-on-surface transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-8 py-5 flex flex-col gap-5 bg-surface-variant/90 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-on-surface/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-bold px-4 py-2.5 rounded-lg bg-primary-container text-on-primary-container text-center hover:bg-primary hover:text-on-primary transition-all"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}

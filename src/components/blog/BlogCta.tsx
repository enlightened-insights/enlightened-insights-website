"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";

const DEFAULT_HEADING = "Ready to bring your AEO to the next level?";
const DEFAULT_SERVICE = "ai-search";

const noSubscribe = () => () => {};

function readDismissed(): boolean {
  try {
    return Boolean(sessionStorage.getItem("cta_dismissed"));
  } catch {
    return false;
  }
}

// Sticky consultation bar for blog posts. Slides in once the reader is a
// quarter of the way down, can be dismissed for the session, and pre-selects
// the matching service on the contact form. Posts can override the heading
// and service with `ctaHeading` / `ctaService` in their frontmatter.
export default function BlogCta({
  heading = DEFAULT_HEADING,
  service = DEFAULT_SERVICE,
}: {
  heading?: string;
  service?: string;
}) {
  // Server render assumes not dismissed; the client reads the session after hydration.
  const dismissedEarlier = useSyncExternalStore(noSubscribe, readDismissed, () => false);
  const [dismissedNow, setDismissedNow] = useState(false);
  const [scrolledIn, setScrolledIn] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolledIn(max > 0 && window.scrollY / max > 0.25);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visible = scrolledIn && !dismissedEarlier && !dismissedNow;

  const dismiss = () => {
    setDismissedNow(true);
    try {
      sessionStorage.setItem("cta_dismissed", "1");
    } catch {
      // Storage blocked: the bar stays dismissed for this page view only.
    }
  };

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pb-4 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-3xl mx-auto flex items-center gap-4 rounded-lg bg-surface-bright/95 backdrop-blur-md shadow-2xl ring-1 ring-primary/20 px-5 py-3">
        <p className="flex-1 text-sm md:text-base font-semibold text-on-surface">{heading}</p>
        <Link
          href={`/?service=${encodeURIComponent(service)}#contact`}
          tabIndex={visible ? 0 : -1}
          onClick={() =>
            window.dataLayer?.push({ event: "cta_click", cta_placement: "sticky", page: window.location.pathname })
          }
          className="shrink-0 bg-primary-container text-on-primary-container px-4 py-2 rounded-md text-sm font-bold hover:bg-primary hover:text-on-primary transition-all"
        >
          <span className="hidden sm:inline">Book your consultation call</span>
          <span className="sm:hidden">Book a call</span>
        </Link>
        <button
          type="button"
          onClick={dismiss}
          tabIndex={visible ? 0 : -1}
          aria-label="Dismiss"
          className="shrink-0 text-on-surface-muted hover:text-on-surface"
        >
          <span className="material-symbols-outlined text-xl leading-none">close</span>
        </button>
      </div>
    </div>
  );
}

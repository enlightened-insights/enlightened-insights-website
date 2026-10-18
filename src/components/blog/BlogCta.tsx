"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";

// Fallback for posts without their own ctaHeading; deliberately not tied to one service.
const DEFAULT_HEADING = "Want help putting this into practice?";

const noSubscribe = () => () => {};

function readDismissed(): boolean {
  try {
    return Boolean(sessionStorage.getItem("cta_dismissed"));
  } catch {
    return false;
  }
}

// Sticky consultation bar for blog posts. Slides in after 8 seconds or once the
// reader is 10% of the way down, whichever comes first, can be dismissed for the session, and pre-selects
// the matching service on the contact form. Posts can override the heading
// and service with `ctaHeading` / `ctaService` in their frontmatter.
export default function BlogCta({
  heading = DEFAULT_HEADING,
  service,
}: {
  heading?: string;
  service?: string; // contact-form option to pre-select; omit for none
}) {
  // Server render assumes not dismissed; the client reads the session after hydration.
  const dismissedEarlier = useSyncExternalStore(noSubscribe, readDismissed, () => false);
  const [dismissedNow, setDismissedNow] = useState(false);
  // Most readers leave a post within half a minute, so the bar shows early and
  // then stays put rather than hiding again when they scroll back up.
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (triggered) return;
    const show = () => setTriggered(true);
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max > 0.1) show();
    };
    const timer = window.setTimeout(show, 8000);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [triggered]);

  const visible = triggered && !dismissedEarlier && !dismissedNow;

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
          href={service ? `/?service=${encodeURIComponent(service)}#contact` : "/#contact"}
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

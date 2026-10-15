"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const HEADING = "Ready to bring your AEO to the next level?";
const BUTTON = "Book your consultation call";
const HREF = "/#contact";

// Which CTA to show. `?cta=end`, `?cta=sticky` or `?cta=both` overrides the
// default so the variants can be compared on any post.
type Variant = "end" | "sticky" | "both";
const DEFAULT_VARIANT: Variant = "both";

const noSubscribe = () => () => {};

function readVariant(): Variant {
  const param = new URLSearchParams(window.location.search).get("cta");
  return param === "end" || param === "sticky" || param === "both" ? param : DEFAULT_VARIANT;
}

function readDismissed(): boolean {
  try {
    return Boolean(sessionStorage.getItem("cta_dismissed"));
  } catch {
    return false;
  }
}

function trackClick(placement: "end" | "sticky") {
  window.dataLayer?.push({ event: "cta_click", cta_placement: placement, page: window.location.pathname });
}

export default function BlogCta() {
  // Server render uses the defaults; the client reads the URL and session after hydration.
  const variant = useSyncExternalStore(noSubscribe, readVariant, () => DEFAULT_VARIANT);
  const dismissedEarlier = useSyncExternalStore(noSubscribe, readDismissed, () => false);
  const [dismissedNow, setDismissedNow] = useState(false);
  const dismissed = dismissedEarlier || dismissedNow;
  const [scrolledIn, setScrolledIn] = useState(false);
  const [endVisible, setEndVisible] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  // Show the sticky bar once the reader is a quarter of the way down the page.
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolledIn(max > 0 && window.scrollY / max > 0.25);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide the sticky bar while the end-of-post card is on screen, so they never stack.
  useEffect(() => {
    if (!endRef.current) return;
    const observer = new IntersectionObserver(([entry]) => setEndVisible(entry.isIntersecting));
    observer.observe(endRef.current);
    return () => observer.disconnect();
  }, [variant]);

  const showEnd = variant !== "sticky";
  const showSticky = variant !== "end" && scrolledIn && !dismissed && !(showEnd && endVisible);

  const dismiss = () => {
    setDismissedNow(true);
    try {
      sessionStorage.setItem("cta_dismissed", "1");
    } catch {
      // Storage blocked: the bar stays dismissed for this page view only.
    }
  };

  return (
    <>
      {showEnd && (
        <div
          ref={endRef}
          className="mt-16 p-8 md:p-10 rounded-lg bg-surface-container border-l-2 border-primary"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-on-surface mb-3">{HEADING}</h2>
          <p className="text-on-surface-muted leading-relaxed mb-6 max-w-xl">
            Tell us which questions your buyers ask AI assistants, and we&apos;ll show you who gets cited
            today and what it would take for it to be you.
          </p>
          <Link
            href={HREF}
            onClick={() => trackClick("end")}
            className="inline-block bg-primary-container text-on-primary-container px-7 py-3.5 rounded-lg font-bold hover:bg-primary hover:text-on-primary transition-all"
          >
            {BUTTON}
          </Link>
        </div>
      )}

      {variant !== "end" && (
        <div
          aria-hidden={!showSticky}
          className={`fixed inset-x-0 bottom-0 z-40 px-4 pb-4 transition-all duration-300 ${
            showSticky ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="max-w-3xl mx-auto flex items-center gap-4 rounded-lg bg-surface-bright/95 backdrop-blur-md shadow-2xl ring-1 ring-primary/20 px-5 py-3">
            <p className="flex-1 text-sm md:text-base font-semibold text-on-surface">{HEADING}</p>
            <Link
              href={HREF}
              tabIndex={showSticky ? 0 : -1}
              onClick={() => trackClick("sticky")}
              className="shrink-0 bg-primary-container text-on-primary-container px-4 py-2 rounded-md text-sm font-bold hover:bg-primary hover:text-on-primary transition-all"
            >
              <span className="hidden sm:inline">{BUTTON}</span>
              <span className="sm:hidden">Book a call</span>
            </Link>
            <button
              type="button"
              onClick={dismiss}
              tabIndex={showSticky ? 0 : -1}
              aria-label="Dismiss"
              className="shrink-0 text-on-surface-muted hover:text-on-surface"
            >
              <span className="material-symbols-outlined text-xl leading-none">close</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

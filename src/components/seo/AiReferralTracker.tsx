"use client";

import { useEffect } from "react";

// AI assistants don't always pass a referrer or UTM tag, but when they do we
// want it in analytics. Pushes one `ai_referral` dataLayer event per session;
// GTM forwards it to GA4.
const AI_SOURCES: [RegExp, string][] = [
  [/(^|\.)chatgpt\.com$|(^|\.)chat\.openai\.com$/, "chatgpt"],
  [/(^|\.)perplexity\.ai$/, "perplexity"],
  [/(^|\.)gemini\.google\.com$/, "gemini"],
  [/(^|\.)copilot\.microsoft\.com$/, "copilot"],
  [/(^|\.)claude\.ai$/, "claude"],
];

function detectAiSource(): string | null {
  const utm = new URLSearchParams(window.location.search).get("utm_source")?.toLowerCase() ?? "";
  let host = "";
  try {
    host = document.referrer ? new URL(document.referrer).hostname : "";
  } catch {
    host = "";
  }
  for (const [pattern, name] of AI_SOURCES) {
    if (pattern.test(host) || utm.includes(name)) return name;
  }
  return null;
}

export default function AiReferralTracker() {
  useEffect(() => {
    const source = detectAiSource();
    if (!source) return;
    try {
      if (sessionStorage.getItem("ai_referral_sent")) return;
      sessionStorage.setItem("ai_referral_sent", source);
    } catch {
      // Storage blocked: still record the visit once for this page load.
    }
    window.dataLayer?.push({
      event: "ai_referral",
      ai_source: source,
      landing_page: window.location.pathname,
    });
  }, []);
  return null;
}

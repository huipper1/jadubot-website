"use client";

import { UnifiedCta } from "@/components/sections";
import { CALENDLY_DEMO_URL } from "@/config/site";
import type { IndustryData } from "./industry-data";

interface IndustryCtaProps {
  industry: IndustryData;
}

export function IndustryCta({ industry }: IndustryCtaProps) {
  return (
    <UnifiedCta
      badge={`START YOUR ${industry.name.toUpperCase()} AUTOMATION TODAY`}
      title="Ready to Accelerate Your"
      highlightedTitle={`${industry.name} Conversions?`}
      description="Launch your AI sales agent on WhatsApp, Messenger, and Instagram in under 10 minutes. Never let another high-intent prospect slip away."
      primaryCta={{
        text: "Launch Free Trial",
        href: "https://app.jadubot.com/",
        external: true
      }}
      secondaryCta={{
        text: "Schedule 1-on-1 Demo",
        href: CALENDLY_DEMO_URL,
        external: true
      }}
      trustBadges={[
        "No credit card required",
        "Official Meta & WhatsApp API partner",
        "5-minute zero-code onboarding"
      ]}
    />
  );
}

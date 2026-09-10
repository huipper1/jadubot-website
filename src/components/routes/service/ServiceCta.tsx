"use client";

import { UnifiedCta } from "@/components/sections";
import { CALENDLY_DEMO_URL } from "@/config/site";

export function ServiceCta() {
  return (
    <UnifiedCta
      badge="CUSTOM FLOW CONSULTATION"
      title="See Jadubot in Action on"
      highlightedTitle="Your Facebook Page"
      description="Book a 15-minute live demo and our automation specialists will build a custom reply flow tailored to your business on the spot."
      primaryCta={{
        text: "Start Free Trial",
        href: "https://app.jadubot.com/",
        external: true
      }}
      secondaryCta={{
        text: "Schedule Free Demo",
        href: CALENDLY_DEMO_URL,
        external: true
      }}
    />
  );
}

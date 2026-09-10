"use client";

import { UnifiedCta } from "@/components/sections";

export function AboutCta() {
  return (
    <UnifiedCta
      badge="JOIN THE JADUBOT MOVEMENT"
      title="Ready to Turn Customer Inquiries Into"
      highlightedTitle="Round-the-Clock Sales?"
      description="Join over 1,200+ Bangladeshi businesses automating comments, inboxes, and order flows with Jadubot today."
      primaryCta={{
        text: "Get Started Free",
        href: "https://app.jadubot.com/",
        external: true
      }}
      secondaryCta={{
        text: "Talk with Us",
        href: "/contact",
        external: false
      }}
      trustBadges={[
        "Free forever starter plan",
        "No credit card required",
        "Instant Facebook & Instagram setup"
      ]}
    />
  );
}

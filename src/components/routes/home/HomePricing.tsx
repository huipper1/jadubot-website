"use client";

import { usePopAnimation } from "@/lib/animations";
import { PricingCards } from "@/components/routes/pricing";

export function HomePricing() {
  const headerRef = usePopAnimation<HTMLDivElement>({ start: "top 85%" });

  return (
    <section
      id="pricing"
      className="relative py-20 md:py-32 border-t border-border/60 bg-background"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="mx-auto max-w-2xl text-center will-change-transform origin-center"
        >
          <div className="solution-badge">Pricing</div>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Pick the plan that suits you best and start engaging customers effortlessly. No hidden fees.
          </p>
        </div>

        {/* 4 Pricing Cards Grid (Reused Component) */}
        <PricingCards isStandalone={false} className="mt-16" />
      </div>
    </section>
  );
}

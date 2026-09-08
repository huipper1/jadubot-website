"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/animations";
import { PricingCards } from "@/components/routes/pricing";

export function HomePricing() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      // Header pop animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          {
            scale: 0.88,
            opacity: 0
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              once: true
            }
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative py-20 md:py-32 border-t border-[#373a41]/60 bg-[#0c0e12]"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="mx-auto max-w-2xl text-center will-change-transform origin-center"
        >
          <div className="solution-badge">Pricing</div>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-base text-[#cecfd2]">
            Pick the plan that suits you best and start engaging customers effortlessly. No hidden fees.
          </p>
        </div>

        {/* 4 Pricing Cards Grid (Reused Component) */}
        <PricingCards isStandalone={false} className="mt-16" />
      </div>
    </section>
  );
}

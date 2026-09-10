"use client";

import { useRef } from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/utils";
import { usePopAnimation } from "@/lib/animations";

import { PRICING_TIERS } from "./pricing-data";

export interface PricingCardsProps {
  className?: string;
  isStandalone?: boolean;
}

export function PricingCards({
  className,
  isStandalone = true
}: PricingCardsProps) {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const gridRef = useRef<HTMLDivElement | null>(null);

  usePopAnimation(cardsRef, {
    trigger: gridRef,
    stagger: 0.08,
    start: "top 82%"
  });

  const gridContent = (
    <div
      ref={gridRef}
      className={cn("grid gap-6 sm:grid-cols-2 xl:grid-cols-4 items-stretch", className)}
    >
      {PRICING_TIERS.map((tier, idx) => {
        const isHighlight = tier.isPopular;

        return (
          <div
            key={tier.name}
            ref={(el) => {
              if (el) cardsRef.current[idx] = el;
            }}
            className="h-full will-change-transform origin-center"
          >
            <div
              className={cn(
                "group relative flex h-full flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300",
                isHighlight
                  ? "border border-[#0172ff]/60 bg-gradient-to-b from-[#11192b] via-[#0e1422] to-[#090d15] shadow-[0_0_40px_-10px_rgba(1,114,255,0.35)] xl:-translate-y-2 z-10 hover:border-[#38bdf8]/80"
                  : "border border-white/10 bg-[#0d121c]/90 hover:border-[#0172ff]/40 hover:bg-[#111724]"
              )}
            >
              {/* Subtle top rim glow on Popular card */}
              {isHighlight && (
                <div
                  className="pointer-events-none absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent"
                  aria-hidden="true"
                />
              )}

              <div>
                {/* Header: Name and Badge */}
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-heading text-lg font-bold text-white">
                    {tier.name}
                  </h3>
                  {tier.badge && (
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider shadow-sm",
                        isHighlight
                          ? "bg-gradient-to-r from-[#0172ff] to-[#38bdf8] text-white shadow-[0_0_12px_rgba(1,114,255,0.4)]"
                          : "border border-white/10 bg-white/5 text-slate-300"
                      )}
                    >
                      {isHighlight && <Sparkles className="h-2.5 w-2.5 text-white" />}
                      {tier.badge}
                    </span>
                  )}
                </div>

                {/* Price display */}
                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="font-heading text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
                    {tier.price}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    / {tier.period}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs leading-relaxed text-slate-300 min-h-[36px]">
                  {tier.description}
                </p>

                {/* Primary CTA Button to Portal */}
                <div className="mt-6">
                  <a
                    href="https://app.jadubot.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex w-full items-center justify-center gap-1.5 rounded-xl py-3 px-4 text-xs font-semibold transition-all duration-200",
                      isHighlight
                        ? "btn-primary shadow-[0_0_24px_rgba(1,114,255,0.4)] hover:shadow-[0_0_30px_rgba(1,114,255,0.6)]"
                        : "btn-black border border-white/10 hover:border-[#0172ff]/50 hover:text-white"
                    )}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>
                </div>

                {/* Features List */}
                <div className="mt-7 border-t border-white/10 pt-6">
                  <p className="text-[11px] font-semibold text-slate-400 mb-3.5">
                    Plan Capabilities
                  </p>
                  <ul className="space-y-2.5 text-xs">
                    {tier.features.map((feat) => {
                      const isFeatureHighlighted = tier.highlightFeatures?.includes(feat);

                      return (
                        <li key={feat} className="flex items-start gap-2.5">
                          <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <Check className="h-2.5 w-2.5 stroke-[3]" />
                          </div>
                          <span
                            className={cn(
                              "leading-snug",
                              isFeatureHighlighted
                                ? "font-semibold text-white"
                                : "text-slate-300"
                            )}
                          >
                            {feat}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Card Footer Reassurance */}
              <div className="mt-7 pt-4 border-t border-white/5 text-center">
                <span className="text-[11px] text-slate-400">
                  {tier.name === "Free Trial"
                    ? "✓ No credit card required"
                    : "✓ Instant activation • Cancel anytime"}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  if (isStandalone) {
    return (
      <section className="relative py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">{gridContent}</div>
      </section>
    );
  }

  return <div>{gridContent}</div>;
}

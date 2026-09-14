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
      className={cn(
        "grid grid-cols-1 items-start gap-x-5 gap-y-12 sm:grid-cols-2 xl:grid-cols-4",
        className
      )}
    >
      {PRICING_TIERS.map((tier, idx) => {
        const isHighlight = tier.isPopular;

        return (
          <div
            key={tier.id}
            ref={(el) => {
              if (el) cardsRef.current[idx] = el;
            }}
            className="flex flex-col gap-5 lg:gap-7 will-change-transform"
          >
            {/* Top Card / Control Box */}
            <div
              className={cn(
                "relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300 sm:min-h-[360px]",
                isHighlight
                  ? "dark-surface bg-slate-950 text-white border border-primary/50 shadow-[0_12px_40px_-10px_rgba(21,93,252,0.35)] dark:bg-[#0c1222] dark:border-primary"
                  : "bg-card border border-border shadow-xs hover:border-primary/40 hover:shadow-card dark:bg-card/70"
              )}
            >
              {/* Top ambient glow on highlight tier */}
              {isHighlight && (
                <div
                  className="pointer-events-none absolute -top-16 -right-16 h-36 w-36 rounded-full bg-primary/30 blur-2xl"
                  aria-hidden="true"
                />
              )}

              <div className="relative flex flex-1 flex-col justify-between gap-4 pb-4">
                {/* Plan Header */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3
                      className={cn(
                        "m-0 font-heading text-xl font-bold tracking-tight",
                        isHighlight ? "!text-white" : "text-foreground"
                      )}
                    >
                      {tier.name}
                    </h3>
                    {isHighlight && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-white shadow-xs">
                        <Sparkles className="h-3 w-3 text-white" />
                        <span>Recommended</span>
                      </span>
                    )}
                    {!isHighlight && tier.badge && (
                      <span className="rounded-full border border-border bg-muted/60 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                        {tier.badge}
                      </span>
                    )}
                  </div>
                  <p
                    className={cn(
                      "m-0 text-xs leading-relaxed",
                      isHighlight ? "!text-slate-300" : "text-muted-foreground"
                    )}
                  >
                    {tier.description}
                  </p>
                </div>

                {/* Price & Spec Pill */}
                <div className="flex flex-col items-start gap-3">
                  <div className="flex shrink-0 items-baseline gap-1.5">
                    <span
                      className={cn(
                        "font-heading text-3xl sm:text-4xl font-extrabold tracking-tight whitespace-nowrap",
                        isHighlight ? "!text-white" : "text-foreground"
                      )}
                    >
                      {tier.price}
                    </span>
                    <span
                      className={cn(
                        "text-xs font-medium whitespace-nowrap",
                        isHighlight ? "!text-slate-400" : "text-muted-foreground"
                      )}
                    >
                      / {tier.period}
                    </span>
                  </div>

                  {/* Spec Indicator Pill */}
                  <div
                    className={cn(
                      "relative flex w-full items-center justify-between rounded-full border py-2 px-3.5 text-xs font-medium transition-colors",
                      isHighlight
                        ? "spec-pill border-white/20 bg-white/10 !text-white backdrop-blur-md"
                        : "border-border bg-muted/40 text-foreground/85"
                    )}
                  >
                    <span className="truncate">{tier.specPill}</span>
                  </div>
                </div>
              </div>

              {/* Full-width CTA Button */}
              <a
                href={tier.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "relative mt-2 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-all duration-200 cursor-pointer",
                  isHighlight
                    ? "bg-primary text-white hover:bg-primary/90 shadow-[0_4px_18px_rgba(21,93,252,0.4)]"
                    : "bg-foreground text-background hover:bg-foreground/90 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                )}
              >
                <span>{tier.ctaText}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Bottom Feature List with Glide Dashed Dividers */}
            <ul className="m-0 flex list-none flex-col px-1 py-0">
              {tier.previousTierText && (
                <li className="pb-3 text-xs font-semibold text-primary dark:text-[#38bdf8]">
                  {tier.previousTierText}
                </li>
              )}
              {tier.features.map((feature, fIdx) => (
                <li
                  key={fIdx}
                  className="flex items-start gap-2.5 px-0.5 py-1.5 [&+li]:mt-2.5 [&+li]:border-t [&+li]:border-dashed [&+li]:border-border/80 [&+li]:pt-2.5"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary dark:text-sky-400" />
                  <span className="flex-1 text-xs sm:text-sm text-foreground/80 leading-normal">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );

  if (!isStandalone) {
    return gridContent;
  }

  return (
    <section className="relative z-10 py-10 sm:py-14 lg:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {gridContent}
      </div>
    </section>
  );
}

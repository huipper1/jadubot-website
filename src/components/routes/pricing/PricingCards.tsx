"use client";

import { ArrowRight, Bot, Building2, Check, Shield, Star, Zap } from "lucide-react";
import { useRef } from "react";

import { usePopAnimation } from "@/lib/animations";
import { cn } from "@/utils";
import { PRICING_TIERS } from "./pricing-data";

export interface PricingCardsProps {
  className?: string;
  isStandalone?: boolean;
}

const TIER_ICONS: Record<string, React.ElementType> = {
  free: Shield,
  starter: Zap,
  premium: Bot,
  business: Building2
};

export function PricingCards({ className, isStandalone = true }: PricingCardsProps) {
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
        "grid grid-cols-1 items-stretch gap-6 pt-6 sm:grid-cols-2 xl:grid-cols-4",
        className
      )}
    >
      {PRICING_TIERS.map((tier, idx) => {
        const isHighlight = tier.isPopular;
        const IconComponent = TIER_ICONS[tier.id] || Zap;

        return (
          <div
            key={tier.id}
            ref={(el) => {
              if (el) cardsRef.current[idx] = el;
            }}
            data-preserve-radius="true"
            className={cn(
              "group relative flex flex-col justify-between rounded-[10px]  transition-all duration-300 will-change-transform",
              // Highlight Card (Themed after Jadubot's royal primary color and reference prominent card)
              isHighlight
                ? "border-2 border-primary bg-card/95 shadow-xl shadow-primary/10 ring-1 ring-primary/30 dark:border-primary dark:bg-slate-950/90 dark:shadow-[0_20px_50px_rgba(1,114,255,0.18)]"
                : "border border-border/80 bg-card/70 shadow-xs hover:border-border hover:bg-card/90 hover:shadow-md dark:border-white/10 dark:bg-card/40 dark:hover:border-white/20"
            )}
          >
            {/* Relative Floating Top Banner for Most Popular Tier: does NOT push inside card content down */}
            {isHighlight && (
              <div className="absolute -top-3.5 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-300/40 bg-gradient-to-r from-blue-600 via-primary to-sky-500 px-4 py-1 text-[11px] font-bold tracking-wider text-white uppercase shadow-[0_4px_16px_rgba(1,114,255,0.4)] drop-shadow-sm select-none">
                  <Star className="h-3 w-3 fill-white text-white" />
                  <span>Most Popular</span>
                </span>
              </div>
            )}

            {/* Inner Content Wrapper */}
            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                {/* Tier Icon & Plan Name Row */}
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105",
                      isHighlight
                        ? "bg-primary text-white shadow-md shadow-primary/30"
                        : "bg-primary/10 text-primary dark:bg-white/10 dark:text-sky-400"
                    )}
                  >
                    <IconComponent className="h-5 w-5" />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="m-0 font-heading text-xl font-bold tracking-tight text-foreground">
                      {tier.name}
                    </h3>
                    {!isHighlight && tier.badge && (
                      <span className="text-[11px] font-semibold text-primary dark:text-sky-400">
                        {tier.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="mt-3 min-h-[38px] text-xs leading-relaxed text-muted-foreground">
                  {tier.description}
                </p>

                {/* Price Display */}
                <div className="mt-5 flex items-baseline gap-1.5 border-b border-border/60 pb-5 dark:border-white/10">
                  <span className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                    {tier.price}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    / {tier.period}
                  </span>
                </div>

                {/* CTA Button */}
                <div className="mt-5">
                  <a
                    href={tier.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-[0.98]",
                      isHighlight
                        ? "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40"
                        : "border border-border/90 bg-muted/40 text-foreground hover:bg-muted/80 hover:text-foreground dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                    )}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Features List Section */}
                <div className="mt-6">
                  {tier.previousTierText && (
                    <div className="mb-3 text-[11px] font-bold tracking-wide text-primary uppercase dark:text-sky-400">
                      {tier.previousTierText}
                    </div>
                  )}

                  <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <div
                          className={cn(
                            "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                            isHighlight
                              ? "bg-primary/15 text-primary dark:bg-primary/25 dark:text-sky-400"
                              : "bg-muted text-muted-foreground dark:bg-white/10 dark:text-slate-300"
                          )}
                        >
                          <Check className="h-2.5 w-2.5 stroke-[3]" />
                        </div>
                        <span className="flex-1 text-xs leading-normal text-foreground/85">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spec Pill / Capacity Tag At Bottom */}
              <div className="mt-6 border-t border-border/60 pt-4 dark:border-white/10">
                <div className="flex items-center justify-between rounded-lg bg-muted/40 px-3 py-1.5 text-[11px] font-medium text-muted-foreground dark:bg-white/5">
                  <span className="truncate">{tier.specPill}</span>
                </div>
              </div>
            </div>
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
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{gridContent}</div>
    </section>
  );
}


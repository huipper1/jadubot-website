"use client";

import { Check, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { PopIn } from "@/components/animations";
import { cn } from "@/utils";
import { CPA_PLANS } from "./cpa-data";

export function CpaPricing() {
  return (
    <section id="cpapricing" className="relative py-16 md:py-24 border-t border-border bg-card">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <PopIn className="mx-auto max-w-3xl text-center">
          <div className="solution-badge inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card/80 px-3.5 py-1 text-xs font-semibold text-primary shadow-sm">
            Performance Packages
          </div>
          <h2 className="mt-4 font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
            CPA Marketing Automation Packages
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Scale your social affiliate campaigns with precision-built automation, randomized delay algorithms, and instant server-to-server lead handoffs.
          </p>
        </PopIn>

        {/* 4 Cards Grid with Elevated Design & Top-Center Floating Popular Tag */}
        <PopIn stagger={0.08} className="mt-14 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 items-stretch">
          {CPA_PLANS.map((plan) => {
            const isHighlight = plan.isPopular;

            return (
              <div
                key={plan.name}
                className={cn(
                  "group relative flex h-full flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300",
                  isHighlight
                    ? "border border-primary/60 bg-gradient-to-b from-card via-card to-card-subtle dark:from-[#11192b] dark:via-[#0e1422] dark:to-[#090d15] shadow-elevated xl:-translate-y-2 z-10 hover:border-primary"
                    : "border border-border bg-card/90 hover:border-primary/40 hover:bg-card shadow-card"
                )}
              >
                {/* Top-Center Floating Most Popular Tag */}
                {isHighlight && (
                  <>
                    <div
                      className="pointer-events-none absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                      aria-hidden="true"
                    />
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-sky-400 px-3.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(1,114,255,0.45)] whitespace-nowrap">
                        <Sparkles className="h-2.5 w-2.5 text-white" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  </>
                )}

                <div>
                  {/* Header: Tag and Name */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                      {plan.tag}
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground">
                      CPA Suite
                    </span>
                  </div>

                  <h3 className="mt-2 font-heading text-xl font-bold text-foreground">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium">
                      / {plan.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground min-h-[36px]">
                    {plan.description}
                  </p>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <a
                      href={plan.ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex w-full items-center justify-center gap-1.5 rounded-xl py-3 px-4 text-xs font-semibold transition-all duration-200",
                        isHighlight
                          ? "btn-primary shadow-[0_0_24px_rgba(1,114,255,0.4)] hover:shadow-[0_0_30px_rgba(1,114,255,0.6)]"
                          : "btn-black border border-border hover:border-primary/50 hover:text-foreground"
                      )}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </a>
                  </div>

                  {/* Features */}
                  <div className="mt-7 border-t border-border pt-5">
                    <div className="text-[11px] font-semibold text-muted-foreground mb-3.5">
                      Included Capabilities:
                    </div>
                    <ul className="space-y-2.5 text-xs">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <Check className="h-2.5 w-2.5 stroke-[3]" />
                          </div>
                          <span className="text-muted-foreground leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-7 pt-4 border-t border-border/60 text-center">
                  <span className="text-[11px] text-muted-foreground">
                    ✓ Instant account setup • S2S Ready
                  </span>
                </div>
              </div>
            );
          })}
        </PopIn>

        {/* Guarantee Seal */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-2 rounded-full border border-border bg-muted/30 px-4 py-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>7-Day Risk-Free Money-Back Guarantee</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-muted/30 px-4 py-1.5">
            <span>bKash, Nagad, Cards &amp; Bank Transfer Accepted</span>
          </div>
        </div>
      </div>
    </section>
  );
}

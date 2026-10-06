"use client";

import { ArrowRight, Check, ShieldCheck, Star } from "@/components/icons";

import { PopIn } from "@/components/animations";
import { cn } from "@/utils";

import { CPA_PLANS } from "./cpa-data";

export function CpaPricing() {
  return (
    <section id="cpapricing" className="relative border-t border-border bg-card py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <PopIn className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl leading-tight font-extrabold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            CPA Marketing Automation Packages
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Scale your social affiliate campaigns with precision-built automation, randomized delay
            algorithms, and instant server-to-server lead handoffs.
          </p>
        </PopIn>

        {/* 4 Cards Grid with Elevated Design & Top-Center Floating Popular Tag */}
        <PopIn
          stagger={0.08}
          className="mt-14 grid grid-cols-1 items-stretch gap-6 sm:mt-16 sm:grid-cols-2 xl:grid-cols-4"
        >
          {CPA_PLANS.map((plan) => {
            const isHighlight = plan.isPopular;

            return (
              <div
                key={plan.name}
                className={cn(
                  "group relative flex h-full flex-col justify-between rounded-2xl p-6 transition-all duration-300 sm:p-7",
                  isHighlight
                    ? "shadow-elevated z-10 border border-primary/60 bg-gradient-to-b from-card via-card to-card-subtle hover:border-primary xl:-translate-y-2 dark:from-[#11192b] dark:via-[#0e1422] dark:to-[#090d15]"
                    : "border border-border bg-card/90 shadow-card hover:border-primary/40 hover:bg-card"
                )}
              >
                {/* Top-Center Floating Most Popular Tag */}
                {isHighlight && (
                  <>
                    <div
                      className="pointer-events-none absolute -top-px right-8 left-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                      aria-hidden="true"
                    />
                    <div className="absolute -top-3 left-1/2 z-20 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-sky-400 px-3.5 py-0.5 text-[10px] font-bold tracking-wider whitespace-nowrap text-white uppercase shadow-[0_0_15px_rgba(1,114,255,0.45)]">
                        <Star className="h-2.5 w-2.5 fill-white text-white" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  </>
                )}

                <div>
                  {/* Header: Tag and Name */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold tracking-wider text-primary uppercase">
                      {plan.tag}
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground">CPA Suite</span>
                  </div>

                  <h3 className="mt-2 font-heading text-xl font-bold text-foreground">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                      {plan.price}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">
                      / {plan.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-3 min-h-[36px] text-xs leading-relaxed text-muted-foreground">
                    {plan.description}
                  </p>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <a
                      href={plan.ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex w-full items-center justify-center gap-1.5 rounded-xl px-4 py-3 text-xs font-semibold transition-all duration-200",
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
                    <div className="mb-3.5 text-[11px] font-semibold text-muted-foreground">
                      Included Capabilities:
                    </div>
                    <ul className="space-y-2.5 text-xs">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                            <Check className="h-2.5 w-2.5 stroke-[3]" />
                          </div>
                          <span className="leading-snug text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-7 border-t border-border/60 pt-4 text-center">
                  <span className="text-[11px] text-muted-foreground">
                    ✓ Instant account setup • S2S Ready
                  </span>
                </div>
              </div>
            );
          })}
        </PopIn>

        {/* Guarantee Seal */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5 text-xs text-muted-foreground sm:gap-3">
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

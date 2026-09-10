"use client";

import { Calculator, Sparkles, TrendingUp } from "lucide-react";
import { PopIn } from "@/components/animations";
import type { IndustryData } from "./industry-data";

interface IndustryRoiSectionProps {
  industry: IndustryData;
}

export function IndustryRoiSection({ industry }: IndustryRoiSectionProps) {
  const { roi } = industry;

  return (
    <section className="relative py-20 sm:py-24 md:py-28 bg-card overflow-hidden">
      {/* Background glow and subtle accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] rounded-full bg-gradient-to-tr from-[#0172ff]/10 via-[#38bdf8]/5 to-transparent blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <PopIn>
            <div className="solution-badge">
              <Calculator className="h-3.5 w-3.5 text-blue-400" />
              <span>RETURN ON INVESTMENT</span>
            </div>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {roi.heading}
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              {roi.subheading}
            </p>
          </PopIn>
        </div>

        {/* The Mathematical Formula & Real Example Breakdown */}
        <div className="mt-14 max-w-5xl mx-auto">
          <PopIn delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-card p-6 sm:p-10 shadow-elevated backdrop-blur-2xl">
              {/* Formula Badge & Expression */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-border pb-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                    The Industry Automation Formula
                  </div>
                  <div className="mt-2 font-mono text-sm sm:text-base font-medium text-foreground bg-muted p-3 rounded-xl border border-border/60 inline-block">
                    {roi.formula}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-500 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-lg shrink-0">
                  <TrendingUp className="h-4 w-4" />
                  <span>Immediate ROI Positive</span>
                </div>
              </div>

              {/* Concrete Real-World Example */}
              <div className="mt-8 rounded-2xl border border-primary/20 bg-muted/40 p-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span>Case Study: {roi.exampleLabel}</span>
                </div>
                <p className="mt-3 font-mono text-sm sm:text-base font-semibold leading-relaxed text-primary">
                  {roi.exampleMath}
                </p>
              </div>

              {/* 3 Key Financial Payoff Pillars */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {roi.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:bg-primary/5"
                  >
                    <div>
                      <div className="font-mono text-2xl sm:text-3xl font-extrabold text-foreground">
                        <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                          {metric.value}
                        </span>
                      </div>
                      <div className="mt-1 text-sm font-semibold text-primary">
                        {metric.label}
                      </div>
                    </div>
                    <div className="mt-4 text-xs leading-relaxed text-muted-foreground border-t border-border/60 pt-3">
                      {metric.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </PopIn>
        </div>
      </div>
    </section>
  );
}

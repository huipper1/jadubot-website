"use client";

import { AlertCircle, CheckCircle2, Cpu, TrendingUp, Sparkles } from "lucide-react";
import { PopIn } from "@/components/animations";
import { cn } from "@/utils";
import type { IndustryData, IndustryShowcaseItem } from "./industry-data";

interface IndustrySplitShowcaseProps {
  industry: IndustryData;
}

export function IndustrySplitShowcase({ industry }: IndustrySplitShowcaseProps) {
  const { showcases } = industry;

  return (
    <section className="relative py-20 sm:py-24 md:py-28 bg-[#080b11]/70 border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#0172ff]/5 blur-3xl" />
        <div className="absolute bottom-[20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#38bdf8]/5 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <PopIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-[#0b162b]/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 backdrop-blur-md">
              <Cpu className="h-3.5 w-3.5 text-blue-400" />
              <span>INDUSTRY BLUEPRINTS</span>
            </div>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Engineered Specifically for{" "}
              <span className="bg-gradient-to-r from-[#93c5fd] via-[#38bdf8] to-[#0172ff] bg-clip-text text-transparent">
                {industry.name} Operations
              </span>
            </h2>
            <p className="mt-4 text-base text-slate-300 sm:text-lg">
              Compare outdated manual workflows against Jadubot&apos;s automated conversational AI pipelines.
            </p>
          </PopIn>
        </div>

        {/* Alternating Split Showcase Items */}
        <div className="mt-16 space-y-20 lg:mt-24 lg:space-y-28">
          {showcases.map((item: IndustryShowcaseItem, idx: number) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={cn(
                  "grid items-center gap-10 lg:grid-cols-12 lg:gap-14",
                  isEven ? "" : "lg:grid-flow-dense"
                )}
              >
                {/* Text Content Column */}
                <div
                  className={cn(
                    "lg:col-span-6",
                    isEven ? "lg:order-1" : "lg:order-2 lg:col-start-7"
                  )}
                >
                  <PopIn delay={0.1}>
                    <div className="inline-flex items-center gap-2 rounded-lg bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400 border border-blue-500/20">
                      <span>Module 0{idx + 1}</span>
                      <span>•</span>
                      <span>{item.subtitle}</span>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {item.title}
                    </h3>

                    {/* Problem vs Solution Split */}
                    <div className="mt-6 space-y-4">
                      {/* Outdated Way */}
                      <div className="rounded-xl border border-rose-500/20 bg-rose-950/10 p-4 transition-all hover:border-rose-500/30">
                        <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider">
                          <AlertCircle className="h-4 w-4 shrink-0" />
                          <span>The Challenge / Legacy Bottleneck</span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-slate-300">
                          {item.problem}
                        </p>
                      </div>

                      {/* Jadubot Way */}
                      <div className="rounded-xl border border-blue-500/30 bg-[#08152c]/60 p-4 shadow-[0_0_25px_rgba(1,114,255,0.15)] transition-all hover:border-blue-400/50">
                        <div className="flex items-center gap-2 text-[#38bdf8] text-xs font-semibold uppercase tracking-wider">
                          <Sparkles className="h-4 w-4 shrink-0 text-blue-400" />
                          <span>The Jadubot Autonomous Solution</span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-slate-200">
                          {item.solution}
                        </p>
                      </div>
                    </div>

                    {/* Metric Callout */}
                    <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/20 px-4 py-2 text-xs font-semibold text-emerald-300">
                      <TrendingUp className="h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{item.metrics}</span>
                    </div>
                  </PopIn>
                </div>

                {/* Benefits / Architecture Column */}
                <div
                  className={cn(
                    "lg:col-span-6",
                    isEven ? "lg:order-2" : "lg:order-1 lg:col-start-1"
                  )}
                >
                  <PopIn delay={0.2}>
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#111927]/90 to-[#090d14]/90 p-6 sm:p-8 backdrop-blur-xl shadow-xl">
                      {/* Ambient corner glow */}
                      <div className="absolute -top-16 -right-16 h-36 w-36 rounded-full bg-[#0172ff]/20 blur-2xl pointer-events-none" />

                      <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                          Key Automation Capabilities
                        </h4>
                        <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 font-mono text-xs font-medium text-blue-300">
                          Instant Deployment
                        </span>
                      </div>

                      {/* Benefits Checklist */}
                      <ul className="mt-6 space-y-4">
                        {item.benefits.map((benefit: string, bIdx: number) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-white/[0.03]"
                          >
                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                            </div>
                            <span className="text-sm leading-relaxed text-slate-200">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Bottom live status bar */}
                      <div className="mt-6 flex items-center justify-between rounded-xl border border-blue-500/20 bg-[#060c18] px-4 py-3 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                          </span>
                          <span className="font-medium text-slate-300">
                            Active 24/7 Engine
                          </span>
                        </div>
                        <span className="font-mono text-slate-400">
                          0 Human Agents Required
                        </span>
                      </div>
                    </div>
                  </PopIn>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { WarningCircle as AlertCircle, CheckCircle as CheckCircle2, TrendUp as TrendingUp } from "@/components/icons";

import { PopIn } from "@/components/animations";
import { cn } from "@/utils";

import type { IndustryData, IndustryShowcaseItem } from "./industry-data";

import { SectionImage } from "@/components/SectionImage";
import { getSectionImage } from "@/lib/section-images";

interface IndustrySplitShowcaseProps {
  industry: IndustryData;
}

export function IndustrySplitShowcase({ industry }: IndustrySplitShowcaseProps) {
  const { showcases } = industry;

  return (
    <section className="relative border-t border-border/60 bg-card/70 py-20 sm:py-24 md:py-28">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#0172ff]/5 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[20%] h-[500px] w-[500px] rounded-full bg-[#38bdf8]/5 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <PopIn>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Engineered Specifically for{" "}
              <span className="bg-gradient-to-r from-[#93c5fd] via-[#38bdf8] to-[#0172ff] bg-clip-text text-transparent">
                {industry.name} Operations
              </span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Compare outdated manual workflows against Jadubot&apos;s automated conversational AI
              pipelines.
            </p>
          </PopIn>
        </div>

        {/* Alternating Split Showcase Items */}
        <div className="mt-16 space-y-20 lg:mt-24 lg:space-y-28">
          {showcases.map((item: IndustryShowcaseItem, idx: number) => {
            const isEven = idx % 2 === 0;
            const showcaseSectionKey = idx === 0 ? "showcase1" : "showcase2";
            const sectionImg = getSectionImage("industry", industry.slug, showcaseSectionKey);

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
                    <div className="inline-flex items-center gap-2 rounded-lg border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                      <span>Module 0{idx + 1}</span>
                      <span>•</span>
                      <span>{item.subtitle}</span>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                      {item.title}
                    </h3>

                    {/* Problem vs Solution Split */}
                    <div className="mt-6 space-y-4">
                      {/* Outdated Way */}
                      <div className="rounded-xl border border-rose-500/20 bg-rose-500/10 p-4 transition-all hover:border-rose-500/30">
                        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-rose-500 uppercase">
                          <AlertCircle className="h-4 w-4 shrink-0" />
                          <span>The Challenge / Legacy Bottleneck</span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {item.problem}
                        </p>
                      </div>

                      {/* Jadubot Way */}
                      <div className="rounded-xl border border-primary/30 bg-card p-4 shadow-card transition-all hover:border-primary/50">
                        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#38bdf8] uppercase">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-400" />
                          <span>The Jadubot Autonomous Solution</span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-foreground">
                          {item.solution}
                        </p>
                      </div>
                    </div>

                    {/* Metric Callout */}
                    <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-500">
                      <TrendingUp className="h-4 w-4 shrink-0 text-emerald-500" />
                      <span>{item.metrics}</span>
                    </div>
                  </PopIn>
                </div>

                {/* Visual / Image Column */}
                <div
                  className={cn(
                    "lg:col-span-6",
                    isEven ? "lg:order-2" : "lg:order-1 lg:col-start-1"
                  )}
                >
                  <PopIn delay={0.2}>
                    <div className="space-y-4">
                      {sectionImg && (
                        <SectionImage
                          src={sectionImg.src}
                          alt={sectionImg.alt}
                          aspect="16/10"
                          badge={`Module 0${idx + 1} System`}
                        />
                      )}

                      <div className="shadow-elevated relative overflow-hidden rounded-2xl border border-border bg-card p-6">
                        <div className="flex items-center justify-between border-b border-border pb-3">
                          <h4 className="text-xs font-semibold tracking-wider text-foreground uppercase">
                            Key Automation Capabilities
                          </h4>
                          <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-blue-400">
                            Instant Deployment
                          </span>
                        </div>

                        {/* Benefits Checklist */}
                        <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                          {item.benefits.map((benefit: string, bIdx: number) => (
                            <li
                              key={bIdx}
                              className="flex items-start gap-2 rounded-lg p-2 text-xs transition-colors hover:bg-muted/40"
                            >
                              <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                                <CheckCircle2 className="h-3 w-3" />
                              </div>
                              <span className="leading-snug text-foreground">
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
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

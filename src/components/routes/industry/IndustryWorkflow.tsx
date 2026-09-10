"use client";

import { ArrowRight, CheckCircle2, GitBranch } from "lucide-react";
import { PopIn } from "@/components/animations";
import type { IndustryData, IndustryWorkflowStep } from "./industry-data";

interface IndustryWorkflowProps {
  industry: IndustryData;
}

export function IndustryWorkflow({ industry }: IndustryWorkflowProps) {
  const { workflow } = industry;

  return (
    <section className="relative py-20 sm:py-24 md:py-28 bg-[#0c0e12] overflow-hidden">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[800px] rounded-full bg-[#0172ff]/5 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <PopIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-[#0b162b]/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 backdrop-blur-md">
              <GitBranch className="h-3.5 w-3.5 text-blue-400" />
              <span>{workflow.badge}</span>
            </div>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {workflow.title}
            </h2>
            <p className="mt-4 text-base text-slate-300 sm:text-lg">
              {workflow.description}
            </p>
          </PopIn>
        </div>

        {/* Timeline Pipeline Layout */}
        <div className="mt-16 lg:mt-20">
          <div className="relative">
            {/* Horizontal connecting line on desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-6 bg-gradient-to-r from-blue-500/10 via-blue-500/40 to-blue-500/10" />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {workflow.steps.map((stepItem: IndustryWorkflowStep, index: number) => (
                <PopIn key={index} delay={index * 0.1}>
                  <div className="relative group flex flex-col h-full rounded-2xl border border-white/10 bg-[#0e1422]/70 p-6 backdrop-blur-md transition-all duration-300 hover:border-blue-500/50 hover:bg-[#111a2e]/90 hover:shadow-[0_0_30px_rgba(1,114,255,0.2)]">
                    {/* Top step indicator node */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/40 bg-gradient-to-br from-[#0172ff] to-[#0b2447] text-white font-mono font-bold text-sm shadow-[0_0_15px_rgba(1,114,255,0.4)] group-hover:scale-110 transition-transform">
                        {stepItem.step}
                      </div>
                      <span className="font-mono text-xs text-blue-400/80 font-semibold tracking-wider">
                        PHASE 0{index + 1}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="mt-6 text-lg font-bold text-white group-hover:text-blue-200 transition-colors">
                      {stepItem.title}
                    </h3>

                    {/* Step Description */}
                    <p className="mt-3 text-sm leading-relaxed text-slate-300 flex-1">
                      {stepItem.description}
                    </p>

                    {/* Bottom Status Indicator */}
                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1.5 text-blue-400">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>Autonomous</span>
                      </span>
                      {index < workflow.steps.length - 1 && (
                        <ArrowRight className="h-3.5 w-3.5 text-slate-500 lg:hidden" />
                      )}
                    </div>
                  </div>
                </PopIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

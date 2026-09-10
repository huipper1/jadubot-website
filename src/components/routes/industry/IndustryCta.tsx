"use client";

import { ArrowRight, Calendar, CheckCircle2, Sparkles, Zap } from "lucide-react";
import { PopIn } from "@/components/animations";
import { CALENDLY_DEMO_URL } from "@/config/site";
import type { IndustryData } from "./industry-data";

interface IndustryCtaProps {
  industry: IndustryData;
}

export function IndustryCta({ industry }: IndustryCtaProps) {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 bg-gradient-to-b from-[#0c0e12] via-[#070b13] to-[#05070d] border-t border-white/5 overflow-hidden">
      {/* Dynamic glow aura */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[900px] max-w-full rounded-full bg-gradient-to-r from-blue-600/15 via-sky-500/10 to-blue-600/15 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-5xl rounded-3xl border border-blue-500/30 bg-gradient-to-b from-[#0f172a]/90 via-[#0a0f1d]/90 to-[#070b14]/90 p-8 sm:p-12 md:p-16 text-center shadow-[0_0_60px_rgba(1,114,255,0.2)] backdrop-blur-2xl">
          <PopIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-[#0b162b]/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              <span>START YOUR {industry.name.toUpperCase()} AUTOMATION TODAY</span>
            </div>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Ready to Accelerate Your{" "}
              <span className="bg-gradient-to-r from-[#93c5fd] via-[#38bdf8] to-[#0172ff] bg-clip-text text-transparent">
                {industry.name} Conversions?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">
              Launch your AI sales agent on WhatsApp, Messenger, and Instagram in under 10 minutes. 
              Never let another high-intent prospect slip away.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://app.jadubot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(1,114,255,0.4)] transition-all hover:scale-[1.02]"
              >
                <Zap className="h-4 w-4 fill-current text-white" />
                <span>Launch Free Trial</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={CALENDLY_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-medium text-slate-200 backdrop-blur-sm transition-all hover:border-[#0172ff]/50 hover:bg-[#0172ff]/10 hover:text-white"
              >
                <Calendar className="h-4 w-4 text-blue-400" />
                <span>Schedule 1-on-1 Demo</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 border-t border-white/5 pt-6">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                Official Meta & WhatsApp API partner
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                5-minute zero-code onboarding
              </span>
            </div>
          </PopIn>
        </div>
      </div>
    </section>
  );
}

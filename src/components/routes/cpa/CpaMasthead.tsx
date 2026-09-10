"use client";

import { ShieldCheck, Zap, TrendingUp, ArrowRight, PhoneCall } from "lucide-react";
import { PopIn } from "@/components/animations";
import { CALENDLY_DEMO_URL } from "@/config/site";

export function CpaMasthead() {
  return (
    <section className="relative pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Subtle atmospheric ambient glow */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 -z-10 h-96 w-[720px] rounded-full bg-gradient-to-b from-[#0172ff]/15 via-[#38bdf8]/5 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <PopIn className="space-y-6 text-center sm:text-left">
          {/* Subtle Category Context Marker */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-[#0b162b]/85 px-3.5 py-1 text-xs font-semibold text-[#38bdf8] backdrop-blur-md">
            <Zap className="h-3 w-3" />
            <span>Performance Marketing Infrastructure • Meta &amp; CPA Automation</span>
          </div>

          {/* Bold Editorial Headline - No generic marketing void */}
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.14]">
            Turn Social Engagement Into Automated,{" "}
            <span className="bg-gradient-to-r from-[#93c5fd] via-[#38bdf8] to-[#0172ff] bg-clip-text text-transparent">
              Trackable CPA Conversions
            </span>
          </h1>

          {/* Subtitle with deep performance substance */}
          <p className="max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl font-normal">
            Built specifically for affiliate media buyers and performance marketing teams. Automatically turn comment engagement into inbox offer funnels, route traffic by GEO and device, and fire instant server-to-server (S2S) postbacks into your tracking platform.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <a
              href="#cpapricing"
              className="btn-primary px-7 py-3.5 text-sm font-semibold shadow-[0_0_24px_rgba(1,114,255,0.4)] flex items-center gap-2"
            >
              <span>Explore CPA Packages</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={CALENDLY_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-black px-6 py-3.5 text-sm font-semibold border border-white/15 hover:border-[#0172ff]/50 hover:text-white flex items-center gap-2"
            >
              <PhoneCall className="h-4 w-4 text-[#38bdf8]" />
              <span>Book Strategy Call</span>
            </a>
          </div>

          {/* Technical Performance Proof Strip */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="h-3.5 w-3.5" />
              </div>
              <span>Anti-ban randomized pacing</span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0172ff]/10 text-[#38bdf8] border border-[#0172ff]/20">
                <Zap className="h-3.5 w-3.5" />
              </div>
              <span>Sub-second S2S postback sync</span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <TrendingUp className="h-3.5 w-3.5" />
              </div>
              <span>3x higher EPCs than static landing pages</span>
            </div>
          </div>
        </PopIn>
      </div>
    </section>
  );
}

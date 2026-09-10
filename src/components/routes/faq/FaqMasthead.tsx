"use client";

import { HelpCircle, ShieldCheck, Zap, RotateCcw } from "lucide-react";
import { PopIn } from "@/components/animations";

export function FaqMasthead() {
  return (
    <section className="relative pt-32 pb-10 sm:pt-36 sm:pb-12 md:pt-40 md:pb-14 overflow-hidden">
      {/* Subtle atmospheric ambient glow */}
      <div
        className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 -z-10 h-96 w-[760px] rounded-full bg-gradient-to-b from-[#0172ff]/12 via-[#38bdf8]/5 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <PopIn className="space-y-6">
          {/* Context Marker */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 text-primary">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Knowledge Base &amp; Support</span>
            </span>
            <span className="text-muted-foreground/40">•</span>
            <span>Instant Answers</span>
            <span className="text-muted-foreground/40">•</span>
            <span>Dhaka, Bangladesh</span>
          </div>

          {/* High-Contrast Editorial Headline */}
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.12]">
            Everything You Need to Know About{" "}
            <span className="bg-gradient-to-r from-[#93c5fd] via-[#38bdf8] to-[#0172ff] bg-clip-text text-transparent">
              Automating with Jadubot
            </span>
          </h1>

          {/* Narrative Subtitle */}
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl font-normal">
            Clear, honest answers on Facebook Messenger automation, Instagram DM sales funnels, inside-chat eCommerce, CPA postbacks, Meta Graph API safety, and Bangladeshi payment options.
          </p>

          {/* Quick Assurance Badges */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-medium text-muted-foreground">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 text-emerald-500">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
              <span>Official Meta Graph API Compliant</span>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3.5 py-1.5 text-muted-foreground">
              <RotateCcw className="h-3.5 w-3.5 text-primary" />
              <span>7-Day Unconditional Refund Policy</span>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3.5 py-1.5 text-muted-foreground">
              <Zap className="h-3.5 w-3.5 text-amber-500" />
              <span>Banglish &amp; Bengali Language Supported</span>
            </div>
          </div>
        </PopIn>
      </div>
    </section>
  );
}

"use client";

import { Sparkles, MapPin } from "lucide-react";
import { PopIn } from "@/components/animations";

export function AboutMasthead() {
  return (
    <section className="relative pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Subtle atmospheric ambient glow, completely unobtrusive */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 -z-10 h-96 w-[720px] rounded-full bg-gradient-to-b from-[#0172ff]/12 via-[#38bdf8]/5 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <PopIn className="space-y-6">
          {/* Subtle Context Marker */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-400">
            <span className="inline-flex items-center gap-1.5 text-[#38bdf8]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>The Jadubot Story</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="inline-flex items-center gap-1 text-slate-400">
              <MapPin className="h-3 w-3 text-slate-500" />
              <span>Dhaka, Bangladesh</span>
            </span>
          </div>

          {/* Bold Editorial Headline - No generic marketing hero image */}
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.12]">
            Building the Conversational Sales Backbone for{" "}
            <span className="bg-gradient-to-r from-[#93c5fd] via-[#38bdf8] to-[#0172ff] bg-clip-text text-transparent">
              Bangladeshi Social Commerce
            </span>
          </h1>

          {/* Grounded Editorial Narrative Opening */}
          <p className="max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl font-normal">
            Jadubot was born in Dhaka to solve a silent killer in online retail: human reply latency.
            Today, our AI sales agents empower over 1,200+ local merchants to answer customer questions,
            capture orders, and drive revenue 24/7 across Facebook, Instagram, and WhatsApp.
          </p>
        </PopIn>
      </div>
    </section>
  );
}

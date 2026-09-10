"use client";

import Image from "next/image";
import { Sparkles, CheckCircle2, ShieldCheck, CreditCard, Users, RefreshCcw } from "lucide-react";
import { PopIn } from "@/components/animations";

export function PricingHero() {
  return (
    <section className="relative flex min-h-[580px] md:min-h-[640px] lg:min-h-[700px] items-start justify-center overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28">
      {/* Background Graphic with Orbital Social Icons and Glowing Horizon */}
      <div className="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden">
        <Image
          src="/assets/images/service/hero-bg.png"
          alt="Jadubot Pricing Background"
          fill
          priority
          quality={95}
          className="object-cover object-center"
        />
        {/* Overlay between background image and top contents */}
        <div className="absolute inset-0 bg-[#0c0e12]/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0e12]/60 via-transparent to-[#0c0e12]/90" />
        {/* Subtle bottom fade to blend with page background */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0c0e12] via-[#0c0e12]/70 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 text-center">
        <PopIn className="mx-auto max-w-4xl">
          {/* Subtle Glowing Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-[#0b162b]/85 px-4 py-1.5 text-xs font-semibold text-blue-200 shadow-[0_0_24px_rgba(1,114,255,0.25)] backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-[#38bdf8]" />
            <span>Transparent BDT Pricing • Zero Hidden Fees</span>
          </div>

          {/* Main Headline with Services Hero Gradient */}
          <h1 className="mt-6 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.14]">
            Simple Plans to Automate &amp; Scale Your{" "}
            <span className="bg-gradient-to-r from-[#93c5fd] via-[#38bdf8] to-[#0172ff] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(1,114,255,0.4)]">
              Social Sales
            </span>
          </h1>

          {/* Subtitle with Home Hero Channel Highlights */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Turn comments into customers 24/7 across{" "}
            <span className="font-semibold text-[#38c5ff]">Facebook</span>,{" "}
            <span className="font-semibold text-[#fe78e1]">Instagram</span> &amp;{" "}
            <span className="font-semibold text-[#6dffae]">WhatsApp</span>.
            Start free with zero risk, upgrade as your orders grow.
          </p>

          {/* Bangladeshi Merchant Trust Signals Strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-xs">
              <Users className="h-3.5 w-3.5 text-[#38bdf8]" />
              <span>1,200+ Active BD Merchants</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-xs">
              <CreditCard className="h-3.5 w-3.5 text-[#6dffae]" />
              <span>bKash, Nagad &amp; Cards Supported</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-xs">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>7-Day Money-Back Guarantee</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-xs">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#fe78e1]" />
              <span>No Credit Card Required to Start</span>
            </div>
          </div>
        </PopIn>
      </div>
    </section>
  );
}


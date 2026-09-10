"use client";

import Image from "next/image";
import { Sparkles, CheckCircle2, ShieldCheck, CreditCard, Users, RefreshCcw } from "lucide-react";
import { PopIn } from "@/components/animations";

export function PricingHero() {
  return (
    <section className="relative flex min-h-[580px] md:min-h-[640px] lg:min-h-[700px] items-start justify-center overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28">
      {/* Background Graphic with Orbital Social Icons and Glowing Horizon */}
      <div className="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden">
        {/* Dark Mode Background Graphic */}
        <Image
          src="/assets/images/service/hero-bg.png"
          alt="Jadubot Pricing Background"
          fill
          priority
          quality={95}
          className="hidden dark:block object-cover object-center"
        />
        {/* Dark Mode Overlays */}
        <div className="hidden dark:block absolute inset-0 bg-background/30" />
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/90" />
        <div className="hidden dark:block absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/70 to-transparent" />

        {/* Light Mode High-Contrast Background Graphic */}
        <Image
          src="/assets/images/service/hero-bg-light.png"
          alt="Jadubot Pricing Background"
          fill
          priority
          quality={95}
          className="block dark:hidden object-cover object-center"
        />
        {/* Light Mode Overlays */}
        <div className="dark:hidden absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/90" />
        <div className="dark:hidden absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 text-center">
        <PopIn className="mx-auto max-w-4xl">
          {/* Subtle Glowing Pill Badge */}
          <div className="solution-badge inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Transparent BDT Pricing • Zero Hidden Fees</span>
          </div>

          {/* Main Headline with Services Hero Gradient */}
          <h1 className="mt-6 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.14]">
            Simple Plans to Automate &amp; Scale Your{" "}
            <span className="bg-gradient-to-r from-primary via-sky-400 to-primary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(1,114,255,0.4)]">
              Social Sales
            </span>
          </h1>

          {/* Subtitle with Home Hero Channel Highlights */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Turn comments into customers 24/7 across{" "}
            <span className="font-semibold text-[#38c5ff]">Facebook</span>,{" "}
            <span className="font-semibold text-[#fe78e1]">Instagram</span> &amp;{" "}
            <span className="font-semibold text-[#6dffae]">WhatsApp</span>.
            Start free with zero risk, upgrade as your orders grow.
          </p>

          {/* Bangladeshi Merchant Trust Signals Strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-xs">
              <Users className="h-3.5 w-3.5 text-primary" />
              <span>1,200+ Active BD Merchants</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-xs">
              <CreditCard className="h-3.5 w-3.5 text-emerald-500" />
              <span>bKash, Nagad &amp; Cards Supported</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-xs">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
              <span>7-Day Money-Back Guarantee</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-xs">
              <CheckCircle2 className="h-3.5 w-3.5 text-sky-500" />
              <span>No Credit Card Required to Start</span>
            </div>
          </div>
        </PopIn>
      </div>
    </section>
  );
}


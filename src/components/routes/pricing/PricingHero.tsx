"use client";

import { ShieldCheck, CreditCard, Users, CheckCircle2 } from "lucide-react";
import { PopIn } from "@/components/animations";

export function PricingHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-6 sm:pt-32 sm:pb-8 md:pt-36 lg:pt-40">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[340px] w-[600px] rounded-full bg-primary/10 blur-[120px] dark:bg-primary/15" />
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center">
        <PopIn>
          {/* Glide-style Headline */}
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[1.12]">
            Simple plans for every team
          </h1>

          {/* Glide-style Subtitle */}
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Plans for individuals and growing businesses automating sales on Facebook, Instagram, and WhatsApp.
          </p>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-xs">
              <Users className="h-3.5 w-3.5 text-primary" />
              <span>1,200+ BD Merchants</span>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-xs">
              <CreditCard className="h-3.5 w-3.5 text-emerald-500" />
              <span>bKash &amp; Nagad Instant</span>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-xs">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
              <span>7-Day Money-Back</span>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-xs">
              <CheckCircle2 className="h-3.5 w-3.5 text-sky-500" />
              <span>No Credit Card Needed</span>
            </div>
          </div>
        </PopIn>
      </div>
    </section>
  );
}

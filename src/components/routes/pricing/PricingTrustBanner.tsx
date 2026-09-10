"use client";

import { ShieldCheck, CheckCircle, Headphones, Lock } from "lucide-react";
import { PopIn } from "@/components/animations";

export function PricingTrustBanner() {
  return (
    <section className="relative py-10 md:py-14 border-t border-white/5 bg-[#090c13]">
      <div className="container mx-auto max-w-7xl px-4">
        <PopIn className="space-y-10">
          {/* Payment Methods Section */}
          <div className="rounded-2xl border border-white/10 bg-[#0d121c]/80 p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-semibold text-[#38bdf8]">
                  <Lock className="h-3 w-3" />
                  <span>Bank-Grade 256-bit SSL Security</span>
                </div>
                <h3 className="mt-2 font-heading text-lg font-bold text-white sm:text-xl">
                  Supported Payment Channels in Bangladesh
                </h3>
                <p className="mt-1 text-xs text-slate-300">
                  Instant activation with auto-renewal or manual invoice payment.
                </p>
              </div>

              {/* Payment Badges Strip */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                {/* bKash */}
                <div className="flex items-center gap-2 rounded-xl border border-pink-500/25 bg-pink-500/10 px-3.5 py-2 text-xs font-bold text-pink-300 shadow-sm">
                  <span className="flex h-2 w-2 rounded-full bg-pink-400" />
                  <span>bKash</span>
                </div>

                {/* Nagad */}
                <div className="flex items-center gap-2 rounded-xl border border-amber-500/25 bg-amber-500/10 px-3.5 py-2 text-xs font-bold text-amber-300 shadow-sm">
                  <span className="flex h-2 w-2 rounded-full bg-amber-400" />
                  <span>Nagad</span>
                </div>

                {/* Rocket */}
                <div className="flex items-center gap-2 rounded-xl border border-purple-500/25 bg-purple-500/10 px-3.5 py-2 text-xs font-bold text-purple-300 shadow-sm">
                  <span className="flex h-2 w-2 rounded-full bg-purple-400" />
                  <span>Rocket</span>
                </div>

                {/* Visa & Mastercard */}
                <div className="flex items-center gap-2 rounded-xl border border-blue-500/25 bg-blue-500/10 px-3.5 py-2 text-xs font-bold text-blue-300 shadow-sm">
                  <span className="flex h-2 w-2 rounded-full bg-blue-400" />
                  <span>Visa / Mastercard</span>
                </div>

                {/* Bank / Internet Banking */}
                <div className="flex items-center gap-2 rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-2 text-xs font-bold text-emerald-300 shadow-sm">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
                  <span>Internet Banking</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Core Guarantees Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* 7-Day Guarantee */}
            <div className="relative rounded-2xl border border-emerald-500/20 bg-[#0d151c]/70 p-6 backdrop-blur-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h4 className="mt-4 font-heading text-base font-bold text-white">
                7-Day Money-Back Guarantee
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Experience any paid plan with total peace of mind. If Jadubot does not help you save time or increase conversions, get a 100% unconditional refund within 7 days.
              </p>
            </div>

            {/* Meta Official API Compliant */}
            <div className="relative rounded-2xl border border-[#0172ff]/25 bg-[#0e1625]/70 p-6 backdrop-blur-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0172ff]/15 text-[#38bdf8] border border-[#0172ff]/30">
                <CheckCircle className="h-5 w-5" />
              </div>
              <h4 className="mt-4 font-heading text-base font-bold text-white">
                100% Meta Official Compliance
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Operates strictly via verified Meta Graph &amp; WhatsApp Cloud APIs. Never risk page shadow-bans or account blocks with unsafe third-party scrapers.
              </p>
            </div>

            {/* Local Priority Support */}
            <div className="relative rounded-2xl border border-white/10 bg-[#0d121c]/70 p-6 backdrop-blur-md sm:col-span-2 lg:col-span-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6dffae]/15 text-[#6dffae] border border-[#6dffae]/30">
                <Headphones className="h-5 w-5" />
              </div>
              <h4 className="mt-4 font-heading text-base font-bold text-white">
                Dedicated Bengali Support
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Get hands-on onboarding, flow troubleshooting, and integration guidance from our Dhaka-based support team over WhatsApp, phone, or live chat.
              </p>
            </div>
          </div>
        </PopIn>
      </div>
    </section>
  );
}

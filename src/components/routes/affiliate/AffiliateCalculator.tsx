"use client";

import { useState } from "react";
import { Calculator, ArrowRight, Wallet, TrendingUp, CheckCircle } from "lucide-react";
import { PopIn } from "@/components/animations";

const QUICK_COUNTS = [5, 15, 30, 50, 100];
const AVG_PLAN_PRICE = 2500; // Average monthly subscription in BDT
const COMMISSION_RATE = 0.2; // 20% recurring

export function AffiliateCalculator() {
  const [storeCount, setStoreCount] = useState(25);

  const monthlyIncome = Math.round(storeCount * AVG_PLAN_PRICE * COMMISSION_RATE);
  const annualIncome = monthlyIncome * 12;

  return (
    <section id="calculator" className="relative py-16 sm:py-20 md:py-24 border-t border-white/[0.08]">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <PopIn className="space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38bdf8]">
            <Calculator className="h-3.5 w-3.5" />
            <span>Interactive Passive Income Simulator</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Calculate Your Monthly Recurring Commission
          </h2>

          <p className="font-bengali text-base sm:text-lg text-slate-300 max-w-2xl">
            কতজন ক্লায়েন্ট রেফার করলে আপনার মাসিক প্যাসিভ আয় কত হবে, নিচের স্লাইডার দিয়ে নিজেই হিসাব করে দেখুন।
          </p>
        </PopIn>

        {/* Calculator Control Surface (Integrated, Not a Generic Card) */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-[#0d121c]/90 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
            {/* Left: Interactive Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="store-slider" className="text-sm font-semibold text-white font-bengali">
                    সক্রিয় মার্চেন্ট বা স্টোরের সংখ্যা:
                  </label>
                  <span className="font-mono text-xl font-bold text-sky-400">
                    {storeCount} Stores
                  </span>
                </div>

                {/* Range Slider */}
                <input
                  id="store-slider"
                  type="range"
                  min="2"
                  max="120"
                  step="1"
                  value={storeCount}
                  onChange={(e) => setStoreCount(parseInt(e.target.value, 10))}
                  className="mt-3 w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#0172ff]"
                />
              </div>

              {/* Quick Select Buttons */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-500 font-bengali mr-1">কুইক সিলেক্ট:</span>
                {QUICK_COUNTS.map((count) => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setStoreCount(count)}
                    className={`rounded-lg px-3 py-1 text-xs font-semibold font-mono transition ${
                      storeCount === count
                        ? "bg-[#0172ff] text-white shadow-[0_0_12px_rgba(1,114,255,0.4)]"
                        : "border border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    {count} Stores
                  </button>
                ))}
              </div>

              {/* Transparent Calculation Breakdown */}
              <div className="pt-4 border-t border-white/[0.06] text-xs text-slate-400 space-y-1.5 font-bengali">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>গড় সাবস্ক্রিপশন ফি: ৳২,৫০০/মাস (Standard/Growth প্ল্যান)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>আপনার কমিশন রেট: ২০% লাইফটাইম রিকারিং (প্রতি মাসে ৳৫০০/ক্লায়েন্ট)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>পেমেন্ট সাইকেল: মাসে ২ বার (৭-১০ ও ২০-২৩ তারিখে সরাসরি বিকাশ/নগদে)</span>
                </div>
              </div>
            </div>

            {/* Right: Income Projection Panel (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl border border-sky-500/25 bg-gradient-to-br from-[#0c182a] to-[#080e18] p-6 sm:p-7 text-center sm:text-left shadow-xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-300 uppercase tracking-wider">
                <TrendingUp className="h-3.5 w-3.5 text-sky-400" />
                <span>Estimated Passive Income</span>
              </div>

              {/* Monthly Income in BDT */}
              <div className="mt-3">
                <div className="text-xs text-slate-400 font-bengali">মাসিক রিকারিং ইনকাম:</div>
                <div className="mt-1 font-mono text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-white">
                  ৳{monthlyIncome.toLocaleString("en-BD")}
                  <span className="text-sm font-normal text-slate-400">/মাস</span>
                </div>
              </div>

              {/* Annualized Projection */}
              <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-400 font-bengali">বাৎসরিক প্যাসিভ আয়:</span>
                <span className="font-mono font-bold text-emerald-400">
                  ৳{annualIncome.toLocaleString("en-BD")}/বছর
                </span>
              </div>

              {/* Registration CTA */}
              <a
                href="https://app.jadubot.com/affiliate_system/affiliate_sign_up"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0172ff] to-[#0158c7] py-3 text-xs sm:text-sm font-semibold text-white shadow-[0_0_20px_rgba(1,114,255,0.35)] transition hover:scale-[1.01]"
              >
                <span className="font-bengali">ইনকাম শুরু করতে সাইন-আপ করুন</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { UserCheck, Link2, Share2, Wallet, ArrowRight } from "lucide-react";
import { PopIn } from "@/components/animations";

const STEPS = [
  {
    step: "০১",
    num: "01",
    icon: UserCheck,
    title: "ফ্রি একাউন্ট রেজিস্ট্রেশন",
    description: "কোনো অগ্রিম ফি বা ক্রেডিট কার্ড ছাড়াই মাত্র ২ মিনিটে সাইন-আপ করে আপনার পার্টনার ড্যাশবোর্ড একটিভ করুন।"
  },
  {
    step: "০২",
    num: "02",
    icon: Link2,
    title: "ইউনিক রেফারেল লিংক সংগ্রহ",
    description: "লগইন করার পরপরই ড্যাশবোর্ড থেকে আপনার পার্সোনাল ট্র্যাকিং লিংক কপি করে নিন এবং ক্যাম্পেইনের জন্য রেডি হোন।"
  },
  {
    step: "০৩",
    num: "03",
    icon: Share2,
    title: "মার্চেন্ট ও ক্লায়েন্টদের শেয়ার",
    description: "ফেসবুক পেজ, গ্রুপ, ইউটিউব, ড্রপশিপিং কমিউনিটি বা আপনার পরিচিত শপ ওনারদের কাছে Jadubot রিকমেন্ড করুন।"
  },
  {
    step: "০৪",
    num: "04",
    icon: Wallet,
    title: "আজীবন ২০% কমিশন উত্তোলন",
    description: "রেফার করা ক্লায়েন্ট প্রতি মাসে রিনিউ করলেই ২০% কমিশন আপনার ব্যালেন্সে যোগ হবে — সরাসরি বিকাশ, নগদ বা ব্যাংকে উইথড্র।"
  }
];

export function AffiliateProcess() {
  return (
    <section id="how-it-works" className="relative py-16 sm:py-20 md:py-24 border-t border-white/[0.08]">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <PopIn className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38bdf8] uppercase tracking-wider">
            <span>Simple 4-Step Pipeline</span>
          </div>

          <h2 className="mt-2 font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            কীভাবে শুরু করবেন আপনার <span className="bg-gradient-to-r from-[#93c5fd] via-[#38bdf8] to-[#0172ff] bg-clip-text text-transparent">এফিলিয়েট পার্টনারশিপ</span>?
          </h2>

          <p className="font-bengali mt-3 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            কোনো জটিলতা ছাড়াই মাত্র ৪টি সহজ ধাপে শুরু করুন আপনার স্থায়ী ডিজিটাল আয়ের নতুন অধ্যায়।
          </p>
        </PopIn>

        {/* Continuous Horizontal Process Pipeline (NOT CARDS!) */}
        <div className="relative mt-16 sm:mt-20">
          {/* Desktop Connecting Timeline Line */}
          <div
            className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-[1.5px] bg-gradient-to-r from-blue-500/20 via-sky-400/60 to-blue-500/20 shadow-[0_0_10px_rgba(1,114,255,0.4)] z-0"
            aria-hidden="true"
          />

          <PopIn
            stagger={0.1}
            className="relative z-10 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:gap-6"
          >
            {STEPS.map((s, idx) => {
              const Icon = s.icon;

              return (
                <div
                  key={s.num}
                  className="group relative flex flex-col items-center text-center px-2"
                >
                  {/* Circular Node */}
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-500/35 bg-[#081226] text-sky-400 shadow-[0_0_20px_rgba(1,114,255,0.25)] transition-all duration-300 group-hover:border-sky-400/70 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.45)]">
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Step Phase Number */}
                  <div className="mt-5 flex items-center gap-1.5">
                    <span className="font-mono text-xs font-bold text-sky-400 tracking-wider">
                      PHASE {s.num}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="font-bengali text-xs text-slate-400 font-medium">
                      ধাপ {s.step}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="mt-2 font-bengali text-base sm:text-lg font-bold text-white tracking-tight leading-snug group-hover:text-sky-300 transition-colors">
                    {s.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400 font-bengali max-w-[240px]">
                    {s.description}
                  </p>
                </div>
              );
            })}
          </PopIn>
        </div>
      </div>
    </section>
  );
}

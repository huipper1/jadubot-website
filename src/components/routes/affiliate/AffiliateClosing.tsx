"use client";

import { ArrowRight, MessageCircle, ShieldCheck, Gift } from "lucide-react";
import { PopIn } from "@/components/animations";

export function AffiliateClosing() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 border-t border-white/[0.08] overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 h-72 w-[720px] rounded-full bg-gradient-to-t from-[#0172ff]/15 via-[#38bdf8]/5 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <PopIn className="mx-auto max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38bdf8] uppercase tracking-wider">
            <Gift className="h-3.5 w-3.5 text-sky-400" />
            <span>Ready to Earn with Jadubot?</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            আজই শুরু করুন, <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#93c5fd] via-[#38bdf8] to-[#0172ff] bg-clip-text text-transparent">
              আজীবন রিকারিং আয়
            </span>{" "}
            নিশ্চিত করুন
          </h2>

          <p className="font-bengali text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            কোনো ইনভেস্টমেন্ট ছাড়াই শুরু করুন বাংলাদেশের শীর্ষস্থানীয় AI চ্যাটবট পার্টনারশিপ। ফ্রি সাইন-আপের সাথে পাচ্ছেন ১ মাসের Standard প্যাকেজ সম্পূর্ণ বিনামূল্যে।
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://app.jadubot.com/affiliate_system/affiliate_sign_up"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0172ff] to-[#0158c7] px-8 py-3.5 text-sm sm:text-base font-semibold text-white shadow-[0_0_24px_rgba(1,114,255,0.4)] transition hover:scale-[1.01] hover:shadow-[0_0_32px_rgba(1,114,255,0.55)] active:scale-[0.99]"
            >
              <span className="font-bengali">রেজিস্ট্রেশন করুন (ফ্রি একাউন্ট)</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="https://wa.me/8801707991750?text=Hi%20Jadubot,%20I%20want%20to%20know%20more%20about%20your%20affiliate%20program"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-3.5 text-sm sm:text-base font-semibold text-emerald-400 transition hover:bg-emerald-500/20"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="font-bengali">হোয়াটসঅ্যাপ সাপোর্ট (01707991750)</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="font-bengali flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              ২০% লাইফটাইম রিকারিং কমিশন
            </span>
            <span className="text-slate-600">•</span>
            <span className="font-bengali flex items-center gap-1.5">
              <Gift className="h-3.5 w-3.5 text-sky-400" />
              ফ্রি ১ মাসের Standard প্যাকেজ
            </span>
            <span className="text-slate-600">•</span>
            <span className="font-bengali flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              বিকাশ / নগদ / ব্যাংকে উইথড্র
            </span>
          </div>
        </PopIn>
      </div>
    </section>
  );
}

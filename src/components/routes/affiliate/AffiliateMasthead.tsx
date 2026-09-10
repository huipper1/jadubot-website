"use client";

import { ArrowRight, Sparkles, Gift, CheckCircle2, Calculator } from "lucide-react";
import { PopIn } from "@/components/animations";

export function AffiliateMasthead() {
  return (
    <section className="relative pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Subtle atmospheric ambient glow */}
      <div
        className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 -z-10 h-96 w-[800px] rounded-full bg-gradient-to-b from-[#0172ff]/12 via-[#38bdf8]/5 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <PopIn className="space-y-6 text-center sm:text-left">
          {/* Context Marker */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs font-semibold text-slate-400">
            <span className="inline-flex items-center gap-1.5 text-[#38bdf8]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Jadubot Partner Network</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">20% Lifetime Recurring Commission</span>
            <span className="text-muted-foreground/40">•</span>
            <span className="text-muted-foreground">Dhaka, Bangladesh</span>
          </div>

          {/* High-Contrast Editorial Headline */}
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.12]">
            Build Lifetime Passive Income with{" "}
            <span className="bg-gradient-to-r from-[#93c5fd] via-[#38bdf8] to-[#0172ff] bg-clip-text text-transparent">
              Bangladesh&apos;s #1 Sales AI
            </span>
          </h1>

          {/* Bengali Subtitle in Hind Siliguri */}
          <p className="font-bengali max-w-3xl text-lg sm:text-xl text-muted-foreground leading-relaxed font-normal">
            আয়ের জাদু এখন আপনার হাতে। আপনার রেফার করা প্রতিটি ক্লায়েন্ট যতদিন Jadubot ব্যবহার করবে, প্রতি মাসের পেমেন্ট থেকে আজীবন ২০% রিকারিং কমিশন পেতে থাকবেন সরাসরি বিকাশ, নগদ অথবা ব্যাংকে।
          </p>

          {/* Free Standard Perk Callout */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-xs sm:text-sm text-sky-400">
            <Gift className="h-4 w-4 text-sky-400 shrink-0" />
            <span className="font-bengali">
              ফ্রি রেজিস্ট্রেশনের সাথেই পাচ্ছেন ১ মাসের Standard প্যাকেজ সম্পূর্ণ বিনামূল্যে!
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <a
              href="https://app.jadubot.com/affiliate_system/affiliate_sign_up"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0172ff] to-[#0158c7] px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-[0_0_24px_rgba(1,114,255,0.4)] transition hover:scale-[1.01] hover:shadow-[0_0_32px_rgba(1,114,255,0.55)] active:scale-[0.99]"
            >
              <span className="font-bengali">রেজিস্ট্রেশন করুন (ফ্রি একাউন্ট)</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm sm:text-base font-medium text-foreground transition hover:bg-muted"
            >
              <Calculator className="h-4 w-4 text-sky-400" />
              <span className="font-bengali">ইনকাম হিসাব করুন</span>
            </a>
          </div>

          {/* Horizontal Stats Strip with Hairline Dividers (Not Cards!) */}
          <div className="mt-12 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div>
              <div className="font-mono text-2xl sm:text-3xl font-extrabold text-foreground">
                ২০%
              </div>
              <div className="mt-1 text-xs text-muted-foreground font-bengali">
                লাইফটাইম রিকারিং কমিশন প্রতি মাসে
              </div>
            </div>

            <div className="md:border-l md:border-border md:pl-6">
              <div className="font-mono text-2xl sm:text-3xl font-extrabold text-foreground">
                ৳২,০০০
              </div>
              <div className="mt-1 text-xs text-muted-foreground font-bengali">
                মিনিমাম উইথড্র ব্যালেন্স
              </div>
            </div>

            <div className="border-t border-border pt-4 md:border-t-0 md:pt-0 md:border-l md:pl-6">
              <div className="font-mono text-2xl sm:text-3xl font-extrabold text-foreground">
                মাসে ২ বার
              </div>
              <div className="mt-1 text-xs text-muted-foreground font-bengali">
                ৭-১০ ও ২০-২৩ তারিখে নিশ্চিত পেমেন্ট
              </div>
            </div>

            <div className="border-t border-border pt-4 md:border-t-0 md:pt-0 md:border-l md:pl-6">
              <div className="font-mono text-2xl sm:text-3xl font-extrabold text-emerald-500">
                বিকাশ • নগদ
              </div>
              <div className="mt-1 text-xs text-muted-foreground font-bengali">
                ও যেকোনো বাংলাদেশি ব্যাংকে পেমেন্ট
              </div>
            </div>
          </div>
        </PopIn>
      </div>
    </section>
  );
}

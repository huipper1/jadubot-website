"use client";

import { AlertCircle, CheckCircle2, ShieldCheck } from "lucide-react";

import { PopIn } from "@/components/animations";

export function AffiliateGuidelines() {
  return (
    <section className="relative border-t border-border py-16 sm:py-20 md:py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <PopIn className="mx-auto mb-14 max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#38bdf8] uppercase">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Transparency &amp; Code of Conduct</span>
          </div>

          <h2 className="mt-2 font-heading text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            পেমেন্ট নীতিমালা ও পার্টনার আচরণবিধি
          </h2>

          <p className="mx-auto mt-3 max-w-xl font-bengali text-base leading-relaxed text-muted-foreground sm:text-lg">
            স্বচ্ছ, নির্ভরযোগ্য ও দীর্ঘমেয়াদী পার্টনারশিপ নিশ্চিত করতে নিচের গাইডলাইনগুলো অনুসরণ
            করুন।
          </p>
        </PopIn>

        {/* Unboxed 2-Column Comparison Layout (NOT CARDS!) */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 md:divide-x md:divide-border">
          {/* Col 1: Payout Rules */}
          <PopIn delay={0.05} className="space-y-6">
            <div className="flex items-center gap-2.5 border-b border-border pb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-500">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <h3 className="font-bengali text-lg font-bold text-foreground sm:text-xl">
                পেমেন্ট ও উইথড্র নীতিমালা
              </h3>
            </div>

            <div className="space-y-5 font-bengali">
              <div className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                <div>
                  <h4 className="text-sm font-bold text-foreground sm:text-base">
                    ইনস্ট্যান্ট ব্যালেন্স ক্রেডিট
                  </h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    আপনার রেফার করা ক্লায়েন্ট প্যাকেজ কেনা মাত্রই ২০% কমিশন সাথে সাথে আপনার
                    ড্যাশবোর্ড ব্যালেন্সে যুক্ত হবে।
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                <div>
                  <h4 className="text-sm font-bold text-foreground sm:text-base">
                    মিনিমাম ব্যালেন্স ৳২,০০০
                  </h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    অ্যাকাউন্টে নূন্যতম ২,০০০ টাকা ব্যালেন্স জমা হলেই আপনি সরাসরি উইথড্র রিকোয়েস্ট
                    পাঠাতে পারবেন।
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                <div>
                  <h4 className="text-sm font-bold text-foreground sm:text-base">
                    মাসে ২ বার নিশ্চিত পেমেন্ট সাইকেল
                  </h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    প্রতি মাসের ৭-১০ তারিখ ও ২০-২৩ তারিখে সব পেন্ডিং উইথড্র ভেরিফাই করে সরাসরি
                    একাউন্টে ট্রান্সফার করা হয়।
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                <div>
                  <h4 className="text-sm font-bold text-foreground sm:text-base">
                    বিকাশ, নগদ ও ব্যাংক একাউন্ট
                  </h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    বিকাশ পার্সোনাল, নগদ, রকেট অথবা সরাসরি বাংলাদেশের যেকোনো তফসিলি ব্যাংক
                    অ্যাকাউন্টে টাকা নেওয়া যাবে।
                  </p>
                </div>
              </div>
            </div>
          </PopIn>

          {/* Col 2: Conduct & Fair Use */}
          <PopIn delay={0.1} className="space-y-6 md:pl-16">
            <div className="flex items-center gap-2.5 border-b border-border pb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/15 text-sky-400">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <h3 className="font-bengali text-lg font-bold text-foreground sm:text-xl">
                পালনীয় পার্টনার আচরণবিধি
              </h3>
            </div>

            <div className="space-y-5 font-bengali">
              <div className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                <div>
                  <h4 className="text-sm font-bold text-foreground sm:text-base">
                    সঠিক ও অনুমোদিত তথ্য পরিবেশন
                  </h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    Jadubot-এর আসল ফিচার ও সঠিক অফার মার্চেন্টদের জানান। কোনো প্রকার অসত্য বা
                    বিভ্রান্তিকর তথ্য প্রচার সম্পূর্ণ নিষিদ্ধ।
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                <div>
                  <h4 className="text-sm font-bold text-foreground sm:text-base">
                    অযাচিত স্প্যামিং নিষিদ্ধ
                  </h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    অন্যান্য এফিলিয়েট পার্টনারদের কমেন্ট বক্সে বা অননুমোদিত গ্রুপে নির্বিচারে লিংক
                    স্প্যামিং গ্রহণযোগ্য নয়।
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                <div>
                  <h4 className="text-sm font-bold text-foreground sm:text-base">
                    ভুয়া অফিসিয়াল পেজ নিষিদ্ধ
                  </h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    কোম্পানির নাম, ট্রেডমার্ক বা লোগো অবিকল অনুকরণ করে ভুয়া অফিসিয়াল পেজ তৈরি করা
                    যাবে না।
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                <div>
                  <h4 className="text-sm font-bold text-foreground sm:text-base">
                    অফিসিয়াল পার্টনার কমিউনিটি
                  </h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    Jadubot-এর অফিসিয়াল ফেসবুক পার্টনার গ্রুপে যুক্ত থেকে নিয়মিত সেলস ট্রেইনিং ও
                    নতুন ফিচার আপডেট ফলো করুন।
                  </p>
                </div>
              </div>
            </div>
          </PopIn>
        </div>
      </div>
    </section>
  );
}

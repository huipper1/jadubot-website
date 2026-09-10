"use client";

import { Percent, Wallet, BarChart3, Award, Sparkles, Gift } from "lucide-react";
import { PopIn } from "@/components/animations";

const ADVANTAGES = [
  {
    icon: Percent,
    title: "২০% লাইফটাইম রিকারিং কমিশন",
    subtitle: "Lifetime Recurring",
    description:
      "এককালীন রেফারেল বোনাস নয়। আপনার রেফার করা ক্লায়েন্ট যতদিন Jadubot ব্যবহার করবে, তাদের প্রতি মাসের পেমেন্টের ওপর ২০% কমিশন লাইফটাইম আপনার অ্যাকাউন্টে স্বয়ংক্রিয়ভাবে জমা হতে থাকবে।"
  },
  {
    icon: Wallet,
    title: "মাসে ২ বার নিশ্চিত পেমেন্ট সাইকেল",
    subtitle: "Bi-Monthly Payouts",
    description:
      "অ্যাকাউন্টে নূন্যতম ২০০০ টাকা হলেই প্রতি মাসের ৭-১০ তারিখ ও ২০-২৩ তারিখে সরাসরি বিকাশ, নগদ, রকেট অথবা যেকোনো বাংলাদেশি ব্যাংক একাউন্টে টাকা ট্রান্সফার করা হয়।"
  },
  {
    icon: BarChart3,
    title: "স্বচ্ছ রিয়েল-টাইম পার্টনার ড্যাশবোর্ড",
    subtitle: "Real-Time Tracking",
    description:
      "কতজন লিংকে ক্লিক করল, কয়জন সাইন-আপ করল, কে সাবস্ক্রিপশন নিল এবং আপনার কারেন্ট ব্যালেন্স কত — সবকিছু ২৪/৭ লাইভ মনিটর করুন আপনার পার্সোনাল এফিলিয়েট পোর্টাল থেকে।"
  },
  {
    icon: Award,
    title: "টপ পারফর্মারদের জন্য মেগা রিওয়ার্ডস",
    subtitle: "Partner Bonuses",
    description:
      "নিয়মিত মাসিক আয়ের পাশাপাশি সেরা পারফর্মারদের জন্য রয়েছে বিশেষ গ্যাজেট গিফট, ব্র্যান্ডেড ল্যাপটপ, স্মার্টফোন এবং এক্সক্লুসিভ হাই-টিয়ার কমিশন রেট।"
  }
];

export function AffiliateAdvantages() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 border-t border-border">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Narrative (5 cols) */}
          <div className="lg:col-span-5">
            <PopIn className="space-y-5 sticky top-28">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38bdf8]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>PARTNER ADVANTAGES</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Why Marketers &amp; Agencies Partner with Jadubot
              </h2>

              <p className="font-bengali text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
                ডিজিটাল মার্কেটার, ফ্রিল্যান্সার, ড্রপশিপার এবং এজেন্সি মালিকদের জন্য জাদুবট তৈরি করেছে বাংলাদেশের সবচেয়ে নিরাপদ ও লাভজনক রিকারিং ইনকাম মডেল।
              </p>

              <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-5">
                <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
                  <Gift className="h-4 w-4" />
                  <span className="font-bengali">বিশেষ সাইন-আপ বোনাস</span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground font-bengali leading-relaxed">
                  পার্টনার রেজিস্ট্রেশন করলেই আপনি পাচ্ছেন Jadubot Standard প্যাকেজ (মূল্য ৳১,৫০০) সম্পূর্ণ ফ্রি ১ মাসের জন্য।
                </p>
              </div>
            </PopIn>
          </div>

          {/* Right Column: Unboxed Feature Rows with Fine Dividers (7 cols - NOT CARDS!) */}
          <div className="lg:col-span-7">
            <PopIn className="divide-y divide-border">
              {ADVANTAGES.map((adv, idx) => {
                const Icon = adv.icon;

                return (
                  <div
                    key={adv.subtitle}
                    className={`group py-8 first:pt-0 last:pb-0 transition-all duration-200`}
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      {/* Accent Index Node */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted border border-border text-primary transition-colors group-hover:bg-[#0172ff]/15 group-hover:border-[#0172ff]/40">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-sky-400 tracking-wider">
                            0{idx + 1} // {adv.subtitle}
                          </span>
                        </div>

                        <h3 className="mt-1.5 text-lg sm:text-xl font-bold text-foreground font-bengali group-hover:text-primary transition-colors">
                          {adv.title}
                        </h3>

                        <p className="mt-2 text-sm sm:text-base text-muted-foreground font-bengali leading-relaxed">
                          {adv.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </PopIn>
          </div>
        </div>
      </div>
    </section>
  );
}

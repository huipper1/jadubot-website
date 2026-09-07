import { UserPlus, Link2, Share2, Banknote } from "lucide-react";

const STEPS = [
  {
    step: "০১",
    icon: UserPlus,
    title: "রেজিস্ট্রেশন ও অ্যাকাউন্ট তৈরি",
    description:
      "সম্পূর্ণ বিনামূল্যে সাইন-আপ করে অ্যাকাউন্ট কনফার্ম করুন। কোনো ক্রেডিট কার্ড বা অগ্রিম ফি প্রয়োজন নেই।"
  },
  {
    step: "০২",
    icon: Link2,
    title: "ইউনিক রেফারেল লিংক সংগ্রহ",
    description:
      "লগইন করার পরপরই আপনার পার্সোনাল ড্যাশবোর্ড থেকে ইউনিক রেফারেল লিংক (যেমন: app.jadubot.com/?ref=your_id) পেয়ে যাবেন।"
  },
  {
    step: "০৩",
    icon: Share2,
    title: "শেয়ার ও প্রমোশন",
    description:
      "ফেসবুক গ্রুপ, পেজ, ইউটিউব ভিডিও, ব্লগ পোস্ট বা মেসেঞ্জারে পরিচিত অনলাইন মার্চেন্টদের সাথে লিংকটি শেয়ার করুন।"
  },
  {
    step: "০৪",
    icon: Banknote,
    title: "লাইফটাইম কমিশন ও উত্তোলন",
    description:
      "যখনই কেউ আপনার লিংকের মাধ্যমে সাবস্ক্রিপশন নিবে, প্রতি ট্রানজেকশনে সাথে সাথে ২০% কমিশন আপনার অ্যাকাউন্টে জমা হবে।"
  }
];

export function AffiliateHowItWorks() {
  return (
    <section id="how-it-works" className="relative py-16 md:py-24 bg-surface/50 border-t border-white/5">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
            Simple 4-Step Process
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            কীভাবে কাজ করে <span className="text-gradient">এফিলিয়েট প্রোগ্রাম</span>?
          </h2>
          <p className="mt-4 text-muted-foreground">
            মাত্র ৪টি সহজ পদক্ষেপে শুরু করুন আপনার ডিজিটাল উপার্জনের নতুন যাত্রা।
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.step} className="relative flex flex-col rounded-2xl border border-white/5 bg-surface/40 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-white/20">{s.step}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mt-5 text-base font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

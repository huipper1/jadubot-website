import { Percent, TrendingUp, Gift, Wallet, BarChart3, Award } from "lucide-react";
import { PopIn } from "@/components/animations";

const BENEFITS = [
  {
    icon: Percent,
    title: "প্রতি ক্লায়েন্টে ২০% লাইফটাইম কমিশন",
    description:
      "আপনার রেফার করা ক্লায়েন্ট যতদিন Jadubot সাবস্ক্রিপশন চালু রাখবেন, তাদের প্রতি মাসের পেমেন্টের ওপর আপনি ২০% কমিশন লাইফটাইম পেতে থাকবেন।"
  },
  {
    icon: TrendingUp,
    title: "লেভেল আপ, ইনকামও আপ!",
    description:
      "রেফারেলের সংখ্যা বাড়ার সাথে সাথে আপনার কমিশন লেভেল আরও বৃদ্ধি পাবে। টপ পারফর্মারদের জন্য রয়েছে বিশেষ কাস্টম রেট ও এক্সক্লুসিভ পার্টনার বোনাস।"
  },
  {
    icon: Gift,
    title: "ফ্রি ১ মাসের Standard প্যাকেজ!",
    description:
      "এফিলিয়েট রেজিস্ট্রেশনের সাথে সাথেই আপনি কোনো খরচ ছাড়াই পাচ্ছেন ১ মাসের জন্য Jadubot Standard প্যাকেজ একদম ফ্রি।"
  },
  {
    icon: Wallet,
    title: "সহজ ও দ্রুত পেমেন্ট উত্তোলন",
    description:
      "অ্যাকাউন্টে নূন্যতম ২০০০ টাকা হলেই প্রতি মাসের ৭-১০ ও ২০-২৩ তারিখে বিকাশ, নগদ, রকেট অথবা সরাসরি ব্যাংক একাউন্টে পেমেন্ট রিসিভ করুন।"
  },
  {
    icon: BarChart3,
    title: "রিয়েলটাইম এফিলিয়েট ড্যাশবোর্ড",
    description:
      "ক্লিক সংখ্যা, সাইন-আপ, কনভার্সন এবং লাইভ ব্যালেন্স এক ক্লিকে নিজের ডেডিকেটেড ড্যাশবোর্ড থেকে স্বচ্ছভাবে মনিটর করুন।"
  },
  {
    icon: Award,
    title: "টপ এফিলিয়েটরদের জন্য মেগা গিফট",
    description:
      "নিয়মিত কমিশনের বাইরে প্রতি মাসে সেরা পারফর্মারদের জন্য রয়েছে ব্র্যান্ডেড ল্যাপটপ, স্মার্টফোন এবং এক্সক্লুসিভ টেক গ্যাজেটস।"
  }
];

export function AffiliateBenefits() {
  return (
    <section className="relative py-16 md:py-24 border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <PopIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            কেন হবেন <span className="text-gradient">Jadubot এফিলিয়েট</span> পার্টনার?
          </h2>
          <p className="mt-4 text-muted-foreground">
            ডিজিটাল মার্কেটার, ফ্রিল্যান্সার, এজেন্সি এবং ই-কমার্স পরামর্শকদের জন্য জাদুবট তৈরি করেছে বাংলাদেশের সবচেয়ে নির্ভরযোগ্য আয়ের সুযোগ।
          </p>
        </PopIn>

        <PopIn stagger={0.08} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="glass-card group rounded-2xl p-7 transition-all duration-300 hover:border-brand-orange/40 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
              </div>
            );
          })}
        </PopIn>
      </div>
    </section>
  );
}

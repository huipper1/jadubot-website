import { ArrowRight, Sparkles, Gift, CheckCircle2 } from "lucide-react";
import { Badge } from "@/ui";

export function AffiliateHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="hero-gradient pointer-events-none absolute inset-0 -z-10" />

      <div className="container relative z-10 text-center">
        <div className="mx-auto max-w-3xl">
          <Badge variant="default" className="px-3.5 py-1 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5 mr-1.5 text-brand-orange" />
            Jadubot High-Paying Partner Program
          </Badge>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-[1.15]">
            JaduBot <span className="text-gradient">এফিলিয়েট প্রোগ্রাম</span>
          </h1>

          <p className="mx-auto mt-4 text-xl font-medium text-brand-orange sm:text-2xl">
            আয়ের জাদু এখন আপনার হাতে! প্রতি রেফারেলে ২০% লাইফটাইম রিকারিং কমিশন।
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            বাংলাদেশের #1 AI চ্যাটবট প্ল্যাটফর্ম প্রমোট করুন এবং প্রতি মাসে প্যাসিভ ইনকাম তৈরি করুন।
            ফ্রি রেজিস্ট্রেশনের সাথেই পাচ্ছেন ১ মাসের Standard প্যাকেজ সম্পূর্ণ বিনামূল্যে!
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://app.jadubot.com/affiliate_system/affiliate_sign_up"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-brand-orange px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-orange/20 transition-all hover:bg-brand-orange/90 hover:scale-[1.02] active:scale-[0.98]"
            >
              রেজিস্ট্রেশন করুন
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-base font-medium text-foreground backdrop-blur-sm transition-all hover:bg-white/10"
            >
              কীভাবে কাজ করে?
            </a>
          </div>

          {/* Quick Perks Pill */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground sm:text-sm">
            <span className="inline-flex items-center gap-1.5 text-foreground">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              ২০% রিকারিং প্রতি মাসে
            </span>
            <span className="inline-flex items-center gap-1.5 text-foreground">
              <Gift className="h-4 w-4 text-brand-orange" />
              ফ্রি ১ মাসের Standard প্যাকেজ
            </span>
            <span className="inline-flex items-center gap-1.5 text-foreground">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              বিকাশ / নগদ / ব্যাংকে পেমেন্ট
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

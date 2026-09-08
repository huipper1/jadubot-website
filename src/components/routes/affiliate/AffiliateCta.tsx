import { ArrowRight, MessageCircle } from "lucide-react";
import { PopIn } from "@/components/animations";

export function AffiliateCta() {
  return (
    <section className="relative py-16 md:py-24 border-t border-white/5 overflow-hidden">
      <div className="hero-gradient pointer-events-none absolute inset-0 -z-10" />

      <div className="container mx-auto max-w-7xl relative z-10 text-center">
        <PopIn className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            আজই শুরু করুন, <span className="text-gradient">আজীবন আয়</span> নিশ্চিত করুন!
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            কোনো ইনভেস্টমেন্ট ছাড়াই শুরু করুন বাংলাদেশের শীর্ষস্থানীয় AI চ্যাটবট পার্টনারশিপ।
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://app.jadubot.com/affiliate_system/affiliate_sign_up"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-brand-orange px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-orange/20 transition-all hover:bg-brand-orange/90 hover:scale-[1.02] active:scale-[0.98]"
            >
              রেজিস্ট্রেশন লিংক
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>

            <a
              href="https://wa.me/8801707991750"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-3.5 text-base font-semibold text-emerald-400 backdrop-blur-sm transition-all hover:bg-emerald-500/20"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              হোয়াটসঅ্যাপ সাপোর্ট (01707991750)
            </a>
          </div>
        </PopIn>
      </div>
    </section>
  );
}

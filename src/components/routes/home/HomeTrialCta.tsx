import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function HomeTrialCta() {
  return (
    <section id="trial-section" className="relative py-20 md:py-28 overflow-hidden bg-[#0c0e12]">
      {/* Subtle purple radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 flex w-full justify-center">
        <div className="h-64 w-96 rounded-full bg-[#8e2de2]/20 blur-[100px]" />
      </div>

      <div className="container">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#373a41] bg-gradient-to-br from-[#181d27]/90 to-[#12151c]/90 p-10 md:p-14 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#c084fc]">
                <Sparkles className="h-3.5 w-3.5" />
                Transform Your Social Commerce
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
                Discover why customers are loving us!
              </h2>
              <p className="mt-4 text-base text-[#cecfd2]">
                Join hundreds of Bangladeshi merchants using Jadubot to automate customer replies, process in-chat orders, and scale revenue 24/7.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <Link href="/book-a-free-demo" className="btn-primary">
                <span>Book a live demo</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://app.jadubot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-black"
              >
                <span>Get Started Free</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, Bot, CheckCircle2 } from "lucide-react";
import { CALENDLY_DEMO_URL } from "@/config/site";

export function BlogCtaBanner() {
  return (
    <section
      aria-label="Try Jadubot Automation"
      className="mt-16 rounded-3xl border border-border bg-card p-8 sm:p-10 lg:p-12 relative overflow-hidden shadow-card"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -right-16 -bottom-16 h-72 w-72 rounded-full bg-[#0172ff]/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#0172ff]/30 bg-[#0172ff]/10 px-3 py-1 text-xs font-semibold text-[#38bdf8] mb-4">
          <Bot className="h-3.5 w-3.5" />
          <span>F-commerce Automation</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-snug">
          Ready to put your Facebook &amp; Instagram sales on autopilot?
        </h2>

        <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
          Join over 1,200+ Bangladeshi merchants using Jadubot to reply to comments within seconds, send product prices directly to Messenger inboxes, and capture midnight orders effortlessly.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>Free forever starter plan</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>Setup in under 5 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>No credit card required</span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="https://app.jadubot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-[#0172ff]/25 hover:scale-[1.02] transition-transform"
          >
            <span>Start Free Starter Plan</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <Link
            href={CALENDLY_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-black inline-flex items-center text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl hover:text-[#38bdf8] transition-colors"
          >
            <span>Book a Free 1-on-1 Demo</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

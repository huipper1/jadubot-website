import Link from "next/link";

import { ArrowRight, CheckCircle2 } from "lucide-react";

import { CALENDLY_DEMO_URL } from "@/config/site";

export function BlogCtaBanner() {
  return (
    <section
      aria-label="Try Jadubot Automation"
      className="relative mt-16 overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card sm:p-10 lg:p-12"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -right-16 -bottom-16 h-72 w-72 rounded-full bg-[#0172ff]/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="text-2xl leading-snug font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          Ready to put your Facebook &amp; Instagram sales on autopilot?
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Join over 1,200+ Bangladeshi merchants using Jadubot to reply to comments within seconds,
          send product prices directly to Messenger inboxes, and capture midnight orders
          effortlessly.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
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

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://app.jadubot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-xs font-semibold shadow-lg shadow-[#0172ff]/25 transition-transform hover:scale-[1.02] sm:text-sm"
          >
            <span>Start Free Starter Plan</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <Link
            href={CALENDLY_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-black inline-flex items-center rounded-xl px-6 py-3.5 text-xs font-semibold transition-colors hover:text-[#38bdf8] sm:text-sm"
          >
            <span>Book a Free 1-on-1 Demo</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

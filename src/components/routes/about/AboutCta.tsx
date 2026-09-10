"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { PopIn } from "@/components/animations";

export function AboutCta() {
  return (
    <section className="relative py-20 md:py-28 border-t border-white/10 bg-gradient-to-b from-[#070a10] to-[#04060a]">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <PopIn className="space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to turn customer inquiries into{" "}
            <span className="bg-gradient-to-r from-[#93c5fd] via-[#38bdf8] to-[#0172ff] bg-clip-text text-transparent">
              round-the-clock sales?
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
            Join over 1,200+ Bangladeshi businesses automating comments, inboxes, and order flows with Jadubot today.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://app.jadubot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-3.5 text-sm font-semibold shadow-[0_0_24px_rgba(1,114,255,0.4)]"
            >
              <span>Get Started Free</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              href="/contact"
              className="btn-black px-7 py-3.5 text-sm font-semibold border border-white/15 hover:border-[#0172ff]/50 hover:text-white"
            >
              <MessageSquare className="h-4 w-4 text-[#38bdf8]" />
              <span>Talk with Us</span>
            </Link>
          </div>

          <p className="text-xs text-slate-500 pt-2">
            Free forever starter plan • No credit card required • Instant Facebook &amp; Instagram setup
          </p>
        </PopIn>
      </div>
    </section>
  );
}

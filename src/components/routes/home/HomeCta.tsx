"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { PopIn } from "@/components/animations";
import { CALENDLY_DEMO_URL } from "@/config/site";

export function HomeCta() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto max-w-7xl">
        <PopIn className="relative overflow-hidden rounded-3xl border border-[#373a41] bg-gradient-to-br from-[#4a00e0]/20 via-[#181d27] to-[#0c0e12] p-10 text-center shadow-[0_0_60px_rgba(142,45,226,0.15)] md:p-20">
          {/* Ambient Glow */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-96 rounded-full bg-[#8e2de2]/25 blur-[100px]"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="solution-badge">
              <Sparkles className="h-3.5 w-3.5 inline mr-1" />
              <span>Transform Your Social Commerce</span>
            </span>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
              Ready to automate your chats and{" "}
              <span className="text-gradient">skyrocket your sales?</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-[#cecfd2] sm:text-lg">
              Start engaging customers with instant replies, smart product suggestions, and
              automated checkout right inside Facebook Messenger, Instagram, and WhatsApp.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={CALENDLY_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group btn-primary inline-flex w-full items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_25px_rgba(142,45,226,0.35)] transition-all duration-300 hover:scale-[1.02] sm:w-auto"
              >
                <span>Book a Free Live Demo</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <Link
                href="/service"
                className="btn-black inline-flex w-full items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 sm:w-auto"
              >
                <span>View All Services</span>
              </Link>
            </div>
          </div>
        </PopIn>
      </div>
    </section>
  );
}

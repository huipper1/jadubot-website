"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { gsap, useGSAP } from "@/lib/animations";
import { CALENDLY_DEMO_URL } from "@/config/site";

export function HomeTrialCta() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion || !cardRef.current) return;

      gsap.fromTo(
        cardRef.current,
        {
          scale: 0.88,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            once: true
          }
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="trial-section"
      className="relative py-20 md:py-28 overflow-hidden bg-[#0c0e12] border-t border-[#373a41]/60"
    >
      {/* Background Ambience */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-70"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 flex w-full justify-center">
        <div className="h-80 w-[600px] rounded-full bg-[#8e2de2]/15 blur-[120px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={cardRef} className="w-full will-change-transform origin-center">
          <div
            className="group relative flex flex-col justify-between overflow-hidden rounded-[1.5rem] border border-[#373a41]/80 bg-[#12151c]/90 min-h-[380px] sm:min-h-[420px] transition-all duration-300 hover:border-[#8e2de2]/50 hover:bg-[#181d27]/90 hover:shadow-[0_12px_36px_-8px_rgba(142,45,226,0.2),_inset_0_0_24px_2px_rgba(142,45,226,0.08)] hover:-translate-y-1 p-8 sm:p-12 lg:p-16 w-full max-w-7xl mx-auto"
            style={{
              boxShadow: "inset 0 0 20px 1px rgba(158, 119, 237, 0.06)"
            }}
          >
          {/* Subtle top-right ambient flare inside the card */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#8e2de2]/20 blur-[80px] group-hover:bg-[#8e2de2]/30 transition-all duration-500"
            aria-hidden="true"
          />

          {/* Top content block */}
          <div className="relative z-10 max-w-2xl">
            <div className="solution-badge inline-flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-[#c084fc]" />
              <span>Transform Your Social Commerce</span>
            </div>

            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.15]">
              Discover why customers are loving us!
            </h2>

            <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#cecfd2]/85 leading-relaxed max-w-xl">
              Join hundreds of Bangladeshi merchants using Jadubot to automate customer replies, process in-chat orders, and scale revenue 24/7.
            </p>
          </div>

          {/* Bottom actions & benefits block */}
          <div className="relative z-10 mt-8 sm:mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-6 border-t border-[#373a41]/40">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={CALENDLY_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Book a live demo</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://app.jadubot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-black"
              >
                <span>Get Started Free</span>
              </a>
            </div>

            {/* Quick Trust Highlights */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#cecfd2]/70">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#6dffae]" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#6dffae]" />
                <span>5-minute setup</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ArrowRight, CaretRight as ChevronRight, Star } from "@/components/icons";

import { CardStrip } from "./CardStrip";
import { HeroGridBackground } from "@/components/HeroGridBackground";
import { CALENDLY_DEMO_URL } from "@/config/site";
import { usePopAnimation } from "@/lib/animations";

export function HomeHero() {
  const containerRef = usePopAnimation<HTMLDivElement>({ start: "top 95%", duration: 0.8 });

  return (
    <section className="relative w-full overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-36">
      {/* Themed technical line-grid background (no sky photo) */}
      <HeroGridBackground />

      <div ref={containerRef} className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        {/* Top: 5-Star Social Proof Review Pill */}
        <div className="flex justify-center">
          <div
            data-preserve-radius="true"
            className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-1.5 shadow-xs backdrop-blur-md transition-all hover:border-primary/40 dark:border-white/10 dark:bg-slate-900/70"
          >
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
              <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
              <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
              <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
              <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
            </div>

            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Based on <span className="font-bold text-slate-900 dark:text-white">1,200+</span> businesses
            </span>
          </div>
        </div>

        {/* Central Display Headline */}
        <div className="mx-auto mt-6 max-w-4xl text-center">
          <h1 className="font-heading text-4xl leading-[1.12] font-black tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-[68px] dark:text-white">
            Your #1 AI Sales Agent <br className="hidden sm:inline" />
            with <span className="text-primary dark:text-[#38bdf8]">no setup</span> &amp;{" "}
            <span className="text-slate-900 dark:text-white">no hidden fees</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg md:text-xl dark:text-slate-300 font-medium">
            All your customer conversations, automated orders, and multi-channel support unified
            in one fast, easy platform.
          </p>

          {/* Dual CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <a
              data-preserve-radius="true"
              href={CALENDLY_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] hover:shadow-primary/40 active:scale-[0.98]"
            >
              <span>Book a Live Demo</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              data-preserve-radius="true"
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/80 bg-white/80 px-7 py-3.5 text-sm font-semibold text-slate-800 shadow-xs backdrop-blur-md transition-all hover:scale-[1.02] hover:bg-white active:scale-[0.98] dark:border-white/10 dark:bg-slate-900/80 dark:text-white dark:hover:bg-slate-800"
            >
              <span>Get Started Free</span>
              <ChevronRight className="h-4 w-4 text-slate-500" />
            </Link>
          </div>
        </div>

        {/* The Card Strip (Main Feature with curved 3D perspective and Framer Motion expansion) */}
        <div className="mt-6 sm:mt-8 md:mt-10">
          <CardStrip />
        </div>

        {/* Centered Rating Text with 5 Yellow Star Icons */}
        <div className="mt-4 flex flex-col items-center justify-center gap-1.5 select-none text-center sm:mt-6">
          <p className="text-sm font-bold text-slate-800 drop-shadow-2xs sm:text-base dark:text-slate-200">
            Rated 4.9/5 by 4,900+ clients
          </p>
          <div className="flex items-center gap-1 text-amber-400">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400 drop-shadow-2xs" />
            <Star className="h-4 w-4 fill-amber-400 text-amber-400 drop-shadow-2xs" />
            <Star className="h-4 w-4 fill-amber-400 text-amber-400 drop-shadow-2xs" />
            <Star className="h-4 w-4 fill-amber-400 text-amber-400 drop-shadow-2xs" />
            <Star className="h-4 w-4 fill-amber-400 text-amber-400 drop-shadow-2xs" />
          </div>
        </div>

        {/* Bottom Social Proof Metrics Row */}
        <div className="mx-auto mt-14 max-w-5xl border-t border-slate-200/80 pt-8 sm:mt-16 sm:pt-10 dark:border-white/10">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
            <div className="text-center">
              <span className="font-heading text-2xl font-black tracking-tight text-slate-950 sm:text-3xl md:text-4xl dark:text-white">
                500+
              </span>
              <p className="mt-1 text-xs font-semibold text-slate-600 sm:text-sm dark:text-slate-400">
                Businesses Automated
              </p>
            </div>

            <div className="text-center">
              <span className="font-heading text-2xl font-black tracking-tight text-primary sm:text-3xl md:text-4xl dark:text-sky-400">
                3x
              </span>
              <p className="mt-1 text-xs font-semibold text-slate-600 sm:text-sm dark:text-slate-400">
                Average Sales Boost
              </p>
            </div>

            <div className="text-center">
              <span className="font-heading text-2xl font-black tracking-tight text-emerald-600 sm:text-3xl md:text-4xl dark:text-emerald-400">
                24/7
              </span>
              <p className="mt-1 text-xs font-semibold text-slate-600 sm:text-sm dark:text-slate-400">
                Instant Auto-Replies
              </p>
            </div>

            <div className="text-center">
              <span className="font-heading text-2xl font-black tracking-tight text-slate-950 sm:text-3xl md:text-4xl dark:text-white">
                98%
              </span>
              <p className="mt-1 text-xs font-semibold text-slate-600 sm:text-sm dark:text-slate-400">
                Customer Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


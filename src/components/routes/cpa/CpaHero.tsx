"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, ShieldAlert, Cpu } from "lucide-react";
import { PopIn } from "@/components/animations";
import { CALENDLY_DEMO_URL } from "@/config/site";

export function CpaHero() {
  return (
    <section className="relative flex min-h-[620px] md:min-h-[680px] lg:min-h-[740px] items-start justify-center overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32">
      {/* Background Graphic with Orbital Social Icons and Glowing Horizon */}
      <div className="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden">
        <Image
          src="/assets/images/service/hero-bg.png"
          alt="Jadubot CPA Background"
          fill
          priority
          quality={95}
          className="object-cover object-center"
        />
        {/* Overlay between background image and top contents */}
        <div className="absolute inset-0 bg-[#0c0e12]/15" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0e12]/50 via-transparent to-[#0c0e12]/80" />
        {/* Subtle bottom fade to blend with page background */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0c0e12] via-[#0c0e12]/60 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 text-center">
        <PopIn className="mx-auto max-w-4xl">
          {/* Glowing Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/35 bg-[#1a0c33]/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-200 shadow-[0_0_18px_rgba(168,85,247,0.25)] backdrop-blur-md">
            <Flame className="h-3.5 w-3.5 text-purple-400" />
            <span>GLOBAL CPA PERFORMANCE INFRASTRUCTURE</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-sans mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.12]">
            Turn Comments Into CPA Leads <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#d8b4fe] via-[#c084fc] to-[#a855f7] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(192,132,252,0.4)]">
              — Automatically
            </span>
          </h1>

          {/* Subtitle Paragraph */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
            The all-in-one automation suite for Facebook &amp; Instagram affiliate marketers.
            Capture leads, trigger server-to-server postbacks, and supercharge campaign
            conversion rates with zero manual work.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="btn-primary inline-flex w-full items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(142,45,226,0.35)] transition-all hover:scale-[1.02] sm:w-auto"
            >
              <span>Get CPA Automation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href={CALENDLY_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:border-brand/40 sm:w-auto"
            >
              <span>Book Strategy Call</span>
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div className="flex items-center justify-center gap-2 text-xs text-slate-300">
              <ShieldAlert className="h-4 w-4 text-purple-400" />
              <span>Anti-ban protection</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-slate-300">
              <Cpu className="h-4 w-4 text-purple-400" />
              <span>Instant postback sync</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2 text-xs text-slate-300">
              <Flame className="h-4 w-4 text-purple-400" />
              <span>3x higher EPCs</span>
            </div>
          </div>
        </PopIn>
      </div>
    </section>
  );
}


"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { PopIn } from "@/components/animations";

export function ServiceHero() {
  return (
    <section className="relative flex min-h-[560px] md:min-h-[620px] lg:min-h-[680px] items-start justify-center overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32">
      {/* Background Graphic with Orbital Social Icons and Glowing Horizon */}
      <div className="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden">
        <Image
          src="/assets/images/service/hero-bg.png"
          alt="Jadubot Services Background"
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
        <PopIn className="mx-auto max-w-3xl">
          {/* Glowing Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/35 bg-[#1a0c33]/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-200 shadow-[0_0_18px_rgba(168,85,247,0.25)] backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            <span>OUR SERVICES</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-sans mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.12]">
            Smart Automation <br className="hidden sm:inline" />
            Solutions to Scale Your <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#d8b4fe] via-[#c084fc] to-[#a855f7] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(192,132,252,0.4)]">
              Business
            </span>
          </h1>

          {/* Subtitle Paragraph */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
            Effortlessly engage with customers, automate public comments and private DMs,
            and sell products 24/7 across Facebook, Instagram, and WhatsApp.
          </p>
        </PopIn>
      </div>
    </section>
  );
}


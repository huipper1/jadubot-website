"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { PopIn } from "@/components/animations";

export function ServiceHero() {
  return (
    <section className="relative flex min-h-[560px] md:min-h-[620px] lg:min-h-[680px] items-start justify-center overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32">
      {/* Background Graphic with Orbital Social Icons and Glowing Horizon */}
      <div className="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden">
        {/* Dark Mode Background Graphic */}
        <Image
          src="/assets/images/service/hero-bg.png"
          alt="Jadubot Services Background"
          fill
          priority
          quality={95}
          className="hidden dark:block object-cover object-center"
        />
        {/* Dark Mode Overlays */}
        <div className="hidden dark:block absolute inset-0 bg-background/15" />
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/80" />
        <div className="hidden dark:block absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/60 to-transparent" />

        {/* Light Mode High-Contrast Background Graphic */}
        <Image
          src="/assets/images/service/hero-bg-light.png"
          alt="Jadubot Services Background"
          fill
          priority
          quality={95}
          className="block dark:hidden object-cover object-center"
        />
        {/* Light Mode Overlays */}
        <div className="dark:hidden absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/90" />
        <div className="dark:hidden absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
    
      <div className="container relative z-10 mx-auto max-w-7xl px-4 text-center">
        <PopIn className="mx-auto max-w-3xl">
          {/* Glowing Pill Badge */}
          <div className="solution-badge">
            <Sparkles className="h-3.5 w-3.5 text-blue-400" />
            <span>OUR SERVICES</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-sans mt-6 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.12]">
            Powerful Automations <br />
            for{" "}
            <span className="bg-gradient-to-r from-[#93c5fd] via-[#38bdf8] to-[#0172ff] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(1,114,255,0.4)]">
              Modern Businesses
            </span>
          </h1>

          {/* Subtitle Paragraph */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            From customer engagement to lead conversion, our automation solutions help you save time, boost sales, and grow faster.
          </p>
        </PopIn>
      </div>
    </section>
  );
}


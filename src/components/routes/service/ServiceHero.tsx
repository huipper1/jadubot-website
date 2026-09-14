"use client";

import { PopIn } from "@/components/animations";
import { CALENDLY_DEMO_URL } from "@/config/site";
import { ServiceGrid } from "./ServiceGrid";

export function ServiceHero() {
  return (
    <section className="relative pt-28 sm:pt-32 md:pt-36 pb-4 sm:pb-6 overflow-visible">
      {/* Ambient background glow without background images */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[550px] -z-10 select-none overflow-hidden">
        {/* Dark Mode Ambient Radial Glow */}
        <div className="hidden dark:block absolute top-12 left-1/2 -translate-x-1/2 h-[420px] w-[800px] rounded-full bg-[#0172ff]/15 blur-[140px]" />
        
        {/* Light Mode Soft Sky Ambient Glow */}
        <div className="dark:hidden absolute top-8 left-1/2 -translate-x-1/2 h-[380px] w-[750px] rounded-full bg-gradient-to-b from-primary/12 via-sky-300/10 to-transparent blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 text-center">
        <PopIn className="mx-auto max-w-4xl">
          {/* Main Headline with Jadubot Signature Gradient */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-extrabold tracking-tight text-foreground leading-[1.12] [text-wrap:balance]">
            Automate your business. <br />
            <span className="bg-gradient-to-r from-primary via-[#0052cc] to-primary dark:from-[#93c5fd] dark:via-[#38bdf8] dark:to-[#0172ff] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(21,93,252,0.3)]">
              Save hours every day.
            </span>
          </h1>

          {/* Subtitle with Theme Typography */}
          <p className="mx-auto mt-4 sm:mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            We design and deploy AI systems that eliminate manual work, reduce costs, and scale your operations — fast.
          </p>

          {/* Dual Pill CTA Buttons matching Website Theme */}
          <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <a
              href={CALENDLY_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(1,114,255,0.4)] transition-all hover:scale-[1.02]"
            >
              <span>Book a free call</span>
            </a>
            <a
              href="#services-showcase"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border/80 bg-card/80 hover:bg-card text-foreground px-7 py-3.5 text-sm font-semibold backdrop-blur-md transition-all hover:border-primary/50 shadow-sm hover:scale-[1.02]"
            >
              <span>See how it works</span>
            </a>
          </div>
        </PopIn>
      </div>

      {/* Service Grid Showcase Stage - Positioned right below hero CTA buttons */}
      <div className="mt-6 sm:mt-8">
        <ServiceGrid />
      </div>
    </section>
  );
}


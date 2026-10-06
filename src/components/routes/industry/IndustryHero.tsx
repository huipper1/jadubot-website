"use client";

import { ArrowRight, CalendarBlank as Calendar, CheckCircle as CheckCircle2, Lightning as Zap } from "@/components/icons";

import { CALENDLY_DEMO_URL } from "@/config/site";

import { PopIn } from "@/components/animations";
import { SectionImage } from "@/components/SectionImage";

import type { IndustryData } from "./industry-data";

interface IndustryHeroProps {
  industry: IndustryData;
}

export function IndustryHero({ industry }: IndustryHeroProps) {
  const { hero } = industry;

  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28">
      {/* Background ambient light effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 select-none">
        {/* Soft radial blue glow */}
        <div className="absolute top-0 left-1/2 h-[500px] w-[800px] max-w-full -translate-x-1/2 rounded-full bg-gradient-to-b from-[#0172ff]/20 via-[#0172ff]/5 to-transparent blur-3xl" />
        <div className="absolute top-[30%] right-[-10%] h-[350px] w-[450px] rounded-full bg-[#38bdf8]/10 blur-3xl" />
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
        {/* Bottom fade to page background */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Copy, CTAs, Platforms */}
          <div className="text-center lg:col-span-7 lg:text-left">
            <PopIn>
              {/* Dynamic H1 Headline with Electric Blue Gradient */}
              <h1 className="font-sans text-3xl leading-[1.12] font-extrabold tracking-tight text-foreground sm:text-5xl md:text-5xl lg:text-[56px]">
                {hero.titleStart}{" "}
                <span className="bg-gradient-to-r from-[#93c5fd] via-[#38bdf8] to-[#0172ff] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(1,114,255,0.4)]">
                  {hero.titleHighlight}
                </span>{" "}
                {hero.titleEnd && <span>{hero.titleEnd}</span>}
              </h1>

              {/* Subtitle */}
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg lg:max-w-xl">
                {hero.subtitle}
              </p>

              {/* Dual CTAs */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <a
                  href="https://app.jadubot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(1,114,255,0.4)] transition-all hover:scale-[1.02]"
                >
                  <Zap className="h-4 w-4 fill-current text-white" />
                  <span>{hero.primaryCtaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href={CALENDLY_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-foreground"
                >
                  <Calendar className="h-4 w-4 text-blue-400" />
                  <span>{hero.secondaryCtaText}</span>
                </a>
              </div>

              {/* Omnichannel Platforms Row */}
              {hero.platforms && hero.platforms.length > 0 && (
                <div className="mt-10 border-t border-border/60 pt-6">
                  <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                    Supported Messaging Channels
                  </span>
                  <div className="mt-3 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                    {hero.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        <CheckCircle2 className="h-3 w-3 text-blue-400" />
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </PopIn>
          </div>

          {/* Right Column: 3D Thematic Visual with Floating Stat Badges */}
          <div className="relative mx-auto w-full max-w-lg lg:col-span-5 lg:max-w-none">
            <PopIn delay={0.15}>
              <div className="shadow-elevated relative rounded-3xl border border-border bg-card p-3">
                {/* Glow ring behind visual */}
                <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-blue-600/30 via-sky-400/20 to-blue-700/30 opacity-75 blur-xl" />

                {/* 3D Illustration Graphic using SectionImage */}
                <SectionImage
                  src={`/assets/images/industry/${industry.slug}/hero.webp`}
                  alt={`${industry.name} AI Automation Solution`}
                  aspect="4/3"
                  priority
                  badge="AI System Active"
                />

                {/* Floating Metric Badges */}
                <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                  {hero.statHighlights.map((stat, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center rounded-xl border border-primary/20 bg-card/80 p-2.5 text-center backdrop-blur-md transition-all hover:border-primary/40"
                    >
                      <span className="font-mono text-base font-bold text-primary sm:text-lg">
                        {stat.value}
                      </span>
                      <span className="mt-0.5 line-clamp-1 text-[10px] font-medium text-muted-foreground sm:text-xs">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </PopIn>
          </div>
        </div>
      </div>
    </section>
  );
}

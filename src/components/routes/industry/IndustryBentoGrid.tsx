"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/utils";
import {
  CaretRight,
  CheckCircle,
  ChartBar,
  Robot as Bot,
  CalendarBlank,
  Database,
  Globe,
  Headset,
  Tray as Inbox,
  PaperPlaneTilt,
  ShoppingBag,
  ShoppingCart,
  TrendUp,
  Truck,
  UserCheck,
  Lightning as Zap,
  Shield,
  Eye,
  Clock,
  Stack,
  GitFork,
  CreditCard,
  WhatsAppIcon
} from "@/components/icons";

import type { IndustryData } from "./industry-data";
import { getSectionImage } from "@/lib/section-images";

interface IndustryBentoGridProps {
  industry: IndustryData;
  className?: string;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Filter: GitFork,
  Calendar: CalendarBlank,
  Database,
  UserCheck,
  Search: Eye,
  Globe,
  Inbox,
  ChartBar,
  ShoppingBag,
  Truck,
  CreditCard,
  TrendUp,
  CheckCircle,
  Bot,
  Send: PaperPlaneTilt,
  PaperPlaneTilt,
  ShoppingCart,
  Layers: Stack,
  Eye,
  Shield,
  Clock,
  Zap,
  Headset,
  Printer: Clock
};

export function IndustryBentoGrid({ industry, className = "" }: IndustryBentoGridProps) {
  const { bento, slug } = industry;

  // Retrieve bento illustrations from central registry
  const bentoA = getSectionImage("industry", slug, "bento-a") || {
    src: `/assets/images/industry/${slug}/bento-a.webp`,
    alt: `${industry.name} AI chat on smartphone`
  };

  const bentoB = getSectionImage("industry", slug, "bento-b") || {
    src: `/assets/images/industry/${slug}/bento-b.webp`,
    alt: `${industry.name} supporting automation flow`
  };

  // Map 6 cards (A through F)
  const itemA = bento.items[0] || { title: "Automated Workflows", description: "Seamless AI operational execution." };
  const itemB = bento.items[1] || { title: "Smart Engagement", description: "Direct customer interaction channels." };
  const itemC = bento.items[2] || { title: "Performance Lift", description: "Instant quantitative improvement." };
  const itemD = bento.items[3] || { title: "Intelligent Routing", description: "Autonomous data triage." };
  const itemE = bento.items[4] || { title: "Unified Sync", description: "Multi-channel data preservation." };
  const itemF = bento.items[5] || { title: "Instant Continuity", description: "Zero lag communication pipeline." };

  // Resolve icons
  const IconD = (itemD.iconName && ICON_MAP[itemD.iconName]) || Zap;
  const IconF1 = (itemF.iconName && ICON_MAP[itemF.iconName]) || Bot;
  const IconF2 = slug.includes("ecommerce") || slug.includes("retail")
    ? ShoppingBag
    : slug.includes("restaurant")
    ? WhatsAppIcon
    : slug.includes("finance")
    ? Shield
    : slug.includes("healthcare")
    ? UserCheck
    : slug.includes("saas")
    ? Database
    : slug.includes("logistics")
    ? Truck
    : slug.includes("agency")
    ? Stack
    : UserCheck;

  // Split title if accent word exists
  const titleParts = bento.titleAccent
    ? bento.title.split(bento.titleAccent)
    : [bento.title];

  return (
    <section className={cn("relative w-full py-16 md:py-24 overflow-hidden border-t border-border/60 bg-card/40 dark:bg-card/20", className)}>
      {/* Background Architectural Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[15%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl dark:bg-primary/8" />
        <div className="absolute right-[-10%] bottom-[15%] h-[500px] w-[500px] rounded-full bg-sky-400/5 blur-3xl dark:bg-sky-400/8" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header (Centered, Eyebrow, Max ~7 words heading, 1-sentence subtext) */}
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
          {bento.eyebrow && (
            <div
              data-preserve-radius="true"
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-xs dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse dark:bg-sky-400" />
              <span>{bento.eyebrow}</span>
            </div>
          )}

          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-tight">
            {bento.titleAccent && titleParts.length > 1 ? (
              <>
                {titleParts[0]}
                <span className="font-serif italic font-medium header-accent">
                  {bento.titleAccent}
                </span>
                {titleParts[1]}
              </>
            ) : (
              bento.title
            )}
          </h2>

          {bento.subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {bento.subtitle}
            </p>
          )}
        </div>

        {/* ════════════════════════════════════════════════════════════════
            BENTO GRID: 3 cols x 3 rows (Desktop), 2 cols (Tablet), 1 col (Mobile)
            6 distinct cards forming a clean solid rectangle with no holes.
           ════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-[240px] md:auto-rows-[250px] lg:auto-rows-[240px]">
          
          {/* ─────────────────────────────────────────────────────────────
              CARD A: Tall Hero Card (col 1, rows 1-2 on desktop)
              Main visual = Transparent PNG phone with industry chat
             ───────────────────────────────────────────────────────────── */}
          <div
            data-preserve-radius="true"
            className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/60 bg-gradient-to-br from-white/90 via-sky-50/50 to-blue-50/80 p-6 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl dark:border-white/10 dark:from-slate-900/90 dark:via-slate-900/70 dark:to-blue-950/40 lg:col-span-1 lg:row-span-2 min-h-[380px] lg:min-h-full"
          >
            {/* Ambient Background Glow Blob */}
            <div className="pointer-events-none absolute -top-12 -right-12 h-64 w-64 rounded-full bg-primary/10 blur-3xl dark:bg-sky-400/10" aria-hidden="true" />
            
            {/* Visual (Transparent PNG Phone) */}
            <div className="relative mx-auto w-full flex-1 flex items-center justify-center my-4 overflow-visible pointer-events-none">
              <div className="relative w-[280px] sm:w-[320px] h-[340px] sm:h-[380px] transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]">
                <Image
                  src={bentoA.src}
                  alt={bentoA.alt}
                  fill
                  sizes="(max-width: 768px) 300px, 340px"
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Text Overlay (Bottom) */}
            <div className="relative z-10 pt-2">
              <h3 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-foreground">
                {itemA.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                {itemA.description}
              </p>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              CARD B: Wide Feature Card (cols 2-3, row 1 on desktop)
              Visual = Transparent PNG cluster on right, text on left
             ───────────────────────────────────────────────────────────── */}
          <div
            data-preserve-radius="true"
            className="group relative flex flex-col sm:flex-row items-center justify-between overflow-hidden rounded-[28px] border border-white/60 bg-gradient-to-br from-white/90 via-purple-50/40 to-blue-50/70 p-6 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl dark:border-white/10 dark:from-slate-900/90 dark:via-slate-900/70 dark:to-indigo-950/40 lg:col-span-2 lg:row-span-1 min-h-[260px] lg:min-h-full"
          >
            {/* Ambient Glow */}
            <div className="pointer-events-none absolute top-0 right-0 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl dark:bg-indigo-400/10" aria-hidden="true" />

            {/* Text (Left) */}
            <div className="relative z-10 sm:max-w-[55%] flex flex-col justify-center">
              <div
                data-preserve-radius="true"
                className="inline-flex w-fit items-center gap-1.5 rounded-full bg-purple-500/10 px-3 py-1 text-[11px] font-bold text-purple-600 dark:bg-purple-400/10 dark:text-purple-300 mb-3"
              >
                <span>Industry Focus</span>
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-foreground">
                {itemB.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {itemB.description}
              </p>
            </div>

            {/* Visual (Right) */}
            <div className="relative w-full sm:w-[45%] h-[160px] sm:h-full flex items-center justify-center pointer-events-none mt-4 sm:mt-0">
              <div className="relative w-[220px] sm:w-[260px] h-[150px] sm:h-[180px] transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]">
                <Image
                  src={bentoB.src}
                  alt={bentoB.alt}
                  fill
                  sizes="(max-width: 768px) 220px, 260px"
                  className="object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              CARD C: Big-Stat Card (col 2, row 2 on desktop)
              Visual = Real verified benchmark number with fading chevrons
             ───────────────────────────────────────────────────────────── */}
          <div
            data-preserve-radius="true"
            className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/60 bg-gradient-to-br from-white/90 via-emerald-50/40 to-teal-50/70 p-6 md:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl dark:border-white/10 dark:from-slate-900/90 dark:via-slate-900/70 dark:to-emerald-950/40 min-h-[220px]"
          >
            {/* Ambient emerald wash */}
            <div className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-emerald-500/15 blur-2xl dark:bg-emerald-400/10" aria-hidden="true" />

            {/* Upper: Stat + Chevrons */}
            <div className="relative z-10">
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-4xl sm:text-5xl font-black tracking-tight text-emerald-600 dark:text-emerald-400">
                  {bento.statItem?.value || "99%"}
                </span>
                {/* Fading chevrons */}
                <div className="flex items-center text-emerald-500 dark:text-emerald-400" aria-hidden="true">
                  <CaretRight className="h-5 w-5 opacity-90 transition-transform motion-safe:group-hover:translate-x-0.5" />
                  <CaretRight className="h-5 w-5 -ml-2.5 opacity-60 transition-transform motion-safe:group-hover:translate-x-1" />
                  <CaretRight className="h-5 w-5 -ml-2.5 opacity-30 transition-transform motion-safe:group-hover:translate-x-1.5" />
                </div>
              </div>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                Verified Benchmark
              </p>
            </div>

            {/* Lower Text */}
            <div className="relative z-10 pt-4">
              <h4 className="font-heading text-base md:text-lg font-bold text-foreground">
                {bento.statItem?.label ?? itemC.title}
              </h4>
              <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                {itemC.description}
              </p>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              CARD D: Icon-Orb Card (col 3, row 2 on desktop)
              Visual = Icon orb with concentric pulsing ripple rings
             ───────────────────────────────────────────────────────────── */}
          <div
            data-preserve-radius="true"
            className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/60 bg-gradient-to-br from-white/90 via-sky-50/50 to-indigo-50/60 p-6 md:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl dark:border-white/10 dark:from-slate-900/90 dark:via-slate-900/70 dark:to-sky-950/40 min-h-[220px]"
          >
            {/* Visual: Glowing Icon Orb with 3 Concentric Ripple Rings */}
            <div className="relative flex items-center justify-center my-2 pointer-events-none">
              <div className="relative flex items-center justify-center h-24 w-24">
                {/* Concentric rings */}
                <div className="absolute inset-0 rounded-full border border-primary/20 dark:border-sky-400/25 animate-ping opacity-40 duration-3000" aria-hidden="true" />
                <div className="absolute -inset-3 rounded-full border border-primary/15 dark:border-sky-400/20" aria-hidden="true" />
                <div className="absolute -inset-6 rounded-full border border-primary/10 dark:border-sky-400/10" aria-hidden="true" />
                
                {/* Center glowing orb */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-600 shadow-lg shadow-primary/30 transition-transform duration-300 motion-safe:group-hover:scale-110">
                  <IconD className="h-7 w-7 text-white" />
                </div>
              </div>
            </div>

            {/* Lower Text */}
            <div className="relative z-10 pt-2">
              <h4 className="font-heading text-base md:text-lg font-bold text-foreground">
                {itemD.title}
              </h4>
              <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                {itemD.description}
              </p>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              CARD E: Stacked Mini-UI Card (cols 1-2, row 3 on desktop)
              Visual = Overlapping mini glass cards built from real content
             ───────────────────────────────────────────────────────────── */}
          <div
            data-preserve-radius="true"
            className="group relative flex flex-col sm:flex-row items-center justify-between overflow-hidden rounded-[28px] border border-white/60 bg-gradient-to-br from-white/90 via-slate-50/60 to-blue-50/50 p-6 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl dark:border-white/10 dark:from-slate-900/90 dark:via-slate-900/70 dark:to-slate-800/60 lg:col-span-2 lg:row-span-1 min-h-[250px] lg:min-h-full"
          >
            {/* Text (Left) */}
            <div className="relative z-10 sm:max-w-[55%] flex flex-col justify-center">
              <div
                data-preserve-radius="true"
                className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold text-primary dark:bg-sky-400/10 dark:text-sky-300 mb-3"
              >
                <span>Autonomous Pipeline</span>
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-foreground">
                {itemE.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {itemE.description}
              </p>
            </div>

            {/* Visual (Right): Stacked mini cards peeking out */}
            <div className="relative w-full sm:w-[45%] h-[150px] flex items-center justify-center pointer-events-none mt-4 sm:mt-0">
              <div className="relative w-[240px] h-[130px]">
                {/* Back Card */}
                <div
                  className="absolute top-0 right-2 w-[210px] rounded-2xl border border-white/40 bg-white/70 p-3 shadow-md backdrop-blur-md transition-transform duration-500 motion-safe:group-hover:-translate-y-2 motion-safe:group-hover:rotate-[-4deg] dark:border-white/10 dark:bg-slate-800/80"
                  style={{ transform: "rotate(-3deg)" }}
                >
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-[11px] font-bold text-slate-700 dark:text-slate-200">
                      System Operational
                    </span>
                  </div>
                  <div className="mt-1 text-[10px] text-muted-foreground">
                    100% Automated · Zero Lag
                  </div>
                </div>

                {/* Front Card */}
                <div
                  className="absolute bottom-1 right-6 w-[210px] rounded-2xl border border-white/80 bg-white/95 p-3.5 shadow-xl backdrop-blur-md transition-transform duration-500 motion-safe:group-hover:translate-y-1 motion-safe:group-hover:rotate-[2deg] dark:border-white/15 dark:bg-slate-900/95"
                  style={{ transform: "rotate(3deg)" }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-black text-foreground">
                        {itemE.title}
                      </span>
                    </div>
                    <span className="rounded-md bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-bold text-emerald-600 dark:text-emerald-400">
                      ACTIVE
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <div className="h-full w-4/5 rounded-full bg-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              CARD F: Connection / Flow Visual Card (col 3, row 3 on desktop)
              Visual = Two icon orbs connected by animated flow line
             ───────────────────────────────────────────────────────────── */}
          <div
            data-preserve-radius="true"
            className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/60 bg-gradient-to-br from-white/90 via-amber-50/40 to-orange-50/60 p-6 md:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-xl dark:border-white/10 dark:from-slate-900/90 dark:via-slate-900/70 dark:to-amber-950/40 min-h-[220px]"
          >
            {/* Visual: Two icon orbs joined by connecting line with animated pulses */}
            <div className="relative flex items-center justify-center my-2 pointer-events-none">
              <div className="flex items-center justify-between w-[180px]">
                {/* Node 1 */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-md shadow-primary/20 transition-transform duration-300 motion-safe:group-hover:scale-110">
                  <IconF1 className="h-6 w-6" />
                </div>

                {/* Connecting animated flow line */}
                <div className="relative flex-1 mx-2 h-0.5 bg-gradient-to-r from-primary via-amber-400 to-amber-500">
                  {/* Flowing arrow / pulse */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center text-amber-500 dark:text-amber-400 animate-pulse">
                    <CaretRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Node 2 */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white shadow-md shadow-amber-500/20 transition-transform duration-300 motion-safe:group-hover:scale-110">
                  <IconF2 className="h-6 w-6" />
                </div>
              </div>
            </div>

            {/* Lower Text */}
            <div className="relative z-10 pt-2">
              <h4 className="font-heading text-base md:text-lg font-bold text-foreground">
                {itemF.title}
              </h4>
              <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                {itemF.description}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

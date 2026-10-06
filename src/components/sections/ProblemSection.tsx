"use client";

import Image from "next/image";
import Link from "next/link";

import { CaretRight as ChevronRight } from "@/components/icons";
import { usePopAnimation } from "@/lib/animations";
import { HOME_CHANNEL_CARDS } from "@/lib/section-images";

export function ProblemSection() {
  const containerRef = usePopAnimation<HTMLDivElement>({ start: "top 90%", duration: 0.8 });

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Architectural Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px] dark:bg-primary/8" />
        <div className="absolute bottom-10 right-10 h-[350px] w-[350px] rounded-full bg-emerald-500/5 blur-[120px] dark:bg-emerald-500/10" />
      </div>

      <div ref={containerRef} className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            data-preserve-radius="true"
            className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary shadow-xs dark:text-sky-300"
          >
            <span>All-in-One Sales Automation</span>
          </div>

          <h2 className="mt-5 font-heading text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Autonomous AI Automation <br className="hidden sm:inline" />
            Across Every Channel
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            One unified engine for your social commerce, web presence, and acquisition channels.
            Stop losing leads to slow responses and scale effortlessly.
          </p>
        </div>

        {/* 5-Card Bento Grid: Row 1 (3 equal cols) + Row 2 (2 cols: wide 2-cols + 1-col) */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Facebook Automation */}
          <div
            data-preserve-radius="true"
            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl dark:border-white/10 dark:bg-[#0f1422]"
          >
            {/* Visual Frame: Full-bleed touching card borders */}
            <div
              data-preserve-radius="true"
              className="relative aspect-[16/10] w-full overflow-hidden bg-muted/30 dark:bg-slate-900/40"
            >
              <Image
                src={HOME_CHANNEL_CARDS.facebook.src}
                alt={HOME_CHANNEL_CARDS.facebook.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out"
              />
            </div>

            {/* Content Info (Padded) */}
            <div className="flex flex-1 flex-col justify-between p-6 pt-5">
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  Facebook Automation
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  Turn post comments into private Messenger conversations, capture orders inside chat,
                  and confirm Cash on Delivery without manual staff intervention.
                </p>
              </div>

              <div className="mt-4 pt-2">
                <Link
                  href="/platform/facebook-automation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-all hover:gap-2.5 dark:text-sky-400"
                >
                  <span>Explore Facebook Agent</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: WhatsApp Automation */}
          <div
            data-preserve-radius="true"
            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl dark:border-white/10 dark:bg-[#0f1422]"
          >
            {/* Visual Frame: Full-bleed touching card borders */}
            <div
              data-preserve-radius="true"
              className="relative aspect-[16/10] w-full overflow-hidden bg-muted/30 dark:bg-slate-900/40"
            >
              <Image
                src={HOME_CHANNEL_CARDS.whatsapp.src}
                alt={HOME_CHANNEL_CARDS.whatsapp.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out"
              />
            </div>

            {/* Content Info (Padded) */}
            <div className="flex flex-1 flex-col justify-between p-6 pt-5">
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  WhatsApp Automation
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  Broadcast verified promotional alerts, automate booking confirmations, and provide
                  24/7 VIP assistance directly inside Bangladesh&apos;s most used app.
                </p>
              </div>

              <div className="mt-4 pt-2">
                <Link
                  href="/platform/whatsapp-automation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 transition-all hover:gap-2.5 dark:text-emerald-400"
                >
                  <span>Explore WhatsApp Agent</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Instagram Automation */}
          <div
            data-preserve-radius="true"
            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40 hover:shadow-xl dark:border-white/10 dark:bg-[#0f1422] md:col-span-2 lg:col-span-1"
          >
            {/* Visual Frame: Full-bleed touching card borders */}
            <div
              data-preserve-radius="true"
              className="relative aspect-[16/10] w-full overflow-hidden bg-muted/30 dark:bg-slate-900/40"
            >
              <Image
                src={HOME_CHANNEL_CARDS.instagram.src}
                alt={HOME_CHANNEL_CARDS.instagram.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out"
              />
            </div>

            {/* Content Info (Padded) */}
            <div className="flex flex-1 flex-col justify-between p-6 pt-5">
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  Instagram Automation
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  Trigger automatic DM replies when followers reply to stories or comment on Reels.
                  Share catalog links and checkout buttons while buyer intent is hot.
                </p>
              </div>

              <div className="mt-4 pt-2">
                <Link
                  href="/platform/instagram-automation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-600 transition-all hover:gap-2.5 dark:text-pink-400"
                >
                  <span>Explore Instagram Agent</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4: Full Website Automation */}
          <div
            data-preserve-radius="true"
            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl md:col-span-2 dark:border-white/10 dark:bg-[#0f1422]"
          >
            {/* Visual Frame: Full-bleed touching card borders */}
            <div
              data-preserve-radius="true"
              className="relative aspect-[16/10] w-full overflow-hidden bg-muted/30 dark:bg-slate-900/40"
            >
              <Image
                src={HOME_CHANNEL_CARDS.website.src}
                alt={HOME_CHANNEL_CARDS.website.alt}
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out"
              />
            </div>

            {/* Content Info (Padded) */}
            <div className="flex flex-1 flex-col justify-between p-6 pt-5">
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                  Full Website Automation
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  Embed smart AI sales widgets on your eCommerce store. Handle stock inquiries,
                  recommend matching products, auto-calculate shipping rates, and pass confirmed orders straight to Pathao or Steadfast.
                </p>
              </div>

              <div className="mt-4 pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-all hover:gap-2.5 dark:text-sky-400"
                >
                  <span>Explore Web Live Assistant</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 5: CPA Marketing Automation (Texts on top, transparent phone anchored at bottom edge) */}
          <div
            data-preserve-radius="true"
            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-6 pb-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-xl dark:border-white/10 dark:bg-[#0f1422]"
          >
            {/* Content Info (Top) */}
            <div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  CPA Marketing Automation
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  Automate high-volume lead qualification, server-to-server postbacks, and payout triggers.
                  Route quality conversions directly into affiliate platforms in milliseconds.
                </p>
              </div>

              <div className="mt-4">
                <Link
                  href="/cpa-marketing-automation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 transition-all hover:gap-2.5 dark:text-amber-400"
                >
                  <span>Explore CPA Engine</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Visual Frame: Transparent Phone anchored to bottom filling space */}
            <div
              data-preserve-radius="true"
              className="relative -mb-1 mt-6 flex min-h-[300px] flex-1 items-end justify-center overflow-hidden sm:min-h-[340px]"
            >
              <Image
                src={HOME_CHANNEL_CARDS.cpa.src}
                alt={HOME_CHANNEL_CARDS.cpa.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-contain object-bottom transition-transform duration-500 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

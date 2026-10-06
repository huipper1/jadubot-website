"use client";

import { useRef } from "react";

import { ArrowRight, Robot as Bot, CheckCircle as CheckCircle2, Clock, Globe, ChatTeardropDots as MessageSquare, PaperPlaneTilt as Send, Lightning as Zap } from "@/components/icons";

import { CALENDLY_DEMO_URL } from "@/config/site";
import { FacebookIcon, WhatsAppIcon } from "@/components/icons";
import { usePopAnimation } from "@/lib/animations";
import { SectionImage } from "@/components/SectionImage";
import type { PlatformData } from "@/types/platform";

interface PlatformHeroProps {
  platform: PlatformData;
}

export function PlatformHero({ platform }: PlatformHeroProps) {
  const contentRef = usePopAnimation<HTMLDivElement>({ start: "top 95%", duration: 0.8 });
  const visualRef = usePopAnimation<HTMLDivElement>({
    start: "top 90%",
    delay: 0.15,
    duration: 0.85
  });

  const statsContainerRef = useRef<HTMLDivElement | null>(null);
  const statsCardsRef = useRef<HTMLDivElement[]>([]);

  usePopAnimation(statsCardsRef, {
    trigger: statsContainerRef,
    stagger: 0.08,
    start: "top 85%"
  });

  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-44">
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 h-96 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-primary/20 via-sky-400/10 to-transparent opacity-60 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Headline and CTAs */}
          <div
            ref={contentRef}
            className="text-center will-change-transform lg:col-span-7 lg:text-left"
          >
            <h1 className="font-heading text-3xl leading-[1.12] font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {platform.heroTitle.includes(platform.heroHighlight) ? (
                <>
                  {platform.heroTitle.split(platform.heroHighlight)[0]}
                  <span className="text-blue-gradient">{platform.heroHighlight}</span>
                  {platform.heroTitle.split(platform.heroHighlight)[1]}
                </>
              ) : (
                platform.heroTitle
              )}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              {platform.heroDescription}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href={CALENDLY_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full rounded-xl px-6 py-3.5 text-sm shadow-[0_4px_20px_rgba(1,114,255,0.35)] sm:w-auto"
              >
                <span>Book a live demo</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="https://app.jadubot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-black w-full rounded-xl border border-border px-6 py-3.5 text-sm sm:w-auto"
              >
                <span>Portal Login</span>
              </a>
            </div>

            {/* Micro assurances */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-muted-foreground lg:justify-start">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>Zero Coding Required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>Instant 24/7 Deployment</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>Official API Integration</span>
              </div>
            </div>
          </div>

          {/* Right Column: Platform Visual Mockup & Section Image */}
          <div ref={visualRef} className="will-change-transform lg:col-span-5">
            <SectionImage
              src={`/assets/images/platform/${platform.slug}/hero.webp`}
              alt={`${platform.name} Automation Interface`}
              aspect="16/10"
              priority
              badge="Official API"
            />
          </div>
        </div>

        {/* Hero Stats Strip */}
        <div ref={statsContainerRef} className="mt-16 border-t border-border/80 pt-8 sm:mt-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {platform.heroStats.map((stat, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  if (el) statsCardsRef.current[idx] = el;
                }}
                className="flex items-center justify-center gap-4 rounded-2xl border border-border/80 bg-card/60 p-4 will-change-transform lg:justify-start"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {idx === 0 && <Clock className="h-6 w-6" />}
                  {idx === 1 && <Zap className="h-6 w-6" />}
                  {idx === 2 && <CheckCircle2 className="h-6 w-6" />}
                </div>
                <div>
                  <div className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface PlatformHeroVisualProps {
  visualType: "whatsapp" | "facebook" | "instagram" | "telegram" | "webchat";
}

function PlatformHeroVisual({ visualType }: PlatformHeroVisualProps) {
  if (visualType === "whatsapp") {
    return (
      <div className="shadow-elevated relative mx-auto w-full max-w-md rounded-3xl border border-emerald-500/30 bg-card p-4 sm:p-5">
        {/* WhatsApp Header */}
        <div className="-mx-4 -mt-4 flex items-center justify-between rounded-t-3xl border-b border-border border-emerald-500/20 bg-emerald-600/10 p-4 pb-3.5">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white shadow-sm">
              <WhatsAppIcon className="h-5 w-5 fill-white text-white" />
              <span className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-background" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-sm font-bold text-foreground">
                <span>Jadubot WhatsApp Sales</span>
                <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[9px] font-bold text-emerald-600 dark:text-emerald-400">
                  OFFICIAL API
                </span>
              </div>
              <div className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                Online • Verified Business
              </div>
            </div>
          </div>
          <span className="text-[11px] font-medium text-muted-foreground">Cloud API</span>
        </div>

        {/* WhatsApp Chat Bubbles */}
        <div className="my-4 space-y-3 text-xs">
          {/* User message */}
          <div className="flex justify-end">
            <div className="max-w-[85%] rounded-2xl rounded-tr-xs border border-border bg-muted p-3 text-foreground">
              <p>Hi, is the Ultra Slim Chrono Watch in stock? Can you deliver by tomorrow?</p>
              <span className="mt-1 block text-right text-[9px] text-muted-foreground">
                10:42 AM • Read
              </span>
            </div>
          </div>

          {/* Bot reply with product card */}
          <div className="flex items-start gap-2.5">
            <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-[11px] text-white">
              <Bot className="h-4 w-4" />
            </div>
            <div className="max-w-[88%] rounded-2xl rounded-tl-xs border border-border bg-card p-3 shadow-sm">
              <div className="font-semibold text-foreground">
                Yes! We have 4 units left in stock.
              </div>
              <p className="mt-1 text-muted-foreground">
                Same-day dispatch available with express courier tracking.
              </p>

              {/* In-chat order card */}
              <div className="mt-2.5 rounded-xl border border-border/80 bg-surface-subtle p-2.5">
                <div className="flex items-center justify-between font-semibold text-foreground">
                  <span>Ultra Slim Chrono Watch</span>
                  <span className="text-emerald-600 dark:text-emerald-400">$89.00</span>
                </div>
                <div className="mt-1 text-[11px] text-muted-foreground">
                  Includes 2-year warranty & free express shipping.
                </div>
                <div className="mt-2.5 flex gap-2">
                  <span className="flex-1 rounded-lg bg-emerald-600 py-1.5 text-center text-[11px] font-semibold text-white">
                    1-Click Order Now
                  </span>
                  <span className="rounded-lg bg-muted px-2.5 py-1.5 text-[11px] font-medium text-foreground">
                    View Specs
                  </span>
                </div>
              </div>
              <span className="mt-1.5 block text-[9px] text-muted-foreground">
                Jadubot AI • Delivered in 0.8s
              </span>
            </div>
          </div>

          {/* User confirmation */}
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-2xl rounded-tr-xs border border-border bg-muted p-3 text-foreground">
              <p>Ordered with Cash on Delivery! Order #4892 confirmed.</p>
              <span className="mt-1 block text-right text-[9px] text-muted-foreground">
                10:43 AM • Read
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (visualType === "facebook") {
    return (
      <div className="shadow-elevated relative mx-auto w-full max-w-md rounded-3xl border border-blue-500/30 bg-card p-4 sm:p-5">
        {/* Facebook Header */}
        <div className="-mx-4 -mt-4 flex items-center justify-between rounded-t-3xl border-b border-blue-500/20 border-border bg-blue-600/10 p-4 pb-3.5">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#1877f2] text-white shadow-sm">
              <FacebookIcon className="h-5 w-5 fill-white text-white" />
              <span className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-background" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-sm font-bold text-foreground">
                <span>Facebook Comment-to-DM</span>
                <span className="rounded bg-blue-500/20 px-1.5 py-0.5 text-[9px] font-bold text-blue-600 dark:text-blue-400">
                  ACTIVE
                </span>
              </div>
              <div className="text-[11px] font-medium text-blue-600 dark:text-blue-400">
                Auto-DM Trigger: &quot;PRICE&quot;
              </div>
            </div>
          </div>
          <span className="text-[11px] font-medium text-muted-foreground">Page Bot</span>
        </div>

        {/* Facebook Comment Simulation */}
        <div className="my-4 space-y-3 text-xs">
          <div className="rounded-xl border border-border bg-surface-subtle p-3">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground">
              <span>Public Post Comment</span>
              <span>•</span>
              <span className="font-bold text-primary">Ad Campaign</span>
            </div>
            <p className="mt-1.5 font-medium text-foreground">
              &quot;Price please? Does this include free delivery?&quot;
            </p>
            <div className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-3 w-3" />
              <span>Public reply sent + Private DM dispatched instantly</span>
            </div>
          </div>

          {/* Private Messenger DM received */}
          <div className="flex items-start gap-2.5">
            <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1877f2] text-[11px] text-white">
              <Bot className="h-4 w-4" />
            </div>
            <div className="max-w-[88%] rounded-2xl rounded-tl-xs border border-border bg-card p-3 shadow-sm">
              <div className="font-semibold text-foreground">
                Hello Sarah! Thanks for your comment.
              </div>
              <p className="mt-1 text-muted-foreground">
                Here is the product catalog with special 15% discount link:
              </p>
              <div className="mt-2.5 rounded-lg border border-border bg-muted/60 p-2 text-[11px]">
                <div className="font-semibold text-foreground">Discount Code: FB15</div>
                <div className="text-muted-foreground">Direct checkout with COD option</div>
              </div>
              <span className="mt-1.5 block text-[9px] text-muted-foreground">
                Messenger Automation • 0.5s latency
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (visualType === "instagram") {
    return (
      <div className="shadow-elevated relative mx-auto w-full max-w-md rounded-3xl border border-pink-500/30 bg-card p-4 sm:p-5">
        {/* Instagram Header */}
        <div className="-mx-4 -mt-4 flex items-center justify-between rounded-t-3xl border-b border-border border-pink-500/20 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-orange-500/10 p-4 pb-3.5">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 text-white shadow-sm">
              <Send className="h-5 w-5" />
              <span className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-background" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-sm font-bold text-foreground">
                <span>Instagram DM Automation</span>
                <span className="rounded bg-pink-500/20 px-1.5 py-0.5 text-[9px] font-bold text-pink-600 dark:text-pink-400">
                  REELS & STORIES
                </span>
              </div>
              <div className="text-[11px] font-medium text-pink-600 dark:text-pink-400">
                Story Mention & Reel DM Active
              </div>
            </div>
          </div>
          <span className="text-[11px] font-medium text-muted-foreground">Direct</span>
        </div>

        {/* Instagram Chat Stream */}
        <div className="my-4 space-y-3 text-xs">
          <div className="rounded-xl border border-pink-500/30 bg-pink-500/5 p-3">
            <div className="flex items-center justify-between text-[11px] font-semibold text-pink-600 dark:text-pink-400">
              <span>Story Mention Detected</span>
              <span>@fashionista_daily</span>
            </div>
            <p className="mt-1 text-foreground">
              User tagged your brand in a Reel showcasing the Autumn Jacket.
            </p>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pink-600 text-[11px] text-white">
              <Bot className="h-4 w-4" />
            </div>
            <div className="max-w-[88%] rounded-2xl rounded-tl-xs border border-border bg-card p-3 shadow-sm">
              <div className="font-semibold text-foreground">We love your Story tag! ❤️</div>
              <p className="mt-1 text-muted-foreground">
                Here is an exclusive $15 voucher for you and your followers:
              </p>
              <div className="mt-2.5 rounded-lg border border-pink-500/20 bg-gradient-to-r from-pink-500/10 to-purple-500/10 px-3 py-2 text-center font-bold text-foreground">
                VIP-STORY-15
              </div>
              <span className="mt-1.5 block text-[9px] text-muted-foreground">
                Instagram Direct Auto-DM • Instant
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (visualType === "telegram") {
    return (
      <div className="shadow-elevated relative mx-auto w-full max-w-md rounded-3xl border border-sky-500/30 bg-card p-4 sm:p-5">
        {/* Telegram Header */}
        <div className="-mx-4 -mt-4 flex items-center justify-between rounded-t-3xl border-b border-border border-sky-500/20 bg-sky-500/10 p-4 pb-3.5">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#229ed9] text-white shadow-sm">
              <Send className="h-5 w-5" />
              <span className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-background" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-sm font-bold text-foreground">
                <span>Telegram Community Bot</span>
                <span className="rounded bg-sky-500/20 px-1.5 py-0.5 text-[9px] font-bold text-sky-600 dark:text-sky-400">
                  BOT & BROADCAST
                </span>
              </div>
              <div className="text-[11px] font-medium text-sky-600 dark:text-sky-400">
                12,500 Subscribers • Verified
              </div>
            </div>
          </div>
          <span className="text-[11px] font-medium text-muted-foreground">High Speed</span>
        </div>

        {/* Telegram Stream */}
        <div className="my-4 space-y-3 text-xs">
          <div className="rounded-2xl border border-border bg-card p-3.5 shadow-sm">
            <div className="text-[11px] font-semibold text-sky-600 dark:text-sky-400">
              📢 Community Broadcast
            </div>
            <div className="mt-1 font-bold text-foreground">
              New Product Drop: Wireless Noise-Cancelling Earbuds Pro
            </div>
            <p className="mt-1 leading-relaxed text-muted-foreground">
              Early bird pricing is live for Telegram community members. Tap below to claim your
              reservation.
            </p>
            <div className="mt-3 flex gap-2">
              <span className="flex-1 rounded-lg bg-[#229ed9] py-1.5 text-center text-[11px] font-semibold text-white">
                Claim Early Access
              </span>
              <span className="rounded-lg bg-muted px-3 py-1.5 text-[11px] font-medium text-foreground">
                Features
              </span>
            </div>
            <span className="mt-2 block text-right text-[9px] text-muted-foreground">
              Broadcast to 12.5k members in 1.2s
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Web Chat visual
  return (
    <div className="shadow-elevated relative mx-auto w-full max-w-md rounded-3xl border border-primary/30 bg-card p-4 sm:p-5">
      {/* Webchat Header */}
      <div className="-mx-4 -mt-4 flex items-center justify-between rounded-t-3xl border-b border-border border-primary/20 bg-primary/10 p-4 pb-3.5">
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-sm">
            <Globe className="h-5 w-5" />
            <span className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-background" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-sm font-bold text-foreground">
              <span>Website AI Concierge</span>
              <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[9px] font-bold text-primary">
                ON-SITE
              </span>
            </div>
            <div className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
              Active on Pricing Page
            </div>
          </div>
        </div>
        <span className="text-[11px] font-medium text-muted-foreground">Widget</span>
      </div>

      {/* Webchat Dialogue */}
      <div className="my-4 space-y-3 text-xs">
        <div className="flex items-start gap-2.5">
          <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] text-white">
            <Bot className="h-4 w-4" />
          </div>
          <div className="max-w-[88%] rounded-2xl rounded-tl-xs border border-border bg-card p-3 shadow-sm">
            <p className="text-foreground">
              👋 Welcome! I noticed you are exploring our automation plans. Would you like a
              60-second summary tailored to your store size?
            </p>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
                I sell on Shopify
              </span>
              <span className="rounded-full border border-border bg-muted px-2.5 py-1 text-[11px] font-medium text-foreground">
                Talk to Sales Rep
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="max-w-[75%] rounded-2xl rounded-tr-xs border border-border bg-muted p-3 text-foreground">
            <p>I have an eCommerce store with around 1,000 orders/month.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

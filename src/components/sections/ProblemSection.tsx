"use client";

import Link from "next/link";

import {
  Bot,
  CheckCircle2,
  ChevronRight,
  Globe,
  Layers,
  MessageCircle,
  MessageSquare,
  Send,
  Sparkles,
  Zap
} from "lucide-react";

import { usePopAnimation } from "@/lib/animations";

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
          {/* Card 1: Facebook Automation (Top-Left, Soft Peach/Rose Tinted Graphic) */}
          <div
            data-preserve-radius="true"
            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl dark:border-white/10 dark:bg-[#0f1422]"
          >
            {/* Graphic Stage: Layered Floating Interactive UI Pills */}
            <div
              data-preserve-radius="true"
              className="relative flex h-52 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-rose-50/80 via-orange-50/50 to-amber-50/60 p-4 transition-transform duration-500 group-hover:scale-[1.02] dark:from-blue-950/40 dark:via-slate-900/50 dark:to-indigo-950/40"
            >
              {/* Soft ambient inner backlight */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1877f2/10,transparent_70%)]" />

              <div className="relative flex w-full max-w-[260px] flex-col items-center gap-2.5">
                {/* Micro Pill 1 */}
                <div
                  data-preserve-radius="true"
                  className="flex items-center gap-2 rounded-full border border-border/60 bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-slate-900/90 dark:text-slate-200"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1877f2] text-white">
                    <svg className="h-3 w-3 fill-white" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <span>Comment-to-Inbox Lead</span>
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                </div>

                {/* Primary Hero Pill */}
                <div
                  data-preserve-radius="true"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-[#1877f2] py-2.5 text-xs font-bold tracking-wide text-white shadow-md shadow-blue-600/25"
                >
                  <Bot className="h-4 w-4" />
                  <span>Instant Messenger Reply</span>
                </div>

                {/* Floating Chips */}
                <div className="flex w-full justify-between gap-2">
                  <div
                    data-preserve-radius="true"
                    className="flex items-center gap-1.5 rounded-full border border-border/60 bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-slate-700 shadow-xs dark:border-white/10 dark:bg-slate-900/90 dark:text-slate-300"
                  >
                    <MessageSquare className="h-3 w-3 text-blue-500" />
                    <span>Auto-Order</span>
                  </div>
                  <div
                    data-preserve-radius="true"
                    className="flex items-center gap-1.5 rounded-full border border-border/60 bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-slate-700 shadow-xs dark:border-white/10 dark:bg-slate-900/90 dark:text-slate-300"
                  >
                    <Zap className="h-3 w-3 text-amber-500" />
                    <span>24/7 COD Sync</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Info */}
            <div className="mt-6 flex flex-1 flex-col justify-between">
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

          {/* Card 2: WhatsApp Automation (Top-Center, Soft Sky/Blue Tinted Graphic with Floating Task Modal) */}
          <div
            data-preserve-radius="true"
            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl dark:border-white/10 dark:bg-[#0f1422]"
          >
            {/* Graphic Stage: Floating Chat Card with Badge and Avatar Cluster */}
            <div
              data-preserve-radius="true"
              className="relative flex h-52 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50/80 via-teal-50/50 to-sky-50/60 p-4 transition-transform duration-500 group-hover:scale-[1.02] dark:from-emerald-950/40 dark:via-slate-900/50 dark:to-teal-950/40"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#25d366/10,transparent_70%)]" />

              <div
                data-preserve-radius="true"
                className="relative w-full max-w-[260px] rounded-2xl border border-border/70 bg-white/95 p-4 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-slate-900/90"
              >
                {/* Top Status & WhatsApp Pill */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                      WhatsApp Cloud API
                    </span>
                  </div>
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xs">
                    <MessageCircle className="h-3 w-3 fill-white" />
                  </div>
                </div>

                <div className="mt-2.5">
                  <span className="font-heading text-xs font-bold text-foreground">
                    Instant Order Confirmation
                  </span>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    &ldquo;Apnar order confirm hoyeche! Tracking ID #8491.&rdquo;
                  </p>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-border/50 pt-2 text-[10px] text-muted-foreground">
                  <span>Bangla + English AI</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    99.4% Delivery
                  </span>
                </div>
              </div>
            </div>

            {/* Content Info */}
            <div className="mt-6 flex flex-1 flex-col justify-between">
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

          {/* Card 3: Instagram Automation (Top-Right, Soft Green/Mint Tinted Graphic with Calendar/Scheduler UI) */}
          <div
            data-preserve-radius="true"
            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40 hover:shadow-xl dark:border-white/10 dark:bg-[#0f1422] md:col-span-2 lg:col-span-1"
          >
            {/* Graphic Stage: Instagram Direct Story Trigger Interactive Pill Box */}
            <div
              data-preserve-radius="true"
              className="relative flex h-52 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-pink-50/80 via-purple-50/50 to-indigo-50/60 p-4 transition-transform duration-500 group-hover:scale-[1.02] dark:from-pink-950/40 dark:via-slate-900/50 dark:to-purple-950/40"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#dd2a7b/10,transparent_70%)]" />

              <div
                data-preserve-radius="true"
                className="relative w-full max-w-[260px] rounded-2xl border border-border/70 bg-white/95 p-4 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-slate-900/90"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700 dark:text-slate-200">
                    Story &amp; Reel Trigger
                  </span>
                  <span className="rounded-full bg-pink-500/10 px-2 py-0.5 text-[10px] font-bold text-pink-600 dark:text-pink-400">
                    Auto DM
                  </span>
                </div>

                {/* Simulated Trigger Buttons */}
                <div className="mt-3 flex items-center justify-between gap-1.5">
                  <span
                    data-preserve-radius="true"
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] text-[11px] font-bold text-white shadow-xs"
                  >
                    IG
                  </span>
                  <div
                    data-preserve-radius="true"
                    className="flex-1 truncate rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                  >
                    User comments &quot;PRICE&quot;
                  </div>
                </div>

                <div
                  data-preserve-radius="true"
                  className="mt-3 flex items-center justify-center gap-1.5 rounded-full bg-slate-900 py-1.5 text-xs font-semibold text-white shadow-xs dark:bg-pink-600"
                >
                  <Send className="h-3 w-3" />
                  <span>DM Catalog Sent Instantly</span>
                </div>
              </div>
            </div>

            {/* Content Info */}
            <div className="mt-6 flex flex-1 flex-col justify-between">
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

          {/* Card 4: Full Website Automation (Row 2, Wide 2-Columns, Matching Reference Board & Reports UI) */}
          <div
            data-preserve-radius="true"
            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl md:col-span-2 dark:border-white/10 dark:bg-[#0f1422]"
          >
            {/* Graphic Stage: Clean Board/Dashboard UI with Table, AI Query, and Floating Report Pill */}
            <div
              data-preserve-radius="true"
              className="relative flex h-56 w-full flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-sky-50/70 via-blue-50/40 to-slate-50/60 p-4 transition-transform duration-500 group-hover:scale-[1.01] sm:h-64 sm:p-6 dark:from-slate-900/80 dark:via-blue-950/30 dark:to-slate-900/60"
            >
              {/* Simulated Real Estate / Store Branding Header */}
              <div
                data-preserve-radius="true"
                className="flex items-center justify-between rounded-xl border border-border/70 bg-white/95 px-4 py-2.5 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-slate-900/90"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary text-white shadow-xs">
                    <Globe className="h-3.5 w-3.5" />
                  </div>
                  <span className="font-heading text-xs font-bold text-foreground sm:text-sm">
                    Live Web Agent Dashboard
                  </span>
                </div>

                <div className="hidden items-center gap-2 sm:flex">
                  <span className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                    Real-time Sync
                  </span>
                  <span className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                    COD Engine
                  </span>
                  <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                    Live
                  </span>
                </div>
              </div>

              {/* Middle Simulated Pipeline Tasks */}
              <div className="my-auto grid grid-cols-3 gap-2 pt-2 sm:gap-3">
                <div
                  data-preserve-radius="true"
                  className="rounded-xl border border-border/60 bg-white/80 p-2.5 shadow-2xs backdrop-blur-sm dark:border-white/5 dark:bg-slate-900/60"
                >
                  <span className="text-[10px] font-semibold text-muted-foreground">Visitor Queries</span>
                  <div className="mt-1 font-heading text-sm font-extrabold text-foreground sm:text-base">1,482</div>
                </div>
                <div
                  data-preserve-radius="true"
                  className="rounded-xl border border-border/60 bg-white/80 p-2.5 shadow-2xs backdrop-blur-sm dark:border-white/5 dark:bg-slate-900/60"
                >
                  <span className="text-[10px] font-semibold text-muted-foreground">Instant Replies</span>
                  <div className="mt-1 font-heading text-sm font-extrabold text-primary sm:text-base dark:text-sky-400">
                    100%
                  </div>
                </div>
                <div
                  data-preserve-radius="true"
                  className="rounded-xl border border-border/60 bg-white/80 p-2.5 shadow-2xs backdrop-blur-sm dark:border-white/5 dark:bg-slate-900/60"
                >
                  <span className="text-[10px] font-semibold text-muted-foreground">Orders Captured</span>
                  <div className="mt-1 font-heading text-sm font-extrabold text-emerald-600 sm:text-base dark:text-emerald-400">
                    ৳384,500
                  </div>
                </div>
              </div>

              {/* Floating Bottom Action Pill matching reference image */}
              <div
                data-preserve-radius="true"
                className="flex items-center justify-between rounded-full border border-border/80 bg-white/95 p-1.5 shadow-md backdrop-blur-md dark:border-white/10 dark:bg-slate-900/90"
              >
                <div className="flex items-center gap-2 pl-3">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    Full catalog, inventory &amp; courier sync active
                  </span>
                </div>
                <span
                  data-preserve-radius="true"
                  className="rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-white shadow-xs"
                >
                  Auto-Pilot
                </span>
              </div>
            </div>

            {/* Content Info */}
            <div className="mt-6 flex flex-1 flex-col justify-between">
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

          {/* Card 5: CPA Marketing Automation (Row 2, 1-Col, Matching Radial Hub Diagram) */}
          <div
            data-preserve-radius="true"
            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-xl dark:border-white/10 dark:bg-[#0f1422]"
          >
            {/* Graphic Stage: Central Radial Network Hub with Connecting Integration Satellites */}
            <div
              data-preserve-radius="true"
              className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50/80 via-orange-50/40 to-rose-50/50 p-4 transition-transform duration-500 group-hover:scale-[1.02] sm:h-64 dark:from-amber-950/30 dark:via-slate-900/50 dark:to-orange-950/30"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#f59e0b/10,transparent_70%)]" />

              {/* Orbit Diagram Container */}
              <div className="relative flex h-36 w-36 items-center justify-center sm:h-44 sm:w-44">
                {/* Outer Circular Track */}
                <div className="absolute inset-0 rounded-full border border-dashed border-amber-500/30" />

                {/* Central Radial Hub */}
                <div
                  data-preserve-radius="true"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 to-rose-500 text-white shadow-lg shadow-amber-500/30 sm:h-14 sm:w-14"
                >
                  <Layers className="h-6 w-6 text-white" />
                </div>

                {/* Satellite 1: Top (Postbacks) */}
                <div
                  data-preserve-radius="true"
                  className="absolute -top-2 flex h-8 w-8 items-center justify-center rounded-xl border border-border/80 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900"
                  title="Server-to-Server Postbacks"
                >
                  <Zap className="h-4 w-4 text-amber-500" />
                </div>

                {/* Satellite 2: Right (Ad Networks) */}
                <div
                  data-preserve-radius="true"
                  className="absolute -right-2 flex h-8 w-8 items-center justify-center rounded-xl border border-border/80 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900"
                  title="Multi-Ad Networks"
                >
                  <Bot className="h-4 w-4 text-blue-500" />
                </div>

                {/* Satellite 3: Bottom (Affiliate Sync) */}
                <div
                  data-preserve-radius="true"
                  className="absolute -bottom-2 flex h-8 w-8 items-center justify-center rounded-xl border border-border/80 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900"
                  title="Affiliate Tracking"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                </div>

                {/* Satellite 4: Left (Lead Filters) */}
                <div
                  data-preserve-radius="true"
                  className="absolute -left-2 flex h-8 w-8 items-center justify-center rounded-xl border border-border/80 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900"
                  title="Anti-Fraud Filtering"
                >
                  <MessageSquare className="h-4 w-4 text-purple-500" />
                </div>
              </div>
            </div>

            {/* Content Info */}
            <div className="mt-6 flex flex-1 flex-col justify-between">
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  CPA Marketing Automation
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  Automate high-volume lead qualification, server-to-server postbacks, and payout triggers.
                  Route quality conversions directly into affiliate platforms in milliseconds.
                </p>
              </div>

              <div className="mt-4 pt-2">
                <Link
                  href="/cpa-marketing-automation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 transition-all hover:gap-2.5 dark:text-amber-400"
                >
                  <span>Explore CPA Engine</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

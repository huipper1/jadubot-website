"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  ChevronRight,
  Star
} from "lucide-react";

import { CALENDLY_DEMO_URL } from "@/config/site";

import { usePopAnimation } from "@/lib/animations";

export function HomeHero() {
  const containerRef = usePopAnimation<HTMLDivElement>({ start: "top 95%", duration: 0.8 });

  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28">
      {/* Background Architectural Grid & Subtle Radial Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none">
        {/* Dark Mode Grid Pattern & Electric Blue Glow */}
        <div className="absolute inset-0 hidden bg-[linear-gradient(to_right,#1f293d_1px,transparent_1px),linear-gradient(to_bottom,#1f293d_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_25%,#000_70%,transparent_100%)] bg-[size:4rem_4rem] opacity-25 dark:block" />
        <div className="absolute top-0 left-1/2 hidden h-[650px] w-[1200px] -translate-x-1/2 rounded-full bg-[#0172ff]/12 blur-[140px] dark:block" />
        <div className="absolute inset-0 hidden bg-gradient-to-b from-background/30 via-transparent to-background dark:block" />

        {/* Light Mode Architectural Grid & Ambient Sky Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_20%,#000_70%,transparent_100%)] bg-[size:4rem_4rem] opacity-60 dark:hidden" />
        <div className="pointer-events-none absolute top-0 left-1/2 h-[550px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/10 via-sky-300/10 to-transparent blur-3xl dark:hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background dark:hidden" />
      </div>

      <div ref={containerRef} className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top: 5-Star Social Proof Review Pill */}
        <div className="flex justify-center">
          <div
            data-preserve-radius="true"
            className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/85 px-4 py-1.5 shadow-xs backdrop-blur-md transition-all hover:border-primary/40 dark:bg-card/70"
          >
            {/* 5 Stars */}
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
              <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
              <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
              <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
              <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
            </div>

            <span className="text-xs font-semibold text-muted-foreground">
              Based on <span className="font-bold text-foreground">1,200+</span> businesses
            </span>
          </div>
        </div>

        {/* Central Display Headline */}
        <div className="mx-auto mt-6 max-w-4xl text-center">
          <h1 className="font-heading text-4xl leading-[1.12] font-black tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[68px]">
            Your #1 AI Sales Agent <br className="hidden sm:inline" />
            with <span className="text-primary dark:text-[#38bdf8]">no setup</span> &amp;{" "}
            <span className="text-foreground">no hidden fees</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            All your customer conversations, automated orders, and multi-channel support unified
            in one fast, easy platform.
          </p>

          {/* Dual Pill CTA Buttons */}
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
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border/90 bg-card/90 px-7 py-3.5 text-sm font-semibold text-foreground shadow-xs backdrop-blur-md transition-all hover:scale-[1.02] hover:border-primary/50 hover:bg-muted/70 active:scale-[0.98]"
            >
              <span>Get Started Free</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          </div>
        </div>

        {/* Converging Integration Hub Vector Graphic */}
        <div className="relative mx-auto mt-14 max-w-5xl sm:mt-18 md:mt-20">
          {/* Subtle Ambient Radial Glow behind the central hub */}
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl dark:bg-primary/30"
            aria-hidden="true"
          />

          {/* Converging Curved Vector Ray Lines (SVG) */}
          <div className="relative h-64 w-full sm:h-76 md:h-84">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
              viewBox="0 0 1000 320"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Light Theme Linear Gradients */}
                <linearGradient id="rayGradLeftLight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="60%" stopColor="#2563eb" stopOpacity="0.65" />
                  <stop offset="100%" stopColor="#1d4ed8" stopOpacity="1" />
                </linearGradient>

                <linearGradient id="rayGradRightLight" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="60%" stopColor="#2563eb" stopOpacity="0.65" />
                  <stop offset="100%" stopColor="#1d4ed8" stopOpacity="1" />
                </linearGradient>

                <linearGradient id="rayGradBottomLight" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="60%" stopColor="#2563eb" stopOpacity="0.65" />
                  <stop offset="100%" stopColor="#1d4ed8" stopOpacity="1" />
                </linearGradient>

                {/* Dark Theme Glowing Gradients */}
                <linearGradient id="rayGradLeftDark" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
                  <stop offset="60%" stopColor="#0172ff" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="1" />
                </linearGradient>

                <linearGradient id="rayGradRightDark" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
                  <stop offset="60%" stopColor="#0172ff" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="1" />
                </linearGradient>

                <linearGradient id="rayGradBottomDark" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
                  <stop offset="60%" stopColor="#0172ff" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="1" />
                </linearGradient>

                {/* Filter for neon ray glow in dark mode */}
                <filter id="neonBeamGlow" x="-10%" y="-10%" width="120%" height="120%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Light Mode Connected Rays (Direct 1-to-1 connections to each channel) */}
              <g className="dark:hidden">
                {/* 1. Facebook Ray: (70, 60) -> Center Left (465, 150) */}
                <path
                  d="M 70 60 C 200 80, 340 135, 465 150"
                  stroke="url(#rayGradLeftLight)"
                  strokeWidth="2.2"
                />

                {/* 2. Instagram Ray: (80, 260) -> Center Left (465, 170) */}
                <path
                  d="M 80 260 C 200 240, 340 185, 465 170"
                  stroke="url(#rayGradLeftLight)"
                  strokeWidth="2.2"
                />

                {/* 3. Telegram Ray: (930, 60) -> Center Right (535, 150) */}
                <path
                  d="M 930 60 C 800 80, 660 135, 535 150"
                  stroke="url(#rayGradRightLight)"
                  strokeWidth="2.2"
                />

                {/* 4. WhatsApp Ray: (920, 260) -> Center Right (535, 170) */}
                <path
                  d="M 920 260 C 800 240, 660 185, 535 170"
                  stroke="url(#rayGradRightLight)"
                  strokeWidth="2.2"
                />
              </g>

              {/* Dark Mode Connected Rays with Neon Glow */}
              <g className="hidden dark:block" filter="url(#neonBeamGlow)">
                {/* 1. Facebook Ray */}
                <path
                  d="M 70 60 C 200 80, 340 135, 465 150"
                  stroke="url(#rayGradLeftDark)"
                  strokeWidth="2.4"
                />

                {/* 2. Instagram Ray */}
                <path
                  d="M 80 260 C 200 240, 340 185, 465 170"
                  stroke="url(#rayGradLeftDark)"
                  strokeWidth="2.4"
                />

                {/* 3. Telegram Ray */}
                <path
                  d="M 930 60 C 800 80, 660 135, 535 150"
                  stroke="url(#rayGradRightDark)"
                  strokeWidth="2.4"
                />

                {/* 4. WhatsApp Ray */}
                <path
                  d="M 920 260 C 800 240, 660 185, 535 170"
                  stroke="url(#rayGradRightDark)"
                  strokeWidth="2.4"
                />
              </g>
            </svg>

            {/* Left Channel 1: Facebook (Top-Left) */}
            <div
              className="animate-float-slow absolute top-[10%] left-[4%] flex items-center justify-center transition-transform hover:scale-115 sm:top-[12%] sm:left-[6%]"
              title="Facebook"
            >
              <svg
                className="h-11 w-11 drop-shadow-md sm:h-13 sm:w-13 md:h-14 md:w-14"
                viewBox="0 0 48 48"
                fill="none"
              >
                <circle cx="24" cy="24" r="24" fill="#1877F2" />
                <path
                  d="M29.5 24.5H25.5V37H20V24.5H17.5V19.5H20V16.2C20 13.1 21.6 11 25.6 11H29.5V15.8H27.1C25.4 15.8 25.5 16.7 25.5 17.8V19.5H29.5L29.5 24.5Z"
                  fill="white"
                />
              </svg>
            </div>

            {/* Left Channel 2: Instagram (Bottom-Left) */}
            <div
              className="animate-float-delayed absolute bottom-[10%] left-[5%] flex items-center justify-center transition-transform hover:scale-115 sm:bottom-[12%] sm:left-[7%]"
              title="Instagram"
            >
              <svg
                className="h-11 w-11 drop-shadow-md sm:h-13 sm:w-13 md:h-14 md:w-14"
                viewBox="0 0 48 48"
                fill="none"
              >
                <defs>
                  <linearGradient id="igIconGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
                <rect width="48" height="48" rx="13" fill="url(#igIconGrad)" />
                <rect x="11" y="11" width="26" height="26" rx="7" stroke="white" strokeWidth="2.8" />
                <circle cx="24" cy="24" r="6" stroke="white" strokeWidth="2.8" />
                <circle cx="31.5" cy="16.5" r="1.8" fill="white" />
              </svg>
            </div>

            {/* Center Nexus / Hub: Jadubot Mascot */}
            <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <div className="relative flex h-20 w-20 items-center justify-center transition-all duration-300 hover:scale-110 sm:h-26 sm:w-26 md:h-28 md:w-28">
                {/* Subtle soft ambient glow behind the mascot */}
                <div
                  className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-primary/25 blur-xl dark:bg-primary/45"
                  aria-hidden="true"
                />

                <Image
                  src="/assets/images/shared/jadubot-logo.png"
                  alt="Jadubot AI"
                  width={112}
                  height={112}
                  priority
                  className="h-auto w-full object-contain drop-shadow-xl"
                />
              </div>
            </div>

            {/* Right Channel 1: Telegram (Top-Right) */}
            <div
              className="animate-float-delayed absolute top-[10%] right-[4%] flex items-center justify-center transition-transform hover:scale-115 sm:top-[12%] sm:right-[6%]"
              title="Telegram"
            >
              <svg
                className="h-11 w-11 drop-shadow-md sm:h-13 sm:w-13 md:h-14 md:w-14"
                viewBox="0 0 48 48"
                fill="none"
              >
                <circle cx="24" cy="24" r="24" fill="#24A1DE" />
                <path
                  d="M33.8 14.2C33.4 13.9 32.8 13.8 32.2 14.1L12.5 21.7C11.8 22 11.4 22.7 11.5 23.4C11.6 24.1 12.2 24.7 12.9 24.9L17.7 26.5L29.4 19.1C29.8 18.8 30.2 19.3 29.9 19.6L20.4 28.2L20.3 28.3L19.9 33.3C19.9 34 20.3 34.6 21 34.8C21.7 35 22.4 34.7 22.9 34.2L25.8 31.3L30.7 34.9C31.2 35.3 31.8 35.5 32.4 35.3C33 35.1 33.5 34.6 33.6 34L35.9 16C36.1 15.3 35.8 14.6 33.8 14.2Z"
                  fill="white"
                />
              </svg>
            </div>

            {/* Right Channel 2: WhatsApp (Bottom-Right) */}
            <div
              className="animate-float-slow absolute bottom-[10%] right-[5%] flex items-center justify-center transition-transform hover:scale-115 sm:bottom-[12%] sm:right-[7%]"
              title="WhatsApp"
            >
              <svg
                className="h-11 w-11 drop-shadow-md sm:h-13 sm:w-13 md:h-14 md:w-14"
                viewBox="0 0 48 48"
                fill="none"
              >
                <circle cx="24" cy="24" r="24" fill="#25D366" />
                <path
                  d="M34.8 13.2C31.9 10.3 28.1 8.7 24 8.7C15.6 8.7 8.7 15.6 8.7 24C8.7 26.7 9.4 29.3 10.7 31.6L8.5 39.5L16.6 37.4C18.8 38.6 21.4 39.3 24 39.3C32.4 39.3 39.3 32.4 39.3 24C39.3 19.9 37.7 16.1 34.8 13.2ZM24 36.7C21.7 36.7 19.4 36.1 17.5 35L17 34.7L12.2 36L13.5 31.3L13.2 30.7C12 28.7 11.3 26.4 11.3 24C11.3 17 17 11.3 24 11.3C27.4 11.3 30.5 12.6 32.9 15C35.3 17.4 36.7 20.6 36.7 24C36.7 31 31 36.7 24 36.7ZM30.9 27.2C30.5 27 28.6 26.1 28.2 26C27.9 25.8 27.6 25.7 27.4 26.1C27.1 26.5 26.4 27.4 26.2 27.6C26 27.9 25.7 27.9 25.4 27.7C23.6 26.8 22 25.4 21.1 23.9C20.8 23.3 21.2 23.3 21.8 22.1C21.9 21.9 21.8 21.7 21.8 21.5C21.7 21.3 21.1 19.8 20.8 19.2C20.6 18.7 20.3 18.7 20.1 18.7H19.5C19.3 18.7 18.9 18.8 18.7 19.1C18.4 19.4 17.6 20.2 17.6 21.7C17.6 23.2 18.7 24.7 18.9 24.9C19 25.1 21.2 28.5 24.6 30C25.4 30.3 26.1 30.6 26.6 30.7C27.5 31 28.3 31 29 30.9C29.7 30.8 31.3 29.9 31.6 29C31.9 28.1 31.9 27.4 31.8 27.2C31.6 27.2 31.3 27.3 30.9 27.2Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Social Proof Metrics Row */}
        <div className="mt-14 border-t border-border/70 pt-8 sm:mt-16 sm:pt-10">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
            {/* Stat 1 */}
            <div className="text-center">
              <span className="font-heading text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
                500+
              </span>
              <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                Businesses Automated
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <span className="font-heading text-2xl font-black tracking-tight text-primary sm:text-3xl md:text-4xl dark:text-sky-400">
                3x
              </span>
              <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                Average Sales Boost
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <span className="font-heading text-2xl font-black tracking-tight text-emerald-600 sm:text-3xl md:text-4xl dark:text-emerald-400">
                24/7
              </span>
              <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                Instant Auto-Replies
              </p>
            </div>

            {/* Stat 4 */}
            <div className="text-center">
              <span className="font-heading text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
                98%
              </span>
              <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                Customer Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

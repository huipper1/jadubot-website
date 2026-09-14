"use client";

import Image from "next/image";
import {
  Play,
  ArrowRight,
  ShoppingCart,
  Clock,
  MessageSquare,
  Users,
  TrendingUp,
  PhoneCall,
  Zap
} from "lucide-react";
import { usePopAnimation } from "@/lib/animations";
import { CALENDLY_DEMO_URL } from "@/config/site";

export function HomeHero() {
  const contentRef = usePopAnimation<HTMLDivElement>({ start: "top 95%", duration: 0.8 });
  const imageRef = usePopAnimation<HTMLDivElement>({ start: "top 90%", delay: 0.15, duration: 0.9 });

  return (
    <section className="relative overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-10 md:pt-24 lg:pt-28 lg:pb-14">
      {/* Ambient Background Grid & Radial Glows (Light & Dark Theme Compatible) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none">
        {/* Dark Mode Grid Pattern & Electric Blue Glow */}
        <div className="hidden dark:block absolute inset-0 bg-[linear-gradient(to_right,#1f293d_1px,transparent_1px),linear-gradient(to_bottom,#1f293d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25" />
        <div className="hidden dark:block absolute -top-40 left-1/2 -translate-x-1/2 h-[550px] w-[1100px] rounded-full bg-[#0172ff]/18 blur-[130px]" />
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

        {/* Light Mode Architectural Grid & Ambient Sky Glow */}
        <div className="dark:hidden absolute inset-0 bg-[linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_65%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
        <div className="dark:hidden absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-gradient-to-b from-primary/15 via-sky-300/10 to-transparent blur-3xl pointer-events-none" />
        <div className="dark:hidden absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Hero Grid matching the Reference Screenshot */}
        <div className="grid grid-cols-1 items-start lg:grid-cols-12">
          {/* Left Column: Copy, Micro-Features & Actions (5 columns on desktop for perfect balance) */}
          <div ref={contentRef} className="relative z-10 lg:col-span-5 xl:col-span-5 text-left will-change-transform pt-1 sm:pt-2 lg:pt-3">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 dark:bg-indigo-500/15 dark:border-indigo-400/25 px-3.5 py-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 backdrop-blur-xs mb-3 sm:mb-4 shadow-xs">
              <span className="text-sm">🚀</span>
              <span className="tracking-wider uppercase text-[11px] sm:text-xs font-bold">
                AI-Powered Sales Automation
              </span>
            </div>

            {/* Main Headline - Clean, vertically balanced lines without arch gap */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[48px] xl:text-[56px] 2xl:text-[60px] font-black tracking-tight text-foreground leading-[1.08]">
              Your #1 AI Sales <br />
              Agent on <br />
              <span className="text-[#1877f2] dark:text-[#38bdf8]">Facebook</span>, <br />
              <span className="text-[#e1306c] dark:text-[#f43f5e]">Instagram</span> <br />
              &amp; <span className="text-[#16a34a] dark:text-[#22c55e]">WhatsApp</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-3.5 sm:mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-md lg:max-w-lg">
              Let Jadubot talk to your customers, take orders, and close sales; so you can finally focus on growing your business.
            </p>

            {/* Feature Trio (Side by Side with Vertical Dividers) */}
            <div className="flex items-center justify-between sm:justify-start gap-3 sm:gap-6 my-6 sm:my-7 max-w-lg">
              {/* Feature 1: Automate Conversations */}
              <div className="flex flex-1 flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-xs">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <span className="mt-2.5 text-xs sm:text-sm font-bold text-foreground leading-snug">
                  Automate <br className="hidden sm:inline" />Conversations
                </span>
              </div>

              {/* Vertical Divider 1 */}
              <div className="h-10 sm:h-12 w-px bg-border/80 self-center shrink-0" aria-hidden="true" />

              {/* Feature 2: Increase Sales */}
              <div className="flex flex-1 flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shadow-xs">
                  <ShoppingCart className="h-5 w-5" />
                </div>
                <span className="mt-2.5 text-xs sm:text-sm font-bold text-foreground leading-snug">
                  Increase <br className="hidden sm:inline" />Sales
                </span>
              </div>

              {/* Vertical Divider 2 */}
              <div className="h-10 sm:h-12 w-px bg-border/80 self-center shrink-0" aria-hidden="true" />

              {/* Feature 3: Save Time 24/7 */}
              <div className="flex flex-1 flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10 text-sky-600 dark:text-sky-400 shadow-xs">
                  <Clock className="h-5 w-5" />
                </div>
                <span className="mt-2.5 text-xs sm:text-sm font-bold text-foreground leading-snug">
                  Save Time <br className="hidden sm:inline" />24/7
                </span>
              </div>
            </div>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              <a
                href={CALENDLY_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-[1.02]"
              >
                <span>Book a live demo</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="https://www.youtube.com/playlist?list=PLTciGNiQ61wDsaRGBFYmhOcvRH51Vq55S"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border/80 bg-card/90 hover:bg-muted/70 text-foreground px-6 py-3.5 text-sm font-semibold backdrop-blur-md transition-all hover:border-primary/50 shadow-sm hover:scale-[1.02]"
              >
                <Play className="h-4 w-4 fill-current text-foreground" />
                <span>Watch Demo</span>
              </a>
            </div>

            {/* Curved Doodle Arrow & Note pointing up towards Watch Demo */}
            <div className="mt-3.5 flex items-center gap-2 text-muted-foreground text-xs sm:text-[13px] font-medium italic select-none ml-2 sm:ml-4">
              <svg
                className="h-5 w-6 text-muted-foreground/80 shrink-0 stroke-[2] -rotate-6"
                viewBox="0 0 28 22"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M24 19 C18 19, 10 16, 6 6" />
                <path d="M11 5 L5 5 L5 11" />
              </svg>
              <span>See Jadubot in action!</span>
            </div>
          </div>

          {/* Right Column: Hero Graphic - Aligned top vertically and shifted upwards & leftwards */}
          <div
            ref={imageRef}
            className="relative lg:col-span-7 xl:col-span-7 flex items-start justify-center lg:justify-start will-change-transform"
          >
            {/* Ambient Multi-Color Radial Glow behind image */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[105%] w-[115%] rounded-full bg-gradient-to-tr from-primary/25 via-sky-400/20 to-purple-500/15 blur-3xl opacity-80 dark:opacity-65"
              aria-hidden="true"
            />

            <div className="relative w-full sm:w-[115%] md:w-[125%] lg:w-[140%] xl:w-[150%] 2xl:w-[160%] max-w-none lg:-ml-16 xl:-ml-24 2xl:-ml-32 mt-2 sm:mt-3 lg:mt-1 xl:mt-2">
              <Image
                src="/assets/images/home/hero.png"
                alt="Jadubot AI Sales Agent Tablet Interface with Banglish Live Chat and 3D Assistant Robot"
                width={1536}
                height={1024}
                priority
                quality={100}
                className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.015]"
              />
            </div>
          </div>
        </div>

        {/* Metrics / Stats Row - Borderless, No Card Background, with Vertical Lines between Stats */}
        <div className="mt-12 sm:mt-16 lg:mt-20 w-full pt-4 pb-2">
          <div className="grid grid-cols-2 lg:flex lg:items-center lg:justify-between gap-6 sm:gap-8 lg:gap-0">
            {/* Stat 1: 500+ Businesses Trust Us */}
            <div className="flex items-center gap-3.5 sm:gap-4 lg:flex-1 lg:justify-center">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 dark:bg-blue-500/15 text-primary">
                <Users className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                  500+
                </span>
                <span className="text-xs sm:text-[13px] text-muted-foreground font-medium leading-tight">
                  Businesses Trust Us
                </span>
              </div>
            </div>

            {/* Vertical Divider 1 */}
            <div className="hidden lg:block h-10 w-px bg-border/80 dark:bg-border/60 shrink-0 self-center" aria-hidden="true" />

            {/* Stat 2: 3x Average Sales Increase */}
            <div className="flex items-center gap-3.5 sm:gap-4 lg:flex-1 lg:justify-center">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                  3x
                </span>
                <span className="text-xs sm:text-[13px] text-muted-foreground font-medium leading-tight">
                  Average Sales Increase
                </span>
              </div>
            </div>

            {/* Vertical Divider 2 */}
            <div className="hidden lg:block h-10 w-px bg-border/80 dark:bg-border/60 shrink-0 self-center" aria-hidden="true" />

            {/* Stat 3: 24/7 Always On */}
            <div className="flex items-center gap-3.5 sm:gap-4 lg:flex-1 lg:justify-center">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-500/10 dark:bg-sky-500/15 text-sky-600 dark:text-sky-400">
                <PhoneCall className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                  24/7
                </span>
                <span className="text-xs sm:text-[13px] text-muted-foreground font-medium leading-tight">
                  Always On
                </span>
              </div>
            </div>

            {/* Vertical Divider 3 */}
            <div className="hidden lg:block h-10 w-px bg-border/80 dark:bg-border/60 shrink-0 self-center" aria-hidden="true" />

            {/* Stat 4: 98% Customer Satisfaction */}
            <div className="flex items-center gap-3.5 sm:gap-4 lg:flex-1 lg:justify-center">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-500/10 dark:bg-purple-500/15 text-purple-600 dark:text-purple-400">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                  98%
                </span>
                <span className="text-xs sm:text-[13px] text-muted-foreground font-medium leading-tight">
                  Customer Satisfaction
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

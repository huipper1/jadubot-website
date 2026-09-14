"use client";

import { useRef } from "react";
import { PopIn } from "@/components/animations";
import { CALENDLY_DEMO_URL } from "@/config/site";
import { gsap, useGSAP } from "@/lib/animations";
import { ServiceGrid } from "./ServiceGrid";

interface SocialIconItem {
  id: string;
  name: string;
  position: string;
  bgGradient: string;
  glowClass: string;
  float: {
    x: number;
    y: number;
    rotation: number;
    duration: number;
    delay: number;
  };
  scroll: {
    x: number;
    y: number;
    rotation: number;
  };
  icon: React.ReactNode;
}

const FLOATING_SOCIALS: SocialIconItem[] = [
  {
    id: "messenger",
    name: "Facebook Messenger",
    position: "-top-2 left-[2%] sm:top-2 sm:left-[6%] md:left-[9%] lg:left-[11%]",
    bgGradient: "bg-gradient-to-tr from-[#0084ff] via-[#0172ff] to-[#00c6ff]",
    glowClass: "bg-[#0084ff]",
    float: { x: 9, y: -16, rotation: 8, duration: 4.2, delay: 0 },
    scroll: { x: -35, y: -130, rotation: -16 },
    icon: (
      <svg className="h-4 w-4 sm:h-5 sm:w-5 fill-white" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.145 2 11.26c0 2.915 1.45 5.518 3.716 7.15V22l3.433-1.884c.915.254 1.884.39 2.851.39 5.523 0 10-4.145 10-9.26C22 6.145 17.523 2 12 2zm1.06 12.443l-2.67-2.85-5.21 2.85 5.73-6.08 2.73 2.85 5.15-2.85-5.73 6.08z" />
      </svg>
    )
  },
  {
    id: "instagram",
    name: "Instagram",
    position: "-top-3 right-[2%] sm:top-1 sm:right-[6%] md:right-[9%] lg:right-[11%]",
    bgGradient: "bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af]",
    glowClass: "bg-[#dd2a7b]",
    float: { x: -8, y: 18, rotation: -9, duration: 4.6, delay: 0.3 },
    scroll: { x: 40, y: -155, rotation: 22 },
    icon: (
      <svg className="h-4 w-4 sm:h-5 sm:w-5 fill-none stroke-white stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    position: "bottom-14 left-[1%] sm:bottom-16 sm:left-[4%] md:left-[7%] lg:left-[9%]",
    bgGradient: "bg-gradient-to-tr from-[#25d366] via-[#1ebea5] to-[#128c7e]",
    glowClass: "bg-[#25d366]",
    float: { x: -6, y: -13, rotation: 6, duration: 3.7, delay: 0.7 },
    scroll: { x: -28, y: -90, rotation: -12 },
    icon: (
      <svg className="h-4 w-4 sm:h-5 sm:w-5 fill-white" viewBox="0 0 24 24">
        <path d="M12.031 0C5.394 0 0 5.394 0 12.031c0 2.115.549 4.187 1.597 6.007L0 24l6.146-1.564c1.764.962 3.766 1.47 5.885 1.47 6.637 0 12.031-5.394 12.031-12.031C24.062 5.394 18.668 0 12.031 0zm0 22.016c-1.802 0-3.565-.48-5.111-1.396l-.367-.218-3.799.968.988-3.7-.238-.38a10.02 10.02 0 01-1.536-5.259c0-5.534 4.502-10.036 10.063-10.036 5.534 0 10.036 4.502 10.036 10.036 0 5.561-4.502 10.021-10.036 10.021z" />
      </svg>
    )
  },
  {
    id: "facebook",
    name: "Facebook",
    position: "bottom-12 right-[1%] sm:bottom-14 sm:right-[4%] md:right-[7%] lg:right-[9%]",
    bgGradient: "bg-gradient-to-tr from-[#1877f2] via-[#0d6efd] to-[#0052cc]",
    glowClass: "bg-[#1877f2]",
    float: { x: 7, y: 15, rotation: -7, duration: 4.1, delay: 0.2 },
    scroll: { x: 30, y: -105, rotation: 14 },
    icon: (
      <svg className="h-4 w-4 sm:h-5 sm:w-5 fill-white" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    )
  },
  {
    id: "ai-smart",
    name: "AI Automation",
    position: "top-[40%] -left-1 sm:left-[1%] md:left-[2%] lg:left-[4%] hidden sm:flex",
    bgGradient: "bg-gradient-to-tr from-[#6366f1] via-[#8b5cf6] to-[#d946ef]",
    glowClass: "bg-[#8b5cf6]",
    float: { x: 8, y: -11, rotation: 11, duration: 5.1, delay: 1.1 },
    scroll: { x: -22, y: -120, rotation: 24 },
    icon: (
      <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-white" viewBox="0 0 24 24">
        <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z" />
      </svg>
    )
  },
  {
    id: "telegram",
    name: "Telegram",
    position: "top-[36%] -right-1 sm:right-[1%] md:right-[2%] lg:right-[4%] hidden sm:flex",
    bgGradient: "bg-gradient-to-tr from-[#2aabee] via-[#229ed9] to-[#0088cc]",
    glowClass: "bg-[#229ed9]",
    float: { x: -7, y: 13, rotation: -10, duration: 4.5, delay: 0.5 },
    scroll: { x: 26, y: -140, rotation: -18 },
    icon: (
      <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-white" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.868-1.574 7.42-2.283 10.748-.3 1.408-.824 1.879-1.328 1.925-.098.009-.196.014-.294.014-.993 0-1.744-.746-2.705-1.376-1.504-.988-2.354-1.603-3.815-2.566-1.688-1.113-.594-1.725.369-2.727.251-.262 4.63-4.244 4.715-4.605.01-.044.02-.211-.077-.298s-.24-.058-.344-.034c-.147.034-2.493 1.583-7.039 4.651-.665.457-1.267.68-1.805.669-.594-.013-1.737-.336-2.589-.613-1.045-.34-1.876-.52-1.804-1.098.038-.302.454-.611 1.248-.928 4.887-2.129 8.147-3.533 9.779-4.213 4.66-1.94 5.628-2.278 6.26-2.289.139-.002.449.032.65.195.17.138.217.324.239.453.022.13.048.423.026.654z" />
      </svg>
    )
  }
];

export function ServiceHero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);
  const floatRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      // 1. Continuous Zero-Gravity Space Floating Animation (Idle Loop)
      FLOATING_SOCIALS.forEach((social, idx) => {
        const floatEl = floatRefs.current[idx];
        if (!floatEl) return;

        gsap.to(floatEl, {
          x: social.float.x,
          y: social.float.y,
          rotation: social.float.rotation,
          duration: social.float.duration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: social.float.delay
        });
      });

      // 2. Scroll-Linked Reaction (Parallax float across space upon scroll)
      FLOATING_SOCIALS.forEach((social, idx) => {
        const scrollEl = scrollRefs.current[idx];
        if (!scrollEl) return;

        gsap.to(scrollEl, {
          y: social.scroll.y,
          x: social.scroll.x,
          rotation: social.scroll.rotation,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2
          }
        });
      });
    },
    { scope: heroRef }
  );

  return (
    <section ref={heroRef} className="relative pt-28 sm:pt-32 md:pt-36 pb-4 sm:pb-6 overflow-visible">
      {/* Ambient background glow without background images */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[550px] -z-10 select-none overflow-hidden">
        {/* Dark Mode Ambient Radial Glow */}
        <div className="hidden dark:block absolute top-12 left-1/2 -translate-x-1/2 h-[420px] w-[800px] rounded-full bg-[#0172ff]/15 blur-[140px]" />

        {/* Light Mode Soft Sky Ambient Glow */}
        <div className="dark:hidden absolute top-8 left-1/2 -translate-x-1/2 h-[380px] w-[750px] rounded-full bg-gradient-to-b from-primary/12 via-sky-300/10 to-transparent blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 text-center">
        {/* Floating Social Media Icons drifting in space around hero content */}
        <div className="pointer-events-none absolute inset-0 z-20 overflow-visible" aria-hidden="true">
          {FLOATING_SOCIALS.map((social, idx) => (
            <div
              key={social.id}
              ref={(el) => {
                scrollRefs.current[idx] = el;
              }}
              className={`absolute ${social.position}`}
            >
              <div
                ref={(el) => {
                  floatRefs.current[idx] = el;
                }}
                className="relative flex items-center justify-center will-change-transform"
              >
                {/* Ambient colorful glow matching icon brand */}
                <div
                  className={`pointer-events-none absolute -inset-2 rounded-3xl opacity-35 dark:opacity-45 blur-xl transition-opacity ${social.glowClass}`}
                />

                {/* 3D Glass Capsule Container */}
                <div
                  className="flex h-11 w-11 sm:h-12 sm:w-12 md:h-13 md:w-13 items-center justify-center rounded-2xl sm:rounded-3xl border border-white/60 dark:border-white/15 bg-white/80 dark:bg-[#121520]/80 p-2 shadow-[0_8px_25px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_25px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-transform duration-300 hover:scale-110"
                >
                  <div
                    className={`flex h-full w-full items-center justify-center rounded-xl sm:rounded-2xl ${social.bgGradient} p-1.5 shadow-inner`}
                  >
                    {social.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hero Headline, Subtitle and CTAs */}
        <PopIn className="relative z-30 mx-auto max-w-4xl">
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


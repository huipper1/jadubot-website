"use client";

import { useRef } from "react";

import { CALENDLY_DEMO_URL } from "@/config/site";

import { gsap, useGSAP } from "@/lib/animations";

import { PopIn } from "@/components/animations";
import { SiFacebook, SiInstagram, SiMessenger, SiTelegram, SiWhatsapp } from "@/components/icons";

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
    bgGradient: "",
    glowClass: "bg-[#0084ff]",
    float: { x: 9, y: -16, rotation: 8, duration: 4.2, delay: 0 },
    scroll: { x: -35, y: -130, rotation: -16 },
    icon: <SiMessenger color="default" className="h-7 w-7" />
  },
  {
    id: "instagram",
    name: "Instagram",
    position: "-top-3 right-[2%] sm:top-1 sm:right-[6%] md:right-[9%] lg:right-[11%]",
    bgGradient: "",
    glowClass: "bg-[#dd2a7b]",
    float: { x: -8, y: 18, rotation: -9, duration: 4.6, delay: 0.3 },
    scroll: { x: 40, y: -155, rotation: 22 },
    icon: <SiInstagram color="default" className="h-7 w-7" />
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    position: "bottom-14 left-[1%] sm:bottom-16 sm:left-[4%] md:left-[7%] lg:left-[9%]",
    bgGradient: "",
    glowClass: "bg-[#25d366]",
    float: { x: -6, y: -13, rotation: 6, duration: 3.7, delay: 0.7 },
    scroll: { x: -28, y: -90, rotation: -12 },
    icon: <SiWhatsapp color="default" className="h-7 w-7" />
  },
  {
    id: "facebook",
    name: "Facebook",
    position: "bottom-12 right-[1%] sm:bottom-14 sm:right-[4%] md:right-[7%] lg:right-[9%]",
    bgGradient: "",
    glowClass: "bg-[#1877f2]",
    float: { x: 7, y: 15, rotation: -7, duration: 4.1, delay: 0.2 },
    scroll: { x: 30, y: -105, rotation: 14 },
    icon: <SiFacebook color="default" className="h-7 w-7" />
  },
  {
    id: "telegram",
    name: "Telegram",
    position: "top-[36%] -right-1 sm:right-[1%] md:right-[2%] lg:right-[4%] hidden sm:flex",
    bgGradient: "",
    glowClass: "bg-[#229ed9]",
    float: { x: -7, y: 13, rotation: -10, duration: 4.5, delay: 0.5 },
    scroll: { x: 26, y: -140, rotation: -18 },
    icon: <SiTelegram color="default" className="h-7 w-7" />
  }
];

export function ServiceHero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);
  const floatRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
    <section
      ref={heroRef}
      className="relative overflow-visible pt-28 pb-4 sm:pt-32 sm:pb-6 md:pt-36"
    >
      {/* Ambient background glow without background images */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[550px] overflow-hidden select-none">
        {/* Dark Mode Ambient Radial Glow */}
        <div className="absolute top-12 left-1/2 hidden h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px] dark:block" />

        {/* Light Mode Soft Sky Ambient Glow */}
        <div className="absolute top-8 left-1/2 h-[380px] w-[750px] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/12 via-sky-300/10 to-transparent blur-3xl dark:hidden" />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-4 text-center">
        {/* Floating Social Media Icons drifting in space around hero content */}
        <div
          className="pointer-events-none absolute inset-0 z-20 overflow-visible"
          aria-hidden="true"
        >
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
                  className={`pointer-events-none absolute -inset-2 rounded-3xl opacity-35 blur-xl transition-opacity dark:opacity-45 ${social.glowClass}`}
                />

                {/* 3D Glass Capsule Container */}
                <div
                  data-preserve-radius="true"
                  className="flex h-11 w-11 items-center justify-center"
                >
                  {social.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hero Headline, Subtitle and CTAs */}
        <PopIn className="relative z-30 mx-auto max-w-4xl">
          {/* Main Headline with Jadubot Signature Gradient */}
          <h1 className="font-heading text-4xl leading-[1.12] font-extrabold tracking-tight [text-wrap:balance] text-foreground sm:text-5xl md:text-6xl lg:text-[70px]">
            Automate your business. <br />
            <span className="font-serif italic font-medium header-accent drop-shadow-[0_0_35px_rgba(21,93,252,0.3)]">
              Save hours every day.
            </span>
          </h1>

          {/* Subtitle with Theme Typography */}
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
            Handle order confirmations, product inquiries, and delivery tracking automatically across
            all your social channels.
          </p>

          {/* Dual Pill CTA Buttons matching Website Theme */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5 sm:mt-8 sm:gap-4">
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
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border/80 bg-card/80 px-7 py-3.5 text-sm font-semibold text-foreground shadow-sm backdrop-blur-md transition-all hover:scale-[1.02] hover:border-primary/50 hover:bg-card"
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

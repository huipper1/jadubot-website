"use client";

import { ArrowRight, CheckCircle2, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { CALENDLY_DEMO_URL, siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <div className="relative w-full pt-16 sm:pt-20 lg:pt-24">
      {/* 
        Floating Newsletter Box (Half inside, half outside of the footer's top)
        Light mode: Crisp, high-contrast, elevated slate-dark glass card with glowing electric brand accents.
        Dark mode: Midnight deep glass card with ambient backlight.
      */}
      <div className="relative z-20 mx-auto max-w-4xl px-4 sm:px-6">
        <div
          // data-preserve-radius="true"
          className="relative -mb-16 overflow-hidden rounded-2xl border border-border/80 bg-card p-6 shadow-2xl backdrop-blur-2xl sm:-mb-20 sm:rounded-3xl sm:px-12 sm:py-12 lg:-mb-24 lg:py-14 dark:border-white/10 dark:bg-[#0d1424] dark:shadow-[0_20px_50px_rgba(0,0,0,0.55)]"
        >
          {/* Subtle Ambient Radial Glow inside newsletter box */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-56 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl dark:bg-primary/25"
            aria-hidden="true"
          />

          <div className="relative z-10 text-center">
            <h2 className="font-heading text-2xl font-black tracking-tight text-foreground sm:text-3xl lg:text-4xl dark:text-white">
              Let&apos;s connect!
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-xs leading-relaxed text-muted-foreground sm:text-sm dark:text-slate-400">
              Businesses & founders stay up to date with the latest AI sales automation, features & announcements.
            </p>

            {/* Newsletter Subscription Input Form */}
            {subscribed ? (
              <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2.5 text-xs font-semibold text-emerald-600 sm:text-sm dark:text-emerald-400">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span>Thank you! You&apos;re now on our priority insider list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mx-auto mt-6 max-w-md sm:mt-7">
                <div
                  data-preserve-radius="true"
                  className="flex items-center rounded-full border border-border bg-muted/60 p-1.5 shadow-inner backdrop-blur-md transition-all focus-within:border-primary/60 focus-within:bg-card focus-within:ring-2 focus-within:ring-primary/30 dark:border-white/20 dark:bg-white/10 dark:focus-within:bg-black/30"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="type your e-mail here..."
                    className="w-full bg-transparent px-4 py-2 text-xs text-foreground placeholder-muted-foreground outline-none sm:px-5 sm:text-sm dark:text-white dark:placeholder-slate-400"
                  />
                  <button
                    type="submit"
                    data-preserve-radius="true"
                    className="inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#0052cc] to-[#0172ff] px-6 py-2.5 text-xs font-bold tracking-wider text-white uppercase shadow-[0_0_20px_rgba(1,114,255,0.4)] transition-all hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(1,114,255,0.6)] sm:px-8 sm:text-sm"
                  >
                    <span>Join</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* 
        Main Footer Container
        Light mode: Rich deep slate-navy surface (#091122) creating an intentional, grounding distinction from the pale sky canvas (#eff6ff).
        Dark mode: Deep abyss midnight surface (#050810).
      */}
      <footer className="relative z-10 overflow-hidden border-t border-primary/20 bg-primary pt-24 pb-0 text-white/90 sm:pt-28 sm:pb-0 lg:pt-36 dark:border-white/10 dark:bg-[#050810] dark:text-slate-300">
        {/* Soft atmospheric gradient lines & ambient background accents */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute top-1/3 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-white/10 blur-[140px] dark:bg-primary/8" />
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 5-Column Navigation Grid matching the layout */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-10">
            {/* Column 1: Company */}
            <div>
              <h3 className="font-heading text-sm font-bold tracking-wider text-white">
                Company
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-400">
                <li>
                  <Link href="/about" className="transition-colors hover:text-white">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/affiliate" className="transition-colors hover:text-white">
                    Partner Program
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="transition-colors hover:text-white">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition-colors hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Products / Solutions */}
            <div>
              <h3 className="font-heading text-sm font-bold tracking-wider text-white">
                Products
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-400">
                <li>
                  <Link href="/ai-agents" className="transition-colors hover:text-white">
                    AI Sales Agents
                  </Link>
                </li>
                <li>
                  <Link href="/platform/facebook-automation" className="transition-colors hover:text-white">
                    Facebook Messenger
                  </Link>
                </li>
                <li>
                  <Link href="/platform/instagram-automation" className="transition-colors hover:text-white">
                    Instagram Automation
                  </Link>
                </li>
                <li>
                  <Link href="/platform/whatsapp-automation" className="transition-colors hover:text-white">
                    WhatsApp Automation
                  </Link>
                </li>
                <li>
                  <Link href="/cpa-marketing-automation" className="transition-colors hover:text-white">
                    CPA Marketing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div>
              <h3 className="font-heading text-sm font-bold tracking-wider text-white">
                Resources
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-400">
                <li>
                  <Link href="/blog" className="transition-colors hover:text-white">
                    Blog & Guides
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="transition-colors hover:text-white">
                    Pricing Plans
                  </Link>
                </li>
                <li>
                  <a
                    href={CALENDLY_DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 transition-colors hover:text-white"
                  >
                    <span>Live Demo</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.jadubot.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    Client Portal
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Legal & Policies */}
            <div>
              <h3 className="font-heading text-sm font-bold tracking-wider text-white">
                Legal
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-400">
                <li>
                  <Link href="/refund" className="transition-colors hover:text-white">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition-colors hover:text-white">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition-colors hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition-colors hover:text-white">
                    Acceptance Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 5: Contact */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-heading text-sm font-bold tracking-wider text-white">
                Contact
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-400">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="break-all transition-colors hover:text-white"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="transition-colors hover:text-white"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="text-slate-400">
                  Daffodil Smart City, Dhaka
                </li>
              </ul>
            </div>
          </div>

          {/* Divider Line */}
          <div className="mt-14 h-px w-full bg-white/10 sm:mt-16" />

          {/* Info Line: Address & Copyright on left, Social Icons on right */}
          <div className="mt-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="space-y-1 text-xs text-slate-400">
              <p className="max-w-md leading-relaxed text-slate-300">
                {siteConfig.name} HQ, {siteConfig.address}.
              </p>
              <p>© {currentYear} {siteConfig.name} AI. All rights reserved.</p>
            </div>

            {/* Social Icons matching the design circle pills */}
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                data-preserve-radius="true"
                className="flex h-8 w-8 items-center justify-center rounded-full dark:bg-white/10 bg-primary text-white transition-all hover:bg-primary hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                data-preserve-radius="true"
                className="flex h-8 w-8 items-center justify-center rounded-full dark:bg-white/10 bg-primary text-white transition-all hover:bg-primary hover:text-white"
              >
                <Twitter className="h-4 w-4"/>
              </a>
              <a
                href="https://www.instagram.com/jadubotbd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                data-preserve-radius="true"
                className="flex h-8 w-8 items-center justify-center rounded-full dark:bg-white/10 bg-primary text-white transition-all hover:bg-primary hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                data-preserve-radius="true"
                className="flex h-8 w-8 items-center justify-center rounded-full dark:bg-white/10 bg-primary text-white transition-all hover:bg-primary hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Large Stylized Brand Watermark Backdrop at bottom fading away */}
          <div className="relative mt-8 overflow-hidden select-none pointer-events-none sm:mt-12">
            <h1 className="font-heading text-center text-[18vw] font-black leading-none tracking-tighter bg-gradient-to-b from-white/10 via-white/[0.04] to-transparent bg-clip-text text-transparent [mask-image:linear-gradient(to_bottom,black_15%,transparent_90%)]">
              Jadubot
            </h1>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  FacebookIcon,
  LinkedinIcon as Linkedin,
  SiInstagram as Instagram,
  SiX as Twitter
} from "@/components/icons";

import { CALENDLY_DEMO_URL, siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative w-full pt-16 sm:pt-20 lg:pt-24">

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
          {/* 5-Column Navigation Grid: Col 1 = Logo/Brand, Col 2 = Company, Col 3 = Products, Col 4 = Resources, Col 5 = Contact */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-10">
            {/* Column 1: Brand & Logo */}
            <div className="col-span-2 sm:col-span-1">
              <Link href="/" className="group inline-flex items-center gap-2.5">
                <figure className="relative flex items-center">
                  <Image
                    src="/assets/images/shared/jadubot-logo.png"
                    alt="Jadubot Logo"
                    width={36}
                    height={36}
                    className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </figure>
                <div className="flex flex-col">
                  <span className="font-heading text-base font-black tracking-widest text-slate-900 uppercase transition-colors group-hover:text-primary dark:text-white">
                    Jadubot
                  </span>
                  <span className="font-mono text-[9px] font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                    AI Sales Agent
                  </span>
                </div>
              </Link>
              <p className="mt-4 max-w-xs text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Autonomous AI sales agents and multi-channel marketing automation for Bangladeshi social commerce.
              </p>
            </div>

            {/* Column 2: Company */}
            <div>
              <h3 className="font-heading text-sm font-bold tracking-wider text-slate-900 dark:text-white">
                Company
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <Link href="/about" className="transition-colors hover:text-primary dark:hover:text-white">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/affiliate" className="transition-colors hover:text-primary dark:hover:text-white">
                    Partner Program
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="transition-colors hover:text-primary dark:hover:text-white">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition-colors hover:text-primary dark:hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Products / Solutions */}
            <div>
              <h3 className="font-heading text-sm font-bold tracking-wider text-slate-900 dark:text-white">
                Products
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <Link href="/ai-agents/sales-agent" className="transition-colors hover:text-primary dark:hover:text-white">
                    AI Sales Agents
                  </Link>
                </li>
                <li>
                  <Link href="/platform/facebook-automation" className="transition-colors hover:text-primary dark:hover:text-white">
                    Facebook Messenger
                  </Link>
                </li>
                <li>
                  <Link href="/platform/instagram-automation" className="transition-colors hover:text-primary dark:hover:text-white">
                    Instagram Automation
                  </Link>
                </li>
                <li>
                  <Link href="/platform/whatsapp-automation" className="transition-colors hover:text-primary dark:hover:text-white">
                    WhatsApp Automation
                  </Link>
                </li>
                <li>
                  <Link href="/cpa-marketing-automation" className="transition-colors hover:text-primary dark:hover:text-white">
                    CPA Marketing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Resources */}
            <div>
              <h3 className="font-heading text-sm font-bold tracking-wider text-slate-900 dark:text-white">
                Resources
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <Link href="/blog" className="transition-colors hover:text-primary dark:hover:text-white">
                    Blog & Guides
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="transition-colors hover:text-primary dark:hover:text-white">
                    Pricing Plans
                  </Link>
                </li>
                <li>
                  <a
                    href={CALENDLY_DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 transition-colors hover:text-primary dark:hover:text-white"
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
                    className="transition-colors hover:text-primary dark:hover:text-white"
                  >
                    Client Portal
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 5: Contact */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-heading text-sm font-bold tracking-wider text-slate-900 dark:text-white">
                Contact
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="break-all transition-colors hover:text-primary dark:hover:text-white"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="transition-colors hover:text-primary dark:hover:text-white"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="text-slate-600 dark:text-slate-400">
                  Daffodil Smart City, Dhaka
                </li>
              </ul>
            </div>
          </div>

          {/* Divider Line */}
          <div className="mt-14 h-px w-full bg-slate-200 sm:mt-16 dark:bg-white/10" />

          {/* Info Line: Address & Copyright on left, Social Icons on right */}
          <div className="mt-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <p className="max-w-md leading-relaxed text-slate-700 dark:text-slate-300">
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
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-700 transition-all hover:text-primary dark:text-white dark:hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                data-preserve-radius="true"
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-700 transition-all hover:text-primary dark:text-white dark:hover:text-primary"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/jadubotbd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                data-preserve-radius="true"
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-700 transition-all hover:text-primary dark:text-white dark:hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                data-preserve-radius="true"
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-700 transition-all hover:text-primary dark:text-white dark:hover:text-primary"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Large Stylized Brand Watermark Backdrop at bottom fading away */}
          <div className="relative mt-8 overflow-hidden select-none pointer-events-none sm:mt-12">
            <h1 className="font-heading text-center text-[18vw] font-black leading-none tracking-tighter bg-gradient-to-b from-slate-900/10 via-slate-900/[0.04] to-transparent dark:from-white/10 dark:via-white/[0.04] dark:to-transparent bg-clip-text text-transparent [mask-image:linear-gradient(to_bottom,black_15%,transparent_90%)]">
              Jadubot
            </h1>
          </div>
        </div>
      </footer>
    </div>
  );
}

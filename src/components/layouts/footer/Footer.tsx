import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CALENDLY_DEMO_URL } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface-ground dark:bg-background text-muted-foreground overflow-hidden">
      {/* Dark Mode Background: Original Midnight Aesthetics with Image */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden hidden dark:block">
        <Image
          src="/assets/images/home/footer-bg.png"
          alt=""
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />
        {/* Soft tint to maintain text contrast */}
        <div className="absolute inset-0 bg-background/25" />
        {/* Top subtle blue ambient glow */}
        <div
          className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0172ff]/15 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Light Mode: Elegant Vector Waves, Micro-Grid & Ambient Lighting */}
      <div className="dark:hidden pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Soft blueprint micro-dot background */}
        <div className="absolute inset-0 [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

        {/* Top subtle primary highlight */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-primary/[0.06] to-transparent" />

        {/* Bottom radial atmosphere glow */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-80 w-[900px] max-w-full rounded-full bg-gradient-to-t from-primary/10 via-sky-400/5 to-transparent blur-3xl" />

        {/* Precision SVG Wave Curves across bottom */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-44 md:h-60 object-cover opacity-80"
          viewBox="0 0 1440 320"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="footerWave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0172ff" stopOpacity="0.12" />
              <stop offset="35%" stopColor="#0284c7" stopOpacity="0.4" />
              <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0172ff" stopOpacity="0.18" />
            </linearGradient>
            <linearGradient id="footerWave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.08" />
              <stop offset="45%" stopColor="#0172ff" stopOpacity="0.32" />
              <stop offset="85%" stopColor="#2563eb" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="footerWaveFill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0172ff" stopOpacity="0.015" />
              <stop offset="100%" stopColor="#0172ff" stopOpacity="0.06" />
            </linearGradient>
          </defs>

          {/* Soft filled wave bottom */}
          <path
            d="M0,224L60,208C120,192,240,160,360,170.7C480,181,600,235,720,240C840,245,960,203,1080,181.3C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            fill="url(#footerWaveFill)"
          />

          {/* Wave Ribbon 1 */}
          <path
            d="M0,192 C280,260 520,120 840,210 C1120,280 1320,180 1440,200"
            stroke="url(#footerWave1)"
            strokeWidth="2"
            fill="none"
          />

          {/* Wave Ribbon 2 */}
          <path
            d="M0,230 C320,170 600,280 920,190 C1200,130 1360,240 1440,220"
            stroke="url(#footerWave2)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <figure className="relative flex items-center">
                <div className="flex h-full w-full items-center justify-center">
                  <Image
                    src="/assets/images/shared/jadubot-logo.png"
                    alt="Jadubot Logo"
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
              </figure>
              <span className="text-6xl font-bold tracking-tight text-foreground">
                Jadubot
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Your #1 AI Sales Agent on Facebook, Instagram & WhatsApp. Turn conversations into revenue and automate orders 24/7.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground">
                All automation services active & operational
              </span>
            </div>
          </div>

          {/* Links Col 1: Solutions */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Solutions
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/service" className="transition-colors hover:text-foreground">
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/cpa-marketing-automation"
                  className="transition-colors hover:text-foreground"
                >
                  CPA Automation
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="transition-colors hover:text-foreground">
                  Plans & Pricing
                </Link>
              </li>
              <li>
                <a
                  href={CALENDLY_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Links Col 2: Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="transition-colors hover:text-foreground">
                  About Jadubot
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-foreground">
                  Blog & Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/affiliate" className="transition-colors hover:text-foreground">
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Col 3: Support */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Support & Legal
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/faq" className="transition-colors hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/refund" className="transition-colors hover:text-foreground">
                  Refund Policy
                </Link>
              </li>
              <li>
                <a
                  href="https://app.jadubot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
                >
                  <span>Customer Portal</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {currentYear} Jadubot Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/refund" className="hover:text-foreground transition-colors">
              Refund Policy
            </Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">
              Help Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

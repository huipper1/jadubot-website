import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#373a41] bg-[#0c0e12] text-[#cecfd2]">
      {/* Top subtle purple ambient glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#8e2de2]/10 to-transparent"
        aria-hidden="true"
      />

      <div className="container relative py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <figure className="relative flex items-center">
                <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-gradient-to-br from-[#4a00e0] to-[#8e2de2] p-0.5 shadow-[0_0_20px_rgba(142,45,226,0.35)]">
                  <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#0c0e12]">
                    <Image
                      src="/assets/images/shared/jadubot-logo.png"
                      alt="Jadubot Logo"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </div>
              </figure>
              <span className="text-2xl font-bold tracking-tight text-white">
                Jadubot
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#cecfd2]/80">
              Your #1 AI Sales Agent on Facebook, Instagram & WhatsApp. Turn conversations into revenue and automate orders 24/7.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-[#cecfd2]/70">
                All automation services active & operational
              </span>
            </div>
          </div>

          {/* Links Col 1: Solutions */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Solutions
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[#cecfd2]/80">
              <li>
                <Link href="/service" className="transition-colors hover:text-white">
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/cpa-marketing-automation"
                  className="transition-colors hover:text-white"
                >
                  CPA Automation
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="transition-colors hover:text-white">
                  Plans & Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/book-a-free-demo"
                  className="inline-flex items-center gap-1 transition-colors hover:text-white"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Col 2: Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[#cecfd2]/80">
              <li>
                <Link href="/about" className="transition-colors hover:text-white">
                  About Jadubot
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-white">
                  Blog & Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/affiliate" className="transition-colors hover:text-white">
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Col 3: Support */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Support & Legal
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[#cecfd2]/80">
              <li>
                <Link href="/ticket" className="transition-colors hover:text-white">
                  Support Ticket
                </Link>
              </li>
              <li>
                <Link href="/faq" className="transition-colors hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/refund" className="transition-colors hover:text-white">
                  Refund Policy
                </Link>
              </li>
              <li>
                <a
                  href="https://app.jadubot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-white"
                >
                  <span>Customer Portal</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#373a41] pt-8 text-xs text-[#cecfd2]/60 sm:flex-row">
          <p>© {currentYear} Jadubot Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/refund" className="hover:text-white">
              Refund Policy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Help Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

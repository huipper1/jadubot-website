"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

import { cn } from "@/utils";
import { CALENDLY_DEMO_URL } from "@/config/site";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/service", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/cpa-marketing-automation", label: "CPA Automation" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:py-4 transition-all duration-300">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-2xl border transition-all duration-300 px-4 py-2.5",
          isScrolled
            ? "border-[#373a41] bg-[#0c0e12]/95 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
            : "border-[#373a41]/80 bg-[#0c0e12]/80 backdrop-blur-lg"
        )}
      >
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <figure className="relative flex items-center">
            <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-gradient-to-br from-[#4a00e0] to-[#8e2de2] p-0.5 shadow-[0_0_15px_rgba(142,45,226,0.35)]">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#0c0e12]">
                <Image
                  src="/assets/images/shared/jadubot-logo.png"
                  alt="Jadubot Logo"
                  width={28}
                  height={28}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <span
              className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-emerald-400 ring-2 ring-[#0c0e12]"
              title="Online 24/7"
            >
              <span className="h-1.5 w-1.5 animate-ping rounded-full bg-emerald-300 opacity-75" />
            </span>
          </figure>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white transition-colors group-hover:text-[#c084fc]">
              Jadubot
            </span>
            <span className="text-[9px] font-medium tracking-wider uppercase text-[#cecfd2]/70">
              AI Sales Agent
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200",
                  isActive
                    ? "bg-[#8e2de2]/15 text-white font-semibold shadow-[0_0_12px_rgba(142,45,226,0.25)] border border-[#8e2de2]/30"
                    : "text-[#cecfd2] hover:bg-white/5 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="https://app.jadubot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-[#cecfd2] hover:text-white px-3 py-1.5 transition-colors"
          >
            Portal Login
          </a>
          <a
            href={CALENDLY_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs !py-2 !px-4 shadow-[0_0_20px_rgba(142,45,226,0.35)]"
          >
            <span>Book a live demo</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#373a41] bg-white/5 text-white transition-colors hover:border-[#8e2de2]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-[#373a41] bg-[#0c0e12]/98 p-6 backdrop-blur-2xl lg:hidden animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-[#8e2de2]/15 text-white font-semibold border border-[#8e2de2]/30"
                      : "text-[#cecfd2] hover:bg-white/5 hover:text-white"
                  )}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#8e2de2]" />}
                </Link>
              );
            })}
            <div className="mt-4 pt-4 border-t border-[#373a41] space-y-2">
              <a
                href="https://app.jadubot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-black w-full text-center"
              >
                Portal Login
              </a>
              <a
                href={CALENDLY_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full text-center"
              >
                <span>Book a Free Demo</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

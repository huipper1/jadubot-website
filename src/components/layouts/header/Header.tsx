"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  Briefcase,
  ChevronDown,
  Cloud,
  GraduationCap,
  Home,
  Menu,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Stethoscope,
  Store,
  Truck,
  Utensils,
  X
} from "lucide-react";

import { cn } from "@/utils";
import { CALENDLY_DEMO_URL } from "@/config/site";
import { INDUSTRIES } from "@/components/routes/industry";

const INDUSTRY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  ShoppingCart,
  Store,
  Stethoscope,
  Home,
  Utensils,
  ShieldCheck,
  GraduationCap,
  Cloud,
  Truck,
  Briefcase
};

const BASE_NAV_LINKS = [
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
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isIndustriesActive = pathname.startsWith("/industry");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIndustriesOpen(false);
    setMobileMenuOpen(false);
    setMobileIndustriesOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIndustriesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIndustriesOpen(false);
    }, 150);
  };

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
            <div className="flex h-full w-full items-center justify-center">
              <Image
                src="/assets/images/shared/jadubot-logo.png"
                alt="Jadubot Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
          </figure>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white transition-colors group-hover:text-[#38bdf8]">
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
          {/* Home */}
          <Link
            href="/"
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200",
              pathname === "/"
                ? "bg-[#0172ff]/15 text-white font-semibold shadow-[0_0_12px_rgba(1,114,255,0.25)] border border-[#0172ff]/30"
                : "text-[#cecfd2] hover:bg-white/5 hover:text-white"
            )}
          >
            Home
          </Link>

          {/* Services */}
          <Link
            href="/service"
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200",
              pathname.startsWith("/service")
                ? "bg-[#0172ff]/15 text-white font-semibold shadow-[0_0_12px_rgba(1,114,255,0.25)] border border-[#0172ff]/30"
                : "text-[#cecfd2] hover:bg-white/5 hover:text-white"
            )}
          >
            Services
          </Link>

          {/* Industries Dropdown Mega-Menu */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setIndustriesOpen(!industriesOpen)}
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200",
                isIndustriesActive || industriesOpen
                  ? "bg-[#0172ff]/15 text-white font-semibold shadow-[0_0_12px_rgba(1,114,255,0.25)] border border-[#0172ff]/30"
                  : "text-[#cecfd2] hover:bg-white/5 hover:text-white"
              )}
              aria-expanded={industriesOpen}
              aria-haspopup="true"
            >
              <span>Industries</span>
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  industriesOpen ? "rotate-180 text-blue-400" : "text-[#cecfd2]"
                )}
              />
            </button>

            {/* Glassmorphic Mega Menu Dropdown */}
            <div
              className={cn(
                "absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 transition-all duration-200",
                industriesOpen
                  ? "opacity-100 pointer-events-auto translate-y-0 visible"
                  : "opacity-0 pointer-events-none -translate-y-1 invisible"
              )}
            >
              <div className="w-[660px] rounded-2xl border border-[#373a41] bg-[#0c0e12]/98 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-2xl">
                {/* Top Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5 px-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-[#0172ff] shadow-[0_0_8px_#0172ff]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      Specialized Industry Solutions
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-400">
                    10 Tailored AI Pipelines
                  </span>
                </div>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-2 gap-2">
                  {INDUSTRIES.map((ind) => {
                    const Icon = INDUSTRY_ICONS[ind.iconName] || Briefcase;
                    const isActive = pathname === `/industry/${ind.slug}`;

                    return (
                      <Link
                        key={ind.slug}
                        href={`/industry/${ind.slug}`}
                        onClick={() => setIndustriesOpen(false)}
                        className={cn(
                          "group flex items-start gap-3 rounded-xl p-2.5 transition-all duration-150 border",
                          isActive
                            ? "bg-[#0172ff]/20 border-[#0172ff]/40 shadow-[0_0_15px_rgba(1,114,255,0.2)]"
                            : "border-transparent hover:bg-white/[0.04] hover:border-white/10"
                        )}
                      >
                        <div
                          className={cn(
                            "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-200",
                            isActive
                              ? "border-[#0172ff] bg-[#0172ff] text-white"
                              : "border-blue-500/25 bg-[#0172ff]/10 text-blue-400 group-hover:scale-105 group-hover:border-[#0172ff]/50 group-hover:text-[#38bdf8]"
                          )}
                        >
                          <Icon className="h-4 w-4" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                              {ind.name}
                            </span>
                            <span className="rounded bg-white/5 px-1.5 py-0.2 text-[9px] font-medium text-slate-400">
                              {ind.shortTag}
                            </span>
                          </div>
                          <p className="mt-0.5 text-[11px] leading-tight text-slate-400 line-clamp-1 group-hover:text-slate-300">
                            {ind.navDescription}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Bottom Mega-Menu Footer */}
                <div className="mt-3 flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                    <span>Need custom omnichannel automation?</span>
                  </div>
                  <a
                    href={CALENDLY_DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[#38bdf8] hover:text-white transition-colors"
                  >
                    <span>Book Architecture Demo</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Remaining links */}
          {BASE_NAV_LINKS.slice(2).map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200",
                  isActive
                    ? "bg-[#0172ff]/15 text-white font-semibold shadow-[0_0_12px_rgba(1,114,255,0.25)] border border-[#0172ff]/30"
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
            className="btn-primary text-xs !py-2 !px-4 shadow-[0_0_20px_rgba(1,114,255,0.35)]"
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
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#373a41] bg-white/5 text-white transition-colors hover:border-[#0172ff]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-[#373a41] bg-[#0c0e12]/98 p-6 backdrop-blur-2xl lg:hidden animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {/* Home */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                pathname === "/"
                  ? "bg-[#0172ff]/15 text-white font-semibold border border-[#0172ff]/30"
                  : "text-[#cecfd2] hover:bg-white/5 hover:text-white"
              )}
            >
              <span>Home</span>
              {pathname === "/" && <span className="h-1.5 w-1.5 rounded-full bg-[#0172ff]" />}
            </Link>

            {/* Services */}
            <Link
              href="/service"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                pathname.startsWith("/service")
                  ? "bg-[#0172ff]/15 text-white font-semibold border border-[#0172ff]/30"
                  : "text-[#cecfd2] hover:bg-white/5 hover:text-white"
              )}
            >
              <span>Services</span>
              {pathname.startsWith("/service") && <span className="h-1.5 w-1.5 rounded-full bg-[#0172ff]" />}
            </Link>

            {/* Industries Collapsible Accordion */}
            <div className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className={cn(
                  "flex w-full items-center justify-between px-4 py-3 text-sm font-medium transition-colors",
                  isIndustriesActive
                    ? "bg-[#0172ff]/15 text-white font-semibold border-b border-[#0172ff]/30"
                    : "text-[#cecfd2] hover:bg-white/5 hover:text-white"
                )}
              >
                <div className="flex items-center gap-2">
                  <span>Industries</span>
                  <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-[10px] font-semibold text-blue-300">
                    10
                  </span>
                </div>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    mobileIndustriesOpen ? "rotate-180 text-blue-400" : "text-slate-400"
                  )}
                />
              </button>

              {mobileIndustriesOpen && (
                <div className="space-y-1 p-2 bg-[#080d16]/90 border-t border-white/5 animate-in fade-in duration-150">
                  {INDUSTRIES.map((ind) => {
                    const Icon = INDUSTRY_ICONS[ind.iconName] || Briefcase;
                    const isChildActive = pathname === `/industry/${ind.slug}`;

                    return (
                      <Link
                        key={ind.slug}
                        href={`/industry/${ind.slug}`}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileIndustriesOpen(false);
                        }}
                        className={cn(
                          "flex items-center justify-between rounded-lg px-3 py-2.5 text-xs font-medium transition-colors",
                          isChildActive
                            ? "bg-[#0172ff]/20 text-[#38bdf8] font-semibold"
                            : "text-slate-300 hover:bg-white/5 hover:text-white"
                        )}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                          <span>{ind.name}</span>
                        </div>
                        <span className="text-[10px] text-slate-500">{ind.shortTag}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Remaining Links */}
            {BASE_NAV_LINKS.slice(2).map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-[#0172ff]/15 text-white font-semibold border border-[#0172ff]/30"
                      : "text-[#cecfd2] hover:bg-white/5 hover:text-white"
                  )}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#0172ff]" />}
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

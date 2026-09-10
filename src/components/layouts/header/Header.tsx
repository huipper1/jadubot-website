"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  ChevronDown,
  Cloud,
  Coffee,
  Handshake,
  HelpCircle,
  Home,
  Mail,
  Menu,
  Plus,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Truck,
  Users,
  Wallet,
  X
} from "lucide-react";

import { cn } from "@/utils";
import { CALENDLY_DEMO_URL } from "@/config/site";
import { getIndustryBySlug } from "@/components/routes/industry";

const INDUSTRY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Plus,
  ShoppingBag,
  Smartphone,
  Briefcase,
  Wallet,
  Home,
  Cloud,
  ShoppingCart,
  Coffee,
  Truck
};

// 3-Column arrangement matching the user's reference screenshot exactly
const INDUSTRY_COLUMNS_SLUGS = [
  // Column 1
  [
    "healthcare-chatbot-automation",
    "retail-b2c-ecommerce-chatbot-automation",
    "education-chatbot-automation",
    "agency-chatbot-automation"
  ],
  // Column 2
  [
    "finance-chatbot-automation",
    "real-estate-chatbot-automation",
    "saas-chatbot-automation"
  ],
  // Column 3
  [
    "ecommerce-chatbot-automation",
    "restaurant-chatbot-automation",
    "logistics-chatbot-automation"
  ]
];

const RESOURCE_LINKS = [
  {
    href: "/about",
    name: "About Us",
    description: "Our mission, company story, and autonomous AI vision.",
    icon: Users
  },
  {
    href: "/blog",
    name: "Blog & Insights",
    description: "Guides, sales automation strategies, and product updates.",
    icon: BookOpen
  },
  {
    href: "/faq",
    name: "Help & FAQ",
    description: "Answers to common questions about features, setup, and billing.",
    icon: HelpCircle
  },
  {
    href: "/contact",
    name: "Contact Us",
    description: "Speak with our sales team or get 24/7 technical support.",
    icon: Mail
  },
  {
    href: "/affiliate",
    name: "Partner Program",
    description: "Earn recurring commissions by recommending Jadubot.",
    icon: Handshake
  }
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"industries" | "resources" | null>(null);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isIndustriesActive = pathname.startsWith("/industry");
  const isResourcesActive =
    pathname === "/about" ||
    pathname.startsWith("/blog") ||
    pathname === "/faq" ||
    pathname === "/contact" ||
    pathname === "/affiliate";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close all menus on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    setMobileIndustriesOpen(false);
    setMobileResourcesOpen(false);
  }

  const handleMouseEnter = (type: "industries" | "resources") => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(type);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
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
              "rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200",
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
              "rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200",
              pathname.startsWith("/service")
                ? "bg-[#0172ff]/15 text-white font-semibold shadow-[0_0_12px_rgba(1,114,255,0.25)] border border-[#0172ff]/30"
                : "text-[#cecfd2] hover:bg-white/5 hover:text-white"
            )}
          >
            Services
          </Link>

          {/* Industries Dropdown (Minimal Layout matching screenshot) */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("industries")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() =>
                setOpenDropdown(openDropdown === "industries" ? null : "industries")
              }
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200",
                isIndustriesActive || openDropdown === "industries"
                  ? "bg-[#0172ff]/15 text-white font-semibold shadow-[0_0_12px_rgba(1,114,255,0.25)] border border-[#0172ff]/30"
                  : "text-[#cecfd2] hover:bg-white/5 hover:text-white"
              )}
              aria-expanded={openDropdown === "industries"}
              aria-haspopup="true"
            >
              <span>Industries</span>
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  openDropdown === "industries" ? "rotate-180 text-blue-400" : "text-[#cecfd2]"
                )}
              />
            </button>

            {/* Dropdown container */}
            <div
              className={cn(
                "absolute top-full left-1/2 -translate-x-[28%] pt-2.5 z-50 transition-all duration-200",
                openDropdown === "industries"
                  ? "opacity-100 pointer-events-auto translate-y-0 visible"
                  : "opacity-0 pointer-events-none -translate-y-1 invisible"
              )}
            >
              <div className="w-[840px] max-w-[calc(100vw-40px)] rounded-2xl border border-[#2e3440] bg-[#0c0e12]/98 p-7 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(1,114,255,0.06)] backdrop-blur-2xl">
                {/* 3-Column Minimal Grid exactly matching the user's reference */}
                <div className="grid grid-cols-3 gap-x-8">
                  {INDUSTRY_COLUMNS_SLUGS.map((colSlugs, colIdx) => (
                    <div key={colIdx} className="flex flex-col gap-6">
                      {colSlugs.map((slug) => {
                        const ind = getIndustryBySlug(slug);
                        if (!ind) return null;
                        const Icon = INDUSTRY_ICONS[ind.iconName] || Briefcase;
                        const isActive = pathname === `/industry/${ind.slug}`;

                        return (
                          <Link
                            key={ind.slug}
                            href={`/industry/${ind.slug}`}
                            onClick={() => setOpenDropdown(null)}
                            className="group flex items-start gap-3.5 transition-colors p-1 -m-1 rounded-lg hover:bg-white/[0.03]"
                          >
                            {/* Minimal icon sitting cleanly on left */}
                            <div
                              className={cn(
                                "mt-0.5 shrink-0 transition-all duration-200",
                                isActive
                                  ? "text-[#38bdf8] scale-110"
                                  : "text-[#0172ff] group-hover:text-[#38bdf8] group-hover:scale-110"
                              )}
                            >
                              <Icon className="h-5 w-5" />
                            </div>

                            {/* Minimal title and subtitle */}
                            <div className="flex-1 min-w-0">
                              <div
                                className={cn(
                                  "text-[14px] font-bold leading-snug transition-colors",
                                  isActive
                                    ? "text-[#38bdf8]"
                                    : "text-white group-hover:text-[#38bdf8]"
                                )}
                              >
                                {ind.name}
                              </div>
                              <p className="mt-1 text-[12px] leading-relaxed text-[#94a3b8] group-hover:text-slate-300 transition-colors">
                                {ind.navDescription}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Resources Dropdown (Minimal Layout matching screenshot) */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("resources")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() =>
                setOpenDropdown(openDropdown === "resources" ? null : "resources")
              }
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200",
                isResourcesActive || openDropdown === "resources"
                  ? "bg-[#0172ff]/15 text-white font-semibold shadow-[0_0_12px_rgba(1,114,255,0.25)] border border-[#0172ff]/30"
                  : "text-[#cecfd2] hover:bg-white/5 hover:text-white"
              )}
              aria-expanded={openDropdown === "resources"}
              aria-haspopup="true"
            >
              <span>Resources</span>
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  openDropdown === "resources" ? "rotate-180 text-blue-400" : "text-[#cecfd2]"
                )}
              />
            </button>

            {/* Dropdown container */}
            <div
              className={cn(
                "absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50 transition-all duration-200",
                openDropdown === "resources"
                  ? "opacity-100 pointer-events-auto translate-y-0 visible"
                  : "opacity-0 pointer-events-none -translate-y-1 invisible"
              )}
            >
              <div className="w-[560px] max-w-[calc(100vw-40px)] rounded-2xl border border-[#2e3440] bg-[#0c0e12]/98 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(1,114,255,0.06)] backdrop-blur-2xl">
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                  {RESOURCE_LINKS.map((item) => {
                    const Icon = item.icon;
                    const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className="group flex items-start gap-3.5 transition-colors p-1 -m-1 rounded-lg hover:bg-white/[0.03]"
                      >
                        <div
                          className={cn(
                            "mt-0.5 shrink-0 transition-all duration-200",
                            isActive
                              ? "text-[#38bdf8] scale-110"
                              : "text-[#0172ff] group-hover:text-[#38bdf8] group-hover:scale-110"
                          )}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className={cn(
                              "text-[14px] font-bold leading-snug transition-colors",
                              isActive
                                ? "text-[#38bdf8]"
                                : "text-white group-hover:text-[#38bdf8]"
                            )}
                          >
                            {item.name}
                          </div>
                          <p className="mt-1 text-[12px] leading-relaxed text-[#94a3b8] group-hover:text-slate-300 transition-colors">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <Link
            href="/pricing"
            className={cn(
              "rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200",
              pathname.startsWith("/pricing")
                ? "bg-[#0172ff]/15 text-white font-semibold shadow-[0_0_12px_rgba(1,114,255,0.25)] border border-[#0172ff]/30"
                : "text-[#cecfd2] hover:bg-white/5 hover:text-white"
            )}
          >
            Pricing
          </Link>

          {/* CPA Automation */}
          <Link
            href="/cpa-marketing-automation"
            className={cn(
              "rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200",
              pathname.startsWith("/cpa-marketing-automation")
                ? "bg-[#0172ff]/15 text-white font-semibold shadow-[0_0_12px_rgba(1,114,255,0.25)] border border-[#0172ff]/30"
                : "text-[#cecfd2] hover:bg-white/5 hover:text-white"
            )}
          >
            CPA Automation
          </Link>
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
                  {INDUSTRY_COLUMNS_SLUGS.flat().map((slug) => {
                    const ind = getIndustryBySlug(slug);
                    if (!ind) return null;
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
                          <Icon className="h-4 w-4 text-[#0172ff] shrink-0" />
                          <span>{ind.name}</span>
                        </div>
                        <span className="text-[10px] text-slate-500">{ind.shortTag}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Resources Collapsible Accordion */}
            <div className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                className={cn(
                  "flex w-full items-center justify-between px-4 py-3 text-sm font-medium transition-colors",
                  isResourcesActive
                    ? "bg-[#0172ff]/15 text-white font-semibold border-b border-[#0172ff]/30"
                    : "text-[#cecfd2] hover:bg-white/5 hover:text-white"
                )}
              >
                <div className="flex items-center gap-2">
                  <span>Resources</span>
                  <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-[10px] font-semibold text-blue-300">
                    {RESOURCE_LINKS.length}
                  </span>
                </div>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    mobileResourcesOpen ? "rotate-180 text-blue-400" : "text-slate-400"
                  )}
                />
              </button>

              {mobileResourcesOpen && (
                <div className="space-y-1 p-2 bg-[#080d16]/90 border-t border-white/5 animate-in fade-in duration-150">
                  {RESOURCE_LINKS.map((item) => {
                    const Icon = item.icon;
                    const isChildActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileResourcesOpen(false);
                        }}
                        className={cn(
                          "flex items-center justify-between rounded-lg px-3 py-2.5 text-xs font-medium transition-colors",
                          isChildActive
                            ? "bg-[#0172ff]/20 text-[#38bdf8] font-semibold"
                            : "text-slate-300 hover:bg-white/5 hover:text-white"
                        )}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="h-4 w-4 text-[#0172ff] shrink-0" />
                          <span>{item.name}</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Pricing */}
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                pathname.startsWith("/pricing")
                  ? "bg-[#0172ff]/15 text-white font-semibold border border-[#0172ff]/30"
                  : "text-[#cecfd2] hover:bg-white/5 hover:text-white"
              )}
            >
              <span>Pricing</span>
              {pathname.startsWith("/pricing") && <span className="h-1.5 w-1.5 rounded-full bg-[#0172ff]" />}
            </Link>

            {/* CPA Automation */}
            <Link
              href="/cpa-marketing-automation"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                pathname.startsWith("/cpa-marketing-automation")
                  ? "bg-[#0172ff]/15 text-white font-semibold border border-[#0172ff]/30"
                  : "text-[#cecfd2] hover:bg-white/5 hover:text-white"
              )}
            >
              <span>CPA Automation</span>
              {pathname.startsWith("/cpa-marketing-automation") && (
                <span className="h-1.5 w-1.5 rounded-full bg-[#0172ff]" />
              )}
            </Link>

            {/* Actions */}
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

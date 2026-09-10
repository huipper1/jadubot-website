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
import { useTheme } from "next-themes";

import { cn } from "@/utils";
import { CALENDLY_DEMO_URL } from "@/config/site";
import { getIndustryBySlug } from "@/components/routes/industry";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

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
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"industries" | "resources" | null>(null);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? (resolvedTheme === "light" ? "light" : "dark") : "dark";

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
            ? "border-border bg-popover/95 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
            : "border-border/80 bg-background/80 backdrop-blur-lg"
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
            <span className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-[#38bdf8]">
              Jadubot
            </span>
            <span className="text-[9px] font-medium tracking-wider uppercase text-muted-foreground/70">
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
                ? "bg-primary/10 text-primary font-semibold shadow-[0_0_12px_rgba(1,114,255,0.2)] border border-primary/30"
                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
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
                ? "bg-primary/10 text-primary font-semibold shadow-[0_0_12px_rgba(1,114,255,0.2)] border border-primary/30"
                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
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
                  ? "bg-primary/10 text-primary font-semibold shadow-[0_0_12px_rgba(1,114,255,0.2)] border border-primary/30"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
              aria-expanded={openDropdown === "industries"}
              aria-haspopup="true"
            >
              <span>Industries</span>
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  openDropdown === "industries" ? "rotate-180 text-blue-400" : "text-muted-foreground"
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
              <div className="w-[840px] max-w-[calc(100vw-40px)] rounded-2xl border border-border bg-popover/98 p-7 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(1,114,255,0.06)] backdrop-blur-2xl">
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
                            className="group flex items-start gap-3.5 transition-colors p-1 -m-1 rounded-lg hover:bg-muted/30"
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
                                    : "text-foreground group-hover:text-[#38bdf8]"
                                )}
                              >
                                {ind.name}
                              </div>
                              <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
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
                  ? "bg-primary/10 text-primary font-semibold shadow-[0_0_12px_rgba(1,114,255,0.2)] border border-primary/30"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
              aria-expanded={openDropdown === "resources"}
              aria-haspopup="true"
            >
              <span>Resources</span>
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  openDropdown === "resources" ? "rotate-180 text-blue-400" : "text-muted-foreground"
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
              <div className="w-[560px] max-w-[calc(100vw-40px)] rounded-2xl border border-border bg-popover/98 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(1,114,255,0.06)] backdrop-blur-2xl">
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
                        className="group flex items-start gap-3.5 transition-colors p-1 -m-1 rounded-lg hover:bg-muted/30"
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
                                : "text-foreground group-hover:text-[#38bdf8]"
                            )}
                          >
                            {item.name}
                          </div>
                          <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
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
                ? "bg-primary/10 text-primary font-semibold shadow-[0_0_12px_rgba(1,114,255,0.2)] border border-primary/30"
                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
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
                ? "bg-primary/10 text-primary font-semibold shadow-[0_0_12px_rgba(1,114,255,0.2)] border border-primary/30"
                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            )}
          >
            CPA Automation
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <AnimatedThemeToggler
            theme={currentTheme}
            onThemeChange={(newTheme) => setTheme(newTheme)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-foreground"
            aria-label="Toggle theme"
          />
          <a
            href="https://app.jadubot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-muted-foreground hover:text-foreground px-3 py-1.5 transition-colors"
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
          <AnimatedThemeToggler
            theme={currentTheme}
            onThemeChange={(newTheme) => setTheme(newTheme)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            aria-label="Toggle theme"
          />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card/60 text-foreground transition-colors hover:border-primary"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-border bg-popover/98 p-6 backdrop-blur-2xl lg:hidden animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {/* Home */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                pathname === "/"
                  ? "bg-primary/10 text-primary font-semibold border border-primary/30"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              <span>Home</span>
              {pathname === "/" && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
            </Link>

            {/* Services */}
            <Link
              href="/service"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                pathname.startsWith("/service")
                  ? "bg-primary/10 text-primary font-semibold border border-primary/30"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              <span>Services</span>
              {pathname.startsWith("/service") && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
            </Link>

            {/* Industries Collapsible Accordion */}
            <div className="rounded-xl border border-border/60 bg-muted/20 overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className={cn(
                  "flex w-full items-center justify-between px-4 py-3 text-sm font-medium transition-colors",
                  isIndustriesActive
                    ? "bg-primary/10 text-primary font-semibold border-b border-primary/30"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                )}
              >
                <div className="flex items-center gap-2">
                  <span>Industries</span>
                  <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary">
                    10
                  </span>
                </div>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    mobileIndustriesOpen ? "rotate-180 text-primary" : "text-muted-foreground"
                  )}
                />
              </button>

              {mobileIndustriesOpen && (
                <div className="space-y-1 p-2 bg-background/90 border-t border-border/60 animate-in fade-in duration-150">
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
                            ? "bg-primary/15 text-primary font-semibold"
                            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                        )}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="h-4 w-4 text-primary shrink-0" />
                          <span>{ind.name}</span>
                        </div>
                        <span className="text-[10px] text-muted-foreground/60">{ind.shortTag}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Resources Collapsible Accordion */}
            <div className="rounded-xl border border-border/60 bg-muted/20 overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                className={cn(
                  "flex w-full items-center justify-between px-4 py-3 text-sm font-medium transition-colors",
                  isResourcesActive
                    ? "bg-primary/10 text-primary font-semibold border-b border-primary/30"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                )}
              >
                <div className="flex items-center gap-2">
                  <span>Resources</span>
                  <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary">
                    {RESOURCE_LINKS.length}
                  </span>
                </div>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    mobileResourcesOpen ? "rotate-180 text-primary" : "text-muted-foreground"
                  )}
                />
              </button>

              {mobileResourcesOpen && (
                <div className="space-y-1 p-2 bg-background/90 border-t border-border/60 animate-in fade-in duration-150">
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
                            ? "bg-primary/15 text-primary font-semibold"
                            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                        )}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="h-4 w-4 text-primary shrink-0" />
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
                  ? "bg-primary/10 text-primary font-semibold border border-primary/30"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              <span>Pricing</span>
              {pathname.startsWith("/pricing") && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
            </Link>

            {/* CPA Automation */}
            <Link
              href="/cpa-marketing-automation"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                pathname.startsWith("/cpa-marketing-automation")
                  ? "bg-primary/10 text-primary font-semibold border border-primary/30"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              <span>CPA Automation</span>
              {pathname.startsWith("/cpa-marketing-automation") && (
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              )}
            </Link>

            {/* Actions */}
            <div className="mt-4 pt-4 border-t border-border space-y-3">
              <div className="flex items-center justify-between py-2 px-3 rounded-xl border border-border bg-card/60">
                <span className="text-xs font-medium text-foreground">Theme</span>
                <AnimatedThemeToggler
                  theme={currentTheme}
                  onThemeChange={(newTheme) => setTheme(newTheme)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                  aria-label="Toggle theme"
                />
              </div>
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

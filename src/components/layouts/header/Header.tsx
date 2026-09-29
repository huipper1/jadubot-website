"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import {
  ArrowRight,
  BookOpen,
  Bot,
  Briefcase,
  ChevronDown,
  Cloud,
  Coffee,
  Globe,
  Handshake,
  Headphones,
  HelpCircle,
  Home,
  Instagram,
  LayoutGrid,
  Mail,
  MessageCircle,
  MessageSquare,
  Plus,
  RotateCcw,
  Send,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Truck,
  UserCheck,
  Users,
  Wallet,
  X
} from "lucide-react";
import { useTheme } from "next-themes";

import { getIndustryBySlug } from "@/components/routes/industry";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { CALENDLY_DEMO_URL } from "@/config/site";
import { aiAgentData } from "@/data/ai-agent-data";
import { platformData } from "@/data/platform-data";
import { cn } from "@/utils";

const PLATFORM_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageCircle,
  MessageSquare,
  Instagram,
  Send,
  Globe
};

const AGENT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  UserCheck,
  Headphones,
  ShoppingCart,
  ShoppingBag,
  RotateCcw
};

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

const INDUSTRY_COLUMNS_SLUGS = [
  [
    "healthcare-chatbot-automation",
    "retail-b2c-ecommerce-chatbot-automation",
    "education-chatbot-automation",
    "agency-chatbot-automation"
  ],
  ["finance-chatbot-automation", "real-estate-chatbot-automation", "saas-chatbot-automation"],
  ["ecommerce-chatbot-automation", "restaurant-chatbot-automation", "logistics-chatbot-automation"]
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

const emptySubscribe = () => () => {};

export function Header() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [isScrolled, setIsScrolled] = useState(false);
  const [isPillHovered, setIsPillHovered] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState<
    "platforms" | "ai-agents" | "industries" | "resources" | null
  >(null);
  const [openDropdown, setOpenDropdown] = useState<
    "platforms" | "ai-agents" | "industries" | "resources" | null
  >(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleAccordion = (section: "platforms" | "ai-agents" | "industries" | "resources") => {
    setExpandedAccordion((prev) => (prev === section ? null : section));
  };

  const currentTheme = mounted ? (resolvedTheme === "light" ? "light" : "dark") : "dark";

  const isPlatformsActive = pathname.startsWith("/platform");
  const isAiAgentsActive = pathname.startsWith("/ai-agents");
  const isIndustriesActive = pathname.startsWith("/industry");
  const isResourcesActive =
    pathname === "/about" ||
    pathname.startsWith("/blog") ||
    pathname === "/faq" ||
    pathname === "/contact" ||
    pathname === "/affiliate";

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (isOverlayOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOverlayOpen]);

  // Close overlay on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOverlayOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close overlay and dropdowns on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOverlayOpen(false);
    setOpenDropdown(null);
  }

  const handleMouseEnter = (type: "platforms" | "ai-agents" | "industries" | "resources") => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(type);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  // Collapsed state on desktop: scrolled down, not hovered, and no dropdown is open
  const isDesktopCollapsed = isScrolled && !isPillHovered && openDropdown === null;

  const roleAgents = aiAgentData.filter((a) => a.category === "role");
  const commerceAgents = aiAgentData.filter((a) => a.category === "commerce");

  return (
    <>
      {/* Floating Header Bar */}
      <header data-navbar-scope="true" className="pointer-events-none fixed top-0 right-0 left-0 z-40 flex justify-center px-3 py-3 sm:px-4 sm:py-4 md:py-6">
        <div
          onMouseEnter={() => setIsPillHovered(true)}
          onMouseLeave={() => {
            setIsPillHovered(false);
            handleMouseLeave();
          }}
          className={cn(
            "pointer-events-auto relative flex items-center justify-between rounded-full border shadow-elevated backdrop-blur-3xl transition-[max-width,padding,gap,background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            // Rich frosted glassmorphism styling
            "border-white/60 bg-white/92 shadow-[0_12px_40px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.9)] dark:border-white/10 dark:bg-slate-950/92 dark:shadow-[0_18px_50px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.08)]",
            // Dynamic width morphing & strict mobile viewport bounds
            "w-full max-w-[calc(100vw-1.5rem)] sm:max-w-6xl",
            isDesktopCollapsed
              ? "lg:w-auto lg:max-w-[280px] gap-6 px-4 py-2 sm:px-5 sm:py-2.5"
              : "gap-2 px-3.5 py-1.5 sm:gap-3 sm:px-6 sm:py-2.5"
          )}
        >
          {/* Logo & Brand Name */}
          <Link href="/" className="group flex shrink-0 items-center gap-2.5">
            <figure className="relative flex items-center">
              <Image
                src="/assets/images/shared/jadubot-logo.png"
                alt="Jadubot Logo"
                width={34}
                height={34}
                className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-8 sm:w-8"
                priority
              />
            </figure>
            <div className="flex flex-col">
              <span className="font-heading text-xs font-black tracking-widest text-foreground uppercase transition-colors group-hover:text-primary sm:text-sm">
                Jadubot
              </span>
              <span className="hidden font-mono text-[8px] font-semibold tracking-wider text-muted-foreground/80 uppercase sm:inline-block">
                AI Sales Agent
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links & Dropdowns (Visible at the top or when hovering over collapsed pill) */}
          <nav
            className={cn(
              "hidden items-center gap-1 transition-[max-width,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] xl:gap-1.5 lg:flex",
              isDesktopCollapsed
                ? "max-w-0 opacity-0 pointer-events-none"
                : "max-w-4xl opacity-100 pointer-events-auto"
            )}
            aria-label="Main Navigation"
          >
            {/* Platforms Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("platforms")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === "platforms" ? null : "platforms")}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold tracking-wider uppercase transition-all duration-200",
                  isPlatformsActive || openDropdown === "platforms"
                    ? "border border-primary/30 bg-primary/10 text-primary shadow-[0_0_12px_rgba(1,114,255,0.2)]"
                    : "text-foreground/80 hover:bg-muted/50 hover:text-foreground dark:text-white/80 dark:hover:text-white"
                )}
                aria-expanded={openDropdown === "platforms"}
                aria-haspopup="true"
              >
                <span>Platforms</span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    openDropdown === "platforms" ? "rotate-180 text-primary" : "text-muted-foreground"
                  )}
                />
              </button>

              {/* Platforms Dropdown Card */}
              <div
                className={cn(
                  "absolute top-full left-1/2 z-50 -translate-x-[25%] pt-3 transition-all duration-300 ease-out",
                  openDropdown === "platforms"
                    ? "pointer-events-auto visible translate-y-0 opacity-100 scale-100"
                    : "pointer-events-none invisible -translate-y-2 opacity-0 scale-95"
                )}
              >
                <div className="w-[620px] max-w-[calc(100vw-40px)] rounded-3xl border border-white/60 bg-white/94 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.14),inset_0_1px_1px_rgba(255,255,255,0.9)] backdrop-blur-3xl dark:border-white/10 dark:bg-slate-950/94 dark:shadow-[0_25px_80px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.08)]">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                    {platformData.map((platform) => {
                      const Icon = PLATFORM_ICONS[platform.iconName] || MessageCircle;
                      const isActive = pathname === `/platform/${platform.slug}`;

                      return (
                        <Link
                          key={platform.slug}
                          href={`/platform/${platform.slug}`}
                          onClick={() => setOpenDropdown(null)}
                          className="group -m-1 flex items-start gap-3 rounded-lg p-1.5 transition-colors hover:bg-muted/40"
                        >
                          <div
                            className={cn(
                              "mt-0.5 shrink-0 transition-all duration-200",
                              isActive
                                ? "scale-110 text-primary"
                                : "text-primary group-hover:scale-110"
                            )}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div
                              className={cn(
                                "text-sm font-bold transition-colors",
                                isActive ? "text-primary" : "text-foreground group-hover:text-primary"
                              )}
                            >
                              {platform.navTitle}
                            </div>
                            <p className="mt-0.5 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                              {platform.navDescription}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <Link
              href="/service"
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-bold tracking-wider uppercase transition-all duration-200",
                pathname.startsWith("/service")
                  ? "border border-primary/30 bg-primary/10 text-primary shadow-[0_0_12px_rgba(1,114,255,0.2)]"
                  : "text-foreground/80 hover:bg-muted/50 hover:text-foreground dark:text-white/80 dark:hover:text-white"
              )}
            >
              Services
            </Link>

            {/* AI Agents Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("ai-agents")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === "ai-agents" ? null : "ai-agents")}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold tracking-wider uppercase transition-all duration-200",
                  isAiAgentsActive || openDropdown === "ai-agents"
                    ? "border border-primary/30 bg-primary/10 text-primary shadow-[0_0_12px_rgba(1,114,255,0.2)]"
                    : "text-foreground/80 hover:bg-muted/50 hover:text-foreground dark:text-white/80 dark:hover:text-white"
                )}
                aria-expanded={openDropdown === "ai-agents"}
                aria-haspopup="true"
              >
                <span>AI Agents</span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    openDropdown === "ai-agents" ? "rotate-180 text-primary" : "text-muted-foreground"
                  )}
                />
              </button>

              {/* AI Agents Mega Menu */}
              <div
                className={cn(
                  "absolute top-full left-1/2 z-50 -translate-x-[45%] pt-3 transition-all duration-300 ease-out",
                  openDropdown === "ai-agents"
                    ? "pointer-events-auto visible translate-y-0 opacity-100 scale-100"
                    : "pointer-events-none invisible -translate-y-2 opacity-0 scale-95"
                )}
              >
                <div className="w-[740px] max-w-[calc(100vw-40px)] rounded-3xl border border-white/60 bg-white/94 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.14),inset_0_1px_1px_rgba(255,255,255,0.9)] backdrop-blur-3xl dark:border-white/10 dark:bg-slate-950/94 dark:shadow-[0_25px_80px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.08)]">
                  {/* Overview link */}
                  <Link
                    href="/ai-agents"
                    onClick={() => setOpenDropdown(null)}
                    className="group mb-5 flex items-center justify-between rounded-xl border border-primary/25 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-3 transition-all hover:border-primary/50 hover:bg-muted/40"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white shadow-sm transition-all duration-200 group-hover:scale-105">
                        <Bot className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-xs font-bold text-foreground transition-colors group-hover:text-primary">
                          <span>AI Agents Overview</span>
                          <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[9px] font-bold text-primary">
                            MULTI-AGENT WORKFORCE
                          </span>
                        </div>
                        <p className="mt-0.5 text-[11px] text-muted-foreground">
                          Discover how our specialized agents turn conversations into revenue.
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-primary transition-all group-hover:translate-x-1" />
                  </Link>

                  {/* Sub-groups */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* By role */}
                    <div>
                      <div className="mb-3 px-1 text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
                        By Role
                      </div>
                      <div className="flex flex-col gap-3">
                        {roleAgents.map((agent) => {
                          const Icon = AGENT_ICONS[agent.iconName] || Bot;
                          const isActive = pathname === `/ai-agents/${agent.slug}`;

                          return (
                            <Link
                              key={agent.slug}
                              href={`/ai-agents/${agent.slug}`}
                              onClick={() => setOpenDropdown(null)}
                              className="group -m-1 flex items-start gap-3 rounded-lg p-1.5 transition-colors hover:bg-muted/40"
                            >
                              <div
                                className={cn(
                                  "mt-0.5 shrink-0 transition-all duration-200",
                                  isActive
                                    ? "scale-110 text-primary"
                                    : "text-primary group-hover:scale-110"
                                )}
                              >
                                <Icon className="h-5 w-5" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div
                                  className={cn(
                                    "text-sm font-bold transition-colors",
                                    isActive ? "text-primary" : "text-foreground group-hover:text-primary"
                                  )}
                                >
                                  {agent.name}
                                </div>
                                <p className="mt-0.5 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                                  {agent.navDescription}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    {/* Commerce */}
                    <div>
                      <div className="mb-3 px-1 text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
                        Commerce
                      </div>
                      <div className="flex flex-col gap-3">
                        {commerceAgents.map((agent) => {
                          const Icon = AGENT_ICONS[agent.iconName] || ShoppingBag;
                          const isActive = pathname === `/ai-agents/${agent.slug}`;

                          return (
                            <Link
                              key={agent.slug}
                              href={`/ai-agents/${agent.slug}`}
                              onClick={() => setOpenDropdown(null)}
                              className="group -m-1 flex items-start gap-3 rounded-lg p-1.5 transition-colors hover:bg-muted/40"
                            >
                              <div
                                className={cn(
                                  "mt-0.5 shrink-0 transition-all duration-200",
                                  isActive
                                    ? "scale-110 text-primary"
                                    : "text-primary group-hover:scale-110"
                                )}
                              >
                                <Icon className="h-5 w-5" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div
                                  className={cn(
                                    "text-sm font-bold transition-colors",
                                    isActive ? "text-primary" : "text-foreground group-hover:text-primary"
                                  )}
                                >
                                  {agent.name}
                                </div>
                                <p className="mt-0.5 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                                  {agent.navDescription}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("industries")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === "industries" ? null : "industries")}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold tracking-wider uppercase transition-all duration-200",
                  isIndustriesActive || openDropdown === "industries"
                    ? "border border-primary/30 bg-primary/10 text-primary shadow-[0_0_12px_rgba(1,114,255,0.2)]"
                    : "text-foreground/80 hover:bg-muted/50 hover:text-foreground dark:text-white/80 dark:hover:text-white"
                )}
                aria-expanded={openDropdown === "industries"}
                aria-haspopup="true"
              >
                <span>Industries</span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    openDropdown === "industries" ? "rotate-180 text-primary" : "text-muted-foreground"
                  )}
                />
              </button>

              {/* Industries Dropdown Container */}
              <div
                className={cn(
                  "absolute top-full left-1/2 z-50 -translate-x-[50%] pt-3 transition-all duration-300 ease-out",
                  openDropdown === "industries"
                    ? "pointer-events-auto visible translate-y-0 opacity-100 scale-100"
                    : "pointer-events-none invisible -translate-y-2 opacity-0 scale-95"
                )}
              >
                <div className="w-[820px] max-w-[calc(100vw-40px)] rounded-3xl border border-white/60 bg-white/94 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.14),inset_0_1px_1px_rgba(255,255,255,0.9)] backdrop-blur-3xl dark:border-white/10 dark:bg-slate-950/94 dark:shadow-[0_25px_80px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.08)]">
                  <div className="grid grid-cols-3 gap-x-6">
                    {INDUSTRY_COLUMNS_SLUGS.map((colSlugs, colIdx) => (
                      <div key={colIdx} className="flex flex-col gap-4">
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
                              className="group -m-1 flex items-start gap-3 rounded-lg p-1.5 transition-colors hover:bg-muted/40"
                            >
                              <div
                                className={cn(
                                  "mt-0.5 shrink-0 transition-all duration-200",
                                  isActive
                                    ? "scale-110 text-primary"
                                    : "text-primary group-hover:scale-110"
                                )}
                              >
                                <Icon className="h-5 w-5" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div
                                  className={cn(
                                    "text-sm font-bold transition-colors",
                                    isActive ? "text-primary" : "text-foreground group-hover:text-primary"
                                  )}
                                >
                                  {ind.name}
                                </div>
                                <p className="mt-0.5 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
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

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === "resources" ? null : "resources")}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold tracking-wider uppercase transition-all duration-200",
                  isResourcesActive || openDropdown === "resources"
                    ? "border border-primary/30 bg-primary/10 text-primary shadow-[0_0_12px_rgba(1,114,255,0.2)]"
                    : "text-foreground/80 hover:bg-muted/50 hover:text-foreground dark:text-white/80 dark:hover:text-white"
                )}
                aria-expanded={openDropdown === "resources"}
                aria-haspopup="true"
              >
                <span>Resources</span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    openDropdown === "resources" ? "rotate-180 text-primary" : "text-muted-foreground"
                  )}
                />
              </button>

              {/* Resources Dropdown Container */}
              <div
                className={cn(
                  "absolute top-full left-1/2 z-50 -translate-x-[60%] pt-3 transition-all duration-300 ease-out",
                  openDropdown === "resources"
                    ? "pointer-events-auto visible translate-y-0 opacity-100 scale-100"
                    : "pointer-events-none invisible -translate-y-2 opacity-0 scale-95"
                )}
              >
                <div className="w-[560px] max-w-[calc(100vw-40px)] rounded-3xl border border-white/60 bg-white/94 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.14),inset_0_1px_1px_rgba(255,255,255,0.9)] backdrop-blur-3xl dark:border-white/10 dark:bg-slate-950/94 dark:shadow-[0_25px_80px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.08)]">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    {RESOURCE_LINKS.map((item) => {
                      const Icon = item.icon;
                      const isActive =
                        item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className="group -m-1 flex items-start gap-3 rounded-lg p-1.5 transition-colors hover:bg-muted/40"
                        >
                          <div
                            className={cn(
                              "mt-0.5 shrink-0 transition-all duration-200",
                              isActive
                                ? "scale-110 text-primary"
                                : "text-primary group-hover:scale-110"
                            )}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div
                              className={cn(
                                "text-sm font-bold transition-colors",
                                isActive ? "text-primary" : "text-foreground group-hover:text-primary"
                              )}
                            >
                              {item.name}
                            </div>
                            <p className="mt-0.5 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
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
                "rounded-full px-3 py-1.5 text-xs font-bold tracking-wider uppercase transition-all duration-200",
                pathname.startsWith("/pricing")
                  ? "border border-primary/30 bg-primary/10 text-primary shadow-[0_0_12px_rgba(1,114,255,0.2)]"
                  : "text-foreground/80 hover:bg-muted/50 hover:text-foreground dark:text-white/80 dark:hover:text-white"
              )}
            >
              Pricing
            </Link>

            {/* CPA Automation */}
            <Link
              href="/cpa-marketing-automation"
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-bold tracking-wider uppercase transition-all duration-200",
                pathname.startsWith("/cpa-marketing-automation")
                  ? "border border-primary/30 bg-primary/10 text-primary shadow-[0_0_12px_rgba(1,114,255,0.2)]"
                  : "text-foreground/80 hover:bg-muted/50 hover:text-foreground dark:text-white/80 dark:hover:text-white"
              )}
            >
              CPA
            </Link>
          </nav>

          {/* Controls: Theme Toggler + Menu Grid Trigger Icon */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
            {/* Theme Toggler */}
            <AnimatedThemeToggler
              theme={currentTheme}
              onThemeChange={(newTheme) => setTheme(newTheme)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-card/60 text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:text-foreground dark:bg-white/5"
              aria-label="Toggle theme"
            />

            {/* Menu Expand Trigger (4-Grid Icon from Mockup) */}
            <button
              type="button"
              onClick={() => setIsOverlayOpen(!isOverlayOpen)}
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-foreground/5 text-foreground transition-all duration-200 hover:scale-105 hover:border-primary/60 hover:bg-primary/10 hover:text-primary active:scale-95 dark:border-white/15 dark:bg-white/10 dark:text-white"
              aria-label={isOverlayOpen ? "Close navigation overlay" : "Open expanded navigation"}
              aria-expanded={isOverlayOpen}
            >
              {isOverlayOpen ? (
                <X className="h-4 w-4 transition-transform duration-200 group-hover:rotate-90" />
              ) : (
                <LayoutGrid className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Glassmorphic Mega Menu Overlay (Matching Images 2 & 4) */}
      <div
        data-navbar-scope="true"
        className={cn(
          "fixed inset-0 z-50 flex flex-col justify-between overflow-y-auto p-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:p-8 md:p-10",
          "bg-white/85 backdrop-blur-3xl dark:bg-slate-950/85",
          isOverlayOpen
            ? "pointer-events-auto visible opacity-100 translate-y-0 scale-100"
            : "pointer-events-none invisible opacity-0 -translate-y-3 scale-[0.98]"
        )}
        aria-hidden={!isOverlayOpen}
      >
        {/* Ambient Radial Glows */}
        <div
          className="pointer-events-none absolute top-10 left-1/4 -z-10 h-80 w-80 rounded-full bg-primary/20 blur-[130px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-10 right-1/4 -z-10 h-80 w-80 rounded-full bg-sky-500/15 blur-[130px]"
          aria-hidden="true"
        />

        {/* Overlay Top Bar (Logo, Desktop Horizontal Links & Close X) */}
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between border-b border-border/40 pb-6">
          {/* Brand */}
          <Link
            href="/"
            onClick={() => setIsOverlayOpen(false)}
            className="flex items-center gap-3"
          >
            <Image
              src="/assets/images/shared/jadubot-logo.png"
              alt="Jadubot Logo"
              width={38}
              height={38}
              className="h-8 w-8 object-contain sm:h-9 sm:w-9"
            />
            <div className="flex flex-col">
              <span className="font-heading text-sm font-black tracking-widest text-foreground uppercase sm:text-base">
                Jadubot
              </span>
              <span className="text-[9px] font-semibold tracking-wider text-muted-foreground uppercase">
                AI Sales Agent
              </span>
            </div>
          </Link>

          {/* Close Button */}
          <div className="flex items-center gap-3">
            <AnimatedThemeToggler
              theme={currentTheme}
              onThemeChange={(newTheme) => setTheme(newTheme)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-card/60 text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:text-foreground"
              aria-label="Toggle theme"
            />
            <button
              type="button"
              onClick={() => setIsOverlayOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/80 bg-card/60 text-foreground transition-all duration-200 hover:scale-105 hover:border-primary hover:text-primary active:scale-95"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Overlay Content Columns (01 EXPLORE, 02 COMPANY, 03 ACTION / BRAND DIRECTION) */}
        <div className="mx-auto my-auto w-full max-w-7xl py-10 sm:py-14">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8 lg:gap-12">
            {/* Column 01: EXPLORE */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-widest text-muted-foreground/80 uppercase">
                <span>01</span>
                <span className="h-px w-8 bg-border" />
                <span>Explore</span>
              </div>
              <ul className="mt-6 flex flex-col space-y-3 sm:space-y-4">
                {/* Home */}
                <li>
                  <Link
                    href="/"
                    onClick={() => setIsOverlayOpen(false)}
                    className="group font-heading inline-block text-2xl font-black tracking-tight text-foreground/90 uppercase transition-all duration-200 hover:translate-x-2 hover:text-primary sm:text-3xl lg:text-4xl"
                  >
                    Home
                  </Link>
                </li>

                {/* Services */}
                <li>
                  <Link
                    href="/service"
                    onClick={() => setIsOverlayOpen(false)}
                    className="group font-heading inline-block text-2xl font-black tracking-tight text-foreground/90 uppercase transition-all duration-200 hover:translate-x-2 hover:text-primary sm:text-3xl lg:text-4xl"
                  >
                    Services
                  </Link>
                </li>

                {/* Platforms (Accordion) */}
                <li className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => toggleAccordion("platforms")}
                      className="group font-heading text-2xl font-black tracking-tight text-foreground/90 uppercase transition-all duration-200 hover:translate-x-2 hover:text-primary sm:text-3xl lg:text-4xl"
                    >
                      Platforms
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleAccordion("platforms")}
                      className="p-1.5 text-muted-foreground transition-colors hover:text-primary"
                      aria-label="Toggle Platforms subroutes"
                    >
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform duration-300",
                          expandedAccordion === "platforms" && "rotate-180 text-primary"
                        )}
                      />
                    </button>
                  </div>
                  {/* Platforms Subroutes */}
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      expandedAccordion === "platforms"
                        ? "grid-rows-[1fr] opacity-100 pt-3 pb-1"
                        : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    )}
                  >
                    <ul className="overflow-hidden space-y-2 border-l-2 border-primary/30 pl-4">
                      {platformData.map((plat) => (
                        <li key={plat.slug}>
                          <Link
                            href={`/platform/${plat.slug}`}
                            onClick={() => setIsOverlayOpen(false)}
                            className="group flex items-center justify-between py-1 pr-2 text-sm font-semibold text-muted-foreground transition-all duration-150 hover:translate-x-1.5 hover:text-foreground"
                          >
                            <span>{plat.navTitle}</span>
                            <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-150 group-hover:opacity-100 group-hover:text-primary" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                {/* AI Agents (Accordion) */}
                <li className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => toggleAccordion("ai-agents")}
                      className="group font-heading text-2xl font-black tracking-tight text-foreground/90 uppercase transition-all duration-200 hover:translate-x-2 hover:text-primary sm:text-3xl lg:text-4xl"
                    >
                      AI Agents
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleAccordion("ai-agents")}
                      className="p-1.5 text-muted-foreground transition-colors hover:text-primary"
                      aria-label="Toggle AI Agents subroutes"
                    >
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform duration-300",
                          expandedAccordion === "ai-agents" && "rotate-180 text-primary"
                        )}
                      />
                    </button>
                  </div>
                  {/* AI Agents Subroutes */}
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      expandedAccordion === "ai-agents"
                        ? "grid-rows-[1fr] opacity-100 pt-3 pb-1"
                        : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    )}
                  >
                    <ul className="overflow-hidden space-y-2 border-l-2 border-primary/30 pl-4">
                      {aiAgentData.map((agent) => (
                        <li key={agent.slug}>
                          <Link
                            href={`/ai-agents/${agent.slug}`}
                            onClick={() => setIsOverlayOpen(false)}
                            className="group flex items-center justify-between py-1 pr-2 text-sm font-semibold text-muted-foreground transition-all duration-150 hover:translate-x-1.5 hover:text-foreground"
                          >
                            <span>{agent.name}</span>
                            <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-150 group-hover:opacity-100 group-hover:text-primary" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                {/* Industries (Accordion) */}
                <li className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => toggleAccordion("industries")}
                      className="group font-heading text-2xl font-black tracking-tight text-foreground/90 uppercase transition-all duration-200 hover:translate-x-2 hover:text-primary sm:text-3xl lg:text-4xl"
                    >
                      Industries
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleAccordion("industries")}
                      className="p-1.5 text-muted-foreground transition-colors hover:text-primary"
                      aria-label="Toggle Industries subroutes"
                    >
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform duration-300",
                          expandedAccordion === "industries" && "rotate-180 text-primary"
                        )}
                      />
                    </button>
                  </div>
                  {/* Industries Subroutes */}
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      expandedAccordion === "industries"
                        ? "grid-rows-[1fr] opacity-100 pt-3 pb-1"
                        : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    )}
                  >
                    <ul className="overflow-hidden space-y-2 border-l-2 border-primary/30 pl-4">
                      {INDUSTRY_COLUMNS_SLUGS.flat().map((slug) => {
                        const ind = getIndustryBySlug(slug);
                        if (!ind) return null;
                        return (
                          <li key={ind.slug}>
                            <Link
                              href={`/industry/${ind.slug}`}
                              onClick={() => setIsOverlayOpen(false)}
                              className="group flex items-center justify-between py-1 pr-2 text-sm font-semibold text-muted-foreground transition-all duration-150 hover:translate-x-1.5 hover:text-foreground"
                            >
                              <span>{ind.name}</span>
                              <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-150 group-hover:opacity-100 group-hover:text-primary" />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>

                {/* CPA Automation */}
                <li>
                  <Link
                    href="/cpa-marketing-automation"
                    onClick={() => setIsOverlayOpen(false)}
                    className="group font-heading inline-block text-2xl font-black tracking-tight text-foreground/90 uppercase transition-all duration-200 hover:translate-x-2 hover:text-primary sm:text-3xl lg:text-4xl"
                  >
                    CPA Automation
                  </Link>
                </li>
              </ul>

              {/* Sub-socials */}
              <div className="mt-8 flex items-center gap-5 text-xs font-bold tracking-widest text-muted-foreground/70 uppercase">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  Facebook
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Column 02: COMPANY & RESOURCES */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-widest text-muted-foreground/80 uppercase">
                <span>02</span>
                <span className="h-px w-8 bg-border" />
                <span>Company</span>
              </div>
              <ul className="mt-6 flex flex-col space-y-3 sm:space-y-4">
                <li>
                  <Link
                    href="/about"
                    onClick={() => setIsOverlayOpen(false)}
                    className="group font-heading inline-block text-2xl font-black tracking-tight text-foreground/90 uppercase transition-all duration-200 hover:translate-x-2 hover:text-primary sm:text-3xl lg:text-4xl"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    onClick={() => setIsOverlayOpen(false)}
                    className="group font-heading inline-block text-2xl font-black tracking-tight text-foreground/90 uppercase transition-all duration-200 hover:translate-x-2 hover:text-primary sm:text-3xl lg:text-4xl"
                  >
                    Pricing
                  </Link>
                </li>

                {/* Resources (Accordion) */}
                <li className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => toggleAccordion("resources")}
                      className="group font-heading text-2xl font-black tracking-tight text-foreground/90 uppercase transition-all duration-200 hover:translate-x-2 hover:text-primary sm:text-3xl lg:text-4xl"
                    >
                      Resources
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleAccordion("resources")}
                      className="p-1.5 text-muted-foreground transition-colors hover:text-primary"
                      aria-label="Toggle Resources subroutes"
                    >
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform duration-300",
                          expandedAccordion === "resources" && "rotate-180 text-primary"
                        )}
                      />
                    </button>
                  </div>
                  {/* Resources Subroutes */}
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      expandedAccordion === "resources"
                        ? "grid-rows-[1fr] opacity-100 pt-3 pb-1"
                        : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    )}
                  >
                    <ul className="overflow-hidden space-y-2 border-l-2 border-primary/30 pl-4">
                      {RESOURCE_LINKS.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setIsOverlayOpen(false)}
                            className="group flex items-center justify-between py-1 pr-2 text-sm font-semibold text-muted-foreground transition-all duration-150 hover:translate-x-1.5 hover:text-foreground"
                          >
                            <span>{item.name}</span>
                            <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-150 group-hover:opacity-100 group-hover:text-primary" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                <li>
                  <Link
                    href="/affiliate"
                    onClick={() => setIsOverlayOpen(false)}
                    className="group font-heading inline-block text-2xl font-black tracking-tight text-foreground/90 uppercase transition-all duration-200 hover:translate-x-2 hover:text-primary sm:text-3xl lg:text-4xl"
                  >
                    Partner Program
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    onClick={() => setIsOverlayOpen(false)}
                    className="group font-heading inline-block text-2xl font-black tracking-tight text-foreground/90 uppercase transition-all duration-200 hover:translate-x-2 hover:text-primary sm:text-3xl lg:text-4xl"
                  >
                    Help & FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    onClick={() => setIsOverlayOpen(false)}
                    className="group font-heading inline-block text-2xl font-black tracking-tight text-foreground/90 uppercase transition-all duration-200 hover:translate-x-2 hover:text-primary sm:text-3xl lg:text-4xl"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 03: BRAND DIRECTION & ACTION CTA */}
            <div className="flex flex-col justify-between md:col-span-4">
              <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-widest text-muted-foreground/80 uppercase">
                <span>03</span>
                <span className="h-px w-8 bg-border" />
                <span>Connect</span>
              </div>

              {/* Quick Jump Links */}
              <div className="mt-6 space-y-2">
                <Link
                  href="/contact"
                  onClick={() => setIsOverlayOpen(false)}
                  className="font-heading block text-2xl font-black tracking-tight text-foreground/90 uppercase transition-colors hover:text-primary sm:text-3xl"
                >
                  Contact
                </Link>
                <Link
                  href="/faq"
                  onClick={() => setIsOverlayOpen(false)}
                  className="font-heading block text-2xl font-black tracking-tight text-foreground/90 uppercase transition-colors hover:text-primary sm:text-3xl"
                >
                  FAQ
                </Link>
              </div>

              {/* Brand Direction Callout Card (Matching Image 2 bottom-right card) */}
              <div className="mt-10 rounded-2xl border border-border/80 bg-card/80 p-6 shadow-card backdrop-blur-xl md:mt-auto">
                <div className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase">
                  Brand Direction
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  We don&apos;t just build chatbot scripts. We deploy autonomous 24/7 sales agents
                  that talk, recommend, and close orders on autopilot.
                </p>
                <div className="mt-5 flex flex-col gap-2.5">
                  <a
                    href={CALENDLY_DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOverlayOpen(false)}
                    className="btn-primary w-full justify-center rounded-xl py-2.5 text-xs font-bold tracking-wider uppercase shadow-md transition-all hover:opacity-95"
                  >
                    <span>Book a Demo</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://app.jadubot.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-xl border border-border/80 bg-background/60 py-2.5 text-xs font-bold tracking-wider text-foreground/80 uppercase shadow-xs backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card hover:text-primary dark:bg-card/40"
                  >
                    <span>Client Portal</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay Bottom Footer */}
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between border-t border-border/40 pt-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Jadubot AI. All rights reserved.</span>
          <span className="hidden sm:inline-block">Press ESC or click ✕ to return</span>
        </div>
      </div>
    </>
  );
}

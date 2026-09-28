"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  Mail,
  Menu,
  MessageCircle,
  MessageSquare,
  Plus,
  RotateCcw,
  Send,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Truck,
  UserCheck,
  Users,
  Wallet,
  X
} from "lucide-react";
import { useTheme } from "next-themes";

import { CALENDLY_DEMO_URL } from "@/config/site";

import { aiAgentData } from "@/data/ai-agent-data";
import { platformData } from "@/data/platform-data";

import { getIndustryBySlug } from "@/components/routes/industry";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { cn } from "@/utils";

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
  ["finance-chatbot-automation", "real-estate-chatbot-automation", "saas-chatbot-automation"],
  // Column 3
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

const emptySubscribe = () => () => { };

export function Header() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<
    "platforms" | "ai-agents" | "industries" | "resources" | null
  >(null);
  const [mobilePlatformsOpen, setMobilePlatformsOpen] = useState(false);
  const [mobileAiAgentsOpen, setMobileAiAgentsOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    setMobilePlatformsOpen(false);
    setMobileAiAgentsOpen(false);
    setMobileIndustriesOpen(false);
    setMobileResourcesOpen(false);
  }

  const handleMouseEnter = (type: "platforms" | "ai-agents" | "industries" | "resources") => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(type);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const roleAgents = aiAgentData.filter((a) => a.category === "role");
  const commerceAgents = aiAgentData.filter((a) => a.category === "commerce");

  return (
    <header className="fixed top-0 right-0 left-0 z-50 px-4 py-3 transition-all duration-300 md:py-4">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300",
          isScrolled
            ? "border-border bg-popover/98 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl"
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
            <span className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-[#0172ff]">
              Jadubot
            </span>
            <span className="text-[9px] font-medium tracking-wider text-muted-foreground/70 uppercase">
              AI Sales Agent
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main Navigation">
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
                "inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200",
                isPlatformsActive || openDropdown === "platforms"
                  ? "border border-primary/30 bg-primary/10 font-semibold text-primary shadow-[0_0_12px_rgba(1,114,255,0.2)]"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
              aria-expanded={openDropdown === "platforms"}
              aria-haspopup="true"
            >
              <span>Platforms</span>
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  openDropdown === "platforms"
                    ? "rotate-180 text-blue-400"
                    : "text-muted-foreground"
                )}
              />
            </button>

            {/* Platforms Dropdown Container */}
            <div
              className={cn(
                "absolute top-full left-1/2 z-50 -translate-x-[20%] pt-2.5 transition-all duration-200",
                openDropdown === "platforms"
                  ? "pointer-events-auto visible translate-y-0 opacity-100"
                  : "pointer-events-none invisible -translate-y-1 opacity-0"
              )}
            >
              <div className="w-[640px] max-w-[calc(100vw-40px)] rounded-2xl border border-border bg-popover/98 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(1,114,255,0.06)] backdrop-blur-2xl">
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                  {platformData.map((platform) => {
                    const Icon = PLATFORM_ICONS[platform.iconName] || MessageCircle;
                    const isActive = pathname === `/platform/${platform.slug}`;

                    return (
                      <Link
                        key={platform.slug}
                        href={`/platform/${platform.slug}`}
                        onClick={() => setOpenDropdown(null)}
                        className="group -m-1 flex items-start gap-3.5 rounded-lg p-1 transition-colors hover:bg-muted/30"
                      >
                        <div
                          className={cn(
                            "mt-0.5 shrink-0 transition-all duration-200",
                            isActive
                              ? "scale-110 text-[#0172ff]"
                              : "text-[#0172ff] group-hover:scale-110 group-hover:text-[#0172ff]"
                          )}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div
                            className={cn(
                              "text-[14px] leading-snug font-bold transition-colors",
                              isActive
                                ? "text-[#0172ff]"
                                : "text-foreground group-hover:text-[#0172ff]"
                            )}
                          >
                            {platform.navTitle}
                          </div>
                          <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
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
              "rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200",
              pathname.startsWith("/service")
                ? "border border-primary/30 bg-primary/10 font-semibold text-primary shadow-[0_0_12px_rgba(1,114,255,0.2)]"
                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
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
                "inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200",
                isAiAgentsActive || openDropdown === "ai-agents"
                  ? "border border-primary/30 bg-primary/10 font-semibold text-primary shadow-[0_0_12px_rgba(1,114,255,0.2)]"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
              aria-expanded={openDropdown === "ai-agents"}
              aria-haspopup="true"
            >
              <span>AI Agents</span>
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  openDropdown === "ai-agents"
                    ? "rotate-180 text-[#0172ff]"
                    : "text-muted-foreground"
                )}
              />
            </button>

            {/* AI Agents Mega Menu */}
            <div
              className={cn(
                "absolute top-full left-1/2 z-50 -translate-x-[40%] pt-2.5 transition-all duration-200",
                openDropdown === "ai-agents"
                  ? "pointer-events-auto visible translate-y-0 opacity-100"
                  : "pointer-events-none invisible -translate-y-1 opacity-0"
              )}
            >
              <div className="w-[780px] max-w-[calc(100vw-40px)] rounded-2xl border border-border bg-popover/98 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(1,114,255,0.06)] backdrop-blur-2xl">
                {/* AI Agents Overview Highlight Row */}
                <Link
                  href="/ai-agents"
                  onClick={() => setOpenDropdown(null)}
                  className="group mb-5 flex items-center justify-between rounded-xl border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-3.5 transition-all hover:border-[#38bdf8]/40 hover:bg-muted/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0172ff] text-white shadow-sm transition-all duration-200 group-hover:scale-105 group-hover:bg-[#38bdf8]">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-foreground transition-colors group-hover:text-[#0172ff]">
                        <span>AI Agents Overview</span>
                        <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[9px] font-bold text-primary">
                          MULTI-AGENT WORKFORCE
                        </span>
                      </div>
                      <p className="mt-0.5 text-[11px] text-muted-foreground">
                        Discover how a team of specialized agents turns conversations into revenue.
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#0172ff] transition-all group-hover:translate-x-1 group-hover:text-[#0172ff]" />
                </Link>

                {/* Sub-groups */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* By role */}
                  <div>
                    <div className="mb-3 px-2 text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
                      By Role
                    </div>
                    <div className="flex flex-col gap-4">
                      {roleAgents.map((agent) => {
                        const Icon = AGENT_ICONS[agent.iconName] || Bot;
                        const isActive = pathname === `/ai-agents/${agent.slug}`;

                        return (
                          <Link
                            key={agent.slug}
                            href={`/ai-agents/${agent.slug}`}
                            onClick={() => setOpenDropdown(null)}
                            className="group -m-1 flex items-start gap-3.5 rounded-lg p-1 transition-colors hover:bg-muted/30"
                          >
                            <div
                              className={cn(
                                "mt-0.5 shrink-0 transition-all duration-200",
                                isActive
                                  ? "scale-110 text-[#0172ff]"
                                  : "text-[#0172ff] group-hover:scale-110 group-hover:text-[#0172ff]"
                              )}
                            >
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div
                                className={cn(
                                  "text-[14px] leading-snug font-bold transition-colors",
                                  isActive
                                    ? "text-[#0172ff]"
                                    : "text-foreground group-hover:text-[#0172ff]"
                                )}
                              >
                                {agent.name}
                              </div>
                              <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
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
                    <div className="mb-3 px-2 text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
                      Commerce
                    </div>
                    <div className="flex flex-col gap-4">
                      {commerceAgents.map((agent) => {
                        const Icon = AGENT_ICONS[agent.iconName] || ShoppingBag;
                        const isActive = pathname === `/ai-agents/${agent.slug}`;

                        return (
                          <Link
                            key={agent.slug}
                            href={`/ai-agents/${agent.slug}`}
                            onClick={() => setOpenDropdown(null)}
                            className="group -m-1 flex items-start gap-3.5 rounded-lg p-1 transition-colors hover:bg-muted/30"
                          >
                            <div
                              className={cn(
                                "mt-0.5 shrink-0 transition-all duration-200",
                                isActive
                                  ? "scale-110 text-[#0172ff]"
                                  : "text-[#0172ff] group-hover:scale-110 group-hover:text-[#0172ff]"
                              )}
                            >
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div
                                className={cn(
                                  "text-[14px] leading-snug font-bold transition-colors",
                                  isActive
                                    ? "text-[#0172ff]"
                                    : "text-foreground group-hover:text-[#0172ff]"
                                )}
                              >
                                {agent.name}
                              </div>
                              <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
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

          {/* Industries Dropdown (Minimal Layout matching screenshot) */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("industries")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === "industries" ? null : "industries")}
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200",
                isIndustriesActive || openDropdown === "industries"
                  ? "border border-primary/30 bg-primary/10 font-semibold text-primary shadow-[0_0_12px_rgba(1,114,255,0.2)]"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
              aria-expanded={openDropdown === "industries"}
              aria-haspopup="true"
            >
              <span>Industries</span>
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  openDropdown === "industries"
                    ? "rotate-180 text-[#0172ff]"
                    : "text-muted-foreground"
                )}
              />
            </button>

            {/* Dropdown container */}
            <div
              className={cn(
                "absolute top-full left-1/2 z-50 -translate-x-[28%] pt-2.5 transition-all duration-200",
                openDropdown === "industries"
                  ? "pointer-events-auto visible translate-y-0 opacity-100"
                  : "pointer-events-none invisible -translate-y-1 opacity-0"
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
                            className="group -m-1 flex items-start gap-3.5 rounded-lg p-1 transition-colors hover:bg-muted/30"
                          >
                            {/* Minimal icon sitting cleanly on left */}
                            <div
                              className={cn(
                                "mt-0.5 shrink-0 transition-all duration-200",
                                isActive
                                  ? "scale-110 text-[#0172ff]"
                                  : "text-[#0172ff] group-hover:scale-110 group-hover:text-[#0172ff]"
                              )}
                            >
                              <Icon className="h-5 w-5" />
                            </div>

                            {/* Minimal title and subtitle */}
                            <div className="min-w-0 flex-1">
                              <div
                                className={cn(
                                  "text-[14px] leading-snug font-bold transition-colors",
                                  isActive
                                    ? "text-[#0172ff]"
                                    : "text-foreground group-hover:text-[#0172ff]"
                                )}
                              >
                                {ind.name}
                              </div>
                              <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
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
              onClick={() => setOpenDropdown(openDropdown === "resources" ? null : "resources")}
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200",
                isResourcesActive || openDropdown === "resources"
                  ? "border border-primary/30 bg-primary/10 font-semibold text-primary shadow-[0_0_12px_rgba(1,114,255,0.2)]"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
              aria-expanded={openDropdown === "resources"}
              aria-haspopup="true"
            >
              <span>Resources</span>
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  openDropdown === "resources"
                    ? "rotate-180 text-[#0172ff]"
                    : "text-muted-foreground"
                )}
              />
            </button>

            {/* Dropdown container */}
            <div
              className={cn(
                "absolute top-full left-1/2 z-50 -translate-x-1/2 pt-2.5 transition-all duration-200",
                openDropdown === "resources"
                  ? "pointer-events-auto visible translate-y-0 opacity-100"
                  : "pointer-events-none invisible -translate-y-1 opacity-0"
              )}
            >
              <div className="w-[560px] max-w-[calc(100vw-40px)] rounded-2xl border border-border bg-popover/98 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(1,114,255,0.06)] backdrop-blur-2xl">
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                  {RESOURCE_LINKS.map((item) => {
                    const Icon = item.icon;
                    const isActive =
                      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className="group -m-1 flex items-start gap-3.5 rounded-lg p-1 transition-colors hover:bg-muted/30"
                      >
                        <div
                          className={cn(
                            "mt-0.5 shrink-0 transition-all duration-200",
                            isActive
                              ? "scale-110 text-[#0172ff]"
                              : "text-[#0172ff] group-hover:scale-110 group-hover:text-[#0172ff]"
                          )}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div
                            className={cn(
                              "text-[14px] leading-snug font-bold transition-colors",
                              isActive
                                ? "text-[#0172ff]"
                                : "text-foreground group-hover:text-[#0172ff]"
                            )}
                          >
                            {item.name}
                          </div>
                          <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
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
                ? "border border-primary/30 bg-primary/10 font-semibold text-primary shadow-[0_0_12px_rgba(1,114,255,0.2)]"
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
                ? "border border-primary/30 bg-primary/10 font-semibold text-primary shadow-[0_0_12px_rgba(1,114,255,0.2)]"
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
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/80 text-muted-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-foreground"
            aria-label="Toggle theme"
          />
          <a
            href="https://app.jadubot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-xs font-medium text-foreground/85 transition-all duration-200 hover:border-primary hover:bg-primary/10 hover:text-primary"
          >
            Portal Login
          </a>
          <a
            href={CALENDLY_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !px-4 !py-2 text-xs shadow-[0_4px_16px_rgba(21,93,252,0.3)]"
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
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/80 text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            aria-label="Toggle theme"
          />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/80 text-foreground transition-colors hover:border-primary"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mx-auto mt-2 max-h-[85vh] max-w-6xl animate-in overflow-y-auto rounded-2xl border border-border bg-popover/98 p-6 backdrop-blur-2xl duration-200 slide-in-from-top-2 lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {/* Platforms Collapsible Accordion */}
            <div className="overflow-hidden rounded-xl border border-border/60 bg-muted/20">
              <button
                type="button"
                onClick={() => setMobilePlatformsOpen(!mobilePlatformsOpen)}
                className={cn(
                  "flex w-full items-center justify-between px-4 py-3 text-sm font-medium transition-colors",
                  isPlatformsActive
                    ? "border-b border-primary/30 bg-primary/10 font-semibold text-primary"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                )}
              >
                <div className="flex items-center gap-2">
                  <span>Platforms</span>
                  <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary">
                    {platformData.length}
                  </span>
                </div>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    mobilePlatformsOpen ? "rotate-180 text-primary" : "text-muted-foreground"
                  )}
                />
              </button>

              {mobilePlatformsOpen && (
                <div className="animate-in space-y-1 border-t border-border/60 bg-background/90 p-2 duration-150 fade-in">
                  {platformData.map((platform) => {
                    const Icon = PLATFORM_ICONS[platform.iconName] || MessageCircle;
                    const isChildActive = pathname === `/platform/${platform.slug}`;

                    return (
                      <Link
                        key={platform.slug}
                        href={`/platform/${platform.slug}`}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobilePlatformsOpen(false);
                        }}
                        className={cn(
                          "flex items-center justify-between rounded-lg px-3 py-2.5 text-xs font-medium transition-colors",
                          isChildActive
                            ? "bg-primary/15 font-semibold text-primary"
                            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                        )}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="h-4 w-4 shrink-0 text-primary" />
                          <span>{platform.navTitle}</span>
                        </div>
                        <span className="text-[10px] text-muted-foreground/70">Automation</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* AI Agents Collapsible Accordion */}
            <div className="overflow-hidden rounded-xl border border-border/60 bg-muted/20">
              <button
                type="button"
                onClick={() => setMobileAiAgentsOpen(!mobileAiAgentsOpen)}
                className={cn(
                  "flex w-full items-center justify-between px-4 py-3 text-sm font-medium transition-colors",
                  isAiAgentsActive
                    ? "border-b border-primary/30 bg-primary/10 font-semibold text-primary"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                )}
              >
                <div className="flex items-center gap-2">
                  <span>AI Agents</span>
                  <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary">
                    {aiAgentData.length + 1}
                  </span>
                </div>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    mobileAiAgentsOpen ? "rotate-180 text-primary" : "text-muted-foreground"
                  )}
                />
              </button>

              {mobileAiAgentsOpen && (
                <div className="animate-in space-y-1 border-t border-border/60 bg-background/90 p-2 duration-150 fade-in">
                  {/* Overview link */}
                  <Link
                    href="/ai-agents"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileAiAgentsOpen(false);
                    }}
                    className={cn(
                      "mb-2 flex items-center justify-between rounded-lg border border-primary/20 bg-primary/10 px-3 py-2.5 text-xs font-bold text-primary transition-colors",
                      pathname === "/ai-agents" ? "ring-1 ring-primary" : ""
                    )}
                  >
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="h-4 w-4 shrink-0" />
                      <span>AI Agents Overview</span>
                    </div>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>

                  {/* Role agents */}
                  <div className="px-2 pt-1 pb-1 text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                    By Role
                  </div>
                  {roleAgents.map((agent) => {
                    const Icon = AGENT_ICONS[agent.iconName] || Bot;
                    const isChildActive = pathname === `/ai-agents/${agent.slug}`;

                    return (
                      <Link
                        key={agent.slug}
                        href={`/ai-agents/${agent.slug}`}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileAiAgentsOpen(false);
                        }}
                        className={cn(
                          "flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition-colors",
                          isChildActive
                            ? "bg-primary/15 font-semibold text-primary"
                            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                        )}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="h-4 w-4 shrink-0 text-primary" />
                          <span>{agent.name}</span>
                        </div>
                      </Link>
                    );
                  })}

                  {/* Commerce agents */}
                  <div className="px-2 pt-2 pb-1 text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                    Commerce
                  </div>
                  {commerceAgents.map((agent) => {
                    const Icon = AGENT_ICONS[agent.iconName] || ShoppingBag;
                    const isChildActive = pathname === `/ai-agents/${agent.slug}`;

                    return (
                      <Link
                        key={agent.slug}
                        href={`/ai-agents/${agent.slug}`}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileAiAgentsOpen(false);
                        }}
                        className={cn(
                          "flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition-colors",
                          isChildActive
                            ? "bg-primary/15 font-semibold text-primary"
                            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                        )}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="h-4 w-4 shrink-0 text-emerald-500" />
                          <span>{agent.name}</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Services */}
            <Link
              href="/service"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                pathname.startsWith("/service")
                  ? "border border-primary/30 bg-primary/10 font-semibold text-primary"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              <span>Services</span>
              {pathname.startsWith("/service") && (
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              )}
            </Link>

            {/* Industries Collapsible Accordion */}
            <div className="overflow-hidden rounded-xl border border-border/60 bg-muted/20">
              <button
                type="button"
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className={cn(
                  "flex w-full items-center justify-between px-4 py-3 text-sm font-medium transition-colors",
                  isIndustriesActive
                    ? "border-b border-primary/30 bg-primary/10 font-semibold text-primary"
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
                <div className="animate-in space-y-1 border-t border-border/60 bg-background/90 p-2 duration-150 fade-in">
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
                            ? "bg-primary/15 font-semibold text-primary"
                            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                        )}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="h-4 w-4 shrink-0 text-primary" />
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
            <div className="overflow-hidden rounded-xl border border-border/60 bg-muted/20">
              <button
                type="button"
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                className={cn(
                  "flex w-full items-center justify-between px-4 py-3 text-sm font-medium transition-colors",
                  isResourcesActive
                    ? "border-b border-primary/30 bg-primary/10 font-semibold text-primary"
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
                <div className="animate-in space-y-1 border-t border-border/60 bg-background/90 p-2 duration-150 fade-in">
                  {RESOURCE_LINKS.map((item) => {
                    const Icon = item.icon;
                    const isChildActive =
                      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

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
                            ? "bg-primary/15 font-semibold text-primary"
                            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                        )}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="h-4 w-4 shrink-0 text-primary" />
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
                  ? "border border-primary/30 bg-primary/10 font-semibold text-primary"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              <span>Pricing</span>
              {pathname.startsWith("/pricing") && (
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              )}
            </Link>

            {/* CPA Automation */}
            <Link
              href="/cpa-marketing-automation"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                pathname.startsWith("/cpa-marketing-automation")
                  ? "border border-primary/30 bg-primary/10 font-semibold text-primary"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              <span>CPA Automation</span>
              {pathname.startsWith("/cpa-marketing-automation") && (
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              )}
            </Link>

            {/* Actions */}
            <div className="mt-4 space-y-3 border-t border-border pt-4">
              <div className="flex items-center justify-between rounded-xl border border-border bg-card/60 px-3 py-2">
                <span className="text-xs font-medium text-foreground">Theme</span>
                <AnimatedThemeToggler
                  theme={currentTheme}
                  onThemeChange={(newTheme) => setTheme(newTheme)}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
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

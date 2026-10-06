"use client";

import { useRef } from "react";

import { ChartBar as BarChart3, BookOpen, Robot as Bot, CalendarBlank as Calendar, CheckCircle, CheckCircle as CheckCircle2, Clock, Code, Cpu, CreditCard, Database, Eye, SiFacebook as Facebook, Funnel as Filter, GitFork, GitMerge, Globe, Headset as Headphones, Question as HelpCircle, Tray as Inbox, SiInstagram as Instagram, Stack as Layers, ChatCircleDots as MessageCircle, ChatTeardropDots as MessageSquare, Package, Palette, ArrowClockwise as RefreshCw, ArrowCounterClockwise as RotateCcw, MagnifyingGlass as Search, PaperPlaneTilt as Send, ShareNetwork as Share2, Shield, ShieldCheck, ShoppingBag, ShoppingCart, Shuffle, Star, TrendUp as TrendingUp, Truck, UserCheck, VideoCamera as Video, SpeakerHigh as Volume2, Lightning as Zap } from "@/components/icons";

import { FacebookIcon, WhatsAppIcon } from "@/components/icons";
import { usePopAnimation } from "@/lib/animations";

import { SectionImage } from "@/components/SectionImage";

export interface FeatureItem {
  iconName: string;
  title: string;
  description: string;
}

export interface FeatureGridProps {
  badgeText?: string;
  title: string;
  subtitle?: string;
  features: FeatureItem[];
  className?: string;
  sectionImage?: {
    src: string;
    alt: string;
    aspect?: "16/10" | "4/3" | "1/1" | "21/9" | "4/5" | "none";
    badge?: string;
  };
  imagePosition?: "left" | "right";
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  BarChart3,
  BookOpen,
  Bot,
  Calendar,
  CheckCircle,
  CheckCircle2,
  Clock,
  Code,
  Cpu,
  CreditCard,
  Database,
  Eye,
  Facebook: FacebookIcon,
  Filter,
  GitFork,
  GitMerge,
  Globe,
  Headphones,
  HelpCircle,
  Inbox,
  Instagram,
  Layers,
  MessageCircle,
  MessageSquare,
  Package,
  Palette,
  RefreshCw,
  RotateCcw,
  Search,
  Send,
  Share2,
  Shield,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Shuffle,
  Star,
  TrendingUp,
  Truck,
  UserCheck,
  Video,
  Volume2,
  WhatsApp: WhatsAppIcon,
  Zap
};

export function FeatureGrid({
  badgeText = "Built for High Performance",
  title,
  subtitle,
  features,
  className = "",
  sectionImage,
  imagePosition = "left"
}: FeatureGridProps) {
  const headerRef = usePopAnimation<HTMLDivElement>({ start: "top 85%" });
  const visualRef = usePopAnimation<HTMLDivElement>({ start: "top 85%", delay: 0.1 });
  const gridRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  usePopAnimation(cardsRef, {
    trigger: gridRef,
    stagger: 0.08,
    start: "top 82%"
  });

  return (
    <section className={`relative border-t border-border/80 bg-surface-subtle/50 py-20 md:py-28 ${className}`}>
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="mx-auto mb-16 max-w-3xl origin-center text-center will-change-transform"
        >
          {badgeText && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <span>{badgeText}</span>
            </div>
          )}
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>

        {/* If sectionImage is provided: Balanced Equal 2-Column Split Layout */}
        {sectionImage ? (
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
            {/* Image Column: Equal width, stretches to full height of card grid */}
            <div
              ref={visualRef}
              className={`flex flex-col ${imagePosition === "right" ? "lg:order-2" : "lg:order-1"}`}
            >
              <div className="relative aspect-[16/10] w-full lg:aspect-auto lg:h-full lg:min-h-[480px] lg:flex-1">
                <SectionImage
                  src={sectionImage.src}
                  alt={sectionImage.alt}
                  aspect="none"
                  className="h-full w-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  badge={sectionImage.badge}
                />
              </div>
            </div>

            {/* Feature Cards Column: 2x3 Grid with equal card heights */}
            <div
              ref={gridRef}
              className={`grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 ${
                imagePosition === "right" ? "lg:order-1" : "lg:order-2"
              }`}
            >
              {features.map((feature, idx) => {
                const IconComponent = ICON_MAP[feature.iconName] || Zap;

                return (
                  <div
                    key={idx}
                    ref={(el) => {
                      if (el) cardsRef.current[idx] = el;
                    }}
                    className="group relative flex flex-col justify-center rounded-2xl md:rounded-3xl border border-border/80 bg-card p-5 sm:p-6 shadow-sm transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-primary/50 hover:shadow-card"
                  >
                    <div className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <IconComponent className="h-5 w-5" />
                    </div>

                    <h3 className="font-heading text-base font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-lg">
                      {feature.title}
                    </h3>

                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Standard 3-column Grid when no section image */
          <div ref={gridRef} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => {
              const IconComponent = ICON_MAP[feature.iconName] || Zap;

              return (
                <div
                  key={idx}
                  ref={(el) => {
                    if (el) cardsRef.current[idx] = el;
                  }}
                  className="group relative flex flex-col justify-center rounded-2xl md:rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-primary/50 hover:shadow-card"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <IconComponent className="h-5 w-5" />
                  </div>

                  <h3 className="font-heading text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {feature.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

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
  badge?: string;
  bulletPoints?: string[];
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
    aspect?: "16/10" | "4/3" | "1/1" | "21/9";
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

        {/* If sectionImage is provided: Alternating Split Layout (Image on one side, feature cards on the other) */}
        {sectionImage ? (
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div
              ref={visualRef}
              className={`lg:col-span-5 ${imagePosition === "right" ? "lg:order-2" : "lg:order-1"}`}
            >
              <div className="sticky top-28">
                <SectionImage
                  src={sectionImage.src}
                  alt={sectionImage.alt}
                  aspect={sectionImage.aspect || "16/10"}
                  badge={sectionImage.badge}
                />
              </div>
            </div>

            <div
              ref={gridRef}
              className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7 ${
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
                    className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-primary/50 hover:shadow-card"
                  >
                    <div>
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        {feature.badge && (
                          <span className="rounded-full border border-border bg-muted/60 px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                            {feature.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="font-heading text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>

                    {feature.bulletPoints && feature.bulletPoints.length > 0 && (
                      <ul className="mt-4 space-y-1.5 border-t border-border/60 pt-3 text-[11px] text-muted-foreground">
                        {feature.bulletPoints.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-emerald-500" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
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
                  className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-primary/50 hover:shadow-card"
                >
                  <div>
                    {/* Top Bar: Icon + Badge */}
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      {feature.badge && (
                        <span className="rounded-full border border-border bg-muted/60 px-3 py-1 text-[11px] font-semibold text-muted-foreground">
                          {feature.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bullet Points if available */}
                  {feature.bulletPoints && feature.bulletPoints.length > 0 && (
                    <ul className="mt-6 space-y-2 border-t border-border/60 pt-4 text-xs text-muted-foreground">
                      {feature.bulletPoints.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";

import {
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
  Facebook,
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
  Zap
} from "lucide-react";

import { FacebookIcon, WhatsAppIcon } from "@/components/icons";
import { usePopAnimation } from "@/lib/animations";

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
  className = ""
}: FeatureGridProps) {
  const headerRef = usePopAnimation<HTMLDivElement>({ start: "top 85%" });
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

        {/* Feature Cards Grid */}
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
      </div>
    </section>
  );
}

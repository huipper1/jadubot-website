import {
  BarChart3,
  BookOpen,
  Calendar,
  CheckCircle,
  CheckCircle2,
  Cpu,
  CreditCard,
  Database,
  Filter,
  GitMerge,
  Globe,
  Headphones,
  Inbox,
  Package,
  RefreshCw,
  RotateCcw,
  Search,
  Share2,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Star,
  TrendingUp,
  Truck,
  UserCheck,
  Zap
} from "lucide-react";

import type { AgentData } from "@/types/ai-agent";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  BarChart3,
  BookOpen,
  Calendar,
  CheckCircle,
  CheckCircle2,
  Cpu,
  CreditCard,
  Database,
  Filter,
  GitMerge,
  Globe,
  Headphones,
  Inbox,
  Package,
  RefreshCw,
  RotateCcw,
  Search,
  Share2,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Star,
  TrendingUp,
  Truck,
  UserCheck,
  Zap
};

interface AgentFeaturesProps {
  agent: AgentData;
}

export function AgentFeatures({ agent }: AgentFeaturesProps) {
  return (
    <section className="relative border-t border-border/80 bg-surface-subtle/50 py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <span>Enterprise AI Capabilities</span>
          </div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {agent.featuresSectionTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {agent.featuresSectionSubtitle}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {agent.features.map((feature, idx) => {
            const IconComponent = ICON_MAP[feature.iconName] || Zap;

            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-card"
              >
                <div>
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

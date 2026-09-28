import Link from "next/link";

import {
  ArrowRight,
  Headphones,
  RotateCcw,
  ShoppingBag,
  ShoppingCart,
  UserCheck
} from "lucide-react";

import { aiAgentData } from "@/data/ai-agent-data";

const AGENT_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  UserCheck,
  Headphones,
  ShoppingCart,
  ShoppingBag,
  RotateCcw
};

export function AgentsGrid() {
  const roleAgents = aiAgentData.filter((a) => a.category === "role");
  const commerceAgents = aiAgentData.filter((a) => a.category === "commerce");

  return (
    <section className="relative border-t border-border/80 bg-surface-subtle/50 py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <span>Specialized AI Roles</span>
          </div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Choose Your AI Team Members
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Activate the exact agents your business needs. Each agent excels at a specific job and
            collaborates seamlessly with the rest of your stack.
          </p>
        </div>

        {/* Group 1: By Role */}
        <div className="mb-14">
          <div className="mb-6 flex items-center gap-3">
            <h3 className="font-heading text-xl font-bold text-foreground">Specialized By Role</h3>
            <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
              Lead Gen • Support • Sales
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {roleAgents.map((agent) => {
              const IconComponent = AGENT_ICON_MAP[agent.iconName] || UserCheck;

              return (
                <Link
                  key={agent.slug}
                  href={`/ai-agents/${agent.slug}`}
                  className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-card"
                >
                  <div>
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="rounded-full border border-border bg-muted/60 px-3 py-1 text-[11px] font-semibold text-muted-foreground">
                        {agent.badge.split(":")[1]?.trim() || "Role Agent"}
                      </span>
                    </div>

                    <h4 className="font-heading text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {agent.name}
                    </h4>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {agent.heroDescription}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-4 text-xs font-semibold text-primary">
                    <span>Explore Agent Capabilities</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Group 2: Commerce Integration Agents */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <h3 className="font-heading text-xl font-bold text-foreground">Commerce Automations</h3>
            <span className="rounded-full bg-emerald-500/10 px-3 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              Shopify • WooCommerce
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {commerceAgents.map((agent) => {
              const IconComponent = AGENT_ICON_MAP[agent.iconName] || ShoppingBag;

              return (
                <Link
                  key={agent.slug}
                  href={`/ai-agents/${agent.slug}`}
                  className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-card"
                >
                  <div>
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="rounded-full border border-border bg-muted/60 px-3 py-1 text-[11px] font-semibold text-muted-foreground">
                        E-commerce Store Agent
                      </span>
                    </div>

                    <h4 className="font-heading text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {agent.name}
                    </h4>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {agent.heroDescription}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-4 text-xs font-semibold text-primary">
                    <span>View Store Integration</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

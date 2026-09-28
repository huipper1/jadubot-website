import { ArrowRight, CheckCircle2 } from "lucide-react";

import type { AgentData } from "@/types/ai-agent";
import { CALENDLY_DEMO_URL } from "@/config/site";

interface AgentProcessProps {
  agent: AgentData;
}

export function AgentProcess({ agent }: AgentProcessProps) {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <span>Implementation Framework</span>
          </div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {agent.processTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {agent.processSubtitle}
          </p>
        </div>

        {/* 3 Step Process Grid */}
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
          {agent.steps.map((step, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-heading text-4xl font-black text-primary/30">
                    {step.step}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                </div>

                <h3 className="mb-3 font-heading text-xl font-bold tracking-tight text-foreground">
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>

              <div className="mt-6 flex items-center gap-1 border-t border-border/60 pt-4 text-xs font-semibold text-primary">
                <span>Phase {idx + 1} of 3</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-page mini CTA */}
        <div className="mt-14 text-center">
          <a
            href={CALENDLY_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            <span>Ready to see this agent in a customized demo? Schedule an architect session</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

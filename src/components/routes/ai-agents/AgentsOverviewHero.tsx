import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Database,
  GitBranch,
  Zap
} from "lucide-react";

import { CALENDLY_DEMO_URL } from "@/config/site";

export function AgentsOverviewHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-44">
      {/* Ambient background lighting */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 h-96 w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-primary/20 via-sky-400/10 to-transparent opacity-60 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-3xl leading-[1.12] font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Build AI Agents That <span className="text-blue-gradient">Take Action.</span>
            <br />
            Not Just Answers.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-xl">
            Deploy specialized AI agents for sales, support, orders, and lead qualification. Each
            agent follows dedicated business rules, accesses verified knowledge, and completes real
            tasks across WhatsApp, Facebook, Instagram, Telegram, and Website Chat.
          </p>

          {/* Capability chips */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-xs font-medium text-foreground">
              <GitBranch className="h-3.5 w-3.5 text-primary" />
              <span>Smart Intent Routing</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-xs font-medium text-foreground">
              <Database className="h-3.5 w-3.5 text-primary" />
              <span>Verified Knowledge Sources</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-xs font-medium text-foreground">
              <Zap className="h-3.5 w-3.5 text-primary" />
              <span>Real Business Actions</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-xs font-medium text-foreground">
              <BrainCircuit className="h-3.5 w-3.5 text-primary" />
              <span>Multi-Agent Teams</span>
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={CALENDLY_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full rounded-xl px-7 py-3.5 text-sm shadow-[0_4px_20px_rgba(1,114,255,0.35)] sm:w-auto"
            >
              <span>Book a live demo</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="https://app.jadubot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-black w-full rounded-xl border border-border px-7 py-3.5 text-sm sm:w-auto"
            >
              <span>Portal Login</span>
            </a>
          </div>
        </div>

        {/* Multi-Agent Orchestration Diagram Visual */}
        <div className="mt-16 sm:mt-20">
          <div className="shadow-elevated relative mx-auto max-w-5xl rounded-3xl border border-border bg-card/70 p-6 backdrop-blur-2xl sm:p-10">
            {/* Top Bar */}
            <div className="flex flex-col items-center justify-between gap-4 border-b border-border/80 pb-6 sm:flex-row">
              <div>
                <div className="text-xs font-bold tracking-wider text-primary uppercase">
                  Orchestration Architecture
                </div>
                <div className="text-lg font-bold text-foreground">
                  How Jadubot Multi-Agent Teams Collaborate
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="flex h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
                <span>Autonomous Mesh Active</span>
              </div>
            </div>

            {/* Architecture Node Grid */}
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4">
              {/* Inbound Ingestion */}
              <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface-subtle p-5">
                <div>
                  <div className="mb-2 text-[11px] font-bold text-primary">STAGE 01: INBOUND</div>
                  <h2 className="font-heading text-sm font-bold text-foreground">
                    Customer Touchpoint
                  </h2>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Customer sends message via WhatsApp, Messenger, Instagram, or Web Chat.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 border-t border-border/60 pt-3 text-[11px] font-semibold text-emerald-500">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>Omnichannel Ingestion</span>
                </div>
              </div>

              {/* Intent Classifier */}
              <div className="flex flex-col justify-between rounded-2xl border border-primary/40 bg-primary/5 p-5">
                <div>
                  <div className="mb-2 text-[11px] font-bold text-primary">STAGE 02: ROUTING</div>
                  <h2 className="font-heading text-sm font-bold text-foreground">
                    Intent Classifier
                  </h2>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Analyzes intent, language, customer profile, and conversation context in &lt;
                    0.5s.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 border-t border-border/60 pt-3 text-[11px] font-semibold text-primary">
                  <BrainCircuit className="h-3 w-3" />
                  <span>Dynamic Dispatch</span>
                </div>
              </div>

              {/* Specialized Agent */}
              <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface-subtle p-5">
                <div>
                  <div className="mb-2 text-[11px] font-bold text-primary">STAGE 03: EXECUTION</div>
                  <h2 className="font-heading text-sm font-bold text-foreground">
                    Specialized Agent
                  </h2>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Lead Qualification, Sales, or Support Agent answers and executes verified tasks.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 border-t border-border/60 pt-3 text-[11px] font-semibold text-foreground">
                  <Zap className="h-3 w-3 text-amber-500" />
                  <span>Grounded Knowledge</span>
                </div>
              </div>

              {/* Real Business Action */}
              <div className="flex flex-col justify-between rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
                <div>
                  <div className="mb-2 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                    STAGE 04: OUTCOME
                  </div>
                  <h2 className="font-heading text-sm font-bold text-foreground">
                    Business Outcome
                  </h2>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Order confirmed, meeting scheduled in CRM, ticket resolved, or handed to human.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 border-t border-border/60 pt-3 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>Completed Action</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

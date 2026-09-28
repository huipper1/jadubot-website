import { ArrowRight, BookOpen, CheckCircle2, GitBranch, UserCheck, Zap } from "lucide-react";

import { CALENDLY_DEMO_URL } from "@/config/site";

export function AgentsWorkflowSection() {
  const pillars = [
    {
      step: "01",
      title: "Intelligent Intent Routing",
      description:
        "Every incoming conversation is evaluated in milliseconds by Jadubot's orchestration brain. Inquiries are automatically categorized and routed to the agent best equipped to handle them.",
      icon: GitBranch,
      highlights: [
        "Multilingual natural language understanding",
        "Distinguishes between sales intent, support issues, and spam",
        "Dispatches conversations without rigid number-menu prompts"
      ]
    },
    {
      step: "02",
      title: "Grounded Knowledge Answers",
      description:
        "Specialized agents draw answers from verified company assets: website URLs, product catalogs, FAQ documents, warranty guidelines, and Google Sheets — ensuring zero factual hallucinations.",
      icon: BookOpen,
      highlights: [
        "Strict retrieval-augmented generation (RAG) safeguards",
        "Dynamic sync with updated pricing and policy documents",
        "Cites exact document sources in responses"
      ]
    },
    {
      step: "03",
      title: "Real Business Action Execution",
      description:
        "Unlike generic chat bots that can only output text, Jadubot AI agents trigger real business actions: querying live inventory, generating checkout links, adding tags, and updating CRM records.",
      icon: Zap,
      highlights: [
        "Direct HTTP API and webhook dispatching",
        "Calculates totals and validates shipping addresses",
        "Two-way synchronization with Shopify, WooCommerce, and CRMs"
      ]
    },
    {
      step: "04",
      title: "Graceful Human Escalation",
      description:
        "Whenever a customer requests a human representative or sentiment drops, the conversation is routed smoothly to your Shared Inbox with full context preserved.",
      icon: UserCheck,
      highlights: [
        "Automatic bot pausing upon human handover",
        "Internal summary generated for the on-duty support agent",
        "Single-click bot resumption once the ticket is resolved"
      ]
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Connect Channels",
      description:
        "Link your WhatsApp, Facebook, Instagram, Telegram, or Web Chat accounts in minutes."
    },
    {
      step: "02",
      title: "Create & Train Agents",
      description:
        "Upload business documents, set routing rules, and customize prompts for each role."
    },
    {
      step: "03",
      title: "Deploy 24/7 Automation",
      description:
        "Activate your multi-agent workforce to turn conversations into revenue automatically."
    }
  ];

  return (
    <>
      {/* 4 Pillars Section */}
      <section className="relative border-t border-border/80 bg-background py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <span>How It Works</span>
            </div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              How AI Agents Turn Conversations into Revenue
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Explore the four core capabilities that make Jadubot autonomous agents superior to
              basic scripted bots.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-card"
                >
                  <div>
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-heading text-2xl font-black text-muted-foreground/30">
                        {pillar.step}
                      </span>
                    </div>

                    <h3 className="mb-3 font-heading text-xl font-bold tracking-tight text-foreground">
                      {pillar.title}
                    </h3>

                    <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>

                  <ul className="space-y-2 border-t border-border/60 pt-4 text-xs text-muted-foreground">
                    {pillar.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Connect → Create → Deploy Steps */}
      <section className="relative border-t border-border/80 bg-surface-subtle/40 py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <span>Fast Rollout</span>
            </div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Connect → Create → Deploy
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Launch your full multi-agent workforce in three straightforward phases.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-heading text-4xl font-black text-primary/30">
                      {st.step}
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="mb-3 font-heading text-xl font-bold tracking-tight text-foreground">
                    {st.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground">{st.description}</p>
                </div>

                <div className="mt-6 border-t border-border/60 pt-4 text-xs font-semibold text-primary">
                  Step {idx + 1} of 3
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href={CALENDLY_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm shadow-md"
            >
              <span>Get Started with AI Agents</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

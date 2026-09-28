"use client";

import { useState } from "react";
import Image from "next/image";

import { Bot, CheckCircle2, User } from "lucide-react";

import { PopIn } from "@/components/animations";
import { cn } from "@/utils";

import type { IndustryData, IndustryUseCase } from "./industry-data";

interface IndustryUseCasesProps {
  industry: IndustryData;
}

export function IndustryUseCases({ industry }: IndustryUseCasesProps) {
  const { useCases } = industry;
  const [activeIndex, setActiveIndex] = useState(0);

  if (!useCases || useCases.length === 0) return null;

  const currentCase = useCases[activeIndex];

  return (
    <section className="relative overflow-hidden border-t border-border/60 bg-background py-20 sm:py-24 md:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-[#0172ff]/5 blur-3xl" />
        <div className="absolute bottom-1/3 left-0 h-[500px] w-[500px] rounded-full bg-[#38bdf8]/5 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <PopIn>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Real-World Conversations in Action
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Experience how Jadubot handles complex {industry.name} customer interactions in
              natural language.
            </p>
          </PopIn>
        </div>

        {/* Interactive Showcase */}
        <div className="mt-14 grid items-start gap-8 lg:grid-cols-12">
          {/* Left Column: Tab list of scenarios */}
          <div className="space-y-3 lg:col-span-5">
            <PopIn>
              <div className="mb-2 px-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                Select Interaction Scenario
              </div>
              {useCases.map((scenario: IndustryUseCase, idx: number) => {
                const isActive = activeIndex === idx;

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={cn(
                      "w-full rounded-2xl border p-5 text-left transition-all duration-200",
                      isActive
                        ? "border-[#0172ff]/60 bg-card/90 shadow-card"
                        : "border-border/60 bg-card/40 hover:border-border hover:bg-card/70"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={cn(
                          "text-xs font-semibold tracking-wider uppercase",
                          isActive ? "text-primary" : "text-muted-foreground"
                        )}
                      >
                        Scenario 0{idx + 1}
                      </span>
                      {isActive && (
                        <span className="flex h-2 w-2 rounded-full bg-[#0172ff] shadow-[0_0_8px_#0172ff]" />
                      )}
                    </div>

                    <div
                      className={cn(
                        "mt-2 text-base font-bold",
                        isActive ? "text-foreground" : "text-muted-foreground"
                      )}
                    >
                      {scenario.title}
                    </div>

                    <div className="mt-2 line-clamp-2 text-xs text-muted-foreground">
                      <span className="font-medium text-muted-foreground/70">Trigger: </span>
                      {scenario.trigger}
                    </div>
                  </button>
                );
              })}
            </PopIn>
          </div>

          {/* Right Column: Live Chat Simulation Device */}
          <div className="lg:col-span-7">
            <PopIn delay={0.15}>
              <div className="shadow-elevated relative rounded-3xl border border-primary/25 bg-card p-4 sm:p-6">
                {/* Chat Top Bar */}
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/15">
                      <Image
                        src="/assets/images/shared/jadubot-logo.png"
                        alt="Jadubot"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                      <span className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-background" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-sm font-bold text-foreground">
                        <span>Jadubot AI Specialist</span>
                        <span className="py-0.2 rounded bg-primary/15 px-1.5 text-[10px] font-semibold text-primary">
                          VERIFIED
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-medium text-emerald-500">
                        <span>Online</span>
                        <span>•</span>
                        <span>Avg. reply &lt; 2s</span>
                      </div>
                    </div>
                  </div>

                  <div className="hidden text-xs text-muted-foreground sm:block">
                    Omnichannel Stream
                  </div>
                </div>

                {/* Chat Bubble Stream */}
                <div className="my-6 min-h-[280px] space-y-4">
                  {currentCase.dialogue.map((msg, mIdx) => {
                    const isUser = msg.sender === "user";

                    return (
                      <div
                        key={mIdx}
                        className={cn(
                          "flex items-start gap-3",
                          isUser ? "flex-row-reverse" : "flex-row"
                        )}
                      >
                        {/* Avatar */}
                        <div
                          className={cn(
                            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                            isUser
                              ? "border border-border bg-muted text-muted-foreground"
                              : "bg-[#0172ff] text-white shadow-[0_0_12px_rgba(1,114,255,0.5)]"
                          )}
                        >
                          {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                        </div>

                        {/* Speech Bubble */}
                        <div
                          className={cn(
                            "max-w-[82%] rounded-2xl p-4 text-sm leading-relaxed shadow-sm sm:max-w-[75%]",
                            isUser
                              ? "rounded-tr-sm border border-border bg-muted text-foreground"
                              : "rounded-tl-sm bg-gradient-to-r from-[#0172ff] to-[#0052cc] font-normal text-white shadow-[0_0_20px_rgba(1,114,255,0.25)]"
                          )}
                        >
                          <p>{msg.message}</p>
                          <span
                            className={cn(
                              "mt-1.5 block text-[10px]",
                              isUser
                                ? "text-right text-muted-foreground"
                                : "text-left text-blue-100"
                            )}
                          >
                            {isUser ? "Customer" : "Jadubot AI"} • Just now
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Result / Benefit Banner */}
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-500 uppercase">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Outcome / Business Impact</span>
                  </div>
                  <p className="mt-1.5 text-sm font-medium text-foreground">
                    {currentCase.benefit}
                  </p>
                </div>
              </div>
            </PopIn>
          </div>
        </div>
      </div>
    </section>
  );
}

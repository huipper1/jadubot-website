"use client";

import { useState } from "react";
import Image from "next/image";
import { Bot, CheckCircle2, MessageSquare, Send, Sparkles, User } from "lucide-react";
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
    <section className="relative py-20 sm:py-24 md:py-28 bg-[#090d16] border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[#0172ff]/5 blur-3xl" />
        <div className="absolute left-0 bottom-1/3 h-[500px] w-[500px] rounded-full bg-[#38bdf8]/5 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <PopIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-[#0b162b]/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 backdrop-blur-md">
              <MessageSquare className="h-3.5 w-3.5 text-blue-400" />
              <span>LIVE CONVERSATION AGENTS</span>
            </div>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Real-World Conversations in Action
            </h2>
            <p className="mt-4 text-base text-slate-300 sm:text-lg">
              Experience how Jadubot handles complex {industry.name} customer interactions in natural language.
            </p>
          </PopIn>
        </div>

        {/* Interactive Showcase */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12 items-start">
          {/* Left Column: Tab list of scenarios */}
          <div className="space-y-3 lg:col-span-5">
            <PopIn>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 px-1">
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
                      "w-full text-left rounded-2xl p-5 border transition-all duration-200",
                      isActive
                        ? "border-[#0172ff]/60 bg-[#0c1833]/90 shadow-[0_0_25px_rgba(1,114,255,0.2)]"
                        : "border-white/5 bg-[#0b101c]/60 hover:bg-white/[0.03] hover:border-white/10"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span className={cn(
                        "text-xs font-semibold uppercase tracking-wider",
                        isActive ? "text-blue-400" : "text-slate-400"
                      )}>
                        Scenario 0{idx + 1}
                      </span>
                      {isActive && (
                        <span className="flex h-2 w-2 rounded-full bg-[#0172ff] shadow-[0_0_8px_#0172ff]" />
                      )}
                    </div>

                    <div className={cn(
                      "mt-2 text-base font-bold",
                      isActive ? "text-white" : "text-slate-300"
                    )}>
                      {scenario.title}
                    </div>

                    <div className="mt-2 text-xs text-slate-400 line-clamp-2">
                      <span className="text-slate-500 font-medium">Trigger: </span>
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
              <div className="relative rounded-3xl border border-blue-500/30 bg-[#080d16] p-4 sm:p-6 shadow-[0_0_40px_rgba(1,114,255,0.15)] backdrop-blur-xl">
                {/* Chat Top Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/20 border border-blue-500/30">
                      <Image
                        src="/assets/images/shared/jadubot-logo.png"
                        alt="Jadubot"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                      <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-[#080d16]" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>Jadubot AI Specialist</span>
                        <span className="rounded bg-blue-500/20 px-1.5 py-0.2 text-[10px] font-semibold text-blue-300">
                          VERIFIED
                        </span>
                      </div>
                      <div className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                        <span>Online</span>
                        <span>•</span>
                        <span>Avg. reply &lt; 2s</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-slate-400 hidden sm:block">
                    Omnichannel Stream
                  </div>
                </div>

                {/* Chat Bubble Stream */}
                <div className="my-6 space-y-4 min-h-[280px]">
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
                              ? "bg-slate-700 text-slate-300 border border-white/10"
                              : "bg-[#0172ff] text-white shadow-[0_0_12px_rgba(1,114,255,0.5)]"
                          )}
                        >
                          {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                        </div>

                        {/* Speech Bubble */}
                        <div
                          className={cn(
                            "max-w-[82%] sm:max-w-[75%] rounded-2xl p-4 text-sm leading-relaxed shadow-md",
                            isUser
                              ? "rounded-tr-sm bg-[#1e293b] text-slate-200 border border-slate-700/60"
                              : "rounded-tl-sm bg-gradient-to-r from-[#0172ff] to-[#0052cc] text-white font-normal shadow-[0_0_20px_rgba(1,114,255,0.25)]"
                          )}
                        >
                          <p>{msg.message}</p>
                          <span
                            className={cn(
                              "mt-1.5 block text-[10px]",
                              isUser ? "text-slate-400 text-right" : "text-blue-200 text-left"
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
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Outcome / Business Impact</span>
                  </div>
                  <p className="mt-1.5 text-sm font-medium text-slate-200">
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

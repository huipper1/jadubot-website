"use client";

import { useState } from "react";
import {
  Sparkles,
  Cpu,
  Zap,
  TrendingUp,
  Activity,
  CheckCircle2,
  ShieldCheck,
  Radio,
  ArrowRight
} from "lucide-react";
import { PopIn } from "@/components/animations";
import { WorkflowStreamCanvas } from "./WorkflowStreamCanvas";
import type { IndustryData, IndustryWorkflowStep } from "./industry-data";

interface IndustryWorkflowProps {
  industry: IndustryData;
}

const STEP_ICONS = [Sparkles, Cpu, Zap, TrendingUp];

const STEP_STROKES = [
  { range: "0% - 25%", strokeDasharray: "25 75", phase: "INGESTION & TRIGGER" },
  { range: "0% - 50%", strokeDasharray: "50 50", phase: "COGNITIVE REASONING" },
  { range: "0% - 75%", strokeDasharray: "75 25", phase: "AUTONOMOUS FULFILLMENT" },
  { range: "0% - 100%", strokeDasharray: "100 0", phase: "SCALE & RETENTION" }
];

export function IndustryWorkflow({ industry }: IndustryWorkflowProps) {
  const { workflow } = industry;
  const [activeStep, setActiveStep] = useState(0);

  const activeStepData = workflow.steps[activeStep] || workflow.steps[0];
  const activePhaseMeta = STEP_STROKES[activeStep] || STEP_STROKES[0];

  return (
    <section className="relative overflow-hidden bg-[#0a0c10] py-20 sm:py-24 lg:py-28">
      {/* 3D Three.js Procedural Particle Data Stream Canvas */}
      <WorkflowStreamCanvas activeStep={activeStep} totalSteps={workflow.steps.length} />

      {/* SVG Definitions for Specular Rim Highlight */}
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          <linearGradient id="industryRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="50%" stopColor="#e0f2fe" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.85" />
          </linearGradient>
        </defs>
      </svg>

      {/* Subtle Background Radial Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 h-[420px] w-[820px] rounded-full bg-blue-600/10 blur-[150px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mx-auto max-w-3xl text-center">
          <PopIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-[#091529]/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300 backdrop-blur-md">
              <Activity className="h-3.5 w-3.5 text-sky-400" />
              <span>{workflow.badge || `${industry.name} Automation Pipeline`}</span>
            </div>

            <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {workflow.title || (
                <>
                  How Jadubot Powers{" "}
                  <span className="bg-gradient-to-r from-[#93c5fd] via-[#38bdf8] to-[#0172ff] bg-clip-text text-transparent">
                    {industry.name}
                  </span>
                </>
              )}
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              {workflow.description}
            </p>
          </PopIn>
        </div>

        {/* Process Timeline Section */}
        <div className="relative mt-16 sm:mt-20">
          {/* Horizontal Connecting Timeline Line on Desktop */}
          <div
            className="hidden lg:block absolute top-11 left-[12.5%] right-[12.5%] h-[1.5px] bg-gradient-to-r from-blue-500/30 via-sky-400/70 to-blue-500/30 shadow-[0_0_12px_rgba(1,114,255,0.4)] z-0"
            aria-hidden="true"
          />

          {/* Intermediate Glowing Pulse Dots on Desktop */}
          <div
            className="hidden lg:flex absolute top-11 -translate-y-1/2 left-[25%] -translate-x-1/2 z-0 items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_8px_#ffffff,0_0_18px_rgba(1,114,255,0.9),0_0_30px_rgba(1,114,255,0.6)]" />
          </div>
          <div
            className="hidden lg:flex absolute top-11 -translate-y-1/2 left-[50%] -translate-x-1/2 z-0 items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_8px_#ffffff,0_0_18px_rgba(1,114,255,0.9),0_0_30px_rgba(1,114,255,0.6)]" />
          </div>
          <div
            className="hidden lg:flex absolute top-11 -translate-y-1/2 left-[75%] -translate-x-1/2 z-0 items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_8px_#ffffff,0_0_18px_rgba(1,114,255,0.9),0_0_30px_rgba(1,114,255,0.6)]" />
          </div>

          {/* 4 Interactive Process Step Nodes */}
          <PopIn
            stagger={0.1}
            className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-6"
          >
            {workflow.steps.map((stepItem: IndustryWorkflowStep, index: number) => {
              const Icon = STEP_ICONS[index % STEP_ICONS.length];
              const strokeConfig = STEP_STROKES[index % STEP_STROKES.length];
              const isActive = activeStep === index;

              return (
                <button
                  type="button"
                  key={index}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`group relative flex flex-col items-center text-center p-3 rounded-2xl transition-all duration-300 focus:outline-none ${
                    isActive ? "scale-[1.03]" : "opacity-90 hover:opacity-100"
                  }`}
                  aria-pressed={isActive}
                  aria-label={`Step ${stepItem.step}: ${stepItem.title}`}
                >
                  {/* Circular Progressive Node */}
                  <div
                    className={`relative flex h-20 w-20 sm:h-[88px] sm:w-[88px] items-center justify-center rounded-full border transition-all duration-300 ${
                      isActive
                        ? "border-sky-400/80 bg-[#081733] shadow-[0_0_32px_rgba(56,189,248,0.45)] scale-105"
                        : "border-blue-500/35 bg-[#081226] shadow-[0_0_20px_rgba(1,114,255,0.2)] group-hover:border-sky-400/50 group-hover:scale-105"
                    }`}
                  >
                    {/* SVG Progressive Highlight Stroke */}
                    <svg
                      className="pointer-events-none absolute inset-0 h-full w-full -rotate-90 overflow-visible"
                      viewBox="0 0 88 88"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        cx="44"
                        cy="44"
                        r="41"
                        stroke="rgba(1, 114, 255, 0.2)"
                        strokeWidth="2"
                        className="transition-colors duration-300"
                      />
                      <circle
                        cx="44"
                        cy="44"
                        r="41"
                        pathLength={100}
                        stroke="url(#industryRimGrad)"
                        strokeWidth={isActive ? "3" : "2.5"}
                        strokeDasharray={strokeConfig.strokeDasharray}
                        strokeDashoffset={0}
                        strokeLinecap="round"
                        className={`transition-all duration-500 ${
                          isActive ? "stroke-white drop-shadow-[0_0_8px_#38bdf8]" : ""
                        }`}
                      />
                    </svg>

                    <Icon
                      className={`relative z-10 h-7 w-7 transition-all duration-300 ${
                        isActive
                          ? "text-white scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                          : "text-blue-100 group-hover:text-white group-hover:scale-110"
                      }`}
                    />
                  </div>

                  {/* Step Number & Phase */}
                  <div className="mt-4 flex items-center gap-1.5">
                    <span className="font-mono text-sm sm:text-base font-bold text-sky-400">
                      {stepItem.step}
                    </span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
                    )}
                  </div>

                  {/* Step Title */}
                  <h3
                    className={`mt-1 font-heading text-base font-bold tracking-tight transition-colors ${
                      isActive ? "text-white" : "text-slate-200 group-hover:text-white"
                    }`}
                  >
                    {stepItem.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400 max-w-[240px]">
                    {stepItem.description}
                  </p>
                </button>
              );
            })}
          </PopIn>
        </div>

        {/* Interactive Autonomous Telemetry Console */}
        <div className="mt-14 sm:mt-16">
          <PopIn className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0c121e]/90 via-[#0a0f19]/90 to-[#070b12]/95 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            {/* Ambient accent glow */}
            <div
              className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#0172ff]/15 blur-3xl"
              aria-hidden="true"
            />

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-white/[0.08] pb-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-sky-400">
                  <Radio className="h-3.5 w-3.5 text-sky-400 animate-pulse" />
                  <span>PHASE 0{activeStep + 1} • {activePhaseMeta.phase}</span>
                </div>
                <h4 className="mt-1 text-xl sm:text-2xl font-bold font-heading text-white">
                  {activeStepData.title}
                </h4>
                <p className="mt-1.5 text-sm text-slate-300 max-w-2xl leading-relaxed">
                  {activeStepData.description}
                </p>
              </div>

              {/* Step Navigation Switcher */}
              <div className="flex items-center gap-2 shrink-0">
                {workflow.steps.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeStep === idx
                        ? "w-8 bg-sky-400 shadow-[0_0_12px_#38bdf8]"
                        : "w-2.5 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Jump to phase ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Telemetry Metrics Grid */}
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                <div className="text-[11px] font-medium text-slate-400">Average Execution</div>
                <div className="mt-1 text-base sm:text-lg font-bold text-white font-mono flex items-center gap-1">
                  &lt; 1.2s
                </div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                  <CheckCircle2 className="h-2.5 w-2.5" /> Real-time Response
                </div>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                <div className="text-[11px] font-medium text-slate-400">Resolution Rate</div>
                <div className="mt-1 text-base sm:text-lg font-bold text-white font-mono">
                  94.6%
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Zero Human Wait Time</div>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                <div className="text-[11px] font-medium text-slate-400">Channel Sync</div>
                <div className="mt-1 text-base sm:text-lg font-bold text-sky-300 font-mono">
                  24/7/365
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">FB • IG • WhatsApp</div>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                <div className="text-[11px] font-medium text-slate-400">Security &amp; Handoff</div>
                <div className="mt-1 text-base sm:text-lg font-bold text-emerald-400 font-mono flex items-center gap-1">
                  <ShieldCheck className="h-4 w-4" /> Active
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Instant Agent Escalation</div>
              </div>
            </div>
          </PopIn>
        </div>
      </div>
    </section>
  );
}

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
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
      {/* 3D Three.js Procedural Particle Data Stream Canvas */}
      <WorkflowStreamCanvas activeStep={activeStep} totalSteps={workflow.steps.length} />

      {/* SVG Definitions for Specular Rim Highlight */}
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          {/* Dark Mode: White to Ice Sky Highlight */}
          <linearGradient id="industryRimGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="50%" stopColor="#e0f2fe" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.85" />
          </linearGradient>
          {/* Light Mode: Vibrant Electric Blue to Sky Highlight */}
          <linearGradient id="industryRimGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0052cc" stopOpacity="1" />
            <stop offset="50%" stopColor="#0172ff" stopOpacity="0.95" />
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
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary dark:text-sky-300 backdrop-blur-md">
              <Activity className="h-3.5 w-3.5 text-primary dark:text-sky-400" />
              <span>{workflow.badge || `${industry.name} Automation Pipeline`}</span>
            </div>

            <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {workflow.title || (
                <>
                  How Jadubot Powers{" "}
                  <span className="bg-gradient-to-r from-primary via-sky-400 to-primary bg-clip-text text-transparent">
                    {industry.name}
                  </span>
                </>
              )}
            </h2>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {workflow.description}
            </p>
          </PopIn>
        </div>

        {/* Process Timeline Section */}
        <div className="relative mt-16 sm:mt-20">
          {/* Horizontal Connecting Timeline Line on Desktop */}
          <div
            className="hidden lg:block absolute top-11 left-[12.5%] right-[12.5%] h-[1.5px] bg-gradient-to-r from-blue-500/25 via-primary/50 to-blue-500/25 dark:from-blue-500/30 dark:via-sky-400/70 dark:to-blue-500/30 shadow-[0_0_12px_rgba(1,114,255,0.2)] dark:shadow-[0_0_12px_rgba(1,114,255,0.4)] z-0"
            aria-hidden="true"
          />

          {/* Intermediate Glowing Pulse Dots on Desktop */}
          <div
            className="hidden lg:flex absolute top-11 -translate-y-1/2 left-[25%] -translate-x-1/2 z-0 items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(1,114,255,0.6)] dark:bg-white dark:shadow-[0_0_8px_#ffffff,0_0_18px_rgba(1,114,255,0.9),0_0_30px_rgba(1,114,255,0.6)]" />
          </div>
          <div
            className="hidden lg:flex absolute top-11 -translate-y-1/2 left-[50%] -translate-x-1/2 z-0 items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(1,114,255,0.6)] dark:bg-white dark:shadow-[0_0_8px_#ffffff,0_0_18px_rgba(1,114,255,0.9),0_0_30px_rgba(1,114,255,0.6)]" />
          </div>
          <div
            className="hidden lg:flex absolute top-11 -translate-y-1/2 left-[75%] -translate-x-1/2 z-0 items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(1,114,255,0.6)] dark:bg-white dark:shadow-[0_0_8px_#ffffff,0_0_18px_rgba(1,114,255,0.9),0_0_30px_rgba(1,114,255,0.6)]" />
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
                        ? "border-primary/80 bg-blue-50/70 shadow-[0_0_24px_rgba(1,114,255,0.25)] scale-105 dark:border-sky-400/80 dark:bg-card dark:shadow-[0_0_32px_rgba(56,189,248,0.45)]"
                        : "border-slate-200 bg-card shadow-xs group-hover:border-primary/40 group-hover:scale-105 dark:border-blue-500/35 dark:bg-background dark:shadow-[0_0_20px_rgba(1,114,255,0.2)] dark:group-hover:border-sky-400/50"
                    }`}
                  >
                    {/* SVG Progressive Highlight Stroke */}
                    <svg
                      className="pointer-events-none absolute inset-0 h-full w-full -rotate-90 overflow-visible"
                      viewBox="0 0 88 88"
                      fill="none"
                      aria-hidden="true"
                    >
                      {/* Base Track */}
                      <circle
                        cx="44"
                        cy="44"
                        r="41"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-slate-200 dark:text-blue-500/25 transition-colors duration-300"
                      />
                      {/* Progressive Arc - Light Mode */}
                      <circle
                        cx="44"
                        cy="44"
                        r="41"
                        pathLength={100}
                        stroke="url(#industryRimGradLight)"
                        strokeWidth={isActive ? "3.5" : "2.5"}
                        strokeDasharray={strokeConfig.strokeDasharray}
                        strokeDashoffset={0}
                        strokeLinecap="round"
                        className={`dark:hidden transition-all duration-500 ${
                          isActive ? "stroke-primary drop-shadow-[0_0_8px_rgba(1,114,255,0.5)]" : ""
                        }`}
                      />
                      {/* Progressive Arc - Dark Mode */}
                      <circle
                        cx="44"
                        cy="44"
                        r="41"
                        pathLength={100}
                        stroke="url(#industryRimGradDark)"
                        strokeWidth={isActive ? "3" : "2.5"}
                        strokeDasharray={strokeConfig.strokeDasharray}
                        strokeDashoffset={0}
                        strokeLinecap="round"
                        className={`hidden dark:block transition-all duration-500 ${
                          isActive ? "stroke-white drop-shadow-[0_0_8px_#38bdf8]" : ""
                        }`}
                      />
                    </svg>

                    <Icon
                      className={`relative z-10 h-7 w-7 transition-all duration-300 ${
                        isActive
                          ? "text-primary scale-110 drop-shadow-[0_0_8px_rgba(1,114,255,0.35)] dark:text-white dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                          : "text-slate-600 group-hover:text-primary group-hover:scale-110 dark:text-blue-100 dark:group-hover:text-white"
                      }`}
                    />
                  </div>

                  {/* Step Number & Phase */}
                  <div className="mt-4 flex items-center gap-1.5">
                    <span className="font-mono text-sm sm:text-base font-bold text-primary dark:text-sky-400">
                      {stepItem.step}
                    </span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-primary dark:bg-sky-400 animate-pulse" />
                    )}
                  </div>

                  {/* Step Title */}
                  <h3
                    className={`mt-1 font-heading text-base font-bold tracking-tight transition-colors ${
                      isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {stepItem.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground max-w-[240px]">
                    {stepItem.description}
                  </p>
                </button>
              );
            })}
          </PopIn>
        </div>

        {/* Interactive Autonomous Telemetry Console */}
        <div className="mt-14 sm:mt-16">
          <PopIn className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-8 backdrop-blur-xl shadow-elevated">
            {/* Ambient accent glow */}
            <div
              className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#0172ff]/15 blur-3xl"
              aria-hidden="true"
            />

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-border pb-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-primary dark:text-sky-400">
                  <Radio className="h-3.5 w-3.5 text-primary dark:text-sky-400 animate-pulse" />
                  <span>PHASE 0{activeStep + 1} • {activePhaseMeta.phase}</span>
                </div>
                <h4 className="mt-1 text-xl sm:text-2xl font-bold font-heading text-foreground">
                  {activeStepData.title}
                </h4>
                <p className="mt-1.5 text-sm text-muted-foreground max-w-2xl leading-relaxed">
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
                        ? "w-8 bg-primary dark:bg-sky-400 shadow-[0_0_12px_rgba(1,114,255,0.4)] dark:shadow-[0_0_12px_#38bdf8]"
                        : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                    }`}
                    aria-label={`Jump to phase ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Telemetry Metrics Grid */}
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-xl border border-border/60 bg-muted/30 p-3.5">
                <div className="text-[11px] font-medium text-muted-foreground">Average Execution</div>
                <div className="mt-1 text-base sm:text-lg font-bold text-foreground font-mono flex items-center gap-1">
                  &lt; 1.2s
                </div>
                <div className="text-[10px] text-emerald-500 dark:text-emerald-400 flex items-center gap-1 mt-0.5 font-medium">
                  <CheckCircle2 className="h-2.5 w-2.5" /> Real-time Response
                </div>
              </div>

              <div className="rounded-xl border border-border/60 bg-muted/30 p-3.5">
                <div className="text-[11px] font-medium text-muted-foreground">Resolution Rate</div>
                <div className="mt-1 text-base sm:text-lg font-bold text-foreground font-mono">
                  94.6%
                </div>
                <div className="text-[10px] text-muted-foreground mt-0.5">Zero Human Wait Time</div>
              </div>

              <div className="rounded-xl border border-border/60 bg-muted/30 p-3.5">
                <div className="text-[11px] font-medium text-muted-foreground">Channel Sync</div>
                <div className="mt-1 text-base sm:text-lg font-bold text-primary dark:text-sky-400 font-mono">
                  24/7/365
                </div>
                <div className="text-[10px] text-muted-foreground mt-0.5">FB • IG • WhatsApp</div>
              </div>

              <div className="rounded-xl border border-border/60 bg-muted/30 p-3.5">
                <div className="text-[11px] font-medium text-muted-foreground">Security &amp; Handoff</div>
                <div className="mt-1 text-base sm:text-lg font-bold text-emerald-500 dark:text-emerald-400 font-mono flex items-center gap-1">
                  <ShieldCheck className="h-4 w-4" /> Active
                </div>
                <div className="text-[10px] text-muted-foreground mt-0.5">Instant Agent Escalation</div>
              </div>
            </div>
          </PopIn>
        </div>
      </div>
    </section>
  );
}

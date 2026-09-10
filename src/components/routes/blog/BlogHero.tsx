"use client";

import { BookOpen } from "lucide-react";
import { PopIn } from "@/components/animations";

export function BlogHero() {
  return (
    <header className="relative pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Subtle radial lighting glow */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 -z-10 h-80 w-full max-w-4xl opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(1,114,255,0.4) 0%, rgba(56,189,248,0.12) 55%, transparent 75%)"
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <PopIn className="mx-auto max-w-4xl">
          {/* Editorial Subtitle Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0172ff]/30 bg-[#0172ff]/10 px-3.5 py-1 text-xs font-medium text-[#38bdf8] mb-6">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Knowledge &amp; Strategy Guides</span>
          </div>

          {/* Publication Title */}
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] [text-wrap:balance]">
            Jadubot Playbooks &amp;{" "}
            <span className="bg-gradient-to-r from-[#93c5fd] via-[#38bdf8] to-[#0172ff] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(1,114,255,0.4)]">
              Marketing Insights
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-slate-300">
            Proven automation blueprints,{" "}
            <span className="text-[#38c5ff] font-medium">Facebook</span> &amp;{" "}
            <span className="text-[#fe78e1] font-medium">Instagram</span> chatbot workflows, and{" "}
            <span className="text-[#6dffae] font-medium">F-commerce</span> growth strategies to help you close sales 24/7.
          </p>
        </PopIn>
      </div>
    </header>
  );
}

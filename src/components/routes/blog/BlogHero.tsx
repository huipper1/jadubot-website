"use client";

import { PopIn } from "@/components/animations";

export function BlogHero() {
  return (
    <header className="relative overflow-hidden pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 md:pb-20">
      {/* Subtle radial lighting glow */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -z-10 h-80 w-full max-w-4xl -translate-x-1/2 opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(1,114,255,0.4) 0%, rgba(56,189,248,0.12) 55%, transparent 75%)"
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-5xl px-4 text-center sm:px-6">
        <PopIn className="mx-auto max-w-4xl">
          {/* Publication Title */}
          <h1 className="font-heading text-3xl leading-[1.12] font-extrabold tracking-tight [text-wrap:balance] text-foreground sm:text-5xl md:text-6xl">
            Jadubot Playbooks &amp;{" "}
            <span className="bg-gradient-to-r from-[#93c5fd] via-[#38bdf8] to-[#0172ff] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(1,114,255,0.4)]">
              Marketing Insights
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            Proven automation blueprints,{" "}
            <span className="font-medium text-[#38c5ff]">Facebook</span> &amp;{" "}
            <span className="font-medium text-[#fe78e1]">Instagram</span> chatbot workflows, and{" "}
            <span className="font-medium text-[#6dffae]">F-commerce</span> growth strategies to help
            you close sales 24/7.
          </p>
        </PopIn>
      </div>
    </header>
  );
}

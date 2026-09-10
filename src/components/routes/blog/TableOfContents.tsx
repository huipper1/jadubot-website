"use client";

import { useEffect, useState } from "react";
import { ListTree, ChevronDown } from "lucide-react";
import type { BlogHeading } from "@/lib/content/blog-utils";

interface TableOfContentsProps {
  headings: BlogHeading[];
  className?: string;
}

export function TableOfContents({ headings, className = "" }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find entries intersecting near the top of the viewport
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-90px 0px -65% 0px",
        threshold: 0.1
      }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Sticky Bar & Drawer */}
      <div className="lg:hidden my-6 rounded-xl border border-border bg-card/90 p-4 backdrop-blur-md">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-200"
        >
          <span className="flex items-center gap-2">
            <ListTree className="h-4 w-4 text-[#38bdf8]" />
            <span>Table of contents</span>
          </span>
          <ChevronDown
            className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
              mobileOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {mobileOpen && (
          <nav className="mt-3 pt-3 border-t border-border/60 max-h-72 overflow-y-auto space-y-1 text-xs">
            {headings.map((h) => {
              const isActive = activeId === h.id;
              return (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => handleScrollTo(h.id)}
                  className={`block w-full text-left py-1.5 transition-colors line-clamp-1 ${
                    h.level === 3 ? "pl-4" : "pl-1 font-medium"
                  } ${
                    isActive
                      ? "text-[#38bdf8] font-semibold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {h.text}
                </button>
              );
            })}
          </nav>
        )}
      </div>

      {/* Desktop Sticky Navigation */}
      <nav
        aria-label="Table of contents"
        className={`hidden lg:block ${className}`}
      >
        <div className="rounded-2xl border border-border bg-card/75 p-5 backdrop-blur-md shadow-xl shadow-black/20">
          <div className="flex items-center gap-2 pb-3 border-b border-border/60">
            <ListTree className="h-4 w-4 text-[#38bdf8]" />
            <h2 className="text-xs font-semibold tracking-wide text-slate-200">
              Table of contents
            </h2>
          </div>

          <div className="mt-3 max-h-[calc(100vh-240px)] overflow-y-auto pr-1 space-y-1 text-xs scrollbar-thin scrollbar-thumb-white/10">
            {headings.map((h) => {
              const isActive = activeId === h.id;
              return (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => handleScrollTo(h.id)}
                  className={`group relative flex w-full text-left py-1.5 transition-all leading-snug rounded-md px-2 ${
                    h.level === 3 ? "pl-5 text-[11.5px]" : "font-medium"
                  } ${
                    isActive
                      ? "bg-[#0172ff]/10 text-[#38bdf8] font-semibold"
                      : "text-slate-400 hover:bg-white/[0.03] hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <span
                      className="absolute left-0 top-1.5 bottom-1.5 w-[2.5px] rounded-full bg-[#0172ff]"
                      aria-hidden="true"
                    />
                  )}
                  <span className="line-clamp-2">{h.text}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}

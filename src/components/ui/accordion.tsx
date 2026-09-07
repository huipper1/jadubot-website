"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils";

export interface AccordionItemProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  className
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={cn(
        "group rounded-xl border border-[#373a41] bg-[#12151c]/80 transition-all duration-300 hover:border-[#8e2de2]/50",
        isOpen && "border-[#8e2de2]/60 bg-[#181d27]/90 shadow-[0_4px_24px_rgba(142,45,226,0.15)]",
        className
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-5 text-left transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-white group-hover:text-[#d8b4fe]">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-[#cecfd2] transition-transform duration-300 group-hover:text-[#d8b4fe]",
            isOpen && "rotate-180 text-[#8e2de2]"
          )}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pt-1 text-sm leading-relaxed text-[#cecfd2] animate-in fade-in-50 duration-200">
          {children}
        </div>
      )}
    </div>
  );
}

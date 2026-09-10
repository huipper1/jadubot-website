"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "group rounded-xl border border-[#373a41] bg-[#12151c]/80 transition-all duration-300 hover:border-[#0172ff]/50 data-[state=open]:border-[#0172ff]/60 data-[state=open]:bg-[#181d27]/90 data-[state=open]:shadow-[0_4px_24px_rgba(1,114,255,0.15)] overflow-hidden",
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-center justify-between gap-4 p-5 text-left text-base font-semibold text-white transition-all duration-200 outline-none hover:no-underline hover:text-[#93c5fd] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-[#0172ff]",
          className
        )}
        {...props}
      >
        <span>{children}</span>
        <ChevronDown className="pointer-events-none h-5 w-5 shrink-0 text-[#cecfd2] transition-transform duration-300 group-hover:text-[#93c5fd]" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("px-5 pb-5 pt-1 text-sm leading-relaxed text-[#cecfd2]", className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };


"use client";

import { Check, Info, Minus } from "lucide-react";

import { cn } from "@/utils";

import { COMPARISON_ROWS, PRICING_TIERS } from "./pricing-data";

export function PricingComparison() {
  return (
    <section className="relative border-t border-border/70 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Horizontal scrollable wrapper */}
        <div className="overflow-x-auto pb-4 min-[1104px]:overflow-x-visible">
          <div className="mx-auto max-w-[1240px] min-w-[860px]">
            {/* Sticky Header on Scroll */}
            <div className="sticky top-[64px] z-20 flex min-h-[96px] items-stretch border-b border-border/60 bg-background/95 py-4 backdrop-blur-xl sm:top-[72px]">
              {/* Left Column: Heading */}
              <div className="flex w-[240px] shrink-0 items-center pr-6 lg:w-[360px]">
                <h2 className="m-0 font-heading text-2xl font-extrabold tracking-tight text-foreground lg:text-3xl">
                  Compare plans
                </h2>
              </div>

              {/* Right Columns: Plan Name + Select Button */}
              {PRICING_TIERS.map((tier) => {
                const isHighlight = tier.isPopular;
                return (
                  <div
                    key={tier.id}
                    className={cn(
                      "flex min-w-0 flex-1 flex-col items-center justify-center gap-2 px-3",
                      isHighlight && "rounded-t-xl bg-primary/[0.04] dark:bg-primary/[0.08]"
                    )}
                  >
                    <span className="font-heading text-sm font-bold tracking-tight whitespace-nowrap text-foreground">
                      {tier.name}
                    </span>
                    <a
                      href={tier.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "inline-flex h-9 w-full cursor-pointer items-center justify-center rounded-full px-4 text-xs font-semibold whitespace-nowrap transition-all duration-150",
                        isHighlight
                          ? "bg-primary text-white shadow-xs hover:bg-primary/90"
                          : "border border-border bg-card text-foreground hover:border-primary/40 hover:bg-primary/10"
                      )}
                    >
                      Select
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Comparison Rows with Dashed Horizontal Dividers */}
            <div className="divide-y divide-dashed divide-border/80">
              {COMPARISON_ROWS.map((row, idx) => (
                <div
                  key={idx}
                  className="flex min-h-[50px] items-stretch px-1 transition-colors hover:bg-card/60"
                >
                  {/* Left Column: Feature Title */}
                  <div className="flex w-[240px] shrink-0 items-center py-2.5 pr-4 lg:w-[360px]">
                    <span className="text-xs font-medium tracking-tight text-foreground/80 sm:text-sm">
                      {row.feature}
                    </span>
                    {row.tooltip && (
                      <span
                        className="ml-1.5 inline-flex cursor-help text-muted-foreground/60 hover:text-muted-foreground"
                        title={row.tooltip}
                      >
                        <Info className="h-3.5 w-3.5" />
                      </span>
                    )}
                  </div>

                  {/* Tier Columns */}
                  {/* Free */}
                  <div className="flex min-w-0 flex-1 items-center justify-center px-2 py-2.5 text-center">
                    {renderCell(row.free)}
                  </div>

                  {/* Starter */}
                  <div className="flex min-w-0 flex-1 items-center justify-center px-2 py-2.5 text-center">
                    {renderCell(row.starter)}
                  </div>

                  {/* Premium (Highlighted Column) */}
                  <div className="flex min-w-0 flex-1 items-center justify-center bg-primary/[0.04] px-2 py-2.5 text-center dark:bg-primary/[0.08]">
                    {renderCell(row.premium, true)}
                  </div>

                  {/* Business */}
                  <div className="flex min-w-0 flex-1 items-center justify-center px-2 py-2.5 text-center">
                    {renderCell(row.business)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderCell(val: string | boolean, isHighlighted = false) {
  if (typeof val === "boolean") {
    if (val) {
      return (
        <Check
          className={cn(
            "h-4 w-4",
            isHighlighted ? "text-primary dark:text-sky-400" : "text-emerald-500"
          )}
        />
      );
    }
    return <Minus className="h-3.5 w-3.5 text-muted-foreground/30" />;
  }

  return (
    <span
      className={cn(
        "text-xs tracking-tight sm:text-sm",
        isHighlighted ? "font-semibold text-primary dark:text-sky-400" : "text-foreground/85"
      )}
    >
      {val}
    </span>
  );
}

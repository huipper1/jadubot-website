import { Sparkles } from "lucide-react";
import { Badge } from "@/ui";
import { PopIn } from "@/components/animations";

export function PricingHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
      <div className="hero-gradient pointer-events-none absolute inset-0 -z-10" />

      <div className="container mx-auto max-w-7xl relative z-10 text-center">
        <PopIn className="mx-auto max-w-3xl">
          <Badge variant="default" className="px-3.5 py-1 text-xs">
            <Sparkles className="h-3 w-3 mr-1" />
            Simple &amp; Transparent
          </Badge>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-[1.15]">
            Simple Plans for Every Stage of{" "}
            <span className="text-gradient">Your Business</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Start free with no credit card required. Upgrade as your chat volume and orders
            grow. Cancel or switch plans anytime.
          </p>
        </PopIn>
      </div>
    </section>
  );
}

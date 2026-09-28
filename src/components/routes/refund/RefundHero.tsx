import { ShieldCheck } from "lucide-react";

import { PopIn } from "@/components/animations";
import { Badge } from "@/ui";

export function RefundHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
      <div className="hero-gradient pointer-events-none absolute inset-0 -z-10" />

      <div className="relative z-10 container mx-auto max-w-7xl text-center">
        <PopIn className="mx-auto max-w-3xl">
          <Badge variant="default" className="px-3.5 py-1 text-xs">
            <ShieldCheck className="mr-1 h-3 w-3 text-brand-orange" />
            Customer Satisfaction Guarantee
          </Badge>

          <h1 className="mt-6 text-4xl leading-[1.15] font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Jadubot <span className="text-gradient">Refund Policy</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Hassle-free refunds because your satisfaction matters. We strive to provide the
            highest-quality AI chatbot solutions for Bangladeshi businesses.
          </p>
        </PopIn>
      </div>
    </section>
  );
}

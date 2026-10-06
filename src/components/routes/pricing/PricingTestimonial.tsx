"use client";

import { SealCheck as BadgeCheck, Star } from "@/components/icons";

import { PopIn } from "@/components/animations";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { TESTIMONIAL_DATA } from "./pricing-data";

export function PricingTestimonial() {
  return (
    <section className="relative overflow-hidden border-t border-border/70 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent py-20 md:py-28 lg:py-32">
      <PopIn>
        <div className="container mx-auto max-w-5xl px-4 text-center sm:px-6">
          {/* Star Rating Strip */}
          <div className="mb-6 flex items-center justify-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
            <span className="ml-2 text-xs font-semibold text-foreground/80">
              5.0 • Verified Merchant
            </span>
          </div>

          {/* Big Glide-style Pullout Quote */}
          <blockquote className="mx-auto max-w-3xl font-heading text-xl font-medium tracking-tight text-foreground sm:text-2xl md:text-3xl lg:text-[32px] lg:leading-[1.3]">
            “{TESTIMONIAL_DATA.quote}”
          </blockquote>

          {/* Customer Avatar & Bio */}
          <div className="mt-8 flex flex-col items-center justify-center">
            <Avatar className="h-14 w-14 border-2 border-primary/40">
              <AvatarImage src={TESTIMONIAL_DATA.avatar} alt={TESTIMONIAL_DATA.author} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="mt-3.5 flex items-center gap-1.5">
              <h3 className="font-heading text-base font-bold text-foreground">
                {TESTIMONIAL_DATA.author}
              </h3>
              <BadgeCheck className="h-4 w-4 text-primary" />
            </div>

            <p className="mt-0.5 text-xs text-muted-foreground">
              {TESTIMONIAL_DATA.role} •{" "}
              <span className="font-medium text-foreground/80">{TESTIMONIAL_DATA.company}</span>
            </p>
          </div>
        </div>
      </PopIn>
    </section>
  );
}

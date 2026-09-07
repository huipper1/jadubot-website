import { Sparkles } from "lucide-react";
import { Badge } from "@/ui";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="hero-gradient pointer-events-none absolute inset-0 -z-10" />

      <div className="container relative z-10 text-center">
        <div className="mx-auto max-w-3xl">
          <Badge variant="default" className="px-3.5 py-1 text-xs">
            <Sparkles className="h-3 w-3 mr-1" />
            About Jadubot
          </Badge>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-[1.15]">
            Started with Passion,{" "}
            <span className="text-gradient">Building with Trust</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We empower Bangladeshi online merchants and modern brands to automate their
            customer conversations, eliminate manual repetitive replies, and accelerate
            growth with intelligent AI tools.
          </p>
        </div>
      </div>
    </section>
  );
}

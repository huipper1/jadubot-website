import { HelpCircle } from "lucide-react";
import { Badge } from "@/ui";

export function FaqHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
      <div className="hero-gradient pointer-events-none absolute inset-0 -z-10" />

      <div className="container relative z-10 text-center">
        <div className="mx-auto max-w-3xl">
          <Badge variant="default" className="px-3.5 py-1 text-xs">
            <HelpCircle className="h-3 w-3 mr-1" />
            Knowledge Base
          </Badge>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-[1.15]">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Find answers to common questions about Jadubot setup, Facebook & Instagram
            automation, payments, and account management.
          </p>
        </div>
      </div>
    </section>
  );
}

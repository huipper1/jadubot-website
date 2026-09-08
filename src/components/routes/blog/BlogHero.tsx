import { BookOpen } from "lucide-react";
import { Badge } from "@/ui";
import { PopIn } from "@/components/animations";

export function BlogHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
      <div className="hero-gradient pointer-events-none absolute inset-0 -z-10" />

      <div className="container mx-auto max-w-7xl relative z-10 text-center">
        <PopIn className="mx-auto max-w-3xl">
          <Badge variant="default" className="px-3.5 py-1 text-xs">
            <BookOpen className="h-3 w-3 mr-1 text-brand-orange" />
            Knowledge &amp; Strategy Guides
          </Badge>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-[1.15]">
            Jadubot <span className="text-gradient">Blog &amp; Insights</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Proven guides, marketing automation strategies, and Facebook &amp; Instagram chatbot tutorials
            to scale your business and automate customer interactions.
          </p>
        </PopIn>
      </div>
    </section>
  );
}

import { MessageSquare } from "lucide-react";
import { Badge } from "@/ui";
import { PopIn } from "@/components/animations";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
      <div className="hero-gradient pointer-events-none absolute inset-0 -z-10" />

      <div className="container mx-auto max-w-7xl relative z-10 text-center">
        <PopIn className="mx-auto max-w-3xl">
          <Badge variant="default" className="px-3.5 py-1 text-xs">
            <MessageSquare className="h-3 w-3 mr-1" />
            Get in Touch
          </Badge>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-[1.15]">
            We’d Love to <span className="text-gradient">Hear from You!</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Have questions about our chatbot features, need custom enterprise workflows, or
            want guidance getting started? Send us a message and our team will get back to
            you in minutes.
          </p>
        </PopIn>
      </div>
    </section>
  );
}

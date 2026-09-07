import Link from "next/link";
import { Home, HelpCircle, Bot } from "lucide-react";
import { Badge } from "@/ui";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[75vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
      <div className="hero-gradient pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto max-w-md">
        <Badge variant="default" className="px-3.5 py-1 text-xs">
          <Bot className="h-3 w-3 mr-1 text-brand-orange" />
          Error 404
        </Badge>

        <h1 className="mt-6 text-6xl font-black tracking-tight text-foreground sm:text-7xl">
          <span className="text-gradient">404</span>
        </h1>

        <h2 className="mt-3 text-xl font-bold text-foreground sm:text-2xl">
          Page Not Found
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          The page you are looking for might have been moved, removed, or is temporarily unavailable.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-orange/20 transition-all hover:bg-brand-orange/90 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Home className="mr-2 h-4 w-4" />
            Return Home
          </Link>

          <Link
            href="/faq/"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:bg-white/10"
          >
            <HelpCircle className="mr-2 h-4 w-4 text-brand-orange" />
            Check FAQs
          </Link>
        </div>
      </div>
    </div>
  );
}

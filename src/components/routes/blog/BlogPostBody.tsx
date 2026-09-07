import { marked } from "marked";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

interface BlogPostBodyProps {
  content: string;
}

export function BlogPostBody({ content }: BlogPostBodyProps) {
  // Convert markdown to HTML synchronously using marked
  const parsedHtml = marked.parse(content, { async: false }) as string;

  return (
    <article className="relative py-12 md:py-16">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          {/* Article Body */}
          <div
            className="prose prose-invert prose-purple max-w-none text-base leading-relaxed text-foreground/90 prose-headings:font-bold prose-headings:text-foreground prose-a:text-[#c084fc] hover:prose-a:underline prose-strong:text-foreground prose-li:text-muted-foreground prose-img:rounded-xl prose-img:border prose-img:border-white/10"
            dangerouslySetInnerHTML={{ __html: parsedHtml }}
          />

          {/* Bottom In-Article CTA Banner */}
          <div className="mt-16 rounded-2xl border border-[#8e2de2]/30 bg-gradient-to-br from-[#8e2de2]/15 to-transparent p-8 md:p-10 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#c084fc]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Try Jadubot Today
                </span>
                <h3 className="mt-2 text-2xl font-bold text-foreground">
                  Ready to Automate Your Facebook & Instagram?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-xl">
                  Join 1,200+ Bangladeshi merchants using Jadubot for 24/7 comment replies, inbox sales,
                  and seamless Messenger eCommerce.
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1 text-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    Free forever starter plan
                  </span>
                  <span className="inline-flex items-center gap-1 text-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    Setup in under 5 minutes
                  </span>
                </div>
              </div>

              <div className="shrink-0">
                <a
                  href="https://app.jadubot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#8e2de2]/25 transition-all hover:scale-105"
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

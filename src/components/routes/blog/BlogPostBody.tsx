import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Calendar,
  Clock,
  FileText,
  MessageSquare,
  Bot
} from "lucide-react";
import type { BlogPostMeta } from "@/types/content";
import type { BlogHeading, BlogStats } from "@/lib/content/blog-utils";
import { formatBlogDate } from "@/lib/content/blog-utils";
import { CALENDLY_DEMO_URL } from "@/config/site";
import { TableOfContents } from "./TableOfContents";
import { BlogShareButtons } from "./BlogShareButtons";
import { RelatedPosts } from "./RelatedPosts";
import { PopIn } from "@/components/animations";

interface BlogPostBodyProps {
  htmlContent: string;
  headings: BlogHeading[];
  stats: BlogStats;
  meta: BlogPostMeta;
  relatedPosts: BlogPostMeta[];
}

export function BlogPostBody({
  htmlContent,
  headings,
  stats,
  meta,
  relatedPosts
}: BlogPostBodyProps) {
  const formattedDate = formatBlogDate(meta.date);

  return (
    <div className="relative py-8 md:py-14">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main Grid: Editorial Column (8 cols) + Sticky Sidebar (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          {/* Main Article Content */}
          <main className="lg:col-span-8 min-w-0">
            {/* Mobile TOC */}
            <TableOfContents headings={headings} />

            {/* Rendered HTML Article Body */}
            <article
              id="article-body"
              className="article-prose max-w-[68ch]"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* In-Article Mid/End Value Callout */}
            <PopIn delay={0.05}>
              <section
                className="my-14 rounded-2xl border border-[#0172ff]/30 bg-gradient-to-b from-[#0e1626] to-[#0a0e1a] p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden"
                aria-label="Jadubot Automation Callout"
              >
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#0172ff]/10 blur-3xl"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38bdf8]">
                    <Sparkles className="h-3.5 w-3.5 text-[#38bdf8]" />
                    Grow your business with automation
                  </span>

                  <h3 className="mt-2.5 text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    Never miss another customer comment or late-night message
                  </h3>

                  <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-xl">
                    Over 1,200+ Bangladeshi F-commerce brands and businesses use Jadubot to auto-reply to comments, send instant Messenger quotes, and close orders 24/7.
                  </p>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>Free starter plan included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>Instant Facebook &amp; Instagram sync</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>Comment-to-inbox auto responder</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>Setup completed in 5 minutes</span>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <a
                      href="https://app.jadubot.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center text-xs font-semibold px-5 py-3 rounded-xl shadow-lg shadow-[#0172ff]/20 hover:scale-[1.02] transition-transform"
                    >
                      <span>Get started free</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>

                    <Link
                      href={CALENDLY_DEMO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-black inline-flex items-center text-xs font-semibold px-5 py-3 rounded-xl hover:text-[#38bdf8] transition-colors"
                    >
                      <span>Book a free 1-on-1 demo</span>
                    </Link>
                  </div>
                </div>
              </section>
            </PopIn>

            {/* Author Profile Box */}
            <PopIn delay={0.1}>
              <div className="mt-12 rounded-2xl border border-white/10 bg-[#0e1422]/60 p-6 sm:p-7 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 rounded-2xl border border-white/10 bg-[#080d16] p-2 flex items-center justify-center">
                    <Image
                      src="/assets/images/shared/jadubot-logo.png"
                      alt="Jadubot"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-white">
                        {meta.author || "Jadubot Editorial Team"}
                      </h4>
                      <span className="rounded-full bg-[#0172ff]/15 px-2 py-0.5 text-[10px] font-medium text-[#38bdf8]">
                        Growth &amp; Tech
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                      Practical automation insights, F-commerce strategies, and customer engagement blueprints published by Jadubot&apos;s product and marketing team in Dhaka, Bangladesh.
                    </p>
                  </div>
                </div>
              </div>
            </PopIn>

            {/* Social Sharing & Feedback Section */}
            <div className="mt-8">
              <BlogShareButtons
                title={meta.title}
                url={`/${meta.slug}/`}
              />
            </div>
          </main>

          {/* Sticky Desktop Sidebar */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
            {/* Article Overview Widget */}
            <PopIn delay={0.05}>
              <div className="rounded-2xl border border-white/10 bg-[#0e1422]/75 p-5 backdrop-blur-md shadow-xl shadow-black/20">
                <h3 className="text-xs font-semibold text-slate-200 pb-3 border-b border-white/5">
                  Article details
                </h3>
                <div className="mt-3.5 space-y-3 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-[#38bdf8]" />
                      Read time
                    </span>
                    <span className="font-semibold text-white">
                      {stats.readTimeMinutes} minutes
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <FileText className="h-3.5 w-3.5 text-[#38bdf8]" />
                      Total words
                    </span>
                    <span className="font-semibold text-white">
                      {stats.words.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-[#38bdf8]" />
                      Published
                    </span>
                    <span className="font-medium text-slate-200">
                      {formattedDate}
                    </span>
                  </div>
                </div>
              </div>
            </PopIn>

            {/* Table of Contents */}
            <TableOfContents headings={headings} />

            {/* Fast Sidebar Setup Widget */}
            <PopIn delay={0.15}>
              <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-b from-[#0e192f]/90 to-[#0c1220]/90 p-5 backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0172ff]/20 text-[#38bdf8]">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">
                      Automate your Facebook Page
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      Free starter plan available
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-slate-300">
                  Set up 24/7 instant replies, comment-to-inbox, and automated order flows today.
                </p>

                <div className="mt-4 space-y-2">
                  <a
                    href="https://app.jadubot.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center text-xs py-2.5 rounded-lg font-semibold flex items-center justify-center gap-1.5 shadow-md shadow-[#0172ff]/20"
                  >
                    <span>Get started free</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>
                  <Link
                    href={CALENDLY_DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center text-xs text-slate-400 hover:text-[#38bdf8] transition-colors py-1.5 font-medium"
                  >
                    Schedule a quick demo
                  </Link>
                </div>
              </div>
            </PopIn>
          </aside>
        </div>

        {/* Continue Reading / Related Guides */}
        <RelatedPosts posts={relatedPosts} />
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Bot,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  TrendingUp
} from "lucide-react";

import type { BlogPostMeta } from "@/types/content";
import { CALENDLY_DEMO_URL } from "@/config/site";

import type { BlogHeading, BlogStats } from "@/lib/content/blog-utils";
import { formatBlogDate } from "@/lib/content/blog-utils";

import { PopIn } from "@/components/animations";

import { BlogShareButtons } from "./BlogShareButtons";
import { RelatedPosts } from "./RelatedPosts";
import { TableOfContents } from "./TableOfContents";

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
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 xl:gap-14">
          {/* Main Article Content */}
          <main className="min-w-0 lg:col-span-8">
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
                className="relative my-14 overflow-hidden rounded-2xl border border-border bg-card p-6 backdrop-blur-sm sm:p-8"
                aria-label="Jadubot Automation Callout"
              >
                <div
                  className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#0172ff]/10 blur-3xl"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38bdf8]">
                    <TrendingUp className="h-3.5 w-3.5 text-[#38bdf8]" />
                    Grow your business with automation
                  </span>

                  <h3 className="mt-2.5 text-xl leading-snug font-bold tracking-tight text-foreground sm:text-2xl">
                    Never miss another customer comment or late-night message
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    Over 1,200+ Bangladeshi F-commerce brands and businesses use Jadubot to
                    auto-reply to comments, send instant Messenger quotes, and close orders 24/7.
                  </p>

                  <div className="mt-5 grid grid-cols-1 gap-2.5 text-xs text-muted-foreground sm:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                      <span>Free starter plan included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                      <span>Instant Facebook &amp; Instagram sync</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                      <span>Comment-to-inbox auto responder</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                      <span>Setup completed in 5 minutes</span>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <a
                      href="https://app.jadubot.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center rounded-xl px-5 py-3 text-xs font-semibold shadow-lg shadow-[#0172ff]/20 transition-transform hover:scale-[1.02]"
                    >
                      <span>Get started free</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>

                    <Link
                      href={CALENDLY_DEMO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-black inline-flex items-center rounded-xl px-5 py-3 text-xs font-semibold transition-colors hover:text-[#38bdf8]"
                    >
                      <span>Book a free 1-on-1 demo</span>
                    </Link>
                  </div>
                </div>
              </section>
            </PopIn>

            {/* Author Profile Box */}
            <PopIn delay={0.1}>
              <div className="mt-12 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm sm:p-7">
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-background p-2">
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
                      <h4 className="text-sm font-bold text-foreground">
                        {meta.author || "Jadubot Editorial Team"}
                      </h4>
                      <span className="rounded-full bg-[#0172ff]/15 px-2 py-0.5 text-[10px] font-medium text-[#38bdf8]">
                        Growth &amp; Tech
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      Practical automation insights, F-commerce strategies, and customer engagement
                      blueprints published by Jadubot&apos;s product and marketing team in Dhaka,
                      Bangladesh.
                    </p>
                  </div>
                </div>
              </div>
            </PopIn>

            {/* Social Sharing & Feedback Section */}
            <div className="mt-8">
              <BlogShareButtons title={meta.title} url={`/${meta.slug}/`} />
            </div>
          </main>

          {/* Sticky Desktop Sidebar */}
          <aside className="sticky top-28 hidden space-y-6 lg:col-span-4 lg:block">
            {/* Article Overview Widget */}
            <PopIn delay={0.05}>
              <div className="rounded-2xl border border-border bg-card/75 p-5 shadow-card backdrop-blur-md">
                <h3 className="border-b border-border/60 pb-3 text-xs font-semibold text-foreground">
                  Article details
                </h3>
                <div className="mt-3.5 space-y-3 text-xs text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="h-3.5 w-3.5 text-[#38bdf8]" />
                      Read time
                    </span>
                    <span className="font-semibold text-foreground">
                      {stats.readTimeMinutes} minutes
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <FileText className="h-3.5 w-3.5 text-[#38bdf8]" />
                      Total words
                    </span>
                    <span className="font-semibold text-foreground">
                      {stats.words.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5 text-[#38bdf8]" />
                      Published
                    </span>
                    <span className="font-medium text-foreground">{formattedDate}</span>
                  </div>
                </div>
              </div>
            </PopIn>

            {/* Table of Contents */}
            <TableOfContents headings={headings} />

            {/* Fast Sidebar Setup Widget */}
            <PopIn delay={0.15}>
              <div className="rounded-2xl border border-primary/20 bg-card p-5 backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0172ff]/20 text-[#38bdf8]">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground">
                      Automate your Facebook Page
                    </h4>
                    <p className="text-[11px] text-muted-foreground">Free starter plan available</p>
                  </div>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Set up 24/7 instant replies, comment-to-inbox, and automated order flows today.
                </p>

                <div className="mt-4 space-y-2">
                  <a
                    href="https://app.jadubot.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex w-full items-center justify-center gap-1.5 rounded-lg py-2.5 text-center text-xs font-semibold shadow-md shadow-[#0172ff]/20"
                  >
                    <span>Get started free</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>
                  <Link
                    href={CALENDLY_DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-1.5 text-center text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
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

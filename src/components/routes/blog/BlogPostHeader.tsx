import Image from "next/image";
import Link from "next/link";

import { ArrowLeft, CalendarBlank as Calendar, CaretRight as ChevronRight, Clock, FileText, User } from "@/components/icons";

import type { BlogPostMeta } from "@/types/content";

import type { BlogStats } from "@/lib/content/blog-utils";
import { formatBlogDate } from "@/lib/content/blog-utils";

import { PopIn } from "@/components/animations";

import { BlogShareButtons } from "./BlogShareButtons";
import { FormattedBlogTitle } from "./FormattedBlogTitle";

interface BlogPostHeaderProps {
  meta: BlogPostMeta;
  stats?: BlogStats;
}

export function BlogPostHeader({ meta, stats }: BlogPostHeaderProps) {
  const formattedDate = formatBlogDate(meta.date);
  const readTime = stats?.readTimeMinutes ?? 5;
  const wordCount = stats?.words;

  // Determine topic label from slug or title
  const getTopicLabel = () => {
    const s = meta.fileSlug.toLowerCase();
    if (s.includes("instagram")) return "Instagram automation";
    if (s.includes("facebook") || s.includes("chatbot")) return "Facebook & Messenger bot";
    if (s.includes("cpa")) return "Marketing automation";
    return "Automation guide";
  };

  return (
    <header className="relative overflow-hidden pt-28 pb-8 md:pt-36 md:pb-12">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -z-10 h-96 w-full max-w-5xl -translate-x-1/2 opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(1,114,255,0.4) 0%, rgba(56,189,248,0.15) 50%, transparent 80%)"
        }}
        aria-hidden="true"
      />

      <PopIn className="container mx-auto max-w-5xl px-4 sm:px-6">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground"
        >
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-muted-foreground/60" />
          <Link href="/blog/" className="transition-colors hover:text-foreground">
            Blog
          </Link>
          <ChevronRight className="h-3 w-3 text-muted-foreground/60" />
          <span className="line-clamp-1 max-w-xs text-foreground/80 sm:max-w-md">{meta.title}</span>
        </nav>

        {/* Top bar with back button & category pill */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to articles</span>
          </Link>

          <span className="inline-flex items-center rounded-full border border-[#0172ff]/30 bg-[#0172ff]/10 px-3 py-1 text-xs font-medium text-[#38bdf8]">
            {getTopicLabel()}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-heading text-2xl leading-[1.25] font-bold tracking-tight [text-wrap:balance] text-foreground sm:text-3xl md:text-4xl lg:text-[42px]">
          <FormattedBlogTitle title={meta.title} />
        </h1>

        {/* Lead excerpt if present */}
        {meta.excerpt && (
          <p className="mt-4 text-base leading-relaxed font-normal text-muted-foreground sm:text-lg">
            {meta.excerpt}
          </p>
        )}

        {/* Metadata & Quick Share Bar */}
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-[#0052cc] to-[#0172ff] text-xs font-bold text-white">
                <User className="h-3.5 w-3.5" />
              </div>
              <span className="font-medium text-foreground">
                {meta.author || "Jadubot Editorial"}
              </span>
            </div>

            <span className="hidden text-muted-foreground/40 sm:inline">•</span>

            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
              {formattedDate}
            </span>

            <span className="hidden text-muted-foreground/40 sm:inline">•</span>

            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <Clock className="h-3.5 w-3.5 text-[#38bdf8]" />
              {readTime} min read
            </span>

            {wordCount && (
              <>
                <span className="hidden text-muted-foreground/40 sm:inline">•</span>
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <FileText className="h-3.5 w-3.5" />
                  {wordCount.toLocaleString()} words
                </span>
              </>
            )}
          </div>

          <BlogShareButtons title={meta.title} url={`/${meta.slug}/`} compact />
        </div>

        {/* Featured Image */}
        <div className="shadow-elevated relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-card">
          <Image
            src={meta.featuredImage || "/assets/images/shared/jadubot-logo.png"}
            alt={meta.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1000px"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-border/40 ring-inset" />
        </div>
      </PopIn>
    </header>
  );
}

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Clock, FileText, ChevronRight } from "lucide-react";
import type { BlogPostMeta } from "@/types/content";
import type { BlogStats } from "@/lib/content/blog-utils";
import { formatBlogDate } from "@/lib/content/blog-utils";
import { BlogShareButtons } from "./BlogShareButtons";
import { FormattedBlogTitle } from "./FormattedBlogTitle";
import { PopIn } from "@/components/animations";

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
    <header className="relative pt-28 pb-8 md:pt-36 md:pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 -z-10 h-96 w-full max-w-5xl opacity-25 blur-3xl"
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
          className="flex items-center gap-1.5 text-xs text-slate-400 mb-6 flex-wrap"
        >
          <Link
            href="/"
            className="transition-colors hover:text-white"
          >
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-600" />
          <Link
            href="/blog/"
            className="transition-colors hover:text-white"
          >
            Blog
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-600" />
          <span className="text-slate-300 line-clamp-1 max-w-xs sm:max-w-md">
            {meta.title}
          </span>
        </nav>

        {/* Top bar with back button & category pill */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 transition-colors hover:text-[#38bdf8]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to articles</span>
          </Link>

          <span className="inline-flex items-center rounded-full border border-[#0172ff]/30 bg-[#0172ff]/10 px-3 py-1 text-xs font-medium text-[#38bdf8]">
            {getTopicLabel()}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-[1.25] [text-wrap:balance]">
          <FormattedBlogTitle title={meta.title} />
        </h1>

        {/* Lead excerpt if present */}
        {meta.excerpt && (
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300/90 font-normal">
            {meta.excerpt}
          </p>
        )}

        {/* Metadata & Quick Share Bar */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-[#0052cc] to-[#0172ff] text-white font-bold text-xs">
                <User className="h-3.5 w-3.5" />
              </div>
              <span className="font-medium text-slate-200">
                {meta.author || "Jadubot Editorial"}
              </span>
            </div>

            <span className="hidden sm:inline text-slate-600">•</span>

            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-slate-400" />
              {formattedDate}
            </span>

            <span className="hidden sm:inline text-slate-600">•</span>

            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <Clock className="h-3.5 w-3.5 text-[#38bdf8]" />
              {readTime} min read
            </span>

            {wordCount && (
              <>
                <span className="hidden sm:inline text-slate-600">•</span>
                <span className="inline-flex items-center gap-1.5 text-slate-400">
                  <FileText className="h-3.5 w-3.5" />
                  {wordCount.toLocaleString()} words
                </span>
              </>
            )}
          </div>

          <BlogShareButtons
            title={meta.title}
            url={`/${meta.slug}/`}
            compact
          />
        </div>

        {/* Featured Image */}
        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#070b13] shadow-2xl shadow-black/50">
          <Image
            src={meta.featuredImage || "/assets/images/shared/jadubot-logo.png"}
            alt={meta.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1000px"
            className="object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
        </div>
      </PopIn>
    </header>
  );
}

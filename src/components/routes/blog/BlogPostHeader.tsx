import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import type { BlogPostMeta } from "@/types/content";

interface BlogPostHeaderProps {
  meta: BlogPostMeta;
}

export function BlogPostHeader({ meta }: BlogPostHeaderProps) {
  const formattedDate = new Date(meta.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <header className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
      <div className="hero-gradient pointer-events-none absolute inset-0 -z-10" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl">
          {/* Back button */}
          <Link
            href="/blog/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-brand-orange mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Articles
          </Link>

          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 font-medium text-brand-orange">
              <Calendar className="h-3 w-3" />
              {formattedDate}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" />
              {meta.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              5 min read
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-[1.2]">
            {meta.title}
          </h1>

          {/* Featured Image */}
          <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-surface/60 shadow-2xl">
            <Image
              src={meta.featuredImage || "/assets/images/shared/jadubot-logo.png"}
              alt={meta.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

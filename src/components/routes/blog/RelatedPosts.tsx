import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import type { BlogPostMeta } from "@/types/content";
import { formatBlogDate } from "@/lib/content/blog-utils";
import { PopIn } from "@/components/animations";

interface RelatedPostsProps {
  posts: BlogPostMeta[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="mt-20 pt-16 border-t border-white/10" aria-labelledby="related-posts-heading">
      <PopIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38bdf8]">
            <BookOpen className="h-3.5 w-3.5" />
            Continue reading
          </span>
          <h2 id="related-posts-heading" className="mt-2 text-2xl font-bold text-white tracking-tight">
            Related articles and guides
          </h2>
        </div>
        <Link
          href="/blog/"
          className="inline-flex items-center text-xs font-semibold text-slate-300 hover:text-[#38bdf8] transition-colors"
        >
          <span>View all articles</span>
          <ArrowRight className="ml-1 h-3.5 w-3.5" />
        </Link>
      </PopIn>

      <PopIn stagger={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => {
          const dateStr = formatBlogDate(post.date);

          return (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0e1422]/80 backdrop-blur-md transition-all duration-300 hover:border-[#0172ff]/40 hover:bg-[#111a2e]/90 hover:shadow-[0_8px_30px_rgba(1,114,255,0.15)]"
            >
              <Link href={`/${post.slug}/`} className="relative aspect-[16/9] w-full overflow-hidden bg-[#070a10]">
                <Image
                  src={post.featuredImage || "/assets/images/shared/jadubot-logo.png"}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1422] via-transparent to-transparent opacity-60" />
              </Link>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-3 text-[11px] text-slate-400">
                  <span className="inline-flex items-center gap-1 text-[#38bdf8]">
                    <Calendar className="h-3 w-3" />
                    {dateStr}
                  </span>
                  <span>•</span>
                  <span>{post.author || "Jadubot"}</span>
                </div>

                <h3 className="mt-2.5 text-sm font-bold text-white line-clamp-2 leading-snug group-hover:text-[#38bdf8] transition-colors">
                  <Link href={`/${post.slug}/`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                <div className="mt-4 pt-3 border-t border-white/5">
                  <Link
                    href={`/${post.slug}/`}
                    className="inline-flex items-center text-xs font-semibold text-[#0172ff] hover:text-[#38bdf8] transition-colors"
                  >
                    <span>Read guide</span>
                    <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </PopIn>
    </section>
  );
}

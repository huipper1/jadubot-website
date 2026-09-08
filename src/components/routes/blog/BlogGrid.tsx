import type { BlogPostMeta } from "@/types/content";
import { PopIn } from "@/components/animations";
import { BlogCard } from "./BlogCard";

interface BlogGridProps {
  posts: BlogPostMeta[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-muted-foreground">No blog posts found.</p>
      </div>
    );
  }

  return (
    <section className="relative py-12 md:py-20 border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <PopIn stagger={0.08} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </PopIn>
      </div>
    </section>
  );
}

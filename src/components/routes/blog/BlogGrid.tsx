"use client";

import { useState, useMemo } from "react";
import { Search, X, SlidersHorizontal, BookOpen } from "lucide-react";
import type { EnrichedBlogPostMeta } from "@/lib/content/blog-utils";
import { BlogCard } from "./BlogCard";
import { BlogFeaturedPost } from "./BlogFeaturedPost";
import { BlogCtaBanner } from "./BlogCtaBanner";
import { PopIn } from "@/components/animations";

interface BlogGridProps {
  posts: EnrichedBlogPostMeta[];
}

const TOPICS = [
  "All",
  "Facebook automation",
  "Instagram DMs",
  "Marketing strategy",
  "Free tools & guides"
];

export function BlogGrid({ posts }: BlogGridProps) {
  const [selectedTopic, setSelectedTopic] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter posts based on selected topic and search query
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesTopic =
        selectedTopic === "All" || post.topic === selectedTopic;

      if (!matchesTopic) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const inTitle = post.title.toLowerCase().includes(q);
      const inExcerpt = (post.excerpt || "").toLowerCase().includes(q);
      const inTopic = (post.topic || "").toLowerCase().includes(q);

      return inTitle || inExcerpt || inTopic;
    });
  }, [posts, selectedTopic, searchQuery]);

  const isDefaultView = selectedTopic === "All" && searchQuery.trim() === "";
  const featuredPost = isDefaultView && filteredPosts.length > 0 ? filteredPosts[0] : null;
  const gridPosts = isDefaultView ? filteredPosts.slice(1) : filteredPosts;

  const handleClearFilters = () => {
    setSelectedTopic("All");
    setSearchQuery("");
  };

  return (
    <section className="relative pb-24" aria-label="Blog articles and guides">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Controls Bar: Search & Topic Filter Pills */}
        <PopIn delay={0.05} className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search guides, tutorials & strategies..."
                className="w-full rounded-xl border border-border bg-card/90 pl-10 pr-10 py-2.5 text-xs sm:text-sm text-foreground placeholder-muted-foreground backdrop-blur-md outline-none transition-all focus:border-[#0172ff] focus:ring-1 focus:ring-[#0172ff]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Results Count Info */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <SlidersHorizontal className="h-3.5 w-3.5 text-muted-foreground" />
              <span>
                Showing <strong className="text-foreground">{filteredPosts.length}</strong> of{" "}
                {posts.length} articles
              </span>
            </div>
          </div>

          {/* Topic Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {TOPICS.map((topic) => {
              const isActive = selectedTopic === topic;
              return (
                <button
                  key={topic}
                  type="button"
                  onClick={() => setSelectedTopic(topic)}
                  className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-all ${isActive
                    ? "bg-[#0172ff] text-white shadow-md shadow-[#0172ff]/25"
                    : "border border-border bg-card/70 text-muted-foreground hover:border-primary/30 hover:bg-card hover:text-foreground"
                    }`}
                >
                  {topic}
                </button>
              );
            })}
          </div>
        </PopIn>

        {/* Featured Story Spotlight (Only on default unfiltered view) */}
        {featuredPost && (
          <PopIn delay={0.1} className="mb-12">
            <BlogFeaturedPost post={featuredPost} />
          </PopIn>
        )}

        {/* Empty State */}
        {filteredPosts.length === 0 ? (
          <PopIn className="my-16 rounded-3xl border border-border bg-card/60 p-12 text-center backdrop-blur-md max-w-xl mx-auto">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0172ff]/15 text-[#38bdf8] mb-4">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground">No matching articles found</h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We couldn&apos;t find any articles matching &ldquo;{searchQuery}&rdquo; under &ldquo;{selectedTopic}&rdquo;.
            </p>
            <button
              type="button"
              onClick={handleClearFilters}
              className="btn-primary mt-6 inline-flex items-center text-xs font-semibold px-4 py-2 rounded-xl"
            >
              Reset all filters
            </button>
          </PopIn>
        ) : (
          /* Articles Grid with staggered animation */
          <PopIn stagger={0.08} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gridPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </PopIn>
        )}

        {/* In-Feed Editorial CTA */}
        <PopIn delay={0.15}>
          <BlogCtaBanner />
        </PopIn>
      </div>
    </section>
  );
}

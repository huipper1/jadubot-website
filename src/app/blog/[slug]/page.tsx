import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  BlogPostHeader,
  BlogPostBody,
  ReadingProgress
} from "@/components/routes/blog";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  parseBlogMarkdown,
  getRelatedBlogPosts
} from "@/lib/content";
import { siteConfig } from "@/config/site";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.fileSlug
  }));
}

export async function generateMetadata({
  params
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Jadubot"
    };
  }

  const imageUrl = post.meta.featuredImage
    ? post.meta.featuredImage.startsWith("http")
      ? post.meta.featuredImage
      : `${siteConfig.url}${post.meta.featuredImage}`
    : `${siteConfig.url}/assets/images/shared/jadubot-logo.png`;

  return {
    title: `${post.meta.title} | Jadubot Blog`,
    description: post.meta.excerpt,
    alternates: {
      canonical: `/blog/${post.meta.fileSlug}/`
    },
    openGraph: {
      title: post.meta.title,
      description: post.meta.excerpt,
      url: `${siteConfig.url}/blog/${post.meta.fileSlug}/`,
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.meta.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.excerpt,
      images: [imageUrl]
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Parse markdown into HTML with section IDs, extract TOC headings, and calculate reading stats
  const { html, headings, stats } = parseBlogMarkdown(post.content);
  const relatedPosts = getRelatedBlogPosts(slug, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteConfig.url
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": `${siteConfig.url}/blog/`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.meta.title,
            "item": `${siteConfig.url}/blog/${post.meta.fileSlug}/`
          }
        ]
      },
      {
        "@type": "BlogPosting",
        "headline": post.meta.title,
        "description": post.meta.excerpt,
        "datePublished": post.meta.date,
        "dateModified": post.meta.date,
        "wordCount": stats.words,
        "timeRequired": `PT${stats.readTimeMinutes}M`,
        "author": {
          "@type": "Person",
          "name": post.meta.author || siteConfig.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jadubot",
          "logo": {
            "@type": "ImageObject",
            "url": `${siteConfig.url}/assets/images/shared/jadubot-logo.png`
          }
        },
        "image": post.meta.featuredImage
          ? `${siteConfig.url}${post.meta.featuredImage}`
          : `${siteConfig.url}/assets/images/shared/jadubot-logo.png`,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `${siteConfig.url}/blog/${post.meta.fileSlug}/`
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingProgress />
      <BlogPostHeader meta={post.meta} stats={stats} />
      <BlogPostBody
        htmlContent={html}
        headings={headings}
        stats={stats}
        meta={post.meta}
        relatedPosts={relatedPosts}
      />
    </>
  );
}

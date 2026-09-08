import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostHeader, BlogPostBody } from "@/components/routes/blog";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/content";
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
      images: [
        {
          url: post.meta.featuredImage || "/assets/images/shared/jadubot-logo.png",
          alt: post.meta.title
        }
      ]
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

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
      <BlogPostHeader meta={post.meta} />
      <BlogPostBody content={post.content} />
    </>
  );
}

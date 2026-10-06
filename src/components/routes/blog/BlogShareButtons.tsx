"use client";

import { useState } from "react";

import { Check, Copy, ShareNetwork as Share2, LinkedinIcon, SiFacebook, SiWhatsapp, SiX } from "@/components/icons";
import { toast } from "sonner";

interface BlogShareButtonsProps {
  title: string;
  url: string;
  className?: string;
  compact?: boolean;
}

export function BlogShareButtons({
  title,
  url,
  className = "",
  compact = false
}: BlogShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const fullUrl =
    typeof window !== "undefined" && !url.startsWith("http")
      ? `${window.location.origin}${url}`
      : url;

  const handleCopyLink = async () => {
    try {
      if (typeof window !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(fullUrl);
      }
      setCopied(true);
      toast.success("Article link copied to clipboard");
      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast.error("Failed to copy link");
    }
  };

  const handleNativeShare = async () => {
    if (typeof window !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title,
          url: fullUrl
        });
      } catch {
        // User cancelled or unsupported
      }
    } else {
      handleCopyLink();
    }
  };

  const shareLinks = [
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
      icon: <SiFacebook color="default" className="h-4 w-4" />
    },
    {
      name: "WhatsApp",
      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} ${fullUrl}`)}`,
      icon: <SiWhatsapp color="default" className="h-4 w-4" />
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
      icon: <LinkedinIcon color="#0A66C2" className="h-4 w-4" />
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`,
      icon: <SiX className="h-4 w-4" />
    }
  ];

  if (compact) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <span className="text-xs font-medium text-muted-foreground">Share:</span>
        <div className="flex items-center gap-1.5">
          {shareLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${link.name}`}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/50 hover:bg-card hover:text-primary"
            >
              {link.icon}
            </a>
          ))}
          <button
            type="button"
            onClick={handleCopyLink}
            aria-label="Copy link"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/50 hover:bg-card hover:text-primary"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-emerald-400" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-4 border-y border-border/60 py-4 ${className}`}
    >
      <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
        <Share2 className="h-4 w-4 text-muted-foreground" />
        <span>Share this guide</span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${link.name}`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:bg-card hover:text-foreground"
          >
            {link.icon}
            <span>{link.name}</span>
          </a>
        ))}

        <button
          type="button"
          onClick={handleCopyLink}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:bg-card hover:text-foreground"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy link</span>
            </>
          )}
        </button>

        {typeof window !== "undefined" && "share" in navigator && (
          <button
            type="button"
            onClick={handleNativeShare}
            className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary sm:hidden"
          >
            <Share2 className="h-3.5 w-3.5" />
            <span>More</span>
          </button>
        )}
      </div>
    </div>
  );
}

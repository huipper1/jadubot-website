"use client";

import { useState } from "react";
import { Copy, Check, Share2 } from "lucide-react";
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
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    {
      name: "WhatsApp",
      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} ${fullUrl}`)}`,
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.031 0C5.394 0 0 5.394 0 12.031c0 2.115.549 4.187 1.597 6.007L0 24l6.146-1.564c1.764.962 3.766 1.47 5.885 1.47 6.637 0 12.031-5.394 12.031-12.031C24.062 5.394 18.668 0 12.031 0zm0 22.016c-1.802 0-3.565-.48-5.111-1.396l-.367-.218-3.799.968.988-3.7-.238-.38a10.02 10.02 0 01-1.536-5.259c0-5.534 4.502-10.036 10.063-10.036 5.534 0 10.036 4.502 10.036 10.036 0 5.561-4.502 10.021-10.036 10.021z" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`,
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    }
  ];

  if (compact) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <span className="text-xs font-medium text-slate-400">Share:</span>
        <div className="flex items-center gap-1.5">
          {shareLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${link.name}`}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-[#0e1422] text-slate-400 transition-colors hover:border-[#0172ff]/50 hover:bg-[#151f33] hover:text-[#38bdf8]"
            >
              {link.icon}
            </a>
          ))}
          <button
            type="button"
            onClick={handleCopyLink}
            aria-label="Copy link"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-[#0e1422] text-slate-400 transition-colors hover:border-[#0172ff]/50 hover:bg-[#151f33] hover:text-[#38bdf8]"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center justify-between gap-4 py-4 border-y border-white/5 ${className}`}>
      <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
        <Share2 className="h-4 w-4 text-slate-400" />
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
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#0e1422] px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-[#0172ff]/50 hover:bg-[#151f33] hover:text-white"
          >
            {link.icon}
            <span>{link.name}</span>
          </a>
        ))}

        <button
          type="button"
          onClick={handleCopyLink}
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#0e1422] px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-[#0172ff]/50 hover:bg-[#151f33] hover:text-white"
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
            className="sm:hidden inline-flex items-center gap-1.5 rounded-lg border border-[#0172ff]/30 bg-[#0172ff]/10 px-3 py-1.5 text-xs font-medium text-[#38bdf8]"
          >
            <Share2 className="h-3.5 w-3.5" />
            <span>More</span>
          </button>
        )}
      </div>
    </div>
  );
}

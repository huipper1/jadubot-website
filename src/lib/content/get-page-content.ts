import fs from "node:fs";
import path from "node:path";
import type { PageContent } from "@/types/content";

export function getPageContent(slug: string): PageContent | null {
  try {
    const filename = slug === "" ? "home.json" : `${slug}.json`;
    const filePath = path.join(process.cwd(), "content", filename);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data) as PageContent;
  } catch (error) {
    console.error(`Error loading page content for ${slug}:`, error);
    return null;
  }
}

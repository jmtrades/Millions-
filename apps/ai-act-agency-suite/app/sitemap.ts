import { cfg } from "../venture.config";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = cfg.domain ? `https://${cfg.domain}` : `https://${cfg.slug}.vercel.app`;
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    ...cfg.seoPages.map((p) => ({ url: `${base}/guides/${p.slug}`, changeFrequency: "weekly" as const, priority: 0.8 })),
  ];
}

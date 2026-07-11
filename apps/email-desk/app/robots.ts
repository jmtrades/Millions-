import { cfg } from "../venture.config";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = cfg.domain ? `https://${cfg.domain}` : `https://${cfg.slug}.vercel.app`;
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${base}/sitemap.xml` };
}

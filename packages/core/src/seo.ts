import type { Metadata } from "next";
import type { VentureConfig } from "./config";

export function ventureMetadata(cfg: VentureConfig): Metadata {
  const url = cfg.domain ? `https://${cfg.domain}` : undefined;
  return {
    title: { default: `${cfg.name} — ${cfg.tagline}`, template: `%s | ${cfg.name}` },
    description: cfg.hero.sub,
    metadataBase: url ? new URL(url) : undefined,
    openGraph: { title: cfg.name, description: cfg.hero.sub, type: "website" },
    robots: { index: true, follow: true },
  };
}

export function pageJsonLd(cfg: VentureConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: cfg.name,
    description: cfg.tagline,
    offers: {
      "@type": "Offer",
      price: (cfg.price / 100).toFixed(2),
      priceCurrency: cfg.currency.toUpperCase(),
      availability: "https://schema.org/InStock",
    },
  };
}

// Tiny markdown-ish renderer for SEO page bodies (## headings, - bullets, paragraphs).
export function mdBlocks(body: string): Array<{ t: "h2" | "li" | "p"; text: string }> {
  const out: Array<{ t: "h2" | "li" | "p"; text: string }> = [];
  for (const block of body.split(/\n\n+/)) {
    const lines = block.split("\n");
    for (const line of lines) {
      if (line.startsWith("## ")) out.push({ t: "h2", text: line.slice(3) });
      else if (line.startsWith("- ")) out.push({ t: "li", text: line.slice(2) });
      else if (line.trim()) out.push({ t: "p", text: line });
    }
  }
  return out;
}

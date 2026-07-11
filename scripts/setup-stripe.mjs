#!/usr/bin/env node
// One-command Stripe bootstrap for the whole portfolio.
// Usage: STRIPE_SECRET_KEY=sk_live_... node scripts/setup-stripe.mjs [--webhooks url1,url2,...]
// Creates one product+price per built venture (idempotent by slug lookup), prints price IDs
// to paste into each venture.config.ts as stripePriceId, and (optionally) registers
// checkout.session.completed webhooks for deployed URLs, printing their signing secrets.
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const key = process.env.STRIPE_SECRET_KEY;
if (!key) {
  console.error("STRIPE_SECRET_KEY missing. Run: STRIPE_SECRET_KEY=sk_... node scripts/setup-stripe.mjs");
  process.exit(1);
}

const api = async (path, params) => {
  const res = await fetch(`https://api.stripe.com/v1/${path}`, {
    method: params ? "POST" : "GET",
    headers: {
      Authorization: `Bearer ${key}`,
      ...(params ? { "Content-Type": "application/x-www-form-urlencoded" } : {}),
    },
    body: params ? new URLSearchParams(params) : undefined,
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`${path}: ${json.error?.message}`);
  return json;
};

// Pull {slug, name, price, currency, tagline} out of each app's venture.config.ts (regex, no TS runtime needed).
const apps = readdirSync(join(process.cwd(), "apps")).filter((d) =>
  existsSync(join(process.cwd(), "apps", d, "venture.config.ts"))
);
const grab = (src, re) => src.match(re)?.[1];
const ventures = apps.map((d) => {
  const src = readFileSync(join(process.cwd(), "apps", d, "venture.config.ts"), "utf8");
  return {
    slug: grab(src, /slug:\s*"([^"]+)"/),
    name: grab(src, /name:\s*"([^"]+)"/),
    price: Number(grab(src, /price:\s*(\d+)/)),
    currency: grab(src, /currency:\s*"([^"]+)"/) ?? "gbp",
    tagline: grab(src, /tagline:\s*"([^"]+)"/) ?? "",
  };
});

console.log(`Found ${ventures.length} ventures.\n`);
const existing = await api("products?limit=100&active=true");
for (const v of ventures) {
  let product = existing.data.find((p) => p.metadata?.venture === v.slug);
  if (!product) {
    product = await api("products", {
      name: v.name,
      description: v.tagline,
      "metadata[venture]": v.slug,
    });
  }
  const prices = await api(`prices?product=${product.id}&active=true&limit=10`);
  let price = prices.data.find((p) => p.unit_amount === v.price && p.currency === v.currency);
  price ??= await api("prices", {
    product: product.id,
    unit_amount: String(v.price),
    currency: v.currency,
  });
  console.log(`${v.slug}\n  stripePriceId: "${price.id}",  // ${v.currency.toUpperCase()} ${(v.price / 100).toFixed(2)}`);
}

const whArg = process.argv.find((a) => a.startsWith("--webhooks"));
if (whArg) {
  const urls = (whArg.split("=")[1] ?? process.argv[process.argv.indexOf(whArg) + 1] ?? "").split(",").filter(Boolean);
  for (const base of urls) {
    const wh = await api("webhook_endpoints", {
      url: `${base.replace(/\/$/, "")}/api/webhook`,
      "enabled_events[]": "checkout.session.completed",
    });
    console.log(`\nwebhook ${wh.url}\n  STRIPE_WEBHOOK_SECRET=${wh.secret}`);
  }
}
console.log("\nDone. Paste each stripePriceId into its venture.config.ts, set env on Vercel, redeploy.");

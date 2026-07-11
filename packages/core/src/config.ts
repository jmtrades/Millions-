import { z } from "zod";

// Single source of truth per venture. Everything on the site renders from this.
export const VentureConfig = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string(),
  tagline: z.string(),
  domain: z.string().optional(), // *.vercel.app until a domain is approved (spend)
  mode: z.enum(["checkout", "paid-waitlist", "waitlist"]),
  currency: z.enum(["gbp", "usd", "eur"]).default("gbp"),
  price: z.number().int().positive(), // pence/cents — main offer
  priceLabel: z.string(), // "£399 one-off", "£499 + £199/mo"
  stripePriceId: z.string().optional(), // set when Stripe product exists; absent → waitlist fallback
  deposit: z.number().int().positive().optional(), // paid-waitlist deposit amount
  guarantee: z.string().optional(),
  deadline: z
    .object({ iso: z.string(), label: z.string() }) // renders countdown + urgency copy
    .optional(),
  hero: z.object({
    headline: z.string(),
    sub: z.string(),
    cta: z.string(),
    badge: z.string().optional(), // e.g. "Citations to primary sources inside"
  }),
  pains: z.array(z.object({ title: z.string(), body: z.string() })).min(3),
  offer: z.object({
    title: z.string(),
    bullets: z.array(z.string()).min(4), // what's inside / what you get
    turnaround: z.string(), // "48h delivery", "7-day sprint"
  }),
  proof: z.array(z.object({ stat: z.string(), source: z.string(), url: z.string() })), // cited claims only
  steps: z.array(z.object({ title: z.string(), body: z.string() })).length(3), // how it works
  faq: z.array(z.object({ q: z.string(), a: z.string() })).min(4),
  compliance: z.string().optional(), // "not legal advice" style footer line — REQUIRED for compliance ventures
  seoPages: z
    .array(
      z.object({
        slug: z.string(),
        title: z.string(),
        description: z.string(),
        // markdown-ish body: paragraphs split on \n\n, "## " headings, "- " bullets
        body: z.string(),
      })
    )
    .length(3),
  theme: z
    .object({ accent: z.string().default("#4f46e5"), dark: z.boolean().default(false) })
    .default({ accent: "#4f46e5", dark: false }),
});
export type VentureConfig = z.infer<typeof VentureConfig>;

export function defineVenture(cfg: VentureConfig): VentureConfig {
  return VentureConfig.parse(cfg);
}

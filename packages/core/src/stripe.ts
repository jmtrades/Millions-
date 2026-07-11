import Stripe from "stripe";
import type { VentureConfig } from "./config";

let client: Stripe | null = null;
export function stripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  client ??= new Stripe(key);
  return client;
}

// Creates a Checkout Session for the venture's main offer (or deposit in paid-waitlist mode).
// Returns null when Stripe isn't configured → caller falls back to waitlist capture.
export async function checkoutUrl(cfg: VentureConfig, origin: string, email?: string) {
  const s = stripe();
  if (!s) return null;
  const amount = cfg.mode === "paid-waitlist" && cfg.deposit ? cfg.deposit : cfg.price;
  const session = await s.checkout.sessions.create({
    mode: "payment",
    customer_email: email || undefined,
    line_items: cfg.stripePriceId
      ? [{ price: cfg.stripePriceId, quantity: 1 }]
      : [
          {
            price_data: {
              currency: cfg.currency,
              unit_amount: amount,
              product_data: {
                name: cfg.mode === "paid-waitlist" ? `${cfg.name} — founding deposit` : cfg.name,
                description: cfg.tagline,
              },
            },
            quantity: 1,
          },
        ],
    success_url: `${origin}/thanks?s={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/?cancelled=1`,
    metadata: { venture: cfg.slug, mode: cfg.mode },
  });
  return session.url;
}

// Webhook verification + normalized order row. Route passes raw body + signature.
export async function orderFromWebhook(rawBody: string, signature: string) {
  const s = stripe();
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!s || !secret) return null;
  const event = await s.webhooks.constructEventAsync(rawBody, signature, secret);
  if (event.type !== "checkout.session.completed") return { event, order: null };
  const cs = event.data.object as Stripe.Checkout.Session;
  return {
    event,
    order: {
      venture_slug: (cs.metadata?.venture as string) ?? "unknown",
      stripe_session_id: cs.id,
      amount: cs.amount_total ?? 0,
      currency: cs.currency ?? "gbp",
      status: cs.payment_status,
      email: cs.customer_details?.email ?? cs.customer_email ?? null,
    },
  };
}

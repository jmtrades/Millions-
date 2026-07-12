# Millions — venture portfolio monorepo

One founder, one repo: an evidence-gated venture factory (Track A) funding one venture-scale bet (Track B).

## State
- **9 apps built, launch-ready** (`apps/`): 8 productized ventures + **Registry** (Track B platform MVP, multi-tenant, RLS-verified).
- **Flagship product shipped** (`products/ai-act-deployer-pack/`): the £399 deliverable, instant delivery on first sale.
- **Discovery CLOSED**: 104 candidates gated across 4 passes, 62 kills, all citation-backed (`evidence/`, `phase0/`).
- **Strategy** (`strategy/`): scale thesis (confirmed 3/3), 90-day plan, investor memo + data-room index, evidence files.
- **Every decision one-liner**: `decisions.md`.

## Launch (the founder's 20 minutes)
1. Reactivate Vercel team billing → deploy each app (`rootDirectory: apps/<slug>`, framework nextjs).
2. `STRIPE_SECRET_KEY=sk_... node scripts/setup-stripe.mjs --webhooks <deployed-urls>` → paste printed `stripePriceId`s into each `venture.config.ts`; set env per `.env.example` on each Vercel project; redeploy.
3. Registry additionally needs `NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Publish `apps/*/marketing/operator-scripts.md` to @theoperator; run `outreach.md` sequences (compliance rules embedded per file).
5. Monday: `node scripts/scoreboard.mjs` — numbers only. 7-day kill gates run from each venture's checkout-live date.

## Factory
`pnpm new-venture <slug> "<Name>"` → fill `venture.config.ts` → build → deploy. Landing, checkout (waitlist-degrading), 3 SEO pages, analytics, email — all config-driven from `packages/core`.

## Rules that keep this alive
Kill gates decide, not moods. Ask before spending. No claims without citations. No sends to the 692K list (PECR — see `evidence/_assumptions/cold-email-2026.md`). Compliance copy never says "certified/guaranteed". Track B (Registry) runs quarterly gates, not 7-day ones — see `strategy/scale-thesis.md`.

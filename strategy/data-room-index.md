# Registry — Data Room Index

**Date:** 2026-07-12 · **Scope:** everything in this repository, mapped to the diligence questions it answers. Paths are repo-root-relative. Nothing here is retouched for fundraising: verdicts, kills, blockers, and security flags appear exactly as they were logged at the time.

**How to read this room.** The repo is itself the primary diligence artifact: an append-only decision log, machine-readable gate verdicts, per-candidate evidence files with citations, and working code. Where a memo claim needs checking, this index points to the artifact that either proves it or shows the honest limit of what we know.

---

## 1. Market and timing

| Artifact | What it is / what it answers |
|---|---|
| `strategy/evidence/comps-and-market.md` | The market file behind memo §4. Vanta/Drata/Secureframe wedge→platform trajectories with ARR and valuation figures; GRC and AI-governance market sizes (34–51% CAGR range); exit-multiple table (9–15x, ~19x leader, underwrite at ~10x); four cross-category pattern confirmations (Avalara, AuditBoard, KnowBe4, Gusto). Every number carries an inline URL. Includes its own honesty ledger of evidence gaps (§ "Evidence gaps flagged"). |
| `strategy/evidence/regulatory-pipeline-2026-2028.md` | The "law writes the roadmap" claim, row by row: 44-row catalog of dated AI-transparency/governance obligations (40 hard-dated), each with jurisdiction, who it binds, penalty, citation, and module mapping (INV/CLS/DIS/MRK/BIA/INC). Status legend separates gate-verified anchors from search-verified and to-confirm rows. Notes cover EU wave structure, US-state archetypes, preemption risk, and a watchlist. |
| `strategy/scale-thesis.md` | The Track B thesis and its 3/3 evidence verdict; why the venture-scale bet runs under different constraints than the cash portfolio; quarterly gate definitions. |
| `strategy/90-day-plan.md` | Timing of the raise inside the 90-day funnel; honest probability ledger (including P(≥£1M from sales alone) ≈ ~0 solo); fork points pre-committed to numbers. |

**Known limits (disclosed, not hidden):** the agency-population variable in the bottom-up TAM is not yet evidence-verified (named in memo §4); `register-whitespace.md` §7 lists its own research limits (search budget, proxy-blocked direct fetches).

## 2. Competition

| Artifact | What it is / what it answers |
|---|---|
| `strategy/evidence/register-whitespace.md` | The competitive scan behind memo §5. Layer-by-layer verdict table (enterprise TAKEN, single-company floor CONTESTED, agency/white-label layer OPEN); named floor entrants with pricing (ActReady €29/mo, Legalithm free-to-~2028, EuroComply, AIComply); DACH DPO-suite near-threats; adjacent threats (EC Service Desk, Vanta/Drata down-market); entrant-velocity timeline (~0 → 5–7 sub-€2k entrants in ~12 months); the sharpest-differentiation definition (auto-generated, white-label registers). |
| `strategy/evidence/comps-and-market.md` §5 | Counter-evidence file: who lost and why (Tugboat Logic absorbed by OneTrust; Secureframe's 3x ARR gap; Laika/Thoropass) — the graveyard rule that defines our execution bar. |
| `evidence/p1-ai-act-transparency-pack.md` | A kill verdict from our own gates: an AI Act offer killed because Vanta sits inside that ICP — competitive intelligence produced by trying to disprove our own ideas. |
| `evidence/m1-aiact-ready-directory.md` | Killed AI-Act directory play (premise wrong) — shows the adjacent shapes we tested and rejected. |
| `decisions.md` (kill entries, 2026-07-10/11) | The full kill narrative with one-line reasons per candidate; pattern log entry ("PATTERN") codifying the 10 recurring kill causes. |

## 3. Product

| Artifact | What it is / what it answers |
|---|---|
| `strategy/register-mvp-spec.md` | The build spec for Registry v1: product shape (agency org → client workspaces → systems → duties → evidence), table design, auth, pages, duty-template seeding from the regulatory catalog, explicit v1 exclusions, and definition of done. |
| `apps/register/` | The built Registry MVP (Next.js 15): marketing landing, dashboard, client/system flows with the deployer-vs-provider stepper, duty tables, evidence log, CSV export, magic-link auth. Build verified green (11/11 pages; see `decisions.md` 2026-07-11 TRACK-B). |
| `products/ai-act-deployer-pack/` | The wedge deliverable customers receive on first sale: 10 files, ~14,500 words — corrected timeline (`01`), deployer-vs-provider decision tree (`02`), EN/DE/FR/ES disclosure copy (`03`), 13-column register + CSV template (`04-*` — the platform schema), marking-readiness checklist (`05`), logging/oversight blueprints (`06`), resale-licensed client audit kit (`07`), licence. Accuracy contract: zero misdated claims, verified file-by-file. |
| `apps/` (8 further apps) | The Track A portfolio: `ai-act-agency-suite` (the wedge storefront), `email-desk`, `mtd-capacity-install`, `geo-delivery-system`, `pay-per-meeting`, `agent-security-audit`, `ai-bill-teardown`, `mtd-landlord-setup`. Demonstrates the venture factory and the wedge-signal instrument described in `strategy/scale-thesis.md`. |
| `packages/core/`, `templates/venture/`, `scripts/new-venture.mjs` | The shared platform (checkout with waitlist degradation, cookieless analytics, SEO/JSON-LD, landing blocks) and the script that scaffolds a new venture — the "9 products in 72 hours" mechanism. |
| `strategy/evidence/regulatory-pipeline-2026-2028.md` | Doubles as the product roadmap: module taxonomy and the 19 dated post-Aug-2026 expansion triggers. |

## 4. Security

| Artifact | What it is / what it answers |
|---|---|
| `supabase/migrations/0002_register.sql` | Registry's data layer: `reg_`-prefixed tables with real per-org RLS chained to `auth.uid()` membership, append-only evidence enforced at both policy and privilege layer, definer trigger locked. Security-reviewed by the lead agent before application (`decisions.md` 2026-07-11 TRACK-B). |
| `supabase/migrations/0003_scoreboard_hardening.sql` | Response to a Supabase advisor ERROR finding: `m_scoreboard` hardened (`security_invoker` + revoke). Shows the advisor loop is acted on, not filed. |
| `supabase/migrations/0001_init.sql` | Portfolio schema and the numbers-only `m_scoreboard` view (the metric source of record referenced in the memo). |
| `decisions.md` — advisor entries (2026-07-11) | Written record: "Supabase security advisors: ZERO findings on reg_ tables"; the 0003 hardening; and the RLS design rationale. |
| `decisions.md` — FLAG entry (2026-07-11) | Integrity exhibit: pre-existing advisor findings in the founder's *separate* legacy app (anon-callable SECURITY DEFINER RPCs, open insert policy) were flagged to the founder rather than silently touched or ignored. |
| `evidence/_assumptions/cold-email-2026.md` | Data-protection posture: the 692K-contact list ruled a PECR/DUAA liability, not an asset; zero reach weight assigned; the £17.5M fine exposure analysis. |

## 5. Process (how decisions are made here)

| Artifact | What it is / what it answers |
|---|---|
| `decisions.md` | The append-only decision log, 2026-07-10 → present: every method choice, gate verdict, correction (including a self-logged pool-arithmetic error), blocker, directive, and standing refusal, timestamped. This is the primary process artifact — read it first. |
| `phase0/verdicts-pass1.json`, `verdicts-pass2.json`, `verdicts-pass3.json` | Machine-readable PASS/KILL verdicts for all 81 gated candidates: dimension scores, saturation, kill reasons with named incumbents. The "62 documented kills" claim resolves here. |
| `phase0/final-20.md` | The converged Phase 0 portfolio with process summary (81 gated → 62 kills → 19 survivors; 99 research agents) — carries its own "SUPERSEDED" banner pointing to the refinement delta (we version verdicts rather than rewrite them). |
| `phase0/refinement-delta.json` | The authoritative current ranking after re-scoring under cash-velocity weights: 1 entrant, 1 further kill, 7 rank moves, formula and entry bar recorded in `_meta`. |
| `phase0/pool-after-pass1.json`, `phase0/pool-current.json`, `phase0/rescore-new-weights.json` | Intermediate pool states and the re-scoring worksheet — the audit trail between verdict files. |
| `phase0/r1-raw/` (6 files), `phase0/r5-raw/` (3 files) | Raw generator output *before* gating — shows candidates as proposed, so kills can be checked against what was actually claimed. |
| `evidence/` (83 files) | One citation-backed evidence file per gated candidate, kills included. The kill files are as load-bearing as the passes: they are the documented reasons this portfolio is what it is. |
| `strategy/90-day-plan.md` — "Standing refusals" | The written refusal list (no token launches, no gambling mechanics, no 692K blast, no fake urgency, no revenue promises beyond the scoreboard). |

## 6. Team and execution record

| Artifact | What it is / what it answers |
|---|---|
| Git history (`git log`, 43 commits, 2026-07-10 → 2026-07-12) | The 72-hour build record behind memo §6: timestamps for Phase 0 scaffold → 81-candidate gauntlet → monorepo → 9 built apps → Registry MVP → strategy docs. One founder directing an agent fleet; the log shows the cadence. |
| `decisions.md` | Doubles as the team-judgment record: where the lead overruled gate agents (with reasons), where agents' errors were caught (Woo cluster stale premise; two mis-totaled verdicts), and what was changed in response (mandatory walk-back checks, structured output schemas). |
| `scripts/new-venture.mjs`, `scripts/setup-stripe.mjs`, `scripts/scoreboard.mjs` | The operational tooling: venture scaffolding, one-command payment bootstrap for launch day, numbers-only scoreboard reader. |
| `strategy/scale-thesis.md` §"Constraint amendments" and `strategy/90-day-plan.md` §"What only the founder can do" | Honest division of labor between founder and machine — including the key-person exposure the memo's risk section addresses. |

## 7. Traction and metrics (send-time)

| Artifact | What it is / what it answers |
|---|---|
| `supabase/migrations/0001_init.sql` — `m_scoreboard` | The single metric source of record. Memo convention: every `[SCOREBOARD: …]` placeholder is filled from this view at send time; nothing is estimated. |
| `scripts/scoreboard.mjs` | The reader that produces the numbers-only weekly report promised in the 90-day plan. |
| `decisions.md` — WAVE-1/BLOCKER/STATE entries | The honest pre-revenue record: 8 ventures + Registry built and registered; deploys blocked externally (Vercel billing 402, Stripe keys absent by design); kill clocks not started until payment capability is live. Pre-revenue is stated, dated, and explained — not obscured. |
| `strategy/90-day-plan.md` | The targets those metrics will be judged against (day-30/60 fork points), fixed in writing before any numbers existed. |

---

## Suggested diligence path

1. `decisions.md` end-to-end (~15 min) — the whole operation in one file.
2. The three evidence files under `strategy/evidence/` — every memo number traces here.
3. `phase0/verdicts-pass*.json` + two or three random kill files in `evidence/` — verify the kill discipline is real.
4. `products/ai-act-deployer-pack/04-compliance-register.md` next to `strategy/register-mvp-spec.md` and `supabase/migrations/0002_register.sql` — watch the wedge artifact become the platform schema.
5. `apps/register/` build + `git log` — confirm the execution-speed claim against timestamps.

*Index maintained alongside `strategy/investor-memo.md`. If an artifact and the memo ever disagree, the artifact wins and the memo gets corrected.*

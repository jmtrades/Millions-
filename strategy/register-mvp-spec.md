# Register MVP — build spec (Track B wedge→platform conversion)
App: `apps/register` (Next.js 15, same monorepo, @millions/core reused where sane). Name: **Registry** — "the AI deployment register your clients' counsel accepts."

## Product shape (v1, ruthlessly minimal)
Multi-tenant register for AGENCIES: one agency org → many client workspaces → many AI systems, each with role classification, duty mapping, and a dated evidence log. The 13-column schema from `products/ai-act-deployer-pack/04-compliance-register.md` is the canonical data model, normalized.

## Tables (new migration `0002_register.sql`, all `reg_` prefixed, REAL per-org RLS via auth.uid())
- `reg_orgs` (id uuid pk, name, owner_uid uuid, created_at)
- `reg_members` (org_id fk, uid uuid, role text default 'member') — RLS anchor: `uid = auth.uid()`
- `reg_clients` (id, org_id fk, name, market text[], created_at)
- `reg_systems` (id, client_id fk, name, vendor_model, role text check in ('deployer','provider','out-of-scope'), classification_basis text, status)
- `reg_duties` (id, system_id fk, jurisdiction, obligation, module text, due_date date, status text check in ('open','in-place','n/a'), source_url)
- `reg_evidence` (id, duty_id fk, note, evidence_url, logged_by uuid, logged_at) — append-only (no update/delete policies)
RLS: every table policy chains to org membership (`exists (select 1 from reg_members m join ... where m.uid = auth.uid())`). No service-role dependence for user paths. Anon: nothing.

## Auth & pages
Supabase Auth magic-link (email OTP). Pages: `/` marketing landing (reuse core blocks; mode waitlist until billing exists); `/app` dashboard (clients grid + duty-status rollup); `/app/clients/[id]` (systems list + add-system flow with the deployer-vs-provider question tree from pack file 02 as an inline stepper); `/app/systems/[id]` (duties table seeded from jurisdiction templates + evidence log); `/app/export/[clientId]` (CSV matching the pack's 13-column template — the artifact counsel accepts).
Duty templates: seed constant `DUTY_TEMPLATES` from the regulatory-pipeline catalog — v1 ships EU Art.50 set (2 Aug 2026), Art.50(2) marking (2 Dec 2026), Illinois HB 3773, NY GBL Art.47; structure extensible per `strategy/evidence/regulatory-pipeline-2026-2028.md` rows.

## v1 exclusions (do not build)
Billing (blocked on Stripe anyway — landing collects waitlist), white-label theming, client-portal logins, PDF export, integrations/API, team roles beyond member/owner, high-risk (Annex III) module.

## Definition of done
`pnpm --filter register build` green; migration applies clean; RLS verified (anon select on every reg_ table returns zero rows; cross-org access impossible by policy); an agency can: sign in → create org → add client → classify a system via the stepper → see seeded duties with dates → log evidence → export CSV. Landing states the honest scope (EU Art.50 + IL/NY at launch; module roadmap = the dated pipeline).

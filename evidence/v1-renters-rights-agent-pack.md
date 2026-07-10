# Renters' Rights Agent Pack
Category: Vertical SaaS | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: Every tenancy, notice and listing in your book compliant with the Renters' Rights Act from day one: bulk AST→periodic-assured conversion letters, a correct Section 8 grounds picker (s21 is gone), advertised-rent/no-bidding and one-month-advance-rent guardrails, and a PRS-database-ready landlord record for every property — so the agency is never the one liable for an unregistered landlord.
- Buyer: Director or branch manager of an independent letting agency in England, 1–3 branches, 50–500 managed properties (not corporate chains with in-house counsel).
- Price: £119/mo per branch; founding £59/mo locked for first 20 agencies.
- Channel to first 10: 30K real-estate agent email list (assumed-UK geography — verify with a 500-address test send first); "Letting Agents & Property Managers UK" Facebook groups; Propertymark-member LinkedIn outreach.
- Timing hypothesis: Renters' Rights Act 2025 came into force 1 May 2026 — s21 abolished, all tenancies converted to periodic; residual s21 court applications close 31 July 2026 (three weeks away); mandatory PRS database rolls out from late 2026 with agents liable for managing properties of unregistered landlords; bidding above advertised rent and >1 month advance rent banned.
- Citations:
  - https://www.gov.uk/government/publications/renters-rights-act-2025-implementation-roadmap/implementing-the-renters-rights-act-2025-our-roadmap-for-reforming-the-private-rented-sector
  - https://blog.goodlord.co/renters-rights-bill-a-letting-agents-guide
  - https://osborneslaw.com/blog/landlords-warned-rent-checklist-updated/
  - https://www.nrla.org.uk/resources/renters-rights
- Notes: Goodlord/Reapit ship RRA features inside full agency suites; wedge is a cheap bolt-on compliance layer for agents who won't switch CRM. Config-driven document generator + checklist engine; v1 <8h.

## R2 Timing Gate
VERDICT: PASS — cluster edge verified and ~10 weeks old; one spec claim unverified.
- VERIFIED (gov.uk roadmap): Phase 1 in force 1 May 2026 — s21 abolished; new and existing tenancies became assured periodic; council investigatory powers 27 Dec 2025; PRS Database rolls out Phase 2 "from late 2026" (agents' database exposure is ahead, not behind). https://www.gov.uk/government/publications/renters-rights-act-2025-implementation-roadmap/implementing-the-renters-rights-act-2025-our-roadmap-for-reforming-the-private-rented-sector
- VERIFIED (gov.uk): info-sheet duty by 31 May 2026, £7,000 fine; continuing breach → further civil penalties up to £40,000. https://www.gov.uk/government/publications/the-renters-rights-act-information-sheet-2026
- UNVERIFIED this pass: "residual s21 court applications close 31 July 2026" — not confirmed against a primary source within search budget; do not lead with it.
- Note: bulk AST→periodic "conversion" happened by operation of law on 1 May; conversion letters are now cleanup, not prevention.

## R3 Saturation Gate
VERDICT: KILL-R3 — saturation 8/10. Head-on with funded incumbents that shipped the exact features, ringed by dedicated RRA point tools, with a free price floor.

| # | Competitor | URL | Note |
|---|---|---|---|
| 1 | Reapit | https://www.reapit.com/press-releases/reapit-launches-new-renters-rights-act-tech-and-training-programme-to-give-agents-clarity-ahead-of-may | Ships bulk group conversion to APTs "in a single action" — v1's headline feature — plus RRA training programme |
| 2 | Goodlord | https://www.goodlord.com/lettings-agent-solutions-goodlord | S13 serving, automated compliance checks/alerts/workflows; RRA agent guide (https://blog.goodlord.co/renters-rights-bill-a-letting-agents-guide) |
| 3 | Alto (Houseful) | https://www.propertyreporter.co.uk/reapit-and-goodlord-partner-to-streamline-tenant-onboarding-under-new-rules.html | Incumbent PMS carrying Goodlord referencing/compliance via integration |
| 4 | Street.co.uk | https://www.propertyreporter.co.uk/reapit-and-goodlord-partner-to-streamline-tenant-onboarding-under-new-rules.html | Incumbent PMS, Goodlord-integrated — the "won't switch CRM" buyer already gets compliance in-suite |
| 5 | Rentalize | https://rentalize.com/renters-rights-act-compliance-software/ | Purpose-built RRA compliance SaaS: bulk info-sheet + evidence receipts, scheduled S13/Form 4A |
| 6 | LetCompliance | https://letcompliance.com/blog/section-13-rent-increase-walkthrough-form-4-2026 | S13/Form 4A tooling and walkthroughs |
| 7 | Lendlord | https://lendlord.io/what-the-renters-rights-act-information-sheet-2026-means-for-landlords | FREE RRA-compliant tenancy agreement generator — price floor £0 vs £119/mo/branch |
| 8 | LetSafe UK | https://letsafeuk.co.uk/information-sheet | Info-sheet duty tool |

The "cheap bolt-on for agents who won't switch CRM" wedge is squeezed from both sides: CRMs added RRA features in-suite (and partnered, Jun 2026), and point tools are free or cheap. 8 > 6 → KILL.

## R4 Red Team
Skipped — candidate killed at R3.

## Proposed Scores
- pain: 7 — legally mandated compliance, £7k–£40k penalties (gov.uk above), but largely already tooled.
- reach0: 3 — 30K list geography UNVERIFIED; FB groups + LinkedIn are manual, no evidenced 100+ qualified buyers in week 1.
- ttfd: 4 — selling software to agencies cold (trust + switching inertia) realistically >30d even at £59/mo founding.
- margin: 9 — pure SaaS.
- timing: 6 — statute dated and fresh, but biggest deadlines (1 May, 31 May) passed; PRS database date not yet fixed (gov.uk roadmap).
- fit: 5 — stack + fast build fit; no distribution asset reaches UK letting agency directors.

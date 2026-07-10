# Renters' Rights Compliance Desk
Category: AI-service arbitrage | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: We convert a letting agency's full tenancy book to Renters' Rights Act-compliant periodic tenancies and keep it compliant continuously — written statement of terms for every new let, Section 13 rent-increase notices, statutory pet-request responses within the deadline window, information-sheet service records, PRS database prep — each document delivered within 48h, so the agency avoids fines up to £7,000 per breach without hiring a compliance officer. ~85% AI-automated (doc generation + statute-mapped checklists), human spot-check on output.
- Buyer: UK letting agency owner/director, independent agency, 2–15 staff, 100–800 managed tenancies.
- Price: £299/mo up to 300 tenancies (+£0.75/tenancy/mo above), plus £499 one-off book-conversion audit. Stripe subscription from landing page, async onboarding (CRM export upload).
- Channel to first 10: 30K real-estate agent email list — ASSUMES it contains a UK letting-agent segment (verify by filtering .co.uk domains / UK city names before relying on it). Angle: "The RRA went live 1 May. Here is the 9-document pack every managed tenancy now needs — and the £7,000 fine attached to the one most agents are missing." Fallback if list is US-only: LettingAgentTalk forum + Propertymark-member LinkedIn outreach (manual, £0).
- Timing hypothesis: Renters' Rights Act first commencement 1 May 2026 — Section 21 abolished, every AST converted to a periodic tenancy, new written-statement-of-terms duty, information-sheet duty (31 May 2026 deadline, fines to £7,000), with agents' tenancy-renewal fee income killed at the same moment their admin load spiked. This service could not exist before royal assent (Oct 2025) and had no urgency before 1 May 2026 commencement.
- Citations:
  - https://www.gov.uk/government/publications/the-renters-rights-act-information-sheet-2026
  - https://www.howespercival.com/articles/renters-rights-act-what-landlords-need-to-know-ahead-of-1-may-2026/
  - https://blog.goodlord.co/renters-rights-bill-a-letting-agents-guide
  - https://theindependentlandlord.com/renters-rights-checklists/

## R2 Timing Gate
VERDICT: PASS — edge concrete, correct, ~10 weeks old, further dated obligations ahead. Staleness flagged.
- VERIFIED (gov.uk): RRA Phase 1 in force 1 May 2026; s21 abolished; new AND existing tenancies became assured periodic tenancies. https://www.gov.uk/government/publications/renters-rights-act-2025-implementation-roadmap/implementing-the-renters-rights-act-2025-our-roadmap-for-reforming-the-private-rented-sector
- VERIFIED (gov.uk): Information Sheet duty — exact GOV.UK PDF, served by 31 May 2026, fine up to £7,000; breach continuing >28 days after a penalty can draw further civil penalties up to £40,000. https://www.gov.uk/government/publications/the-renters-rights-act-information-sheet-2026 (sector confirmation: https://www.mondaq.com/uk/landlord-tenant-leases/1788300/)
- VERIFIED (gov.uk roadmap, above): council investigatory powers in force 27 Dec 2025; PRS Database + Ombudsman roll out in Phase 2 "from late 2026".
- STALENESS FLAG: today is 10 Jul 2026. The book "converted" by operation of law on 1 May and the 31 May info-sheet deadline passed ~6 weeks ago — the £499 conversion-audit wedge is past its peak. Live residual edge: unremediated breaches, ongoing S13/pet-request duties, PRS database prep.

## R3 Saturation Gate
VERDICT: KILL-R3 — saturation 7/10 (crowded, funded/established players own the job; the buyer's existing CRM ships the headline deliverable as a one-click feature).
No pure done-for-you rival surfaced by name, but a buyer searching "Renters' Rights Act compliance help letting agency" finds the job already owned:

| # | Competitor | URL | Note |
|---|---|---|---|
| 1 | Reapit | https://www.reapit.com/press-releases/reapit-launches-new-renters-rights-act-tech-and-training-programme-to-give-agents-clarity-ahead-of-may | Incumbent CRM: converts "large groups of existing tenancies to APTs in a single action" + RRA training — a1's core deliverable, already paid for |
| 2 | Goodlord | https://www.goodlord.com/lettings-agent-solutions-goodlord | S13 notice serving, automated compliance checks/alerts/workflows; Jun-2026 Reapit partnership (https://www.propertyreporter.co.uk/reapit-and-goodlord-partner-to-streamline-tenant-onboarding-under-new-rules.html) |
| 3 | Rentalize | https://rentalize.com/renters-rights-act-compliance-software/ | Purpose-built "RRA Compliance Software UK 2026": bulk info-sheet service with evidence receipts, scheduled S13 generation |
| 4 | Propertymark | https://www.propertymark.co.uk/membership/knowledge-hub/renters-right-act-2025-toolkit.html | Trade body's FREE member toolkit: template letters, fact sheets, training — most target buyers are members |
| 5 | LetCompliance | https://letcompliance.com/blog/section-13-rent-increase-notice-2026-step-by-step | S13/Form 4A step-by-step tooling and guides |
| 6 | Lendlord | https://lendlord.io/what-the-renters-rights-act-information-sheet-2026-means-for-landlords | FREE RRA-compliant tenancy agreement generator + info-sheet service guidance |
| 7 | LetSafe UK | https://letsafeuk.co.uk/information-sheet | Info-sheet compliance tool |
| 8 | Law firms (e.g. Wannops LLP) | https://wannops.com/renters-rights-act-2025-information-sheet-deadline/ | Insured, regulated RRA compliance advice — the trust benchmark for statutory notices |

Not a graveyard (all live, funded/established). A DFY wrapper competes against features the agency already has plus free trade-body coverage. 7 > 6 → KILL.

## R4 Red Team
Skipped — candidate killed at R3.

## Proposed Scores
- pain: 7 — legally mandated duties with £7k–£40k penalties (https://www.gov.uk/government/publications/the-renters-rights-act-information-sheet-2026), but buyer already holds coping tools (CRM + Propertymark).
- reach0: 3 — 30K list provenance UNVERIFIED (US-realtor risk = dead channel); fallback LettingAgentTalk/LinkedIn is manual with no evidence of 100+ qualified buyers in a week.
- ttfd: 5 — £499 audit closable in 30–60d cold; compliance trust cycle for a no-name solo is slow.
- margin: 7 — 85% AI-automated with human spot-check ≈ 75–90%.
- timing: 6 — dated statute is real, but the 1 May / 31 May peaks passed; PRS database "late 2026" not yet a fixed date (gov.uk roadmap).
- fit: 5 — stack fits doc-gen; no existing distribution asset reaches UK agency owners (@theoperator/Skool = AI niche; 30K list unverified).

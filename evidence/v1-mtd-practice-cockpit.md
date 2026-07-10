# MTD Practice Cockpit
Category: Vertical SaaS | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: Your entire Self Assessment client book triaged into MTD cohorts (mandated Apr 2026 / Apr 2027 / Apr 2028 / exempt) with automated, practice-branded chase sequences — every mandated client on compatible software and authorised before their quarterly deadline, with a partner dashboard that proves readiness % at a glance. Outcome: zero clients missing the 7 Aug 2026 submission because of onboarding lag.
- Buyer: Owner of a UK accountancy or bookkeeping practice, 1–10 staff, 100–1,000 Self Assessment clients (ICB / AAT / ACCA sole practitioners and small firms).
- Price: £99/mo per practice; founding £49/mo locked for first 25 practices.
- Channel to first 10: AccountingWEB "Any Answers" MTD threads (highest-intent watering hole); ICB members' Facebook group and AAT community forum; 692K cold list — UK accountant/bookkeeper segment.
- Timing hypothesis: MTD ITSA live since 6 April 2026 (>£50k); first client quarterly updates due 7 August 2026 across every mandated client simultaneously — practices are drowning in cohort tracking in spreadsheets. Confirmed April 2027 extension to >£30k means practices must re-triage the whole book again within 9 months.
- Citations:
  - https://www.autoentry.com/news-insights/mtd-for-income-tax-self-assessment-what-are-the-thresholds
  - https://www.bishopfleming.co.uk/insights/making-tax-digital-change-how-landlords-and-sole-traders-record-their-income
  - https://gocardless.com/blog/mtd-itsa-sole-traders-landlords-2026-guide
- Notes: hypothesis: existing practice-management tools (BrightManager, Karbon) do workflow but not MTD-cohort triage + client-facing chase with readiness evidence. Pure config-driven CRUD + email sequences on the locked stack; buildable v1 <8h.

## R2 Timing Gate
Verdict: PASS (assessed 2026-07-10).
- MTD IT mandatory from 6 Apr 2026 for qualifying income >£50,000 — gov.uk primary: https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax and https://www.gov.uk/government/news/one-year-until-making-tax-digital-for-income-tax-launches
- First quarterly update due 7 Aug 2026 (28 days from today); ~864,000 individuals in wave 1: https://www.freeagent.com/blog/mtd-for-income-tax-first-year-explained/ ; https://www.step.org/industry-news/making-tax-digital-now-imminent-traders-and-landlords
- Re-triage thesis verified: >£30k wave 6 Apr 2027, >£20k wave 6 Apr 2028 (~970,000 more): https://www.gov.uk/government/publications/making-tax-digital-for-income-tax-self-assessment-reducing-the-mandation-threshold-from-30000-to-20000-from-april-2028/reduction-of-the-mandation-threshold-from-30000-to-20000-from-april-2028
- Caveat: no penalty points for late quarterly updates in year 1 (STEP link above) — "zero clients missing 7 Aug" is a softer promise than the copy implies.
Edge concrete, dated, current → passed.

## R3 Saturation Gate
Verdict: KILL-R3 — saturation 7/10. The exact job (SA book triaged by MTD cohort + automated branded chasing + partner readiness dashboard) is a shipped feature set of established UK practice-management platforms, and the giants give MTD readiness tooling away free to keep practices in their suites. The R1 hypothesis ("BrightManager does workflow but not MTD triage/chase") is FALSE: BrightManager markets automated record-chasing (email+SMS) mapped to MTD for Income Tax deadlines, onboarding and dashboards as core features.

| # | Competitor | URL | Note |
|---|-----------|-----|------|
| 1 | BrightManager (Bright, ex-AccountancyManager) | https://brightsg.com/brightmanager-accounting-practice-management-software/ | Automated client record-chasing via email+text, onboarding, deadline tracking mapped to MTD IT, analytics dashboard — direct incumbent |
| 2 | Capium | https://linkmybooks.com/blog/practice-management-softwares-for-uk-accountants | All-in-one MTD-compliant cloud practice suite with direct HMRC integration, unlimited users |
| 3 | TaxNav | https://www.accountingweb.co.uk/community/industry-insights/what-accountex-2026-revealed-about-making-tax-digital-it-readiness | HMRC-recognised MTD IT software guiding practices/clients through quarterly workflow (Accountex 2026 coverage) |
| 4 | QuickBooks for Accountants MTD hub | https://quickbooks.intuit.com/uk/making-tax-digital/accountants/ | Free MTD readiness/client-management tooling from a giant — price floor £0 |
| 5 | IRIS (Elements/Senta ecosystem) | https://www.iris.co.uk/blog/accountancy/making-tax-digital-for-accountants-practice-strategy/ | Practice-wide MTD strategy + workflow/chasing products across the largest UK accountancy software estate |
| 6 | UK PM software field (Karbon, Pixie, Senta, TaxCalc, Financial Cents…) | https://contentsnare.com/accounting-practice-management-software-uk/ | 10+ credible tools with automated chasing/workflow — buyer's search lands here, not on a gap |
| 7 | MTD Software / ITSA point tools | https://www.mtdsoftware.org/ | Dedicated MTD ITSA solution layer already forming |
| 8 | ACCA free readiness frameworks | https://www.accaglobal.com/gb/en/technical-activities/uk-tech/in-practice-ezine-archive/In-Practice-archive-2026/April/MTD-for-ITSA-are-your-clients-ready.html | Institutes distribute free client-readiness segmentation guidance/toolkits to members |

Crowded funded/established (7): a £99/mo wedge must displace tools practices already pay for (or get free) during their busiest quarter ever. Score >6 → killed.

## R4 Red Team
Not assessed — killed at R3.

## Proposed Scores
- pain: 6 — cohort tracking in spreadsheets is painful (ACCA/Tax Adviser guidance above) but non-existential; free vendor tools + spreadsheets are the default substitute.
- reach0: 3 — channel list includes the 692K segment (LIABILITY per PECR, sole traders are individual subscribers: https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/electronic-mail-marketing/); AccountingWEB/ICB/AAT forum presence is real but cannot reliably surface 100+ practice owners in week 1 from a standing start.
- ttfd: 5 — buildable fast on the locked stack and self-serve at £49 founding, but selling software to practices 28 days before their first-ever deadline hits a "not now" wall; 30–60d realistic.
- margin: 9 — pure SaaS, trivial AI/email costs.
- timing: 9 — verified 7 Aug 2026 deadline + Apr 2027 re-triage wave (gov.uk); docked 1 for year-1 quarterly penalty waiver.
- fit: 6 — perfect stack fit (Next.js+Supabase+Stripe CRUD+sequences) but zero distribution asset reaching UK practice owners.
Overall: KILL-R3.

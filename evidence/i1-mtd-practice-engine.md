# MTD Practice Engine

Category: Info/community | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: Paid Skool community + automation template stack that lets a small accountancy practice absorb 4x MTD filing volume without hiring. Inside: n8n/Make client record-chasing sequences (email + WhatsApp), quarterly filing pipeline tracker, client triage matrix (£50k vs £30k-wave clients), MTD software choice matrix, client onboarding letter swipe file, MTD fee pricing calculator, monthly build-along calls with the founder.
- Buyer: UK accountancy/bookkeeping practice owner (1–10 staff, 50–300 sole-trader and landlord clients) staring down the first-ever MTD ITSA quarterly deadline on 7 August 2026 with clients who still send shoebox records.
- Price: £99/month (or £799/year).
- Channel to first 10: 692K mixed cold list, UK accountant/bookkeeper segment — subject line: "7 August: your first MTD quarterly deadline × every client at once." Lead magnet: free MTD capacity calculator, upsell into community. Secondary: LinkedIn posts on practice automation.
- Timing hypothesis: MTD for Income Tax went mandatory 6 April 2026 for £50k+ sole traders/landlords; the FIRST quarterly update is due 7 August 2026 (4 weeks away), and all four quarterly updates must be filed before Final Declaration even though penalty points are waived in 2026-27. The £30k wave lands April 2027, so practices must systematize now or drown twice.
- Citations:
  - https://www.keatesandco.com/making-tax-digital-are-you-ready-for-your-first-quarterly-deadline/
  - https://www.fsb.org.uk/resources/article/making-tax-digital-2026-deadlines-rules-and-more-MCQVRXUNIJC5EQRAZBQ7DFJNGYMA
  - https://www.taxassist.co.uk/resources/articles/making-tax-digital-for-income-tax-key-dates-deadlines-and-how-to-stay-compliant
  - https://monzo.com/business-banking/learn/making-tax-digital-timeline

## R2 Timing Gate
Verdict: PASS (assessed 2026-07-10).
- MTD IT mandatory from 6 Apr 2026 for qualifying income >£50,000 — gov.uk primary: https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax and https://www.gov.uk/government/news/one-year-until-making-tax-digital-for-income-tax-launches
- First quarterly update due 7 Aug 2026 — 28 days from today; ~864,000 individuals in wave 1: https://www.freeagent.com/blog/mtd-for-income-tax-first-year-explained/ ; https://www.step.org/industry-news/making-tax-digital-now-imminent-traders-and-landlords
- "£30k wave lands April 2027" verified; >£20k follows 6 Apr 2028 (~970,000 more): https://www.gov.uk/government/publications/making-tax-digital-for-income-tax-self-assessment-reducing-the-mandation-threshold-from-30000-to-20000-from-april-2028/reduction-of-the-mandation-threshold-from-30000-to-20000-from-april-2028
- Spec's penalty framing is honest (points waived 2026-27 for quarterly updates, year-end filing still penalised — STEP link above).
Edge concrete, dated, current → passed.

## R3 Saturation Gate
Verdict: PASS (borderline) — saturation 6/10. Searched as a buyer ("paid membership community UK accountants bookkeepers templates"). Several credible paid communities/memberships serve UK practice owners with templates + calls, and professional bodies bundle template libraries into licences accountants already hold — but the field is fragmented, none is MTD-automation-specific, and there is no dominant AI-native leader. Not a graveyard category (niche paid vertical community, not a generic-GPT/prompt shape).

| # | Competitor | URL | Note |
|---|-----------|-----|------|
| 1 | Bounce! (The Accountants' Mastermind) | https://theaccountantsmastermind.com/bounce/ | Paid UK community for accountancy/bookkeeping practice owners; monthly swipe-and-deploy systems, checklists, blueprints — closest shape match, run by insiders |
| 2 | Accountants Growth Club | https://www.accountantsgrowthclub.co.uk/ | Paid coaching + community for UK firm owners (1:1 coaching, drop-in calls, training) |
| 3 | ICPA | https://www.icpa.org.uk/ | Membership body for sole practitioners/small practices; 16-expert advice lines + resources + discounts |
| 4 | ICB practice templates/community | https://www.bookkeepers.org.uk/Resources/Running-a-Practice/Templates--Downloads | Engagement letters, workflow templates, chase checklists bundled with the practice licence bookkeepers already pay for |
| 5 | IAB community | https://www.iab.org.uk/membership/ | Institute membership community |
| 6 | The Accountants' Mastermind free tier | https://theaccountantsmastermind.com/join-the-community/ | Free community competing at £0 |
| 7 | Free forums/communities at scale | https://financial-cents.com/resources/articles/best-accounting-communities-and-forums/ | 20+ free accounting communities (AccountingWEB, FB groups, Reddit) absorbing the peer-support job |

Several credible but fragmented, no dominant AI-native leader (6). Score ≤6 → passed to R4.

## R4 Red Team
Strongest failure case: Paid communities are sold on trust and peer identity, and the founder has neither with this buyer — he is not an accountant, and none of his existing audiences (@theoperator AI/automation short-form, existing Skool, 30K real-estate list) contain UK practice owners. The named primary channel is the 692K cold list, which is a PECR breach vector: sole-practitioner accountants and bookkeepers are "individual subscribers" requiring prior consent, and publicly available or purchased addresses do not confer it (ICO: https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/electronic-mail-marketing/). Meanwhile insider-run incumbents (Bounce! ships monthly swipe systems; ICPA/ICB bundle templates and expert advice lines into memberships accountants already pay for) occupy the £99/mo slot during the exact 28-day crunch when practice owners have the least slack to join a stranger's new community.
Strongest founder rebuttal: He already operates a Skool community and builds n8n/Make template stacks natively, so product cost is near zero, and the free MTD capacity calculator could seed AccountingWEB/LinkedIn at £0 — but that is capability and a hoped-for funnel, not an existing distribution asset containing this buyer; every compliant path to members starts from zero.
Defensible: FALSE. The failure case rests on searchable facts (ICO PECR rules; Bounce!/ICPA/ICB offerings) and the rebuttal deploys no existing asset that reaches UK accountants. Strong failure case + no credible rebuttal → KILL-R4.

## Proposed Scores
- pain: 6 — 4x filing volume is real (gov.uk above), but a community/templates is a discretionary aid next to software and outsourcing substitutes.
- reach0: 2 — primary channel is the 692K list (LIABILITY; PECR rule ≤3, ICO link above); the capacity-calculator lead magnet itself needs distribution the founder doesn't have in this vertical.
- ttfd: 5 — Skool launch is days, but the first £99 accountant member requires cracking a cold vertical audience; 30–60d realistic.
- margin: 9 — community + templates, >90% gross.
- timing: 9 — verified 7 Aug 2026 deadline and dated Apr 2027 wave (gov.uk); docked 1 for year-1 quarterly penalty waiver.
- fit: 6 — runs a Skool already + native template-building skill (2 assets), but the distribution asset holds the wrong audience, so it caps below 8.
Overall: KILL-R4.

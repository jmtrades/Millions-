# 48-Hour MTD Setup for Landlords

Category: Productized service | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: 48-hour Making Tax Digital Setup: HMRC-recognised software selected and configured for their portfolio, existing spreadsheet records migrated into compliant digital records for 2026–27, bank feed connected, quarterly deadline calendar installed, and their first quarterly update (due 7 Aug 2026) prepared and walked through via async Loom. Fixed checklist deliverable.
- Buyer: Unrepresented UK buy-to-let landlords (2+ properties, >£50k gross rental income) currently on spreadsheets/paper, mandated into MTD from April 2026 and facing their first quarterly filing.
- Price: £299 one-off; optional £49/quarter "we prep your update" retainer.
- Channel to first 10: value posts + answers in Property118 forum, r/uklandlords, and UK landlord Facebook groups ("MTD Q1 deadline is 7 Aug — free 10-point readiness checklist" leading to the paid setup). Independent of the 692K/30K lists.
- Timing hypothesis: MTD for Income Tax went live 6 April 2026 for sole traders/landlords with qualifying income over £50k (quarterly digital submissions via recognised software), and the first quarterly update deadline lands 7 August 2026 — weeks away — while the still-on-spreadsheets cohort has no accountant to hand it to and accountants are at capacity. Setup is templated per software choice; ~80% automatable (record migration scripted); <2 founder-hours/unit.
- Citations: https://www.gov.uk/government/publications/extension-of-making-tax-digital-for-income-tax-self-assessment-to-sole-traders-and-landlords/making-tax-digital-for-income-tax-self-assessment-for-sole-traders-and-landlords , https://theindependentlandlord.com/mtd-landlords/ , https://gocardless.com/blog/mtd-itsa-sole-traders-landlords-2026-guide

## R2 Timing Gate
VERDICT: PASS. (Cluster timing verified once 2026-07-10 — full citation block in v1-mtd-landlord-autopilot.md.) MTD ITSA mandatory since 6 April 2026 for qualifying income >£50k; 860,000+ in scope (https://moneyweek.com/personal-finance/tax/making-tax-digital-accountant-costs); first quarterly update due 7 August 2026 — 28 days out (https://lendlord.io/mtd-landlords-uk-2026-first-deadline); regime + software list on gov.uk (https://www.gov.uk/guidance/choose-the-right-software-for-making-tax-digital-for-income-tax). Caveat: HMRC issues no penalty points for late quarterly updates in 2026/27 (https://www.litrg.org.uk/tax-nic/making-tax-digital-income-tax/when-does-making-tax-digital-start-me) — deadline urgency is real but toothless in year one.

## R3 Saturation Gate
VERDICT: PASS (marginal) — saturation 6/10. Buyer-style search for MTD setup help finds credible but fragmented alternatives: traditional accountants selling setup (typically £100–£300 one-off, bundled into £15–£60/mo MTD packages), full done-for-you accountancy, vendors' free onboarding, and £30/yr bridging that avoids "setup" entirely. No dominant productised 48h-setup player found. Several credible, fragmented, none AI-native → 6.

| # | Competitor | URL | Note |
|---|---|---|---|
| 1 | Treetops Chartered Accountants | https://www.propertyinvestmentproject.co.uk/blog/landlord-making-tax-digital/ | Full DFY: maintains digital records + submits quarterly updates on landlord's behalf |
| 2 | TTCA | https://ttca.co.uk/making-tax-digital-landlords-software-support/ | Accountant-led MTD software selection + support for landlords |
| 3 | Optimise Accountants | https://www.optimiseaccountants.co.uk/best-making-tax-digital-mtd-software-for-landlords/ | Property-tax specialist steering software choice/setup |
| 4 | Generic accountant MTD setup | https://www.accountingfirms.co.uk/blog/making-tax-digital-accountant-fees/ | One-off setup "usually £100–£300", £15–£60/mo ongoing — regulated and often CHEAPER than £299 |
| 5 | NRLA + Taxd | https://rentalbux.com/compare/rentalbux-vs-nrla | Trusted association route: member tools + HMRC-recognised filing |
| 6 | Vendor free onboarding (Hammock, FreeAgent-via-NatWest, Landlord Studio) | https://anna.money/blog/guides/making-tax-digital-software-for-landlords/ | Vendors set customers up free to win the subscription |
| 7 | VitalTax bridging (~£30/yr) | https://mtd.digital/mtd-income-tax/mtd-bridging-software/ | Spreadsheet landlords stay on Excel — removes need for a setup service |
| 8 | Lendlord free migration guide | https://lendlord.io/how-to-transition-to-landlord-software-to-replace-spreadsheets-in-five-steps | Free 5-step DIY spreadsheet-to-software path |

## R4 Red Team
FAILURE CASE: £299 sits at/above what regulated accountants charge for the same one-off MTD setup (£100–£300 per https://www.accountingfirms.co.uk/blog/making-tax-digital-accountant-fees/), while software vendors onboard free (https://anna.money/blog/guides/making-tax-digital-software-for-landlords/), HMRC offers a free tool (https://makingtaxdigital.campaign.gov.uk/making-tax-digital-software/), and £30/yr bridging keeps spreadsheet landlords compliant without any migration (https://mtd.digital/mtd-income-tax/mtd-bridging-software/). The buyer is consumer-protection-sensitive and price-sensitive, asked to hand tax records to an unregulated stranger with zero landlord-space reputation via forums that moderate self-promotion — and the 2026/27 penalty waiver removes the "or else" behind the 7 Aug hook.
REBUTTAL: 860k+ mandated while accountants hit capacity and raise fees 5–10% amid a documented "wave of last-minute demand" (https://moneyweek.com/personal-finance/tax/making-tax-digital-accountant-costs ; https://www.viaante.com/resource-center/blogs/mtd-for-income-tax-accountants-sole-traders-landlords/); accountant setup fees gate into £30–£120/mo packages the explicitly "no accountant" buyer refuses, live Property118 threads show DIY landlords stuck on software choice right now (https://www.property118.com/making-tax-digital-which-software-works-best-for-landlords/), and a templated 48h async setup at <2 founder-hours is deliverable today on the founder's existing automation/Stripe/Loom stack.
DEFENSIBLE: TRUE — demand overflow is cited and the wedge (speed, one-off, no ongoing tie-in) is real; trust/distribution weakness is priced into reach0.
VERDICT: PASS.

## Proposed Scores
- pain: 8 — legally mandated (gov.uk above); waiver softens year-one teeth but the unrepresented cohort still must adopt digital records for 2026-27.
- reach0: 3 — channel explicitly independent of 692K/30K lists, but forums are unowned, moderated, and founder has zero landlord-space presence; 100+ qualified eyeballs in a week is possible via a checklist thread, not reliable.
- ttfd: 7 — nothing to build beyond checklist/Loom templates; sellable within days of first forum thread, first £299 realistically inside 14–30 days given cold audience.
- margin: 8 — near-zero COGS labor service (~£0 tooling), some refund/support drag; caps on founder hours, not margin.
- timing: 9 — hard dated deadline 7 Aug 2026 + Apr 2027 wave (cluster R2).
- fit: 5 — stack fit + automation skill for templated delivery; no landlord distribution asset (@theoperator/Skool are AI-automation audiences; 30K agent list unverified and agents ≠ landlords).

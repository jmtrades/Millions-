# HireBack — off-hire chase and overdue-hire billing for independent tool hire

Category: Boring-industry automation | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: "Every hire comes back or keeps paying." Automated end-of-hire texts ("your breaker is due back tomorrow — extend for £X/day or book return"), automatic continued-hire billing when kit isn't returned, overdue-return escalation (reminder → charge → loss invoice at replacement value), and deposit/damage-charge collection by card link. Buyer vocabulary: hire days billed, kit back in the yard, fewer write-offs.
- Buyer: Owner of an independent UK tool & plant hire shop, 1–3 branches (not HSS/Speedy), counter + phone trade to builders and DIYers, tracking hires in a legacy hire system or paper tickets, losing margin to unreturned/overrun kit nobody chases.
- Price: £179/month per branch, no setup fee (CSV import of live hires; optional API sync).
- Channel to first 10: Hire Association Europe (HAE EHA) member directory — direct outreach to independent members; named Facebook group "Tool Hire UK"; local plant/tool hire firms scraped from Yell's "tool hire" category for one region. Independent of founder lists.
- Timing hypothesis: Commercial Payments Bill (entered Parliament 19 May 2026) makes 8%+base statutory interest mandatory on overdue commercial invoices — including continued-hire charges to trade customers — giving independents new teeth. hypothesis: HAE-reported rise in unreturned kit and equipment theft 2025–26 squeezing independents' margins (verify HAE/EHA industry reports before R2).
- Citations:
  - https://www.gov.uk/government/news/largest-crackdown-on-late-payments-in-over-25-years-as-landmark-bill-enters-parliament
  - https://www.gov.uk/government/publications/commercial-payments-bill-factsheets/commercial-payments-bill-overview
  - https://www.smallbusinesscommissioner.gov.uk/late-payments-research-2/

## Notes
- Off-hire overrun days are near-pure margin (kit already owned and depreciated); recovered days align directly with founder KPI (cash collected).
- No voice needed for v1 — SMS + billing automation; zero AI-receptionist overlap.
- Fulfillment: hire-ticket import to Supabase + scheduled SMS + Stripe charges/links; ≥80% automated after import routine is configured.

## R2 Timing Gate
VERDICT: PASS — SOFT shared edge; secondary hypothesis unverified. Verified 2026-07-10:
- Bill claim TRUE: Commercial Payments Bill [HL] introduced 19 May 2026; 60-day cap, mandatory 8%+base statutory interest (contract-out voided). https://bills.parliament.uk/bills/4128 ; https://www.gov.uk/government/news/largest-crackdown-on-late-payments-in-over-25-years-as-landmark-bill-enters-parliament ; https://www.gov.uk/government/publications/commercial-payments-bill-factsheets/commercial-payments-bill-overview
- HONEST CHARACTERIZATION: Bill ≠ law; in force ~2027 at earliest, amendable (https://www.macfarlanes.com/insights/102n7t5/paid-in-60-days-the-governments-new-commercial-payments-bill-aims-to-crack-down/). Statutory interest on trade customers already available under the 1998 Act today. Soft tailwind only.
- Pain stats TRUE at SME level: ~£26bn owed / avg £66,770 (https://cpa.co.uk/smes-unpaid-invoices-66770-late-payments-uk/ ; https://www.smallbusinesscommissioner.gov.uk/late-payments-research-2/).
- Vertical hypothesis (HAE-reported rise in unreturned kit/theft 2025–26): NOT verified in fresh search — no timing credit. Off-hire overrun leakage itself is credible via category behaviour (hire systems track late items as core function — see R3), but the specific claimed trend stat remains unproven.

## R3 Saturation Gate
VERDICT: KILL-R3 — saturation 7/10. Continued-hire billing until off-hire IS the core billing model of hire management software; the incumbent category is mature, UK-dense, and priced below this offer at the low end (free–£46/mo vs £179/branch).

| Competitor | Shape | Kill evidence | URL |
|---|---|---|---|
| inspHire (Kerridge CS) | UK vertical incumbent, 20+ years, market leader | Invoice management, contracts, asset tracking, mobile, API across Office/Corporate tiers | https://www.insphire.com/ ; https://www.capterra.com/p/86964/inspHire/ |
| Point of Rental / Syrinx365 | UK tool-hire incumbent (Syrinx acquired by PoR) | Off-hire inspection workflow in Workshop app; automated billing | https://www.point-of-rental.com/gb/products/syrinx365/workshop/ ; https://www.point-of-rental.com/ |
| HireHop | Cloud hire software for small independents | £46/mo first user (+£23/user), FREE limited tier; "quickly see late items"; Sage/Xero marketplace | https://www.hirehop.com/ ; https://www.capterra.co.uk/software/155333/hirehop ; https://uk-marketplace.sage.com/en-gb/apps/71314/hirehop-equipment-rental-software |
| Current RMS | Cloud rental software (AV/events skew but same job) | All-in-one rental management, thousands of users | https://www.point-of-rental.com/ (competitor context) ; https://sourceforge.net/software/product/inspHire/alternatives |
| Kerridge CS Rental portfolio | Consolidated incumbent group | Multiple rental products under one group = mature consolidated market | https://www.kerridgecs.com/rental |

Rule applied: incumbent ops software already does the job as a feature → ≥7. The "paper-ticket independents" wedge is non-consumption, not white space — HireHop's free/£46 tier already targets exactly them. Also note internal contradiction: paper-ticket shops cannot "CSV import live hires" without manual data entry, which guts the £0-setup automation claim. n=5 named above.

## R4 Red Team
Skipped — killed at R3 (sequential gates). Unreached risks noted: counter-trade buyers reachable mainly by phone/site visit (Yell scrape = manual calling), and consumer-facing SMS charging may raise separate compliance questions.

## Proposed Scores
| Dim | Score | Rationale |
|---|---|---|
| pain | 6 | Off-hire leakage credible (category builds late-item tracking) but claimed HAE trend stat unverified; pain diffuse across small overruns |
| reach0 | 4 | HAE EHA directory (membership-gated) + one named FB group + Yell scrape (phone-only); buyers are counter/offline |
| ttfd | 3 | Paper-ticket onboarding contradiction + offline trust-building + per-branch billing setup; >60d realistic to first £ |
| margin | 7 | SMS + Stripe automation is cheap to run at £179/branch once data is in |
| timing | 3 | Soft Bill edge; vertical trend hypothesis unverified |
| fit | 6 | Stripe/SMS/Supabase build trivially in founder's stack; zero audience-asset leverage; phone-first sales misfit for solo |

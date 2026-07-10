# HaulPaid — POD-to-payment chaser for small hauliers

Category: Boring-industry automation | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: "Invoices out the day the job lands, POD attached, chased until paid." Automated proof-of-delivery collection from drivers (WhatsApp/SMS photo upload), invoice raised with POD attached same day, escalating chase sequence, dispute flagging within 48h (so customers can't run the "missing POD" delay play), statutory interest applied. Buyer vocabulary: paid on 30-day terms instead of 60–90.
- Buyer: Managing director of a UK haulage firm, 5–50 trucks, RHA member or eligible, general haulage/pallet work on 30–60 day terms where missing PODs are the #1 excuse for non-payment; no credit controller.
- Price: £349/month + £299 setup (driver onboarding + accounting connect).
- Channel to first 10: Road Haulage Association (RHA) member directory outreach; named Facebook groups "UK Haulage & Transport Owner Drivers" and "HGV Owner Operators UK"; Courier Exchange / Returnloads community forums. Independent of founder lists.
- Timing hypothesis: Commercial Payments Bill entered Parliament 19 May 2026 (60-day max terms, mandatory 8%+base interest, audit-committee accountability for big late payers) — hauliers invoice large shippers/3PLs who are exactly the persistent late payers the Bill targets; UK SMEs owed record average £66,770 (Apr 2026, +10% YoY). The "dispute raised late or without sufficient information" fixed-sum right in the Bill is purpose-built leverage for the POD-dispute delay tactic.
- Citations:
  - https://www.gov.uk/government/news/largest-crackdown-on-late-payments-in-over-25-years-as-landmark-bill-enters-parliament
  - https://www.gov.uk/government/publications/commercial-payments-bill-factsheets/commercial-payments-bill-overview
  - https://cpa.co.uk/smes-unpaid-invoices-66770-late-payments-uk/
  - https://www.credit-connect.co.uk/news/late-payments-increase-as-overdue-invoices-grow-by-3/

## Notes
- Differentiated from generic invoice-chasing SaaS (Chaser etc.) by the vertical wedge: POD capture + attachment is the haulage-specific unlock — chasing without the POD gets nowhere.
- hypothesis: haulage insolvency rate elevated 2025–26 making cash-flow tooling urgent (verify with Insolvency Service sector data).
- Fulfillment: WhatsApp/SMS media webhook + Xero/Sage + chase sequences; ≥80% automated after driver onboarding.

## R2 Timing Gate
VERDICT: PASS — strongest R2 of the batch; shared edge still SOFT. Verified 2026-07-10:
- Bill claim TRUE: Commercial Payments Bill [HL] introduced 19 May 2026 (60-day cap, mandatory 8%+base interest, fixed-sum right where "a purchaser raises a dispute late or without sufficient information" — directly relevant to the POD delay play). https://bills.parliament.uk/bills/4128 ; https://www.gov.uk/government/news/largest-crackdown-on-late-payments-in-over-25-years-as-landmark-bill-enters-parliament ; https://www.gov.uk/government/publications/commercial-payments-bill-factsheets/commercial-payments-bill-overview
- HONEST CHARACTERIZATION: Bill ≠ law; "not anticipated to come into force until 2027 and the provisions may be subject to change" (https://www.macfarlanes.com/insights/102n7t5/paid-in-60-days-the-governments-new-commercial-payments-bill-aims-to-crack-down/). Statutory 8%+base already exists under the 1998 Act; the Bill only closes the contract-out loophole. Soft awareness tailwind, not a deadline.
- Pain stats TRUE: SMEs owed ~£26bn / avg £66,770 (+10% YoY Apr 2026) — https://cpa.co.uk/smes-unpaid-invoices-66770-late-payments-uk/ ; https://www.smallbusinesscommissioner.gov.uk/late-payments-research-2/
- Vertical hypothesis VERIFIED STRONGLY: "Missing proof of delivery is a common excuse customers use to delay payment" and messy PODs leave invoices "in limbo for weeks" (https://tauruscollections.com/debt-recovery-for-logistics-and-haulage/ ; https://www.dashdoc.com/en-US/blog/cost-lost-pods-digital-proof-delivery-2026). Road transport: ~90% of firms hit by late payment, nearly half of invoices settled late (https://www.fleetpoint.org/logistics/the-problem-of-late-payments-in-the-uk-haulage-industry/). Insolvency hypothesis TRUE: 2,051 haulage insolvencies 2021–2025 vs 1,068 the prior five years; 7 firms collapsed in Sept 2025 alone (https://www.companydebt.com/transport-haulage-insolvency/ ; https://trans.info/en/uk-haulage-crisis-428175).

## R3 Saturation Gate
VERDICT: KILL-R3 — saturation 8/10. The claimed vertical unlock (POD capture + POD-attached same-day invoicing) is a core, mature feature of the incumbent haulage TMS category — including an SMB tier — and haulage-specific DFY recovery services already exist.

| Competitor | Shape | Kill evidence | URL |
|---|---|---|---|
| Mandata (TMS + Manifest ePOD app) | Vertical incumbent ops software, 7,000+ users UK & Ireland | Drivers capture signatures/photos on phone, geo/time-stamped, auto-matched to job; "email hundreds of invoices with PODs at the press of a button"; Sage/QuickBooks/Xero integrations — this IS the offer's wedge, as a feature | https://www.mandata.co.uk/transport-management-systems/proof-of-delivery-and-invoicing-epod-manifest-app/ ; https://www.mandata.co.uk/proof-of-delivery-invoicing-accounts/ ; https://www.mandata.co.uk/ |
| Mandata Go | Same, for small/growing hauliers (the exact 5–50 truck buyer) | "Designed for small and growing transport businesses... quick time-to-value" | https://www.mandata.co.uk/transport-management-systems/go/ |
| Digital ePOD category (e.g. Dashdoc) | Vertical ePOD software | 2026 content push on cost of lost PODs = active crowded category | https://www.dashdoc.com/en-US/blog/cost-lost-pods-digital-proof-delivery-2026 |
| Controlaccount | Haulage-targeted DFY debt recovery, no-collection-no-fee | Dedicated "Debt Recovery for UK Hauliers" positioning | https://www.controlaccount.com/news/uk-hauliers-face-increasing-financial-challenges |
| Taurus Collections | Logistics-specific DFY recovery incl. POD defences | Page literally titled "Debt Recovery for Logistics and Haulage: PODs, Surcharges, and Common Payment Defences" | https://tauruscollections.com/debt-recovery-for-logistics-and-haulage/ |
| Chaser / Satago | Horizontal chasing SaaS layered on Xero/Sage | £199/mo Chaser; Satago free tier | https://trove.works/best-chaser-alternatives-2026/ ; https://www.satago.com/ |

Rule applied: incumbent ops software already does the job as a feature → score ≥7; plus vertical DFY services exist → 8. n=6 named above.

## R4 Red Team
Skipped — killed at R3 (sequential gates). Unreached risks noted: driver-behaviour change (WhatsApp uploads) from a stranger's service, and regulatory perimeter for third-party collection.

## Proposed Scores
| Dim | Score | Rationale |
|---|---|---|
| pain | 8 | Best-verified pain of batch: POD-delay named as standard excuse, ~half of invoices late, insolvencies ~2x |
| reach0 | 5 | RHA directory + two named FB groups + Courier Exchange forums; independent of founder lists, but hauliers are phone-first |
| ttfd | 4 | £349/mo + £299 setup + driver onboarding + client-comms trust, sold cold; 30–60d realistic |
| margin | 6 | £349/mo decent but driver wrangling + 48h dispute flagging is semi-manual per account |
| timing | 5 | Soft Bill edge, but verified insolvency wave adds genuine urgency now |
| fit | 5 | WhatsApp/Xero automation fits; driver onboarding + phone-first sales is ops-heavy for a solo founder; no audience leverage |

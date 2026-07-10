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

# CleanCollect — invoice chasing for commercial cleaning contractors

Category: Boring-industry automation | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: "Your invoices chased politely and relentlessly until paid" — automated email + SMS sequences in the firm's name, escalating to a phone call on day 7 overdue, statutory late-payment interest (8% + Bank of England base) calculated and added automatically under the new rules, weekly "cash collected" report. Buyer vocabulary: paid in 30, not 75.
- Buyer: Managing director of a UK commercial cleaning contractor, 10–100 cleaners, £250k–£3m turnover, invoicing B2B clients (offices, landlords, facilities managers) monthly on 30-day terms, no dedicated credit controller.
- Price: £199/month flat, up to 200 invoices/month (Xero/QuickBooks connected). No setup fee — connect accounting software, live same day.
- Channel to first 10: Segment founder's 692K cold email list by SIC 81210/81229 (general/other building cleaning); British Cleaning Council member associations and BICSc directory for credibility outreach; named Facebook group "Cleaning Business Owners UK". Hook: free "aged debt scan" showing £ overdue and statutory interest they're entitled to.
- Timing hypothesis: The Commercial Payments Bill entered Parliament 19 May 2026 — the biggest late-payment crackdown in 25+ years (60-day maximum payment terms, mandatory 8%+base statutory interest) — and every trade/accounting publication is telling SMEs to tighten credit control this year. UK SMEs are owed ~£26bn at any time; average firm owed £66,770 (Apr 2026, +10% YoY); 86 staff-hours/year spent chasing.
- Citations:
  - https://www.gov.uk/government/news/largest-crackdown-on-late-payments-in-over-25-years-as-landmark-bill-enters-parliament
  - https://www.gov.uk/government/publications/commercial-payments-bill-factsheets/commercial-payments-bill-overview
  - https://cpa.co.uk/smes-unpaid-invoices-66770-late-payments-uk/
  - https://www.smallbusinesscommissioner.gov.uk/late-payments-research-2/
  - https://www.mayerbrown.com/en/insights/publications/2026/03/uk-government-response-to-late-payment-consultation

## Notes
- Cleaning chosen because labour is paid weekly/monthly while clients pay in 60–90 days — the cash-flow squeeze is existential, and contracts are recurring so invoice volume is predictable (good for flat-fee automation).
- Fulfillment: Xero/QuickBooks API + email/SMS sequences + one templated voice call; ≥80% automated. KPI-aligned: the deliverable literally is cash collected.

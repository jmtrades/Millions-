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

## R2 Timing Gate
VERDICT: PASS — but edge is SOFT and must be re-framed. Verified 2026-07-10:
- Bill claim TRUE: Commercial Payments Bill [HL] introduced to Parliament 19 May 2026; 60-day max payment terms, mandatory 8%+base statutory interest (contract-out loophole closed), fixed sums for late/insufficient disputes, SBC enforcement powers. https://bills.parliament.uk/bills/4128 ; https://www.gov.uk/government/news/largest-crackdown-on-late-payments-in-over-25-years-as-landmark-bill-enters-parliament ; https://www.gov.uk/government/publications/commercial-payments-bill-factsheets/commercial-payments-bill-overview
- HONEST CHARACTERIZATION: a Bill entering Parliament is not law. "It is not anticipated to come into force until 2027 and the provisions may be subject to change during the Parliamentary process." https://www.macfarlanes.com/insights/102n7t5/paid-in-60-days-the-governments-new-commercial-payments-bill-aims-to-crack-down/ ; https://lordslibrary.parliament.uk/research-briefings/lln-2026-0028/ — Also note: statutory 8%+base interest ALREADY exists (Late Payment of Commercial Debts (Interest) Act 1998); the Bill only voids lower contractual rates (gov overview: "closes the longstanding loophole"). So "under the new rules" framing overstates; interest auto-calc is a today-feature, not a Bill-gated one. Timing = awareness tailwind, not a deadline.
- Pain stats TRUE: SMEs owed ~£26bn at any time; avg £66,770/firm (Apr 2026, +10% YoY); avg delay 23.4 days beyond terms; 86 staff-hours/yr chasing; 38 closures/day linked to cashflow. https://cpa.co.uk/smes-unpaid-invoices-66770-late-payments-uk/ ; https://www.smallbusinesscommissioner.gov.uk/late-payments-research-2/ ; https://www.smeweb.com/smes-owed-an-average-66770-in-unpaid-invoices-as-firms-delay-payments-to-preserve-cashflow/
- Vertical hypothesis: NO cleaning-specific evidence surfaced in fresh search — pain verified only at generic SME/contractor level ("waiting 60, 90, or 120 days... the difference between survival and closure" — https://www.farrer.co.uk/news-and-insights/the-governments-late-payment-reforms-a-practical-guide-for-businesses/). Not wrong, but the cleaning wedge is cosmetic: this is a horizontal offer wearing a cleaning badge, which matters at R3.

## R3 Saturation Gate
VERDICT: KILL-R3 — saturation 8/10. Both shapes are already served: horizontal chasing SaaS at the IDENTICAL price point, and the DFY "in your name incl. phone calls" shape offered by the category leader itself plus an established agency industry.

| Competitor | Shape | Kill evidence | URL |
|---|---|---|---|
| Chaser | Horizontal chasing SaaS, £199/mo for <£4m turnover — same price as this offer | Email/SMS/escalation on Xero/QB/Sage; "54+ days sooner" | https://trove.works/best-chaser-alternatives-2026/ ; https://www.capterra.co.uk/software/157101/chaser |
| Chaser "Care" | DFY outsourced credit control | Human specialist "chasing debtors, making phone calls... will contact debtors on your behalf, in your organization's tone and brand voice" — erases the day-7-call + in-your-name differentiator | https://www.chaserhq.com/features/outsourced-credit-control |
| Chaser Debt Collections | Escalation to collections | "Customer friendly debt recovery" | https://www.chaserhq.com/debt-collections |
| Satago | Horizontal SaaS | FREE standard plan chasing up to 5,000 invoices/mo (10 users) + Experian credit data — free undercuts £199 | https://www.satago.com/ ; https://www.getapp.co.uk/software/102553/satago |
| DebtChaserPro | UK DFY invoice-chasing service | "Stop chasing invoices. Start getting paid." | https://debtchaserpro.co.uk/ |
| Taurus Collections | UK commercial debt recovery agency, SME-focused | Publishing on the same Bill as its hook | https://tauruscollections.com/tougher-late-payment-rules-for-smes/ |
| Controlaccount | No-collection-no-fee commercial recovery agency | | https://www.controlaccount.com/news/uk-hauliers-face-increasing-financial-challenges |
| CPA (Credit Protection Association) | Long-established UK late-payment recovery service | | https://cpa.co.uk/smes-unpaid-invoices-66770-late-payments-uk/ |
| Xero built-in invoice reminders | Free incumbent-stack feature | | https://trove.works/best-invoice-chasing-software-xero-users/ |

Category density confirmed by comparison listicles ("6 Best Credit Control Software for UK SMEs in 2026" — https://accounting.events/reviews/best-credit-control-software-uk/). Cleaning invoices are simple recurring monthly B2B invoices — horizontal tools serve the vertical with zero gap, so no vertical-specific competitor is even needed to reach saturation. n=9 named above.

## R4 Red Team
Skipped — killed at R3 (sequential gates). Noted for the record: the "chasing in your name" trust barrier and UK debt-collection regulatory perimeter were not reached.

## Proposed Scores
| Dim | Score | Rationale |
|---|---|---|
| pain | 7 | Severe, standing, verified (£26bn / £66,770 avg) — but generic, no cleaning-specific aggravator found |
| reach0 | 3 | Primary week-1 volume channel is the 692K cold list → LIABILITY downgrade applied; BCC/BICSc are credibility-only, one FB group named |
| ttfd | 4 | Trust-heavy (accounting access + client comms in their name) sold cold by a no-brand stranger; realistic 30–60d |
| margin | 7 | ~90% gross at £199 flat, but human day-7 calls cap automation as accounts stack |
| timing | 4 | Bill verified but soft (force ~2027, amendable); statutory interest already exists under 1998 Act |
| fit | 6 | Xero+SMS+Stripe automation is squarely in founder's stack; zero leverage from any audience asset |

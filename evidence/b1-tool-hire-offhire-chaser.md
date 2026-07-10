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

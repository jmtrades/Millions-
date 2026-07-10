# Companies House IDV Chaser
Category: Vertical SaaS | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: No client director or PSC misses their identity-verification date: import your client list (or pull from the Companies House API), auto-map every director/PSC to their real deadline (first confirmation statement after 18 Nov 2025 — not the 18 Nov 2026 backstop most assume), send practice-branded chase sequences with GOV.UK One Login instructions, log personal codes as evidence, and dashboard the stragglers. Outcome: zero rejected filings and no client struck-off risk on your watch.
- Buyer: Partner at a UK accountancy / company-secretarial firm registered (or registering) as an ACSP, 50–500 limited-company clients, currently tracking IDV in a spreadsheet.
- Price: £69/mo per firm (up to 250 companies); founding £39/mo for first 30 firms.
- Channel to first 10: 692K cold list — UK accountant segment; AccountingWEB identity-verification threads; ICAEW ACSP guidance discussions; LinkedIn company-secretarial groups.
- Timing hypothesis: ECCTA rollout: existing directors must verify identity at their company's first confirmation statement after 18 Nov 2025, with the hard backstop of 18 November 2026 — so deadlines are rolling through right now, peaking over the next 4 months. From spring 2026 any third-party agent filing at Companies House must be a registered ACSP; PSC verification runs on the same window. Sanctions include rejected filings, civil penalties and prosecution.
- Citations:
  - https://oneid.uk/news-and-events/how-to-verify-a-company-directors-identity-before-the-18-november-2026-deadline-and-how-to-choose-a-provider
  - https://www.icaew.com/regulation/aml-supervision/aml-resources/acsp-and-id-verification
  - https://companieshouse.blog.gov.uk/2025/10/16/making-identity-verification-simple-secure-and-trusted/
  - https://www.nicholassolicitors.com/blog/companies-house-verification-2026-and-acsp-compliance
- Notes: Pure deadline-mapping + chase-sequence CRUD on the Companies House public API; config-driven, v1 <8h. hypothesis: practice-management suites haven't shipped per-director IDV deadline tracking, and 6-figure-client firms are doing this manually. Second accountant-buyer candidate (pairs with v1-mtd-practice-cockpit; max 2 per buyer respected).

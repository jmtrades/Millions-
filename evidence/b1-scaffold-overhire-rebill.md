# ScaffBill — over-hire week recovery for scaffolding contractors

Category: Boring-industry automation | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: "Bill every extra week your scaffold stands." Tracks each job's agreed hire period from the quote/contract; when a scaffold passes its initial hire term, automatically raises and sends the weekly over-hire invoice (contractually agreed rate), notifies the client "scaffold still standing — extend or book dismantle," and chases payment. Also chases sent quotes at 48h/7d. Buyer vocabulary: extra hire weeks billed, quotes followed up, nothing left on the table.
- Buyer: Owner or contracts manager of a UK scaffolding contractor, 5–50 operatives, domestic + commercial mix, standard terms of X weeks initial hire then weekly re-hire — where over-hire billing is routinely forgotten because it lives in the contracts manager's head.
- Price: £99/month base + 5% of over-hire cash recovered, billed monthly (performance-aligned; base covers quote chasing).
- Channel to first 10: Scaffolding Association member directory and NASC (National Access & Scaffolding Confederation) public member list — direct outreach; named Facebook group "UK Scaffolders". Hook: free "standing scaffold audit" — how many of your current scaffolds are past initial hire and unbilled? Independent of founder lists.
- Timing hypothesis: Commercial Payments Bill (entered Parliament 19 May 2026) adds mandatory 8%+base statutory interest and stronger footing for chasing hire invoices — concrete and searchable. hypothesis: Building Safety Act remediation backlog keeps scaffolds standing longer through 2026, inflating unbilled over-hire (verify against industry press before R2).
- Citations:
  - https://www.gov.uk/government/news/largest-crackdown-on-late-payments-in-over-25-years-as-landmark-bill-enters-parliament
  - https://www.gov.uk/government/publications/commercial-payments-bill-factsheets/commercial-payments-bill-overview
  - https://www.smallbusinesscommissioner.gov.uk/late-payments-research-2/

## Notes
- Over-hire is nearly 100% margin — recovered weeks are pure profit, so a 5% performance fee is an easy yes and aligns with founder KPI (cash collected).
- No voice component; zero overlap with AI-receptionist graveyard.
- Fulfillment: job register in Supabase (imported from quotes), scheduled invoice generation via Xero API + chase sequences; ≥80% automated after job-terms import.

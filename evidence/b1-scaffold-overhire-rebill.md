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

## R2 Timing Gate
VERDICT: PASS — weakest timing of the batch (SOFT shared edge + secondary hypothesis unverified). Verified 2026-07-10:
- Bill claim TRUE: Commercial Payments Bill [HL] introduced 19 May 2026; 60-day cap, mandatory 8%+base interest, and (construction-relevant) prohibition on deduction/withholding of retention payments. https://bills.parliament.uk/bills/4128 ; https://www.gov.uk/government/news/largest-crackdown-on-late-payments-in-over-25-years-as-landmark-bill-enters-parliament ; https://www.gov.uk/government/publications/commercial-payments-bill-factsheets/commercial-payments-bill-overview
- HONEST CHARACTERIZATION: Bill ≠ law; "not anticipated to come into force until 2027 and the provisions may be subject to change" (https://www.macfarlanes.com/insights/102n7t5/paid-in-60-days-the-governments-new-commercial-payments-bill-aims-to-crack-down/). Statutory 8%+base interest already exists under the 1998 Act. Soft tailwind only.
- Pain stats TRUE: ~£26bn owed / avg £66,770 (https://cpa.co.uk/smes-unpaid-invoices-66770-late-payments-uk/ ; https://www.smallbusinesscommissioner.gov.uk/late-payments-research-2/).
- Vertical hypothesis (over-hire routinely lost): INDIRECTLY VERIFIED — incumbent vendors build and market features for exactly this leak ("track and report on extra hire accrued per scaffold... extract greater value from scaffolds on site longer than planned" — https://smartscaffolder.com/services/site-and-scaffold-management/ ; SMART Handovers app launched "to ensure extra hire was always logged and billed" — https://scaffmag.com/2019/01/smart-scaffolder-launches-new-update-to-handover-app/). The pain is real BUT its verification is simultaneously the saturation kill. Building Safety Act remediation-backlog hypothesis: NOT verified in fresh search — treated as unproven, no timing credit given.

## R3 Saturation Gate
VERDICT: KILL-R3 — saturation 7/10. Rule applied directly: the vertical's incumbent ops software already does the job as a feature (→ score ≥7).

| Competitor | Shape | Kill evidence | URL |
|---|---|---|---|
| SMART Scaffolder (SMART Handover) | UK vertical incumbent (estimating→management suite) | Digitally tracks handovers/off-hires; "easily track and report on extra hire accrued per scaffold"; app exists specifically so "extra hire was always logged and billed" | https://smartscaffolder.com/services/site-and-scaffold-management/ ; https://scaffmag.com/2019/01/smart-scaffolder-launches-new-update-to-handover-app/ |
| Avontus Quantify | Global scaffold rental/management software | "Invoice automation that calculates off-rent and continuation periods"; advance/arrears/FATA billing generated in seconds | https://www.avontus.com/quantify/ |
| Avontus ScaffoldIQ / Designer suite | Adjacent incumbent products deepening lock-in | Full-suite vendor ("from bid to build") | https://www.avontus.com/ |
| Chaser / Satago | Horizontal chase layer for the payment-chasing half | Chaser £199/mo; Satago free tier on Xero | https://trove.works/best-chaser-alternatives-2026/ ; https://www.satago.com/ |

The only unserved sliver is the 5%-performance-fee DFY shape for firms too small for SMART/Avontus — a segment defined by being low-spend. n=4 named above.

## R4 Red Team
Skipped — killed at R3 (sequential gates). Unreached risk noted: over-hire terms live in unstructured quotes/contracts; import accuracy disputes could make the 5% fee contentious.

## Proposed Scores
| Dim | Score | Rationale |
|---|---|---|
| pain | 7 | Over-hire leakage real enough that incumbents built dedicated apps for it; near-100% margin revenue when recovered |
| reach0 | 5 | NASC public member list + Scaffolding Association directory + named FB group; independent of founder lists; buyers are site-based/offline |
| ttfd | 4 | Needs per-job contract-terms import + billing authority; performance fee eases the yes but buyers are offline and slow to trust |
| margin | 6 | £99 base is thin; 5% of recovered is variable and requires clean recovery attribution |
| timing | 3 | Softest of batch: Bill in-force ~2027 + Building Safety Act hypothesis unverified |
| fit | 6 | Supabase job register + Xero API is squarely founder's stack; no audience leverage |

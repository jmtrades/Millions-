# France E-Invoicing Receive-Readiness Install (1 Sept 2026)
Category: R5 deadline-radar | Status: R5-generated 2026-07-10

## R1 Spec
- Offer: Done-for-you 5-day install so a French-VAT-registered business can lawfully RECEIVE e-invoices from 1 Sept 2026: PDP/platform selection matrix (70+ registered platforms, decided in one call), annuaire/directory registration, AP inbox rewiring into the existing stack (Xero/QuickBooks/Odoo/Pennylane), test-invoice validation, and a one-page issuing-timeline memo (large/mid must issue Sept 2026; SMEs Sept 2027; non-established e-reporting Sept 2027). English-language delivery — the underserved wedge.
- Buyer: Finance leads at UK/US companies with a French subsidiary or French VAT registration (5-100 staff); secondary: international accounting firm partners with French-registered clients (resell the install across their book).
- Price: £999 fixed per entity (firm bundle: 5 entities £3,995). Stripe.
- Channel to first 10: LinkedIn outreach to UK accounting firms advertising "French desk" + Franco-British Chamber of Commerce member directory (small-batch, fresh, compliant outbound using founder deliverability craft — not the 692K list) + @theoperator audience members running finance-ops automation for clients with EU entities. £0 spend.
- Timing (verified): From 1 September 2026 ALL companies subject to French VAT — including foreign companies VAT-registered in France — must be able to receive electronic invoices; issuing phases Sept 2026 (large/mid) and Sept 2027 (SME/micro); e-reporting for non-established taxpayers postponed to Sept 2027. Under 2 months out; surveys show most businesses unready.
- Pass-pattern followed: (2) done-for-you automation install into the profession's existing stack at a hard deadline, zero migration; also (1) via accounting-firm resale.
- Kill-checks run: PDPs onboard their own users but the buyer's problem is selection + AP/AR rewiring across a foreign stack (no PDP does vendor-neutral English-language install); DGFiP/service-public guidance free but French-language and scattered; no name-identical English product SEO-established.
- Citations:
  - https://entreprendre.service-public.gouv.fr/actualites/A15683?lang=en
  - https://www.ey.com/en_gl/technical/tax-alerts/french-government-announces-simplification-measures-as-part-of-september-2026-e-invoicing-mandate
  - https://www.bdo.global/en-gb/insights/tax/indirect-tax/france-mandatory-e-invoicing-to-be-implemented-in-2026-updates-on-preparations
  - https://vatit.com/blog/france-mandatory-e-invoicing-september-2026/

## R2 Timing Gate (run 2026-07-10) — VERDICT: KILL-R2
Load-bearing claim tested: "From 1 Sept 2026 ALL French-VAT-registered businesses — including foreign companies with French VAT registrations but no establishment — must be able to RECEIVE e-invoices via a PDP."
Finding: FALSE per the French tax administration itself. The receiving obligation attaches to taxable persons ESTABLISHED in France, not to mere French VAT registrations.
- DGFiP (impots.gouv.fr, primary): e-invoicing covers purchase/sale operations in France "between VAT-liable entities established in France, and thus does not concern foreign companies without establishment in France." Foreign non-established companies fall under E-REPORTING instead (art. 290 II CGI), not the e-invoicing receive/issue obligation.
  - FR: https://www.impots.gouv.fr/international-professionnel/le-reporting-pour-les-entreprises-etrangeres-sans-etablissement-stable
  - EN: https://www.impots.gouv.fr/internationalenbusiness/e-reporting-requirements-foreign-companies-without-permanent-establishment
- Legal basis: Art. 289 bis CGI scopes e-invoicing to "assujettis établis en France": https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000046195635 ; DGFiP FAQ "J'approfondis la facturation électronique": https://www.impots.gouv.fr/sites/default/files/media/1_metier/2_professionnel/EV/2_gestion/290_facturation_electronique/faq---fe_japprofondis-la-facturation-electronique.pdf
- Non-established timing: e-reporting/issuing obligations for non-established taxpayers deferred to 1 Sept 2027 (EY on the simplification measures: https://www.ey.com/en_gl/technical/tax-alerts/french-government-announces-simplification-measures-as-part-of-september-2026-e-invoicing-mandate ; DGFiP page above gives Sept 2026/Sept 2027 platform-choice dates by when the company becomes subject; French tax counsel analysis: https://www.cyrillekonter-avocat.fr/articles/reforme-facturation-electronique-quelles-obligations-pour-entreprises-etrangeres-non-etablies-france-35.htm ; corroborating: https://marosavat.com/vat-news/e-invoicing-france ).
- Source autopsy: R1's timing claim traced to a vendor blog (vatit.com) asserting foreign VAT-registered entities "must be able to receive from 1 Sept 2026" — contradicted by DGFiP FR + EN pages. Primary beats vendor.
- Buyer impact: the English-wedge segment (UK/US companies with French VAT registration, no establishment) has NO Sept-2026 receiving obligation — the urgency is fabricated by a scope misread. The surviving segment (French subsidiaries) is French-established, French-staffed, expert-comptable-served — the English wedge is weakest exactly where the obligation is real. Buyer mostly doesn't exist as specified → KILL-R2 per pre-registered rule.

## R3 Saturation Gate — NOT REACHED (killed at R2)
Sequential gate not run; no searches spent. Note from R2 evidence anyway: DGFiP publishes free EN-language guidance for the non-established segment (impots.gouv.fr EN page above), further undercutting the paid "English-language wedge."

## R4 Red Team — NOT REACHED (killed at R2)

## Verdict & Scores (harsh, 1-10)
- VERDICT: KILL-R2 — offer's core legal premise false for its wedge buyer (DGFiP primary sources above).
- pain 3: real only for French-established entities (subsidiaries), who are already inside French EC/PDP channels; zero legal compulsion for the VAT-registered-only segment until Sept 2027, and then e-reporting not receive-readiness.
- reach0 3: FBCC directory is membership-gated; LinkedIn to UK firms with French desks is reachable week-1 but pitch collapses once scope is corrected by any French advisor.
- ttfd 3: £999 statutory-compliance sale to finance leads from a seller with no FR-tax credibility → multi-week cycle at best.
- margin 7: if ever sold, ~2-3 solo days per £999 install, £0 ad spend.
- timing 2: the 1 Sept 2026 receive deadline is real only for a buyer this founder can't credibly serve; for the stated wedge buyer the deadline is Sept 2027 e-reporting, not Sept 2026 receiving.
- fit 2: solo UK engineer, no French-tax credibility, no French stated; French-language PDP contracts/annuaire and FR tax-advice liability; cap ≤4 stands unrebutted.

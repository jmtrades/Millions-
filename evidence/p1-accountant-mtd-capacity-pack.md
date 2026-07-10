# MTD Capacity Automation Pack for Small Accountancy Firms

Category: Productized service | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: MTD Capacity Pack installed in 7 days: automated client triage (who is mandated April 2026 vs 2027 vs 2028 from a client-list upload), templated onboarding sequences (emails + intake forms for records access and software authorisation), chase-up workflows for non-responding clients, and a quarterly-deadline reminder engine — built in n8n/Make and wired to their email + practice spreadsheet/CRM. Includes 30-day fix support.
- Buyer: Sole practitioners and 2–5 staff UK accountancy firms with 50–300 sole-trader/landlord clients, facing five filing events per client per year from April 2026.
- Price: £1,500 one-off.
- Channel to first 10: answer-posts in AccountingWEB forums + direct LinkedIn outreach to UK sole practitioners posting about MTD workload (£0 spend). Angle: "Your client count just became 5x the filing events. Install the chase-up machine before the 7 Aug deadline wave." Independent of the 692K/30K lists.
- Timing hypothesis: MTD for Income Tax went live 6 April 2026 (>£50k qualifying income) and the first-ever quarterly update deadline on 7 August 2026 hits every mandated client of every small practice simultaneously; practice guidance explicitly frames capacity ("five filing events per client per year without burning out during every quarterly peak") as the binding constraint — automation install, not advice, is the purchase. Build is a reusable blueprint; ~80% templated; <4 founder-hours/unit.
- Citations: https://www.viaante.com/resource-center/blogs/mtd-for-income-tax-accountants-sole-traders-landlords/ , https://www.bishopfleming.co.uk/insights/making-tax-digital-what-should-landlords-and-sole-traders-know , https://www.gov.uk/government/publications/extension-of-making-tax-digital-for-income-tax-self-assessment-to-sole-traders-and-landlords/making-tax-digital-for-income-tax-self-assessment-for-sole-traders-and-landlords

## R2 Timing Gate
Verdict: PASS (assessed 2026-07-10).
- MTD IT mandatory from 6 Apr 2026 for qualifying income >£50,000 — gov.uk primary: https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax and https://www.gov.uk/government/news/one-year-until-making-tax-digital-for-income-tax-launches
- First-ever quarterly update (6 Apr–5 Jul 2026) due 7 Aug 2026 — 28 days from today; ~864,000 individuals mandated in wave 1: https://www.freeagent.com/blog/mtd-for-income-tax-first-year-explained/ ; https://www.step.org/industry-news/making-tax-digital-now-imminent-traders-and-landlords
- Follow-on demand verified: >£30k wave 6 Apr 2027; >£20k wave 6 Apr 2028 adds ~970,000 more: https://www.gov.uk/government/publications/making-tax-digital-for-income-tax-self-assessment-reducing-the-mandation-threshold-from-30000-to-20000-from-april-2028/reduction-of-the-mandation-threshold-from-30000-to-20000-from-april-2028
- Honest caveat for outreach copy: no penalty points for late quarterly updates in the first 12 months (STEP link above) — sell capacity/recurring-crunch relief, not fines.
Edge concrete, dated, in force, with a 28-day hard deadline and a dated second wave → passed.

## R3 Saturation Gate
Verdict: PASS — saturation 4/10. Searched as a buyer ("automation consultant UK accountancy firms Zapier/Make/n8n"). Direct competitors for THIS shape — a fixed-price, productized MTD-capacity automation install for small UK practices — are absent from page one; what exists is horizontal automation agencies and commodity freelancers, none accountancy-vertical, none MTD-packaged. The real pressure is substitutes: practice-management software bundles chasing natively (noted in R4).

| # | Competitor | URL | Note |
|---|-----------|-----|------|
| 1 | The AI Consultancy | https://theaiconsultancy.ai/services/workflow-automation | UK generalist AI/workflow automation agency (n8n/Zapier/Make); SME/mid-market, not accountancy-vertical, not fixed-price |
| 2 | WiseSolutions | https://wisesolutions.uk/n8n-consultant/ | London n8n consultancy; has a professional-services invoice-triage case study; bespoke, not productized for practices |
| 3 | Step 7 Consulting | https://step7consulting.com/ai-workflow-automation/ | Zapier Solution Partner; horizontal integration work |
| 4 | SynkrAI | https://www.synkrai.com/services/n8n-make-and-zapier-automation | Horizontal Zapier/Make/n8n build agency |
| 5 | Fiverr/gig n8n installers | https://www.fiverr.com/blay_daniels/n8n-workflow-setup-n8n-custom-workflow-automation-n8n-installation-n8n | Commodity installs, no accountancy domain knowledge, no MTD packaging |

Few, weak-for-this-buyer, non-vertical (4). DIY evidence exists (a 5-person Plymouth practice built its own Make.com email-filing workflow — https://heybrb.ai/blog/no-code-automation-tools-uk-2026), confirming demand for exactly this automation without a vertical provider serving it. Not graveyard. Score ≤6 → passed.

## R4 Red Team
Strongest failure case: The £1,500 job is being commoditized from below by incumbent practice software — BrightManager ships automated client record-chasing (email+SMS), onboarding sequences and MTD-IT deadline tracking as core features (https://brightsg.com/brightmanager-accounting-practice-management-software/), and QuickBooks/IRIS push free MTD readiness tooling at practices (https://quickbooks.intuit.com/uk/making-tax-digital/accountants/) — so the buyer's cheaper default is "turn on chasing in software we already rent" rather than let an unknown non-accountant wire n8n into the practice inbox and client data (GDPR/professional-indemnity objection). AccountingWEB moderates self-promotion, and July–August is the practices' worst possible moment to buy a 7-day internal project.
Strongest founder rebuttal: The install rides the practice's EXISTING email + spreadsheet/CRM stack — no software migration 28 days before the first-ever 7 Aug deadline (Accountex 2026 coverage confirms many practices are deliberately keeping clients on spreadsheet-based MTD workflows: https://www.accountingweb.co.uk/community/industry-insights/what-accountex-2026-revealed-about-making-tax-digital-it-readiness) — and the founder's @theoperator build-in-public automation content is verifiable proof-of-capability that converts LinkedIn outreach at £0, with LinkedIn/forum channels independent of the PECR-liability lists.
Defensible: TRUE — narrowly. The no-migration wedge for spreadsheet-based small practices is real and un-served by the software substitutes; window shrinks as PM software adoption rises, so this is a 12–18 month cash offer, not a moat.

## Proposed Scores
- pain: 7 — ~5x filing events per client per year, mandated (gov.uk above); capacity is the binding constraint, though year-1 quarterly penalty waiver keeps it short of existential.
- reach0: 4 — named £0 channels (LinkedIn outreach to practitioners posting about MTD workload + AccountingWEB answer-posts) are real and explicitly independent of the 692K/30K lists, but reaching 100+ qualified practice owners in week 1 from a standing start is optimistic; no accountant-native audience.
- ttfd: 7 — nothing to build (~80% templated blueprint), £1,500 one-off closable on a single call inside the 28-day panic window; realistic first transaction in 14–30 days given accountant trust cycles.
- margin: 9 — solo labour + templates; n8n/Make subscriptions sit on the client; AI costs trivial; >90% gross at <4 founder-hours/unit steady state.
- timing: 9 — verified hard deadline 7 Aug 2026 (28 days) plus dated Apr 2027 >£30k wave (gov.uk); docked 1 because year-1 quarterly lateness carries no penalty points (STEP).
- fit: 7 — exact skill match (elite n8n/Make automation engineer) + @theoperator content as proof asset + existing Skool for delivery/support; capped below 8 because no distribution asset contains UK accountants.
Overall: PASS.

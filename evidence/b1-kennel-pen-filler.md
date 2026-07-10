# PenFiller — booking desk and rebooking engine for kennels & catteries

Category: Boring-industry automation | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: "Full pens in the holidays, no phone tag." Calls answered while staff are out cleaning pens/walking dogs (kennel-specific intake: dates, dog/cat details, vaccination status incl. kennel cough for dogs), deposits taken by card link, vaccination-expiry reminders before stays, and automated rebooking campaigns to past guests ahead of school-holiday peaks (half term, summer, Christmas). Buyer vocabulary: pens filled, deposits taken, no-shows down.
- Buyer: Owner of a council-licensed UK boarding kennels or cattery, 20–100 pens, 2–8 staff, phone frequently unanswered during morning cleaning rounds, peak demand at school holidays with empty pens off-peak.
- Price: £129/month + £149 setup.
- Channel to first 10: Local-authority animal boarding licence registers (public lists published by each council under the Animal Welfare (Licensing of Activities Involving Animals) Regulations) — scrape 10 counties, direct outreach; named Facebook group "Kennel and Cattery Owners UK"; Pet Industry Federation member directory. Independent of founder lists.
- Timing hypothesis: Voice AI all-in cost collapsed to ~$0.05–0.15/min in 2026 — first time 24/7 answering is affordable at kennel margins (£129/mo); PSTN switch-off 31 Jan 2027 forces kennels (typically on old analogue lines in rural premises) to re-platform phones within ~6 months anyway. 47% of calls to UK SMEs go unanswered; 85% of missed callers book elsewhere. hypothesis: sustained record UK dog population keeps boarding demand high (verify PDSA/PFMA 2026 figures).
- Citations:
  - https://softcery.com/ai-voice-agents-calculator
  - https://www.retellai.com/blog/ai-voice-agent-pricing-full-cost-breakdown-platform-comparison-roi-analysis
  - https://business.bt.com/insights/uk-pstn-switch-off/
  - https://www.paperclip.co.uk/missed-business-phone-calls-uk/
  - https://www.openpr.com/news/4570478/why-47-of-customer-calls-to-uk-businesses-go-unanswered-and-what

## Notes
- Vertical wedge vs generic receptionist: vaccination-record intake, pen-type availability, holiday-peak rebooking campaigns — domain logic generic players don't have.
- A single week's boarding for one dog ≈ £150–£250; one saved booking pays the month.
- Fulfillment: voice + SMS + simple availability calendar in Supabase + Stripe deposits; ≥80% automated after setup.

## R2 Timing Gate
**Verdict: KILL-R2 — no concrete ≤12mo shift; vertical already served at old prices (gated 2026-07-10).**
- Regulatory framework unchanged: licensing still runs on the Animal Welfare (Licensing of Activities Involving Animals) (England) Regulations 2018 (in force 1 Oct 2018) with current statutory guidance; no 2026 change found (https://www.gov.uk/government/publications/animal-activities-licensing-guidance-for-local-authorities/cat-boarding-licensing-statutory-guidance-for-local-authorities ; https://www.gov.uk/guidance/boarding-for-cats-or-dogs-licence-england ; Animal Boarding Establishments Act 1963 "up to date... on or before 02 May 2026" with no new changes: https://www.legislation.gov.uk/ukpga/1963/43).
- The claimed wedge is already a commodity feature at old prices, invalidating the "voice AI got cheap" edge: KennelBooker ships online booking, online payments, SMS reminders AND automatic vaccination-expiry alerts from ~US$94.99/mo, long sold into the UK (https://www.kennelbooker.com/all-features ; https://www.capterra.co.uk/software/143168/kennel-booker); plus Avalon Software (https://www.avalonsoftware.co.uk/kennels-and-catteries), Carica Pets (https://www.caricapets.co.uk/) and a whole Capterra category (https://www.capterra.co.uk/directory/30574/kennel/software).
- PSTN 31 Jan 2027 is economy-wide and Openreach says "no big bang" (https://www.ispreview.co.uk/index.php/2026/06/openreach-says-no-big-bang-in-jan-2027-when-uk-analogue-phones-switch-off.html). The "record dog population" demand hypothesis: no ≤12mo shift evidence found — stale post-2021 trend at best.
- Missed-call stats downgraded: 47%/85% = Blunetic (AI-automation vendor) press release, n=142, via openPR: https://www.openpr.com/news/4570478/why-47-of-customer-calls-to-uk-businesses-go-unanswered-and-what

## R3 Saturation Gate
Skipped (killed at R2).

## R4 Red Team
Skipped (killed at R2).

## Proposed Scores
pain 5 · reach0 3 · ttfd 3 · margin 7 · timing 2 · fit 5
- pain: calls missed during cleaning rounds are real but partially solved by existing online booking (KennelBooker et al.).
- reach0: council licence registers are public but fragmented across 300+ local authorities; FB groups small.
- ttfd: £129/mo trust-heavy sale to slow, seasonal, often rural buyers; >60d plausible.
- margin: low call volumes keep serve cost ~£10–15 vs £129, but absolute £ small.
- timing: nothing vertical within 12mo. fit: tech fits, zero audience overlap.

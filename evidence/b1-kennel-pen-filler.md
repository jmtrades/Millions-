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

# Awaab's Law Hazard Clock
Category: Vertical SaaS | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: Never breach a statutory Awaab's Law clock: every tenant hazard report auto-triaged (emergency = 24h; significant damp/mould = 10-working-day investigation), the required written summary generated and sent inside the 3-working-day rule, contractor deadlines tracked, and a time-stamped evidence pack exported for the Housing Ombudsman or court. Phase 2 hazard types pre-configured before the 2026 commencement.
- Buyer: Head of repairs / compliance at a small registered provider of social housing, ALMO or TMO in England, <5,000 homes (sweet spot <1,000 homes — too small for Plentific/NEC enterprise stacks).
- Price: £249/mo; founding £149/mo for providers <1,000 homes.
- Channel to first 10: Regulator of Social Housing's public register of registered providers — filter to small RPs and personally cold-email Heads of Repairs (no purchased lists); National Housing Federation Awaab's Law resource discussions; Inside Housing comment threads.
- Timing hypothesis: Awaab's Law Phase 1 in force since 27 October 2025 (24h emergency fix, 10-working-day damp/mould investigation, 3-day written summary); Phase 2 expected October 2026 extends statutory clocks to excess cold/heat, falls, structural, fire, electrical and hygiene hazards — multiplying tracked deadlines per property just as small providers are failing Phase 1 in spreadsheets.
- Citations:
  - https://www.gov.uk/government/publications/awaabs-law-guidance-for-social-landlords/awaabs-law-guidance-for-social-landlords-timeframes-for-repairs-in-the-social-rented-sector
  - https://www.plentific.com/resource-center/blog/awaabs-law-phase-2-explained-the-new-hhsrs-hazards-and-statutory-deadlines-for-2026/
  - https://www.housing.org.uk/resources/awaabs-law/
  - https://england.shelter.org.uk/professional_resources/news_and_updates/how_awaabs_law_changes_the_rules_on_hazards_in_social_housing
- Notes: hypothesis: sub-1,000-home RPs (hundreds exist on the RSH register) mostly run repairs in Excel/email and cannot afford Plentific-class platforms. Deadline-engine + doc-generator is pure config-driven CRUD; v1 <8h. Sales cycle risk: housing providers are committee-ish buyers — mitigate with paid 30-day pilot.

## R2 Timing Gate
**Verdict: PASS** (gated 2026-07-10, fresh searches)

1. **Phase 1 in force 27 Oct 2025 — CONFIRMED.** Statutory clocks verified exactly as claimed: investigate emergency hazards within 24 hours and make safe within that period; investigate significant damp/mould hazards within 10 working days; written summary of investigation findings within 3 working days of investigation concluding; relevant safety work within 5 working days. Applies to local authority landlords and registered providers in England.
   - https://www.gov.uk/government/publications/awaabs-law-guidance-for-social-landlords/awaabs-law-guidance-for-social-landlords-timeframes-for-repairs-in-the-social-rented-sector
   - https://www.kennedyslaw.com/en/thought-leadership/article/2025/awaab-s-law-phase-1-to-come-into-force-in-october-2025/
   - https://england.shelter.org.uk/professional_resources/news_and_updates/how_awaabs_law_changes_the_rules_on_hazards_in_social_housing
2. **Phase 2 expected October 2026 — CONFIRMED.** Extension covers excess cold, excess heat, fire, electrical, falls and structural hazards where significant; remaining HHSRS hazards (except overcrowding) expected 2027. Multiple sector sources (NHMF, Mobysoft, Plentific) confirm the Oct 2026 timeline; councils are publishing preparedness papers.
   - https://www.nhmf.co.uk/article/awaab-s-law-phase-1-is-implemented-this-month-now-what
   - https://www.mobysoft.com/resources/blogs/awaabs-law-phase-2-is-coming-what-social-landlords-need-to-know-about-additional-hazard-compliance-in-2026/
   - https://democracy.sholland.gov.uk/documents/s44984/Preparedness%20for%20Awaabs%20Law%20update.pdf
3. **Small providers failing in spreadsheets — SUPPORTED (directionally).** Sector press documents "fragmented records scattered across email inboxes, paper inspection notes, legacy IT systems, spreadsheets on personal drives and contractor logs" making audit trails to the RSH near-impossible; law-firm commentary confirms weak data systems undermine evidencing compliance. Caveat: evidence is vendor/consultancy content, not a regulator survey — but dates and mechanics of the timing thesis are exactly right.
   - https://housingdigital.co.uk/how-housing-associations-can-stay-audit-ready-under-awaabs-law/
   - https://www.penningtonslaw.com/insights/awaabs-law-compliance-consequences-and-oversight-for-social-housing-providers/

## R3 Saturation Gate
**Verdict: KILL — saturation score 7/10 (>6)** (gated 2026-07-10)

| Vendor | Awaab's Law offering found | Relevance to <1,000-home wedge | Source |
|---|---|---|---|
| **HazardClock** | **DIRECT HIT — identical name AND feature set**: "calculates every Awaab's Law deadline automatically, sends countdown alerts before they expire, and builds an audit trail"; handles 50–200 concurrent cases; Phase 2 hazard checker; free deadline calculator + compliance-checklist lead magnets aimed at housing officers | Exact same wedge, same buyer, active SEO content engine occupying the £0-spend channel; even the candidate's name is taken | https://hazardclock.co.uk/blog/awaabs-law-complete-guide/ ; https://hazardclock.co.uk/tools/compliance-checklist/ ; https://hazardclock.co.uk/blog/awaabs-law-phase-2-changes-2026/ |
| **AwaabSafe** | **DIRECT HIT** — positions as "Awaab's Law Compliance Software for Registered Providers" | Second dedicated point solution at the exact niche | https://www.awaabsafe.co.uk/ |
| **HabitatGuard (DwellGuard)** | Disrepair claim defence for social housing — the candidate's "evidence pack for the Ombudsman" angle as a standalone product | Third dedicated adjacent entrant | https://www.habitatguard.co.uk/ |
| **Weightmans** | Dedicated "Awaab's Law Compliance Tool" — "technology-driven solution... from initial tenant notification to final resolution" | National law firm already advising RPs; small RPs' first call on a legal-risk purchase is their solicitor | https://www.weightmans.com/products/awaab-s-law-compliance-tool/ |
| **Plentific** | Phase 2 explainer content + IoT damp/mould pilot programme "simplifying compliance with Awaab's Law" | Enterprise-priced, larger RPs — but owns the topic's SEO (the R1 spec itself cites Plentific's blog) | https://www.plentific.com/resource-center/blog/awaabs-law-phase-2-explained-the-new-hhsrs-hazards-and-statutory-deadlines-for-2026/ ; https://www.plentific.com/resource-center/blog/how-plentific-software-architecture-supports-housing-industry/ |
| **NEC Housing** | "Awaab's Law: what social landlords need to know — and how technology can help" marketing its repairs/HMS stack | Incumbent HMS absorbs statutory clocks as a feature of the system already holding repairs data | https://www.necsws.com/article/housing/awaabs-law-what-social-landlords-need-to-know-and-how-technology-can-help |
| **Civica Cx / MRI (Orchard) / Totalmobile** | Active HMS/workforce incumbents in social housing repairs (Cambridge CC 25 yrs on MRI/Orchard; Totalmobile in integration flows); no dedicated small-RP Awaab's module found in searches | Enterprise-tier, not the <1,000-home wedge — but every RP already runs some system these vendors upsell into | https://www.civica.com/en-us/product-pages/social-housing-software/ ; https://www.housing-technology.com/cambridge-city-councils-25-years-with-mri-software/ |
| **Switchee** | Mould iQ — "fully managed solution to monitor, identify and intervene" on damp/mould; partnership covering 92,000 units | Hardware-led (per-device cost) alternative compliance narrative for the same buyer | https://switchee.com/news/mould-iq-launch/ ; https://switchee.com/awaabs-law-a-call-to-arms/ |
| **HomeLINK (Aico) / Fixflo** | No dedicated Awaab's-Law social module surfaced in searches; Fixflo listings skew lettings/PRS | Honest nulls — not evidence of absence, but no direct hit found | https://www.capterra.com/p/163230/Fixflo-Lettings/ |
| **Netcall** | Awaab's Law compliance guide for social housing (low-code platform) | Fourth software vendor marketing directly on the keyword | https://www.netcall.com/blog/preparing-for-awaabs-law-a-practical-guide-to-uk-social-housing-compliance/ |

**Gap assessment (the specific shape, scored honestly):** A price/complexity gap below enterprise HMS plausibly still exists — no vendor surfaced transparent ~£150–250/mo self-serve pricing for <1,000-home RPs. But the candidate's exact shape (statutory-clock tracker + evidence pack, sold cheap to small RPs) already has **at least two dedicated occupants (HazardClock — feature-for-feature and name-identical — and AwaabSafe)** plus a law-firm tool, an evidence-pack specialist, IoT alternatives, and incumbent absorption. Eight months post-Phase 1, the wedge's SEO/content channel is occupied by the identically-named rival, and the timing thesis is commodity vendor marketing. Not a monopoly (hence 7, not 9), but no credible open gap for a solo unknown. **7 > 6 → KILL-R3.**

## R4 Red Team
Skipped — candidate killed at R3 saturation gate.

## Proposed Scores
Gated 2026-07-10. Harsh 1–10 integers.

| Dimension | Score | Rationale (with evidence) |
|---|---|---|
| pain | 8 | Statutory clocks with legal enforceability (tenants can sue for breach; Ombudsman/RSH oversight) and Phase 2 multiplying tracked hazards Oct 2026 — https://www.gov.uk/government/publications/awaabs-law-guidance-for-social-landlords/awaabs-law-guidance-for-social-landlords-timeframes-for-repairs-in-the-social-rented-sector ; https://www.penningtonslaw.com/insights/awaabs-law-compliance-consequences-and-oversight-for-social-housing-providers/ |
| reach0 | 3 | RSH public register gives named small RPs and B2B-corporate cold email is PECR-workable, but founder's assets (@theoperator audience, Skool, 692K mixed list) are irrelevant to heads of repairs at small RPs — channel is 100% cold outreach by a sector unknown; liability cap ≤3 applies |
| ttfd | 3 | Public-sector-adjacent, committee-ish, legal-risk purchase; incumbent/solicitor alternatives now exist to benchmark against (https://www.weightmans.com/products/awaab-s-law-compliance-tool/); founding-pilot pricing helps but first paid deal realistically 6–12+ weeks |
| margin | 8 | Pure config-driven SaaS at £149–249/mo on Next.js+Supabase+Stripe; negligible COGS; no hardware (vs Switchee's per-device model — https://switchee.com/news/mould-iq-launch/) |
| timing | 7 | Genuinely strong window (Phase 1 failures + Phase 2 Oct 2026 — https://www.nhmf.co.uk/article/awaab-s-law-phase-1-is-implemented-this-month-now-what) but the insight is already commodity vendor content and 2+ dedicated products shipped — the arbitrage is partly gone |
| fit | 4 | Build fit is high (CRUD deadline engine, <8h v1 credible) but sales motion — UK social-housing compliance, trust-driven, sector-credibility-dependent — is orthogonal to every founder asset; solo unknown vs law firms, incumbents, and an identically-named rival |

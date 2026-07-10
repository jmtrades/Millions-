# UnitFiller — enquiry-to-move-in desk for independent self-storage sites

Category: Boring-industry automation | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: Every storage enquiry (phone, web form, email) answered in under 60 seconds, quoted from the site's live unit/price list, and converted to a reserved unit with deposit taken by card link; automatic follow-up on unclosed quotes at 24h/72h/7d. Buyer vocabulary: "units let, not enquiries logged." Monthly report: move-ins won, occupancy points added.
- Buyer: Owner or operations manager of an independent UK self-storage operator, 1–3 sites, 100–600 units per site, competing against Big Yellow/Safestore/Storage King on price but losing on response speed; typically SSA UK member.
- Price: £249/month per site + £299 setup.
- Channel to first 10: SSA UK public member/operator directory (ssauk.com) — direct outreach to the ~independent tail; secondary founder-asset angle: the 30K real-estate agent list as a referral-pipeline door-opener ("your local agents' movers need storage — we'll route them to you"). Primary path independent of founder lists.
- Timing hypothesis: SSA UK Annual Industry Report 2026 (published with Cushman & Wakefield, May 2026) shows average occupancy fell to 75.1% (down 1% YoY) and enquiry conversion fell across ALL channels (phone, walk-in, online) — for the first time in years operators are fighting for demand, and the same report coverage highlights that responding within one hour makes conversion 7x more likely. Speed-to-lead is now the cheapest occupancy lever.
- Citations:
  - https://www.ssauk.com/publications/uk-annual-industry-report-2026.html
  - https://www.cushmanwakefield.com/en/united-kingdom/insights/uk-self-storage-annual-report
  - https://findmystorage.co.uk/uk-self-storage-statistics
  - https://softcery.com/ai-voice-agents-calculator

## Notes
- One extra 100 sq ft unit let ≈ £100–£200/mo revenue for years — payback is one unit.
- Wedge vs generic receptionist: live unit inventory + price quoting + deposit capture + quote chasing, not message-taking.
- Fulfillment: shared inbox/number + unit-list sync (CSV or storage-software API) + Stripe deposit links; ≥80% automated after config.

## R2 Timing Gate
**Verdict: PASS (gated 2026-07-10).**
- Concrete, dated, vertical-specific shift verified: SSA UK Annual Industry Report 2026 (with Cushman & Wakefield) records a small occupancy reduction AND "declining enquiry conversion levels" while UK floorspace grew 7.2% to 64.3m sq ft — operators are, for the first time in years, fighting for demand, making conversion tooling newly urgent (https://www.ssauk.com/publications/uk-annual-industry-report-2026.html ; https://januseurope.com/uk-annual-industry-report-2026/ ; https://www.cushmanwakefield.com/en/united-kingdom/insights/uk-self-storage-annual-report).
- Caveat (hostile): this is demand-side urgency, not a capability unlock or hard deadline. Voice all-in economics: $0.11–0.15/min typical (claimed "$0.05" is platform-only) per https://www.cekura.ai/blogs/retell-ai-pricing-per-minute.

## R3 Saturation Gate
**Verdict: KILL-R3 — saturation 7/10.** "AI answering + quote + reserve" for self storage is an established product category with named leaders whose core feature set IS this candidate's wedge.

| Player | Type | Evidence |
|---|---|---|
| swivl | Vertical AI built explicitly for self-storage contact centres — claims 35–50% call deflection, 25% more leads captured, publishes "AI-powered call center for self storage" comparison content | https://www.tryswivl.com/ ; https://www.tryswivl.com/blog/ai-powered-call-center-for-self-storage |
| OpenTech Alliance INSOMNIAC | Vertical: AI call-center agents + human "Storage Counselor" escalation | https://opentechalliance.com/solutions/ai-call-center-services/ ; https://opentechalliance.com/solutions/self-storage-call-center/ |
| XPS Solutions | Vertical: centralised sales/support, integrates with site-management software | https://www.sitelink.com/marketplace/call-centers |
| SiteLink marketplace call centres | Whole partner channel of storage call centres integrated with the software indies already run | https://www.sitelink.com/marketplace/call-centers |
| Stora / storEDGE ecosystems | Management platforms integrating AI call solutions; Stora (UK) exists to automate enquiry→move-in online for exactly this 1–3-site indie buyer | https://www.tryswivl.com/blog/voice-ai-self-storage-call-centers |
| Moneypenny AI, RingCentral AIR, IONOS, BookedSolid, Answer4u AI, MyAIFrontDesk, Rosie, Slang.ai | Horizontal known-crowded set | https://www.moneypenny.com/uk/ai-voice-agent/ |

The big vertical players are US-centric, so a residual UK-indie gap exists — but the buyer's own software stack (Stora, UK-native) is built to automate enquiry→move-in, and live unit quoting + deposit capture + quote chasing is the incumbents' core feature set: wedge trivially matched. n≈12+. No graveyard evidence found.

## R4 Red Team
Skipped (killed at R3).

## Proposed Scores
pain 7 · reach0 4 · ttfd 4 · margin 8 · timing 6 · fit 7
- pain: quantified by SSA 2026 (conversion falling across all channels).
- reach0: SSA UK member directory is a real £0 target but small and cold; the 30K RE-list referral angle rests on UNVERIFIED geography — not counted.
- ttfd: ops-manager sale + software integration = 30–60d.
- margin: modest minutes, £249/site vs ~£20–35 serve cost.
- timing: concrete May 2026 report but demand-side only. fit: unit-list sync + Stripe fits stack; no audience overlap with storage operators.

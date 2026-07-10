# Planning Application Scout
Category: AI-service arbitrage | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: Nightly browser-agent sweep of every local planning authority portal in the client's patch, delivering a Monday brief of qualified leads: new consents (sites to buy), refusals (schemes to re-promote), lapsing permissions, competitor applications, plus applicant/agent contact details — replacing a £500–1,500/mo land-sourcing retainer (retainer level: hypothesis) or hours of DIY portal checking. ~90% AI-automated (browser agents + extraction + brief generation), human spot-check of lead quality weekly.
- Buyer: Director of UK SME property developer, land promoter, or design-and-build contractor, 2–25 staff, active across 3–20 local planning authorities.
- Price: £249/mo for up to 10 LPAs (+£15/mo per extra LPA). Stripe subscription; async onboarding (pick LPAs + lead criteria).
- Channel to first 10: No dependence on the 692K/30K lists. Named communities: Property Hub forum and propertytribes.com (UK property developer/investor communities) + @theoperator build-in-public series ("my agent reads 340 planning portals every night so I don't have to"), which doubles as founder-audience proof content. £0 spend.
- Timing hypothesis: The UK's ~300 LPA portals (fragmented Idox/Northgate variants, no unified public API, session/JS-heavy) defeated brittle scrapers for a decade. Browser-use-class agents crossed the reliability threshold in the last 12 months — Browser Use at 89.1% WebVoyager, OpenAI CUA 87% WebVoyager, and Claude Sonnet 4.6 at 72.5% OSWorld (Feb 2026, ~human ceiling on that benchmark) — making exhaustive nightly sweeps of heterogeneous council portals technically viable and cheap (flash-class token pricing + 50% batch discounts) for the first time.
- Citations:
  - https://browser-use.com/posts/ai-browser-agent-benchmark
  - https://www.digitalapplied.com/blog/computer-use-agents-2026-claude-openai-gemini-matrix
  - https://zylos.ai/research/2026-02-08-computer-use-gui-agents/
  - https://benchlm.ai/llm-pricing

## R2 Timing Gate
Verdict: **KILL-R2** (gated 2026-07-10, 7 web searches)

**Benchmark claims: real but misframed.**
- Browser Use 89.1% WebVoyager is genuine, but it was run with GPT-4o and dates to the Dec-2024/Jan-2025 SOTA report — ~18 months old, not a "last 12 months" breakthrough (https://browser-use.com/posts/sota-technical-report). WebVoyager is now saturated (Magnitude reports 94%; several agents >90%), and commentators note it tests planning, not hard site mechanics (iframes/shadow DOM untested) — so it can no longer discriminate capability (https://github.com/magnitudedev/webvoyager, https://www.halluminate.ai/blog/benchmark).
- Claude Sonnet 4.6 at 72.5% OSWorld-Verified (released 2026-02-17) is verified and recent (https://caylent.com/blog/claude-sonnet-4-6-in-production-capability-safety-and-cost-explained, https://www.digitalapplied.com/blog/claude-sonnet-4-6-benchmarks-pricing-guide).

**Core premise falsified: the data was never locked.** "~300 fragmented LPA portals defeated brittle scrapers for a decade" is factually wrong:
- PlanIt (planit.org.uk) has aggregated UK planning applications via conventional scrapers for years: free public API, 425+ local authorities, 20M+ historical records (https://www.planit.org.uk/). Its scraper classes were publicly released in 2017 (v1.3) with commercial versions maintained since (https://github.com/aspeakman/UKPlanning).
- A solo developer on HN (2026) reports scraping 241 UK council planning portals / 2.6M decisions — no browser agents required (https://news.ycombinator.com/item?id=47931470).
- Multiple commercial planning-application APIs already exist: PlanAPI (https://planapi.co.uk/), PlanWire (https://planwire.io/), PlanningAPI.uk (https://planningapi.uk/), plus off-the-shelf Apify actors (https://apify.com/devon_gtme/uk-planning-applications-planit).
- Glenigan and Barbour ABI have collated ~500K planning applications/year for ~30 years; Glenigan's 100+ researchers make ~1M phone calls/year to enrich applicant/decision-maker contacts — i.e., the offer's differentiating "applicant/agent contacts" feature is already done at industrial scale, by humans, for decades (https://www.constructionsales.co.uk/resources/articles/barbour-abi-or-glenigan-planning-pipe-or-builders-conference-which-construction-sales-lead-service-is-right-for-you/, https://www.constructionsales.co.uk/resources/articles/an-overview-of-the-glenigan-service/).
- LandTech LandInsight and Searchland already sell planning-application alerts + site sourcing to exactly this SME-developer buyer at £195–~£200/mo — at/below the candidate's £249/mo (https://searchland.co.uk/pricing, https://land.tech/pricing/landinsight/unlimited).
- planning.data.gov.uk's planning-application dataset is genuinely incomplete/"not yet ready for use" (https://www.planning.data.gov.uk/dataset/planning-application) — but this does not rescue the thesis, because free (PlanIt) and commercial aggregation solved access years ago; MHCLG standardisation is a further commoditisation headwind, not a tailwind.

**Conclusion:** browser agents crossing WebVoyager/OSWorld thresholds unlocks nothing here — nightly national sweeps existed for a decade without them, via cheaper conventional scrapers and a free API. Agent-based sweeps are strictly more expensive per record than the incumbent/PlanIt route, so the claimed capability edge is hollow. KILL-R2.

## R3 Saturation Gate
Skipped (killed at R2) — note the R2 evidence already shows a saturated category: LandInsight/Searchland (£195–200/mo, same buyer, planning alerts included), Glenigan/Barbour ABI (£1K–50K/yr leads incl. verified contacts), plus PlanningPipe et al. (https://searchland.co.uk/pricing, https://www.constructionsales.co.uk/resources/articles/barbour-abi-or-glenigan-planning-pipe-or-builders-conference-which-construction-sales-lead-service-is-right-for-you/).

## R4 Red Team
Skipped (killed at R2).

## Proposed Scores
| Dimension | Score | Rationale (evidence) |
|---|---|---|
| pain | 6 | Real, monetised pain — SME developers demonstrably pay £195–200/mo for site-sourcing/planning alerts (https://searchland.co.uk/pricing, https://land.tech/pricing/landinsight/unlimited) and £1K–50K/yr for leads (https://www.constructionsales.co.uk/resources/articles/barbour-abi-or-glenigan-planning-pipe-or-builders-conference-which-construction-sales-lead-service-is-right-for-you/) — but "well-paid-for" also means well-served. |
| reach0 | 2 | Property Hub forum skews beginner/intermediate BTL investors and Property Tribes is a landlord community (https://www.uselatch.co.uk/blog/uk-property-investment-forums-2026, https://www.propertytribes.com/) — not directors of 2–25-staff developers; @theoperator audience is AI/automation, not UK property. Week-1 reach of the actual buyer ≈ nil; no dependence on the 692K list, but no credible substitute either. |
| ttfd | 3 | As specced (reliable nightly agent sweeps across heterogeneous Idox/Northgate portals + contact extraction + QA'd brief), weeks-to-months to first trustworthy paid deliverable; the fast path (PlanIt free API, days — https://www.planit.org.uk/) abandons the thesis and the differentiation. |
| margin | 4 | Modelled: central nightly sweep of ~300 portals × ~30–60 agent steps ≈ £10–50/night (~£300–1,500/mo) at flash-class pricing — amortises fine at 20+ clients (£249/mo each) but is pure waste vs. the counterfactual free API/conventional scrapers (https://www.planit.org.uk/, https://news.ycombinator.com/item?id=47931470); weekly human lead-QA per client further erodes the ~90%-automated claim. |
| timing | 2 | Core timing premise falsified (decade of accessible data: https://www.planit.org.uk/, https://github.com/aspeakman/UKPlanning); the 89.1% WebVoyager cite is Jan-2025-era and the benchmark is saturated (https://browser-use.com/posts/sota-technical-report, https://github.com/magnitudedev/webvoyager). Only residual tailwind: LLMs cut scraper-maintenance cost — equally available to incumbents. |
| fit | 4 | Founder can build the pipeline easily (elite AI/automation, Next.js+Supabase+Stripe) and it makes strong build-in-public content, but zero property-industry distribution or domain credibility in a trust-driven UK niche where incumbents own the buyer relationship. |

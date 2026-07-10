# Tender First-Draft Desk
Category: AI-service arbitrage | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: We monitor Find a Tender + framework portals for the client's CPV codes, deliver weekly go/no-go-scored matches, and produce a full first-draft quality submission (method statements, social value, case-study weaving from their past bids) within 72h of "go" — 2 drafts/mo included — so the SME bids on 2–3x more contracts without paying £4,000-per-bid consultants. ~80% AI-automated (long-context ingestion of full ITT pack + bid library), founder QA pass on each draft.
- Buyer: MD/bid lead of UK facilities-services SME (cleaning, security, grounds, care, M&E), 10–80 staff, £1–10m turnover, bidding or wanting to bid on public contracts.
- Price: £749/mo (monitoring + 2 first-draft bids; extra draft £249). Stripe subscription, async onboarding (upload 3 past bids + capability docs).
- Channel to first 10: 692K cold email list, UK services-SME segment (hypothesis: composition unverified — verify first). Angle, hyper-personalized from free Find a Tender data: "Your competitor [named] bid on 14 public contracts in your region last quarter; you appeared on 2. Here are the 6 live tenders closing in the next 30 days that match your CPV codes." Fallback named source: Find a Tender supplier lists + Constructionline directory for manual outreach (£0).
- Timing hypothesis: (a) Procurement Act 2023's enhanced Find a Tender / Central Digital Platform went live 24 Feb 2025 — every UK public notice now sits in one machine-readable feed, enabling both prospect-level personalization and automated opportunity matching; (b) 1M-token-context frontier models (Opus-class at $5/$25 per 1M tokens, 50% batch discount, 90% prompt-cache discount) make ingesting a complete ITT pack plus a 10-bid library in one pass cost <£1/bid — not feasible at mid-2024 context windows and prices. Human benchmark: consultancy bid writing runs ~£4,000 per bid.
- Citations:
  - https://www.gov.uk/government/publications/procurement-act-2023-short-guides/buyers-and-suppliers-how-to-use-the-central-digital-platform-the-enhanced-find-a-tender-service-html
  - https://assuredbid.co.uk/in-house-vs-outsourced-bid-writing-the-real-cost-of-building-a-bid-function-in-2026/
  - https://benchlm.ai/llm-pricing
  - https://www.tenderconsultants.co.uk/uk-public-procurement-statistics/

## R2 Timing Gate
Verdict: PASS (2026-07-10, fresh searches).
- Leg (a) VERIFIED: enhanced Find a Tender / Central Digital Platform went live 24 Feb 2025 under the Procurement Act 2023; all new-regime notices (pipeline through termination, above + below threshold ex-Scotland) publish as machine-readable OCDS open data with JSON/CSV download — https://www.gov.uk/government/publications/procurement-act-2023-short-guides/buyers-and-suppliers-how-to-use-the-central-digital-platform-the-enhanced-find-a-tender-service-html ; OCDS publication registry entry: https://data.open-contracting.org/en/publication/41 ; adoption still ramping mid-2025 per OCP's 3-month analysis: https://www.open-contracting.org/2025/06/23/uk-procurement-act-implementation-what-does-the-first-three-months-of-data-tell-us/
- Leg (b) VERIFIED with one correction: Claude Opus 4.5 launched 24 Nov 2025 at $5/$25 per 1M tokens (67% price cut), 50% batch discount, cache hits at 10% of input price — https://www.anthropic.com/news/claude-opus-4-5 ; https://simonwillison.net/2025/Nov/24/claude-opus/ ; https://platform.claude.com/docs/en/about-claude/pricing . Correction: Opus 4.5 is 200K-context; 1M-token windows are Sonnet/Gemini-class. Sub-£1 full-ITT ingestion still holds at $5/1M input with batch+cache, so the economic claim survives the imprecision.
- Age of edge: the conjunction (single national machine-readable feed AND <£1/bid ingestion economics) only became true 24 Nov 2025 → ~7.5 months old, within 12 months. No hard dated deadline ≤6mo ahead; leg (a) alone is 16.5 months stale, which caps the timing score.

## R3 Saturation Gate
Verdict: KILL-R3. Saturation 8/10 (crowded, funded). Graveyard: no. Buyer-view searches ("AI tender software UK SME", "bid writing service monthly retainer cleaning/facilities") return pages of substitutes bracketing the £749/mo monitoring+first-draft shape from below (self-serve SaaS, same vertical, £15–99/mo), beside (hybrid AI+human DFY services), and above (incumbent consultancy retainers).

| # | Competitor | URL | Note |
|---|-----------|-----|------|
| 1 | AutogenAI | https://venturebeat.com/ai/automated-proposal-writing-startup-autogenai-raises-39-5m-from-salesforce-ventures-and-others | UK AI bid-writing, $39.5M Series B (Salesforce Ventures/Spark), $65.3M total; founded by an ex-bid-writer; clients incl. Serco, Siemens |
| 2 | CleanTender | https://cleantender.co.uk/resources/comparisons/ai-tender-software | AI tender software built specifically for UK soft-FM SMEs (cleaning, security, grounds, waste, catering) at £99/mo — the exact target vertical at 1/7th the price |
| 3 | mytender.io | https://mytender.io/ | UK SME-priced AI tender writing + bid-management platform (assignment, deadlines, pipeline, analytics) |
| 4 | Bidwell | https://bidwell.app/blog/ai-proposal-writing-tools | UK public-sector-workflow AI proposal tool for SMEs, from £15/mo |
| 5 | bidtogether | https://www.intelligentsme.tech/2026/04/28/uk-firm-launches-ai-powered-bid-writing-service-to-open-up-tendering-for-smes/ | Launched Apr 2026: AI platform + professional bid writers producing tailored tender responses "at a cost accessible to all" — same hybrid DFY shape, 3 months old |
| 6 | Facilities Tenders / askabidwriter.com | https://www.facilitiestenders.co.uk/ | Tender notification + bid support on a monthly rolling contract for FM/cleaning — exact monitoring+DFY shape in the exact vertical |
| 7 | Complete Tenders | https://www.completetenders.com/ | Tender monitoring + outsourced bid-writing retainer at £3,100/mo — incumbent premium anchor for the identical bundle |
| 8 | Tenders-UK | https://www.tenders-uk.com/cleaning-tenders/ | Cleaning-tender specialist bid writers, claims 83% win rate over 4,000+ bids |

Also present, uncounted: Executive Compass (FM/security/cleaning bid consultancy, https://www.executivecompass.co.uk/industries/facilities-management/cleaning-tender/), TenderHelp retainers (https://www.tenderhelp.co.uk/cleaning-bid-writing), SwiftBid per-bid AI £149 (via https://bidwell.app/blog/ai-proposal-writing-tools), plus prompt-flagged Tenderbolt AI / Tended.ai / Stotles (not independently verified, not needed for the verdict). A facilities-SME buyer searching today finds funded platforms, a same-vertical £99/mo product, multiple same-shape DFY services, and dozens of established consultancies with win-rate track records — a no-name solo desk at £749/mo has no open lane.

## R4 Red Team
Skipped — killed at R3 (saturation 8 > 6).

## Proposed Scores
- pain 5: real for SMEs already bidding (£4k/bid consultants vs feast-famine revenue — https://assuredbid.co.uk/in-house-vs-outsourced-bid-writing-the-real-cost-of-building-a-bid-function-in-2026/), but bidding more is optional growth, not mandated/existential.
- reach0 6: named £0 channel independent of the 692K list — FTS OCDS data is free/downloadable for competitor-activity personalization (https://data.open-contracting.org/en/publication/41) and can reach 100+ qualified FM MDs in week 1 via scraped outreach; still stone-cold outbound with no matching audience asset.
- ttfd 5: £749/mo DFY on revenue-critical bids won't be bought self-serve from a stranger; incumbents all sell via consultation (https://www.completetenders.com/), so realistic first deal is 30–60 days.
- margin 8: <£1/bid compute at $5/1M input with 50% batch + 90% cache discounts (https://www.anthropic.com/news/claude-opus-4-5); cash margin >90% but founder QA labor bounds throughput.
- timing 7: verified step-change on both legs (https://www.gov.uk/government/publications/procurement-act-2023-short-guides/buyers-and-suppliers-how-to-use-the-central-digital-platform-the-enhanced-find-a-tender-service-html; https://simonwillison.net/2025/Nov/24/claude-opus/), but no hard deadline ahead, the feed is 16.5 months old, and same-shape entrants shipped as recently as Apr 2026 — the window is open and visibly filling.
- fit 5: stack + elite AI/automation covers the build (stack+1 band), but zero distribution asset reaches FM buyers (@theoperator/Skool are AI-audience; 30K list irrelevant; 692K a liability) and UK bid craft (method statements, social value scoring — cf. sector vocabulary depth at https://cleantender.co.uk/resources/comparisons/ai-tender-software) is a new skill.

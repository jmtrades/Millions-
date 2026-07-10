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

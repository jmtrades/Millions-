# Fixed-Scope ChatGPT App Build for B2B SaaS (£2,950)
Category: R5 founder-orbit | Status: R5-generated 2026-07-10

## R1 Spec
- Offer: Productized 3-week build that puts a B2B SaaS product inside ChatGPT: one core use-case app on OpenAI's Apps SDK — MCP backend on the SaaS's API, custom in-chat UI component, OAuth, design-guideline compliance, and submission through OpenAI's app review into the App Directory (link-out monetization wired to the SaaS's own checkout). Fixed scope, fixed price, async onboarding (Tally intake + API docs + Loom); no sales call.
- Buyer: Bootstrapped/seed B2B SaaS founder who wants distribution to ChatGPT's 800M weekly users but can't pay agency rates or spare an engineer.
- Price: £2,950 one-time, fixed scope (50/50 split option), Stripe checkout. Maintenance retainer upsell £149/mo.
- Channel_first10 (£0): founder's LinkedIn + @theoperator build-in-public series ("shipping a SaaS into the ChatGPT directory in 21 days"); founder-crafted cold email (owned infra, his core craft) to 100 seed-stage SaaS founders whose changelogs mention MCP/AI.
- Timing_hypothesis: OpenAI opened third-party app submissions and launched the in-product App Directory (announced Dec 2025; approved apps rolling out to users from early 2026, VentureBeat/OpenAI) after the Apps SDK preview (Oct-Nov 2025) — a ≤9-month-old distribution land-grab where agencies quote $25K+ for comparable MCP scope. ≤12mo, dated.
- Pass-pattern: (3) performance-priced craft service — founder's production MCP/agent experience is the moat, prepaid fixed scope bounds downside for both sides; rides pattern-2 "install into existing stack" (the SaaS's live API, zero migration).
- Kill-pattern clearance: K3 — Speakeasy/Stainless auto-generate raw MCP tool servers from OpenAPI, but NOT Apps SDK UI components, design-review compliance, or directory submission (verified: their docs cover SDK/MCP codegen only). K8 — incumbents (MCP dev shops) price $25K-$400K AFTER the tooling collapse; founder productizes below them, not against a pre-collapse cheap incumbent. K2 — SDK docs are free but the buyer is paying for delivery + acceptance through review, not knowledge. K6 — no marketplace; first £ = one SaaS founder.
- Citations:
  - https://openai.com/index/developers-can-now-submit-apps-to-chatgpt/
  - https://venturebeat.com/technology/openai-now-accepting-chatgpt-app-submissions-from-third-party-devs-launches
  - https://developers.openai.com/apps-sdk/build/monetization (link-out monetization rules)
  - https://tripleminds.co/blogs/costing/mcp-development-cost/ ($25K+ incumbent floor)
  - https://www.speakeasy.com/product/mcp-server + https://www.stainless.com/docs/mcp/ (codegen scope = kill-check)

## R2 Timing Gate (verified 2026-07-10) — PASS
- Directory live + submissions open: OpenAI opened third-party app submissions 2025-12-17 and launched the in-ChatGPT App Directory; all submissions pass automated scans + manual review before listing; approved apps rolling out to users from early 2026. Dashboard status tracking + Jan 21 2026 "Build Hour" dev webinar confirm an operating pipeline, not vaporware.
  - https://openai.com/index/developers-can-now-submit-apps-to-chatgpt/
  - https://venturebeat.com/technology/openai-now-accepting-chatgpt-app-submissions-from-third-party-devs-launches
  - https://help.openai.com/en/articles/20001040-submitting-apps-to-the-chatgpt-app-directory
- Review times: no official SLA; OpenAI says timelines "may vary"; developer community threads report waits stretching to 60–120 days for some apps. Material to the 3-week promise (see R4).
  - https://community.openai.com/t/i-submitted-an-app-how-long-should-the-review-process-take/1369797
  - https://community.openai.com/t/app-review-process-timelines-for-chatgpt-app-store/1378947
- Monetization real, exactly as offer assumes: external checkout / link-out to the developer's own domain is OpenAI's recommended and generally-available approach; in-app checkout (ChatGPT payment sheet / Agentic Commerce Protocol) is beta, select marketplace/physical-goods partners only, rev-share TBA. So "link-out wired to the SaaS's own checkout" is the correct GA path for B2B SaaS in July 2026.
  - https://developers.openai.com/apps-sdk/build/monetization
- Apps SDK maturity: launched Oct 2025, submissions Dec 2025, active official docs (build/deploy/guidelines), agencies shipping on it, 2026 how-to guides — young but production-usable for the scoped deliverable; commerce features still phasing in.
  - https://developers.openai.com/apps-sdk
  - https://www.snaplama.com/blog/how-to-create-chatgpt-apps-and-monetize-them-complete-2026-guide
- $25k+ incumbent claim verified: 2026 MCP dev pricing guides converge on $25k entry for a small fixed-scope server, $25k–$150k typical range, $60k–$120k production multi-tenant.
  - https://www.bacancytechnology.com/blog/mcp-server-development-cost
  - https://launchdayadvisors.com/guides/mcp-server-cost
  - https://amitkoth.com/mcp-server-development-cost/
- Caveat found (feeds R4): apps are available to logged-in users OUTSIDE the EEA, Switzerland and the UK; EU/UK availability still "expected soon" as of mid-2026 (UK got ChatGPT ads June 2026, not apps).
  - https://help.openai.com/en/articles/6825453-chatgpt%E2%80%91release%E2%80%91notes
  - https://mlq.ai/news/openai-rolls-out-chatgpt-app-store-for-third-party-developer-apps/
- Verdict: timing thesis accurate and dated (~7-month-old land-grab, ≤12mo). PASS.

## R3 Saturation Gate (verified 2026-07-10) — PASS, score 4/10
- Named competitors selling ChatGPT-app/Apps-SDK builds as a service: SECL Group ("ChatGPT App Development Services," self-describes as "one of the few teams worldwide with proven experience," functional version "in a few weeks," quote-based) and OpenForge (Apps SDK builds, "most MVPs 4–6 weeks," quote-based agency pricing). Both are custom-quote agencies, not fixed-price productized offers.
  - https://seclgroup.com/services/chatgpt-app-development-services/
  - https://openforge.io/solutions/chatgpt-app-development/
- MCP dev shops occupy the $25k+ fixed-scope slot (single-integration MCP server, ~4 weeks, $25k) — an order of magnitude above £2,950 and without Apps SDK UI/design-review/directory submission.
  - https://www.bacancytechnology.com/blog/mcp-server-development-cost
  - https://launchdayadvisors.com/guides/mcp-server-cost
- Freelance floor: Upwork ChatGPT developers at $30–150/hr, generic API/chatbot integration gigs; no productized "your SaaS into the App Directory, fixed price, through review" offer surfaced on Upwork/Fiverr in search.
  - https://www.upwork.com/hire/chatgpt-developers/
- Speakeasy/Stainless remain autogen tooling, not delivery services (R1 kill-check stands).
- Read: the category exists (2 named agencies + hourly freelancers) so not virgin ground, but the specific ~£3k fixed-scope productized slot with submission compliance bundled is unoccupied in findable results 7 months post-launch. Score 4/10 → below kill line. PASS.

## R4 Red Team (2026-07-10) — defensible: TRUE
- Strongest failure case: the offer's literal promise — "submission through OpenAI review into the App Directory" — hinges on a queue the founder doesn't control and a directory his home market can't even see. (1) No review SLA; developer-reported waits of 60–120 days vs a 3-week delivery cycle — the second £1,475 tranche and refund exposure hang on OpenAI's queue, and rejection reasons (tool annotations, test credentials, prohibited commerce, incomplete functionality, misleading metadata, privacy-policy requirements) are enforced via manual review with email appeals. (2) Apps unavailable to EEA/Switzerland/UK users as of mid-2026: any buyer whose users skew UK/EU gets an app ~none of their users can open — ROI unprovable, and the UK founder can't natively demo from a UK consumer account. (3) Directory discovery for long-tail niche B2B apps is unproven; launch coverage centers consumer-scale partners, and B2B SaaS gets link-out only (no in-app checkout), so "distribution to 800M users" over-promises what a listing delivers.
  - https://community.openai.com/t/app-review-process-timelines-for-chatgpt-app-store/1378947
  - https://developers.openai.com/apps-sdk/app-submission-guidelines
  - https://developers.openai.com/apps-sdk/deploy/submission
  - https://help.openai.com/en/articles/6825453-chatgpt%E2%80%91release%E2%80%91notes
- Strongest rebuttal: economics don't depend on the queue or the directory. 50/50 split banks £1,475 at kickoff; the app is fully usable by the buyer's own users pre-listing (dev mode/direct link), so value lands at build-complete, not at approval. Documented rejection reasons are mechanical compliance items — precisely what a productized guideline-compliant process de-risks, and rejected apps can be fixed and resubmitted per OpenAI's own process. The EEA/UK gap is a targeting filter, not a structural kill: aim outbound at US-market SaaS, and OpenAI states EU availability is coming (Go and ads already expanded to Europe H1 2026). Survivable IF the contract words the deliverable as "built to guidelines + submitted, approval best-efforts" and milestone 2 triggers on submission, not approval.
- Verdict: TRUE (defensible) — with mandatory scope-language fix on the review promise. PASS.

## Scores (2026-07-10, harsh)
- pain 4 — greed/FOMO play, not bleeding pain; no SaaS breaks without a ChatGPT listing; ROI story currently unprovable (R4).
- reach0 7 — ICP precisely findable (changelogs mentioning MCP/AI), @theoperator SaaS-founder overlap + LinkedIn + crafted cold email are real £0 channels for exactly this buyer.
- ttfd 6 — first £ = 50% deposit (£1,475) can land in ~1–2 weeks of outbound; but selling a novel £3k offer cold usually needs pipeline weeks; full cash in ~5 weeks.
- margin 4 — £2,950 ÷ 3 weeks ≈ £983/wk gross for an elite UK engineer who bills £800–1,200/day; heavy scope (MCP + custom UI + OAuth + compliance + submission) invites creep; review-babysitting unpaid; £149/mo retainer only helps later.
- timing 8 — verified 7-month-old window, directory live, monetization GA via link-out, competitors still custom-quote; deducted for review-queue chaos and EEA/UK gap muddying "now."
- fit 9 — MCP backend + API integration + in-chat UI + OAuth + productized async delivery + crafted outbound is squarely the founder's stack; only drag is total dependence on a platform whose rules are 7 months old.
- TOTAL 38/60. Survived all gates.

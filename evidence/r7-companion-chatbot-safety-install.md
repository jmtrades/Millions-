# r7-companion-chatbot-safety-install — SB 243 / NY 390-e Companion-Bot Safety Install

## R1 Spec

- **Name:** Companion Chatbot Safety Install (SB 243 + NY compliance sprint)
- **Slug:** r7-companion-chatbot-safety-install
- **Buyer (exact):** Founder/CTO of revenue-generating indie companion/character/roleplay AI apps and "AI friend" features (typically 1–15 staff, subscription apps on App Store/Google Play/web, US users incl. California + New York). "Operator" = anyone making a companion chatbot platform available to a user in the state, so every US-facing companion app is in scope regardless of company location.
- **Offer (outcome + scope):** 1–2 week fixed-scope engineering install that ships the statutory safeguards in-product: (1) clear-and-conspicuous AI disclosure UX (CA: where a reasonable person could be misled; NY: at session start and every 3 hours in ongoing interactions); (2) minor-mode: break reminders every 3 hours, "not suitable for some minors" disclosure, sexually-explicit-content gating for minors; (3) crisis protocol wiring — self-harm/suicidal-ideation classifier routed to crisis-referral notification (988 et al.) with logging; (4) evidence pack: protocol documentation + event logs schema that pre-builds the annual OSP report due from 1 Jul 2027. Delivered as code merged into their stack, not a PDF. "Work with your counsel" language throughout — engineering implementation of published statutory requirements, not legal advice.
- **Price + billing:** £1,950 fixed install, 100% prepaid via Stripe; £750 48h gap-assessment (recorded teardown against the statutory checklist) credited against the install. Templated protocol kit makes install #3+ mostly reuse.
- **Channel_first10 (£0, named):** (1) @theoperator short-form: "California now fines companion bots $1,000 per violation — most indie AI apps are exposed; here's the 4-part fix" — the AI-builder audience contains and borders companion-app builders; (2) self-built operator list: scrape App Store/Google Play "AI companion / AI girlfriend / character chat" categories (hundreds of nameable apps), founder's deliverability/outbound craft for a 50/day personalised sequence — self-sourced, not the dead 692K/30K lists; (3) Skool community + X builder circles where character-app devs congregate. £0 spend.
- **Timing hypothesis (verified, dated/live):** CA SB 243 signed 13 Oct 2025 (Chapter 677), in force **1 Jan 2026**; private right of action live — greater of actual damages or **$1,000 per violation** plus attorney's fees; NY GOL Art. 47 companion-chatbot law effective **5 Nov 2025** (AG-enforced). Annual OSP reporting hits **1 Jul 2027** (12 months out — roadmap pressure, not the wedge). Live enforcement wave rather than future deadline: two states already in force, more states copying (FPF tracks the wave), plaintiff bar signposted ("Opens the Door to Private Lawsuits" — NLR). WALK-BACK CHECK DONE: July 2026 search shows no delay, no material amendment, no injunction/strike-down; law chaptered and operative.
- **Kill clearance:**
  - K4 expired premise: walk-back search run 11 Jul 2026 — in force, unchallenged (citations 1, 7).
  - K7 docs/UPL: deliverable is merged code + UX, sold to indie founders on a card — no procurement motion; UPL avoided because the work implements published statutory specs (law-firm checklists are the spec) with explicit counsel-referral language; precedent: surviving EAA/consumer-duty packs carry the same posture with lower engineering content.
  - K5 platform absorption: the companion apps ARE the platform layer; model API vendors (OpenAI etc.) don't ship CA/NY-specific product UX, age-flow logic, or operator-side crisis protocols. No app-store-level compliance feature exists.
  - K2 free substitutes: free material = law-firm alerts and FPF explainers (guidance, not implementation); no state-provided tooling.
  - K3 lead-magnet audits: law firms sell enterprise advisory retainers, not SMB-priced engineering; no incumbent gives away an implementation.
  - K1 vertical software feature: no "companion-app ops platform" exists to ship it; buyers run custom stacks.
  - K6 offshore/white-label incumbents: searched — visible sellers are AmLaw firms (Gunderson, Skadden advisories); zero productized SMB implementation services found.
  - K8 name-identical SEO product: none — "SB 243 compliance" SERP is 100% law-firm content.
  - K9 liquidity: none needed. K10: no capability claim vs incumbents — classifier + UX wiring is commodity engineering the founder already does in production.
- **Self-scores (new formula, KPI = cash collected):**
  - ttfd 8 (indie founders decide fast, prepaid Stripe, fear-driven; first paid gap-assessment inside 7–14 days via audience post + direct outreach to scraped operator list)
  - timing 9 (two state laws already in force with live $1,000/violation private right of action + AG enforcement; statutory wave spreading — live enforcement, not soft narrative)
  - **Velocity = (8 × 9)/2 = 36**
  - pain 7 (per-violation PRA exposure is existential for a subscription app at scale and plaintiff bar is primed, but a slice of indie operators will ignore until first suits — honest discount)
  - reach0 7 (audience adjacency strong, buyers trivially enumerable from app stores, outbound craft is the founder's asset; not a perfect audience-centre hit like art50)
  - margin 9 (protocol kit + classifier templates reused; solo delivery in days)
  - saturation 3 → contributes (10−3)=7 (only law-firm advisories; no productized implementation competitor found in dedicated search)
  - fit 9 (chatbot/agent engineering is literally the founder's production craft)
  - **Total = 36 + 7 + 7 + 9 + 7 + 9 = 75** (> 59 bar)
- **Non-duplication note:** No survivor touches US state chatbot-safety law or companion apps. Distinct from agent-stack security audit (security posture, agency buyers) and from AI Act suite (EU, agencies/providers). One bill-text nuance held honestly: an early SB 243 draft's third-party audit mandate was removed before enactment — offer is NOT positioned as a statutory "audit," it is the safeguards implementation itself.

### Citations
1. SB 243 bill text / status (Chaptered, effective 1 Jan 2026): https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260SB243
2. Gunderson Dettmer client insight — operator compliance requirements: https://www.gunder.com/en/news-insights/insights/client-insight-california-sb-243-new-compliance-requirements-for-operators-of-ai-companion-chatbots
3. Skadden — disclosure, safety protocol, annual reporting (from 1 Jul 2027): https://www.skadden.com/insights/publications/2025/10/new-california-companion-chatbot-law
4. Troutman (Jan 2026) — analyzing the new CA + NY companion chatbot laws: https://www.troutmanprivacy.com/2026/01/analyzing-the-new-ai-companion-chatbot-laws/
5. National Law Review — SB 243 opens the door to private lawsuits ($1,000/violation): https://natlawreview.com/article/when-ai-feels-human-californias-sb-243-opens-door-private-lawsuits
6. FPF — the new wave of chatbot legislation (multi-state spread): https://fpf.org/blog/understanding-the-new-wave-of-chatbot-legislation-california-sb-243-and-beyond/
7. Walk-back check trail (LegiScan chaptered text; no 2026 amendment/injunction found): https://legiscan.com/CA/text/SB243/id/3273344
8. Signing announcement (first-in-nation safeguards, 13 Oct 2025): https://sd18.senate.ca.gov/news/first-nation-ai-chatbot-safeguards-signed-law

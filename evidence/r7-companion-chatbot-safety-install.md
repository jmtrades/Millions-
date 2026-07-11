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

---

## R2 Timing Gate (hostile verification, 2026-07-11) — PASS with downgrades

**Verified true:**
- CA SB 243 chaptered, in force **1 Jan 2026**; PRA = injunctive relief + greater of actual damages or **$1,000/violation** + attorney's fees. Confirmed: https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260SB243 ; https://natlawreview.com/article/when-ai-feels-human-californias-sb-243-opens-door-private-lawsuits ; https://www.gunder.com/en/news-insights/insights/client-insight-california-sb-243-new-compliance-requirements-for-operators-of-ai-companion-chatbots
- **Caveat the scout under-weighted:** PRA requires plaintiff to show **"injury in fact"** caused by a violation (NLR, Gunderson) — not GDPR-style strike-suit statutory damages for bare technical non-compliance. Blunts "existential per-violation exposure" for apps with no harmed user.
- NY companion-chatbot law effective **5 Nov 2025** — confirmed, but scout mislabeled statute book: it is **General Business Law Article 47** (A6767 lineage), not "GOL". Substance/date correct. AG-enforced, civil penalties up to **$15,000/day**; narrow private action for users physically/financially harmed via self-harm. https://www.fenwick.com/insights/publications/new-yorks-ai-companion-safeguard-law-takes-effect ; https://www.mofo.com/resources/insights/251120-new-york-and-california-enact-landmark-ai ; https://www.nysenate.gov/legislation/bills/2025/A6767
- Regulator posture is live: Hochul sent notification letters to AI companion companies that safeguards are in effect: https://www.governor.ny.gov/news/governor-hochul-pens-letter-ai-companion-companies-notifying-them-safeguard-requirements-are
- Multi-state wave confirmed (Orrick Apr 2026 survey of 2026 state chatbot laws; FPF): https://www.orrick.com/en/Insights/2026/04/2026-State-Chatbot-Laws-Key-Provisions-and-Regulatory-Trends ; https://fpf.org/blog/understanding-the-new-wave-of-chatbot-legislation-california-sb-243-and-beyond/
- Walk-back/injunction: **no SB 243 or NY Art. 47 injunction, amendment, or delay found** as of 11 Jul 2026.

**Downgrade evidence:**
- **Zero lawsuits found filed under SB 243's PRA** ~6.5 months after effect — enforcement under the statute itself is still THEORETICAL. The live-money events are pre-statute product-liability suits: Character.AI + Google settled five wrongful-death suits Jan 2026 (Garcia/Setzer anchor + CO/NY/TX): https://fortune.com/2026/01/08/google-character-ai-settle-lawsuits-teenage-child-suicides-chatbots/ ; https://www.cnbc.com/2026/01/07/google-characterai-to-settle-suits-involving-suicides-ai-chatbots.html ; https://www.axios.com/2026/01/07/google-character-ai-lawsuits-teen-suicides
- Constitutional-challenge climate hostile to CA speech-adjacent tech law: 9th Cir. (12 Mar 2026) kept 5 AADC provisions enjoined, striking vague terms — a template for a future SB 243 challenge (none filed yet): https://www.crowell.com/en/insights/client-alerts/netchoice-llc-v-bonta-what-the-ninth-circuits-ruling-could-mean-for-online-speech-regulation

**Verdict:** Dates and mechanisms verify; no walk-back. "Live enforcement wave" was overstated (letters + adjacent settlements, no statute suits). Timing 9→**7**.

## R3 Saturation Gate (2026-07-11) — PASS at sat=5 (scout's 3 was inflated)

**Who sells SB-243 implementation to indie companion devs:**
- Trust-&-safety vendors are marketing SB 243 content but sell ENTERPRISE guardrails/red-teaming/observability, not £2K installs: ActiveFence https://www.activefence.com/blog/california-ai-laws-sb243-sb53 ; Cinder (ex-Meta, enterprise T&S ops) https://cinder.ai/ ; ecosystem survey https://www.techpolicy.press/the-evolving-trust-and-safety-vendor-ecosystem/
- **No productized indie-priced "SB 243 compliance install" found** in dedicated search; SERP remains law-firm advisories (Gunderson, Skadden, Troutman, Fenwick, Manatt, MoFo, Orrick) — guidance, not implementation. Scout's core claim holds.
- **BUT the offer's technical core is free commodity:** OpenAI Moderation API is free to all developers with `self-harm/intent` and `self-harm/instructions` classes: https://openai.com/index/upgrading-the-moderation-api-with-our-new-multimodal-moderation-model/ ; https://developers.openai.com/api/docs/guides/moderation ; Hive ships a self-harm text class: https://docs.thehive.ai/docs/detailed-class-descriptions-text-moderation — and the buyer is by definition a chatbot developer who can wire a free endpoint to a 988 banner from free law-firm checklists.
- **Incumbent playbook is copyable free:** Character.AI's public response = ban under-18 open-ended chat (Nov 2025) + "age assurance" rollout — i.e., the cheapest minors-compliance path is age-gating minors OUT, which collapses the minor-mode scope item of this offer: https://www.cnbc.com/2026/01/07/google-characterai-to-settle-suits-involving-suicides-ai-chatbots.html ; https://www.k12dive.com/news/characterai-google-agree-to-mediate-settlements-in-wrongful-teen-death-la/809411/ ; OpenAI's crisis-routing approach is published: https://openai.com/index/helping-people-when-they-need-it-most/
- **Buyer pool is small, not large:** Appfigures-based counts show ~**337 active revenue-generating AI companion apps worldwide** (128 launched 2025); top 10% capture **89% of category revenue**; only ~33 apps >$1M lifetime consumer spend; $221M cumulative spend to Jul 2025: https://companionrater.com/ai-companion-statistics-2026 ; https://electroiq.com/stats/ai-companions-statistics/ ; https://sensortower.com/blog/state-of-ai-apps-market-overview-2025 — i.e., a thin middle band (~100–250 credible £1,950 buyers incl. web-only platforms) between broke long-tail and in-house-teams top decile. A 50/day sequence exhausts the store-scraped list in ~1–2 weeks.

**Verdict:** Direct paid competition ≈ zero (keeps sat below kill line), but free-commodity components + technical buyers + copyable incumbent playbook + tiny pool = **sat 5** (contributes 10−5=5). 5 ≤ 6 → no kill.

## R4 Red Team (2026-07-11) — rebuttal partially defensible; discounts applied

**Strongest failure case (searchable facts):**
1. **Life-safety liability asymmetry at £1,950:** the exact system he'd wire (self-harm classifier → crisis protocol) has a failure mode of a dead teenager and multi-party US litigation. Character.AI, its founders AND Google settled five wrongful-death suits (Jan 2026, confidential terms) — plaintiffs' bar is funded, active, and names everyone adjacent: https://fortune.com/2026/01/08/google-character-ai-settle-lawsuits-teenage-child-suicides-chatbots/ ; https://openclassactions.com/lawsuits/character-ai-google-teen-harm-lawsuits-settlement.php ("more families keep filing"). A paid "safety installer" whose evidence pack sits in discovery is a foreseeable witness/co-defendant; US-exposure PI insurance for life-safety software work plausibly costs more per year than several installs return.
2. **Buyer pool behavior = ignore until sued:** only **15% of mental-health apps** even link the national 988 line (Psychiatric Services / Medscape 2025): https://www.medscape.com/viewarticle/mental-health-apps-slow-embrace-988-crisis-hotline-2025a1000nm4 ; https://psychiatryonline.org/doi/10.1176/appi.ps.20240485 — the compliance-averse (revenue-rich, NSFW-adjacent) half of the pool doesn't buy prevention; the compliance-inclined half can DIY free.
3. **Platform policy outruns law:** after TTP's Jan 2026 report found 100+ nudify apps, Apple and Google each removed 2-dozen+ within days: https://www.techtransparencyproject.org/articles/apple-and-google-are-steering-users-to-nudify-apps ; NSFW companion economy already pushed off-store to web — an App Store policy shift can vaporize an indie buyer (and the scraped pipeline) faster than any statute.

**Strongest rebuttal:** Contractor implements the OPERATOR's counsel-owned protocol to published mechanical specs (NY's exact 16-pt disclosure text; 3-hr cadences; 988 referral); classifier liability sits upstream with OpenAI/Hive; standard liability caps + UK jurisdiction + £2K contract = unattractive defendant; no precedent found of an implementation contractor named in these suits; and the settlements + Hochul letters are precisely the fear that converts operators NOW. Decline NSFW clients to cut payment/reputational risk (though that halves the already-small pool).

**Defensible: PARTIALLY TRUE.** The legal-posture rebuttal stands (subcontract + caps + operator ownership is how agencies touch regulated systems), but the economics do not: risk-adjusted return of holding crisis-protocol exposure at £1,950/unit into a ~100–250-name pool, with insurance and one-incident brand risk to @theoperator, prices the offer's fit and pain down decisively.

## Gate Verdict + Rescore (hostile, 2026-07-11)

| dim | scout | gate | why |
|---|---|---|---|
| pain | 7 | 6 | injury-in-fact hurdle; zero SB 243 suits in 6.5 months; segment's demonstrated 988 apathy |
| reach0 | 7 | 5 | list is real + enumerable but ~337 revenue apps worldwide, exhausted in weeks; @theoperator↔companion-dev overlap asserted, never evidenced |
| ttfd | 8 | 7 | prepaid wedge vs cold compliance-fear conversion to founders who ignore safety |
| margin | 9 | 8 | free APIs + kit, but every install merges into a different custom stack |
| sat | 3 | 5 | zero paid competitors, but free classifier + free checklists + copyable Character.AI playbook + technical buyers |
| timing | 9 | 7 | in force + wave + AG letters, but statute enforcement theoretical; 9th-Cir. climate |
| fit | 9 | 7 | mechanical statutory specs are installable craft; US-law/life-safety spine is not |

**new_total = (7×7)/2 + 6 + 5 + 8 + (10−5) + 7 = 24.5 + 31 = 55.5 < 59 bar → KILL-R4 (aggregate).** Gates R2/R3 cleared on facts; dies at red team + entry bar: liability-asymmetric offer into a small, bifurcated pool (DIY-capable compliers vs sue-me ignorers) with overstated enforcement heat.

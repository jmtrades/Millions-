# r7-art50-marking-install — Art.50(2) Synthetic-Content Marking Install for AI Product Providers

## R1 Spec

- **Name:** Art.50 Marking Install (Synthetic-Media Marking Sprint)
- **Slug:** r7-art50-marking-install
- **Buyer (exact):** Founder/CTO of small AI product companies (1–50 staff) that generate synthetic output for EU users — genAI SaaS, AI voice-agent providers, avatar/video tools, AI content features inside vertical SaaS, and agency-built AI products sold under the client's own name. These are "downstream providers" of an AI system under Art.50(2) even when built on GPT/Claude/Gemini APIs. NOT the agency-deployer buyer of the surviving i1 AI Act deployer pack — this is the provider side (product companies), a distinct buyer the survivor does not serve.
- **Offer (outcome + scope):** 2-week fixed-scope DFY install making the product's outputs Art.50(2)-compliant before enforcement: (1) output-pipeline audit — where upstream C2PA manifests get stripped by the product's post-processing/CDN; (2) implement two active machine-readable marking layers per the Code of Practice (C2PA manifest signing/re-signing + invisible watermark or metadata+fingerprint layer; disclosure UX for chatbot/deepfake surfaces); (3) verification endpoint + a written Art.50 conformity note mapped to the Code's measures; optional Code-of-Practice signatory prep. Downsell: 48h marking-gap audit £1,450 credited against the install.
- **Price + billing:** £2,950 fixed, 100% prepaid via Stripe (audit-only £1,450 prepaid). Two installs/week solo capacity ≈ £23k/mo ceiling before productizing templates (£199 starter kit as zero-marginal-cost ladder rung).
- **Channel_first10 (£0, named):** (1) @theoperator short-form series "your AI product becomes illegal in the EU on 2 Aug — here's the 2-layer fix," CTA to Stripe-prepaid audit — the audience IS AI/automation practitioners and agency owners who ship AI products; (2) Skool community pinned offer + live teardown of one member's output pipeline; (3) direct DMs to the ~30 in-network builders known to sell AI SaaS/voice agents into the EU. No purchased lists, no ad spend. First 10 buyers are nameable from audience + community membership.
- **Timing hypothesis (verified, dated):** Code of Practice on Transparency of AI-Generated Content published by the AI Office **10 Jun 2026**; initial-signatory window closes **22 Jul 2026** (11 days out — a news moment to sell against); Art.50 obligations + penalties (up to €15M or 3% worldwide turnover, Art.99(4)) become binding **2 Aug 2026** (22 days out); systems placed on market before 2 Aug get a grace period only for the 50(2) watermarking duty until **2 Dec 2026** — a second dated wave for the back-book. WALK-BACK CHECK DONE: the May 2026 Digital Omnibus agreement postponed high-risk deadlines to 2027/28 but explicitly left Article 50 untouched; a dedicated practitioner post is titled "Article 50 transparency obligations: the AI Act deadline of 2 August 2026 that has not been postponed."
- **Why the platform doesn't absorb it (kill 5) / kill clearance:**
  - K5 platform absorption: Commission draft transparency Guidelines (May 2026) only "encourage" model-level marking by GPAI providers; the Art.50(2) duty sits with the downstream system provider, and the Code requires at least two active marking layers with robustness — upstream C2PA from OpenAI/Google is routinely stripped by the buyer's own resize/transcode/CDN pipeline and doesn't survive text copy-paste, so integration work remains squarely on the product company.
  - K1 vertical software feature: no PMS-equivalent exists; C2PA tooling vendors sell SDKs/certificates, not compliance integration of a specific product's pipeline.
  - K2/K3 free substitutes/lead-magnet audits: free material is guidance (Commission guidelines, law-firm alerts), not engineering; the deliverable is shipped code + evidence, not a PDF.
  - K4 expired premise: walk-back search run — not delayed (see citations 3–4).
  - K6 offshore incumbents: none found selling SMB-priced Art.50 marking installs; the visible ecosystem is enterprise law firms (Bird & Bird, Sidley), C2PA conformance-programme enrolment, and content sites.
  - K7 docs-to-procurement: buyer is a founder buying an engineering outcome on a card, not a SOC2-style procurement motion; no UPL exposure (technical implementation, counsel-referral language included).
  - K8 name-identical SEO product: searched — guides (ActReady, EU AI Compass, InCyan) exist; no established "Art.50 marking install/sprint" productized service.
  - K9 two-sided liquidity: none needed. K10 capability-claim vs incumbents: service rides the founder's existing production-pipeline skillset, not a capability bet.
- **Self-scores (new formula, KPI = cash collected):**
  - ttfd 9 (first prepaid audit <14d: owned audience + 22-day statutory panic window + prepaid Stripe link)
  - timing 10 (two hard dates ≤5 months: 2 Aug 2026 penalties live, 2 Dec 2026 legacy watermark grace; CoP signature 22 Jul)
  - **Velocity = (9 × 10)/2 = 45**
  - pain 8 (€15M/3% exposure + EU enterprise customers now asking vendors for Art.50 evidence; Sidley/Bird & Bird pushing urgency)
  - reach0 8 (owned @theoperator audience + Skool are exactly AI product builders; no dead lists involved)
  - margin 8 (solo delivery, reusable marking pipeline components + templates after install #2)
  - saturation 5 → contributes (10−5)=5 (guides, C2PA SDK vendors, enterprise law firms are visible; SMB DFY implementation gap is open but the space is forming fast — honest mid score)
  - fit 9 (elite AI/automation engineer; C2PA signing, watermark integration, webhooks, Next.js/Stripe — dead-centre craft)
  - **Total = 45 + 8 + 8 + 8 + 5 + 9 = 83** (> 59 bar)
- **Non-duplication note:** Survivor "AI Act agency suite" = Art.50 deployer pack + disclosure SaaS for agency deployers. This candidate sells engineering installs to AI system providers (product companies) against the 50(2) marking duty — different buyer, different statute limb, different deliverable; the seed brief itself designates it distinct.

### Citations
1. Code of Practice on marking and labelling of AI-generated content — published 10 Jun 2026: https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content
2. Signature window / published ahead of August deadline (22 Jul 2026 signatory cutoff): https://acompli.ie/news/ai-transparency-code-published-june-2026/
3. Walk-back check — "the AI Act deadline of 2 August 2026 that has not been postponed": https://www.aiactblog.nl/en/posts/article-50-transparency-deadline-2-august-2026
4. Omnibus postponed high-risk only; Art.50 untouched; 2 Dec 2026 grace for pre-market systems: https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/
5. Preparing for 2 Aug 2026 compliance (penalty tier €15M/3%): https://datamatters.sidley.com/2026/06/24/eu-ai-act-transparency-obligations-preparing-for-compliance-by-2-august-2026/
6. What comes due 2 Aug 2026 + omnibus reset analysis: https://compliancehub.wiki/eu-ai-act-article-50-transparency-digital-omnibus-2026/
7. Two active marking layers required under the Code (50(2) criteria): https://compliancehub.wiki/eu-ai-act-marking-labelling-code-of-practice-article-50-2026/
8. Code multilayer marking approach (Bird & Bird analysis): https://www.twobirds.com/en/insights/2026/taking-the-eu-ai-act-to-practice-understanding-the-draft-transparency-code-of-practice
9. Draft Commission Guidelines — downstream provider determination; model-level marking only "encouraged": https://www.globalpolicywatch.com/2026/05/10-takeaways-european-commission-draft-guidelines-on-ai-transparency-under-the-eu-ai-act/
10. Major-model C2PA deployment + stripping/robustness gap context: https://c2paviewer.com/articles/eu-ai-act-content-credentials

---

## R2 TIMING — PASS (gate run 2026-07-11, hostile verification, fresh searches)

All four load-bearing claims verified against primary/independent sources:

1. **CoP published 10 Jun 2026; initial-signatory window closes 22 Jul 2026 18:00 CEST** — CONFIRMED. Commission policy page + signing FAQ: "signatories must submit their completed forms by 22 July 2026, 18:00 CEST" to appear on the initial-signatory list published before 2 Aug 2026. Providers/deployers subject to Art.50(2)/50(4) may sign.
   - https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content
   - https://digital-strategy.ec.europa.eu/en/faqs/signing-code-practice-transparency-ai-generated-content
   - https://www.jonesday.com/en/insights/2026/06/european-commission-publishes-final-code-of-practice-on-marking-and-labelling-aigenerated-content
2. **Post-Omnibus 50(2) grace to 2 Dec 2026 for pre-market systems only** — CONFIRMED. Omnibus deal closed 7 May 2026; high-risk deadlines postponed to 2027/28 but Art.50 NOT postponed; negotiated "watermarking compromise" = 4-month grace (to 2 Dec 2026) for the 50(2) machine-readable marking duty, only for systems placed on market before 2 Aug 2026; systems entering on/after 2 Aug 2026 must mark from day one (Commission had proposed 6 months, Parliament 3; landed at 4).
   - https://www.williamfry.com/knowledge/eu-ai-act-omnibus-deal-reached-postponed-deadlines-watermarking-compromise-and-the-nudificiation-prohibition/
   - https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/
   - https://www.modulos.ai/blog/eu-ai-act-omnibus-deal/
3. **Art.50 general duties apply 2 Aug 2026; penalties up to €15M or 3% worldwide turnover (Art.99(4))** — CONFIRMED.
   - https://artificialintelligenceact.eu/article/50/
   - https://artificialintelligenceact.eu/transparency-rules-article-50/
4. **Downstream system providers (SaaS on GPT/Claude/Gemini APIs) carry the 50(2) duty themselves; upstream model-level marking only "encouraged"; no single technique sufficient** — CONFIRMED. Commission draft transparency Guidelines: GPAI model-level marking is "encouraged" even where the model provider does not formally fall within Art.50; upstream marking-by-design is framed as a dependency that *enables* downstream providers to meet *their own* obligations (duty stays downstream). Code of Practice: "no single technique is sufficient on its own" — multi-layer (C2PA-signed metadata + imperceptible watermark) required.
   - https://www.globalpolicywatch.com/2026/05/10-takeaways-european-commission-draft-guidelines-on-ai-transparency-under-the-eu-ai-act/
   - https://www.twobirds.com/en/insights/2026/taking-the-eu-ai-act-to-practice-reading-the-commissions-draft-article-50-guidelines
   - https://www.twobirds.com/en/insights/2026/taking-the-eu-ai-act-to-practice-understanding-the-draft-transparency-code-of-practice

**Caveat carried into R3/pain (not a kill):** the legal duty sits downstream, but as of 19 May 2026 OpenAI ships BOTH required layers (C2PA manifest + SynthID watermark) on every API-generated image and is a C2PA Conforming Generator Product — so for non-stripping image products, substantive compliance may reduce to passthrough + disclosure UX. Scout's "doesn't discharge it" is formally right but overstated in practice for the easiest buyer segment.
   - https://help.openai.com/en/articles/8912793-c2pa-and-synthid-in-openai-generated-images
   - https://c2paviewer.com/articles/openai-google-c2pa-synthid-2026

## R3 SATURATION — PASS, sat = 5 (gate run 2026-07-11)

Who actually sells Art.50(2)/C2PA implementation to SMB AI products:

- **C2PA SDK/watermark vendors — tools and enterprise sales, not DFY installs.** Digimarc: "complex onboarding, licensing, and integration processes... best suited for large organizations with mature content protection requirements rather than startups." IMATAG: enterprise-focused pricing, entry Monitor plan from €299/mo, authenticity certification quote-only. Truepic: enterprise C2PA 2.0 SDKs/APIs, capture-authenticity niche. Steg.AI: platform/SDK with pricing page, C2PA integration — still a tool you integrate yourself.
  - https://media.toolsinfo.com/tool/digimarc
  - https://www.stork.ai/en/imatag
  - https://www.truepic.com/blog/truepic-first-with-c2pa-2-0-support-for-enterprises
  - https://steg.ai/pricing/
  - https://aiwatermarkhub.com/2026/02/04/synthid-alternatives-for-enterprise-synthetic-media-watermarking-2026
- **Explicit negative result:** targeted search for done-for-you / sprint / agency Art.50 marking implementation found none: "The search results don't specifically mention 'done for you' compliance services or sprint-based agencies for Article 50 compliance as of July 2026." The fixed-scope SMB install lane is unoccupied as of gate date.
- **BUT the adjacent shelf is crowding fast** — productized guides/checklists/kits that compete with the £1,450 audit layer for the "am I compliant?" dollar: ProofSnap checklist, GetProofAnchor guide, EU AI Compass "Article 50 Implementation Pack," InCyan guide, Pebblous, sota.io technical implementation guide, TechJacks "what to build."
  - https://getproofsnap.com/eu-ai-act-deadline.html
  - https://euaicompass.com/eu-ai-act-article-50-implementation-pack.html
  - https://sota.io/blog/eu-ai-act-gpai-watermarking-2026-technical-implementation-guide
  - https://techjacksolutions.com/ai-brief/eu-ai-act-article-50-compliance-what-to-build/
- **Upstream absorption shrinks the pain pool:** OpenAI (19 May 2026) marks every ChatGPT/Codex/API image with C2PA manifest + SynthID — exactly the two layers the Code wants — and conforming platforms can preserve/pass along the manifests. For clean-pipeline image products the install collapses to passthrough verification. Residual real pain: mark-stripping pipelines (resize/transcode/CDN), open-model voice/avatar/video stacks with NO upstream marks, and text (feasibility-qualified). The candidate's named buyers (voice agents, avatar/video tools) sit mostly in the residual pool.
  - https://help.openai.com/en/articles/8912793-c2pa-and-synthid-in-openai-generated-images
  - https://c2paviewer.com/articles/openai-google-c2pa-synthid-2026

**Score: sat 5/10** — direct lane empty (cited negative), but enterprise vendors above, free-content swarm below, and upstream absorption eating the easy middle. 5 ≤ 6 → no kill. Crowding priced into pain instead (8→6).

## R4 RED TEAM — PASS, defensible = TRUE (gate run 2026-07-11)

**Strongest failure case (evidenced):** *The buyer's fear is anticipatory, not felt — enforcement machinery is not pointed at SMBs in 2026.* First Art.50 enforcement actions are expected Q4 2026 with the AI Office prioritizing GPAI providers and high-visibility content generation services (https://sota.io/blog/eu-ai-act-gpai-watermarking-2026-technical-implementation-guide). Member-state enforcement is behind: only 9 Member States have designated both market surveillance + notifying authorities, 12 partial, 6 have designated nothing, despite the 2 Aug 2025 deadline (https://artificialintelligenceact.eu/national-implementation-plans/). A 10-person UK-based SaaS selling into the EU rationally discounts a €15M fine to near-zero for 2026 — so the £2,950 install is insurance sold against a regulator that in a third of member states does not yet exist. Secondary attacks: 22 Jul CoP hook stale in 11 days (minor — the voluntary Code's signatory list skews to big labs anyway); "written conformity note" edges toward assurance liability (manageable: technical mapping + counsel-referral language, no audit opinion).

**Licensing attack REBUTTED:** the invisible-watermark layer does NOT require Digimarc/IMATAG licensing that would blow the £2,950 price — Meta Seal (VideoSeal/AudioSeal/TextSeal) is an open-source, state-of-the-art watermarking suite across audio/image/video/text (https://facebookresearch.github.io/meta-seal/, https://github.com/facebookresearch/meta-seal), and C2PA signing tooling is open. Marginal cost ≈ signing certificate + solo time. Margin holds.

**Strongest rebuttal:** enforcement powers, including fines, DO transfer to national MSAs on 2 Aug 2026 (https://axis-intelligence.com/eu-ai-act-news/, https://bratby.law/ai-act-transparency-obligations-2026/); law firms are actively driving preparation urgency into vendor chains ahead of the date (https://datamatters.sidley.com/2026/06/24/eu-ai-act-transparency-obligations-preparing-for-compliance-by-2-aug-2026/ — Sidley, Jun 2026); and EU enterprise procurement passes Art.50 evidence demands downstream regardless of regulator readiness. The residual buyer pool (voice/avatar/open-model stacks) has no upstream-passthrough escape. Sold as "close the gap before your biggest customer or the 2 Dec back-book date forces it," the offer is honest and deliverable.

**Verdict: defensible TRUE** — provided pain is scored as statutory-deadline + procurement anxiety (6), not regulator-at-the-door (8).

## GATE SCORES (hostile re-score, 2026-07-11)

| axis | scout | gate | why (delta) |
|---|---|---|---|
| ttfd | 9 | 8 | prepaid £1,450 audit into owned audience inside 22-day window plausible <14d, but pain-6 buyers dawdle and it's peak summer |
| timing | 10 | 10 | verified: 2 Aug 2026 penalties + 2 Dec 2026 back-book grace, both hard, both ≤5 months |
| **velocity** | 45 | **40** | (8×10)/2 |
| pain | 8 | 6 | duty + €15M/3% real, but upstream absorption (OpenAI C2PA+SynthID on every API image), text feasibility qualifier, Q4-2026 GPAI-first enforcement, 6 MSs with no authority |
| reach0 | 8 | 7 | audience is the right species, but EU-selling synthetic-output product founders at 1–50 staff are a subset of it |
| margin | 8 | 8 | open-source watermark stack (Meta Seal) + free C2PA tooling; solo delivery; licensing attack rebutted |
| sat | 5 | 5 | contributes (10−5)=5; direct DFY lane empty (cited), adjacency crowded |
| fit | 9 | 6 | elite pipeline/API craft, but C2PA cert chains + watermark robustness + conformity-note drafting are NOT prior specialty per founder brief |
| **TOTAL** | 83 | **72** | > 59 bar → PASS; scout inflation −11, concentrated in pain/fit |

# AI Content Disclosure Kit
Category: Vertical SaaS | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: Every AI-generated or AI-manipulated asset your agency ships for EU-market clients carries compliant disclosure before the 2 Dec 2026 Article 50 deadline: machine-readable provenance marking (C2PA metadata embedding), correct visible deepfake/synthetic-content labels per asset type, chatbot-disclosure copy blocks, and a per-client compliance register you can hand to the client's counsel. Outcome: your agency contracts stop being the weak link when clients get AI Act questionnaires.
- Buyer: Owner of a digital marketing / creative / AI-automation agency, 2–25 staff, producing AI-generated ad creative, video or chatbots for clients marketing into the EU.
- Price: £79/mo per agency; founding £39/mo locked for first 30 agencies.
- Channel to first 10: Founder's Skool community (AI agency owners = exact ICP) and @theoperator short-form audience with a "your AI ads become illegal-by-default in the EU on 2 Dec 2026 unless labeled" series; LinkedIn AI-agency groups. No email lists needed.
- Timing hypothesis: The EU AI Act Digital Omnibus (political agreement 6–7 May 2026; Parliament 16 June, Council final green light 29 June 2026) delayed high-risk Annex III duties to 2 Dec 2027 BUT cut the transparency deferral to three months: Article 50 obligations — machine-readable marking of synthetic content, deepfake labeling, chatbot disclosure — are due by 2 December 2026. It is the only AI Act deadline still live inside 6 months, and almost no SMB tooling exists.
- Citations:
  - https://www.consilium.europa.eu/en/press/press-releases/2026/05/07/artificial-intelligence-council-and-parliament-agree-to-simplify-and-streamline-rules/
  - https://www.insideprivacy.com/artificial-intelligence/eu-ai-act-update-timeline-relief-targeted-simplification-and-new-prohibitions/
  - https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/
  - https://compliancehub.wiki/eu-digital-omnibus-ai-act-deadline-deferral-annex-iii-2027/
- Notes: Not a GPT wrapper — it's a provenance-embedding pipeline + register + policy generator. v1 = upload → C2PA-stamp → labeled-asset download + register (open-source c2pa libraries), Stripe checkout; <8h. hypothesis: enforcement against SMB agencies will lag, so sell via client-procurement pressure (agencies asked to warrant AI-Act compliance in MSAs), not fines.

## R2 Timing Gate — PASS with corrected dates (gated 2026-07-10)
**Digital Omnibus fact-conflict RESOLUTION (primary sources):** The Digital Omnibus on AI **was enacted**: political agreement 7 May 2026, European Parliament vote 16 Jun 2026, Council final green light 29 Jun 2026 (https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/ ; https://www.consilium.europa.eu/en/press/press-releases/2026/05/07/artificial-intelligence-council-and-parliament-agree-to-simplify-and-streamline-rules/). Operative dates: Annex III high-risk → 2 Dec 2027; embedded → 2 Aug 2028; **core Article 50 transparency (chatbot disclosure Art 50(1); deployer deepfake/synthetic-content disclosure Art 50(4)) UNCHANGED — applies 2 Aug 2026** (https://artificialintelligenceact.eu/article/50/ ; https://www.gtlaw.com/en/insights/2026/6/deepfakes-chatbots-ai-generated-text-european-commission-details-transparency-obligations-under-the-ai-act); **only providers' Art 50(2) machine-readable marking got relief → 2 Dec 2026** (Consilium 29 Jun; https://datamatters.sidley.com/2026/06/22/eu-lawmakers-reach-provisional-agreement-to-delay-key-eu-ai-act-obligations/). CSAM/NCIC ban applies 2 Dec 2026. Commission Code of Practice on marking/labelling published 10 Jun 2026, signature by 22 Jul 2026 = presumption of conformity (https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content ; https://www.techtimes.com/articles/318822/20260622/eu-ai-act-chatbot-disclosure-deepfake-labeling-july-22-signatory-deadline.htm). Scout claim (a): right on enactment/Annex III, wrong that Art 50 wholesale moved to 2 Dec 2026. Scout claim (b): wrong on enactment; right that 2 Aug 2026 stands for core Art 50.
**Candidate verdict — CORRECTION REQUIRED:** R1's claim that deepfake labels + chatbot disclosure are "due by 2 December 2026" and that it is "the only AI Act deadline still live inside 6 months" is WRONG in scope: visible deepfake/synthetic-content disclosure and chatbot disclosure bite **2 Aug 2026 (23 days)**; 2 Dec 2026 applies only to provider-side machine-readable marking; the CoP window closes 22 Jul 2026. The corrected dates create *sooner* real deadlines than the copy claimed (all ≤6 months) → per gate rule, not auto-killed; corrected dates recorded; marketing copy must switch from "2 Dec 2026" to "2 Aug 2026 visible labels + 2 Dec 2026 marking". **PASS**.

## R3 Saturation Gate — 5/10 → PASS
Searched as the buyer would ("label AI-generated content C2PA tool agency EU AI Act").

| # | Competitor | Shape | Evidence |
|---|---|---|---|
| 1 | Kontainer | Established DAM; automatic C2PA watermark via download templates, marketed to marketers for EU AI Act — closest direct | https://kontainer.com/news/the-eus-new-rules-on-ai-generated-visual-content-what-every-marketer-must-know |
| 2 | ActReady (getactready.com) | AI Act content-labeling guidance/tooling | https://getactready.com/blog/eu-ai-act-content-labeling-guide |
| 3 | C2PA Viewer | Verification tool + agency-facing compliance guides (freemium) | https://c2paviewer.com/articles/eu-ai-act-content-credentials |
| 4 | sota.io | Watermarking implementation, dev/GPAI-provider focused (adjacent) | https://sota.io/blog/eu-ai-act-gpai-watermarking-2026-technical-implementation-guide |
| 5 | Adobe Content Credentials | Free/native in Firefly & Photoshop — substitute at source | https://c2paviewer.com/articles/ai-tools-c2pa-support |
| 6 | OpenAI native C2PA + SynthID | Auto-embedded in ChatGPT/API images — substitute at source | https://help.openai.com/en/articles/8912793-c2pa-and-synthid-in-openai-generated-images |
| 7 | Google SynthID | Provider-side watermark — substitute at source | https://www.institutepm.com/knowledge-hub/ai-content-provenance-watermarking |

Direct SMB-agency compliance-workflow SaaS with per-client register: ~2–3 credible (Kontainer, ActReady, C2PA Viewer), fragmented; rest are source-level/native substitutes; no dominant agency-register product found. Several credible, fragmented → **5/10, PASS** (not graveyard).

## R4 Red Team
**Strongest failure case:** The marking layer is being solved upstream for free — Adobe Firefly has embedded Content Credentials in every generated image since launch, and OpenAI now embeds both C2PA manifests and SynthID watermarks in all ChatGPT/API images (https://help.openai.com/en/articles/8912793-c2pa-and-synthid-in-openai-generated-images ; https://openai.com/index/advancing-content-provenance/); Art 50(2) machine-readable marking is legally the PROVIDER's duty, not the agency's; what remains for agencies (visible deepfake labels, chatbot notices) is copy-and-placement work, not a £79/mo pipeline — and Kontainer already bundles auto-C2PA inside a DAM agencies may already own.
**Strongest rebuttal:** Provenance breaks exactly where agencies ship: C2PA manifests are stripped at the most common distribution step (screenshots/social pipelines) and no major platform has deployed watermark-reading infrastructure at scale (https://c2paviewer.com/articles/verify-ai-generated-image-c2pa-synthid), so agencies still need re-stamping, correct per-asset Art 50(4) visible labels from 2 Aug 2026, and — the actual product — a per-client compliance register that answers client-MSA/questionnaire pressure with evidence artifacts none of the upstream free marking produces; founder owns the exact-ICP channel (Skool agency community + @theoperator) to sell it inside the 22 Jul/2 Aug/2 Dec window.
**Defensible:** TRUE but thin — per-client register becomes a system of record with switching costs, and distribution is founder-owned; the stamping tech itself is open-source (c2pa libs) and replicable. Strong case met by strong rebuttal → **PASS**.

## Proposed Scores
- pain 6 — Art 50(4)/50(1) duties are legally mandated from 2 Aug 2026 with €15M/3% exposure (https://www.gtlaw.com/en/insights/2026/6/deepfakes-chatbots-ai-generated-text-european-commission-details-transparency-obligations-under-the-ai-act), but SMB-agency enforcement will lag; realistic driver is client-procurement pressure.
- reach0 8 — Skool community is the exact ICP + @theoperator; named £0 channels, 100+ qualified buyers reachable in a week; independent of the 692K list.
- ttfd 8 — v1 buildable in days on open-source c2pa libs + Stripe; founding £39/mo into own community; SaaS onboarding friction keeps it under 9.
- margin 9 — open-source libs + Supabase/Vercel; >90%.
- timing 9 — hard dated deadlines inside 6 months: 22 Jul 2026 (CoP), 2 Aug 2026 (visible labels), 2 Dec 2026 (machine-readable marking) — Consilium 29 Jun 2026; docked from 10 because R1's stated date was wrong in scope and copy must be corrected.
- fit 9 — ≥2 owned assets incl. exact-ICP distribution + stack + automation skill.

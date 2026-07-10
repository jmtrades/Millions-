# AI Act Deployer Pack

Category: Info/community | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: Template/system pack + Skool updates channel that makes an automation agency's client deployments survive an EU AI Act audit AND hands them a sellable £2–5k "AI governance audit" service. Inside: deployer-vs-provider obligation decision tree, Article 50 transparency disclosure copy blocks (chatbots, synthetic content, deepfakes), Annex III risk-classification worksheet, logging/human-oversight automation blueprints (n8n), client audit report template, governance retainer pricing + engagement letter. Updates pushed as the Digital Omnibus deferral saga resolves.
- Buyer: AI automation agency owner / freelance AI consultant (2–15 active clients) who has deployed chatbots, voice agents, or hiring/finance automations for EU-market clients and is now being asked "are we compliant?" before 2 August 2026.
- Price: £399 one-off (includes 12 months of updates).
- Channel to first 10: @theoperator short-form — hook: "If you built a client's chatbot in the EU, on August 2 YOU become a regulated deployer. Fines up to €15M or 3% of turnover. Here are the 9 documents you need." Pinned post + launch thread in existing Skool community. No ad spend; list-independent.
- Timing hypothesis: Article 50 transparency + Annex III high-risk obligations take effect 2 Aug 2026 (23 days away); the EU's Digital Omnibus provisionally agreed a deferral to Dec 2027 but it is NOT enacted, so counsel is telling firms to treat Aug 2026 as operative — and 78% of organizations have taken no meaningful compliance steps. Confusion + deadline = template demand spike this quarter.
- Citations:
  - https://www.hklaw.com/en/insights/publications/2026/04/us-companies-face-eu-ai-acts-possible-august-2026-compliance-deadline
  - https://labs.cloudsecurityalliance.org/research/csa-research-note-eu-ai-act-high-risk-compliance-deadline-20/
  - https://www.lw.com/en/insights/ai-act-update-eu-resolves-to-change-rules-and-extend-deadlines
  - https://www.legiscope.com/blog/eu-ai-act-timeline-deadlines.html

## R2 Timing Gate — PASS with corrections (gated 2026-07-10)
**Digital Omnibus fact-conflict RESOLUTION (primary sources):** The Digital Omnibus on AI **was enacted** — R1's "NOT enacted" claim is now false: political agreement 7 May 2026, European Parliament vote 16 Jun 2026, Council final green light 29 Jun 2026 (https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/ ; https://www.consilium.europa.eu/en/press/press-releases/2026/05/07/artificial-intelligence-council-and-parliament-agree-to-simplify-and-streamline-rules/). Operative dates: **Annex III high-risk → 2 Dec 2027** (embedded → 2 Aug 2028) — NOT 2 Aug 2026 as R1 claimed; **core Article 50 transparency (chatbot disclosure; deployer deepfake/synthetic-content disclosure) UNCHANGED — applies 2 Aug 2026** (https://artificialintelligenceact.eu/article/50/ ; https://bratby.law/ai-act-transparency-obligations-2026/); only providers' Art 50(2) machine-readable marking got relief → 2 Dec 2026 (https://datamatters.sidley.com/2026/06/22/eu-lawmakers-reach-provisional-agreement-to-delay-key-eu-ai-act-obligations/). CSAM/NCIC ban applies 2 Dec 2026. Commission Code of Practice on marking/labelling published 10 Jun 2026; signature by 22 Jul 2026 = presumption of conformity (https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content ; https://www.techtimes.com/articles/318822/20260622/eu-ai-act-chatbot-disclosure-deepfake-labeling-july-22-signatory-deadline.htm). Scout claim (a): right on enactment/Annex III, wrong that Art 50 wholesale moved to 2 Dec 2026. Scout claim (b) — which this R1 relied on — wrong on enactment; right that 2 Aug 2026 stands for core Art 50.
**Candidate verdict — CORRECTIONS REQUIRED:** (1) omnibus IS law; (2) Annex III risk-classification urgency moved to 2 Dec 2027, so the "£2–5k AI governance audit" upsell is deferred demand; (3) the load-bearing hook survives: Art 50 deployer-facing transparency duties bite **2 Aug 2026 (23 days)** with fines to €15M/3% (https://www.gtlaw.com/en/insights/2026/6/deepfakes-chatbots-ai-generated-text-european-commission-details-transparency-obligations-under-the-ai-act). Moved date still leaves a real ≤6-month (≤1-month) deadline → not auto-killed; the pack's "updates as the omnibus resolves" element gains value from the change. **PASS**.

## R3 Saturation Gate — 4/10 → PASS
Searched as the buyer would ("AI Act compliance toolkit templates deployer checklist").

| # | Competitor | Shape | Evidence |
|---|---|---|---|
| 1 | Microsoft agent-governance-toolkit | FREE OSS: EU AI Act deployer checklist + Annex IV documentation exporter for agent deployments — strongest substitute | https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/compliance/eu-ai-act-checklist.md |
| 2 | KLA Digital — EU AI Act Compliance Starter Pack | Paid template pack (provider + deployer) | https://kla.digital/resources/eu-ai-act-compliance-starter-pack |
| 3 | AI Governance Desk | 10-template paid governance toolkit (NIST/ISO 42001/AI Act crosswalk) | https://aigovernancedesk.com/ai-governance-toolkit-templates/ |
| 4 | EC AI Act Service Desk Compliance Checker | Free official provider/deployer obligation checker | https://ai-act-service-desk.ec.europa.eu/en/eu-ai-act-compliance-checker |
| 5 | euaicompass.com | 25+ free interactive tools incl. deployer assessment, oversight logging, content-marking checker | https://euaicompass.com/tools.html |
| 6 | Free checklists (artificialintelligenceact.eu checker; Medium; abv.dev) | Free content substitutes | https://artificialintelligenceact.eu/assessment/eu-ai-act-compliance-checker/ ; https://abv.dev/blog/eu-ai-act-compliance-checklist-2025-2027 |

Direct PAID packs aimed at AI-automation-agency owners with a sell-the-service kit: none found in buyer search. Few weak paid directs (2), heavy free substitution → **4/10, PASS** (not graveyard).

## R4 Red Team
**Strongest failure case:** Free, official and open-source substitutes blanket this need — the EC's own Compliance Checker (https://ai-act-service-desk.ec.europa.eu/en/eu-ai-act-compliance-checker) and Microsoft's free agent-governance-toolkit with an EU AI Act deployer checklist + Annex IV exporter (https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/compliance/eu-ai-act-checklist.md) — while the enacted Annex III delay to 2 Dec 2027 (Consilium 29 Jun 2026) guts the "£2–5k governance audit" upsell for ~17 months, and the prompt-native ICP can self-generate templates with an LLM in an afternoon.
**Strongest rebuttal:** The buyer pays £399 for curated correctness + updates at the moment of maximal confusion — even professional scouts contradicted each other on what the omnibus changed (this cluster's own R1s did) — plus a resellable productized-service kit; Art 50 deployer duties still land 2 Aug 2026 with €15M/3% exposure, and the founder's @theoperator + Skool channels hit the exact ICP at £0 within days, before generic free resources get repackaged for this niche.
**Defensible:** FALSE — pure info product, replicable; moat is distribution + update cadence only. Strong case met by a real rebuttal → **PASS** (scores stay harsh).

## Proposed Scores
- pain 6 — clients asking "are we compliant?" pre-2 Aug is real (Art 50 live: https://artificialintelligenceact.eu/article/50/), but survivable without purchase given free substitutes; Annex III component deferred to Dec 2027.
- reach0 8 — @theoperator + Skool pinned launch; named £0 channels at the exact ICP; list-independent.
- ttfd 9 — templates + existing audience + hard 2 Aug hook; first sale <14d highly plausible.
- margin 9 — digital templates + Skool updates; >90% after update labor.
- timing 8 — hard 2 Aug 2026 deadline for the Art 50 half of the pack (23 days; Consilium 29 Jun 2026), but half of R1's stated urgency (Annex III "2 Aug") was wrong and is now 17 months out.
- fit 9 — ≥2 owned assets incl. exact-ICP distribution; buyer IS the founder's own niche (automation agencies).

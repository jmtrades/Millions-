# AI-Deployment Compliance Register for Agencies & SMBs — Whitespace Check

**Date:** 2026-07-11 · **Method:** 10 web searches (budget cap), direct site fetches blocked by proxy (403), so pricing/feature claims rest on search-indexed page content and third-party comparisons. **Context:** EU AI Act high-risk obligations + enforcement land **2 Aug 2026 — 3 weeks away**.

## Verdict

| Layer | Status |
|---|---|
| Single-company SMB register (<€2,000/yr) | **CONTESTED** — 5–7 live self-serve entrants by mid-2026 |
| **Agency/multi-client white-label register** | **OPEN** — zero purpose-built products found; closest analogues are DACH DPO suites and one multi-entity GRC |
| Enterprise AI governance | TAKEN (unchanged from prior gate) |

---

## 1. Prior gate evidence — freshness check (all reconfirmed, one refinement)

- **Vanta**: EU AI Act framework launched **Oct 2024** ([BusinessWire](https://www.businesswire.com/news/home/20241023949493/en/)); ISO 42001 module Mar 2024; sold as add-on framework. Broker-reported Foundation tier **$7.5k–10k/yr** (single framework, <50 employees), average contracts $30k–45k ([soc2auditors.org review](https://soc2auditors.org/insights/vanta-review/), [aiactindex.eu](https://aiactindex.eu/reviews/vanta)). Prior "~$10–12k/yr" estimate holds; still 4–5x above the €2k line, no SMB tier.
- **Drata**: starter ~$15k–25k/yr, enterprise $60k+; EU AI Act inside multi-framework automation ([drata.com webinar page](https://drata.com/resources/webinars/eu-ai-act-iso-42001-AI-governance)). Enterprise-only, holds.
- **OneTrust / Holistic AI / Credo AI**: €30k–€100k+/yr, sales-gated ([Legalithm comparison](https://www.legalithm.com/en/blog/best-eu-ai-act-compliance-software-startups-smes)). Holds.
- **EC AI Act Service Desk**: Compliance Checker live but **in beta, generic role/obligation triage only — no register, no persistence** ([ai-act-service-desk.ec.europa.eu](https://ai-act-service-desk.ec.europa.eu/en/eu-ai-act-compliance-checker), [ZwillGen analysis](https://www.zwillgen.com/artificial-intelligence/the-eus-ai-act-compliance-checker-explorer-whats-useful-today-whats-still-come/), [KvdL](https://kvdl.com/en/articles/europese-commissie-lanceert-ai-act-compliance-checker)). Holds — no register motion visible.
- **REFINEMENT:** the claim that nothing exists below enterprise is **stale**. See §2.

## 2. The <€2,000/yr layer — now populated (single-tenant only)

| Product | Pricing | Target buyer | Register/inventory? | Multi-client/agency? | Source |
|---|---|---|---|---|---|
| **ActReady** (getactready.com) | **from €29/mo** (Starter free, Pro, Enterprise; 14-day trial) | SMBs | Yes — per-system risk classification, 11 high-risk obligations tracked per system, Annex IV generation, task assignment | **No evidence** — single-org framing | [pricing page](https://getactready.com/pricing), [tool page](https://getactready.com/eu-ai-act-compliance-tool) |
| **Legalithm** (legalithm.com) | **Free through ~April 2028** | EU startups/SMEs | Applicability scoping, risk classification, Annex IV docs | No evidence | [own comparison blog](https://www.legalithm.com/en/blog/best-eu-ai-act-compliance-software-startups-smes) |
| **EuroComply** (eurocomply.app) | **€0–€1,499 band**, self-serve, no demo gate | SMEs (AI Act + GDPR combined) | Implied (AI Act + GDPR records) | No evidence | [eurocomply.app](https://eurocomply.app/) |
| **AIComply** (getaicomply.com) | "1/100th the cost of consultants," self-serve | SMBs pre-Aug-2026 | Classify systems, generate docs, track compliance | No evidence | [getaicomply.com](https://www.getaicomply.com/) |
| **AI Act Ready** (aiactready.tech) | n/a (self-serve positioning) | UK & EU businesses | Yes (compliance tooling) | No evidence | [aiactready.tech](https://aiactready.tech/) |
| **SenecAI** (senecai.eu) | On-demand "compliance partner" | EU startups/SMEs | Service-led | No evidence | [senecai.eu](https://senecai.eu/) |
| **Kopexa** | SME compliance platform w/ AI-governance content | KMU/SMEs | Platform | No evidence | [kopexa.com blog](https://kopexa.com/en/blog/ki-governance-kmu-eu-ai-act-2026) |

Also mid-market (above the line, register-native): **trail** (Munich, €1.45M pre-seed Jul 2024, demo-gated, bootcamp from €8k — [EU-Startups](https://www.eu-startups.com/2024/07/munich-based-trail-secures-e1-45-million-pre-seed-for-its-ai-governance-copilot/), [trail-ml.com](https://www.trail-ml.com/)), **Modulos** (EU/Swiss-hosted conformity workflows — [modulos.ai](https://www.modulos.ai/eu-ai-act/)), **ActReady.ai** (actready.ai — *distinct company* from getactready.com; enterprise "control plane," AI Act + DORA; note the name collision).

**"aicto": not found in any search — treat as non-existent or pre-launch.**

## 3. The agency/white-label angle — the actual whitespace

Two dedicated searches (EN + DE) found **no product offering white-label, multi-client AI-Act registers for agencies/consultancies**. What exists instead:

1. **"White-label AI compliance" is a different category**: white-label AI *agent* platforms (CustomGPT, Trillet at $299/mo, Vida, AgentWorks) that bundle HIPAA/GDPR/TCPA compliance *of the agent itself* — not registers of client AI systems ([Trillet blog](https://www.trillet.ai/blogs/white-label-ai-with-built-in-compliance), [customgpt.ai](https://customgpt.ai/white-label-ai-for-agencies/)). Notably, agent-platform buyers are being told to demand "EU AI Act classification on every agent, per-tenant" ([vida.io](https://vida.io/blog/white-label-ai-agent-platform)) — demand signal with no register-product supply.
2. **DACH DPO suites are the structural near-threat**: German Datenschutz-management software is **mandantenfähig** (multi-tenant for external DPOs, consultants, law firms) and is adding EU-AI-Act/NIS2 modules ([datenschutz-management.software](https://www.datenschutz-management.software/)); **Cortina Consult** sells modular KI-Governance with monthly pay-per-module pricing ([cortina-consult.com](https://cortina-consult.com/software/ki-governance/)); **caralegal** ships an AI-governance module on a privacy platform used by DPOs ([caralegal.eu](https://caralegal.eu/en/ai-governance/)); **Thetis** likewise ([thetis.de](https://thetis.de/ki-governance/)). These serve the *consultant-managing-many-clients* workflow — but German-market, DPO-workflow-framed, privacy-first, **not white-label and not built for AI-deployment agencies**.
3. **Enactia**: multi-company environments with centralized oversight, 70+ frameworks — but framed for subsidiaries/regions of one enterprise, not an agency's client book ([enactia.com](https://enactia.com/eu-ai-act-compliance-software/)).
4. A parallel *services* market of "externer KI-Beauftragter" (outsourced AI officer: DATUREX, ensecur, KINAST — [ki-beauftragter-extern.de](https://ki-beauftragter-extern.de/externer-ki-beauftragter/)) is forming in Germany — people, not software. These are **future channel customers** for multi-client tooling, and evidence the buyer exists.

## 4. Adjacent threats

- **EC Service Desk → register?** No sign. Checker is beta triage; "Single Information Platform" scope is information, not tenant data ([ai-act-service-desk.ec.europa.eu](https://ai-act-service-desk.ec.europa.eu/en)). Watch, low near-term risk.
- **Vanta/Drata downmarket**: floors of $7.5k/$15k and sales-led motion protect the <€2k layer for now.
- **GRC/practice tools adding AI registers**: Enactia (above), Centraleyes "top AI compliance tools" listicles ([centraleyes.com](https://www.centraleyes.com/top-ai-compliance-tools/)), PwC's AI Compliance Tool ([pwc.com](https://www.pwc.com/cz/en/sluzby/umela-inteligence-ai/ai-act/ai-compliance-tool.html)) — all single-org or enterprise.
- **n8n/Make shipping compliance features**: **no evidence surfaced in any of the 10 searches** (not directly searched due to budget cap — residual unknown, judged low probability; their compliance pages are about their own SOC2/GDPR posture).
- **Comparison/affiliate sites already exist** ([aiacttools.com](https://aiacttools.com/), [aicompliancevendors.com](https://aicompliancevendors.com/best/eu-ai-act-compliance-tools)) — a maturity marker: the single-tenant category is dense enough to arbitrage.

## 5. Timing / entrant velocity

Datable events: Mar 2024 Vanta ISO 42001 → Jul 2024 trail pre-seed → Oct 2024 Vanta EU AI Act → 2025 EC Service Desk + Checker launch → by mid-2026: ActReady, Legalithm (free-through-2028 offer is a 2026-vintage land-grab), EuroComply, AIComply, AI Act Ready, SenecAI, plus two comparison sites. The prior gate (which found *nothing* under enterprise) is now wrong at the single-tenant tier: **~0 → 5–7 sub-€2k entrants in roughly 12 months**. Exact launch dates for the micro-SaaS entrants are not public (bootstrapped, no funding announcements found in 2026 searches) — velocity is inferred from site vintage and the 2026-deadline framing of all their copy. Expect a spike around 2 Aug 2026 enforcement; any of these can bolt on an "agency workspace" in a quarter.

## 6. Whitespace definition & sharpest differentiation

**Open slot:** the **deployer-side, multi-client, white-label register for AI-deployment agencies** (automation/n8n/Make shops, AI consultancies) — agency pays once, runs every client's register under its own brand, each new client deployment auto-creates register entries + Art. 26 deployer obligations + Art. 4 AI-literacy evidence. Nobody found does this; the closest three (ActReady, Legalithm, DACH DPO suites) are each one strategic decision away, but each is anchored elsewhere (single-org SMB self-serve; free single-org land-grab; German privacy/DPO workflow respectively).

**Differentiation that compounds:** *the register is generated from the deployment work itself* — integrate with the agency's delivery stack so shipping a client automation *is* the act of registering it, then bill the client through the agency. Single-tenant classifiers can't follow without rebuilding their tenancy model and their go-to-market; DPO suites can't follow without leaving the privacy-officer persona and the German language market.

## 7. Limits

- 10-search cap; proxy blocked all direct page fetches (403), so pricing figures are as indexed/reported, not screenshot-verified. ActReady tier ceilings, EuroComply tier structure, and caralegal/Cortina multi-tenant depth are the top items to verify by hand.
- n8n/Make compliance roadmap not directly searched; "aicto" unverifiable; YC/EF 2025–26 batch lists not individually swept.

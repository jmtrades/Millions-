# AI Act Deployer Pack — Start Here

**Version 1.0 — all facts verified against primary sources on 11 July 2026.**
Licence: single agency. See `LICENSE.md` before sharing anything from this pack.

> **Posture of this pack (read once, applies everywhere):** This is **engineering and operations documentation, not legal advice**. It tells you what Regulation (EU) 2024/1689 (the "AI Act") says, when it applies, and how to install controls and evidence in a working agency stack — with every legal claim cited to a primary source so your client's counsel can verify it in minutes. It does not create a lawyer–client relationship, and edge-case calls (parody, satire, biometric processing, employment tooling, anything high-risk) belong with qualified counsel in the relevant member state. Every file in this pack repeats this frame because your clients' lawyers will read these documents, and the frame is what makes them usable.

---

## Why this pack exists

On **2 August 2026** the core transparency duties of Article 50 of the EU AI Act start to apply: people must be told when they are interacting with an AI system, and deployers must disclose deepfakes and certain synthetic content ([Art. 50, consolidated text](https://artificialintelligenceact.eu/article/50/)). Non-compliance sits in the €15,000,000 / 3%-of-worldwide-turnover fine tier ([Art. 99(4)](https://artificialintelligenceact.eu/article/99/)).

Meanwhile, the **Digital Omnibus** (political agreement 7 May 2026; European Parliament vote 16 June 2026; Council final adoption 29 June 2026) postponed the *high-risk* Annex III duties to **2 December 2027** — and much of the internet has concluded, wrongly, that "the AI Act was delayed." It was not delayed where it touches you first. Primary sources: [Council press release, 7 May 2026](https://www.consilium.europa.eu/en/press/press-releases/2026/05/07/artificial-intelligence-council-and-parliament-agree-to-simplify-and-streamline-rules/) and [Council press release, 29 June 2026](https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/).

If you run an automation or AI agency with EU-market clients, you are holding deployments that acquire legal duties in **22 days** (from this version's date). This pack is the shortest path from "are we compliant?" panic-email to installed controls, a client-facing evidence register, and a billable audit service.

### The three dates that matter (full detail in `01-corrected-timeline.md`)

| Date | What happens |
|---|---|
| **2 Aug 2026** | Core Art. 50 transparency applies: chatbot/interactive-AI disclosure; deployer deepfake & synthetic-content disclosure (Art. 50(4)); emotion-recognition/biometric-categorisation disclosure (Art. 50(3)). |
| **2 Dec 2026** | End of the Omnibus grace for providers' Art. 50(2) machine-readable marking — for generative systems already on the market before 2 Aug 2026. |
| **2 Dec 2027** (embedded: **2 Aug 2028**) | Postponed Annex III standalone high-risk duties apply (Omnibus). Not this pack's core scope — covered in the updates channel as it approaches. |

---

## What is in the pack

| File | What it is | Use it when |
|---|---|---|
| `01-corrected-timeline.md` | The verified date table + the wrong claims circulating online, each debunked with citations | A client (or their lawyer) asks "didn't this get delayed?" |
| `02-deployer-vs-provider-decision-tree.md` | Per-deployment role classification: question tree + 5 worked examples + extraterritorial note | You need to know which Art. 50 duties attach to *each* deployment you've shipped |
| `03-disclosure-copy-blocks.md` | Paste-ready disclosure strings — chatbot UI, modal, voice-agent spoken lines, image/video/audio labels — in EN, DE, FR, ES, plus placement rules and edge cases | You are installing the actual notices this week |
| `04-compliance-register.md` + `04-register-template.csv` | The per-client evidence register: column spec, filled example, CSV template | You want one artifact that answers a client's "prove we complied" questionnaire |
| `05-marking-readiness-checklist.md` | Art. 50(2) machine-readable marking readiness for the 2 Dec 2026 milestone: pipeline mapping, strip-test battery, re-stamping options, Code of Practice tracker | You white-label or resell generative systems, or want the 2 Dec 2026 upsell ready |
| `06-logging-oversight-blueprints.md` | n8n/Make automation blueprints (disclosure-event log → register append → monthly evidence export) + importable n8n JSON skeleton | You want evidence generated automatically instead of by memory |
| `07-client-audit-kit.md` | The resellable "Art. 50 Transparency Audit": scope, 2-page report template, pricing (£1,500–£3,000), scripts, ≤4-hour delivery checklist | You want to turn this pack into revenue this month |
| `LICENSE.md` | Single-agency licence + white-label rights for client-facing outputs | Before you send anything to a client |

---

## 30-minute quick start

Do this today; nothing here needs a lawyer in the room.

1. **(5 min)** Read the three-date table in `01-corrected-timeline.md`. Memorise the split: *visible disclosure 2 Aug 2026; provider machine-readable marking 2 Dec 2026; high-risk 2 Dec 2027*. That one sentence is 80% of the confusion you'll encounter.
2. **(10 min)** List every live client deployment that touches the EU (chatbots, voice agents, content pipelines, internal assistants). Run each through the question tree in `02-deployer-vs-provider-decision-tree.md` and write down: role (provider / deployer / contractor), duties (50(1) / 50(2) / 50(3) / 50(4)).
3. **(10 min)** Open your highest-traffic client chatbot. Paste the appropriate short UI string and first-message notice from `03-disclosure-copy-blocks.md` (right language, right placement per §C of that file). Screenshot before/after.
4. **(5 min)** Copy `04-register-template.csv` into a sheet named `<YourAgency> — AI Act Register`. Add one row for what you just deployed, link the screenshot as evidence. You now have the beginning of an audit trail dated before 2 August 2026.

**This week:** run the strip-test battery in `05` on any generative output paths, wire up the logging blueprint in `06`, and send the audit-offer email in `07` to your three most compliance-anxious clients.

---

## Update channel (included for 12 months)

The AI Act's operational layer is still moving: the Omnibus consolidated text lands in the Official Journal, the Commission's [Code of Practice on marking AI-generated content](https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content) signatory list is updating (signature window closes **22 July 2026**), member states are standing up their penalty regimes, and AI Office guidance on Art. 50 keeps arriving. Your purchase includes **12 months of updates** pushed through the private updates channel (Skool) you were invited to at checkout — plus a versioned changelog below. When a fact in this pack changes, you get a delta post ("what changed, what to edit, source"), not a re-read-everything dump.

**Watch-list we maintain for you:** Official Journal publication of the Omnibus act; CoP signatory list changes; AI Office Art. 50 guidance; member-state enforcement designations and first enforcement actions; upstream provider marking changes (OpenAI, Google, Adobe, Meta, ElevenLabs).

## Changelog

- **v1.0 (11 July 2026)** — Initial release. All dates verified against: [Council 29 Jun 2026](https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/), [Council 7 May 2026](https://www.consilium.europa.eu/en/press/press-releases/2026/05/07/artificial-intelligence-council-and-parliament-agree-to-simplify-and-streamline-rules/), [Commission CoP page](https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content), [consolidated Art. 50](https://artificialintelligenceact.eu/article/50/).

---

## Disclaimer (the long form, referenced by every other file)

This pack is technical and operational documentation prepared by practitioners for practitioners. It is **not legal advice**, and nothing in it should be relied on as such. Statements about Regulation (EU) 2024/1689 and amending acts are good-faith summaries of the cited primary sources as at 11 July 2026; the law, guidance, and enforcement practice will evolve. You and your clients remain responsible for compliance decisions, and localized legal review of any disclosure wording, contract term, or edge-case judgment (parody/satire, biometrics, employment, anything plausibly high-risk) is the job of qualified counsel in the relevant jurisdiction. Where this pack and your counsel disagree, follow your counsel.

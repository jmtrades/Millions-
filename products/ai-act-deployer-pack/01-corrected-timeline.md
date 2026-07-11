# 01 — The Corrected AI Act Timeline

> **AI Act Deployer Pack v1.0 — facts verified 11 July 2026.** Engineering documentation, not legal advice (`00-START-HERE.md` §Disclaimer). Every row below cites a primary source; hand this file to your client's counsel as-is.

The single most valuable thing you can carry into a client meeting in July 2026 is the *correct* set of dates, because most of what circulates online is partially wrong in one of two directions (everything-was-delayed vs nothing-was-delayed). Both directions were wrong; here is what is true.

---

## 1. The master table

| Date | What applies | Who it binds | Primary source |
|---|---|---|---|
| **2 Feb 2025** *(already in force)* | Prohibited practices (Art. 5) and AI-literacy duty (Art. 4) | Providers **and** deployers | [Implementation timeline, artificialintelligenceact.eu](https://artificialintelligenceact.eu/implementation-timeline/) |
| **2 Aug 2025** *(already in force)* | GPAI model obligations; governance; member-state penalty frameworks to be laid down | GPAI model providers; member states | [Implementation timeline](https://artificialintelligenceact.eu/implementation-timeline/) |
| **2 Aug 2026** | **Core Art. 50 transparency.** (a) Art. 50(1): systems that interact directly with natural persons must be designed so people are informed they're dealing with AI, unless obvious to a reasonably well-informed, observant and circumspect person. (b) Art. 50(2): machine-readable marking of synthetic output for generative systems **placed on the market from this date** (pre-existing systems: see 2 Dec 2026 row). (c) Art. 50(3): deployers of emotion-recognition / biometric-categorisation systems must inform exposed persons. (d) Art. 50(4): **deployers** must disclose deepfakes; and AI-generated/manipulated text published to inform the public on matters of public interest. (e) Art. 50(5): all of it delivered clearly and distinguishably, **at the latest at first interaction or exposure**. | 50(1)+(2): **providers**. 50(3)+(4): **deployers** | [Art. 50 consolidated text](https://artificialintelligenceact.eu/article/50/); confirmed unmoved by the Omnibus: [Council press release, 29 Jun 2026](https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/); practitioner corroboration: [Bratby Law](https://bratby.law/ai-act-transparency-obligations-2026/), [Greenberg Traurig, Jun 2026](https://www.gtlaw.com/en/insights/2026/6/deepfakes-chatbots-ai-generated-text-european-commission-details-transparency-obligations-under-the-ai-act) |
| **2 Dec 2026** | (a) End of the Omnibus **grace period for Art. 50(2) machine-readable marking** for generative AI systems already on the market before 2 Aug 2026. (b) New Omnibus prohibition on AI systems for generating CSAM / non-consensual intimate imagery applies. | (a) **Providers** (including agencies that white-label — see `02`). (b) All operators | [Council press release, 29 Jun 2026](https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/); scope detail: [Sidley Data Matters, 22 Jun 2026](https://datamatters.sidley.com/2026/06/22/eu-lawmakers-reach-provisional-agreement-to-delay-key-eu-ai-act-obligations/) |
| **2 Dec 2027** | **Postponed** application of the full high-risk regime for **standalone Annex III** systems (employment/HR screening, credit, education, essential services, etc.): risk management, data governance, logging, human oversight, conformity assessment; deployer duties incl. fundamental-rights impact assessments where applicable | Providers **and** deployers of Annex III high-risk systems | [Council press release, 7 May 2026](https://www.consilium.europa.eu/en/press/press-releases/2026/05/07/artificial-intelligence-council-and-parliament-agree-to-simplify-and-streamline-rules/); [Council press release, 29 Jun 2026](https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/) |
| **2 Aug 2028** | Postponed application for high-risk AI **embedded in regulated products** (Annex I regimes: machinery, medical devices, vehicles…) | Providers and deployers of embedded high-risk AI | [Council press release, 29 Jun 2026](https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/) |

**The one-sentence version for client calls:** *"Visible transparency duties bite 2 August 2026; the provider-side machine-readable watermarking backstop for pre-existing systems bites 2 December 2026; the heavy high-risk regime moved to December 2027 (August 2028 if embedded in a regulated product) — and none of that is optional for EU-facing deployments."*

---

## 2. What the Digital Omnibus actually did (and did not do)

Procedural record — cite these three dates when anyone claims the Omnibus is "just a proposal":

1. **7 May 2026** — Council and Parliament reach political agreement to "simplify and streamline" AI rules, including targeted postponement of high-risk deadlines. Source: [Council press release, 7 May 2026](https://www.consilium.europa.eu/en/press/press-releases/2026/05/07/artificial-intelligence-council-and-parliament-agree-to-simplify-and-streamline-rules/).
2. **16 June 2026** — European Parliament plenary approves the agreed text (recorded in the Council's 29 June release and contemporaneous coverage, e.g. [Sidley, 22 Jun 2026](https://datamatters.sidley.com/2026/06/22/eu-lawmakers-reach-provisional-agreement-to-delay-key-eu-ai-act-obligations/)).
3. **29 June 2026** — Council gives the final green light; the act is adopted. Source: [Council press release, 29 Jun 2026](https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/).

**Did:** moved standalone Annex III high-risk application to 2 Dec 2027 and embedded high-risk to 2 Aug 2028; granted providers of generative systems already on the market before 2 Aug 2026 until **2 Dec 2026** to comply with Art. 50(2) machine-readable marking; added the CSAM/NCII generation prohibition (applying 2 Dec 2026).

**Did not:** move Art. 50(1) chatbot/interaction disclosure, Art. 50(3) emotion-recognition/biometric-categorisation disclosure, or Art. 50(4) deployer deepfake and public-interest-text disclosure. Those apply **2 August 2026** as originally scheduled ([Art. 50 consolidated](https://artificialintelligenceact.eu/article/50/); [Council, 29 Jun 2026](https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/)).

### The Code of Practice on marking (the 2 Dec 2026 on-ramp)

On **10 June 2026** the Commission published the **Code of Practice on the marking and labelling of AI-generated content** — the voluntary compliance vehicle for Art. 50(2) (and related Art. 50 duties), drawn up under Art. 50(7). Providers that **sign by 22 July 2026** benefit from a **presumption of conformity**; non-signatories can still comply but must demonstrate it with their own technical evidence. Source: [Commission, digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content). Operational consequences for your stack are worked through in `05-marking-readiness-checklist.md`.

---

## 3. Penalties (what "or else" actually means)

- Non-compliance with the **transparency obligations of Art. 50** — by providers *or* deployers — sits in the tier of **administrative fines up to €15,000,000 or, for undertakings, up to 3% of total worldwide annual turnover for the preceding financial year, whichever is higher** (Art. 99(4)(g); [consolidated Art. 99](https://artificialintelligenceact.eu/article/99/)).
- For **SMEs and start-ups**, each fine is capped at the same percentages/amounts **whichever is lower** (Art. 99(6), same source). Tell your smaller clients both halves: the ceiling is real, and the SME modulation is also real.
- Fines are levied by national market-surveillance/enforcement authorities under member-state regimes (penalty frameworks required since 2 Aug 2025). Enforcement intensity against SMBs is an open question in year one — but your clients' **procurement questionnaires and MSA warranties will not wait for enforcement statistics**. That commercial pressure, not a fine, is the realistic first-contact event; the register in `04` is what answers it.

---

## 4. Claims you'll see online that are wrong

Each of these circulated widely in May–July 2026. Keep this section handy; it converts sceptical clients faster than anything else in the pack.

| # | The claim | What's actually true | Receipt |
|---|---|---|---|
| 1 | "The EU delayed the AI Act — 2026 obligations are off." | Only the **high-risk (Annex III / embedded)** application dates moved (to 2 Dec 2027 / 2 Aug 2028). Core Art. 50 transparency applies **2 Aug 2026**. | [Council, 29 Jun 2026](https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/); [Art. 50](https://artificialintelligenceact.eu/article/50/) |
| 2 | "Article 50 was pushed to December 2026." | Wrong in scope. Only **Art. 50(2) provider machine-readable marking** got a grace to 2 Dec 2026, and only for systems **already on the market before 2 Aug 2026**. Chatbot disclosure (50(1)) and deployer deepfake/synthetic-content disclosure (50(4)) bite 2 Aug 2026. | [Sidley, 22 Jun 2026](https://datamatters.sidley.com/2026/06/22/eu-lawmakers-reach-provisional-agreement-to-delay-key-eu-ai-act-obligations/); [Art. 50](https://artificialintelligenceact.eu/article/50/) |
| 3 | "The Omnibus is only a political agreement — not enacted; plan for Annex III high-risk on 2 Aug 2026." | Stale as of 29 June 2026: Parliament voted 16 June, Council adopted 29 June. The Annex III date is now 2 Dec 2027. (This claim was *true* in April; that's why it's still everywhere.) | [Council, 29 Jun 2026](https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/) |
| 4 | "Deployers must watermark AI content by August." | Machine-readable marking (Art. 50(2)) is the **provider's** duty. The **deployer's** duty is *visible* disclosure of deepfakes and public-interest synthetic text (Art. 50(4)). Know which one you owe — see `02`. | [Art. 50](https://artificialintelligenceact.eu/article/50/) |
| 5 | "Our bot obviously sounds like a bot, so no notice is needed." | The Art. 50(1) exemption applies only where AI interaction is **obvious to a reasonably well-informed, observant and circumspect person, in the circumstances and context of use**. That is a narrow, fact-dependent test you'd have to defend after the fact. A one-line notice costs nothing; install it. | [Art. 50(1)](https://artificialintelligenceact.eu/article/50/) |
| 6 | "Fines don't hit small companies." | Art. 99(4)(g) covers all providers/deployers in scope; SMEs get the *lower-of* modulation (Art. 99(6)), not an exemption. And the practical exposure for agencies is contractual (client MSAs, indemnities) before it is regulatory. | [Art. 99](https://artificialintelligenceact.eu/article/99/) |
| 7 | "Miss the 22 July Code of Practice deadline and you're non-compliant." | 22 July 2026 closes the **signature window for a voluntary code**. Signatories get a presumption of conformity; everyone else can still comply with their own evidence. It matters mostly for choosing *upstream vendors* — see `05`. | [Commission CoP page](https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content) |
| 8 | "The AI Act doesn't reach non-EU agencies." | Art. 2(1) reaches providers and deployers established in third countries **where the system's output is used in the EU**. A UK/US agency shipping for EU-market clients is in scope. Detail in `02` §5. | [Art. 2 consolidated](https://artificialintelligenceact.eu/article/2/) |

**Why so much of the internet is wrong:** the Omnibus went from proposal to adopted law in under eight weeks, and most explainers were written (a) before 7 May, (b) between agreement and adoption, or (c) by people who read "transparency relief" and assumed it covered all of Art. 50. When you see a confident date claim, check its publication date against the three procedural dates in §2 above before believing it — that habit alone is worth this file.

---

*Next file:* `02-deployer-vs-provider-decision-tree.md` — turn these dates into a per-deployment duty list.

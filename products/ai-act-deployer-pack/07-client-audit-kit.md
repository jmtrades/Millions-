# 07 — The Client Audit Kit: Selling the "Art. 50 Transparency Audit"

> **AI Act Deployer Pack v1.0 — facts verified 11 July 2026.** Engineering documentation, not legal advice (`00-START-HERE.md` §Disclaimer) — and that framing is also your **product positioning**: you are selling an engineering/documentation review with citations, explicitly not a legal opinion. Your licence (`LICENSE.md`) lets you white-label the outputs in this file for your own clients.

This file converts the pack into revenue: a fixed-scope, fixed-price **"EU AI Act Art. 50 Transparency Audit"** you can deliver in ≤4 hours using files `01`–`06`. It is deliberately scoped to the duties that bite **2 August 2026** — do not sell high-risk/Annex III work as urgent (that urgency now lives at 2 Dec 2027 per the Omnibus, `01` §1); sell it as the roadmap follow-on.

---

## 1. The offer (say exactly this much, no more)

> **EU AI Act Transparency Audit — fixed fee, delivered in [5] business days.**
> We inventory every AI touchpoint you run for EU-facing audiences, classify each one against the Article 50 transparency duties that apply from **2 August 2026** (citing the primary sources, which we hand you), identify every missing disclosure, install-or-specify the fix, and hand over a compliance evidence register your counsel, customers and insurers can audit. Engineering documentation, not legal advice — built to make your lawyer's review fast, not to replace it.

**Scope IN:** interactive-AI disclosure (Art. 50(1)/(5)); deployer deepfake & synthetic-content disclosure (Art. 50(4)); emotion-recognition/biometric-categorisation notice check (Art. 50(3) — flag-and-refer only); machine-readable marking *status* per output path (Art. 50(2) — verify upstream, recommend, `05`); evidence register handover (`04`); optionally the logging automation (`06`) as an add-on.
**Scope OUT (in writing, in the SOW):** legal advice or opinions; high-risk/Annex III conformity work (roadmap item, duties from 2 Dec 2027); prohibited-practices analysis (Art. 5 — refer to counsel); GDPR/DPIA work (refer); anything requiring member-state law interpretation.

## 2. Pricing & positioning (£1,500–£3,000)

| Tier | Price | What changes |
|---|---|---|
| **Audit** | £1,500 | ≤5 AI systems, report + register + fix list; client installs fixes |
| **Audit + Install** | £2,250 | ≤8 systems; you also install disclosure copy blocks (`03`) and the logging blueprint (`06`) on up to 3 systems |
| **Audit + Install + Marking Readiness** | £3,000 | Everything above + the `05` strip-test battery and tracker on up to 3 output paths (positions the 2 Dec 2026 follow-on) |

Anchor logic to hold in your head: a law firm's AI Act review starts around the price of your top tier *per lawyer-day* and doesn't install anything; free checkers (the EC's own [Compliance Checker](https://ai-act-service-desk.ec.europa.eu/en/eu-ai-act-compliance-checker)) classify but produce no evidence, no copy, no register. You sit in the gap: **cheaper than counsel, more installed than a checklist, and you leave artifacts behind.** Discount only by removing systems from scope, never by cutting the register — the register is the thing they renew on.

**Positioning script (the 90-second version for a discovery call):**

> "Quick version of the law: from 2 August, anyone interacting with your AI has to be told it's AI, and AI-generated media you publish needs labels — that's Article 50, and the fines tier is up to €15M or 3% of turnover [Art. 99(4), `01` §3]. The December-2027 delay you may have read about covers the *high-risk* rules, not this. [Show the `01` master table.] What I do is engineering, not legal advice: I inventory every AI touchpoint you have, tell you which duty each one triggers with the source cited, install the missing notices, and hand you an evidence register — so when your biggest customer's procurement team sends the AI questionnaire, you answer it in ten minutes with documents, and when your lawyer reviews it, they're reviewing a finished file instead of billing discovery. Fixed fee, delivered inside a week."

**Objection handling:**
- *"Our lawyer's handling it."* → "Perfect — this is what your lawyer lands on. Counsel tells you what the duties are; I install the notices and build the evidence file they'd otherwise bill hours assembling. Every claim in my report carries the primary-source link so their review is fast."
- *"We'll wait for enforcement."* → "The first knock usually isn't a regulator — it's an enterprise customer's questionnaire or an MSA warranty you've already signed. Those are live today; the audit is how you answer them with evidence instead of adjectives."
- *"Didn't the EU delay all this?"* → open `01` §4, point at claims 1–3 with the Council links. This objection is your best friend; answering it precisely is the whole credibility play.
- *"Can't we just add a label ourselves?"* → "You can, and the copy's the easy part. What you can't improvise later is contemporaneous evidence that it was on, everywhere, from August — that's the register and the event log."

## 3. Engagement email template

> **Subject: your AI touchpoints and the 2 August EU AI Act date — fixed-fee audit**
>
> Hi [Name],
>
> From **2 August 2026**, the EU AI Act's Article 50 transparency duties apply to AI systems facing EU users: people must be told when they're talking to AI, and AI-generated media needs disclosure. (The widely reported "AI Act delay" moved the *high-risk* rules to Dec 2027 — not these. Sources linked in the attached one-pager.)
>
> You're running [the chatbot on X / the AI receptionist / AI-generated creative] for EU audiences, so some of these duties likely attach to [Company] as the deployer.
>
> I run a fixed-fee **Art. 50 Transparency Audit** (£[tier]): full inventory of your AI touchpoints, duty classification with primary sources cited, installed disclosure notices in [languages], and a compliance evidence register your counsel and enterprise customers can audit. Delivered inside [5] business days. It's engineering documentation, not legal advice — it makes your lawyer's sign-off faster, not redundant.
>
> Worth 20 minutes this week? I'll bring the corrected deadline table either way — it's genuinely useful even if we never work together.
>
> [You]

(Attach a PDF of `01-corrected-timeline.md` with your branding — permitted under `LICENSE.md` — as the "one-pager". It does the selling.)

## 4. Delivery checklist — ≤4 hours with pack assets

| Time | Step | Pack asset |
|---|---|---|
| 0:00–0:30 | Kickoff call: systems inventory (chat, voice, content, internal tools, embedded vendors); collect URLs, tenant access, sample assets; confirm EU nexus per system | `02` §6 worksheet |
| 0:30–1:30 | Classify each system through the question tree; record role + duty set; mark grey zones "refer to counsel" (that phrase is a deliverable, not a failure) | `02` tree + worked examples |
| 1:30–2:30 | Gap scan: check each duty against what's actually live (badge? first-message? spoken line? media labels? marking survival status?); screenshot everything; note locale gaps | `03` §§A–C checklists; `05` §2 map (status only at audit tier) |
| 2:30–3:30 | Write the report from the template (§5) — it's mostly tables you've already filled; build the register with one row per finding | §5 template + `04` CSV |
| 3:30–4:00 | Handover call: walk the report, hand the register, quote the install/marking tiers and the retainer (§7) | §5 + `07` §2 |

## 5. The 2-page report template (white-label this)

```markdown
# EU AI Act — Article 50 Transparency Audit
**Client:** [Legal entity] · **Prepared by:** [Agency] · **Date:** [YYYY-MM-DD]
**Scope:** Article 50 transparency duties applying from 2 Aug 2026 (Reg. (EU)
2024/1689 as amended; sources in Annex). Engineering documentation — not legal
advice; findings are prepared for review by Client's counsel.

## 1. Executive summary
- Systems reviewed: [n] · In scope of Art. 50: [n] · Fully compliant today: [n]
- Gaps requiring action before 2 Aug 2026: [n critical / n moderate]
- Provider-side marking items for the 2 Dec 2026 milestone: [n]
- One-line verdict: [e.g. "Two customer-facing systems lack first-interaction
  disclosure; fixes are copy-level and installable in under a day."]

## 2. The dates that govern this report
| 2 Aug 2026 | Art. 50 transparency (chat/voice disclosure; deepfake & synthetic-
content disclosure) | applies to systems reviewed here |
| 2 Dec 2026 | Provider machine-readable marking outer deadline (pre-Aug-2026
systems) | upstream/vendor track |
| 2 Dec 2027 / 2 Aug 2028 | High-risk (Annex III / embedded) — postponed by the
Digital Omnibus (Council, 29 Jun 2026) | roadmap, not this engagement |

## 3. Findings by system
| # | System | Role (Art. 3) | Duty | Status | Gap | Fix | Owner | Due |
|---|--------|---------------|------|--------|-----|-----|-------|-----|
| 1 | [Support chatbot] | deployer | 50(1)/(5) | ✗ | No first-interaction notice
| Install badge + first-message v1.0-[lang] | [Agency] | [date] |
| 2 | … | | | | | | | |

## 4. Items referred to counsel
[e.g. "Sentiment scoring on inbound calls — Art. 50(3)/Art. 5 boundary";
"Comedy deepfake campaign — Art. 50(4) artistic-work modality"] — with the
relevant source links for each.

## 5. Evidence register
Handed over as [link/file]: [n] rows, per-control evidence links, source
citations, named reviewer, quarterly review dates. Maintenance options: §6.

## 6. Recommended next steps
1. [Fixes, with tier/pricing if not already included]
2. Marking-readiness testing for the 2 Dec 2026 provider milestone
3. Quarterly register review (retainer) · 4. High-risk roadmap check mid-2027

## Annex — Sources
Art. 50 consolidated text — artificialintelligenceact.eu/article/50/ ·
Art. 99 (penalties) — artificialintelligenceact.eu/article/99/ ·
Council press releases 7 May & 29 Jun 2026 — consilium.europa.eu ·
Commission Code of Practice on marking — digital-strategy.ec.europa.eu ·
[Screenshots and test logs: evidence folder link]

*This report documents engineering and configuration facts against cited
sources. It is not legal advice and creates no lawyer–client relationship.*
```

## 6. Handover & quality bar

- [ ] Every finding row has a screenshot in the evidence folder
- [ ] Every legal statement in the report resolves to a link in the Annex
- [ ] Register delivered as a living sheet (not a PDF), reviewer named, review dates set
- [ ] Counsel-referral list explicitly enumerated (never silently dropped)
- [ ] The `01` timeline table included verbatim — it's the artifact clients forward internally, with your brand on it
- [ ] Follow-on quote attached (install tier, marking readiness, retainer)

## 7. The revenue ladder after the audit

1. **Install sprint** (gap fixes from the report) — same-week upsell, `03` + `06` assets.
2. **Marking Readiness engagement** (`05` executed per output path) — natural September–November sell against the **2 Dec 2026** provider deadline.
3. **Quarterly register retainer** (£150–£400/quarter/client): run the `06` digests, review the register, re-run strip tests on pipeline changes, push update-channel deltas (Omnibus OJ publication, CoP signatory changes) into the client file. Recurring, near-zero marginal cost, and it makes you the first call when…
4. **High-risk prep (2 Dec 2027)**: any system you flagged `high-risk-radar` in the register is a booked 2027 engagement you seeded in 2026.

*Final file:* `LICENSE.md` — what you may and may not do with all of this.

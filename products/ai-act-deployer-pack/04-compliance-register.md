# 04 — The Per-Client Compliance Register

> **AI Act Deployer Pack v1.0 — facts verified 11 July 2026.** Engineering documentation, not legal advice (`00-START-HERE.md` §Disclaimer).

The register is the single artifact this pack orbits around. Disclosure notices satisfy the law; the **register satisfies the humans who check** — the client's counsel, their enterprise customer's procurement team, their insurer's questionnaire, and (worst case) a market-surveillance authority. Art. 50 itself doesn't prescribe a register; contracts and questionnaires do. One well-kept sheet turns "prove you complied, by Friday" into a ten-minute export.

**Design goals:** one row = one control on one system for one client; every row carries its own citation; nothing in it requires legal judgment to read; a stranger can audit it.

---

## 1. Column specification

| # | Column | Type / allowed values | Rules |
|---|---|---|---|
| 1 | `row_id` | `AA-001` style, immutable | Never reuse or renumber; corrections get a new row and a `superseded_by` note |
| 2 | `client` | Legal entity name | The party whose duty the control serves |
| 3 | `system` | Short system name + stack (e.g. "support chatbot — GPT-4o via OpenAI API, n8n, client Azure tenant") | Enough detail that a stranger can find it |
| 4 | `role_classification` | `provider` / `deployer` / `provider+deployer` / `agency=contractor` | Result of the `02` question tree, from the named party's perspective; record the *client's* role and your posture |
| 5 | `duty` | `art50-1` / `art50-2` / `art50-3` / `art50-4-deepfake` / `art50-4-text` / `art50-5` / `scope-out` / `high-risk-radar` | One duty per row; a system with three duties gets three rows |
| 6 | `control_deployed` | Free text, imperative past ("UI badge + first-message notice v1.0-DE installed") | Name the pack asset + version used (e.g. `03 §A1 v1.0-DE`) |
| 7 | `date_deployed` | ISO `YYYY-MM-DD` | Date the control went live, not the date you wrote the row |
| 8 | `evidence_link` | URL/path to screenshot, config export, call recording, log export | Must open for a third party you'd give access to; no evidence link = not done |
| 9 | `source_cited` | The legal basis URL for this duty | Default: `https://artificialintelligenceact.eu/article/50/`; timeline rows: the Council releases per `01` |
| 10 | `reviewer` | Named human | Whoever verified the control exists as described — not whoever installed it, where possible |
| 11 | `review_date` | ISO date of next scheduled check | Default cadence: quarterly; high-risk-radar rows: `2027-06-01` |
| 12 | `status` | `live` / `pending` / `superseded` / `n/a-documented` | `n/a-documented` = "we assessed, duty doesn't apply, here's why" — those rows are as valuable as controls |
| 13 | `notes` | Free text | Grey zones sent to counsel (with date), assumptions ("intranet-only"), platform quirks |

**Operating rules:** append-only (corrections supersede, never overwrite — that's what makes it credible as evidence); one tab per client, or one sheet with a `client` filter; the monthly automation in `06` appends event-count rows so the register shows *continuing* operation, not just installation day; review quarterly and initial the `reviewer` column — an unreviewed register reads as decoration.

---

## 2. Filled example (three rows)

| row_id | client | system | role_classification | duty | control_deployed | date_deployed | evidence_link | source_cited | reviewer | review_date | status | notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| AA-001 | Acme GmbH | Support chatbot — GPT-4o via OpenAI API, n8n orchestration, client Azure tenant, acme.de | client = provider+deployer; agency = contractor | art50-1 | Persistent "KI-Assistent" badge + first-message notice installed (pack `03 §A1`, v1.0-DE); modal text v1.0-DE linked from badge | 2026-07-20 | drive://acme/evidence/AA-001-chat-disclosure.png | https://artificialintelligenceact.eu/article/50/ | J. Whitfield | 2026-10-20 | live | Handoff-to-human enabled; re-disclosure on handback configured |
| AA-002 | Bright Lettings Ltd | "YourAgency Receptionist" — white-label voice agent (VendorX platform), agency brand | agency = provider; client = deployer | art50-2 | Marking readiness run per pack `05`: VendorX CoP-signatory status logged; synthetic-voice marking verified on test calls; AudioSeal re-stamp pilot for exported recordings | 2026-07-24 | drive://brightlettings/evidence/AA-002-marking-tests.md | https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content | J. Whitfield | 2026-11-15 | pending | Product on market since Mar 2026 → outer deadline 2026-12-02 (Council 29 Jun 2026 release cited in `01`); spoken 50(1) line separately at AA-003 |
| AA-003 | Nordwind SL | Ad-creative pipeline — GPT-image + Firefly assets published by client to ES socials | client = deployer (publisher); agency = deployer of gen tools | art50-4-deepfake | Visible label SOP live: «Imagen generada por IA» captions (pack `03 §B1`, v1.0-ES) on all photorealistic assets; C2PA verify step added to delivery workflow | 2026-07-25 | drive://nordwind/evidence/AA-003-label-SOP.pdf | https://artificialintelligenceact.eu/article/50/ | M. Okafor | 2026-10-25 | live | Stylised illustration excluded per house rule (logged `02` Ex.5); strip-test results filed under `05` tracker |

---

## 3. CSV template (copy-paste)

The same template ships as a separate file — **`04-register-template.csv`** — for direct import into Sheets/Excel/Airtable. Delete the three example rows after your first real entry.

```csv
row_id,client,system,role_classification,duty,control_deployed,date_deployed,evidence_link,source_cited,reviewer,review_date,status,notes
AA-001,Acme GmbH,"Support chatbot — GPT-4o via OpenAI API, n8n, client Azure tenant, acme.de",client=provider+deployer; agency=contractor,art50-1,"Badge + first-message notice (03 §A1 v1.0-DE); modal v1.0-DE",2026-07-20,drive://acme/evidence/AA-001-chat-disclosure.png,https://artificialintelligenceact.eu/article/50/,J. Whitfield,2026-10-20,live,"Handoff enabled; re-disclosure on handback"
AA-002,Bright Lettings Ltd,"White-label voice agent (VendorX), agency brand",agency=provider; client=deployer,art50-2,"Marking readiness per 05; vendor CoP status logged; AudioSeal re-stamp pilot",2026-07-24,drive://brightlettings/evidence/AA-002-marking-tests.md,https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content,J. Whitfield,2026-11-15,pending,"On market pre-2 Aug 2026 → outer deadline 2026-12-02"
AA-003,Nordwind SL,"Ad-creative pipeline — GPT-image + Firefly, client publishes to ES socials",client=deployer; agency=deployer of gen tools,art50-4-deepfake,"Visible label SOP (03 §B1 v1.0-ES) on photorealistic assets; C2PA verify step",2026-07-25,drive://nordwind/evidence/AA-003-label-SOP.pdf,https://artificialintelligenceact.eu/article/50/,M. Okafor,2026-10-25,live,"Illustration excluded per house rule; strip tests in 05 tracker"
```

---

## 4. What good looks like (audit-readiness self-check)

- [ ] Every EU-nexus deployment from the `02` worksheet has ≥1 row (including `scope-out` and `n/a-documented` rows — absence of a system from the register is the finding auditors write up first).
- [ ] Every `live` row's evidence link opens and shows what the row claims.
- [ ] Every row cites a source a lawyer can click.
- [ ] At least one row per client is dated **before 2026-08-02** — contemporaneous evidence beats retrofitted evidence.
- [ ] Monthly event-export rows appearing since the `06` automation went live.
- [ ] No row edited after creation (corrections appended as new rows).

*Next file:* `05-marking-readiness-checklist.md` — the provider-side machine-readable layer and the 2 Dec 2026 clock.

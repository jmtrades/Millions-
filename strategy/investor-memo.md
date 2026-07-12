# Registry — Pre-Seed Investor Memo

**The system of record for AI deployment compliance, at the layer the incumbents don't serve.**

Draft: 2026-07-12 · Every market figure cited to source, URLs inline · Companion: `strategy/data-room-index.md`

> Convention: figures shown as `[SCOREBOARD: …]` are wired to the live `m_scoreboard` database view and inserted at send time. They are never estimated. Where a number does not exist yet, this memo says so.

---

## 1. Thesis

Registry is the system of record for AI deployment compliance at the agency/SMB layer — the layer Vanta ignores. Vanta turned a SOC 2 checklist into a $4.15B platform by converting the audit artifact into an always-on system of record ([CNBC](https://www.cnbc.com/2025/07/23/crowdstrike-backed-vanta-is-valued-at-4-billion-in-new-funding-round.html)); nobody has run that conversion for the small businesses now *deploying* AI or for the agencies shipping it into them. Enterprise AI-governance vendors price at €30k–100k+ behind sales calls; the handful of sub-€2k tools that exist are single-company classifiers. Meanwhile the EU AI Act plus a multi-state US wave puts 40 hard-dated, penalty-backed obligations on AI deployers between now and August 2028 — at least one module-triggering deadline every quarter (`strategy/evidence/regulatory-pipeline-2026-2028.md`). The law writes our roadmap through 2028: each dated obligation becomes a module sold into an installed base of agency-managed client registers, distributed white-label through the agencies that already do the deployment work. The wedge is built product, and the register schema already shipped inside it.

## 2. Why now

Three dated waves — then the lived proof that this market cannot self-serve accuracy.

**Wave 1 — 2 August 2026, three weeks from this draft.** EU AI Act Article 50 transparency duties go live for providers *and deployers* — chatbot disclosure, deepfake/synthetic-media labeling, emotion-recognition notice — with fines up to €15M or 3% of turnover; the Act reaches general application and Commission enforcement over GPAI begins the same day. California's SB 942 was deliberately aligned to the same date. And a sellable baseline is already in force today: EU Article 4 AI-literacy duties and Article 5 prohibitions, Illinois HB 3773 on AI in employment, Texas TRAIGA, New York GBL Art. 47, UK DUAA enforcement, Korea's AI Framework Act, plus China's and India's content-marking regimes.

**Wave 2 — 2 December 2026 → 1 January 2027.** A same-day EU double: machine-readable marking of synthetic output (Art. 50(2)) and the Platform Work Directive's algorithmic-management transposition. Four weeks later, the US cluster: Colorado's AI Act (SB 24-205 as amended, effective 1 Jan 2027 per SB 26-189), California's CCPA ADMT regulations, AB 853 phase 2, New York's RAISE Act.

**Wave 3 — 2 December 2027 → 2 August 2028.** Annex III high-risk obligations: risk management, logging, EU-database registration, deployer fundamental-rights impact assessments, serious-incident reporting — the single largest module bundle in the catalog — followed by embedded/Annex I product AI in August 2028.

Full catalog: 44 rows, 40 with confirmed hard dates, 19 dated module triggers after August 2026 (`regulatory-pipeline-2026-2028.md`).

**The omnibus-confusion story.** During our July 2026 discovery sprint, three independent, citation-required research agents returned three conflicting accounts of the EU Digital Omnibus — enacted vs pending, Article 50 delayed vs standing. Only a dedicated adjudication pass against primary sources (Council text, 29 Jun 2026) fixed the truth: omnibus enacted; Annex III moved to 2 Dec 2027; Art. 50 stands at 2 Aug 2026; marking lands 2 Dec 2026 (`decisions.md`, 2026-07-10). If specialist research processes disagree until someone reads the primary sources, a 10-person automation agency with 30 client deployments has no realistic chance — and the professional-advice tier starts at prices it will not pay. Being provably right about dates is a product. We shipped the corrected timeline as page one of the wedge.

## 3. Product and the compounding loop

Four stages; the first two are already built.

**1. Pack wedge (built, launch-ready).** The £399 AI Act Deployer Pack: corrected regulatory timeline, deployer-vs-provider decision tree, disclosure copy blocks in EN/DE/FR/ES, logging and oversight blueprints, a 13-column compliance register with CSV template, and a resale-licensed client audit kit — 10 files, ~14,500 words (`products/ai-act-deployer-pack/`). The register template *is* the schema of the platform: the same artifact-to-system-of-record conversion Vanta ran on the SOC 2 checklist.

**2. Agency register (MVP built).** Registry (`apps/register`): multi-tenant SaaS — one agency org → many client workspaces → many AI systems — with role classification (deployer/provider), per-jurisdiction duty mapping with dates, an append-only evidence log, and CSV export in the format counsel accepts. Duty templates ship today for EU Art. 50, Art. 50(2) marking, Illinois HB 3773, and NY GBL Art. 47. Listed entry price: £79/mo.

**3. Client seats (the multiplier).** Agencies hold 5–50 clients each. Every client's deployments live in a register under the agency's brand — white-label — and the sharpest edge is that register entries are generated from the deployment work itself: integrate the agency's delivery stack (n8n/Make/custom) so shipping a client automation *is* the act of registering it. The client becomes a seat, the agency becomes a channel, and counsel becomes the enforcer of renewal.

**4. Module per regulation (the roadmap the law wrote).** Every catalog row maps to one of six module archetypes — inventory, classification, disclosure log, marking verification, bias-audit log, incident log. Each of the 19 dated post-Aug-2026 triggers is an expansion event sold into the installed base, not a new company: marking (Dec 2026), the US cluster (Jan 2027), GPAI backfill (Aug 2027), Annex III (Dec 2027), embedded (Aug 2028).

Why it compounds: distribution compounds through agency client books (sell one agency, gain a book); the content moat through demonstrated date-accuracy (Section 2); the data moat because a register populated automatically from delivery work is expensive to recreate and painful to leave once counsel accepts its exports.

## 4. Market and comps

All figures from `strategy/evidence/comps-and-market.md`; sources inline.

**The pattern is real and repeated.** Vanta: SOC 2 checklist wedge (2018) → $10M ARR (2021) → $100M (Jan 2024) → ~$300M ARR at +69% YoY (Apr 2026) → $4.15B Series D ([Forbes](https://www.forbes.com/sites/phoebeliu/2025/07/23/christina-cacioppos-startup-vanta-raised-new-funds-at-a-4-billion-valuation-despite-not-needing-the-money/), [Sacra](https://sacra.com/c/vanta/), [Moccet](https://moccet.ai/news/tech/vanta-hits-300m-arr-shadow-ai-explodes-2026), [CNBC](https://www.cnbc.com/2025/07/23/crowdstrike-backed-vanta-is-valued-at-4-billion-in-new-funding-round.html)). Drata ran the same wedge to $100M ARR in ~4 years ([Drata](https://drata.com/blog/announcing-fy25-momentum)) and a $2B valuation ([Sacra](https://sacra.com/c/drata/)). Beyond security compliance, the wedge→platform conversion has produced at least four more $3B–$10B outcomes: Avalara ($8.4B take-private at 8.8x revenue — [BusinessWire](https://www.businesswire.com/news/home/20220808005258/en/Avalara-to-be-Acquired-by-Vista-Equity-Partners-for-%248.4-Billion)), AuditBoard (>$3B at ~$200M ARR, since $300M — [Hg](https://hgcapital.com/insights/auditboard-agrees-to-be-acquired-by-hg), [Axios](https://www.axios.com/pro/enterprise-software-deals/2025/10/14/auditboard-hg-acquisitions-300-million-arr)), KnowBe4 ($4.6B — [PitchBook](https://pitchbook.com/news/articles/vista-equity-knowbe4-buyout-take-private)), Gusto ($1B+ TTM revenue at ~$10B — [TechCrunch](https://techcrunch.com/2026/05/07/gusto-hits-1b-revenue-a-figure-that-brings-it-closer-to-public-markets/)). Shared mechanics: a mandatory, deadline-driven wedge; the wedge artifact becomes the schema of a system of record; each new regulation is an expansion module.

**The segment is the fastest-growing slice of compliance.** AI-governance software: $620M (2024) → ~$940M (2025) → $7.38B (2030), ~51% CAGR ([MarketsandMarkets](https://www.marketsandmarkets.com/Market-Reports/ai-governance-market-176187291.html)); the conservative counter-estimate is $309M (2025) → $5.88B (2035), 34.3% CAGR ([Precedence Research](https://www.precedenceresearch.com/ai-governance-market)). Even the low case grows ~3x faster than broad GRC (eGRC at 14.2% CAGR — [MarketsandMarkets](https://www.marketsandmarkets.com/Market-Reports/enterprise-governance-risk-compliance-market-1310.html)).

**Multiples.** At-scale compliance systems of record cleared 9–15x revenue in PE and public exits; the category leader commands ~19x private. We underwrite at ~10x, at which ~$25–30M ARR clears a nine-figure outcome (comps file, §3).

**TAM, framed honestly and bottom-up.** TAM = (number of agencies deploying AI for clients) × (average client registers per agency) × (per-register price). Two of the three variables are anchored in this repo: agencies hold 5–50 client deployments, and Registry's listed entry price is £79/mo with per-client-register expansion to be priced with design partners. The agency-population variable is the one number we deliberately do not headline-quote, because we have not evidence-verified it — it is a named diligence item; the whitespace scan documents the buyer's existence (a forming German market of outsourced "AI officer" services; agency-platform buyers told to demand per-tenant AI Act classification — [vida.io](https://vida.io/blog/white-label-ai-agent-platform)). What we will state: 1,000 agencies at the listed base price alone is a ~£0.95M ARR *floor*; 1,000 agencies × 5–50 clients is 5,000–50,000 billable client registers before any of the 19 dated modules. The venture case lives in that multiplication — and Vanta's 2025–26 re-acceleration, attributed to AI-compliance demand sold into its installed base ([Moccet](https://moccet.ai/news/tech/vanta-hits-300m-arr-shadow-ai-explodes-2026)), shows the module-expansion motion working in exactly this category.

## 5. Competition

**Above us: motion mismatch, not absence.** Vanta shipped an EU AI Act framework in Oct 2024 ([BusinessWire](https://www.businesswire.com/news/home/20241023949493/en/)) — as an enterprise add-on: Foundation tier reported at $7.5k–10k/yr, average contracts $30k–45k ([soc2auditors.org](https://soc2auditors.org/insights/vanta-review/), [aiactindex.eu](https://aiactindex.eu/reviews/vanta)). Drata starts ~$15k–25k/yr ([drata.com](https://drata.com/resources/webinars/eu-ai-act-iso-42001-AI-governance)). OneTrust, Holistic AI and Credo AI run €30k–100k+ sales-gated motions ([Legalithm comparison](https://www.legalithm.com/en/blog/best-eu-ai-act-compliance-software-startups-smes)); every AI-governance leader retrieved runs an enterprise motion ([Modulos buyer's guide](https://www.modulos.ai/best-ai-governance-platforms/)). Serving a five-person agency with twenty client deployments at £79/mo means rebuilding pricing, tenancy, and go-to-market — the classic incumbent trap, and the reason this layer is open.

**Below us: a floor that proves demand and sets the clock.** The single-company sub-€2k tier went from ~0 to 5–7 entrants in roughly 12 months: ActReady from €29/mo ([pricing](https://getactready.com/pricing)), Legalithm free until ~April 2028 — an explicit land-grab ([Legalithm](https://www.legalithm.com/en/blog/best-eu-ai-act-compliance-software-startups-smes)), EuroComply €0–1,499 ([eurocomply.app](https://eurocomply.app/)), AIComply and others (`register-whitespace.md`). None is multi-client. None is white-label. Two dedicated searches (EN + DE) found zero white-label, multi-client register products; the nearest structural analogues are German DPO suites — multi-tenant, but privacy-persona, DPO-workflow, German-market.

**The edge that compounds: the auto-generated register.** The register writes itself from the agency's delivery stack and is billed under the agency's brand. A single-tenant classifier must rebuild its tenancy model *and* its go-to-market to follow; a DPO suite must abandon its persona and its language market. Features get copied in a quarter; motions don't.

**The closing window is the argument FOR investing now.** Category history is unambiguous about timing. Drata (capitalized: $200M Series C) vs Secureframe ($79M lifetime raised): same wedge, same launch year, $59M vs ~$20M ARR by 2023 — a 3x gap that never closed ([Sacra](https://sacra.com/c/drata/), [Contrary](https://research.contrary.com/company/secureframe)). Tugboat Logic sold the static version of the same wedge and was absorbed by OneTrust as a feature ([OneTrust, Sept 2021](https://www.onetrust.com/news/onetrust-tugboat-logic/)). ActReady is one "agency workspace" release from our flank; Legalithm's free umbrella expires around 2028; the 2 Aug 2026 enforcement spike will pull entrants in. The whitespace is measured open *today*; nothing in the record says it stays open through 2027. A closing window is only a reason not to invest if you are not the one being handed the keys to it.

## 6. Traction and the machine

**Stated plainly: Registry is pre-revenue at the date of this draft.** Cash collected across the portfolio: £0. The wedge and eight sibling products are built and launch-ready; checkout is gated on founder-side payment activation, and per-venture kill clocks deliberately do not start until payment capability is live (`decisions.md`). At send time this section carries live numbers, never estimates: `[SCOREBOARD: packs sold]` · `[SCOREBOARD: Registry waitlist]` · `[SCOREBOARD: design-partner agencies]` · `[SCOREBOARD: cash collected]` · `[SCOREBOARD: audience size]`.

**The execution-speed slide: what one founder plus an agent fleet shipped in 72 hours (10–12 Jul 2026, 43 commits).** Nine applications — eight revenue products plus Registry itself as a multi-tenant SaaS with auth, per-org row-level security, and counsel-ready CSV export; one complete paid deliverable (10 files, ~14,500 words, disclosure copy in four languages); a monorepo venture factory that scaffolds a new venture by script; three security-reviewed database migrations; a one-command Stripe bootstrap. The marginal cost of building product has collapsed, and this company is built around that fact.

**The machine behind the picks.** This portfolio was not brainstormed; it was gated. 81 candidates went through a three-gate evidence protocol (timing verification, saturation, red-team) run by ~99 research agents; **62 were killed, each kill documented with citations** in `/evidence/` (83 files); kill patterns were codified and fed back into generation; discovery was formally closed when the generator converged. The same discipline was turned on our own inherited assets: a 692K-contact email list was ruled a *liability* under PECR/DUAA and assigned zero weight in every score. Every decision sits in an append-only log (`decisions.md`).

**Metric discipline is wired, not promised.** A numbers-only scoreboard view (`m_scoreboard`) is live with a reader script; the 90-day plan commits to weekly numbers-only reports; the standing refusals are logged in writing — including "no revenue promises to investors beyond the scoreboard's numbers." The honesty in this memo is enforced by process, not tone.

## 7. The ask and use of funds

**Raising £750k–£2M pre-seed.** No valuation is stated in this memo; terms belong to the process. The 18-month plan:

- **Team (~55%).** Two hires: a **founding engineer** (platform, delivery-stack integrations, white-label infrastructure) and a **compliance-content lead** (module content and jurisdictional accuracy — the date-correctness moat is a staffed editorial function, not a scrape). These are the two seats the agent fleet cannot cover: production redundancy and regulatory judgment.
- **GTM (~30%).** Design-partner program (first 10 agencies free→paid per the 90-day plan) → white-label program → **1,000 agencies on Registry within 18 months**. At 5–50 clients per agency, that is 5,000–50,000 client registers under management — the installed base every 2027 module sells into.
- **Ops and contingency (~15%).**

**What the team ships: the module roadmap through Annex III.** Marking + Platform Work Directive modules (Dec 2026) → US cluster modules: Colorado, California ADMT, NY (Jan 2027) → GPAI backfill (Aug 2027) → the **Annex III high-risk bundle (2 Dec 2027)** — the largest single expansion event on the calendar — with groundwork for embedded/Annex I (Aug 2028).

Milestone honesty: the 90-day plan pre-commits fork points decided by numbers (day-30 wedge check, day-60 raise-or-bootstrap fork), and Track B carries quarterly evidence gates with a rotation rule. The same gates that killed 62 candidates apply to this thesis.

## 8. Risks, stated plainly

**1. Regulatory softening — including the omnibus precedent.** The Digital Omnibus itself moved Annex III by ~12 months; a Dec 2025 US executive order seeks to curb state AI laws; Utah's act carries a 2027 sunset. Our comps research also logged, as an honesty item, that it found no citable case of a compliance startup killed by softening — an evidence gap, not proof either way. *Mitigation:* the catalog spans 44 obligations across the EU, 10+ US states, the UK, Korea, China, and India — no single date is load-bearing; date movement is itself demand for a curated-correctness product (the omnibus confusion built our wedge); revenue attaches to obligations already in force, not only future ones; and mandatory walk-back checks are wired into every research pass.

**2. Incumbents move down-market; the floor moves up.** Vanta already sells an EU AI Act framework; ActReady could ship an agency workspace in a quarter. *Mitigation:* incumbent floors ($7.5k+, sales-led) make down-market a rebuild, not a release; against the floor, the defense is speed plus the auto-generated-register and white-label design, which requires a tenancy *and* GTM rebuild to copy; and this raise exists precisely because capital velocity decided the last land-grab (Drata vs Secureframe, a 3x ARR gap by year three).

**3. Solo-founder key-person risk.** Today, judgment concentrates in one person; production is agent-leveraged, direction is not. *Mitigation:* the first two hires are the redundancy plan; the operation is unusually legible on paper — append-only decision log, written gate protocols, per-candidate evidence files, build specs — so an incoming team inherits a runnable machine rather than tribal knowledge; monorepo standardization lowers onboarding cost.

**4. Wedge-conversion risk (the Tugboat scenario).** Static-pack sellers get absorbed as features. *Mitigation:* the register MVP was built *before* the first pack sale, inverting the usual sequence; quarterly gates with a pre-committed rotation rule mean this thesis gets killed or funded by evidence, like everything else in this repo.

---

*All market figures trace to the three files under `strategy/evidence/`. Traction figures, where shown, come only from the live scoreboard. Diligence artifacts are indexed in `strategy/data-room-index.md`.*

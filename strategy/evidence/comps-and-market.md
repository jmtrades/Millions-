# Evidence Base: Wedge → Compliance System-of-Record Platform
**Thesis under test:** checklist/template wedge → compliance system of record (the Vanta pattern), applied to AI-deployment compliance at the agency/SMB layer.
**Compiled:** 2026-07-11 · Method: 10 web searches, all numbers cited inline. Supports `strategy/scale-thesis.md` (Track B — AI Deployment Register).

---

## 1. The pattern: Vanta, Drata, Secureframe

### Vanta — the canonical wedge→platform
- **Founding wedge:** Founded 2018 by Christina Cacioppo and Erik Goldman to automate SOC 2 — replacing "a manual process that happened largely via spreadsheets and screenshots" with continuous, integration-driven monitoring ([Forbes, Jul 2025](https://www.forbes.com/sites/phoebeliu/2025/07/23/christina-cacioppos-startup-vanta-raised-new-funds-at-a-4-billion-valuation-despite-not-needing-the-money/)). The pre-automation pain: 6–12 month in-person audits with $50–100K upfront fees ([Sacra](https://sacra.com/c/drata/)).
- **ARR trajectory:** $10M (2021) → $100M (Jan 2024) → ~$220M (Jul 2025) ([Forbes](https://www.forbes.com/sites/phoebeliu/2025/07/23/christina-cacioppos-startup-vanta-raised-new-funds-at-a-4-billion-valuation-despite-not-needing-the-money/)) → ~$250M (end 2025) → **~$300M ARR Apr 2026, +69% YoY** ([Sacra](https://sacra.com/c/vanta/), via [Moccet](https://moccet.ai/news/tech/vanta-hits-300m-arr-shadow-ai-explodes-2026)).
- **Time from wedge to $100M ARR: ~5.5–6 years** (2018 founding → Jan 2024); $10M→$100M took ~3 years.
- **Valuation:** **$4.15B** — $150M Series D, Jul 2025, led by Wellington Management (Sequoia, Goldman Sachs, J.P. Morgan, Craft participating), up from $2.45B one year earlier; ~$500M total raised; 12,000 customers incl. Mistral AI, Duolingo, Ramp, Omni Hotels ([CNBC](https://www.cnbc.com/2025/07/23/crowdstrike-backed-vanta-is-valued-at-4-billion-in-new-funding-round.html), [SiliconANGLE](https://siliconangle.com/2025/07/23/compliance-startup-vanta-valued-4-15b-new-150m-round/), [Vanta announcement](https://www.vanta.com/resources/vanta-announces-series-d)).
- **Platform expansion is the growth engine:** current acceleration attributed to AI-compliance demand ("shadow AI") layered onto the SOC 2 installed base ([Moccet/Sacra](https://moccet.ai/news/tech/vanta-hits-300m-arr-shadow-ai-explodes-2026)).

### Drata — same wedge, faster clock
- Launched 2020 (SOC 2 automation). **Crossed $100M ARR and 8,000+ customers in early 2025 — roughly 4 years from launch** ("Drata Turns 4, Crosses $100M ARR," [Drata blog](https://drata.com/blog/announcing-fy25-momentum)); ARR path $30M (2022) → $59M (2023) → $95–98M (Jan 2025) ([Sacra](https://sacra.com/c/drata/)).
- **Valuation: $2B** at the $200M Series C, Dec 2022 — a 66x forward multiple on $30M ARR ([Sacra](https://sacra.com/c/drata/)).
- Platform build-out via M&A: oak9 + Harmonize (2024), then **SafeBase (early 2025)** — trust-center infrastructure with network effects as more vendors publish security posture through Drata ([Sacra](https://sacra.com/c/drata/)).

### Secureframe — same wedge, same year, one-fifth the outcome (so far)
- Launched 2020; **$56M Series B (Feb 2022), $79M total raised** in under two years ([Secureframe newsroom](https://secureframe.com/newsroom/secureframe-raises-56m-to-accelerate-automated-security-and-compliance), [PRNewswire](https://www.prnewswire.com/news-releases/secureframe-raises-56m-to-accelerate-automated-security-and-compliance-processes-301488531.html)); no public valuation disclosed.
- **~$20M ARR reported 2023** vs Drata's $59M the same year despite identical launch timing ([Contrary Research](https://research.contrary.com/company/secureframe), [Sacra](https://sacra.com/c/drata/)) — the intra-cohort dispersion datapoint.

**Pattern read:** identical wedge, four entrants (Vanta 2018, Thoropass/Laika 2019, Drata 2020, Secureframe 2020 — [Sacra](https://sacra.com/c/drata/)); the two that converted the checklist into a continuously-monitored system of record with capital velocity took ~90% of the value.

---

## 2. Market: GRC/compliance automation + the AI-governance segment

### Broad GRC / compliance-automation market (2025–2030)
- **eGRC: $20.56B (2025) → $39.99B (2030), 14.2% CAGR** ([MarketsandMarkets](https://www.marketsandmarkets.com/Market-Reports/enterprise-governance-risk-compliance-market-1310.html)).
- GRC software: → **$78.89B by 2030, 11.73% CAGR** ([Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/governance-risk-and-compliance-software-market)); a third estimate: 13.22% CAGR through 2030 ([Technavio via PRNewswire](https://www.prnewswire.com/news-releases/governance-risk-and-compliance-grc-platforms-market-on-a-steady-growth-path-projected-to-grow-through-2030-at-cagr-13-22-302425656.html)); widest scope: eGRC $72.42B (2025) → $203.65B (2033), 13.7% CAGR ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/enterprise-governance-risk-compliance-egrc-market)).
- Cloud-deployed GRC is the fast lane: **~26.3% CAGR through 2030 vs ~14.7% on-prem** (reported across the GRC market research above, per [Mordor](https://www.mordorintelligence.com/industry-reports/governance-risk-and-compliance-software-market)/[Custom Market Insights](https://www.custommarketinsights.com/report/grc-platform-market/) summaries).

### AI-governance software — small base, fastest growth in compliance
- **$620M (2024) → ~$940M (2025) → $7.38B (2030)** — implied ~51% CAGR ([MarketsandMarkets](https://www.marketsandmarkets.com/Market-Reports/ai-governance-market-176187291.html)).
- Conservative counter-estimates: $309M (2025) → $5.88B (2035), 34.3% CAGR ([Precedence Research](https://www.precedenceresearch.com/ai-governance-market)); → $6.26B by 2034 at 35% CAGR ([TrendX Insights](https://trendxinsights.com/syndicated-market-research-reports/ai-governance-market/)). Even the low case is ~3x the growth rate of broad GRC.
- Regulatory clock already running: first EU AI Act obligations (AI literacy, prohibited practices) in force 2 Feb 2025 ([Modulos buyer's guide](https://www.modulos.ai/best-ai-governance-platforms/)).

### AI-governance vendors — funding and revenue signals (2024–2026)
- **Credo AI:** **$42M total across 3 rounds; Series B Jul 2024** ([Crunchbase](https://www.crunchbase.com/funding_round/credo-ai-series-b--3b7e7c13), [Startup Intros](https://startupintros.com/orgs/credo-ai)); revenue signal: "quadrupled its revenue and doubled its total enterprise customer base over the past year" ([Startup Intros](https://startupintros.com/orgs/credo-ai)). Distribution validation: Microsoft partnership (with Saidot) Jul 2025; Azure AI Foundry integration May 2025 ([MarketsandMarkets](https://www.marketsandmarkets.com/Market-Reports/ai-governance-market-176187291.html)); Gartner now publishes a Market Guide for AI Governance Platforms ([Credo AI](https://www.credo.ai/gartner-market-guide-for-ai-governance-platforms)).
- **Holistic AI (London, AI governance — NOT the Paris "H"):** founded 2020; investors include Tola Capital, Mozilla Ventures ([Crunchbase](https://www.crunchbase.com/organization/holistic-ai), [Tracxn](https://tracxn.com/d/companies/holisticai/__NwV6GHC8XePYfJi-unIGMZ-OWKIVuLsnfzgjQTSG56Q)); exact round sizes not disclosed in retrieved sources. Disambiguation: the "$220M seed" belongs to H Company (Paris, agentic AI, ex-"Holistic AI" name) ([TechCrunch](https://techcrunch.com/2024/05/21/french-ai-startup-h-raises-220-million-seed-round/)) — do not conflate.
- **Fairly AI:** no funding/revenue data surfaced within search budget — treat as seed-stage/no-signal.
- **Vanta as AI-governance incumbent-in-waiting:** its 2025-26 ARR acceleration is explicitly attributed to AI-compliance demand on top of the existing base ([Moccet](https://moccet.ai/news/tech/vanta-hits-300m-arr-shadow-ai-explodes-2026), [Sacra](https://sacra.com/c/vanta/)) — evidence that AI compliance is being bought as a *module by existing platform customers* (enterprise), while the SMB/agency layer named in the thesis has no equivalent register-of-record vendor in any retrieved source.
- Deepest EU AI Act feature coverage in 2026 per buyer's-guide analysis: Modulos, Credo AI, Holistic AI, Trustible ([Modulos](https://www.modulos.ai/best-ai-governance-platforms/)) — all enterprise-motion; none agency/SMB-priced.

---

## 3. Multiples: what compliance/GRC SaaS commands (2025–26)

| Company | Event | Value | Revenue/ARR | Multiple |
|---|---|---|---|---|
| Vanta | Series D, Jul 2025 ([CNBC](https://www.cnbc.com/2025/07/23/crowdstrike-backed-vanta-is-valued-at-4-billion-in-new-funding-round.html)) | $4.15B | ~$220M ARR ([Forbes](https://www.forbes.com/sites/phoebeliu/2025/07/23/christina-cacioppos-startup-vanta-raised-new-funds-at-a-4-billion-valuation-despite-not-needing-the-money/)) | **~19x ARR** |
| Drata | Series C, Dec 2022 ([Sacra](https://sacra.com/c/drata/)) | $2.0B | $30M ARR | **66x fwd** (peak froth marker) |
| AuditBoard | Hg take-private, May 2024 ([Hg](https://hgcapital.com/insights/auditboard-agrees-to-be-acquired-by-hg)) | >$3B | >$200M ARR; $300M by Oct 2025 ([Axios](https://www.axios.com/pro/enterprise-software-deals/2025/10/14/auditboard-hg-acquisitions-300-million-arr)) | **~15x** at deal; ~10x on current ARR |
| Avalara | Vista take-private, 2022 ([BusinessWire](https://www.businesswire.com/news/home/20220808005258/en/Avalara-to-be-Acquired-by-Vista-Equity-Partners-for-%248.4-Billion)) | $8.4B | — | **8.8x revenue** — "top decile for all-cash acquisitions of US public software >$1B in the last decade" |
| KnowBe4 | Vista take-private, closed Feb 2023 ([PitchBook](https://pitchbook.com/news/articles/vista-equity-knowbe4-buyout-take-private)) | $4.6B | ~$334M 2022 rev (analyst-computed from public filings, not in retrieved sources) | ~13–14x est.; +77% vs $2.6B IPO valuation 18 months prior ([BankInfoSecurity](https://www.bankinfosecurity.com/vista-equity-knowbe4-agree-to-46b-take-private-purchase-a-20249)) |
| Gusto | Series F, Oct 2025 ([Ultima Markets](https://www.ultimamarkets.com/academy/gusto-ipo-what-investors-should-know-now/)) | ~$10B | $1B+ TTM revenue, May 2026 ([TechCrunch](https://techcrunch.com/2026/05/07/gusto-hits-1b-revenue-a-figure-that-brings-it-closer-to-public-markets/)) | **~10x** |

**Read:** at-scale compliance systems of record clear **9–15x revenue** in PE/public exits; the category leader in a hot segment commands **~19x** private; 2021–22-style 60x+ forward multiples were froth, not baseline. Underwrite the thesis at ~10x.

---

## 4. Pattern validation: other checklist/template/audit wedges that became platforms

1. **Avalara (tax):** wedge = automated sales-tax calculation/filing for SMB e-commerce → platform for every transaction-tax type (sales/use, VAT, GST, excise, lodging), 30,000+ customers in 95 countries → IPO 2018 → **$8.4B Vista take-private at 8.8x** ([BusinessWire](https://www.businesswire.com/news/home/20220808005258/en/Avalara-to-be-Acquired-by-Vista-Equity-Partners-for-%248.4-Billion), [TechCrunch](https://techcrunch.com/2022/08/08/vista-equity-partners-to-acquire-automated-tax-compliance-company-avalara-for-8-4b/)). Closest structural analog: statutory obligation, jurisdiction-by-jurisdiction module expansion, SMB motion.
2. **AuditBoard (audit/SOX):** wedge = SOX/internal-audit workflow software (literally audit checklists) → "connected risk" platform → **>$3B Hg acquisition at >$200M ARR (~15x), now $300M ARR** ([Hg](https://hgcapital.com/insights/auditboard-agrees-to-be-acquired-by-hg), [Axios](https://www.axios.com/pro/enterprise-software-deals/2025/10/14/auditboard-hg-acquisitions-300-million-arr)).
3. **KnowBe4 (security/HR):** wedge = phishing-simulation + awareness-training templates → human-risk-management platform → IPO Apr 2021 at $2.6B → **$4.6B Vista take-private Feb 2023** ([PitchBook](https://pitchbook.com/news/articles/vista-equity-knowbe4-buyout-take-private), [BusinessWire](https://www.businesswire.com/news/home/20221011006264/en/KnowBe4-to-be-Acquired-by-Vista-Equity-Partners-For-%244.6-Billion)).
4. **Gusto (payroll/HR):** wedge = SMB payroll (a recurring statutory filing) → HR/benefits/retirement platform ($600M Guideline acquisition) → **$1B+ TTM revenue (May 2026), ~$10B valuation, cash-flow positive** ([TechCrunch](https://techcrunch.com/2026/05/07/gusto-hits-1b-revenue-a-figure-that-brings-it-closer-to-public-markets/), [Fortune](https://fortune.com/2025/06/09/gusto-200-million-plus-tender-offer/), [Sacra](https://sacra.com/c/gusto/)).

**Shared mechanics:** (a) the wedge is a *mandatory, deadline-driven obligation*, not a nice-to-have; (b) the wedge artifact becomes the *schema of a system of record*; (c) each new regulation/framework/jurisdiction is an expansion module sold into the installed base; (d) all four cleared $200M+ revenue and $3B+ outcomes.

---

## 5. Counter-evidence: point-solutions that did NOT become platforms

- **Tugboat Logic** — same SOC 2/ISO-readiness wedge as Vanta, ~800 customers, 140 employees — **acquired by OneTrust Sept 2021, terms undisclosed** (i.e., sub-unicorn absorption in the same quarter competitors were raising at $1–2B) and folded into OneTrust's privacy/GRC suite as a feature ([OneTrust](https://www.onetrust.com/news/onetrust-tugboat-logic/), [VentureBeat](https://venturebeat.com/data-infrastructure/onetrust-acquires-tugboat-logic-to-automate-infosec-assurance-and-certification), [Crunchbase](https://www.crunchbase.com/acquisition/onetrust-acquires-tugboat-logic--ab8200e0)). OneTrust (10,000+ customers, half the Fortune Global 500 — [OneTrust](https://www.onetrust.com/news/onetrust-tugboat-logic/)) is the standing proof that platforms absorb point tools.
- **Secureframe** — same wedge, same launch year as Drata; $79M raised vs Drata's $328M+; **$20M ARR (2023) vs Drata $59M (2023)** ([Contrary Research](https://research.contrary.com/company/secureframe), [Sacra](https://sacra.com/c/drata/)) — under-capitalized velocity in a land-grab compounds into a 3–5x revenue gap within 3 years.
- **Laika → Thoropass** — 2019 entrant, rebranded, still independent but absent from every leadership list retrieved ([Sacra](https://sacra.com/c/drata/), [Sprinto comparison](https://sprinto.com/blog/drata-vs-secureframe/)).
- **Consolidation is active on the buy-side too:** Drata absorbed oak9, Harmonize, SafeBase within ~14 months ([Sacra](https://sacra.com/c/drata/)) — adjacent point-solutions are acquisition fodder, not platform seeds.

**What distinguished winners from losers (evidence-backed):**
1. **Continuous monitoring vs static checklist** — the losers sold audit-readiness documents; winners sold an always-on integration layer that becomes the system of record (Vanta/Drata model per [Sacra](https://sacra.com/c/drata/); Tugboat's readiness tool became a feature).
2. **Capital + GTM velocity during the land-grab window** — Drata $200M Series C at 66x vs Secureframe $79M lifetime ([Sacra](https://sacra.com/c/drata/), [Secureframe](https://secureframe.com/newsroom/secureframe-raises-56m-to-accelerate-automated-security-and-compliance)).
3. **Module expansion into installed base** — Vanta's AI-compliance-driven re-acceleration at $300M ARR ([Moccet](https://moccet.ai/news/tech/vanta-hits-300m-arr-shadow-ai-explodes-2026)); AuditBoard SOX→connected-risk ([Hg](https://hgcapital.com/insights/auditboard-agrees-to-be-acquired-by-hg)).
4. **Own a buyer the incumbents don't serve** — every AI-governance leader retrieved (Credo, Holistic, Trustible, Modulos) runs an enterprise motion ([Modulos](https://www.modulos.ai/best-ai-governance-platforms/)); no source shows anyone owning the agency/SMB register layer. That is the open flank — and also the segment where price points are lowest and absorption risk from Vanta-moving-downmarket is real.

**Evidence gaps flagged (honesty ledger):** (a) no citable case of a compliance startup killed specifically by *regulation softening* was retrieved within the 10-search budget — the live analog risk is EU AI Act omnibus date-shifting, which the thesis itself treats as a content moat rather than a threat; this cuts both ways and needs monitoring. (b) KnowBe4 revenue multiple is analyst-computed, not source-cited. (c) Holistic AI (London) round sizes undisclosed in retrieved sources. (d) Fairly AI: no data found.

---

## Bottom line for the thesis
The pattern is real and repeated (4 independent confirmations at $3B–$10B outcomes; 2 in-category at $2B–$4.15B), the target segment is the fastest-growing slice of compliance (34–51% CAGR from <$1B base), exit multiples of 9–15x revenue mean **~$10M ARR ≈ $100M outcome; ~$25–30M ARR ≈ nine figures at conservative multiples**. The counter-evidence defines the execution bar: convert the £399 pack into a continuously-updated register SaaS fast, or be a Tugboat.

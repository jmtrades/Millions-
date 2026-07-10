# AI Bill Teardown (£299, refund if <30% savings found)
Category: R5 founder-orbit | Status: R5-generated 2026-07-10

## R1 Spec
- Offer: Fixed-fee teardown of one company's LLM/agent spend: founder analyzes 30 days of provider usage exports + workflow architecture (read-only), and delivers a prioritized savings plan — model routing/downgrade map per call-type, caching & prompt-compression targets, retry/loop waste in agent chains, with £-quantified impact. If identified savings <30% of current bill, full refund. 5-day turnaround, async intake; no call. Implementation install upsell (£999+).
- Buyer: SMB / bootstrapped scale-up ops or product lead running production AI features or agent workflows with a four-to-five-figure monthly token bill.
- Price: £299 one-time, prepaid Stripe checkout, refund-backed performance guarantee.
- Channel_first10 (£0): @theoperator teardown content ("I cut this company's AI bill 43% — the 5 line items") + LinkedIn organic + DMs to ops leads already in founder's community.
- Timing_hypothesis: Deloitte analysis (Jan 2026) named AI the fastest-growing expense in corporate technology budgets — enterprise AI spend up 320% over two years even as per-token prices collapsed, driven by agentic workflows firing 10-20 LLM calls per task; field reports put 40-60% of production token budgets as pure waste. The pain is ≤12mo old at SMB scale and no fixed-fee SMB teardown product was found (only enterprise FinOps platforms and how-to content). Dated.
- Pass-pattern: (3) performance-priced service where founder craft (production agent cost engineering) is the moat and prepayment + refund guarantee bounds downside; adjacent to (6) rescue at budget breakage.
- Kill-pattern clearance: K1 — OpenAI/Anthropic dashboards show spend; they don't restructure workflows. K3 — routers (RouteLLM/OpenRouter) and caches exist but choosing and wiring them per-workflow IS the audit; no push-button SMB product ships a savings plan. K2 — free playbook content abounds (that's the demand signal); buyers pay for applied diagnosis with a guarantee. K4 — FinOps guru space targets enterprise cloud teams, not SMB agent stacks at £299.
- Citations:
  - https://regolo.ai/token-cost-optimization-in-2026-why-ai-spend-is-rising-and-how-to-cut-it-by-up-to-80/ (Deloitte Jan 2026: fastest-growing tech expense; +320%/2yr)
  - https://oplexa.com/ai-inference-cost-crisis-2026/ (agentic 10-20 calls/task; 24/7 agents)
  - https://wavect.io/blog/reduce-llm-token-costs-2026/ (RouteLLM 75-85% cost reduction data; 40-60% waste field reports)

## R2 Timing Gate (2026-07-10) — PASS
- Verdict: PASS. All three timing claims verified specific and current; none vague or contradicted.
- Deloitte claim CONFIRMED at source: Deloitte's own pages state AI is the fastest-growing expense in corporate technology budgets, consuming a quarter to one-half of IT spend at some firms.
  - https://www.deloitte.com/us/en/insights/topics/emerging-technologies/ai-tokens-how-to-navigate-spend-dynamics.html
  - https://www.deloitte.com/us/en/services/consulting/articles/cfo-guide-ai-token-economics.html
- +320%/2yr CONFIRMED (multi-source): token prices fell ~98% (280x) over two years while total enterprise AI spend rose 320%; average enterprise AI budget $1.2M (2024) → $7M (2026). Linux Foundation announced the "Tokenomics Foundation" standards body this month in direct response — the pain is institutionalizing now.
  - https://thenextweb.com/news/token-prices-fell-98-enterprise-ai-bills-tripled-now-the-industry-wants-a-standards-body-to-explain-why
  - https://henon.ai/insights/token-prices-fell-98-enterprise-ai-costs-tripled-now-companies-are-asking-why
  - https://forklog.com/en/use-it-but-sparingly-how-ai-token-costs-hit-corporate-budgets/
- Agentic multiplication CONFIRMED: Gartner (Mar 2026) — agentic models need 5-30x more tokens per task than chatbots; 10-20 LLM calls per user task; per-interaction cost $0.04 (2023 linear) → ~$1.20 (2026 orchestrated), ~30x. Each loop step re-sends accumulated context, so by step 20 you pay for the same history 20 times.
  - https://oplexa.com/ai-inference-cost-crisis-2026/
  - https://leanopstech.com/blog/agentic-ai-cost-runaway-token-budget-2026/
  - https://www.cockroachlabs.com/blog/agentic-ai-costs-at-scale/
- 40-60% waste CONFIRMED (field reports): audits of agentic workflows typically find 40-60% of enterprise token budgets is waste — redundant context, repeated retrieval, retry storms, unbounded agent loops.
  - https://leanopstech.com/blog/agentic-ai-cost-runaway-token-budget-2026/
  - https://oplexa.com/ai-inference-cost-crisis-2026/

## R3 Saturation Gate (2026-07-10) — score 6/10, PASS (at the kill line)
- Verdict: 6/10 saturation (>6 kills; this survives by one point). The diagnostic layer is fully commoditized; the prescriptive workflow-redesign layer is not; two direct human competitors exist but neither occupies £299/SMB/productized.
- Commoditized — visibility (WHERE money goes is free):
  - Langfuse: MIT open source, free self-host, free cloud tier 50k events/mo; per-trace cost tracking. https://github.com/langfuse/langfuse ; https://langfuse.com/docs/observability/overview
  - Helicone: integration is "change a base URL," automatic cost tracking, free 10k req/mo, paid from $79/mo. Helicone's own free blog teaches "cut spending by 90%." https://www.helicone.ai/blog/monitor-and-optimize-llm-costs
  - Seven+ free/OSS observability tools cataloged: https://posthog.com/blog/best-open-source-llm-observability-tools
- Commoditized — automated downgrades: OpenRouter Auto Router (powered by NotDiamond) picks a model per prompt at no extra fee, with a 0-10 cost_quality_tradeoff dial; ":floor" slug always routes to cheapest provider. https://openrouter.ai/docs/guides/routing/routers/auto-router ; https://openrouter.ai/blog/insights/model-routing/
- Commoditized — native provider savings: OpenAI prompt caching is automatic (no code change), up to 50% off cached input; Anthropic up to 90% off cache hits via cache_control. https://www.prompthub.us/blog/prompt-caching-with-openai-anthropic-and-google-models
- Direct human competitors (audit demand validated, wedge contested):
  - LLM CFO — LLM cost optimization as managed service, pay-only-on-savings, claims 40-60% reduction achievable. Stronger guarantee structure than prepaid+refund. https://llmcfo.com/
  - ActiveWizards — productized "LLM Cost Audit" (routing, caching, prompt budgets, call-type measurement; written report), agency/enterprise-leaning. https://activewizards.com/services/llm-cost-audit/
- NOT commoditized (why 6, not 8): tools observe, they don't redesign. Routing/caching don't fix retry storms, loop budgets, or context accumulation — "Why OpenRouter Won't Cut Your AI Bill" argues routing alone is insufficient (https://www.clawrouters.com/blog/why-openrouter-wont-cut-your-ai-bill). Strongest anti-saturation fact: 40-60% waste persists in field audits DESPITE free tooling being ubiquitous — dashboards aren't acted on. No £299 fixed-fee 5-day SMB teardown found; competitors are enterprise/managed.

## R4 Red Team (2026-07-10) — defensible: TRUE (conditionally)
- Strongest failure case (searchable facts): the refund-if-<30% guarantee is underwritten by OTHER people's architecture. (1) OpenAI's prompt caching is automatic — up to 50% cost reduction with zero code changes (https://www.prompthub.us/blog/prompt-caching-with-openai-anthropic-and-google-models) — so providers auto-harvest the easiest savings before the auditor arrives; a moderately competent stack may hold <30% findable headroom → refund. (2) The buyer (4-5 figure monthly bill) definitionally employs engineers, and DIY cost of the first optimization pass approaches zero: Helicone = one base-URL change with a free tier (https://www.helicone.ai/blog/monitor-and-optimize-llm-costs), Langfuse = free MIT self-host (https://github.com/langfuse/langfuse), OpenRouter auto-routing = no extra fee (https://openrouter.ai/docs/guides/routing/routers/auto-router). (3) A rational buyer comparing guarantees prefers LLM CFO's pay-only-on-savings over £299 prepaid (https://llmcfo.com/). (4) "Identified savings" is unverifiable at delivery → dispute/chargeback risk on Stripe, and handing 30 days of usage exports + workflow internals to a solo outsider is a real trust barrier at cold-DM distance.
- Strongest rebuttal: the waste data sides with the founder — Gartner/field reports put 40-60% of agentic token budgets as waste from retry storms, redundant context, and unbounded loops (https://leanopstech.com/blog/agentic-ai-cost-runaway-token-budget-2026/), failure modes that automatic caching and routers do NOT fix (https://www.clawrouters.com/blog/why-openrouter-wont-cut-your-ai-bill); OpenAI's auto-cache also only fires on stable prefixes ≥1,024 tokens, and Anthropic's 90% requires explicit implementation most SMB stacks lack. The founder can screen the usage export in minutes BEFORE accepting payment, converting the guarantee from underwriting risk into a marketing device with a triage filter; refund downside is bounded at £299 + days of labor per miss. Trust barrier is offset by warm audience (@theoperator/Skool) rather than cold outreach, and read-only export review needs no system access.
- Defensible: TRUE, conditionally — the offer itself is imitable (LLM CFO or any agency could ship a £299 tier tomorrow); defensibility rests on founder craft (production agent cost engineering) + owned distribution to the exact buyer + teardown content flywheel, per pass-pattern (3). The £299 teardown is the wedge; durable economics live in the £999+ implementation upsell.

## Gate Scores (2026-07-10) — harsh, 1-10
- pain: 8 — fastest-growing corporate tech expense (Deloitte); bills tripled while prices collapsed; a standards body just formed around this exact pain. For the target buyer it is budgeted and burning.
- reach0: 6 — audience is the exact buyer persona at £0 CAC, but the qualifying slice (4-5 figure monthly token bill) is narrow within any audience, and audience size is unproven for this offer.
- ttfd: 8 — Stripe checkout + intake form is a same-day build; 5-day async delivery; first cash plausible in week one from one teardown post.
- margin: 7 — near-zero COGS service, but £299 for ~2-3 days of elite labor is thin hourly, refund guarantee claws back some revenue; real margin deferred to unproven £999+ upsell.
- timing: 9 — verified at peak: +320%/2yr spend, Gartner Mar-2026 agentic multipliers, Tokenomics Foundation launched this month; SMB-level standards/tooling not yet caught up.
- fit: 9 — LLM cost optimization is squarely the founder's craft; channel-native teardown format; buyer sits inside existing audience.
- VERDICT: PASS all gates (R2 pass; R3 6/10 at the line; R4 defensible-true conditional). Total 47/60.

import { defineVenture } from "@millions/core";

// ACCURACY CONTRACT (evidence: /evidence/r5b-ai-bill-teardown.md, verified 2026-07-10):
// - "Fastest-growing corporate tech expense" + "+320% in 2 years" = Deloitte-cited
//   reporting (Jan 2026), confirmed at Deloitte primary sources in R2.
// - "10-20 LLM calls per task" = Oplexa/Gartner-cited agentic analysis (2026).
// - "40-60% waste" = field-audit reports (LeanOps/Oplexa) — framed as field reports, not lab data.
// BINDING FLOW CONDITION (R4 rebuttal → product mechanics): usage exports are screened
// BEFORE payment. Step 1 is a FREE pre-check via the on-page form (stored kind=qualified);
// the £299 charge happens only after we confirm the ≥30% guarantee fits the bill shape.
// The hero CTA still links straight to /api/checkout for buyers who skip the pre-check.
export const cfg = defineVenture({
  slug: "ai-bill-teardown",
  name: "The AI Bill Teardown",
  tagline: "A fixed-fee teardown of your LLM spend — 5 days, every saving £-quantified, full refund if we find under 30%",
  mode: "checkout",
  currency: "gbp",
  price: 29900,
  priceLabel: "£299 fixed · 5-day savings plan",
  guarantee: "Full refund if identified savings are under 30% of your monthly bill",
  hero: {
    badge: "Step 1 is free — we screen your bill shape before you pay a penny",
    headline: "Your AI bill tripled. 40-60% of it is waste. We find it in 5 days — or you don't pay.",
    sub: "Send 30 days of provider usage exports and a description of your workflows. Back comes a model routing and downgrade map, caching and prompt-compression targets, and an agent retry/loop waste analysis — every change £-quantified in a savings plan ranked by effort. Free pre-check first: we confirm the ≥30% guarantee applies to your bill before any money moves.",
    cta: "Get the teardown — £299",
  },
  pains: [
    {
      title: "Spend up 320% in two years — while token prices collapsed",
      body: "Deloitte calls AI the fastest-growing expense in corporate technology budgets. Per-token prices fell ~98% over the same window and bills tripled anyway, because cheaper tokens made call volume explode. If your bill detached from usage after a feature launch, that's the pattern — not an anomaly.",
    },
    {
      title: "Agents fire 10-20 calls per task — and re-buy the same context every step",
      body: "One user task now triggers 10-20 LLM calls, and every loop step re-sends the accumulated history. By step 20 you've paid for the same context twenty times. Add retry storms on flaky tools and loops with no step budget, and single tasks quietly hit three-figure costs.",
    },
    {
      title: "Your dashboard shows where money goes. It doesn't decide what to change",
      body: "Teams already running Langfuse or Helicone still show 40-60% waste in field audits. Visibility was never the bottleneck. The missing layer is diagnosis: which calls downgrade safely, which prompts actually cache, which loops need budgets — and what each change is worth in £.",
    },
  ],
  offer: {
    title: "What the £299 teardown covers",
    bullets: [
      "Model routing & downgrade map, per workflow — which calls move to cheaper models, with quality guardrails on every switch",
      "Prompt-caching + compression targets, with projected £ savings per prompt family",
      "Agent retry & loop waste analysis — retry storms, unbounded loops, context re-sent at every step",
      "Batch-API migration candidates — the non-interactive jobs leaving the ~50% async discount on the table",
      "The 5-day savings plan: every change £-quantified and ranked by implementation effort",
      "30-minute async Loom walkthrough of the findings — watch when you like, no meeting",
      "Optional implementation install from £999 — priced after the teardown, only if you want the changes wired in for you",
    ],
    turnaround: "Delivered within 5 working days of your exports landing — fully async, no calls",
  },
  proof: [
    {
      stat: "AI is the fastest-growing corporate tech expense — enterprise AI spend up 320% in two years even as per-token prices collapsed",
      source: "Deloitte-cited reporting, Jan 2026",
      url: "https://regolo.ai/token-cost-optimization-in-2026-why-ai-spend-is-rising-and-how-to-cut-it-by-up-to-80/",
    },
    {
      stat: "Agentic workflows fire 10-20 LLM calls per user task — re-sending accumulated context at every step",
      source: "Oplexa, AI Inference Cost Crisis (2026)",
      url: "https://oplexa.com/ai-inference-cost-crisis-2026/",
    },
    {
      stat: "Field audits put 40-60% of production token budgets as pure waste — retries, redundant context, unbounded loops",
      source: "LeanOps, Agentic AI Cost Runaway (2026)",
      url: "https://leanopstech.com/blog/agentic-ai-cost-runaway-token-budget-2026/",
    },
  ],
  steps: [
    {
      title: "Free pre-check (send export summary)",
      body: "Use the form below: a one-paragraph summary of last month's usage — providers, rough monthly spend, what your main workflows do. Within one working day we confirm whether the ≥30% savings guarantee applies to your bill shape. No exports uploaded yet, no access granted, nothing to pay.",
    },
    {
      title: "Pay £299 once we confirm fit",
      body: "If we take your bill, we take the risk with it. Pay by card; the intake form then collects 30 days of provider usage exports (CSV) plus short workflow descriptions. Read-only — no code access, no API keys.",
    },
    {
      title: "5-day teardown + savings plan",
      body: "Within 5 working days: routing/downgrade map, caching and compression targets, retry/loop waste analysis, batch candidates — every change £-quantified and ranked by effort, plus a 30-minute Loom walkthrough. Identified savings under 30% of your monthly bill? Full refund.",
    },
  ],
  faq: [
    {
      q: "What do you need access to?",
      a: "Usage exports (CSV downloads from your provider dashboards) covering roughly 30 days, plus short written descriptions of what each workflow does. That's the whole intake — read-only, no code access, no API keys, no production access required for the teardown. If you later take the implementation install, that scope and access get agreed separately.",
    },
    {
      q: "Which providers do you cover?",
      a: "OpenAI, Anthropic and Google usage exports, plus gateways and routers like OpenRouter and LiteLLM — gateway logs are often the richest input, since they capture per-call model choice. Mixed stacks are normal; most bills we see run two or three providers at once.",
    },
    {
      q: "Why not just use Langfuse or Helicone?",
      a: "Use them — they're good, and free tiers exist. But dashboards show WHERE money goes; the teardown decides WHAT to change and what it's worth: which calls downgrade safely, which prompts cache, which loops need budgets, each with a £ figure and an effort rank. Field audits keep finding 40-60% waste in stacks that already have observability installed. Visibility alone doesn't cut bills — decisions do.",
    },
    {
      q: "How is the refund guarantee safe for you?",
      a: "The free pre-check. We screen your export summary before payment and only take bills whose shape we're confident we can beat by 30% or more. If your stack is already tight, we tell you for free and you never pay — that filter is what makes the guarantee honest instead of reckless, and it's why step one costs nothing.",
    },
    {
      q: "Will quality drop if we downgrade models?",
      a: "That risk is engineered into the map. Every routing change ships with quality guardrails: what to eval before switching, which slice of traffic to canary, and a rollback note per change. Downgrades are only recommended where the call-type tolerates them — where it doesn't, the plan says so and leaves the model alone.",
    },
  ],
  compliance:
    "Savings figures in the teardown are estimates based on observed usage in your exports and published provider pricing; implementation outcomes depend on your deployment. The refund guarantee applies as stated: full refund if identified savings total under 30% of your monthly bill.",
  seoPages: [
    {
      slug: "ai-spend-crisis-2026-why-bills-tripled",
      title: "The AI spend crisis of 2026: why bills tripled while token prices collapsed",
      description:
        "Token prices fell ~98% in two years and enterprise AI spend still rose 320%. The mechanics behind the 2026 AI spend crisis — agentic multipliers, context tax, retry storms — with sources.",
      body: "Two things happened to AI economics between 2024 and 2026, and they point in opposite directions. Per-token prices collapsed — roughly 98% down over two years for comparable capability. And total enterprise AI spend rose 320% over the same window — average enterprise AI budgets up from $1.2M to $7M. Deloitte now names AI the fastest-growing expense in corporate technology budgets, consuming a quarter to a half of IT spend at some firms. Cheaper tokens did not produce cheaper bills. They produced more calls.\n\n## The agentic multiplier\nThe chat era had friendly arithmetic: one user message, one model call. Agentic workflows broke it. Gartner's 2026 analysis puts agentic workloads at 5-30x the tokens per task of chatbot-era usage, and field measurements consistently show 10-20 LLM calls fired per user task once an agent plans, selects tools, retries and summarizes. The cost of a typical interaction moved from about $0.04 in 2023 to about $1.20 in orchestrated 2026 workflows — a ~30x multiplier that arrived while unit prices were falling.\n\n## The context tax\nInside those loops sits the quietest cost mechanism in production AI: context accumulation. Each agent step re-sends the conversation history and working memory that came before it. By step 20, you have paid for the same accumulated context roughly twenty times. Add retry storms — a flaky tool triggering repeated re-attempts, each re-sending everything — and loops with no step budget, and the bill detaches from anything the business recognizes as usage.\n\n## The waste number\nAudits of production agentic workflows keep landing in the same range: 40-60% of enterprise token budgets is waste — redundant context, repeated retrieval, retry storms, loops that should have been capped. What makes the number striking is that it persists in stacks already running free observability tooling. Dashboards made the waste visible. They did not make anyone decide what to change.\n\n## It just became institutional\nThe clearest signal that this is structural rather than a passing complaint: the Linux Foundation announced a Tokenomics Foundation this month — a standards body formed specifically because enterprises cannot explain their AI bills. When an industry stands up a standards body around one cost line, the cost line is real.\n\n## What to do with your own bill\nPull 30 days of usage exports. Rank workflows by spend. For each of the top five, ask three questions: does this call need this model, is the static part of this prompt actually caching, and is anything bounding retries and loop steps. If you want that done for you — £-quantified, ranked by effort, guaranteed — The AI Bill Teardown is £299 with a free pre-check first, and a full refund if identified savings come in under 30% of your monthly bill.\n\n- Deloitte Insights, AI token spend dynamics (Jan 2026)\n- TNW / Henon reporting: token prices down ~98%, enterprise spend up 320%, budgets $1.2M to $7M\n- Oplexa, AI Inference Cost Crisis 2026; LeanOps, Agentic AI Cost Runaway (10-20 calls/task; 40-60% waste)",
    },
    {
      slug: "llm-cost-optimization-checklist",
      title: "The LLM cost optimization checklist: 12 fixes to run before you buy more tokens",
      description:
        "A working 12-point checklist for cutting LLM spend — prompt caching, batch APIs, model routing, compression, retry caps and loop budgets — with the provider mechanics that make each work.",
      body: "A four- or five-figure monthly token bill usually doesn't need a cheaper provider. It needs configuration discipline. This is the checklist we run at the start of every teardown — twelve points, grouped by mechanism. All of it is documented provider behaviour; none of it requires re-architecting your product.\n\n## Pay less for the same tokens\n- 1. Turn prompt caching on properly. OpenAI caches stable prompt prefixes of 1,024+ tokens automatically at up to 50% off cached input; Anthropic's cache_control offers up to 90% off cache reads but must be explicitly implemented. Most stacks qualify for one of the two and collect neither.\n- 2. Order prompts static-first. System prompt, schemas and few-shot examples before any variable content — a timestamp or user ID near the top breaks the prefix match and silently disables caching.\n- 3. Route by call-type. Classification, extraction, formatting and tool-selection don't need frontier models. Routing benchmarks show 75-85% cost reductions on suitable traffic while retaining ~95% of response quality.\n- 4. Move non-interactive work to batch APIs. Overnight enrichment, backfills, evals, report generation: batch endpoints run at roughly half price; anything without a user waiting qualifies.\n- 5. Downgrade with evals, not vibes. Build a small eval set per workflow before switching models, and keep a rollback note per change.\n\n## Send fewer tokens\n- 6. Compress prompts. Strip boilerplate instructions, dedupe examples, replace prose rules with terse schemas.\n- 7. Cap max_tokens and use stop sequences — unbounded output settings quietly pay for tokens nobody reads.\n- 8. Summarize agent history instead of re-sending it. Every loop step that replays full context re-buys everything that came before; by step 20 that's twenty purchases of the same tokens.\n- 9. Dedupe retrieval. RAG pipelines routinely stuff near-identical chunks into context on every call.\n\n## Stop paying for failure\n- 10. Cap retries. Two attempts with exponential backoff, then fail loudly. Retry storms are one of the largest waste lines in field audits.\n- 11. Set loop budgets. Max steps and max spend per agent task, enforced in code — unbounded loops are how single tasks reach three-figure costs.\n- 12. Track unit cost per workflow. Langfuse and Helicone have free tiers; alert on cost-per-task drift, not just total spend.\n\n## What a checklist can't tell you\nWhich of the twelve are worth doing on your bill, in what order, and what each is worth in £ — that depends entirely on your usage shape. Field audits still find 40-60% of production token budgets wasted inside teams that know every item above. The AI Bill Teardown quantifies it from 30 days of your exports: £299, 5-day turnaround, savings plan ranked by effort, full refund if identified savings are under 30% of your bill. Start with the free pre-check — two minutes, costs nothing.\n\n- PromptHub, prompt caching mechanics for OpenAI, Anthropic and Google\n- Wavect, Reduce LLM Token Costs 2026 (RouteLLM routing data)\n- LeanOps, Agentic AI Cost Runaway (40-60% waste field reports)",
    },
    {
      slug: "model-routing-downgrade-strategy",
      title: "Model routing and downgrades: when the cheaper model is free money — and when it isn't",
      description:
        "Routing data shows 75-85% cost cuts holding ~95% quality on the right call-types. How to tell which of your workflows qualify for a model downgrade — and which will bite back through retries.",
      body: "Model routing — sending each call to the cheapest model that can handle it — is usually the single biggest line in an AI bill teardown. It is also the change teams get wrong most often, in both directions: paying frontier prices for string formatting, or downgrading a reasoning step and burning the savings on retries. Here is how to tell the difference.\n\n## Where the cheaper model is free money\nCall-types with verifiable, structured outputs downgrade almost risk-free: classification, entity extraction, formatting, yes/no gating, tool selection from a constrained menu, summarization of short inputs. These share the two properties that matter — you can eval them cheaply against ground truth, and a failure is visible immediately rather than three steps later. The routing data bears it out: RouteLLM-style routing achieves 75-85% cost reduction on mixed traffic while retaining about 95% of frontier response quality, and OpenRouter's Auto Router now does per-prompt routing at no extra fee. In most production stacks this easy tier is the majority of call volume — the high-frequency, low-difficulty traffic.\n\n## Where it isn't\nThree shapes resist downgrading. First, long-horizon agent reasoning: when step 3 decides what steps 4 through 18 do, a weak decision doesn't fail, it cascades — you pay for fifteen well-executed calls in service of a wrong plan. Second, low-volume, high-stakes outputs — board-facing analysis, legal or financial drafting — where the total spend is pennies and the cost of a miss is not. Third, and least obvious: any call where the cheaper model raises the retry rate. A model that costs 60% less but fails twice as often can cost more after retries, because you have moved spend from the success path to the failure path. If retry rate climbs after a downgrade, the £ saving is fictional.\n\n## Routing alone won't cut the bill\nA router cannot fix retry storms, unbounded loops or context re-sent at every agent step — the failure modes field audits blame for 40-60% of production token budgets. Teams that install a router and stop there typically capture the easy third of the opportunity and plateau.\n\n## The guardrails that make downgrades safe\nEvery routing change in a serious plan carries four things: an eval set run before the switch, a canary period on a slice of traffic, a rollback note per change, and per-workflow quality tracking after cutover. That is the difference between a routing map and a routing gamble — and why 'will quality drop?' has an engineering answer rather than a hopeful one.\n\nThe routing and downgrade map — per workflow, £-quantified, guardrails included — is the first deliverable of The AI Bill Teardown: £299, five days, full refund if identified savings are under 30% of your monthly bill. The pre-check is free.\n\n- Wavect, Reduce LLM Token Costs 2026 (RouteLLM 75-85% at ~95% quality)\n- OpenRouter docs, Auto Router (per-prompt routing, no extra fee)\n- ClawRouters, Why OpenRouter Won't Cut Your AI Bill; LeanOps (40-60% waste)",
    },
  ],
  theme: { accent: "#16a34a", dark: false },
});

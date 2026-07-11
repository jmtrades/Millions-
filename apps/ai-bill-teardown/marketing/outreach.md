# The AI Bill Teardown — outreach sequence (compliant)

Rules: B2B corporate subscribers only (PECR); fresh researched lists — companies showing PUBLIC signals of heavy production AI usage (AI-feature launch announcements, engineering blog posts about LLM pipelines/agents/RAG, case studies bragging about AI volume, job ads for LLM/AI engineers); company-level personalization required — every email names the specific signal; one-click opt-out line in every send; ≤2 follow-ups; no purchased lists. LIA documented before first send.

CTA discipline: every email's ask is the FREE pre-check, never the paid checkout. It is the lowest-friction step, it mirrors the product's own gate (we screen the bill before money moves), and "if your stack is tight I'll say so for free" is the line that earns replies from engineers.

## Email 1 (day 0)
Subject: {{Company}}'s token bill (the 40-60% number)
Body:
{{FirstName}} — saw {{public AI signal, e.g. "your launch post for the support agent" / "the eng blog piece on your doc-extraction pipeline"}}. That's exactly the kind of workload this is about.

Industry picture right now: enterprise AI spend is up 320% in two years while per-token prices collapsed — Deloitte calls AI the fastest-growing expense in corporate tech budgets. The driver is agentic workloads firing 10-20 LLM calls per task, and field audits keep finding 40-60% of production token budgets is pure waste: retry storms, context re-sent every loop step, calls running on models 10x pricier than the job needs.

I run a fixed-fee teardown on exactly this: 30 days of your usage exports + a workflow review → routing/downgrade map, caching + compression targets, retry/loop analysis — every change £-quantified in a 5-day plan. £299, full refund if identified savings come in under 30% of your monthly bill.

Step 1 is free and takes two minutes: send a one-paragraph summary of last month's usage ({{pre-check link}}) and I'll tell you whether the guarantee applies to your bill shape before you pay anything. If your stack is already tight, I'll say so — free, in writing, and you've lost nothing.

Reply "no" and you won't hear from me again — removed same day.

## Email 2 (day 3 — new angle: dashboards aren't decisions)
Subject: your dashboard knows. your bill doesn't care.
Body:
{{FirstName}} — different angle from Monday.

Most teams at your stage already run Langfuse or Helicone, and the waste number hasn't moved: audits still find 40-60% of token budgets wasted in stacks WITH observability installed. Dashboards show where the money goes. Someone still has to decide what to change — which calls downgrade safely, which prompts actually hit the cache, which agent loops need step budgets — and put a £ figure and an effort rank on each.

That decision layer is the teardown: 5 days, async, read-only (exports + workflow descriptions, no code access), quality guardrails on every recommended switch. £299, refunded in full if I can't identify ≥30%.

The pre-check is still free: {{pre-check link}} — one paragraph on your usage, answer within a working day, pay nothing until I've confirmed your bill qualifies.

Reply "no" to opt out — removed same day.

## Email 3 (day 8 — breakup + resource)
Subject: the 5 checks (keep this)
Body:
{{FirstName}} — last note. Run these on your own exports even if we never speak:

- Caching: is your prompt static-first? A timestamp near the top kills the prefix match — OpenAI auto-caches 1,024+ token stable prefixes at up to 50% off; Anthropic pays up to 90% off cache reads via cache_control.
- Routing: anything doing classification/extraction/formatting on a frontier model is the classic overpay.
- Batch: any job without a user waiting that runs on the sync API is leaving the ~50% batch discount on the table.
- Retries: cap at 2 attempts with backoff — retry storms are one of the biggest waste lines in field audits.
- Loops: max steps + max spend per agent task. Unbounded loops re-buy the same context every single step.

Full 12-point version: {{guide link — /guides/llm-cost-optimization-checklist}}.

And if you'd rather have it quantified on your actual bill: free pre-check at {{pre-check link}} — £299 teardown only happens after I confirm the ≥30% guarantee fits your bill shape.

Reply "no" and this is the last one either way — removed same day.

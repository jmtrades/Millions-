# The AI Bill Teardown — 5 @theoperator scripts

Format: HOOK (0-2s) → TENSION (2-15s) → PROOF/DEMO (15-40s) → CTA. Every CTA routes to the FREE pre-check — the guarantee mechanics ("I screen your bill before you pay") is the differentiator, so it goes in the CTA line, not the fine print.

## 1. The paradox hook — "Token prices fell 98%. Your bill tripled."
HOOK: "Token prices dropped about 98% in two years. So explain why your AI bill tripled."
TENSION: Deloitte says AI is now the fastest-growing expense in corporate tech budgets — spend up 320% in two years. It isn't the price of tokens. It's agents: 10-20 LLM calls per task, and every step re-sends the whole history. By step 20 you've bought the same context twenty times.
PROOF: Screen-record a real (anonymized) usage export. Trace ONE user task through its call cascade with a running £ counter in the corner. Watch the counter jump on the retries.
CTA: "£299 flat: I tear your bill down in 5 days — routing map, cache targets, loop waste, all £-quantified. Under 30% savings found = full refund. Pre-check is free, link in bio."

## 2. The teardown — "I cut this company's AI bill 43% in one afternoon — here's the exact waste"
HOOK: "I cut this company's AI bill 43% in one afternoon. Here's the exact waste, line by line."
TENSION: Their dashboard looked healthy. Five line items said otherwise.
PROOF/DEMO (names blurred, real numbers): (1) frontier model doing yes/no classification — routed down, −12%. (2) Zero cache hits because a timestamp sat at the TOP of the prompt, so the prefix never matched — moved it, −9%. (3) One flaky tool triggering 4x retry storms, each retry re-sending full context — capped at 2 with backoff, −8%. (4) Overnight enrichment running on the sync API — moved to batch at half price, −7%. (5) Agent loop with no step budget; one task ran 31 steps — capped, −7%. Total: 43%.
CTA: "Your bill has its own five. Free pre-check in bio — I'll tell you if the ≥30% guarantee fits your bill before you pay a penny."

## 3. The mistake — "You installed a dashboard and called it cost control"
HOOK: "Your Langfuse dashboard is gorgeous. Your bill went up anyway. Here's the gap nobody talks about."
TENSION: Field audits keep finding 40-60% of production token budgets wasted — in stacks that ALREADY have observability installed. Dashboards answer 'where did the money go?' They don't answer 'which of these calls downgrades safely, which prompts actually cache, which loop needs a budget — and what's each worth in £?'
PROOF: Split screen. Left: a trace view, pretty graphs. Right: the decision list the dashboard doesn't give you — downgrade / cache / cap — each with a £ figure and an effort rank. "This column is the teardown."
CTA: "Dashboards watch the money leave. The teardown stops it. Free pre-check, link in bio."

## 4. The receipts — "The 5 lines of config that halve most AI bills"
HOOK: "These 5 lines of config halve most production AI bills. Screenshot this."
TENSION: Not architecture. Config. (1) cache_control on your static prefix — up to 90% off cache reads on Anthropic; OpenAI auto-caches 1,024+ token stable prefixes at 50% off IF the static part comes first. (2) Batch endpoint for anything with no user waiting — half price. (3) max_tokens cap + stop sequences — stop paying for tokens nobody reads. (4) Retry cap: 2 attempts, exponential backoff. (5) Agent loop budget: max steps + max £ per task.
PROOF/DEMO: Live diff on a real config file, one line at a time, projected £ saving appearing next to each line. End on the monthly total.
CTA: "Want these quantified on YOUR bill and ranked by effort? £299, 5 days, full refund under 30% found. Free pre-check first — bio."

## 5. Build-in-public — "I sell a £299 product that refunds itself. Week-1 numbers."
HOOK: "I launched a £299 teardown that fully refunds if I don't find 30% savings. Here's week one, warts included."
TENSION: Everyone said the guarantee would bankrupt me. The trick is the free pre-check: N summaries screened this week, X bills taken, Y turned away because their stack was already tight — told them so, free, in writing. You can't lose a guarantee you only make on bills you've already screened.
PROOF: Real dashboard: visitors, pre-checks submitted, conversion to paid, average % savings identified on delivered teardowns, refunds issued (target line: £0).
CTA: "Worst case of the pre-check: a stranger tells you your AI stack is tight, for free. Link in bio. Numbers again next week either way."

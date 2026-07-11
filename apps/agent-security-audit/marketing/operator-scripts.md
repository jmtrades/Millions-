# AgentAudit — 5 @theoperator scripts

Format: HOOK (0-2s) → TENSION (2-15s) → PROOF/DEMO (15-40s) → CTA.
Guardrails: real stacks only with the owner's written permission, names/keys blurred; every stat on screen carries its source; never say "certified", "guaranteed" or "PASS" — the product is a findings report and the scripts say so out loud.

## 1. The live teardown — "I audited a production AI agent live — 11 findings in 40 minutes"
HOOK: "I just audited a real production AI agent — owner's permission, names blurred — and logged 11 security findings in 40 minutes. Three of them in the first five."
TENSION: "This is a working agency build: n8n, email triage into a CRM. It runs great. It also has an LLM node reading raw inbound email while holding a CRM write credential and an open outbound webhook. That's OWASP ASI01 + ASI02 — goal hijack plus tool misuse — live, in production, right now."
PROOF/DEMO: Screen-record the workflow graph, findings counter ticking 1→11 as each is flagged. Fix one live: scope the credential down, show the diff. "That fix took 90 seconds. Finding it is the product."
CTA: "£499 gets a client stack the same 25-point OWASP-mapped review — white-label report under YOUR agency's brand. Link in bio."

## 2. The explainer — "The OWASP list your agency will get asked about"
HOOK: "OWASP published a Top 10 for AI agents. If you build automations for clients, this list is going to show up in a client email within the year."
TENSION: "Peer-reviewed by contributors from NIST, Microsoft's AI Red Team, AWS. ASI01: your agent's goal gets hijacked. ASI02: its own tools get turned on your client. ASI03: it holds way more permissions than it needs. Be honest — does that describe a build you've shipped?"
PROOF/DEMO: Screen the actual OWASP page at genai.owasp.org, scroll the ASI entries. "Free to read. Primary source, not a LinkedIn hot take."
CTA: "Plain-English walkthrough for agency owners — guide link in bio. The done-for-you audit is £499, same link."

## 3. The mistake — "'The scanner said we're fine' is not a security review"
HOOK: "Your n8n instance audit came back clean. Your stack can still be wide open. Here's the gap."
TENSION: "The free scanners are config lint — stale credentials, instance settings, filesystem flags. Genuinely useful. But no scanner can see that THIS node reads customer email while THAT credential can delete the client's CRM, because that's not in the config — it's in the workflow graph plus the business context. Context isn't scannable."
PROOF/DEMO: Split screen: clean scanner output on the left; the same stack's injection path drawn in 20 seconds on the right — untrusted input → LLM node → tool with write access → open webhook out.
CTA: "25-point human review, mapped to the OWASP Agentic Top 10, white-label report your agency resells. Link in bio."

## 4. The receipts — "+340%, and it's aimed at your builds"
HOOK: "Prompt injection attacks on production AI systems: up 340% in a year. That number is OWASP's, not a vendor deck's."
TENSION: "Same reporting cycle: 88% of orgs reported a confirmed or suspected AI-agent security incident in the past year. And per Sacra, 80%+ of n8n workflows now involve AI agents. Put those together: the attack surface is literally the thing automation agencies ship."
PROOF/DEMO: Show the Help Net Security article (11 Jun 2026) and the Sacra n8n page on screen, highlight the lines. "Sources on screen. Check them."
CTA: "If a client asked 'is it secure?' tomorrow, what would you send them? Fix that for £499 — 5 days, 5+ actionable findings or it's free. Link in bio."

## 5. Build-in-public — "Week 1 of selling a £499 security audit"
HOOK: "I launched a £499 white-label security audit for automation agencies. Here's week one, unfiltered."
TENSION: "X stacks audited, average Y findings per stack, worst stack: Z findings. And the objection everyone raises: 'is this a certification?' No. Nobody can honestly certify an agentic stack in 2026 — no accreditation body covers them. Agencies buy the findings report BECAUSE we say that out loud."
PROOF/DEMO: Real dashboard: checkouts, average-findings-per-stack counter, the guarantee ledger (5+ findings or free — refunds issued so far: N). Warts included.
CTA: "Audit link in bio. Numbers again next week, either way."

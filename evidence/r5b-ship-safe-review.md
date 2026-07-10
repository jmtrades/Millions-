# Ship-Safe Workflow Review (£149, 48h)
Category: R5 founder-orbit | Status: R5-generated 2026-07-10

## R1 Spec
- Offer: Pre-launch expert review of ONE client-bound workflow/agent build, returned in 48h: recorded teardown video + written pass/fix checklist covering error handling, retries & idempotency, credential hygiene, rate-limit/cost guards, and failure alerting — ending in a "Ship-Safe" sign-off badge/certificate the builder attaches to their client handover to justify their price. Async: export/read-only share + context form; no call.
- Buyer: Freelance automation builder / solo AI-ops practitioner (founder's core audience) about to hand a build to a paying client and worried it breaks in week two.
- Price: £149 per review, prepaid Stripe checkout; 3-pack £399.
- Channel_first10 (£0): pinned offer in founder's Skool + @theoperator short-form review-teardown clips + answer-then-offer in r/n8n "is my workflow production-ready?" threads.
- Timing_hypothesis: 80%+ of n8n workflows now involve AI agents (Sacra, 2025) and OWASP-reported production data (Help Net Security, 11 Jun 2026) shows agentic builds failing in production at scale — 2025-26's flood of new builders (1.7M monthly) must now prove reliability to paying clients, and there is no SLA'd review-and-sign-off unit service; the alternative is unaccountable forum feedback. ≤12mo, dated.
- Pass-pattern: (3) craft-priced unit service — founder's production experience is the moat, prepaid per unit + (5) sold into the owned audience at near-zero acquisition cost; the badge makes it a sellable artifact for the buyer (pattern-1 echo).
- Kill-pattern clearance: K2 — community forums review for free but with no SLA, no confidentiality, and no client-facing sign-off artifact; the badge/certificate is the purchasable unit. K4 — Maker School ($184/mo) sells ongoing education/community, not per-workflow expert sign-off; no course is a substitute at delivery time. K3 — no push-button linter audits bespoke workflow logic + business context. K1 — n8n ships no review service. Distinct from r5b-agent-security-audit (agency-facing security/OWASP artifact at £499) — this is builder-facing pre-launch QA.
- Citations:
  - https://sacra.com/c/n8n/ (80%+ agent workflows)
  - https://www.helpnetsecurity.com/2026/06/11/owasp-prompt-injection-ai-security-failures/ (production failure prevalence, 11 Jun 2026)
  - https://flowlyn.com/blog/n8n-user-count-statistics-growth (builder flood)

## R2 Timing Gate
Verdict: KILL-R2 (verified 2026-07-10). The shared macro claims are real but evidence the WRONG offer, and the candidate's own distinctive premise is factually false.
- Shared claims check out: OWASP Top 10 for Agentic Applications 2026 released Dec 2025 (https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/); Help Net Security 11 Jun 2026 article exists and the +340% YoY prompt-injection surge is corroborated (https://www.helpnetsecurity.com/2026/06/11/owasp-prompt-injection-ai-security-failures/ , https://www.securance.com/blog/prompt-injection-the-owasp-1-ai-threat-in-2026/). BUT these evidence SECURITY sign-off demand — this offer sells RELIABILITY QA (error handling, retries/idempotency, cost guards, alerting). Security timing borrowed from the sibling candidate does not date-stamp demand for a paid reliability badge.
- The candidate's own distinct timing evidence is stale growth data, not a ≤12mo demand catalyst: Sacra "80%+ agent workflows" and the 1.7M-builders flood are 2025 adoption statistics (https://sacra.com/c/n8n/ , https://flowlyn.com/blog/n8n-user-count-statistics-growth). No dated event shows clients of freelance builders starting to require pre-launch sign-off; no procurement/insurance analog exists at the freelancer tier (procurement questionnaire evidence found is enterprise AI-security only: https://www.docket.io/blog/the-2026-ai-procurement-checklist-vetting-your-ai-agent-for-security-privacy-and-trust).
- FATAL — the R1 K3 premise ("no push-button linter audits bespoke workflow logic") is FALSE: this replays the exact pass-1 absorption that killed p1-vibecode-security-audit. Audit8n is a free push-button n8n workflow analyzer covering security vulnerabilities, performance bottlenecks, and reliability issues (https://audit8n.com/en). The free OSS n8n-Audit-Workflow analyzes "security issues, performance risks, error handling, readability, and AI usage" — near-verbatim the £149 checklist (https://github.com/christinec-dev/n8n-Audit-Workflow). n8n itself ships a native security audit via CLI/API/node (https://docs.n8n.io/hosting/securing/security-audit/) plus free AI-analysis templates wrapping it (https://n8n.io/workflows/11975-ai-powered-security-analysis-for-n8n-with-google-gemini-and-n8n-audit-api/). Free scanners + platform-native features absorb the checklist layer; the residual purchasable unit is a "Ship-Safe" badge from an unaccredited individual, for which zero evidence of client weight was found. Free peer review in r/n8n and Maker School's $184/mo community feedback (https://makerschoolnicksaraev.com/) bracket the remainder from below.

## R3 Saturation Gate
Skipped — killed at R2 (for the record, searches showed the free layer is the saturation: Audit8n, OSS auditor, n8n native audit, r/n8n feedback, Maker School community — no paid per-workflow sign-off incumbent found, because the layer clears at £0).

## R4 Red Team
Skipped — killed at R2 (noting the standing red-team point: a self-issued "Ship-Safe" badge from an unaccredited solo reviewer has no evidenced client weight, and PASS-stamping reliability creates the same negligence exposure per https://www.accaglobal.com/us/en/student/exam-support-resources/professional-exams-study-resources/p7/technical-articles/auditor-liability.html).

## Proposed Scores
- pain: 5 (pre-handover anxiety is real — r/n8n "production-ready?" threads exist — but free relief is abundant and adequate for the checklist layer)
- reach0: 8 (freelance builders = exact ICP of @theoperator + Skool; unverified size; list unused)
- ttfd: 8 (£149 prepaid, 48h delivery — could transact within days)
- margin: 7 (~3-4h solo work per review; fine percentage margin, low absolute £/unit)
- timing: 3 (no dated catalyst for paid reliability sign-off; free push-button tooling arrived BEFORE this offer — window claim unsupported)
- fit: 9 (production-reliability review is precisely the founder's demonstrated craft — best skill fit of the pair, wasted on a dead premise)
- overall: 4 — killed at R2: borrowed security timing, false "can't-be-scanned" premise, unevidenced badge demand.

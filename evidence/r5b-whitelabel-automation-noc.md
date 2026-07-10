# White-Label Workflow NOC for Automation Agencies (£249/mo)
Category: R5 founder-orbit | Status: R5-generated 2026-07-10

## R1 Spec
- Offer: "Dead-workflow cover" the agency resells as its own SLA: founder wires standardized error-trigger alerting across the agency's client workflows (into their existing n8n/Make instances — zero migration), then provides 4-working-hour human FIX response on any breakage, month-to-month. Agency-branded incident notes. Async onboarding: access checklist + workflow inventory sheet; no call.
- Buyer: Automation agency owner with 5-30 client installs and no maintenance bench (founder's core audience) — they sell the SLA to clients at markup.
- Price: £249/month per agency (covers up to 25 client workflows; +£99/mo per additional 25), prepaid monthly via Stripe, cancel anytime.
- Channel_first10 (£0): direct DM to agency owners inside founder's Skool + @theoperator case-study short ("your client's workflow died at 2am — who fixes it?").
- Timing_hypothesis: Client automations became mission-critical in 2025-26 — 80%+ of n8n workflows now involve AI agents (Sacra, 2025) and n8n hit $5.2B/SAP investment (12 May 2026); the tooling wave (n8n shipped a native "Time Saved" node Dec 2025; Administrate launched agency monitoring/LLM-cost SaaS) proves the observability demand — but everything live is dashboards-only; nobody sells the white-label human fix layer. ≤12mo, dated.
- Pass-pattern: (2) DFY install into existing stacks (zero migration) + (6) fix at breakage, packaged as zone-f white-label fulfilment agencies resell; recurring.
- Kill-pattern clearance: K3/K1 — Administrate.dev and n8n's Time Saved node are monitoring/metrics features, not fix cover; no push-button SaaS repairs bespoke logic. K6 — direct service, no liquidity needed; first £ = one agency subscribing. K4 — not practitioner education (Maker School sells systems training, not an outsourced NOC). K2 — free n8n error triggers alert but don't staff the response.
- Citations:
  - https://administrate.dev/ (agency monitoring SaaS = dashboards, no fix service)
  - https://administrate.dev/blog/proving-roi-to-automation-clients-the-time-saved-report (n8n Time Saved node, Dec 2025)
  - https://tech.eu/2026/05/12/n8n-s-valuation-doubles-to-5-2bn-following-sap-strategic-investment/ (12 May 2026)
  - https://sacra.com/c/n8n/ (80%+ of workflows involve AI agents)

## R2 Timing Gate
Verdict: PASS with corrections (macro timing claims verified; one cited mechanism mischaracterized, not load-bearing). Checked 2026-07-10.
- n8n $5.2B / SAP, 12 May 2026: VERIFIED (https://www.bloomberg.com/news/articles/2026-05-12/sap-invests-in-ai-automation-startup-n8n-at-5-2-billion-value; https://tech.eu/2026/05/12/n8n-s-valuation-doubles-to-5-2bn-following-sap-strategic-investment/; https://blog.n8n.io/n8n-sap/).
- 1.7M monthly active builders; 80%+ workflows involve AI agents: VERIFIED via Sacra (https://sacra.com/c/n8n/).
- Breakage wave / maintenance demand: EVIDENCED — "I lost 50 production workflows overnight" Mar 2026 (https://community.n8n.io/t/i-lost-50-production-workflows-overnight/282026); "workflows... stop working CONSTANTLY" (https://community.n8n.io/t/n8n-workflows-simply-wont-load-they-stop-working-constantly/257832); multi-page thread "How do you monitor n8n workflows in production and detect failures early?" (https://community.n8n.io/t/how-do-you-monitor-n8n-workflows-in-production-and-detect-failures-early/300723).
- CORRECTION: "n8n shipped a native 'Time Saved' node Dec 2025" is wrong in mechanism — Time Saved is an Insights dashboard metric / per-workflow setting, not a node, and Insights predates Dec 2025 (display-fix PR spring 2025: https://github.com/n8n-io/n8n/pull/14622; docs: https://docs.n8n.io/insights/, https://docs.n8n.io/administer/observe-and-log/track-usage-with-insights). Insights natively covers prod executions, FAILED executions, failure rate, time saved — i.e. n8n already ships the failure DASHBOARD in-product. Native error/alerting = Error Trigger + error workflows, alert-only (https://docs.n8n.io/flow-logic/error-handling/).
- Administrate (administrate.dev): VERIFIED — multi-instance n8n monitoring, error categorization, LLM cost tracking, client ROI/time-saved reports; explicitly READ-ONLY ("your production is safe"); FREE solo tier (3 instances), Pro (15), Agency (50 instances, unlimited users/companies) (https://administrate.dev/, https://administrate.dev/features, https://administrate.dev/help/billing-subscriptions/plans-overview, https://administrate.dev/multi-tenant-n8n). Dashboards only; no human fix. Macro thesis intact → proceed to R3.

## R3 Saturation Gate
Score: 7/10 → KILL-R3. The R1 load-bearing claim "everything live is dashboards-only; nobody sells the white-label human fix layer" is FALSIFIED: both halves of this offer are already sold, the monitoring half at free-to-cheap and the white-label fix half by established multi-platform players.

| Competitor | What they actually sell | Price/positioning | Overlap with this offer |
|---|---|---|---|
| Makeitfuture | WHITE-LABEL support & maintenance packages for agencies, "fully invisible... ongoing support available under your name" across Make, n8n, Zapier, Power Automate | Productized agency white-label (https://www.makeitfuture.com/white-label) | Direct hit: same buyer, same white-label human fix+maintenance promise, broader platform coverage |
| LogicWorkflow | White-label n8n services for agencies; "expert diagnosis and fix plans, unlimited submissions, 1-day response time"; pitches agencies "40-50% margins with zero technical overhead" | Subscription (https://logicworkflow.com/) | Direct hit on white-label fix response for agencies; 1-day response ≈ the 4-working-hour tier's job |
| Administrate | Multi-tenant n8n monitoring, error categorization, client-branded ROI reports for agencies | FREE solo tier; Pro/Agency plans (https://administrate.dev/, https://administrate.dev/help/billing-subscriptions/plans-overview) | Commoditizes the entire "standardized error alerting wired across client workflows" half at £0 |
| FlowGuard | External freemium monitoring/alerting "for developers, agencies, and solopreneurs", catches silent failures & missed schedules, no workflow modification | Freemium (https://flow-guard.io/en, https://peerpush.com/p/flowguard) | Alerting half, zero-migration angle already taken |
| Flowmetr | Failure/duration/inactivity alerts with prebuilt templates for n8n, Make, Zapier | SaaS (https://flowmetr.com/) | Alerting half, multi-platform |
| n8n native | Insights (failed executions, failure rate, time saved) + Error Trigger/error workflows in-product; Watchflow dead-man's-switch template free on n8n.io | Bundled/free (https://docs.n8n.io/insights/, https://docs.n8n.io/flow-logic/error-handling/, https://n8n.io/workflows/14988-monitor-n8n-workflows-with-watchflow-dead-mans-switch-and-error-alerts/) | Vendor ships the dashboard+alerting natively; SAP money accelerates enterprise observability |
| n8n official partner directory | Certified partners working one-time AND on retainer | Quote (https://experts.n8n.io/, https://n8n.io/expert-partners/) | Agencies' clients can be served directly; partners also sell maintenance retainers |
| Goodspeed / W4 | n8n retainer maintenance ("most clients stay on a retainer because n8n automations need maintenance as APIs change"), n8n support agency | Retainer (https://goodspeed.studio/n8n-agency, https://www.w-4.ch/en/services/n8n-support) | The maintenance retainer norm already exists at agency level |

Verdict logic: exact-shape competition (white-label + human fix + agency buyer + zero-migration monitoring) from ≥2 named incumbents plus a free/freemium monitoring layer from ≥4 tools including the platform vendor itself = bracketed on both components. Precedent: pass-1 killed at sat 7 where named players sold the exact promise cheaper/free (i1-agent-ai-visibility-kit, p1-realtor-ai-findability-audit). £249/mo flat with a 4-working-hour SLA is a pricing wrinkle, not an open quadrant. KILL-R3.

## R4 Red Team
Skipped — candidate killed at R3. (Noted for the record: a solo 4-working-hour SLA across up to 25 workflows × N agencies with no bench was the queued kill anyway — correlated platform-event failure spikes, e.g. the V2 wave and the Mar 2026 instance-loss class, hit every covered workflow at once.)

## Proposed Scores
Killed at R3 (sat 7 > 6). Per pass-1 convention, no full score row for killed candidates. Indicative had it passed: pain 7, reach0 7 (Skool = exact buyer), ttfd 7, margin 5 (SLA labor + on-call is the COGS), timing 7, fit 7 — the offer dies on saturation, not on demand.

# Realtor AI ISA (speed-to-lead calling for US agent teams)
Category: AI-service arbitrage | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: Every new lead (Zillow, Facebook, open-house, sign call) is called AND texted within 60 seconds, 24/7, qualified on timeline/financing/area, long-term nurtured, and booked as appointments directly onto agents' calendars — replacing a human ISA at ~$1,200–2,500/mo (ISA cost level: hypothesis) or leads simply rotting. ~90% AI-automated (voice + SMS agents, CRM sync), human review of call QA samples.
- Buyer: US residential real-estate team lead, 2–10 agents, 50–300 inbound leads/mo, currently paying a human ISA or losing leads to slow follow-up.
- Price: $299/mo per team (up to 300 leads/mo; $0.75/extra lead). Stripe subscription; async onboarding (lead-source webhooks + calendar links).
- Channel to first 10: 30K real-estate agent email list — ASSUMES US-majority composition (verify by brokerage domains before relying on it; if UK-weighted, this candidate loses its channel and falls back to US realtor Facebook groups, e.g. Lab Coat Agents, £0 manual outreach). Demo-first angle: "We called your newest Zillow lead 43 seconds after it landed — recording attached."
- Timing hypothesis: All-in voice-AI cost fell to ~$0.07–0.13/min with sub-second latency by 2026 (Retell/Vapi-class stacks; full deployments $0.10–0.31/min) — serving a 300-lead month costs ~$30–50 COGS against a $299 price, where mid-2024 voice stacks at ~$0.30–0.50/min with 2–3s latency were both uneconomic and unconvincing on live phone calls. Secondary (hypothesis): post-NAR-settlement commission compression since Aug 2024 makes teams unwilling to carry $2k+/mo ISA payroll, increasing appetite for a $299 substitute.
- Citations:
  - https://www.retellai.com/pricing
  - https://klariqo.com/blog/voice-ai-cost-per-minute/
  - https://ainora.lt/blog/ai-voice-agent-cost-per-minute-2026

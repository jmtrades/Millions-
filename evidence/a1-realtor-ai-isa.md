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

## R2 Timing Gate
**Verdict: KILL-R2** (gate rule: "voice got cheap" is only an edge if the delta is citable AND the category wasn't already served at old prices; secondary driver must be real and dated). Verified 2026-07-10.

1. **Cost/latency collapse — PARTIALLY VERIFIED, candidate quotes the floor, not the realistic all-in.** Retell voice infra is $0.055-0.07/min but "doesn't include the LLM, telephony, or anything else you actually need to run a call, with most setups landing between $0.13 and $0.31/min" (https://www.cekura.ai/blogs/retell-ai-pricing-per-minute; https://www.retellai.com/pricing). Vapi charges $0.05/min orchestration with STT/LLM/TTS/telephony all extra (https://vapi.ai/pricing; https://www.retellai.com/blog/vapi-ai-review). Sub-second latency is real: Vapi sub-500ms (with expert tuning), Retell ~700ms default endpointing (https://www.retellai.com/blog/vapi-ai-review; https://softcery.com/ai-voice-agents-calculator). So the candidate's ~$0.07-0.13/min is the optimistic bottom of a $0.07-0.31 range; the claimed $30-50 COGS/300-lead month assumes floor pricing and minimal talk-time — realistic all-in is 2-4x that before A2P/DNC/compliance overhead.
2. **Category already served at old prices — CONFIRMED, kills the edge.** Structurely was founded 2017 and has sold an AI ISA ("Aisa Holmes" = Artificial Intelligence Inside Sales Agent) responding to leads within a minute via SMS/email/chat and later voice, with 13M+ conversations / 75M+ messages processed; acquired by CapStone Holdings Jan 6, 2026 (https://www.housingwire.com/company-profile/structurely/; https://www.structurely.com/; https://superdupr.com/blog/structurely-vs-ylopo-vs-roof-ai). Ylopo shipped Raiya GPT texting in mid-2023 (https://www.einpresswire.com/article/640555590/ylopo-s-new-ai-tool-raiya-gpt-enables-real-estate-agents-to-10x-their-lead-follow-up) and unveiled rAIya **Voice** in **November 2023** — i.e., AI voice calling of RE leads was commercially live *before* the claimed mid-2024 $0.30-0.50/min baseline, proving the category was viable and served at old prices (https://www.inman.com/2024/01/30/ylopos-raiya-uses-emerging-voice-mimicry-to-warm-up-your-leads/; https://www.ylopo.com/webinars/unveiling-raiya-voice; 25M+ conversations, 48% response rate per https://www.ylopo.com/ylopo-ai). The cost decline is a margin tailwind that incumbents ride identically — it is not a new-category opening.
3. **Post-NAR commission compression — REFUTED as of 2026.** Buyer-agent commissions went *up*, not down: Q3 2025 average buyer-side 2.42% vs 2.36% a year earlier (https://www.ownluxuryhomes.com/markets/national/nar-settlement/buyer-agent-commission-rates-2025); Feb 2026 Clever survey of 533 agents: ~5.70% total (2.88% list / 2.82% buy), consistent with pre-settlement levels (https://listwithclever.com/real-estate-blog/6-percent-real-estate-commission-explained/; https://www.offerpad.com/articles/real-estate-commission-rates-2026/ — "Real Estate Commissions Went Up, Not Down, After the NAR Settlement"; https://www.housingwire.com/articles/real-estate-agent-commission-rates-nar-settlement-clever/). The "compression squeezing ISA payroll" demand driver does not exist in the data.

Net: one prong of the timing hypothesis is optimistic-but-citable, one is factually wrong (compression), and the decisive condition fails (category served since 2017 text / Nov 2023 voice). Timing hypothesis judged WRONG → KILL-R2.

## R3 Saturation Gate
Skipped — killed at R2. (Incidental evidence from R2 searches already shows a crowded field: Structurely vs Ylopo vs Roof.ai comparison content exists as a genre, e.g. https://superdupr.com/blog/structurely-vs-ylopo-vs-roof-ai and https://realestatetoolkit.ai/categories/ai-assistants/ — saturation would likely have scored >6.)

## R4 Red Team
Skipped — killed at R2. (Unexamined but flagged: TCPA artificial-voice consent rules for a UK solo founder, A2P-10DLC registration, Zillow lead-ToS, and the demo tactic of calling a consumer's fresh lead without that consumer's prior express written consent — itself a probable TCPA violation.)

## Proposed Scores
| Dimension | Score | Rationale (harsh) |
|---|---|---|
| pain | 6 | Speed-to-lead failure and $1,200-2,500/mo ISA payroll are real, documented pains — but heavily served pains (Structurely 13M+ conversations since 2017; Ylopo 25M+), not unmet ones. |
| reach0 | 5 | 30K list assumed-US with UNVERIFIED provenance/geography (UK founder → plausible UK skew); capped ≤6-7 per protocol even if clean. Entire channel rests on an unverified assumption; 692K mixed list is a deliverability/compliance liability, not reach. |
| ttfd | 5 | Elite builder + Retell/Vapi + webhooks = fast build, but first dollar gated by A2P-10DLC registration, number warm-up, consent-chain plumbing, and the flagged demo tactic being legally unusable as designed. |
| margin | 4 | $299/mo vs realistic $0.13-0.31/min all-in (not $0.07-0.13): a 300-lead month with retries/nurture minutes plausibly runs $100-350 COGS before compliance overhead (DNC scrubbing, 10DLC fees, recording storage) — thin to negative at heavy usage; candidate's $30-50 assumes floor pricing. |
| timing | 2 | Both prongs fail: category served at old prices (Structurely 2017; rAIya Voice Nov 2023) and NAR compression refuted by 2025-26 commission data. Cost decline is real but accrues equally to incumbents. |
| fit | 3 | UK solo founder selling a US-telephony-compliance product (TCPA/A2P/DNC) into US timezones with no US entity; build skills fit, regulatory and market surface do not. |

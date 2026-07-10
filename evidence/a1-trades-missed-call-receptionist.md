# Trades Missed-Call Receptionist
Category: AI-service arbitrage | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: Every inbound call answered within 2 rings, 24/7: emergencies triaged and forwarded, jobs booked straight into the diary (Google Calendar/ServiceM8), quote requests captured with photo-upload SMS link, and a morning summary — so a trades firm stops losing £1–2k jobs to voicemail and drops its per-minute human answering service. ~95% AI-automated (voice agent + booking integration), human escalation path only.
- Buyer: Owner of UK plumbing/heating/electrical/roofing firm, 2–10 engineers, £250k–£2m revenue, owner currently answering the phone from the van or paying a human answering service.
- Price: £179/mo flat, fair-use 400 minutes (then £0.15/min). Stripe subscription; async onboarding form (services, prices, diary link, call-flow choices) — live in 48h.
- Channel to first 10: No dependence on either email list. @theoperator short-form audience: build-in-public series "I gave a plumber an AI receptionist — it booked £4,300 of jobs in week 1" with the real call recordings; plus existing Skool community (agency operators who serve local trades) offered a white-label/referral deal. Both £0.
- Timing hypothesis: All-in voice-agent cost collapsed to ~$0.07–0.13/min with sub-second, barge-in-capable latency across Retell/Vapi-class stacks by 2026 (base platform $0.05–0.07/min; full stack $0.10–0.31/min depending on components) — a 400-minute month costs ~£25–40 to serve against £179 price, vs mid-2024 when ~$0.30–0.50/min all-in and 2–3s latency made a flat-fee consumer-grade phone answering product uneconomic and unusable. Human comparators (Moneypenny-style answering, ~£1+/min effective) unchanged.
- Citations:
  - https://www.retellai.com/pricing
  - https://klariqo.com/blog/voice-ai-cost-per-minute/
  - https://www.retellai.com/blog/ai-voice-agent-pricing-full-cost-breakdown-platform-comparison-roi-analysis
  - https://lotusbrainsstudio.com/ai-voice-agent-pricing/

## R2 Timing Gate
**Verdict: PASS — narrow (gated 2026-07-10).**
- Price collapse citable with numbers: typical all-in voice-agent cost verified at $0.11–0.15/min for a standard Retell-class stack, $0.13–0.31 range (advertised $0.05–0.07/min is platform fee only) — https://www.cekura.ai/blogs/retell-ai-pricing-per-minute ; https://www.retellai.com/blog/ai-voice-agent-pricing-full-cost-breakdown-platform-comparison-roi-analysis ; https://ainora.lt/blog/ai-voice-agent-cost-per-minute-2026. A 400-min month ≈ £33–44 to serve vs £179 price; flat-fee 24/7 booking receptionist at this price was not available from human services.
- BUT the same collapse is visible to every operator: it has already spawned the exact product at lower prices (see R3) — the edge is real yet fully non-proprietary. PSTN 31 Jan 2027 is a door-opener only ("no big bang": https://www.ispreview.co.uk/index.php/2026/06/openreach-says-no-big-bang-in-jan-2027-when-uk-analogue-phones-switch-off.html).
- Missed-call pain stats in this category are vendor-sourced (Blunetic n=142 press release via openPR: https://www.openpr.com/news/4570478/why-47-of-customer-calls-to-uk-businesses-go-unanswered-and-what) — downgraded to directional.

## R3 Saturation Gate
**Verdict: KILL-R3 — saturation 8/10.** This IS the known-crowded horizontal UK AI-receptionist category wearing a trades skin; photo-upload SMS capture is a config option on any platform, not a product.

| Player | Type | Evidence |
|---|---|---|
| Voco | UK vertical AI — trades/plumbers | https://vocohq.co.uk/industries/trades/plumbers |
| AI Bridge Club | UK vertical AI — plumbers, 24/7 emergency answering, from ~£45/mo | https://aibridgeclub.com/sectors/plumbers |
| Down To Earth AI | UK vertical AI — plumbers | https://www.downtoearthai.co.uk/ai-phone-answering-service-for-plumbers |
| ai-receptionist.com | UK-plumbers page — emergency keywords, Jobber/ServiceTitan/Google Calendar booking, from ~£49/mo | https://ai-receptionist.com/en-gb/industries/ai-receptionist-for-plumbers/ |
| Ringover AIRO | Telephony incumbent pushing plumbing answering | https://www.ringover.co.uk/blog/plumbing-answering-service |
| Dapta | AI answering for plumbers | https://dapta.ai/blog-posts/ai-answering-service-for-plumbers/ |
| ElevenLabs Agents | Off-the-shelf plumbing-answering template — near-zero build moat | https://elevenlabs.io/agents/plumbing-answering-service |
| Team-Connect | UK horizontal at £9.99/mo — price-anchor destruction | https://team-connect.co.uk/ai-receptionist-uk |
| Norango | UK horizontal | https://www.norango.ai/ai-receptionist-uk |
| Moneypenny AI Voice Agent, RingCentral AIR, IONOS, BookedSolid, Answer4u AI, MyAIFrontDesk, Rosie, Slang.ai + dozens | Horizontal known-crowded set | https://www.moneypenny.com/uk/ai-voice-agent/ ; https://www.myaifrontdesk.com/ |

Emergency triage + diary booking already ships at £45–49/mo; £179/mo flat has no defensible delta beyond the founder's content channel. n≈17+. No graveyard evidence documented yet (several of these will die, but that cuts both ways).

## R4 Red Team
Skipped (killed at R3).

## Proposed Scores
pain 7 · reach0 6 · ttfd 6 · margin 7 · timing 5 · fit 8
- pain: real but the headline stats are vendor marketing (Blunetic, n=142).
- reach0: @theoperator + Skool white-label are genuinely owned £0 channels — but the audience is agency operators, not trades owners; first buyers likely arrive indirectly.
- ttfd: warm community/white-label route could land a first deal inside 30d; direct-to-trades slower.
- margin: £33–44 serve cost vs £179 (~70–75%).
- timing: collapse real but fully arbitraged already. fit: best content/stack fit of all six.

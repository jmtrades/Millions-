# Lettings Voice Desk
Category: Vertical SaaS | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: Every after-hours call to your lettings line answered, triaged and logged: a voice agent trained on your managed-property book that books viewing requests straight into slots, triages repair calls by urgency (emergency vs routine) and writes every repair report into a time-stamped log formatted for Renters' Rights Act / Awaab's-Law-style evidence — transcript in your inbox by 8am. Outcome: zero missed viewings, and a defensible record the day a tenant complaint reaches the Ombudsman.
- Buyer: Director of an independent UK letting agency, 100+ managed properties, 1–3 branches, currently paying an out-of-hours call centre or missing calls entirely.
- Price: £199/mo per branch; founding paid pilot £99/mo for first 10 branches (14-day setup, cancel anytime).
- Channel to first 10: 30K real-estate agent email list (assumed-UK — verify geography on a test segment first) with a 90-second demo recording of the agent handling a 2am leak call; @theoperator short-form demo content; Skool community for pilot recruitment.
- Timing hypothesis: Two stacked shifts: (1) Renters' Rights Act in force 1 May 2026 makes auditable repair/complaint handling existential for agents (Ombudsman + PRS database from late 2026; government roadmap extends Awaab's-Law-style hazard deadlines to the private rented sector — date TBC); (2) capability: hypothesis — realtime speech-to-speech APIs (OpenAI gpt-realtime GA Aug 2025, Gemini Live) cut 24/7 voice-agent cost to pennies/minute, making branch-level £199/mo pricing viable for the first time.
- Citations:
  - https://www.gov.uk/government/publications/renters-rights-act-2025-implementation-roadmap/implementing-the-renters-rights-act-2025-our-roadmap-for-reforming-the-private-rented-sector
  - https://blog.goodlord.co/renters-rights-bill-a-letting-agents-guide
  - https://www.gov.uk/government/publications/awaabs-law-guidance-for-social-landlords/awaabs-law-guidance-for-social-landlords-timeframes-for-repairs-in-the-social-rented-sector
- Notes: Second letting-agent candidate (pairs with v1-renters-rights-agent-pack; max 2 per buyer respected). Voice-agent space is crowding horizontally — the wedge is lettings-specific triage + compliance-grade logging, not "AI receptionist". v1 exceeds 8h for production; sell founding pilots off a Twilio+realtime-API demo (buildable in a day) with waitlist checkout.

## R2 Timing Gate
**Verdict: PASS — with one claim corrected (gated 2026-07-10).**
- Concrete ≤12mo shift verified: Renters' Rights Act 2025 Phase 1 in force since 1 May 2026 — s21 abolished, ASTs replaced by assured periodic tenancies, rent-increase and advance-rent rules live; new council investigatory powers since 27 Dec 2025; PRS Database regional rollout begins late 2026 (https://www.gov.uk/government/publications/renters-rights-act-2025-implementation-roadmap/implementing-the-renters-rights-act-2025-our-roadmap-for-reforming-the-private-rented-sector ; https://www.hoganlovells.com/en/publications/renters-rights-act-implementation-roadmap-now-published ; https://www.wardhadaway.com/insights/updates/renters-rights-act-implementation-dates/). Agents' documentation/enforcement burden stepped up NOW, with more ahead inside 12mo.
- CORRECTION (hostile): the "Awaab's-Law evidence log" framing is overstated — Awaab's Law / Decent Homes extension to the PRS sits in Phase 3, date unconfirmed and proposed as late as 2035/2037; PRS Ombudsman membership anticipated ~2028 (https://theindependentlandlord.com/renters-rights-timetable/ ; https://ww3.rics.org/uk/en/journals/property-journal/renters-rights-act-implementation-roadmap.html). The honest sellable edge is RRA-live record-keeping + database/enforcement exposure, not Awaab's.

## R3 Saturation Gate
**Verdict: KILL-R3 — saturation 7/10.** The buyer's problem is already served by a functioning vertical incumbent (this spec itself says the buyer is "currently paying an out-of-hours call centre"), and UK voice-AI for agents has already launched through trade press.

| Player | Type | Evidence |
|---|---|---|
| PropCall | Vertical incumbent (human, UK): 24/7 out-of-hours lettings/block call handling — triage, emergency contractor callouts, remote video assist; serves <10-property indies up to nationals | https://www.propcall.com/estate-lettings |
| VoiceProp AI (ModelProp, founded 2023) | Vertical AI (UK): launched voice-AI virtual receptionist for estate & letting agents, 24/7, "fraction of the cost of traditional answering services" | https://thenegotiator.co.uk/news/products-services-news/launch-voice-ai-automated-call-handling-for-agents/ |
| Nesti | Vertical AI (UK): AI-enabled enquiry handling for estate & letting agents | https://www.nesti.io/ |
| WiseCall | Vertical AI (UK): AI receptionist for property businesses | https://www.wisecall.io/property |
| Softomate | Vertical AI services (UK): estate-agent voice agents — viewings, enquiries, follow-ups | https://www.softomatesolutions.com/blog/ai-voice-agent-uk-estate-agents/ |
| Moneypenny | Horizontal + long-standing property answering specialism, now with AI Voice Agent | https://www.moneypenny.com/uk/ai-voice-agent/ |
| EliseAI-class US majors | Deep-pocketed leasing voice AI, UK-entry risk | https://lotusbrainsstudio.com/ai-voice-agent-for-real-estate/ |
| RingCentral AIR, IONOS, BookedSolid, Answer4u, MyAIFrontDesk, Rosie, Slang.ai | Horizontal known-crowded set | https://www.myaifrontdesk.com/ |

Wedge check: property-book-trained viewing booking + urgency triage + time-stamped repair logs — PropCall already does triage + morning reporting with humans; RRA-formatted log output is a document template any of the above copies in a sprint. n≈12+. No graveyard evidence found.

## R4 Red Team
Skipped (killed at R3).

## Proposed Scores
pain 7 · reach0 3 · ttfd 4 · margin 7 · timing 8 · fit 7
- pain: real and rising post-RRA, but a served pain (PropCall et al.), not an unserved one.
- reach0: capped at 3 — the primary channel is the 30K list with UNVERIFIED geography (per gate rule: ≤3 if dependent).
- ttfd: compliance-cautious directors letting an AI talk to tenants = 30–60d even at £99 founding.
- margin: £199 (£99 founding) vs after-hours minute costs ~£15–30.
- timing: best of all six (RRA Phase 1 live 1 May 2026, database late 2026). fit: strong software wedge + demo content; list asset unverified.

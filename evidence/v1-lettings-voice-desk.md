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

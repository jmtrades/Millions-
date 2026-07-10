# NightDrain — out-of-hours emergency booking desk for drainage contractors

Category: Boring-industry automation | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: "Your 3am blocked-drain calls answered, priced, and booked — you sleep." Out-of-hours emergency line that triages (blocked drain vs burst vs CCTV survey), checks postcode coverage, quotes the firm's own call-out + out-of-hours rates, takes card pre-authorisation to kill tyre-kickers, and wakes the on-call engineer only for confirmed paid jobs. Day 2 add-on: CCTV-survey follow-up quotes chased. Buyer vocabulary: night callouts booked and paid, not slept through.
- Buyer: Owner of a UK drainage contractor (blocked drains, CCTV surveys, drain repairs), 2–10 vans, advertises 24/7 emergency service on Checkatrade/Google but actually diverts the night phone to a groggy engineer or voicemail.
- Price: £299/month including 300 call-minutes + £249 setup (rate card + coverage map config).
- Channel to first 10: @theoperator short-form build-in-public series ("I answer a drain firm's 3am phone with AI — here's the money it caught this week") driving inbound to a Skool funnel; parallel direct outreach to firms scraped from Checkatrade's drainage category and the National Association of Drainage Contractors (NADC) member list.
- Timing hypothesis: PSTN switch-off 31 Jan 2027 (~6 months out) kills the analogue lines and old night-divert setups these firms run — they must re-platform phones now, which is the moment to sell the upgrade; voice AI all-in cost ~$0.05–0.15/min (2026) makes a dedicated night line profitable at £299/mo. 47% of UK SME calls already go unanswered and 85% of missed callers call the next firm — fatal in emergency work where the first answer wins the job.
- Citations:
  - https://business.bt.com/insights/uk-pstn-switch-off/
  - https://focusgroup.co.uk/products-and-services/pstn-switch-off/
  - https://softcery.com/ai-voice-agents-calculator
  - https://www.retellai.com/blog/ai-voice-agent-pricing-full-cost-breakdown-platform-comparison-roi-analysis
  - https://www.paperclip.co.uk/missed-business-phone-calls-uk/
  - https://www.openpr.com/news/4570478/why-47-of-customer-calls-to-uk-businesses-go-unanswered-and-what

## Notes
- Wedge vs crowded AI-receptionist field (RingCentral/Moneypenny/IONOS/BookedSolid/ARROW verified crowded 2026): out-of-hours-only + emergency triage + surge-rate quoting + card pre-auth + on-call escalation. Sold as "night desk", not receptionist; the card pre-auth (stops £0 wasted callouts) is the killer feature incumbents don't do.
- Emergency drainage callouts are £150–£400+; one caught call covers the month.
- Fulfillment: voice agent + rate card + Stripe pre-auth + escalation SMS; ≥80% automated after config.

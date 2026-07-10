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

## R2 Timing Gate
**Verdict: PASS — narrow (gated 2026-07-10).**
- Hard deadline ahead, with financial teeth: PSTN switch-off 31 Jan 2027 confirmed firm after one slip, and Openreach has staged legacy copper price rises through 2026 (+20% 1 Apr, +40% 1 Jul, +40% 1 Oct) that hit exactly the analogue-line night-divert setups these firms run — re-platforming is forced within months. https://www.ispreview.co.uk/index.php/2026/06/openreach-says-no-big-bang-in-jan-2027-when-uk-analogue-phones-switch-off.html ; https://www.openreach.com/news/time-for-a-big-switch-up-as-pstn-switch-off-looms/ — Caveat: Openreach says "no big bang" on 1 Feb 2027 (stragglers → Emergency Voice Access), so urgency is real but not absolute.
- Voice economics citable with numbers: typical all-in $0.11–0.15/min ($0.13–0.31 range; the claimed "$0.05/min" is platform fee only) → 300 included minutes ≈ £26–34 to serve vs £299/mo price (https://www.cekura.ai/blogs/retell-ai-pricing-per-minute ; https://www.retellai.com/blog/ai-voice-agent-pricing-full-cost-breakdown-platform-comparison-roi-analysis). Capability edge (mid-call card pre-auth + surge rate-card quoting + wake-engineer-only-for-paid-jobs) was not offered by human out-of-hours message-taking bureaus at old prices — phone-first emergency demand can't be displaced to web forms.
- Downgrade: the 47%/85% missed-call stats are vendor marketing (Blunetic press release, n=142, via openPR: https://www.openpr.com/news/4570478/why-47-of-customer-calls-to-uk-businesses-go-unanswered-and-what). Directional only.

## R3 Saturation Gate
**Verdict: KILL-R3 — saturation 7/10.** The trades-emergency-answering niche is already colonised by UK vertical AI players at roughly 1/6th this price; the card pre-auth wedge is a feature (Stripe link + webhook on any platform), not a moat.

| Player | Type | Evidence |
|---|---|---|
| Voco | Vertical AI, UK trades/plumbers | https://vocohq.co.uk/industries/trades/plumbers |
| Down To Earth AI | Vertical AI, UK plumbers | https://www.downtoearthai.co.uk/ai-phone-answering-service-for-plumbers |
| AI Bridge Club | Vertical AI, UK plumbers — "24/7 emergency call answering", from ~£45/mo | https://aibridgeclub.com/sectors/plumbers |
| ai-receptionist.com | Vertical UK-plumbers page — emergency keyword triage ("sewage backup"), booking integrations | https://ai-receptionist.com/en-gb/industries/ai-receptionist-for-plumbers/ |
| Ringover AIRO | Telephony player pushing plumbing answering | https://www.ringover.co.uk/blog/plumbing-answering-service |
| Dapta | AI answering for plumbers | https://dapta.ai/blog-posts/ai-answering-service-for-plumbers/ |
| ElevenLabs Agents | Off-the-shelf "plumbing answering service" template | https://elevenlabs.io/agents/plumbing-answering-service |
| Moneypenny AI Voice Agent | Horizontal UK | https://www.moneypenny.com/uk/ai-voice-agent/ |
| Team-Connect | Horizontal UK, £9.99/mo anchor | https://team-connect.co.uk/ai-receptionist-uk |
| Norango | Horizontal UK | https://www.norango.ai/ai-receptionist-uk |
| RingCentral AIR, IONOS, BookedSolid, Answer4u AI, MyAIFrontDesk, Rosie, Slang.ai | Horizontal known-crowded set | https://www.myaifrontdesk.com/ |

No drainage-named player found offering OOH rate-card + card pre-auth specifically — but emergency triage + diary booking already ships at £45–49/mo, anchoring price far below £299/mo, and the pre-auth delta is trivially replicated. n≈15+. No graveyard evidence found.

## R4 Red Team
Skipped (killed at R3).

## Proposed Scores
pain 8 · reach0 4 · ttfd 4 · margin 8 · timing 6 · fit 8
- pain: 3am emergency call lost = £150–400 job to the next Google result; strongest pain of the six.
- reach0: Checkatrade scrape + NADC are real £0 targets but cold; @theoperator audience is AI-automation viewers, not drainage owners.
- ttfd: handing an emergency revenue line to an AI is the highest-trust ask; 30–60d realistic.
- margin: ~£26–34 serve cost + Stripe fees vs £299/mo (https://www.cekura.ai/blogs/retell-ai-pricing-per-minute).
- timing: PSTN deadline + copper price rises real but economy-wide. fit: voice+Stripe pre-auth+escalation is exactly the founder's stack; strong build-in-public content.

# SkipLine — 24/7 skip order desk for independent skip-hire firms

Category: Boring-industry automation | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: Every skip enquiry answered 24/7, quoted instantly from the firm's own postcode/size price book (incl. road-permit logic), payment taken by SMS Stripe link, drop booked into the diary. Pitch in buyer vocabulary: "Stop losing skip orders to the answerphone and stop paying aggregators commission for your own customers." Weekly report: orders taken out-of-hours, £ collected.
- Buyer: Owner of an independent UK skip-hire firm, 2–15 lorries, office phone staffed 8–5 Mon–Fri, currently listed on aggregators (findaskip.co.uk / bestskiphire.co.uk) and paying per-booking commission.
- Price: £299/month + £299 setup (price-book + permit-rules config). Includes call minutes fair-use cap.
- Channel to first 10: Scrape operator listings by region from findaskip.co.uk and bestskiphire.co.uk, then direct phone/email outreach ("I'll answer your weekend calls for 2 weeks free — you keep the orders"); post results in named Facebook groups "Skip Hire UK" / "Grab & Skip Hire Owners UK"; UROC (United Resource Operators Confederation, the independent waste operators' trade body) member outreach. Independent of founder lists.
- Timing hypothesis: PSTN/analogue switch-off hard deadline 31 Jan 2027 — ~6 months out — forces every skip yard off copper lines and onto VoIP; the forced phone-change moment is the automation adoption moment. Voice AI all-in cost has collapsed to ~$0.05–0.15/min in 2026, making a 24/7 order desk viable at £299/mo. 47% of calls to UK SMEs go unanswered; 85% of missed callers don't call back.
- Citations:
  - https://business.bt.com/insights/uk-pstn-switch-off/
  - https://focusgroup.co.uk/products-and-services/pstn-switch-off/
  - https://softcery.com/ai-voice-agents-calculator
  - https://www.retellai.com/blog/ai-voice-agent-pricing-full-cost-breakdown-platform-comparison-roi-analysis
  - https://www.paperclip.co.uk/missed-business-phone-calls-uk/
  - https://www.openpr.com/news/4570478/why-47-of-customer-calls-to-uk-businesses-go-unanswered-and-what
  - https://findaskip.co.uk/
  - https://bestskiphire.co.uk/about/

## Notes
- Wedge vs generic AI receptionist (crowded: RingCentral, Moneypenny, IONOS, BookedSolid, ARROW): this is an order desk, not a receptionist — postcode price book, permit rules (skip on public road needs council permit), waste-type restrictions, payment capture. Generic players can't quote a skip.
- Fulfillment: Twilio-class voice + price-book config in Supabase + Stripe payment links ≈ 80%+ automated after config.

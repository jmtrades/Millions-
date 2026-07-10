# AI Content Disclosure Kit
Category: Vertical SaaS | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: Every AI-generated or AI-manipulated asset your agency ships for EU-market clients carries compliant disclosure before the 2 Dec 2026 Article 50 deadline: machine-readable provenance marking (C2PA metadata embedding), correct visible deepfake/synthetic-content labels per asset type, chatbot-disclosure copy blocks, and a per-client compliance register you can hand to the client's counsel. Outcome: your agency contracts stop being the weak link when clients get AI Act questionnaires.
- Buyer: Owner of a digital marketing / creative / AI-automation agency, 2–25 staff, producing AI-generated ad creative, video or chatbots for clients marketing into the EU.
- Price: £79/mo per agency; founding £39/mo locked for first 30 agencies.
- Channel to first 10: Founder's Skool community (AI agency owners = exact ICP) and @theoperator short-form audience with a "your AI ads become illegal-by-default in the EU on 2 Dec 2026 unless labeled" series; LinkedIn AI-agency groups. No email lists needed.
- Timing hypothesis: The EU AI Act Digital Omnibus (political agreement 6–7 May 2026; Parliament 16 June, Council final green light 29 June 2026) delayed high-risk Annex III duties to 2 Dec 2027 BUT cut the transparency deferral to three months: Article 50 obligations — machine-readable marking of synthetic content, deepfake labeling, chatbot disclosure — are due by 2 December 2026. It is the only AI Act deadline still live inside 6 months, and almost no SMB tooling exists.
- Citations:
  - https://www.consilium.europa.eu/en/press/press-releases/2026/05/07/artificial-intelligence-council-and-parliament-agree-to-simplify-and-streamline-rules/
  - https://www.insideprivacy.com/artificial-intelligence/eu-ai-act-update-timeline-relief-targeted-simplification-and-new-prohibitions/
  - https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/
  - https://compliancehub.wiki/eu-digital-omnibus-ai-act-deadline-deferral-annex-iii-2027/
- Notes: Not a GPT wrapper — it's a provenance-embedding pipeline + register + policy generator. v1 = upload → C2PA-stamp → labeled-asset download + register (open-source c2pa libraries), Stripe checkout; <8h. hypothesis: enforcement against SMB agencies will lag, so sell via client-procurement pressure (agencies asked to warrant AI-Act compliance in MSAs), not fines.

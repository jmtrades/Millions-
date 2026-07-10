# EAA Storefront Evidence File
Category: Vertical SaaS | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: An accessibility evidence file that survives a market-surveillance letter: scheduled WCAG 2.1 AA scans of your storefront and checkout, a prioritised fix queue your developer can action, the legally required accessibility statement generated and kept current per store/market, and a dated compliance log proving continuous conformity effort — the thing regulators ask for first. Explicitly NOT an overlay widget.
- Buyer: Founder / Head of E-commerce at a DTC brand selling to EU consumers, 10–100 staff (above the microenterprise services exemption), on Shopify or WooCommerce, no in-house accessibility expertise.
- Price: £99/mo per storefront; founding £490/yr for first 25 stores.
- Channel to first 10: eCommerceFuel forum (7-figure store owners, EAA threads live); Shopify Community accessibility threads; @theoperator short-form series on the Carrefour ruling ("a court just gave Carrefour 6 months — here's your 20-minute evidence file"); no email lists needed.
- Timing hypothesis: EAA applied 28 June 2025; 2026 is the first full enforcement year. France filed the first EAA suits Nov 2025 (Auchan, Carrefour, E.Leclerc, Picard) and in June 2026 a French court ordered Carrefour to make its e-commerce site and app fully accessible within six months under daily penalties. Member-state fines: up to €100k/violation (DE), €5k–250k + €25k/yr for missing statements (FR), ~€1M (ES/SE).
- Citations:
  - https://www.webyes.com/blogs/eaa-fines/
  - https://web-accessibility-checker.com/en/blog/eaa-fines-by-country
  - https://www.levelaccess.com/compliance-overview/european-accessibility-act-eaa/
  - https://www.washingtontimes.com/news/2026/jul/8/critical-european-accessibility-act-turned-1/
  - https://easyappsecom.com/guides/shopify-eaa-compliance-guide
- Notes: Crowded-adjacent space (accessiBe overlays, enterprise Level Access/Siteimprove) — wedge is the SMB evidence-file + statement-per-market angle at £99, riding fresh enforcement case law. v1 = axe-core scans via serverless cron + statement generator + Stripe; config-driven, <8h.

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

## R2 Timing Gate
Verdict: PASS (verified 2026-07-10; shared facts with p1-eaa-accessibility-pack).
- VERIFIED — EAA applied 28 Jun 2025; first full enforcement year underway. https://www.washingtontimes.com/news/2026/jul/8/critical-european-accessibility-act-turned-1/
- VERIFIED — Nov 2025 French emergency injunctions vs Auchan/Carrefour/E.Leclerc/Picard (apiDV + Droit Pluriel, after Jul 2025 formal notices). https://testparty.ai/blog/first-european-accessibility-act-lawsuits-france-2025 , https://www.lflegal.com/lf-country/european-accessibility-act-eaa-enforcement-and-implementation/
- VERIFIED — the R1 spec's Carrefour claim is accurate: 4 Jun 2026, Tribunal judiciaire de Caen ordered carrefour.fr + app fully accessible within 6 months, €500/day penalty; "obligation of result, not means" — 71% RGAA insufficient. https://www.deque.com/blog/frances-major-court-decision-supporting-digital-accessibility-under-the-eaa/ , https://auditsu.com/resources/eaa-carrefour-ruling
- NUANCE — Auchan WON the first-ever EAA-transposition ruling (5 May 2026, Lille): court applied a €250M French domestic threshold, not the EAA's €2M line. https://silktide.com/blog/eaa-auchan-court-ruling/
- VERIFIED — fines ~€60k (IE, plus criminal sanctions to 18 months) to ~€900k (SE); NL ACM up to €900k or 1–10% turnover; AT ~$92k/violation without court. https://www.webyes.com/blogs/eaa-fines/ , https://www.levelaccess.com/blog/penalties-for-eaa-non-compliance/ , https://www.acm.nl/en/accessibility/accessibility-e-commerce-services-and-electronic-communications-services
- VERIFIED — non-EU sellers in scope and being probed: Dutch ACM information requests sent to e-commerce operators worldwide incl. companies with no EU office; active NL enforcement expected H2 2026. https://www.levelaccess.com/blog/eaa-compliance-in-2026-how-enforcement-has-evolved-and-what-to-expect-next/

## R3 Saturation Gate
Verdict: 8/10 — KILL-R3 (threshold: >6 kills).

| Competitor | Shape | Price | Threat to v1 |
|---|---|---|---|
| Shopify App Store apps: AC Accessibility Toolkit, WCAG Guard, Isonomy, Accessibility Spark, Avada, Accessify | in-platform automated scans/widgets | $4.99–$9.99/mo | DIRECT: AC Toolkit Advanced $9.99/mo = axe-core scan of live store + downloadable report "for compliance documentation" — v1's core loop at 1/10th the price, inside the buyer's admin. https://www.appifycommerce.com/blog/eaa-ada-compliance-shopify-accessibility-toolkit-2026/ , https://apps.shopify.com/wcag-guard |
| Silktide | continuous monitoring, EAA/EN 301 549, 5-day full crawls incl. PDFs | enterprise | Squeezes from above; already publishing EAA-ruling thought leadership. https://www.capterra.com/p/10004287/Silktide/ , https://silktide.com/blog/eaa-auchan-court-ruling/ |
| Siteimprove / AudioEye / Level Access / Deque / Eye-Able | monitoring + managed remediation + statements | enterprise, mostly undisclosed | Own the category SERP and the enterprise budget. https://www.audioeye.com/post/web-accessibility-testing-tools/ , https://www.guideflow.com/blog/digital-accessibility-software |
| accessiBe / UserWay / EqualWeb / AccessiWay | overlays | ~$49+/mo | Discredited (FTC $1M order vs accessiBe Apr 2025) but still dominate SMB mindshare/spend. https://testparty.ai/blog/accessibe-alternatives |
| EAA micro-SaaS/content swarm: auditsu, web-accessibility-checker, webyes, getwcag, wcagalert, TestParty, usableaccess, inclusiveweb | scanners, fines-by-country SEO, statement generators | low | The exact £49–£149/mo scan+statement+log wedge, already SEO-carpeted; 8+ Carrefour-ruling posts within 5 weeks of the order. https://auditsu.com/resources/european-accessibility-act-fines , https://web-accessibility-checker.com/en/blog/eaa-fines-by-country |

- "Explicitly NOT an overlay" narrative VERIFIED — FTC $1M final order vs accessiBe (Apr 2025) for deceptively claiming automated WCAG compliance; EDF+IAAP May 2023: overlays "do not... comply with European accessibility legislation"; NFB opposition; 800+ overlay-running businesses sued 2023–24; Bloomsybox sued 6 months after installing UserWay. https://dev.to/cec1_c0d/your-accessibility-overlay-is-a-scam-and-heres-the-proof-5g76 , https://www.accessitree.com/accessibility-articles/the-deceptive-facade-of-accessibility-overlays/
- BUT that positioning is already the explicit marketing line of TestParty and the entire post-FTC "accessiBe alternatives" wave (https://testparty.ai/blog/accessibe-alternatives , https://adacomplianceservices.tech/accessibility-overlay-alternatives , https://web-accessibility-checker.com/en/blog/accessibe-alternatives) — v1 would be entering an occupied wedge, not an open one.
- Kill reasoning: automated-scan + statement + dated log at £99/mo is (a) undercut 10x by $9.99/mo Shopify-native apps producing downloadable compliance reports, (b) squeezed from above by Silktide/Siteimprove/AudioEye, (c) surrounded by an EAA micro-SaaS swarm shipping the identical wedge, and (d) admitted <8h to build in the R1 spec — no moat at the exact price point where competition is thickest. The differentiators (statement-per-market, evidence log) are features any of the swarm ships in a sprint.

## R4 Red Team
Skipped — candidate killed at R3 (saturation 8/10 > 6).

## Proposed Scores
- pain: 5 — same enforcement reality as p1: verified giant-only court actions (Carrefour order 4 Jun 2026; Auchan won on €250M threshold), zero documented SMB/non-EU fines as of Jul 2026; ACM self-report duty is real but awareness-driven. https://silktide.com/blog/eaa-auchan-court-ruling/ , https://www.acm.nl/en/accessibility/accessibility-e-commerce-services-and-electronic-communications-services
- reach0: 3 — capped: channel leans on the @theoperator Carrefour-ruling series, and that audience is AI/automation viewers, not DTC ecom heads; eCommerceFuel/Shopify Community posting is unproven cold motion against $9.99 in-admin alternatives.
- ttfd: 6 — <8h build and founding £490/yr offer could close inside 30 days, but selling £99/mo cold against $9.99 Shopify-native anchors stretches the first-deal clock.
- margin: 9 — axe-core on serverless cron + templated statements; COGS near zero, pure SaaS margin.
- timing: 8 — verified fresh trigger (Carrefour order 5 weeks old, ACM active phase H2 2026), docked for a narrative 8+ vendors already own.
- fit: 8 — Next.js+Supabase+Stripe + scheduled scans + generator is exactly the founder's stack; the build is trivially in-lane (which is also why it's trivially copyable).

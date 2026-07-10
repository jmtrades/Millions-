# EUDR DDS Copilot
Category: Vertical SaaS | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: A valid EUDR due diligence statement reference number for every coffee/cocoa batch you place on the EU market before your deadline: magic-link geolocation collection from producers/suppliers (no logins for farmers), automated screening against deforestation map layers, DDS generation and submission to the EU Information System, plus the 5-year audit trail. Downstream operators get one-click supplier DDS-reference collection instead.
- Buyer: Compliance/ops lead at an EU or UK coffee or cocoa importer/roastery, 10–250 staff, placing product on the EU market (medium operators hit 30 Dec 2026; small/micro follow 30 June 2027 with simplified declarations).
- Price: €199/mo; founding €99/mo (or €990/yr) for first 15 importers/roasters.
- Channel to first 10: European Coffee Trip public roastery directory (1,500+ EU roasteries) for personal founder outreach; Specialty Coffee Association community forums; r/roasting and roaster Discords; no founder email lists needed.
- Timing hypothesis: EUDR compliance now bites 30 December 2026 for large AND medium operators and 30 June 2027 for micro/small (Dec 2025 amendment), with soluble coffee newly added to scope and simplified one-off declarations for small primary operators — importers are demanding geolocation + DDS references from suppliers through 2026, and medium roasters have <6 months.
- Citations:
  - https://psqr.eu/publications-resources/eu-deforestation-regulation-eudr-2026-update-new-deadlines-for-companies/
  - https://perfectdailygrind.com/2025/10/more-changes-to-eudr-smaller-coffee-roasters/
  - https://www.gcrmag.com/european-commission-further-simplifies-eudr-adds-soluble-coffee-to-scope/
  - https://coffeelab.app/en/fuer-roestereien/eudr/
- Notes: hypothesis: enterprise EUDR platforms (Osapiens, TraceX, Live EO) price for corporates; sub-250-staff coffee/cocoa firms lack a €99–199/mo tool. v1 = supplier data-collection portal + DDS JSON export (EU IS API submission phase 2); config-driven, <8h for collection+checkout loop. Repeated-delay risk: EUDR has slipped twice — mitigate by selling to importers whose EU buyers contractually demand DDS data regardless of the legal date.

## R2 Timing Gate
**Verdict: PASS — dates verified fresh as of 2026-07-10; no further delay has landed.**
- Regulation (EU) 2025/2650 (deal 4 Dec 2025, EP adoption 11 Dec, Council sign-off 18 Dec 2025): application **30 Dec 2026 for large AND medium operators**, **30 Jun 2027 for micro/small enterprises and natural persons** — matches the spec. https://www.consilium.europa.eu/en/press/press-releases/2025/12/18/deforestation-council-signs-off-targeted-revision-to-simplify-and-postpone-the-regulation/ ; https://www.europarl.europa.eu/news/en/press-room/20251211IPR32168/deforestation-law-parliament-adopts-changes-to-postpone-and-simplify-measures ; https://trade.ec.europa.eu/access-to-markets/en/news/delay-until-december-2026-and-other-developments-implementation-eudr-regulation
- 2026 status: Commission's mandated simplification review published **4 May 2026** — EUDR "will not be reopened," timelines stand; no third delay exists as of July 2026. https://www.bakermckenzie.com/en/insight/publications/2026/05/eu-commission-publishes-simplification-review-of-eudr ; https://www.globalelr.com/2026/05/european-commission-releases-new-eu-deforestation-regulation-measures/
- Spec nuance flagged (not killed for it): soluble coffee is a **proposed** addition via the May 2026 **draft Delegated Act** (with palm-oil derivatives, frozen cattle tongues), not yet adopted law — "newly added to scope" slightly overstates. https://www.foodmanufacture.co.uk/Article/2026/05/05/eudr-soluble-coffee-included/ ; https://www.adherent.com/blog/eudr-simplification-review-2026-whats-new-what-stays-the-same-and-what-additional-support-can-companies-expect/
- Structural fact that hits THIS candidate's TAM: under Reg 2025/2650 **downstream operators no longer submit DDS at all** — only the first-placer files; downstream merely collects/retains reference numbers. Roasteries buying green coffee from EU importers therefore need almost nothing beyond a reference number; only direct-importing roasteries/importers need the full pipeline. https://www.consilium.europa.eu/en/press/press-releases/2025/12/04/eu-deforestation-law-council-and-parliament-reach-a-deal-on-targeted-revision/ ; https://tracextech.com/downstream-operators-eudr-compliance/

## R3 Saturation Gate
**Verdict: KILL — saturation 8/10 for the niche coffee/cocoa EUDR SaaS copilot shape.** The exact claimed gap ("sub-250-staff coffee/cocoa firms lack a €99–199/mo tool") is falsified by named products at, below, and beneath (free) that price point, plus the incumbent roastery software already shipping EUDR features.

| Competitor | Shape / price | Why it crowds v1 | Source |
|---|---|---|---|
| EUDRReady | Small-business EUDR SaaS: free tier, €29/mo Starter, €79/mo Business | Directly occupies and UNDERCUTS v1's €99–199/mo slot, "built specifically for… small businesses" | https://eudrready.eu/eudr-software-small-business/ |
| Fairtrade Plot Insights | FREE geolocation tool, launched Jun 2026, rolling out to 800+ coffee/cocoa co-ops | Solves v1's core magic-link farmer-geolocation workflow for free at origin | https://dailycoffeenews.com/2026/06/16/fairtrade-launches-free-eudr-geolocation-tool-for-coffee-cooperatives/ ; https://www.comunicaffe.com/fairtrade-plot-insights-eudr-coffee-cocoa-cooperatives/ |
| Cropster | Incumbent specialty-coffee roastery software ("industry's #1"), EUDR tracking/documentation | Owns the roastery relationship v1 must cold-win | https://www.cropster.com/blog-post/navigating-eudr-everything-you-need-to-know/ |
| TraceX | EUDR DDS platform with dedicated coffee-roaster and coffee-importer playbooks, per-country landing pages | Marketing directly onto v1's exact buyer | https://tracextech.com/coffee-roasters-eudr-compliance/ |
| Enveritas | Non-profit; free/low-cost deforestation checks of GPS/polygon data for EU coffee importers | Free risk-screening layer | https://partners.enveritas.org/home |
| GRAS EUDR Coffee Check | 8-step coffee DDS tool built WITH the German Coffee Association | Association-endorsed distribution v1 can't match | https://www.gras-system.org/platforms/coffee-check/ |
| Carble (+Satelligence) | Coffee-specific deforestation/carbon platform, VC-backed | Niche coffee incumbent | https://satelligence.com/building-sustainable-and-profitable-smallholder-coffee-supply-chains-with-satelligence-and-carble/ |
| algrano | Green-coffee marketplace with built-in EUDR support for roasters | Channel-owning adjacent | https://algrano.com/learn/eudr-coffee-territorial-approach-transition-period |
| Rainforest Alliance | Certification data supports EUDR farm-to-retailer | Certified supply solved upstream | https://www.rainforest-alliance.org/business/certification/how-the-rainforest-alliance-supports-eudr-compliance-from-farm-to-retailer/ |
| Osapiens; Coolset (~€12k/yr); LiveEO TradeAware; Sourcemap; Satelligence; Source Intelligence; Orbify | Enterprise/general EUDR platforms (osapiens: 700+ customers, first TRACES-integrated) | Squeeze from above; some will move down-market | https://osapiens.com/solutions/eudr/ ; https://www.coolset.com/academy/best-6-eudr-compliance-tools-for-2026-supply-chain-due-diligence ; https://www.sourceintelligence.com/solution/eudr |
| Meridia, Trusty, coffeelab.app (roastery EUDR module), ImpactBuying, ERWAY | Long tail of DDS/traceability tools, several coffee-flavored | Category has an OMR review section — it's a shelf, not a gap | https://www.meridia.land/blog/eudr-coffee-a-comprehensive-guide ; https://coffeelab.app/en/fuer-roestereien/eudr/ ; https://omr.com/en/reviews/category/eudr-compliance |

Count: 15+ named, several aimed at v1's precise buyer; free options at both ends (Fairtrade at origin, Enveritas screening, EUDRReady free tier) compress willingness-to-pay; and the downstream-DDS exemption (R2 above) deletes most of the 1,500-roastery directory as filing customers. No graveyard evidence found (no confirmed vendor shutdowns) — saturation is from live crowding, not death. Score 8/10 > 6 → **KILL-R3**.

## R4 Red Team
Skipped — candidate killed at R3 (gate only runs if R3 passed).

## Proposed Scores
- pain: 6 — real for direct-importing roasteries/importers (≥4% turnover fines: https://www.coolset.com/academy/eudr-penalties-what-non-compliance-actually-costs-fines-bans-criminal-liability), but the downstream exemption relieves most roasteries and certified chains get data free upstream.
- reach0: 7 — European Coffee Trip public directory (1,500+ EU roasteries) is a genuine named £0 channel with 100+ reachable in a week; docked because many listees are micro/small (deadline Jun 2027, low urgency) or downstream (no DDS duty). No cold-list dependence.
- ttfd: 4 — must build collection+screening+DDS product AND beat free/€29-79 incumbents to a first paid compliance decision; 30–60 days realistic even at €99 founding price.
- margin: 8 — SaaS with free satellite/screening data layers available; standard vertical-SaaS gross margins.
- timing: 7 — window verified (30 Dec 2026; no reopening per May 2026 review) but medium-roaster urgency is exactly what the crowded field is harvesting now; micro/small (much of the directory) defer to Jun 2027.
- fit: 5 — capped at 5 (no supply-chain/compliance domain credibility selling to compliance buyers); build itself fits the Next.js+Supabase+Stripe stack.

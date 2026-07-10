# BayFiller — MOT recall engine for independent test stations

Category: Boring-industry automation | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: "We fill your MOT bays." Automated MOT-due texts/emails to the garage's own past customers (reg-plate lookup via DVSA/VES API for expiry dates), one-tap booking link, no-show chasing, and a lapsed-customer win-back sequence. Reported weekly as: MOTs booked, bays filled, £ recovered.
- Buyer: Owner of an independent UK MOT test station (VTS), 1–4 test bays, 30–80 MOTs/week, not part of a dealer group; keeps customer records in a garage management system or spreadsheets.
- Price: £149/month + £199 setup (data import + DVSA API wiring).
- Channel to first 10: Segment founder's 692K cold email list by SIC 45.200 and "MOT" in trading name; Independent Garage Association (IGA) member directory outreach; named Facebook groups "Garage Owners UK" and "MOT Testers UK". First-£-in-14-days path: free "MOT leak audit" (how many of your past customers' MOTs expired elsewhere last month) as the cold-email hook.
- Timing hypothesis: ~30% of vehicles get their MOT after expiry and 18%+ are late purely because drivers forget; DVSA's own free reminder service (4M+ signups and growing) is inserting the government between garage and driver, so garages must own their recall now. A 2026 wave of MOT-reminder software launches (Remindlo, TorqueFlow, WorkshopEase comparisons all published 2026) proves demand — but they're DIY software; this is done-for-you, priced below one recovered MOT+service per month.
- Citations:
  - https://motester.co.uk/dvsas-mot-reminder-service-pass-or-fail/
  - https://esremedia.co.uk/blog/mot-booking-software-garages
  - https://torqueflow.app/blog/mot-booking-software/
  - https://www.remindlo.co.uk/blog/best-mot-reminder-systems-compared
  - https://workshopease.co.uk/blog/best-mot-garage-software-uk.html

## Notes
- Recall/rebooking wedge, not voice — sidesteps the crowded AI-receptionist field entirely.
- Automated reminders convert 15–25% to bookings with no manual follow-up (industry benchmarks in citations); an MOT + average follow-on repair work is worth far more than £149.
- Fulfillment: DVSA MOT History/VES API + Twilio SMS + booking page on Next.js/Supabase; ≥80% automated after CSV import.

## R2 Timing Gate

**VERDICT: KILL-R2 — evergreen pain with new competitors; no genuine ≤12-month shift.** (Gated 2026-07-10.)

Hypothesis legs tested: (a) ~30% of MOTs happen after expiry; (b) DVSA free reminder service (4M+ signups) is newly inserting government between garage and driver; (c) a 2026 wave of DIY MOT-reminder SaaS proves a fresh done-for-you window.

1. **Leg (a) — pain is real but evergreen and overstated.** DVSA data (May 2024–Apr 2025): 24.7% of motorists NOT signed up to reminders were late for MOT vs 16.5% of subscribers — not "~30%" (https://dvsadigital.blog.gov.uk/2026/02/09/dvsas-digital-year-in-review-building-better-services/). Kwik Fit booking data: ~1 in 6 book after expiry (https://www.kwik-fit.com/blog/one-in-six-drivers-book-mot-after-expiry-date-kwik-fit-reveals). The "millions late" statistic is a recurring annual PR story, not news: Direct Line ran "7.6 million motorists risk fines" in Nov 2024 (https://www.directlinegroup.co.uk/en/news/brand-news/2024/14112024.html) and "7 Million Drivers Fail to Renew Their MOT on Time" in Apr 2026 (https://www.directlinegroup.co.uk/en/news/brand-news/2026/16042026.html). Same stat family two years running = evergreen.

2. **Leg (b) — DVSA "insertion" is a 9-year steady trend, not an inflection.** Service launched 2017; 4M signups cited in DVSA's own 2022 garage toolkit (https://mattersoftesting.blog.gov.uk/wp-content/uploads/sites/19/2022/10/DVSA-MOT-improvements-toolkit.pdf); 5M milestone bulletin (https://content.govdelivery.com/accounts/UKDVSA/bulletins/3789a84); 6M+ by early 2026 (https://dvsadigital.blog.gov.uk/2026/02/09/dvsas-digital-year-in-review-building-better-services/; https://www.facebook.com/dvsagovuk/videos/over-6-million-people-have-signed-up-to-dvsas-free-mot-reminder-service-the-remi/1242352787749205/). ~1M adds/year, linear since 2017 — "garages must own recall NOW" has been equally true every year since launch. DVSA's reminders name no garage and DVSA ships a promotion toolkit FOR garages, positioning the service as complementary, not a displacement event.

3. **Leg (c) — the "2026 wave" exists but cuts the wrong way.** Remindlo, TorqueFlow and WorkshopEase all carry 2026-dated comparison/SEO content (https://www.remindlo.co.uk/blog/best-mot-reminder-systems-compared; https://torqueflow.app/garage-software-comparison/; https://workshopease.co.uk/blog/best-mot-garage-software-uk.html) — but automated, garage-branded MOT reminders have been a bundled feature of incumbent garage management software for 10–20 years (table below): Motasoft ~two decades (https://www.motasoft.co.uk/virtual-garage-manager/messaging-reminders/), Garage Hive 14+ years (https://garagehive.co.uk/), TechMan 14,500+ active UK users, MOT Manager with a free tier and unlimited automated branded MOT texts (https://www.carsu.com/en/blog/best-garage-management-software-complete-guide). New low-cost entrants into a decades-old commodity feature is evidence of demand AND saturation — the window, if it ever existed, closed years ago. The R1 claim "none done-for-you" is materially undermined by MOT Manager (fully automated, DVLA/DVSA-linked, garage-branded, free tier) and by GMS reminders that run hands-off once configured.

**Competitor/wave evidence gathered while testing leg (c):**

| Tool | Type / age | MOT reminders | Price signal | Source |
|---|---|---|---|---|
| Motasoft Virtual Garage Manager | Incumbent GMS, ~20 yrs | Automated SMS/email MOT + service reminders, DVSA integration | Established | https://www.motasoft.co.uk/virtual-garage-manager/messaging-reminders/ |
| Garage Hive | Incumbent GMS, 14+ yrs | Automatic MOT/service/timing-belt SMS + email reminders | Established | https://garagehive.co.uk/ ; https://www.carsu.com/en/blog/best-garage-management-software-complete-guide |
| TechMan | Incumbent GMS, 14,500+ active UK users | MOT/DVLA reminders, mature ecosystem | Established | https://www.carsu.com/en/blog/best-garage-management-software-complete-guide |
| MOT Manager | Dedicated MOT-centre tool | Unlimited automated garage-branded MOT texts, DVLA/DVSA-linked | Free tier | https://www.carsu.com/en/blog/best-garage-management-software-complete-guide |
| MAM Autowork Online | Incumbent GMS | Customer communication/reminders, parts-supplier ties | Established | https://www.pam.ai/blog/best-garage-management-software |
| Remindlo | 2026 DIY reminder SaaS | Automated MOT SMS reminders, "reduce no-shows 30%" | Free (10 SMS/mo) / £19 / £49 per mo | https://www.remindlo.co.uk/industries/mot-testing-station ; https://www.softwareadvice.com/product/553168-Remindlo/ |
| TorqueFlow | 2026 AI GMS | Auto MOT reminders on every vehicle record, DVLA integration | £75/bay/mo annual (£100 monthly), all-in incl. Voice AI + WhatsApp | https://torqueflow.app/pricing/ ; https://torqueflow.app/ |
| WorkshopEase | 2026 MOT-focused GMS | Automated reminders from stored MOT expiry; advisory→quote conversion | n/a | https://workshopease.co.uk/blog/best-mot-garage-software-uk.html |
| DVSA reminder service | Government, free, since 2017 | Text/email at 4wk + 2wk before due; 6M+ signups; cuts lateness 24.7%→16.5% | Free | https://dvsadigital.blog.gov.uk/2026/02/09/dvsas-digital-year-in-review-building-better-services/ |

**Conclusion:** No ≤12-month shift. The candidate's £149/mo done-for-you sits 2–8x above DIY substitutes (£0–£49 Remindlo, MOT Manager free tier) for a feature most target garages already have bundled in software they run. KILL-R2.

## R3 Saturation Gate

Skipped — killed at R2 (competitor evidence gathered incidentally while testing timing leg (c) is recorded in the R2 table above; it points to a saturation score of ~8 had the gate been run).

## R4 Red Team

Skipped — killed at R2.

## Proposed Scores

- pain: 5 — late-MOT leakage is real (24.7% of non-subscribed drivers late, https://dvsadigital.blog.gov.uk/2026/02/09/dvsas-digital-year-in-review-building-better-services/) but the reminder job is already served by bundled GMS features for most target garages; residual unserved pain (no-show chasing, £-recovered reporting) is thin.
- reach0: 3 — primary spec channel is the 692K SIC-segmented cold list (LIABILITY cap ≤3); IGA directory + FB "Garage Owners UK" are unproven manual cold channels, and founder's @theoperator/Skool assets have zero overlap with UK garage owners.
- ttfd: 4 — "MOT leak audit" hook is decent but requires the garage to export customer/reg data from its GMS before any value is demonstrable; £199 setup adds friction; realistic first deal 2–6 weeks of manual cold selling.
- margin: 7 — DVSA API + Twilio + automated stack is high gross margin at £149/mo, but price sits 2–8x above substitutes (Remindlo £19–49/mo, MOT Manager free tier — https://www.softwareadvice.com/product/553168-Remindlo/ ; https://www.carsu.com/en/blog/best-garage-management-software-complete-guide), so churn exposure is high.
- timing: 2 — evergreen pain; DVSA reminder growth linear since 2017 (4M→6M, 2022→2026); reminder feature bundled in incumbent software for 10–20 years (see R2 citations).
- fit: 5 — build is trivially within founder's stack (Next.js/Supabase/Stripe/Twilio), but the business is service-heavy UK local-trade cold sales plus per-garage data imports; distribution assets don't reach the buyer.

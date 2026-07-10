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

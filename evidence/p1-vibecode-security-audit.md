# 48-Hour Vibe-Code Security Audit

Category: Productized service | Status: R1-generated 2026-07-10

## R1 Spec
- Offer: 48-hour security audit of a live vibe-coded app (Lovable/Bolt/Replit/Cursor + Supabase stack): automated scan + manual review of RLS policies on every table, exposed API-key/secret scan, auth & session config check, Stripe webhook signature validation. Delivered as a scored report, prioritized fix list, and 10-min Loom walkthrough. Upsell: critical fixes implemented within 5 days (+£600).
- Buyer: Non-technical solo founders and indie hackers running revenue-generating apps built with Lovable/Bolt/Replit on Supabase — paying users, no engineer on payroll.
- Price: £399 audit one-off; £999 audit + critical-fix pack.
- Channel to first 10: @theoperator short-form content ("I scanned 50 vibe-coded apps live — most leak customer data") with a free 60-second exposure check as lead magnet; direct posts + replies in Lovable Discord, r/lovable, r/SideProject. No lists needed.
- Timing hypothesis: Jan 2026 scan of 1,072 Supabase-backed vibe-coded apps found 98% had security issues and 16% critical flaws; HN front page Jan 2026: "11% of vibe-coded apps are leaking Supabase keys"; CVE-2025-48757 (Lovable generating apps without RLS, 170+ production apps exposed) made "is my vibe-coded app safe?" a mainstream founder anxiety. Founder is a Supabase expert — audit is ~90% automatable (scripted RLS probes + secret scanners), <2 founder-hours/unit.
- Citations: https://www.symbioticsec.ai/blog/we-scanned-1-072-vibe-coded-apps-98-had-security-flaws , https://news.ycombinator.com/item?id=46662304 , https://vibeappscanner.com/lovable-security , https://blog.vibecoder.me/row-level-security-supabase-complete-guide

## R2 Timing Gate

Verdict: PASS (2026-07-10, hostile web verification, 4 claims checked)

1. **Jan 2026 scan (1,072 apps, 98%) — VERIFIED.** Symbiotic Security: "We Scanned 1072 Vibe Coded Apps, 98% Had Security Flaws" — only 26/1,072 clean; 172 sites allow unauthenticated DELETE of DB records with the public key; 172 expose unauthenticated PATCH; 39 sites' tables fully readable; 34 expose emails/hashed passwords/tokens. https://www.symbioticsec.ai/blog/we-scanned-1-072-vibe-coded-apps-98-had-security-flaws (corroborated: https://www.linkedin.com/posts/tyler-smith-t_we-scanned-1072-vibe-coded-apps-98-had-activity-7450588069537398786-qDVs)
2. **'11% leak Supabase keys' HN story — VERIFIED.** HN thread exists (https://news.ycombinator.com/item?id=46662304); source is SupaExplorer's January 2026 Cybersecurity Insight Report: scan of 20,000+ indie launch URLs found 11% exposing Supabase credentials in the frontend (incl. service_role keys that bypass RLS). https://supaexplorer.com/cybersecurity-insight-report-january-2026
3. **CVE-2025-48757 — VERIFIED.** Real NVD entry, CVSS 9.3: Lovable-generated apps deployed with missing/insufficient RLS; researcher Matt Palmer crawled 1,645 Lovable projects, found 303 insecure endpoints across 170 sites (10.3%). https://nvd.nist.gov/vuln/detail/CVE-2025-48757 , https://mattpalmer.io/posts/2025/05/CVE-2025-48757/ , https://www.superblocks.com/blog/lovable-vulnerabilities . Nuance: disclosed May 2025, not Jan 2026 — the anxiety is 14 months old, not fresh.
4. **Wave ≤18mo old and still growing — VERIFIED with caveat.** Karpathy coined the term Feb 2025 (https://x.com/karpathy/status/1886192184808149383) → 17 months old at 2026-07. Collins Dictionary Word of the Year late 2025; vibe-coding category estimated $4–5B inside a $10B+ AI-assisted-dev market in 2026 (https://www.questera.ai/blogs/history-of-vibe-coding-karpathy-tweet , https://en.wikipedia.org/wiki/Vibe_coding). Caveat: Karpathy publicly walked back "give in to the vibes" in late 2025 and "vibe coding is dead" takes circulate (https://dev.to/michelle-jones/vibe-coding-is-dead-heres-what-replaced-it-4472) — market growing, but the security-panic news peak (Jan 2026) is already ~6 months old.

## R3 Saturation Gate

Verdict: KILL — saturation score 8/10 (threshold >6). One search surfaced 10+ direct competitors across every layer of the offer, including 2026 "best vibe-coding security scanner" comparison listicles — a category with roundup articles is not whitespace.

| Competitor | Shape | Price | URL |
|---|---|---|---|
| VibeAppScanner | Productized self-serve scans + SEO fortress on every target keyword (lovable-security, is-supabase-safe, replit-security, RLS guides); claims its team discovered CVE-2025-48757 | $5 starter / $14 deep / $29/mo | https://vibeappscanner.com/ |
| Vibe-eval | **FREE 60-second Lovable security scanner — the candidate's exact lead magnet, already live** | Free | https://vibe-eval.com/updates/lovable-security-scanner/ |
| Symbiotic Security | Free Lovable vulnerability scanner; authors of the 1,072-app study (uses the candidate's timing evidence as their own lead-gen) | Free | https://www.symbioticsec.ai/blog/lovable-vulnerability-scanner |
| Aikido "vibe check" | Vibe-coder security checklist + full SAST/DAST/secrets platform | Free tier | https://www.aikido.dev/blog/vibe-check-the-vibe-coders-security-checklist |
| VibeAudits.com | Human audit service for AI-built apps — the exact paid-audit shape | Audit service | https://vibeaudits.com/ |
| Sherlock Forensics | Professional vibe-coding security audit | From $1,500 CAD | https://www.sherlockforensics.com/pages/vibe-coding-security.html |
| Vibe Code Secure | Vibe-code app security scanner | — | https://vibecodesecure.com/ |
| SafeToShip | Scanner + "Best Security Scanners for Vibe-Coded Apps (2026)" comparison content | — | https://safetoship.dev/blog/best-vibe-coding-security-scanners |
| benavlabs/vibe-check | Open-source security checklist + automated audit + AI rules file | Free (OSS) | https://github.com/benavlabs/vibe-check |
| Lovable built-in | Basic security scan auto-runs on EVERY publish and "fixes what it can"; Deep agentic scan (RLS analysis, schema checks, code vulns, dependency audit) + security memory | Bundled | https://docs.lovable.dev/features/security , https://lovable.dev/blog/how-lovable-protects-your-apps-automatically |
| Replit Security Agent | Agentic full-project audit: threat model, route/data-flow mapping, Semgrep + HoundDog.ai, plus CVE Auto-Protect patching | Bundled | https://vibeappscanner.com/replit-security , https://releasebot.io/updates/replit |
| Supabase Security Advisor | Splinter linter in every dashboard + AI Assistant that generates and applies RLS policies from plain English; 2026 roadmap: push protection, grant toggles, hardened configs | Free, bundled | https://supabase.com/features/security-and-performance-advisor , https://supabase.com/blog/supabase-security-2025-retro |
| jacob p (Medium) | "I Scanned Over 50 Lovable Apps For Security Vulnerabilities" — the candidate's exact content hook, already published | Content | https://medium.com/@jacobp96/i-scanned-over-50-lovable-apps-for-security-vulnerabilities-d05b2ad94006 |
| Going rate | Professional vibe-code audits established at $500–$3,000 | Market range | https://vibecoding.app/blog/vibe-code-audit |

Why 8/10: all three components of the candidate's wedge are already occupied — (a) the free 60-second exposure check exists verbatim (vibe-eval, Symbiotic); (b) the "I scanned N apps" content hook is published (jacob p, Symbiotic's 1,072 study); (c) the paid audit exists at multiple price points ($5 self-serve to $1,500+ professional), leaving £399 squeezed between $14 automated scans and credentialed firms. Meanwhile all three target platforms plus Supabase itself have shipped native scanning/fixing (roundup confirming ecosystem: https://dev.to/solobillions/i-tested-every-vibe-coding-security-scanner-2026-heres-what-actually-works-p9k). Not 9–10 only because no dominant UK/EU brand owns "done-for-you audit + fix for non-technical founders" and demand evidence is real.

## R4 Red Team

Skipped — candidate killed at R3. (Strongest R4 case was pre-confirmed anyway: platform absorption — Lovable auto-scans and auto-fixes on every publish, Replit ships a Security Agent, Supabase's free dashboard Assistant writes and applies RLS policies — per URLs in the R3 table.)

## Proposed Scores

- pain: 7 — Real and severe when realized (CVSS 9.3 CVE, unauthenticated table wipes, PII exposure per https://nvd.nist.gov/vuln/detail/CVE-2025-48757 and https://www.symbioticsec.ai/blog/we-scanned-1-072-vibe-coded-apps-98-had-security-flaws), but latent/insurance-shaped for the buyer until breached.
- reach0: 5 — @theoperator's AI/automation-builder audience overlaps vibe coding but skews technical (people who run the free scanners themselves); the actual buyer is NON-technical founders. Lovable Discord/r/lovable are reachable free but anti-promo. Not cold-list-dependent, so no ≤3 cap.
- ttfd: 7 — Self-serve £399 Stripe checkout + audit deliverable within founder's existing Supabase skillset; <14d first deal plausible if one video hits, but free scanners (https://vibe-eval.com/updates/lovable-security-scanner/) intercept the funnel.
- margin: 8 — ~90% automatable per spec, <2 founder-hours/unit at £399; deduction for manual Loom + fix-pack labor at £999 tier.
- timing: 5 — Claims all verified, wave is 17 months old and growing, but the news peak was Jan 2026 (~6 months stale), the CVE is 14 months old, and platforms have already shipped the native fix layer — window closing, not opening.
- fit: 7 — Squarely inside technical credibility (Supabase/RLS/Stripe expert; near-max on capability), discounted for the distribution mismatch between his builder audience and the non-technical buyer.

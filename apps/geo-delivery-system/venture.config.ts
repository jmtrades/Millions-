import { defineVenture } from "@millions/core";

// ACCURACY CONTRACT (verified against evidence/i1-geo-delivery-system.md + linked primaries, 2026-07-10):
// - Seer Interactive 2026 update (53 brands, 5.47M tracked queries, 2.43B organic impressions;
//   FY2025 + Q1 2026 actuals): organic CTR fell 61% where AI Overviews appear, as impressions
//   outgrew clicks. BUT Seer also shows AIO-SERP CTR "leveling off" (1.3% Dec 2025 -> 2.4% Feb
//   2026) and SEJ ran "clicks didn't collapse" — so we sell the newly billable scope, never a
//   traffic-apocalypse claim.
// - Top-10-ranking <-> AI-citation overlap by early 2026: Ahrefs 38% (down from ~76%),
//   BrightEdge ~17% (Feb 2026). Always quoted as the 17-38% RANGE, both sources named.
// - ChatGPT Branded Link Update: 7 MAY 2026. Referral traffic +157.7% week-over-week,
//   homepage referrals +354.7% (Profound monitoring data).
// - BINDING GATE CONDITION: single-run AI-visibility numbers are statistically unstable —
//   repeated identical runs overlap only 32-43% on cited sources (arXiv 2604.07585); Digiday:
//   execs call the scores "a benchmark, not a source of truth". The tracker therefore ships
//   MULTI-RUN SAMPLING with uncertainty ranges. This appears in the offer bullets and FAQ and
//   may never be watered down to a single-run pitch.
// - Market rates (audits £500-£2,000 one-off; white-label add-ons $500-$2,000/mo per client;
//   full GEO $2,000-$5,000/mo) cite LLM Pulse agency guides. No ranking/citation/revenue
//   guarantees anywhere.
export const cfg = defineVenture({
  slug: "geo-delivery-system",
  name: "GEO Delivery System",
  tagline:
    "The business-in-a-box for SEO freelancers pivoting to GEO retainers — sellable audit, honest multi-run citation tracker, proposals, white-label reports",
  mode: "checkout",
  currency: "gbp",
  price: 49900,
  priceLabel: "£499 one-off · includes 6 months of The GEO Room community",
  guarantee: "14-day refund if you can't send the first client proposal from it",
  hero: {
    badge: "The retainer conversation is happening with or without you",
    headline: "Your retainers are dying. Sell the thing replacing them.",
    sub: "Organic CTR falls 61% where AI Overviews appear (Seer, 5.47M queries). Top-10 rankings now overlap AI citations just 17-38%. Your clients will have the GEO conversation this year — with you, or with an agency that already has an offer. This system turns your SEO book into £2-5k/month GEO retainers: sellable audit, multi-run citation tracker with honest error bars, priced proposals, white-label monthly report.",
    cta: "Get the system — £499",
  },
  pains: [
    {
      title: "Your monthly report answers a question clients stopped asking",
      body: "Clients now ask 'do we show up in ChatGPT and the AI answer box?' — and a rank tracker can't say. The overlap between top-10 rankings and AI Overview citations collapsed from ~76% to 17-38% by early 2026 (Ahrefs; BrightEdge), so 'we still rank #3' is no longer proof of visibility. Every reporting cycle that dodges the question weakens the retainer.",
    },
    {
      title: "GEO is already a billable line item — for the agencies pitching your clients",
      body: "Agencies on white-label AEO platforms are adding $500-$2,000/month per client; AI-visibility audits sell at $500-$2,000 one-off; full GEO service runs $2,000-$5,000/month (LLM Pulse agency data). The scope exists at market rates today. If you can't demo citation tracking in a pitch, you're losing to someone who can.",
    },
    {
      title: "The tools exist. The offer doesn't.",
      body: "Otterly-class trackers start around $29/month — but a tool subscription is not a proposal, a price, a conversation script, or a monthly report a client pays £2-5k for. What's missing is the packaged offer around the tooling: that gap is what you're actually paid to close, and it's exactly what this kit ships.",
    },
  ],
  offer: {
    title: "What's in the system",
    bullets: [
      "AI-visibility audit template — the £500-£2,000 first engagement: citation-gap battery across ChatGPT, Google AI Overviews and Perplexity, crawler-access checks, prioritised fix list, client-ready formatting",
      "Multi-run AI-citation tracker (n8n, importable in ~40 minutes): re-runs every prompt battery multiple times per platform and reports citation share as a range with uncertainty — because single-run AI-visibility numbers are statistically unstable (32-43% run-to-run source overlap in published testing), and honest error bars are the differentiator clients trust",
      "GEO proposal + pricing templates anchored to live market rates — £2-5k/month retainer structures, audit-first entry offer, scope tables you can send this week",
      "White-label monthly report template — ranges, trends and actions under your brand, with the methodology page pre-written so clients trust the numbers",
      "Positioning scripts for the client conversation — word-for-word answers for 'what about AI search?' that sell the new scope without trashing the SEO work you sold them last year",
      "6 months of The GEO Room community — teardowns of live GEO wins, tracker updates, real pricing intel from other operators (then £39/month, cancel anytime)",
      "Template + tracker updates as platforms shift — when ChatGPT changes how links render or Google reshuffles AI Overview citations, revised assets land in the community",
      "'Sell before you build' launch checklist — the 14-day path from purchase to first proposal sent; the refund guarantee is written against it",
    ],
    turnaround: "Instant delivery after checkout",
  },
  proof: [
    {
      stat: "Organic CTR fell 61% where AI Overviews appear — 53 brands, 5.47M tracked queries",
      source: "Seer Interactive, 2026 CTR update (FY 2025 + Q1 2026)",
      url: "https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-2026-update",
    },
    {
      stat: "Top-10 rankings ↔ AI Overview citations: overlap collapsed to 17-38% by early 2026",
      source: "Search Engine Journal (Ahrefs data) · BrightEdge rank-overlap analysis",
      url: "https://www.searchenginejournal.com/google-ai-overview-citations-from-top-ranking-pages-drop-sharply/568637/",
    },
    {
      stat: "ChatGPT branded-link update (7 May 2026): referral traffic +157.7% week-over-week",
      source: "Profound, ChatGPT referrals monitoring",
      url: "https://www.tryprofound.com/blog/chatgpt-referrals-branded-links",
    },
  ],
  steps: [
    {
      title: "Buy",
      body: "£499 by card. Instant access to the full system and The GEO Room — no call, no upsell maze.",
    },
    {
      title: "Sell the audit",
      body: "Run the launch checklist: shortlist your 5 most at-risk retainers, personalise the audit proposal from the template, send it this week — before you build anything.",
    },
    {
      title: "Deliver + convert",
      body: "Import the tracker, deliver the audit with honest ranges, present the white-label report — then move the client onto a £2-5k/month GEO retainer with the proposal kit.",
    },
  ],
  faq: [
    {
      q: "Is GEO measurement even reliable?",
      a: "As commonly practised — no, and we say so out loud. Published testing found repeated identical prompts overlap only 32-43% on cited sources between runs (arXiv 2604.07585), and Digiday reports agency execs calling AI-visibility scores 'a benchmark, not a source of truth'. That is exactly why the tracker in this kit runs multi-run sampling and reports citation share as a range with uncertainty — never a single-run point score. Volatility, honestly measured, is also the strongest argument for a monitoring retainer over a one-off audit: numbers that move are why monitoring exists.",
    },
    {
      q: "I'm not technical enough for n8n.",
      a: "The tracker imports as a ready-made workflow: you paste API keys, follow the build-along video, and The GEO Room is there when a node errors. Budget ~40 minutes for first setup. If you can follow a checkout-page setup tutorial, you can run this — and the harder 80% of the business (proposal, pricing, the client conversation) is templated, not technical.",
    },
    {
      q: "Why not just buy Otterly or Peec?",
      a: "Buy them if you like — they're tools, from around $29/month, and the kit works alongside them. But clients don't pay £2-5k/month for tool access; they pay for an audit, interpretation, a roadmap and a report they can forward internally. This is the sellable OFFER around whatever tooling you use: proposals, pricing anchors, positioning scripts, methodology, white-label reporting — plus a tracker you own and can white-label instead of renting per seat.",
    },
    {
      q: "Will Google kill this?",
      a: "Google already changes it constantly — when Gemini 3 became the AI Overview default in late January 2026, citation patterns reshuffled and top-10 overlap collapsed to 17-38%. Every shift like that is the argument for monitoring rather than a one-off fix. And it's multi-platform now: ChatGPT has sent measurably more referral traffic since its 7 May 2026 branded-link update (+157.7% week-over-week, per Profound). If AI answers vanished tomorrow, you'd still own the client relationships and the SEO book — nothing in this kit bets against SEO; it adds the scope clients are starting to ask for.",
    },
    {
      q: "Who is this NOT for?",
      a: "Freelancers with no client book yet (the system converts existing retainers and relationships), enterprise agencies that already run an in-house GEO team, and anyone shopping for passive income. This is a selling system — templates, methodology, community. If you won't send proposals, nothing here earns.",
    },
  ],
  compliance:
    "GEO Delivery System is a training, template and workflow product. Results depend on your execution and your market: nothing here guarantees rankings, AI citations, client wins or revenue. AI platforms change without notice — the methodology reports uncertainty ranges precisely because point-in-time numbers move.",
  seoPages: [
    {
      slug: "seo-retainers-dying-ai-overviews-2026",
      title: "SEO retainers are dying under AI Overviews: the 2026 numbers",
      description:
        "Organic CTR fell 61% where AI Overviews appear, and top-10 rankings now overlap AI citations just 17-38%. The measured data — and what SEO freelancers sell instead.",
      body: "If you sell SEO retainers, 2026 is the year the monthly report stopped answering the question your client is actually asking. Three datasets explain what changed. None is a hot take — all three are measured, dated and attributed below.\n\n## The click decline is real and measured\nSeer Interactive's 2026 update — 53 brands, 5.47 million tracked queries, 2.43 billion organic impressions covering full-year 2025 plus Q1 2026 — found organic CTR fell 61% where AI Overviews appear, because impressions grew faster than clicks. Your client's impression line goes up; the click line doesn't follow. Search Engine Land covered the same dataset. That divergence is sitting in your client's Search Console right now, waiting for a meeting.\n\n## Ranking no longer means being cited\nThe structural shift underneath: the overlap between top-10 organic results and the sources AI Overviews cite collapsed from roughly 76% to 38% in Ahrefs' data, and BrightEdge measured it as low as ~17% by February 2026 — widely attributed to Gemini 3 becoming the AI Overview default in late January. Plainly: a client can hold the #3 position you were hired to win and be absent from the AI answer above it. No rank tracker will ever surface that.\n\n## The honest caveat — use it, don't hide it\nSeer's own data shows CTR on AIO SERPs leveling from 1.3% in December 2025 to 2.4% in February 2026, and Search Engine Journal ran the headline 'clicks didn't collapse'. Both things are true. So the pitch that survives an informed client isn't panic — it's scope: a new, separately billable deliverable that answers the question the ranking report can't.\n\n## Meanwhile, attention moved somewhere measurable\nOn 7 May 2026, ChatGPT switched citations to inline branded links. Profound's monitoring recorded ChatGPT referral traffic up 157.7% week-over-week, with homepage referrals up 354.7%. AI surfaces now send real, attributable visits — which turns 'are we cited?' from a curiosity into a reportable, billable KPI.\n\n## What freelancers actually do about it\nThe market has already priced the answer: agencies on white-label AEO platforms add $500-$2,000 per client per month, AI-visibility audits sell at $500-$2,000 one-off, and full GEO service runs $2,000-$5,000 per month (LLM Pulse agency guides). For a freelancer with a live retainer book, the play is not building a tool company. It is packaging: a sellable audit, a citation-tracking methodology honest enough to survive scrutiny (multi-run sampling with uncertainty ranges — single runs are statistically unstable), a priced proposal, and a white-label monthly report — then opening the conversation before a GEO-ready agency opens it for you.\n\n- Seer Interactive, AIO impact on Google CTR — 2026 update (seerinteractive.com)\n- Search Engine Journal: top-ranking pages losing AI Overview citations (Ahrefs data); 'clicks didn't collapse'\n- BrightEdge weekly AI search insights: rank overlap after 16 months of AIO\n- Profound: ChatGPT referrals after the branded-link update\n\nNo ranking or citation outcome is guaranteed — the data above is market context; execution is the variable.",
    },
    {
      slug: "how-to-sell-geo-retainers-2026",
      title: "How to sell GEO retainers in 2026: packaging, pricing, positioning",
      description:
        "GEO is now separately billable scope at £2-5k/month market rates. How SEO freelancers package the audit, price the retainer, and run the client conversation.",
      body: "GEO stopped being a conference talk and became a line item. Agencies on white-label AEO platforms are adding $500-$2,000 per client per month; AI-visibility audits sell at $500-$2,000 one-off; full GEO services run $2,000-$5,000 a month (LLM Pulse's agency pricing guides). If you already hold SEO retainers, you are closer to this revenue than any new entrant — here is the packaging that gets you there.\n\n## Price against the market, not your hours\nYou are not inventing a price; you are quoting one. Anchor the retainer at £2-5k per month and the audit at £500-£2,000, because that is what the market already pays. Underpricing GEO signals you don't believe it's a real scope — the same mistake freelancers made with SEO fifteen years ago.\n\n## Package in two steps: audit, then retainer\nSell the audit first. It's a bounded, low-risk yes: a citation-gap battery across ChatGPT, Google AI Overviews and Perplexity, crawler-access checks, and a prioritised fix list. The audit produces the evidence — 'you rank #3 and appear in 1 of 10 sampled AI runs' — and the retainer maintains the response: continuous multi-run citation tracking, content restructuring, and a monthly white-label report. One creates urgency; the other compounds.\n\n## The conversation: addition, not apology\nNever trash the SEO work you sold last year — it still ranks the client. The line that works: 'The SEO is doing its job. A new surface appeared above the results, and ranking no longer guarantees being cited — top-10 overlap with AI Overview citations is down to 17-38% (Ahrefs; BrightEdge). Here's how we get you measured and mentioned there.' You are selling a second engine, not confessing the first one failed.\n\n## Make honesty the differentiator\nDigiday reports marketers souring on AI-visibility tools as 'inconsistent results fuel skepticism' — agency execs call the scores 'a benchmark, not a source of truth'. They're right to be wary: repeated identical runs overlap only 32-43% on cited sources (arXiv, 2026). So report ranges, not points. 'Cited in 60-80% of sampled runs' beats a fake-precise score that the client's own five minutes of testing will contradict by Thursday. Volatility, honestly measured, is also your strongest retainer argument: numbers that move are the reason monitoring exists.\n\n## Sell before you build\nDon't spend a month in n8n before earning a pound. Shortlist your five most at-risk retainers, send the audit proposal in week one, and build delivery capacity against signed work. The GEO Delivery System ships the audit template, the multi-run tracker, £2-5k/month proposal and pricing templates, positioning scripts and the white-label report — everything above, packaged, with 6 months of The GEO Room community. No outcomes are guaranteed; results depend on your execution and your market.",
    },
    {
      slug: "ai-citation-tracking-multi-run-methodology",
      title: "AI citation tracking: why single-run numbers lie (multi-run methodology)",
      description:
        "Identical prompts re-run against the same AI engine overlap only 32-43% on cited sources. The honest methodology: multi-run sampling with uncertainty ranges.",
      body: "Most AI-visibility numbers in circulation are false precision. Ask the same engine the same question twice and it cites different sources — published testing puts the overlap between identical repeated runs at just 32-43% (arXiv 2604.07585). A single-run scorecard ('you're #2 in ChatGPT') is noise wearing a dashboard. Here is the methodology that survives contact with a skeptical client.\n\n## Why single runs lie\nGenerative engines sample. Temperature, retrieval variance, personalisation, index freshness and live A/B tests all shuffle which sources get cited from run to run. With 32-43% run-to-run source overlap, a one-shot measurement can 'move' dramatically week to week when nothing changed but the dice. The market has noticed: Digiday reports marketers questioning expensive AI-visibility tools as 'inconsistent results fuel skepticism', with agency executives calling the outputs 'a benchmark, not a source of truth'.\n\n## The multi-run fix\nHonest tracking is sampling, not snapshots:\n- Fix a prompt battery per client — buyer-journey questions, not vanity prompts — and version it; changed prompts are a new baseline, not a trend.\n- Run every prompt N times per platform per cycle (five-plus runs is a workable floor) across ChatGPT, Google AI Overviews and Perplexity.\n- Report citation frequency with a range — 'cited in 6 of 10 runs' — never a single-run rank.\n- Separate stable citations (present in most runs, week after week) from flicker (appeared once); only the stable tier is strategy-relevant.\n- Trend across cycles, and only call movement that exceeds the noise band a result.\n- Log raw runs with timestamps as an evidence file the client can inspect.\n\n## What goes in the client report\nA one-page methodology note (platforms, prompt battery, run counts, known volatility — with the research cited), the ranged citation-share table, the stable-vs-flicker breakdown, and the actions taken this cycle. Clients don't churn because numbers move; they churn because numbers move after you promised they wouldn't.\n\n## Why error bars win commercially\nA range looks weaker in the pitch and stronger every month after. The vendor selling a precise score gets contradicted by the client's own testing; the operator who predicted the volatility, measured it, and reported it becomes the trusted reference. The volatility is also the business case itself: unstable answers are exactly why a one-off audit snapshot goes stale and why continuous monitoring is worth £2-5k a month as a retainer.\n\nThe GEO Delivery System ships this methodology as an importable n8n workflow — multi-run sampling, aggregation and ranged reporting built in — plus the audit template, proposal and pricing kit, and white-label report around it. No citation outcomes are guaranteed; the method is honest about exactly that.",
    },
  ],
  theme: { accent: "#7c3aed", dark: true },
});

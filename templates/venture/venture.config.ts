import { defineVenture } from "@millions/core";

// GENERATED STARTER — replace every __PLACEHOLDER__ before deploy.
export const cfg = defineVenture({
  slug: "__SLUG__",
  name: "__NAME__",
  tagline: "__TAGLINE__",
  mode: "paid-waitlist",
  currency: "gbp",
  price: 39900,
  priceLabel: "£399 one-off",
  hero: {
    headline: "__HEADLINE__",
    sub: "__SUB__",
    cta: "Get it now",
  },
  pains: [
    { title: "__PAIN1__", body: "__PAIN1_BODY__" },
    { title: "__PAIN2__", body: "__PAIN2_BODY__" },
    { title: "__PAIN3__", body: "__PAIN3_BODY__" },
  ],
  offer: {
    title: "What you get",
    bullets: ["__B1__", "__B2__", "__B3__", "__B4__"],
    turnaround: "__TURNAROUND__",
  },
  proof: [],
  steps: [
    { title: "Buy", body: "Pay by card. No call, no quote dance." },
    { title: "Onboard async", body: "A short form collects everything needed. 10 minutes." },
    { title: "Delivered", body: "__DELIVERY__" },
  ],
  faq: [
    { q: "__Q1__", a: "__A1__" },
    { q: "__Q2__", a: "__A2__" },
    { q: "__Q3__", a: "__A3__" },
    { q: "__Q4__", a: "__A4__" },
  ],
  seoPages: [
    { slug: "__SEO1_SLUG__", title: "__SEO1_TITLE__", description: "__SEO1_DESC__", body: "__SEO1_BODY__" },
    { slug: "__SEO2_SLUG__", title: "__SEO2_TITLE__", description: "__SEO2_DESC__", body: "__SEO2_BODY__" },
    { slug: "__SEO3_SLUG__", title: "__SEO3_TITLE__", description: "__SEO3_DESC__", body: "__SEO3_BODY__" },
  ],
  theme: { accent: "#4f46e5", dark: false },
});

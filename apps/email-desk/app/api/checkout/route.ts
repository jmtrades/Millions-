import { cfg } from "../../../venture.config";
import { checkoutUrl, track } from "@millions/core";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const origin = req.nextUrl.origin;
  await track({ venture: cfg.slug, name: "checkout_start", ua: req.headers.get("user-agent") ?? undefined });
  const url = await checkoutUrl(cfg, origin).catch((e) => {
    console.error("[checkout]", e?.message);
    return null;
  });
  // No Stripe configured (or error) → degrade to waitlist anchor so the page never dead-ends.
  return NextResponse.redirect(url ?? `${origin}/#waitlist`, { status: 303 });
}

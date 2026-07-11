import { cfg } from "../../../venture.config";
import { orderFromWebhook, insertRow, sendEmail } from "@millions/core";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature");
  if (!sig) return NextResponse.json({ error: "no-signature" }, { status: 400 });
  const raw = await req.text();
  try {
    const res = await orderFromWebhook(raw, sig);
    if (res?.order) {
      await insertRow("m_orders", res.order);
      if (res.order.email) {
        await sendEmail({
          to: res.order.email,
          subject: `${cfg.name} — you're in. One thing to do now`,
          text: `Payment confirmed for ${cfg.name}.\n\nReply to this email with your details and we start immediately — ${cfg.offer.turnaround}.\n\n(If you were expecting an onboarding form link, it follows within the hour.)`,
        });
      }
    }
    return NextResponse.json({ received: true });
  } catch (e: unknown) {
    console.error("[webhook]", (e as Error).message);
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }
}

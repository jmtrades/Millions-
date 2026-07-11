import { cfg } from "../../../venture.config";
import { insertRow, track } from "@millions/core";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const form = await req.formData().catch(() => null);
  const email = String(form?.get("email") ?? "").trim().toLowerCase();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.redirect(`${req.nextUrl.origin}/?invalid=1#waitlist`, { status: 303 });
  }
  await insertRow("m_leads", { venture_slug: cfg.slug, email, kind: "waitlist" });
  await track({ venture: cfg.slug, name: "lead", ua: req.headers.get("user-agent") ?? undefined });
  return NextResponse.redirect(`${req.nextUrl.origin}/?joined=1#waitlist`, { status: 303 });
}

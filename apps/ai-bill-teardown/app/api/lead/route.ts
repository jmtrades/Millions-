import { cfg } from "../../../venture.config";
import { insertRow, track } from "@millions/core";
import { NextRequest, NextResponse } from "next/server";

// Pre-check intake (binding flow condition): the landing form collects an export summary
// alongside the email. A submission carrying a summary is stored kind="qualified" — the
// bill is screened before payment, which is what de-risks the ≥30% refund guarantee.
// Submissions without a summary degrade to a plain "contact" lead.
export async function POST(req: NextRequest) {
  const form = await req.formData().catch(() => null);
  const email = String(form?.get("email") ?? "").trim().toLowerCase();
  const summary = String(form?.get("summary") ?? "").trim().slice(0, 2000);
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.redirect(`${req.nextUrl.origin}/?invalid=1#waitlist`, { status: 303 });
  }
  await insertRow("m_leads", {
    venture_slug: cfg.slug,
    email,
    kind: summary ? "qualified" : "contact",
    meta: summary ? { summary } : {},
  });
  await track({ venture: cfg.slug, name: "lead", ua: req.headers.get("user-agent") ?? undefined });
  return NextResponse.redirect(`${req.nextUrl.origin}/?joined=1#waitlist`, { status: 303 });
}

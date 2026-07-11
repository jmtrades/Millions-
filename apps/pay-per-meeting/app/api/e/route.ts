import { cfg } from "../../../venture.config";
import { track } from "@millions/core";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const b = await req.json().catch(() => null);
  if (!b?.n || typeof b.n !== "string") return NextResponse.json({}, { status: 204 });
  await track({
    venture: cfg.slug,
    name: b.n.slice(0, 40),
    path: typeof b.p === "string" ? b.p.slice(0, 200) : undefined,
    ref: typeof b.r === "string" ? b.r : undefined,
    ua: req.headers.get("user-agent") ?? undefined,
  });
  return NextResponse.json({}, { status: 204 });
}

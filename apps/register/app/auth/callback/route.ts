import { NextResponse, type NextRequest } from "next/server";
import type { EmailOtpType } from "@supabase/supabase-js";
import { supabaseServer } from "../../../lib/supabase/server";

export const dynamic = "force-dynamic";

// Magic-link landing: exchanges the emailed code (PKCE ?code=) or token hash
// (?token_hash=&type=) for a session cookie, then continues into /app.
export async function GET(req: NextRequest) {
  const { searchParams, origin } = req.nextUrl;
  const rawNext = searchParams.get("next") ?? "/app";
  const next = rawNext.startsWith("/") ? rawNext : "/app";

  const supabase = await supabaseServer();
  if (supabase) {
    const code = searchParams.get("code");
    const tokenHash = searchParams.get("token_hash");
    const type = searchParams.get("type") as EmailOtpType | null;
    if (code) {
      const { error } = await supabase.auth.exchangeCodeForSession(code);
      if (!error) return NextResponse.redirect(`${origin}${next}`);
    } else if (tokenHash && type) {
      const { error } = await supabase.auth.verifyOtp({ type, token_hash: tokenHash });
      if (!error) return NextResponse.redirect(`${origin}${next}`);
    }
  }
  return NextResponse.redirect(`${origin}/app?auth_error=1`);
}

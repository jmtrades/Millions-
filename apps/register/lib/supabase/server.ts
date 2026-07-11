import { createServerClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export function supabaseEnv(): { url: string; anon: string } | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return url && anon ? { url, anon } : null;
}

// Cookie-bound server client: queries run as the signed-in user (anon key + JWT),
// so RLS is enforced on every user path — no service-role dependence.
// Returns null when the env isn't configured (app still builds and renders).
export async function supabaseServer(): Promise<SupabaseClient | null> {
  const env = supabaseEnv();
  if (!env) return null;
  const cookieStore = await cookies();
  return createServerClient(env.url, env.anon, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(toSet) {
        try {
          toSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          // Server Components can't write cookies; middleware handles session refresh.
        }
      },
    },
  });
}

export type Guard =
  | { state: "no-env" }
  | { state: "signed-out" }
  | { state: "ready"; supabase: SupabaseClient; user: { id: string; email: string } };

// Every /app data page starts here. Renders states, never throws, never runs at build.
export async function guard(): Promise<Guard> {
  const supabase = await supabaseServer();
  if (!supabase) return { state: "no-env" };
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) return { state: "signed-out" };
  return {
    state: "ready",
    supabase,
    user: { id: data.user.id, email: data.user.email ?? "" },
  };
}

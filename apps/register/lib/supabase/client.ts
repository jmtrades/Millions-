import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";

let cached: SupabaseClient | null = null;

// Browser-side Supabase (anon key + user session → RLS enforced).
// Returns null when the env isn't configured so the UI can degrade gracefully.
export function supabaseBrowser(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) return null;
  cached ??= createBrowserClient(url, anon);
  return cached;
}

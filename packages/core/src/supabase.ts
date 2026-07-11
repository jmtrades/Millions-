import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let admin: SupabaseClient | null = null;

// Server-side only. Returns null when env is absent so routes degrade to log-only
// (venture still deployable before keys exist; leads recoverable from Vercel logs).
export function supa(): SupabaseClient | null {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  admin ??= createClient(url, key, { auth: { persistSession: false } });
  return admin;
}

export async function insertRow(table: string, row: Record<string, unknown>) {
  const c = supa();
  if (!c) {
    console.log(`[no-db] ${table}:`, JSON.stringify(row));
    return { ok: false as const, reason: "no-db" };
  }
  const { error } = await c.from(table).insert(row);
  if (error) {
    console.error(`[db-error] ${table}:`, error.message);
    return { ok: false as const, reason: error.message };
  }
  return { ok: true as const };
}

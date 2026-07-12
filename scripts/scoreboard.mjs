#!/usr/bin/env node
// Monday report: numbers only. SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY required.
const url = process.env.SUPABASE_URL, key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) { console.error("Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY"); process.exit(1); }
const res = await fetch(`${url}/rest/v1/m_scoreboard?select=*`, {
  headers: { apikey: key, Authorization: `Bearer ${key}` },
});
const rows = await res.json();
if (!Array.isArray(rows)) { console.error(rows); process.exit(1); }
const pad = (s, n) => String(s).padEnd(n);
console.log(`SCOREBOARD ${new Date().toISOString().slice(0, 10)}`);
console.log(pad("venture", 26), pad("wave", 5), pad("visits7d", 9), pad("signups7d", 10), pad("orders", 7), "cash");
let cash = 0;
for (const r of rows.sort((a, b) => (b.cash_collected ?? 0) - (a.cash_collected ?? 0))) {
  cash += Number(r.cash_collected ?? 0);
  console.log(pad(r.slug, 26), pad(r.wave ?? "-", 5), pad(r.visitors_7d, 9), pad(r.signups_7d, 10), pad(r.orders_total, 7), `£${Number(r.cash_collected).toFixed(2)}`);
}
console.log(`TOTAL CASH COLLECTED: £${cash.toFixed(2)}`);

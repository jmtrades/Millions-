// Resend-backed transactional email. No key → no-op (lead is already in DB).
export async function sendEmail(opts: { to: string; subject: string; text: string; from?: string }) {
  const key = process.env.RESEND_API_KEY;
  const from = opts.from ?? process.env.EMAIL_FROM;
  if (!key || !from) return { ok: false as const, reason: "email-not-configured" };
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [opts.to], subject: opts.subject, text: opts.text }),
  });
  return res.ok ? { ok: true as const } : { ok: false as const, reason: `resend-${res.status}` };
}

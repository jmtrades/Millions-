#!/usr/bin/env node
// One command: `pnpm new-venture <slug> "<Name>"` → apps/<slug> ready for config fill + deploy.
import { cpSync, readFileSync, writeFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const [slug, name = slug] = process.argv.slice(2);
if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
  console.error("usage: pnpm new-venture <slug> \"<Name>\"");
  process.exit(1);
}
const src = join(process.cwd(), "templates/venture");
const dest = join(process.cwd(), "apps", slug);
if (existsSync(dest)) {
  console.error(`apps/${slug} already exists`);
  process.exit(1);
}
cpSync(src, dest, { recursive: true });

const substitute = (dir) => {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) substitute(p);
    else if (/\.(ts|tsx|json|md|mjs)$/.test(entry)) {
      const txt = readFileSync(p, "utf8");
      if (txt.includes("__SLUG__") || txt.includes("__NAME__")) {
        writeFileSync(p, txt.replaceAll("__SLUG__", slug).replaceAll("__NAME__", name));
      }
    }
  }
};
substitute(dest);
console.log(`✅ apps/${slug} created.
Next:
  1. Fill apps/${slug}/venture.config.ts (kill every __PLACEHOLDER__)
  2. Write apps/${slug}/marketing/outreach.md + operator-scripts.md
  3. pnpm install && pnpm --filter ${slug} build
  4. Deploy to Vercel, env: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, RESEND_API_KEY, EMAIL_FROM
  5. Insert venture row: insert into ventures (slug, name, wave) values ('${slug}', '${name}', N);`);

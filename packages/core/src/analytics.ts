import { insertRow } from "./supabase";
import { createHash } from "node:crypto";

// First-party, cookieless, £0. One row per event; UA hashed, no IP stored.
export async function track(opts: {
  venture: string;
  name: string; // pageview | cta_click | checkout_start | lead | order
  path?: string;
  ref?: string;
  ua?: string;
  meta?: Record<string, unknown>;
}) {
  return insertRow("events", {
    venture_slug: opts.venture,
    name: opts.name,
    path: opts.path ?? null,
    ref: opts.ref?.slice(0, 200) ?? null,
    ua_hash: opts.ua ? createHash("sha256").update(opts.ua).digest("hex").slice(0, 16) : null,
    meta: opts.meta ?? {},
  });
}

// Inline <script> body served by the template layout — beacons pageviews + data-track clicks.
export const trackerJs = `
(function(){var v=document.documentElement.getAttribute('data-venture');if(!v)return;
var send=function(n,m){try{navigator.sendBeacon('/api/e',JSON.stringify({n:n,p:location.pathname,r:document.referrer,m:m||{}}))}catch(e){}};
send('pageview');
document.addEventListener('click',function(e){var t=e.target.closest('[data-track]');if(t)send(t.getAttribute('data-track'))});
})();`;

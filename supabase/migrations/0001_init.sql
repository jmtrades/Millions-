-- Shared portfolio schema. Service-role writes only; no anon access.
create table if not exists m_ventures (
  slug text primary key,
  name text not null,
  status text not null default 'live', -- live | killed | scaled
  wave int,
  created_at timestamptz not null default now()
);

create table if not exists m_leads (
  id bigint generated always as identity primary key,
  venture_slug text not null references m_ventures(slug),
  email text not null,
  kind text not null default 'waitlist', -- waitlist | contact | qualified
  meta jsonb not null default '{}',
  created_at timestamptz not null default now()
);
create index if not exists m_leads_venture_idx on m_leads (venture_slug, created_at desc);

create table if not exists m_orders (
  id bigint generated always as identity primary key,
  venture_slug text not null references m_ventures(slug),
  stripe_session_id text unique not null,
  amount int not null,
  currency text not null,
  status text not null,
  email text,
  created_at timestamptz not null default now()
);
create index if not exists m_orders_venture_idx on m_orders (venture_slug, created_at desc);

create table if not exists m_events (
  id bigint generated always as identity primary key,
  venture_slug text not null,
  name text not null,
  path text,
  ref text,
  ua_hash text,
  meta jsonb not null default '{}',
  created_at timestamptz not null default now()
);
create index if not exists m_events_venture_idx on m_events (venture_slug, name, created_at desc);

alter table m_ventures enable row level security;
alter table m_leads enable row level security;
alter table m_orders enable row level security;
alter table m_events enable row level security;
-- No policies: anon/authenticated get nothing; service role bypasses RLS.

-- Scoreboard: numbers only, per venture.
create or replace view m_scoreboard as
select
  v.slug,
  v.status,
  v.wave,
  count(distinct e.id) filter (where e.name = 'pageview' and e.created_at > now() - interval '7 days') as visitors_7d,
  count(distinct l.id) filter (where l.created_at > now() - interval '7 days') as signups_7d,
  count(distinct o.id) as orders_total,
  coalesce(sum(o.amount) filter (where o.status = 'paid'), 0) / 100.0 as cash_collected
from m_ventures v
left join m_events e on e.venture_slug = v.slug
left join m_leads l on l.venture_slug = v.slug
left join m_orders o on o.venture_slug = v.slug
group by v.slug, v.status, v.wave;

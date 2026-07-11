-- Shared portfolio schema. Service-role writes only; no anon access.
create table if not exists ventures (
  slug text primary key,
  name text not null,
  status text not null default 'live', -- live | killed | scaled
  wave int,
  created_at timestamptz not null default now()
);

create table if not exists leads (
  id bigint generated always as identity primary key,
  venture_slug text not null references ventures(slug),
  email text not null,
  kind text not null default 'waitlist', -- waitlist | contact | qualified
  meta jsonb not null default '{}',
  created_at timestamptz not null default now()
);
create index if not exists leads_venture_idx on leads (venture_slug, created_at desc);

create table if not exists orders (
  id bigint generated always as identity primary key,
  venture_slug text not null references ventures(slug),
  stripe_session_id text unique not null,
  amount int not null,
  currency text not null,
  status text not null,
  email text,
  created_at timestamptz not null default now()
);
create index if not exists orders_venture_idx on orders (venture_slug, created_at desc);

create table if not exists events (
  id bigint generated always as identity primary key,
  venture_slug text not null,
  name text not null,
  path text,
  ref text,
  ua_hash text,
  meta jsonb not null default '{}',
  created_at timestamptz not null default now()
);
create index if not exists events_venture_idx on events (venture_slug, name, created_at desc);

alter table ventures enable row level security;
alter table leads enable row level security;
alter table orders enable row level security;
alter table events enable row level security;
-- No policies: anon/authenticated get nothing; service role bypasses RLS.

-- Scoreboard: numbers only, per venture.
create or replace view scoreboard as
select
  v.slug,
  v.status,
  v.wave,
  count(distinct e.id) filter (where e.name = 'pageview' and e.created_at > now() - interval '7 days') as visitors_7d,
  count(distinct l.id) filter (where l.created_at > now() - interval '7 days') as signups_7d,
  count(distinct o.id) as orders_total,
  coalesce(sum(o.amount) filter (where o.status = 'paid'), 0) / 100.0 as cash_collected
from ventures v
left join events e on e.venture_slug = v.slug
left join leads l on l.venture_slug = v.slug
left join orders o on o.venture_slug = v.slug
group by v.slug, v.status, v.wave;

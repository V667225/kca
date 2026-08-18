create extension if not exists pgcrypto;

create table if not exists public.assembly_members (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  county text not null,
  role text not null,
  bio text,
  photo_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.announcements (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  summary text,
  body text,
  published_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.resources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  url text,
  category text,
  created_at timestamptz not null default now()
);

create table if not exists public.reports (
  id uuid primary key default gen_random_uuid(),
  county text,
  category text,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

alter table public.assembly_members enable row level security;
alter table public.announcements enable row level security;
alter table public.resources enable row level security;
alter table public.reports enable row level security;

create policy "public can read assembly members"
on public.assembly_members for select to anon, authenticated using (true);

create policy "public can read announcements"
on public.announcements for select to anon, authenticated using (published_at is not null and published_at <= now());

create policy "public can read resources"
on public.resources for select to anon, authenticated using (true);

-- Reports intentionally have no public policies. A verified server-side reporting workflow
-- must validate, rate-limit, protect and route reports before allowing inserts.

-- Initial Vourcher-App schema scaffold. Review before applying to production.
create extension if not exists pgcrypto;

create table if not exists public.voucher_requests (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null check (char_length(customer_name) between 2 and 100),
  phone text not null check (char_length(phone) between 5 and 30),
  package_name text not null check (char_length(package_name) between 1 and 100),
  amount numeric(10,2) not null check (amount > 0),
  currency text not null default 'USD' check (currency = 'USD'),
  customer_note text,
  status text not null default 'pending'
    check (status in ('pending','payment_submitted','payment_confirmed','voucher_issued','rejected')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  request_id uuid not null references public.voucher_requests(id) on delete cascade,
  payment_method text not null default 'EcoCash' check (payment_method = 'EcoCash'),
  payment_reference text not null check (char_length(payment_reference) between 3 and 120),
  amount numeric(10,2) not null check (amount > 0),
  status text not null default 'submitted' check (status in ('submitted','confirmed','rejected')),
  created_at timestamptz not null default now(),
  unique (payment_method, payment_reference)
);

create table if not exists public.vouchers (
  id uuid primary key default gen_random_uuid(),
  request_id uuid not null references public.voucher_requests(id) on delete cascade,
  voucher_code text unique,
  issued_by uuid references auth.users(id),
  issued_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists voucher_requests_status_created_idx on public.voucher_requests(status, created_at desc);
create index if not exists payments_request_id_idx on public.payments(request_id);
create index if not exists vouchers_request_id_idx on public.vouchers(request_id);

alter table public.voucher_requests enable row level security;
alter table public.payments enable row level security;
alter table public.vouchers enable row level security;

-- Deliberately no public table policies yet. All writes must go through validated
-- Edge Functions, and admin reads require an authenticated role policy.
-- EcoCash reference submission is not proof of payment. Manual verification is required.

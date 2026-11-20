-- Guestbook table for the portfolio. Run once in the Supabase dashboard: SQL Editor > New query.
-- Visitors (the public "anon" role) can add entries but never see them until you approve them.
-- To approve: Table Editor > guestbook > tick the "approved" box on the row.

create table if not exists public.guestbook (
    id         bigint generated always as identity primary key,
    name       text not null check (char_length(name) between 1 and 60),
    message    text not null check (char_length(message) between 2 and 500),
    approved   boolean not null default false,
    created_at timestamptz not null default now()
);

alter table public.guestbook enable row level security;

-- Anyone can read approved entries
create policy "read approved entries" on public.guestbook
    for select to anon using (approved);

-- Anyone can add an entry, but only as unapproved
create policy "add unapproved entries" on public.guestbook
    for insert to anon with check (approved = false);

-- Visitors may only set name and message; id, approved and created_at stay server-controlled
revoke all on public.guestbook from anon;
-- (approved is readable so the read policy can use it; visitors only ever see approved rows anyway)
grant select (name, message, created_at, approved) on public.guestbook to anon;
grant insert (name, message) on public.guestbook to anon;

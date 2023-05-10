comment on schema public is '@graphql({"inflect_names": true})';



create table profiles (
    id uuid not null references auth.users on delete cascade,
    name text not null constraint profile_name_length_check CHECK (char_length(name) <= 100 and char_length(name) > 3) default 'Default Name',
    bio text not null constraint profile_bio_length_check CHECK (char_length(name) <= 1000) default '',
    username text constraint profile_username_length_check CHECK (char_length(name) <= 100 and char_length(name) > 3) unique,
    created_at timestamptz not null default now(),
    primary key (id)
);

alter table profiles enable row level security;

create policy "Profile is viewable by everyone"
    on profiles for select using (
        true
    );

create policy "Profile is editable by owner"
    on profiles for update using (
        auth.uid() = id
    );

-- inserts a row into public.users
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, "name", bio)
  values (new.id, 'Default name', '');
  return new;
end;
$$;

-- trigger the function every time a user is created
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();




create type post_status as enum ('draft', 'published');

create table posts (
    id uuid not null default gen_random_uuid(),
    title text not null,
    body jsonb not null,
    status post_status not null default 'draft',
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    profile_id uuid not null references profiles(id) on delete cascade,
    primary key (id)
);

alter table posts enable row level security;

create policy "Posts are viewable by everyone"
    on posts for select using (
        true
    );

create policy "Posts are editable by owner"
    on posts for update using (
        auth.uid() = profile_id
    );

create policy "Posts are insertable by owner"
    on posts for insert with check (
        auth.uid() = profile_id
    );

create policy "Posts are deletable by owner"
    on posts for delete using (
        auth.uid() = profile_id
    );

  
-- auto set updated_at
create function public.update_updated_at_column()
returns trigger
language plpgsql
as $$
begin
   if row(new.body) is distinct from row(old.body) or row(new.title) is distinct from row(old.title) then
      new.updated_at = now(); 
      return new;
   else
      return new;
   end if;
end;
$$;

create trigger on_post_update
    before update on posts
    for each row execute procedure public.update_updated_at_column();
drop policy "Posts are viewable by everyone" on posts;

create policy "Posts are viewable by everyone"
    on posts for select using (
        status = 'published' or auth.uid() = profile_id
    );
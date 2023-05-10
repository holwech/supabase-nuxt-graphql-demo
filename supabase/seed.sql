insert into auth.users (
    id,
    instance_id,
    aud,
    role,
    email,
    encrypted_password
) values (
    '4dcd10ba-f265-4c31-88da-a86697aba0ef',
    '00000000-0000-0000-0000-000000000000',
    'authenticated',
    'authenticated',
    'test@test.com',
    '$2a$10$5N06QfZQzj.sY1cO8gm9tuJ.ZXgrsk.Jzzx6B0A6iyvq3Qj93X37G'
);

insert into posts (
    id,
    title,
    body,
    status,
    profile_id
) values (
    '00000000-0000-0000-0000-000000000000',
    'Hello world',
    '{ "type": "doc", "content": [ { "type": "paragraph", "content": [ { "type": "text", "text": "This is post 1" } ] } ] }',
    'published',
    '4dcd10ba-f265-4c31-88da-a86697aba0ef'
);

insert into posts (
    id,
    title,
    body,
    status,
    profile_id
) values (
    '00000000-0000-0000-0000-000000000001',
    'Hello me',
    '{ "type": "doc", "content": [ { "type": "paragraph", "content": [ { "type": "text", "text": "This is post 2" } ] } ] }',
    'published',
    '4dcd10ba-f265-4c31-88da-a86697aba0ef'
);

insert into posts (
    id,
    title,
    body,
    status,
    profile_id
) values (
    '00000000-0000-0000-0000-000000000002',
    'Hello you',
    '{ "type": "doc", "content": [ { "type": "paragraph", "content": [ { "type": "text", "text": "This is post 3" } ] } ] }',
    'published',
    '4dcd10ba-f265-4c31-88da-a86697aba0ef'
);
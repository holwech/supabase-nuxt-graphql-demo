
# supabase-nuxt-graphql-demo

<img width="1470" alt="image" src="https://github.com/holwech/supabase-nuxt-graphql-demo/assets/7474295/ed8e7e61-59b4-4215-873a-e08b88fc9331">
<hr />

This is a simplified version of a blogging tool [I'm building](https://typzet.com). I might open-source the full project (if someone asks for it!).

<br />

Setting up the combination of Supabase, pg_graphql, Typescript and Nuxt 3 was such a pain, so I hope this can save you some time!

<br />

This project uses the following technologies:

- Supabase
- pg_graphql
- Nuxt 3 + Vue 3
- Tailwind
- Typescript
- urql + graphql codegen
- TipTap (text editing)

<br />

List of features:

- Write and publish blog posts
- Text editor with basic text editing functionality
- Profile and profile bio
- Front page with newest posts
- Auth, login and user management

## Setup
Make sure to install the dependencies:

```bash
npm install
```


## Development Server

Create a `.env` locally file and add the following content:

```
SUPABASE_URL="YOUR_DEV_SUPABASE_URL"
SUPABASE_KEY="YOUR_DEV_SUPABASE_ANON_KEY"
```

Start Supabase locally

```
supabase start
```

Run graphQL code generator:

```
npm run codegen:watch
```

or

```
npm run codegen
```

Reset the server (for example to run a migration) using

```
npm run database:reset
```


Start the development server on http://localhost:3000

```bash
npm run dev
```


## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

Deploy the frontend to your preferred cloud service. Remember to set the following variables in the cloud environment:

```
SUPABASE_URL="YOUR_SUPABASE_URL"
SUPABASE_KEY="YOUR_SUPABASE_ANON_KEY"
```

In addition, you need to deploy to Supabase. This is easy to do, and this [guide](https://supabase.com/docs/guides/getting-started/local-development#deploy-your-project) explains it fairly well. Basically, you need to run these two commands:

```
# You can get <project-id> from your project's dashboard URL: https://app.supabase.com/project/<project-id>
supabase link --project-ref <project-id>
supabase db remote commit
```

And you can use:

```
supabase db push
```

To update your Supabase instance.

Note that you also need to configure the url for authentication so that it points to the domain of your website. You can do this in the Supabase dashboard.


## Other
Upgrade Nuxt

```
npx nuxi upgrade
```

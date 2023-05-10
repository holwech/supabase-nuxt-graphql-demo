# typzet

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

Remember to enable GraphQL in your Supabase project.

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Other
Upgrade Nuxt

```
npx nuxi upgrade
```
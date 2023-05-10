// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase"],
    build: {
        transpile: ["@urql/vue"],
    },
    telemetry: false,
    runtimeConfig: {
        public: {
            SUPABASE_URL: process.env.SUPABASE_URL,
            SUPABASE_KEY: process.env.SUPABASE_KEY,
        },
    },
    pages: true,
    routeRules: {
        "/new-post/**": { ssr: false },
    },
    css: ["~/assets/main.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    //   additionalData: '@use "@/assets/_prose-mirror.scss" as *;'
                },
            },
        },
    },
});

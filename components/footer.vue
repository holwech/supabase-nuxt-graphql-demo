<template>
    <footer class="mt-auto flex flex-row justify-center py-2 text-gray-500">
        <span class="font-mono italic">Supademo</span>
        <span class="mx-1">•</span>
        <span>{{ new Date().getFullYear() }}</span>
        <span class="mx-1">•</span>
        <span>
            Built by
            <a
                target="_blank"
                class="hover:underline text-blue-400"
                href="https://holwech.com"
                >Joachim Holwech</a
            >
        </span>
        <span class="mx-1">•</span>
        <a
            target="_blank"
            class="hover:underline text-blue-400"
            href="https://github.com/holwech/supabase-nuxt-graphql-demo"
            >Code</a
        >
    </footer>
</template>

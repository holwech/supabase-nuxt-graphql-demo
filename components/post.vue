<script setup lang="ts">
import PostToHtml from "./postToHtml.vue";
import { type FragmentType, useFragment } from "../gql/fragment-masking";
import { PostFragment } from "~/queries/PostsQueries";

const props = defineProps<{
    post: FragmentType<typeof PostFragment>;
    shorten?: boolean;
}>();
const post = useFragment(PostFragment, props.post);
</script>

<template>
    <div class="flex flex-col gap-4 m-4 group">
        <div class="flex flex-row justify-between items-center">
            <NuxtLink
                :to="`/${post.profile?.id}/${post.id}`"
                class="font-bold hover:underline"
                :class="[shorten ? 'text-xl' : 'text-4xl']"
                >{{ post.title }}</NuxtLink
            >
        </div>
        <div class="text-sm text-gray-400">
            <NuxtLink
                @click.prevent.stop
                class="hover:underline"
                :to="`/${post.profile?.id}`"
                >{{ post.profile?.name }}</NuxtLink
            >
            <span class="mx-1">•</span>
            <span>{{ new Date(post.createdAt).toLocaleDateString() }}</span>
        </div>
        <PostToHtml :json="post.body" :shorten="shorten"></PostToHtml>
        <NuxtLink
            class="text-gray-500 hover:text-black italic opacity-0 group-hover:opacity-100 transition-all"
            :to="`/${post.profile?.id}/${post.id}`"
            v-if="shorten"
            >...see more</NuxtLink
        >
        <div class="flex flex-row gap-2">
            <!-- <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path>
            </svg> -->
            <!-- <NuxtLink :to="{ name: 'posts-id', params: { id: route.params.id } }">
                <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                </svg>
            </NuxtLink> -->
        </div>
    </div>
</template>

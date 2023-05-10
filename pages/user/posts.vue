<script setup lang="ts">
import { useQuery, useMutation } from "@urql/vue";
import { useFragment } from "~/gql/fragment-masking";
import { GetPosts, DeletePost, PostFragment } from "~/queries/PostsQueries";

// This will work in both `<script setup>` and `<script>`
definePageMeta({ layout: "default-empty" });

const user = useSupabaseUser();

const cursor = ref<string | null | undefined>(undefined);

const { data, fetching, error, isPaused } = await useQuery({
    query: GetPosts,
    variables: {
        filter: {
            profileId: {
                eq: user.value?.id,
            },
        },
        after: cursor,
    },
});

const posts = computed(() =>
    data.value?.postsCollection?.edges.map((t) =>
        useFragment(PostFragment, t.node)
    )
);

const deletePost = useMutation(DeletePost);
</script>

<template>
    <div class="flex flex-row gap-2 justify-center">
        <div class="basis-full md:basis-1/3 flex flex-col">
            <div
                class="flex flex-col gap-4 items-center justify-center"
                v-if="
                    data?.postsCollection &&
                    data?.postsCollection?.edges.length === 0
                "
            >
                <span>You have no posts yet.</span>
                <Button variant="gradient" to="/new-post">
                    <svg
                        class="h-4"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 6v12m6-6H6"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                    <span class="whitespace-nowrap"> Create new </span>
                </Button>
            </div>
            <div
                class="flex flex-col rounded-md border border-transparent p-4 group gap-2"
                v-else
                v-for="post in posts"
                :key="post.id"
            >
                <div class="flex flex-col">
                    <div class="flex flex-row justify-between">
                        <NuxtLink
                            :to="`/${user?.id}/${post.id}`"
                            class="text-lg font-bold hover:underline"
                            >{{ post.title }}</NuxtLink
                        >
                        <div class="flex flex-row items-center">
                            <NuxtLink :to="`/new-post/${post.id}`">
                                <svg
                                    class="w-7 h-7 text-gray-500 hover:text-gray-900 cursor-pointer hover:bg-gray-100 transition-colors rounded p-1"
                                    aria-hidden="true"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </svg>
                            </NuxtLink>
                            <Modal
                                title="Delete?"
                                accept-button-text="Delete post?"
                                decline-button-text="Cancel"
                                @click-accept="
                                    deletePost.executeMutation({
                                        postId: post.id,
                                    })
                                "
                            >
                                <template #button="buttonProps">
                                    <svg
                                        class="w-7 h-7 text-gray-500 hover:text-red-700 cursor-pointer hover:bg-red-200 transition-colors rounded p-1"
                                        aria-hidden="true"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        @click="buttonProps.openModal"
                                    >
                                        <path
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                    </svg>
                                </template>
                                <template #description
                                    >Are you sure you want to delete this post?
                                    Once it has been deleted it is lost
                                    forever.</template
                                >
                            </Modal>
                        </div>
                    </div>
                    <div class="text-sm text-gray-400 flex flex-row">
                        <div>
                            <span>{{
                                new Date(post.createdAt).toLocaleDateString()
                            }}</span>
                        </div>
                        <span class="mx-1"> • </span>
                        <span>{{ post.status }}</span>
                    </div>
                </div>
            </div>
            <Spinner class="self-center" v-if="fetching"></Spinner>
            <Button
                v-if="data?.postsCollection?.pageInfo?.hasNextPage"
                class="ml-2 mt-5 self-center"
                @click="cursor = data?.postsCollection?.pageInfo?.endCursor"
                >Load more</Button
            >
        </div>
    </div>
</template>

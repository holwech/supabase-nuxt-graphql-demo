<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { useFragment } from "~/gql/fragment-masking";
import { PostStatus } from "~/gql/graphql";
import { GetPosts, PostFragment } from "~/queries/PostsQueries";

// Workaround for bug
definePageMeta({ middleware: "get-id" });

const route = useRoute();
const user = useSupabaseUser();

const cursor = ref<string | null | undefined>(undefined);

const { data, fetching, error, isPaused } = await useQuery({
    query: GetPosts,
    variables: {
        filter: {
            profileId: {
                eq: route.params.user,
            },
            status: {
                eq: PostStatus.Published,
            }
        },
        after: cursor,
    },
});

const posts = computed(() =>
    data.value?.postsCollection?.edges.map((t) =>
        useFragment(PostFragment, t.node)
    )
);
</script>

<template>
    <div class="flex flex-col gap-5 place-self-center">
        <template v-if="posts && posts.length > 0">
            <post v-for="post in posts" :post="post" :shorten="true"></post>
            <Spinner class="self-center" v-if="fetching"></Spinner>
            <Button
                v-if="data?.postsCollection?.pageInfo?.hasNextPage"
                class="ml-2 mt-5 self-center"
                @click="cursor = data?.postsCollection?.pageInfo?.endCursor"
                >Load more</Button
            >
        </template>
        <template v-else>
            <div
                class="flex flex-col gap-4 items-center justify-center"
                v-if="user?.id === route.params.user"
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
            <div class="flex flex-col items-center gap-2" v-else>
                <div>This user has not posted anything yet.</div>
            </div>
        </template>
    </div>
</template>

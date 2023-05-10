<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { useFragment } from "~/gql/fragment-masking";
import { PostStatus } from "~/gql/graphql";
import { GetPostTitles, PostTitleFragment } from "~/queries/PostsQueries";

definePageMeta({ layout: "frontpage" });

const cursor = ref<string | null | undefined>(undefined);

const { data, fetching, error, isPaused } = await useQuery({
    query: GetPostTitles,
    variables: {
        status: PostStatus.Published,
        after: cursor,
    },
});

const postTitles = computed(() =>
    data.value?.postsCollection?.edges.map((t) =>
        useFragment(PostTitleFragment, t.node)
    )
);
</script>

<template>
    <div class="flex flex-col gap-4">
        <div>Newest posts</div>
        <hr />
        <div class="flex flex-col gap-2">
            <div
                class="rounded-md border border-transparent hover:cursor-pointer p-4 group hover:border-gray-100 transition-all"
                v-for="postTitle in postTitles"
                @click="
                    $router.push(
                        `${postTitle.profile?.id}/${postTitle.id}`
                    )
                "
            >
                <h1 class="text-lg font-bold">{{ postTitle.title }}</h1>
                <div class="text-sm text-gray-400">
                    <NuxtLink
                        @click.prevent.stop
                        class="hover:underline"
                        :to="`/${postTitle.profile?.id}`"
                        >{{ postTitle.profile?.name }}</NuxtLink
                    >
                    <span> • </span>
                    <span>{{
                        new Date(postTitle.createdAt).toLocaleDateString()
                    }}</span>
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

<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { GetPost } from "~/queries/PostsQueries";

// Workaround for bug
definePageMeta({ middleware: "get-id" });


const route = useRoute();

const { data, fetching, error, isPaused } = await useQuery({
    query: GetPost,
    variables: {
        id: route.params.id,
    },
});
</script>

<template>
    <div class="flex flex-col gap-16 border border-transparent">
        <post
            v-if="
                !fetching &&
                !error &&
                data?.postsCollection?.edges &&
                data?.postsCollection?.edges.length > 0
            "
            :post="data?.postsCollection?.edges[0].node"
        ></post>
    </div>
</template>

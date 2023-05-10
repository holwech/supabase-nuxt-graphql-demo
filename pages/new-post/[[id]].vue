<script setup lang="ts">
import { useMutation, useQuery } from "@urql/vue";
import { PostStatus } from "~/gql/graphql";
import {
    GetPost,
    InsertPost,
    ChangePostStatus,
    PostFragment,
    UpdatePost,
} from "~/queries/PostsQueries";
import { useFragment } from "~/gql/fragment-masking";

definePageMeta({ layout: "default-empty" });

const insertPostMutation = useMutation(InsertPost);
const changePostStatusMutation = useMutation(ChangePostStatus);
const updatePost = useMutation(UpdatePost);

const debounce = debounceFactory(1000);
const title = ref("");
const body = ref({
    type: "doc",
    content: [
        {
            type: "paragraph",
            content: [{ type: "text", text: "Start writing..." }],
        },
    ],
});
const saving = ref(false);
const saved = ref(false);
const published = ref(false);
const user = useSupabaseUser();
const route = useRoute();
const router = useRouter();
const postId = ref(route.params.id);
let post = ref(useFragment(PostFragment, undefined));

const insertPost = async () => {
    const { data, error } = await insertPostMutation.executeMutation({
        title: title.value,
        body: JSON.stringify(body.value),
        profileId: user.value?.id,
    });
    postId.value = data?.insertIntoPostsCollection?.records[0].id;
    if (!error) saved.value = true;
    router.push(`/new-post/${postId.value}`);
};

const setStatus = async (status: PostStatus) => {
    saving.value = true;
    const { error } = await changePostStatusMutation.executeMutation({
        status: status,
        id: postId.value,
    });
    if (!error) {
        published.value = true;
        saved.value = true;
    }
    saving.value = false;
};

watch([title, body], async () => {
    if (saving.value === true) return;
    debounce(async () => {
        saving.value = true;
        if (postId.value) {
            const { error } = await updatePost.executeMutation({
                title: title.value,
                body: JSON.stringify(body.value),
                postId: postId.value,
            });
            if (!error) saved.value = true;
        } else {
            await insertPost();
        }
        saving.value = false;
    });
});

if (!route.params.id) {
    await insertPost();
}

const { data, fetching, error, isPaused } = await useQuery({
    query: GetPost,
    variables: {
        id: route.params.id,
    },
});

post = computed(() =>
    useFragment(PostFragment, data.value?.postsCollection?.edges[0].node)
);

title.value = post.value?.title ?? title.value;
if (post.value?.body) {
    body.value = JSON.parse(post.value.body);
}
</script>

<template>
    <!-- Create a new post form with title and text body using an editable div -->
    <div class="flex flex-row justify-center grow">
        <div class="flex flex-col gap-5 basis-full md:basis-1/3 mx-2">
            <ClientOnly>
                <Editor v-model="body" v-model:title="title"></Editor>
            </ClientOnly>
            <hr />
            <div class="flex flex-row items-center justify-between gap-2">
                <Button
                    class="self-start justify-self-start place-self-start"
                    to="/user/posts"
                    ><svg
                        class="w-6 h-6 mr-1"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                    Back to posts
                </Button>
                <div class="flex flex-row items-center gap-2">
                    <Spinner v-if="saving"></Spinner>
                    <div
                        class="flex flex-row items-center text-green-500"
                        v-if="saved"
                    >
                        <svg
                            class="w-5 h-5 mr-1"
                            aria-hidden="true"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.7"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.5 12.75l6 6 9-13.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                        </svg>
                        Draft saved
                    </div>

                    <Button
                        v-if="(data?.postsCollection?.edges[0].node as any).status === PostStatus.Published"
                        @click="setStatus(PostStatus.Draft)"
                        >Unpublish</Button
                    >
                    <Button
                        v-else
                        variant="gradient"
                        @click="setStatus(PostStatus.Published)"
                        >Publish</Button
                    >
                </div>
            </div>
        </div>
    </div>
</template>

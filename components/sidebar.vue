<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { ProfileFragment } from "~/queries/ProfilesQueries";
import { GetProfile } from "~/queries/ProfilesQueries";
import { useFragment } from "~/gql/fragment-masking";
import DOMPurify from "isomorphic-dompurify";

const paramUser = useState("routeParamUser");

const { data, fetching, error, isPaused, executeQuery } = await useQuery({
    query: GetProfile,
    variables: {
        id: paramUser,
    },
});

// Specify a configuration directive
var config = {
    ALLOWED_TAGS: ["a"], // only <P> and text nodes
    KEEP_CONTENT: true, // remove content from non-allow-listed nodes too
};

function linkify(message: string) {
  if(!message) return;
 
  var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
  return message.replace(urlRegex, function (url) {
    var hyperlink = url;
    if (!hyperlink.match('^https?:\/\/')) {
      hyperlink = 'http://' + hyperlink;
    }
    return '<a target="_blank" class="text-blue-600 hover:underline" href="' + hyperlink + '" target="_blank" rel="noopener noreferrer">' + url + '</a>'
  });
}

const profile = computed(() =>
    useFragment(ProfileFragment, data.value?.profilesCollection?.edges[0].node)
);

// Clean HTML string and write into our DIV
var cleanBio = computed(() =>
    profile.value?.bio
        ? linkify(DOMPurify.sanitize(profile.value?.bio, config))
        : ""
);
</script>

<template>
    <div class="flex flex-col gap-8">
        <div class="flex flex-row items-end gap-2">
            <div
                class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full"
            >
                <svg
                    class="absolute w-12 h-12 text-gray-500 -left-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </div>
            <h2>
                {{ profile?.name }}
            </h2>
        </div>
        <div>
            <h1 class="font-bold text-gray-500">About</h1>
            <p
                class="text-gray-500 italic whitespace-pre-wrap"
                v-html="cleanBio"
            ></p>
        </div>
        <div class="flex flex-col gap-2">
            <NuxtLink :to="`/${paramUser}`">🏠 Home</NuxtLink>
        </div>
    </div>
</template>

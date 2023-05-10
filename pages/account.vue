<script setup lang="ts">
import { useMutation, useQuery } from "@urql/vue";
import { useFragment } from "~/gql/fragment-masking";
import {
    GetProfile,
    UpdateProfile,
    ProfileFragment,
} from "~/queries/ProfilesQueries";

definePageMeta({ layout: "frontpage" });

const user = useSupabaseUser();
const supabase = useSupabaseClient();
const debounce = debounceFactory(1000);

const saving = ref(false);
const saved = ref(false);

const { data, error } = await useQuery({
    query: GetProfile,
    variables: { id: user.value?.id },
});

const updateProfile = useMutation(UpdateProfile);

const profile = computed(() =>
    useFragment(ProfileFragment, data.value?.profilesCollection?.edges[0].node)
);

const name = ref(profile.value?.name);
const bio = ref(profile.value?.bio);
const username = ref(profile.value?.username);

watch([name, bio, username], async () => {
    debounce(async () => {
        saving.value = true;
        const { error } = await updateProfile.executeMutation({
            id: user.value?.id,
            name: name.value ?? "",
            bio: bio.value ?? "",
            username: username.value ?? "",
        });
        saved.value = !error ? true : false;
        saving.value = false;
    });
});
</script>

<template>
    <div v-if="user">
        <div class="flex flex-col gap-4 items-center">
            <div class="flex flex-col items-center gap-4">
                <div class="w-full">
                    <label class="text-sm text-gray-600 ml-6" for="name"
                        >Name</label
                    >
                    <input
                        class="bg-gray-100 px-6 py-1 rounded-xl focus:outline-none focus:outline-gray-700 w-full"
                        placeholder="Name"
                        v-model="name"
                    />
                </div>
                <div class="w-full">
                    <label class="text-sm text-gray-600 ml-6" for="username"
                        >Username</label
                    >
                    <input
                        class="bg-gray-100 px-6 py-1 rounded-xl focus:outline-none focus:outline-gray-700 w-full"
                        placeholder="Username"
                        v-model="username"
                    />
                </div>
                <div class="w-full flex flex-col">
                    <label class="text-sm text-gray-600 ml-6" for="bio"
                        >Bio</label
                    >
                    <textarea
                        class="bg-gray-100 px-6 py-1 rounded-xl focus:outline-none focus:outline-gray-700 w-full"
                        placeholder="Bio"
                        v-model="bio"
                    />
                    <span class="text-sm text-gray-500 self-end"
                        >{{ bio?.length ?? 0 }}/1000</span
                    >
                </div>
                <div class="flex flex-row justify-end">
                    <Spinner :class="{ invisible: !saving }"></Spinner>
                    <div
                        class="flex flex-row items-center text-green-500"
                        :class="{ invisible: !saved }"
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
                        Saved
                    </div>
                </div>

                <div class="flex flex-row gap-4 items-center">
                    <div class="flex flex-col">
                        <span class="text-lg font-bold">{{ user.email }}</span>
                        <span class="text-sm text-gray-600">
                            {{ user.user_metadata.full_name }}
                        </span>
                    </div>
                </div>
                <div class="flex flex-row gap-4 items-center">
                    <span class="text-sm text-gray-600">Joined</span>
                    <span class="text-sm text-gray-600">
                        {{ new Date(user.created_at).toLocaleDateString() }}
                    </span>
                </div>
            </div>
            <div>
                <Button @click="supabase.auth.signOut()">Log out</Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "frontpage" });

const supabase = useSupabaseClient();

const loading = ref(false);
const email = ref("");
const submitted = ref(false);

const handleLogin = async () => {
    try {
        loading.value = true;
        const { error } = await supabase.auth.signInWithOtp({
            email: email.value,
        });
        if (error) throw error;
        submitted.value = true;
    } catch (error: any) {
        alert(error?.error_description || error?.message);
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <div class="row flex-col items-center flex gap-4" v-if="!submitted">
        <p>Sign in via magic link with your email below</p>
        <div>
            <input
                type="email"
                placeholder="Your email"
                v-model="email"
                class="bg-gray-100 px-6 py-1 rounded-xl focus:outline-none focus:outline-gray-700 w-full"
                @keydown.enter="handleLogin"
            />
        </div>
        <div>
            <Button @click="handleLogin">{{
                loading ? "Loading" : "Send magic link"
            }}</Button>
        </div>
    </div>
    <div class="row flex-col items-center flex gap-4" v-else>
        Check your email for the login link!
        <NuxtLink class="text-sm" to="/">Go back home</NuxtLink>
    </div>
</template>

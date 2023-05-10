<script lang="ts" setup>
import { computed, ref, toRefs, type Ref } from "vue";

const props = defineProps<{
    to?: string;
    variant?: string;
    shadow?: boolean;
    disabled?: boolean;
}>();

const { variant, disabled } = toRefs(props);
const selectedVariant = computed(() =>
    variant ? variant.value ?? "basic" : "basic"
);

const variants: Ref<{ [key: string]: string }> = ref({
    basic: "h-fit flex flex-row py-1 px-3 rounded-lg items-center hover:bg-gray-100 transition-colors w-fit",
    "basic-dark": "h-fit flex flex-row py-1 px-3 rounded-lg items-center bg-gray-100 hover:bg-gray-200 transition-colors w-fit",
    danger: "h-fit flex flex-row py-1 px-3 rounded-lg items-center hover:bg-gray-100 transition-colors w-fit bg-red-200 text-red-700 hover:bg-red-300",
    gradient: "h-fit flex flex-row py-1 px-3 rounded-lg items-center transition-colors w-fit bg-gradient-to-br from-green-400 to-blue-400 hover:bg-gradient-to-bl text-white transition",
});

const classObject = computed(() => [
    variants.value[selectedVariant.value],
    {
        shadow: props.shadow,
    },
    disabled?.value ? "cursor-default bg-gray-50 cursor-default" : "cursor-pointer",
]);
</script>

<template>
    <NuxtLink :class="classObject" v-if="to" :to="to"><slot></slot></NuxtLink>
    <div :class="classObject" v-else>
        <slot></slot>
    </div>
</template>
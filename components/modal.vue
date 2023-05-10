<script lang="ts" setup>
import { ref } from "vue";
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from "@headlessui/vue";

const props = defineProps<{
    title: string;
    acceptButtonText: string;
    declineButtonText: string;
}>();
const emit = defineEmits(["clickAccept", "clickDecline"]);

const isOpen = ref(false);

const closeModal = () => {
    isOpen.value = false;
    emit("clickDecline");
};
const openModal = () => {
    isOpen.value = true;
};
const clickAccept = () => {
    isOpen.value = false;
    emit("clickAccept");
};
</script>

<template>
    <slot name="button" :openModal="openModal"></slot>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div
                    class="flex min-h-full items-center justify-center p-4 text-center"
                >
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95"
                    >
                        <DialogPanel
                            class="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all"
                        >
                            <DialogTitle
                                as="h3"
                                class="text-lg font-medium leading-6 text-gray-900"
                            >
                                {{ title }}
                            </DialogTitle>
                            <div class="mt-2">
                                <p class="text-sm text-gray-500">
                                    <slot name="description"></slot>
                                </p>
                            </div>

                            <div class="mt-4 flex flex-row gap-2">
                                <Button variant="danger" @click="clickAccept">
                                    {{ acceptButtonText }}
                                </Button>
                                <Button @click="closeModal">
                                    {{ declineButtonText }}
                                </Button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

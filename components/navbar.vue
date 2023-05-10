<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/24/solid";

const user = useSupabaseUser();
const route = useRoute();
</script>

<template>
    <div class="flex flex-row py-4 px-6 justify-between items-center">
        <div class="flex gap-20 items-center">
            <NuxtLink to="/" class="text-xl font-mono"><i>typzet</i></NuxtLink>
            <!-- <div>
                <input placeholder="Search..." class="bg-gray-100 px-4 py-1 rounded-xl focus:outline-none" />
            </div> -->
        </div>
        <ClientOnly>
            <div
                class="md:flex flex-row gap-1 items-center hidden"
                v-if="user"
            >
                <Button
                    to="/new-post"
                    variant="gradient"
                    v-if="route.name != 'new-post'"
                >
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
                    <span class="whitespace-nowrap"> New post </span>
                </Button>
                <Button :to="'/' + user.id">View blog</Button>
                <Button to="/user/posts">Your posts</Button>
                <Button to="/account">Account</Button>
            </div>
            <div class="flex-row hidden md:flex" v-else>
                <Button to="/login">Sign-up</Button>
                <Button to="/login">Login</Button>
            </div>
            <Menu as="div" class="relative inline-block text-left md:hidden">
                <div>
                    <MenuButton
                        class="h-fit flex flex-row py-1 px-3 rounded-lg items-center hover:bg-gray-100 transition-colors w-fit"
                    >
                        Menu
                        <ChevronDownIcon
                            class="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                            aria-hidden="true"
                        />
                    </MenuButton>
                </div>

                <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                >
                    <MenuItems
                        class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                        <div class="px-1 py-1" v-if="user">
                            <MenuItem v-slot="{ active }">
                                <Button
                                    to="/new-post"
                                    class="group flex w-full items-center rounded-md px-2 py-2 text-sm"
                                    v-if="route.name != 'new-post'"
                                >
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
                                    <span class="whitespace-nowrap">
                                        New post
                                    </span>
                                </Button>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                                <Button
                                    class="group flex w-full items-center rounded-md px-2 py-2 text-sm"
                                    :to="'/' + user.id"
                                    >View blog</Button
                                >
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                                <Button
                                    class="group flex w-full items-center rounded-md px-2 py-2 text-sm"
                                    to="/user/posts"
                                    >Your posts</Button
                                >
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                                <Button
                                    class="group flex w-full items-center rounded-md px-2 py-2 text-sm"
                                    to="/account"
                                    >Account</Button
                                >
                            </MenuItem>
                        </div>
                        <div class="px-1 py-1" v-else>
                            <MenuItem v-slot="{ active }">
                                <Button
                                    class="group flex w-full items-center rounded-md px-2 py-2 text-sm"
                                    to="/login"
                                    >Sign-up</Button
                                >
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                                <Button
                                    class="group flex w-full items-center rounded-md px-2 py-2 text-sm"
                                    to="/login"
                                    >Login</Button
                                >
                            </MenuItem>
                        </div>
                    </MenuItems>
                </transition>
            </Menu>
        </ClientOnly>
    </div>
</template>

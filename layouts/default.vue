<template>
    <div class="flex flex-col min-h-screen gap-20">
        <Navbar></Navbar>
        <div class="grid grid-cols-1 md:grid-cols-3 mx-2 gap-5">
            <div class="col-span-1 pl-5 pr-20">
                <Sidebar></Sidebar>
            </div>
            <hr class="md:hidden col-span-1" />
            <div class="col-span-1">
                <slot></slot>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<template>
    <div class="flex flex-col min-h-screen gap-20">
        <Navbar></Navbar>
        <div class="flex flex-row mx-2 gap-5 justify-center">
            <div class="md:basis-1/3 basis-full">
                <slot></slot>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
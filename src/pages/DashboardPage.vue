<script setup lang="ts">
// useRoute, useHead, and HelloWorld are automatically imported. See vite.config.ts for details.
const route = useRoute()

useHead({
    title: route.meta.title,
    meta: [
        {
            property: 'og:title',
            content: route.meta.title,
        },
        {
            name: 'twitter:title',
            content: route.meta.title,
        },
    ],
})

</script>

<template>
     <section class="text-center">
        <Nav/>
        <div class="p-5 bg-[#F7F8FE]">
            <Table/>
        </div>
    </section>
</template>

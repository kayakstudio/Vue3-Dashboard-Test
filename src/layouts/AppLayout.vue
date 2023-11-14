<script setup lang="ts">
import AppLayoutDefault from './AppDashboardLayout.vue';

const layout = ref()
const route = useRoute()

watch(
    () => route.meta?.layout as string | undefined,
    async (metaLayout) => {
        try {
            const component = metaLayout && await import(/* @vite-ignore */ `./${metaLayout}.vue`)
            layout.value = markRaw(component?.default || AppLayoutDefault)
        } catch (e) {
            layout.value = markRaw(AppLayoutDefault)
        }
    },
    { immediate: true }
)
</script>

<template>
  <component :is="layout"> <router-view /> </component>
</template>
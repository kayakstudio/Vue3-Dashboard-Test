<script lang="ts">
import CircleProgress from "vue3-circle-progress";
import "vue3-circle-progress/dist/circle-progress.css";
export default {
    name: "App",
    components: {
        CircleProgress: CircleProgress,
    },
};

</script>

<template>
    <CircleProgress  :percent="40" :size="43" border-width="4" border-bg-width="4" fill-color="#6CCB4B" empty-color="#E5E8F7"/>
</template>
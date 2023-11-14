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
    <div class="relative">
        <CircleProgress  :percent="40" :size="43" border-width="5" border-bg-width="5" fill-color="#6CCB4B" empty-color="#E5E8F7" linecap=":none"/>
        <span class="absolute top-[50%] left-[50%] text-opacity-60 text-xs text-text font-normal translate-x-[-50%] translate-y-[-50%] z-30 w-full text-center flex items-center justify-center">30%</span>
    </div>
</template>
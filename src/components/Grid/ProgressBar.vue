<script lang="ts" >
import CircleProgress from "vue3-circle-progress";
import "vue3-circle-progress/dist/circle-progress.css";
export default {
    name: "App",
    components: {
        CircleProgress: CircleProgress,
    },
};

</script>
<script lang="ts" setup>

const props = defineProps<{
    progress: Number;
    status: Number;
}>();
const colors = ['#6CCB4B', '#E5E8F7', '#CB4B4B', '#DD9553'];

</script>

<template>
    <div class="relative">
        <CircleProgress  :percent="progress" :size="43" border-width="5" border-bg-width="5" :fill-color="colors[status-1]" empty-color="#E5E8F7" linecap=":none"/>
        <span class="absolute top-[50%] left-[50%] text-opacity-60 text-xs text-text font-normal translate-x-[-50%] translate-y-[-50%] z-30 w-full text-center flex items-center justify-center">            
            <p  v-if="status !== 2 && status !== 3 && status !== 4" >{{ progress }}%</p>
            <Draft v-if="status===2"/>
            <Stopped v-if="status === 3"/>
            <Pause v-if="status === 4"/>
        </span>
    </div>
</template>
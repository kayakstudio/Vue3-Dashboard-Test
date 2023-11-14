<script lang="ts" setup>
const props = defineProps<{

    status: Number;
    title:String;
    date:String;
    sequence:Number;
    statusText:String;
}>();
const colors = ['#6CCB4B', '#B7BBD4', '#CB4B4B', '#DD9553'];
</script>

<template>
    <div class="flex flex-col">
        <h4 class="flex items-center text-title font-bold text-base capitalize w-full mb-2">
            {{ title }}
            <a href="#" class="hover:opacity-50 transition-opacity ease-linear duration-300"><Link class="ml-3"/></a>
        </h4>
        <ul class="flex items-center">
            <li class="text-sm text-text font-normal flex flex-wrap items-center text-opacity-60">
                <span class="rounded-full w-[6px] h-[6px] block mr-2" :style="'background-color:'+colors[status-1]"></span>
               {{ statusText }} on {{ date }}
                <span class="h-2.5 bg-[#9698A3] bg-opacity-70 w-[1px] mx-2"></span> 
                {{ sequence }} Sequences
            </li>
        </ul>
    </div>
    

</template>

import { title } from 'process';
<script lang="ts" setup>
const props = defineProps<{

    item:Object;
    warning:Boolean;
}>();
const colors = ['#6E58F1', '#EEB728', '#BF51C1', '#51C1C1','#2CDB28'];
</script>

<template>
    <div class="flex flex-col justify-start items-start mr-12 min-w-[70px]">
        <strong class="text-xl font-normal flex flex-row items-end" :style="'color:' + colors[item.type - 1]">
            {{ item.count }}
            <span v-if="item.percent" class="text-opacity-60 text-xs text-text bottom-1 relative ml-1">{{ item.percent }}%</span>
        </strong>
        <p class="text-opacity-60 text-sm capitalize text-text mt-1 flex items-center">
            {{ item.title }}
            <Info v-if="item.type === 5 && warning !== true " class="ml-1"/>
            <InfoFill v-if="warning === true && item.type === 5" class="ml-1"/>
            <Warning v-if="warning === true && item.type !== 5 && item.type !== 1" class="ml-1"/>
        </p>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    item: Object;
    index:Number;
}>();
</script>

<template>
  <li class="nav-item px-5  cursor-pointer py-2.5 mb-2.5 text-sm flex items-center border-white hover:bg-menu-active transition-colors duration-200 ease-linear border-l-[3px] inse hover:border-primary" :class="item.isActive ? 'bg-menu-active !border-primary' : 'bg-white'">
    <span :class="item.isActive ? 'bg-primary ' : 'bg-border'" class="rounded-md mr-5 w-[20px] h-[20px] flex items-center justify-center -ml-[3px]">
        <Leads v-if="index===0"/>
        <Inbox v-if="index === 1"/>
        <Campaigns v-if="index === 2"/>
    </span>
    <a :href="item.link" class="text-text">
      {{ item.title }}
    </a>
  </li>
</template>
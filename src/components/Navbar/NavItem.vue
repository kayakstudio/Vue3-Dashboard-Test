
<script setup lang="ts">

const props = defineProps<{
    item: Object;
    index: Number;
}>();
</script>

<template>
  <li class="p-5 text-base font-medium text-text relative">
    <a href="#" class="text-text hover:text-primary transition-colors duration-300 ease-linear">
      {{ item.title }} ({{ item.count }})
    </a>
    <Indicator v-if="item.isActive" class="absolute left-[50%] bottom-0 translate-x-[-50%]"/>
  </li>
</template>
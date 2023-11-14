<script setup lang="ts">
// useStore, and computed are automatically imported. See vite.config.ts for details.
import {menu} from '../data';
</script>

<template>
  <aside class="w-56 min-w-[230px] bg-white border-r-[1px] border-r-border border-border  pt-2.5">
    <ul>
      <MenuItem
        v-for="(item,index) in menu"
        :key="item.id"
        :index="index"
        :item="item"
      />
    </ul>
  </aside>
</template>

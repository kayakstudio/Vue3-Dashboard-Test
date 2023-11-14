<script setup lang="ts">
// useStore, and computed are automatically imported. See vite.config.ts for details.
import {menu} from '../data';
</script>

<template>
  <aside class="w-56 bg-white border-r-[1px] border-r-border border-border h-screen pt-2.5">
    <ul>
      <NavItem
        v-for="(item,index) in menu"
        :key="item.id"
        :index="index"
        :item="item"
      />
    </ul>
  </aside>
</template>

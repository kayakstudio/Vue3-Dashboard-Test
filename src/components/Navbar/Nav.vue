<script setup lang="ts">
    import { nav } from '../../data';
    console.log(nav)
</script>


<template>
    <nav class="border-b-[1px] border-border">            
        <ul class="flex justify-start items-center">
            <NavItem
                v-for="(item, index) in nav"
                :key="item.id"
                :index="index"
                :item="item"
            />
        </ul>
    </nav>
</template>
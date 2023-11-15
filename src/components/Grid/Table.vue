
import NavItemVue from '../menu/NavItem.vue';

import NavItemVue from '../menu/NavItem.vue';

import NavItemVue from '../menu/NavItem.vue';
<script setup lang="ts">
import {list} from '../../data';

</script>

<template>
    <table class="w-full border-black border-1">
        <GridHeader/>
        <tbody class="bg-white">
            <tr v-for="item in list"  :key="item.id" class="shadow-table">
                <td class="px-3 py-5 align-middle text-left w-[50px]">
                    <input id="" type="checkbox" name="check" class="bg-white !outline-none !appearance-none border-border border-1 rounded-md">
                </td>
                <td class="px-3 py-5 align-middle text-left">
                    <div class="flex justify-start items-center">
                        <ProgressBar :progress="item.progress" :status="item.status"/>
                        <Details class="ml-7" :title="item.title" :date="item.date" :status="item.status" :status-text="item.statusText" :sequence="item.sequence"/>                          
                    </div>
                </td>
                <td class="p-0 py-5 align-middle text-left">
                    <div class="flex items-center justify-start">
                        <Report v-for="obj in item.report" :key="obj.title" :item="obj" :warning="item.warning"/>
                    </div>
                </td>
                <td class="px-3 py-5 align-middle text-right">
                    <ActionsMenu/>
                </td>
            </tr>
        </tbody>
    </table>
</template>
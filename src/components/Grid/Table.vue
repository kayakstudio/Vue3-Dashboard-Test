
<template>
    <table class="w-full border-black border-1">
        <GridHeader/>
        <tbody>
            <tr class="shadow-table">
                <td class="px-3 py-5 align-middle text-left w-[50px]">
                    <input id="" type="checkbox" name="check" class="bg-white !outline-none !appearance-none border-border border-1 rounded-md">
                </td>
                <td class="px-3 py-5 align-middle text-left">
                    <div class="flex justify-start items-center">
                        <ProgressBar/>
                        <Details/>
                          
                    </div>
                </td>
                <td>
                    <div class="flex items-center justify-between">
                        <Report/>
                    </div>
                </td>
                <td></td>
            </tr>
        </tbody>
    </table>
</template>
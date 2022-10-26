<template>
    <div class="mt-1 pl-6 pr-6 space-y-6" v-for="(menuItem, index) in menuList" :key="index">
        <div class="text-xs mt-5">{{ menuItem.name }}</div>
        <div class="title-content" v-for="(item, index) in menuItem.menus" :key="index">
            <div class="flex hover:bg-gray-50 p-1 cursor-pointer text-sm">
                <IconParkVue class="mt-1" :icon="item.icon"></IconParkVue>
                <div class="ml-1">{{ item.name }}</div>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { useMenuList } from './hook/useMenu'
import IconParkVue from '../../common/IconPark.vue';

const { menuList } = useMenuList();
console.log(menuList);

</script>
<style lang='scss' scoped>

</style>
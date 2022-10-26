<template>
    <div class="mt-10 pl-6 pr-6 space-y-6" v-for="(menuItem, index) in menuList" :key="index">
        <div class="text-xs">{{ menuItem.name }}</div>
        <div class="title-content" v-for="(item, index) in menuItem.menus" :key="index">
            
            <IconParkVue :icon="item.icon"></IconParkVue>
            <div>{{ item.name }}</div>
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
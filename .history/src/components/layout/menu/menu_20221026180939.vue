<template>
    <div class="mt-10 pl-6 pr-6 s" v-for="(menuItem, index) in menuList" :key="index">
        <h3>{{ menuItem.name }}</h3>
        <div class="title-content" v-for="(item, index) in menuItem.menus" :key="index">
            <IconParkVue :icon="item.icon"></IconParkVue>
            <h3>{{ item.name }}</h3>
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
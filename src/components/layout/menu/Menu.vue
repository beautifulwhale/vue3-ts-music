<template>
    <div class="mt-1 pl-6 pr-6 space-y-6" v-for="(menuItem, index) in menuList" :key="index">
        <div class="text-xs mt-10 text-skin-primary">{{ menuItem.name }}</div>
        <div v-for="(item, index) in menuItem.menus" :key="index">
            <div class="flex hover:bg-slate-200 p-1 pl-2 cursor-pointer text-sm rounded" @click="skipMenu(item)"
                :class="{ 'active': currentKey === item.key }">
                <IconParkVue class="mt-1" :icon="item.icon"></IconParkVue>
                <div class="ml-1 text-skin-primary">{{ item.name }}</div>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { useMenuList } from './hook/useMenu'
import { Menu } from './config/types'
import { useRouter } from 'vue-router';
import IconParkVue from '../../common/IconPark.vue';
const router = useRouter();
const { menuList, currentKey } = useMenuList();

const skipMenu = (item: Menu) => {
    router.push({ name: item.key, replace: true });
};
</script>
<style lang='scss' scoped>
.active {
    @apply bg-gradient-to-r from-teal-400 to-emerald-400  cursor-default;
}
</style>
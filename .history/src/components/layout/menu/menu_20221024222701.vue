<template>
    <div>
        <h1>123</h1>
        <div v-for="(menuItem, index) in menuList" :key="index">
           <h3>{{menuItem.name}}</h3> 
           <div class="title-content" v-for="(item, index) in menuItem.menus" :key="index">
            <h3>{{item.name}}</h3>
           </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { useMenuList } from './hook/useMenu'

const { menuList } = useMenuList();
console.log(menuList);

</script>
<style lang='less' scoped>

</style>
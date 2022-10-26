<template>
    <div>
        <h1>123</h1>
        <div v-for="(menuItem, index) in menuList" :key="index">
           <h3>{{menuItem.name}}</h3> 
           <div class="title-content"></div>
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
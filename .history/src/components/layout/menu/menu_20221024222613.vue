<template>
    <div>
        <h1>123</h1>
        <div v-for="(menuItem, index) in menuList" :key="index">
           <h3></h3> 
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
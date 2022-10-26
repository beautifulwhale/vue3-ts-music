<template>
    <div>
        <h1>123</h1>
        <div v-for="(menuItem, index) in menuList" :key="index">
            {{menuItem.name}}
        </div>
    </div>
</template>

<script lang='ts' setup>
// import { useMenuList } from './hook/useMenu'
import { } from ''

const { menuList } = useMenuList();
console.log(menuList);

</script>
<style lang='less' scoped>

</style>
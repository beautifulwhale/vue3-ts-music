<template>
    <div>
        <h1>123</h1>
        <div v-for="(item, index) in items" :key="index" :key="index">
            {{menuItem.name}}
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
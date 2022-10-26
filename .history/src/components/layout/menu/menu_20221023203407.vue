<template>
    <div v-for="(item, index) in menuList" :key="item.ke">

    </div>
</template>

<script lang='ts'>
import { useMenuList } from './hook/useMenu'

const { menuList } = useMenuList()

</script>
<style lang='less' scoped>

</style>
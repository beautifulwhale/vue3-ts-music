<template>
    <div>
        <div v-for="menuItem in menuList" :key="item.key">
            {{menuItem.name}}
        </div>
    </div>
</template>

<script lang='ts'>
import { useMenuList } from './hook/useMenu'

const { menuList } = useMenuList()

</script>
<style lang='less' scoped>

</style>
<template>
    <div>
        <div v-for="menu in menuList" :key="item.key">
            {{item.name}}
        </div>
    </div>
</template>

<script lang='ts'>
import { useMenuList } from './hook/useMenu'

const { menuList } = useMenuList()

</script>
<style lang='less' scoped>

</style>
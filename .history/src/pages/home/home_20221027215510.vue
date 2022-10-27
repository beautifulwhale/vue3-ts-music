<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">
                <Menu></Menu>
            </el-aside>
            <el-container>
                <el-header>
                    <headerVue></headerVue>
                </el-header>
                <el-main>
                    <el-scrollbar>
                        <RouterView></RouterView>
                    </el-scrollbar>
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>
  
<script setup lang='ts'>
import Menu from '@/components/layout/menu/Menu.vue'
import headerVue from '@/components/layout/header/header.vue';
</script>
<style lang='scss' scoped>
.common-layout {
    @apply w-full h-screen
}
</style>
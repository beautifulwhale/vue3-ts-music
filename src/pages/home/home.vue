<template>
    <div class="common-layout bg-skin-bg">
        <el-container>
            <el-aside width="200px">
                <el-scrollbar>
                    <Menu></Menu>
                </el-scrollbar>
            </el-aside>
            <el-container class="containers">
                <el-header>
                    <headerVue></headerVue>
                </el-header>
                <el-main>
                    <el-scrollbar>
                        <RouterView></RouterView>
                    </el-scrollbar>
                </el-main>
                <el-footer class="fixed bottom-0 w-full">
                    <footerVue></footerVue>
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>
  
<script setup lang='ts'>
import Menu from '@/components/layout/menu/Menu.vue'
import headerVue from '@/components/layout/header/header.vue';
import footerVue from '../../components/layout/footer/footer.vue';
</script>
<style lang='scss' scoped>
.common-layout {
    @apply w-full h-screen;
}
.containers {
    height: calc(100vh - 90px);
}
:deep(.el-footer) {
    height: 5rem;
}
</style>
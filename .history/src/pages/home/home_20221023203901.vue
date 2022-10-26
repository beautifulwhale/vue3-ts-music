<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">

            </el-aside>
            <el-container>
                <el-header>Header</el-header>
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
  
<script lang='ts'>
import menu from '../../components/layout/menu/'

</script>
<style lang='scss' scoped>

</style>
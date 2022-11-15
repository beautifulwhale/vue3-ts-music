<template>
    <div>
        <el-tabs v-model="activeName">
            <el-tab-pane label="歌曲" name="songlist">
                
            </el-tab-pane>
            <el-tab-pane label="评论" name="comments">Comments...</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

type TabsType = 'songlist' | 'comments';
const activeName = ref<TabsType>('songlist');

</script>
<style lang='scss' scoped>

</style>
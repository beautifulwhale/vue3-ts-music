<template>
    <div class="h-14 flex items-center">
        <div class="cu">
            <el-avatar size="small" :src="circleUrl" />
            <span class="ml-2 text-sm">点击登录</span>
        </div>
        <IconParkVue class="ml-3" :icon="Theme"></IconParkVue>
        <IconParkVue class="ml-3" :icon="Hamburger"></IconParkVue>
    </div>
</template>

<script setup lang='ts'>
import { Hamburger, Panties, Theme } from '@icon-park/vue-next';
import { ref } from 'vue';
import IconParkVue from '../../../common/IconPark.vue';

const circleUrl = ref('');
</script>
<style lang='scss' scoped>

</style>
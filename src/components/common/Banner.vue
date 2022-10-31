<template>
    <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in bannerList" :key="item">
            <img :src="item" alt="">
        </el-carousel-item>
    </el-carousel>
</template>

<script setup lang='ts'>
interface Props {
    bannerList: string[]
}
const props = withDefaults(
    defineProps<Props>(),
    {
        bannerList: () => []
    }
);
console.log(props);

</script>
<style lang='scss' scoped>

</style>
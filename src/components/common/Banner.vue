<template>
    <div class="banner">
        <div v-for="item in bannerList.slice(0,4)" :key="item" class="pl-2 pr-2 imgList">
            <img class="rounded-xl cursor-pointer" :src="item">
        </div>
    </div>
</template>

<script setup lang='ts'>
interface Props {
    bannerList: string[]
}
withDefaults(
    defineProps<Props>(),
    {
        bannerList: () => []
    }
);
</script>
<style lang='scss' scoped>
.banner {
    @apply flex
}

.imgList img {
    opacity: 1;
  -webkit-transition: .3s ease-in-out;
  transition: .3s ease-in-out;
}
.imgList:hover img {
    opacity: .6;
}
</style>
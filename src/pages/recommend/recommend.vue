<template>
  <div class="p-2">
    <h1 class="font-bold pb-4 text-3xl">推荐</h1>
    <BannerVue :bannerList="bannerList"></BannerVue>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import getBannerLists from '../../api/banner';
import BannerVue from '../../components/common/Banner.vue';
const bannerList = ref<string[]>([]);

// 获取banner 
const getBannerList = async () => {
  const data = await getBannerLists();
  bannerList.value = data.banners?.map(item => item.imageUrl) as string[];
}

onMounted(() => {
  getBannerList();
})



</script>
<style lang='scss' scoped>

</style>
<template>
  <div class="p-2">
    <h1 class="font-bold pb-4 text-3xl">推荐</h1>
    <BannerVue :bannerList="bannerList"></BannerVue>
    <recommendPlaylistVue :playLists="myPlayList"></recommendPlaylistVue>
    <newSongs :newSongList="newSongList"></newSongs>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import getBannerLists from '../../api/banner';
import { useMyPlayList, useNewSongs } from '../../api/recommend';
import { RecommendPlayList, Song } from '../../model/playlist'
import BannerVue from '../../components/common/Banner.vue';
import recommendPlaylistVue from '../../components/common/recommendPlaylist.vue';
import newSongs from '@/components/common/newSongs.vue';

const bannerList = ref<string[]>([]);
const myPlayList = ref<RecommendPlayList[]>([]);
const newSongList = ref<Song[]>([]);
const limit = 30;
const songLimit = 10;
// 获取banner 
const getBannerList = async () => {
  const data = await getBannerLists();
  bannerList.value = data.banners?.map(item => item.imageUrl) as string[];
}

// 获取推荐歌单
const getMyPlayList = async () => {
  const { code, result } = await useMyPlayList(limit);
  if (code === 200) {
    myPlayList.value = result;
  }
}

// 获取推荐新音乐
const getNewSongs = async () => {
  const { code, result } = await useNewSongs(songLimit);
  if(code === 200) {
    newSongList.value = result;
    console.log('songList==',result);
  }
}

onMounted(() => {
  getBannerList();
  getMyPlayList();
  getNewSongs();
})



</script>
<style lang='scss' scoped>

</style>
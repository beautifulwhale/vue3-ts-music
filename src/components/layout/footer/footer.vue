<template>
  <APlayerVue :songIdListStr="songIdListStr" :songId="songId"></APlayerVue>
</template>

<script setup lang='ts'>
import { getCurrentInstance, onMounted, onUnmounted, ref, watch } from 'vue';
import { TrackIds } from '../../../model/playlist'
import APlayerVue from '../../common/APlayer.vue';

const mitter = getCurrentInstance()?.appContext.config.globalProperties.mitter;
const songId = ref(0);
const songIdListStr = ref('');



type PlaySongInfo = {
  id: number,
  songIdList: TrackIds[]
}
onMounted(() => {
  mitter.on('playSong', (playSongInfo: PlaySongInfo) => {
    const { id, songIdList } = playSongInfo;
    songId.value = id;
    songIdListStr.value = songIdList.map(item => item.id).join(',');    
  })
});

onUnmounted(() => {
  mitter.off('closeLoginDialog');
});
</script>
<style lang='scss' scoped>

</style>
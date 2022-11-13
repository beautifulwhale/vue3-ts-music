<template>
    <Title title="你的专属歌单"></Title>
    <div class="playlist-layout">
        <div v-for="item in playLists.sampleSize(30)" :key="item.id">
            <playList :id="item.id" :name="item.name" :picUrl="item.picUrl" :playCount="item.playCount"></playList>
            <div class="mt-2 text-xs text-main truncate">{{ item.name }}</div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { RecommendPlayList } from '../../model/playlist';
import playList from '@/components/common/playList.vue';
import Title from '@/components/common/title.vue';
type IPlayList = RecommendPlayList[];
defineProps<{
    playLists: IPlayList
}>();
</script>
<style lang='scss' scoped>
.playlist-layout {
    @apply grid grid-flow-row grid-cols-3 lg:grid-cols-5 gap-5 2xl:grid-cols-10
}
</style>

<template>
    <Title title="推荐新音乐"></Title>
    <div class="grid grid-flow-row grid-cols-2 2xl:grid-cols-5 gap-y-2.5 gap-x-5 cursor-pointer">
        <div v-for="item in newSongList" :key="item.id" class="hover-bg-view transition-all flex items-center">
            <img :src="item.picUrl" :alt="item.name" class="w-12 h-12 object-cover rounded flex-shrink-0">
            <div class="px-2 text-xs flex-auto flex flex-col w-1/3">
                <div class="text-xs flex-1 truncate text-skin-primary">{{ item.name }}</div>
                <div class="mt-1.5 text-skin-primary">{{ getArtist(item.song.artists) }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { Song } from '../../model/playlist';
import { Artists } from '../../model/artists';
import { SongDetail } from '../../model/song';
import Title from '@/components/common/title.vue';
defineProps<{
    newSongList: Song<SongDetail>[]
}>();

const getArtist = (artist: Artists[]) => {
    return artist[0]?.name;
};
</script>
<style lang='scss' scoped>

</style>
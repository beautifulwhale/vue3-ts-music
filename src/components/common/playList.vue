<template>
    <div class="cover-play-image hover:-translate-y-1" @click="handlePlaylistDetail(id)">
        <el-image :src="picUrl" :alt="name" class="w-full bg-gray-50 object-cover"></el-image>
        <div class="mask flex justify-center items-center">
            <IconPark :icon="PlayOne" theme="filled"
                class="text-white play-icon opacity-0 transition-opacity hover:text-teal-400" :size="50"
                @click="onPlay" />
        </div>
        <div class="play-count">
            <IconPark :icon="Play" class="mr-1"></IconPark>
            <text>{{ useNumberFormat(playCount || 0) }}</text>
        </div>
    </div>
</template>

<script setup lang='ts'>
import IconPark from '@/components/common/IconPark.vue';
import { useNumberFormat } from "../../utils/useNumber";
import { PlayOne, Play } from '@icon-park/vue-next';
import { useRouter } from 'vue-router';

const router = useRouter();

defineProps<{
    id: number,
    name: string,
    playCount: number,
    picUrl: string
    onPlay?: () => void
}>()

const handlePlaylistDetail = (id: number) => {
    router.push({ name: 'playlist', params: { id } })
}
</script>
<style lang='scss' scoped>
.cover-play-image {
    @apply rounded-xl cursor-pointer transition-all relative overflow-hidden;
    // @apply hover: -translate-y-1;

    .mask {
        @apply absolute inset-0 bg-black bg-opacity-0 transition-all duration-500;
    }

    .play-count {
        @apply absolute bottom-4 right-1 text-white text-xs bg-black bg-opacity-80 pl-2 pr-2 rounded-full pt-0.5 pb-0.5 flex items-center transition-all scale-90;
    }

    &:hover {
        .mask {
            @apply bg-opacity-50;

            .play-icon {
                @apply opacity-100;
            }
        }

        .play-count {
            @apply opacity-0;
        }
    }
}
</style>

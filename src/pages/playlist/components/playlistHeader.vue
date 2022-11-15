<template>
    <div class="flex">
        <img class="w-44 h-44 flex-shrink-0 rounded-xl object-cover" :src="playlistInfo.coverImgUrl" alt="">
        <div class="pl-4 pt-2">
            <div class="text-2xl font-bold">{{ playlistInfo.name }}</div>
            <div class="flex pt-2">
                <div class="w-30 h-10 flex items-center rounded-full">
                    <el-avatar :size="30" :src="playlistInfo.creator.avatarUrl" />
                    <span class="text-sm ml-2 text-gray-400">{{ playlistInfo.creator.nickname }}</span>
                </div>
                <div class="pl-5 flex items-center">
                    <div class="text-sm ml-2 text-gray-400" v-for="item in playlistInfo.tags" :key="item">
                        #{{ item }}
                    </div>
                </div>
            </div>
            <div class="leading-5">
                <MoreText :description="playlistInfo.description" :endLength="endLength"
                    :isShowCollaspe="isShowCollaspe"></MoreText>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import MoreText from '@/components/common/MoreText.vue';
import { PlayListDetail } from '../../../model/playlist';

const props = defineProps<{
    playlistInfo: PlayListDetail
}>()

const endLength = ref(100);

const isShowCollaspe = computed(() => {
    return props.playlistInfo.description.length > endLength.value;
})
</script>
<style lang="scss" scoped>

</style>

<template>
    <div class="mt-3">
        <el-tabs v-model="activeName">
            <el-tab-pane :label="songLabel" name="songlist">
                <div class="songs-table">
                    <el-table :data="songList" style="width: 100%">
                        <el-table-column fixed prop="name" label="歌曲" show-overflow-tooltip>
                            <template #default="{ row }">
                                <div class="flex justify-between">
                                    <span>{{ row.name }}</span>
                                    <span class="showicon">
                                        <span class="flex items-center">
                                            <IconPark :icon="PlayOne" :size="20" @click="playSong(row)"></IconPark>
                                            <IconPark class="ml-2" :icon="Add"></IconPark>
                                            <IconPark class="ml-2" :icon="DownTwo"></IconPark>
                                            <IconPark class="ml-2" :icon="MoreTwo"></IconPark>
                                        </span>
                                    </span>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="ar" label="歌手" show-overflow-tooltip>
                            <template #default="{ row }">
                                <span v-if="row.ar.length === 1">
                                    {{ row.ar[0].name }}
                                </span>
                                <span v-else v-for="(item) in row.ar" :key="item.id">
                                    {{ item.name }}
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="al.name" label="专辑" show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column prop="dt" label="时长">
                            <template #default="{ row }">
                                {{ formatDurtion(row.dt) }}
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="评论" name="comments">Comments...</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup lang='ts'>
import { ref, computed, getCurrentInstance } from 'vue';
import { Track, TrackIds } from '../../../model/playlist';
import formatDurtion from '../../../utils/formatDurtion';
import IconPark from '@/components/common/IconPark.vue';
import { Add, DownTwo, MoreTwo, PlayOne } from '@icon-park/vue-next';

const mitter = getCurrentInstance()?.appContext.config.globalProperties.mitter;

const props = defineProps<{
    songList: Track[],
    trackIdList: TrackIds[]
}>()
type TabsType = 'songlist' | 'comments';
const activeName = ref<TabsType>('songlist');

const songLabel = computed(() => {
    return `歌曲(${props.songList.length})`
});



const playSong = (row: any) => {
    console.log('props.trackIdList', props.trackIdList);
    mitter.emit('playSong', { id: row.id, songIdList: props.trackIdList });
}
</script>
<style lang='scss' scoped>
.songs-table {
    :deep(tbody tr:hover>td) {
        background-color: rgb(230, 228, 228);
        cursor: pointer;
    }

    :deep(.el-table td:hover>.cell) {
        color: var(--el-color-primary-light-6);
    }
}

.showicon {
    display: none;
}

.el-table__body tr:hover {
    .showicon {
        display: inline;

        .i-icon:hover {
            color: rgb(171, 247, 171);
        }
    }
}
</style>
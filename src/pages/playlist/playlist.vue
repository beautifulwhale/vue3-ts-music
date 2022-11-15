<template>
    <playlistHeader :playlistInfo="playlistDetail">
    </playlistHeader>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getplaylist } from '../../api/playlist';
import { PlayListDetail ,Track} from '../../model/playlist';
import playlistHeader from '@/pages/playlist/components/playlistHeader.vue';

const route = useRoute();
const playlistId = route.params.id;

let playlistDetail = ref<PlayListDetail>({
    id: null,
    name: '',
    coverImgUrl: '',
    createTime: null,
    description: '',
    creator: {
        nickname: '',
        avatarUrl: ''
    },
    tags: [] as string[],
    tracks: [] as Track[]
});

const getPlaylistDetail = async () => {
    const { code, playlist } = await getplaylist(playlistId as string);
    if (code === 200) {
        playlistDetail.value = playlist as PlayListDetail;
    }
};


onMounted(() => {
    getPlaylistDetail();
});
</script>
<style lang='scss' scoped>

</style>
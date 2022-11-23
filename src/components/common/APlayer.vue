<!--
 * @Description: APlayer组件化
-->
<template>
    <div class="player-audio" ref="playerRef"></div>
</template>

<script lang="ts" setup>
import { getSongDetail, getLyric, songsUrl } from '../../api/song';
import { Song } from '../../model/song';
import 'APlayer/dist/APlayer.min.css';
import APlayer from 'APlayer';
import type { PropType } from '@vue/runtime-core';
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const playerRef = ref();
const audioList = ref<Song[]>([]);

const audioLists = ref<Audio[]>([]);

const urlList = ref<any[]>([]);
const songLyric = ref('');

// 首次播放坐标
let initialIndex = ref(0);
let instance: APlayer;

// APlayer歌曲信息
class Audio {
    // 音频艺术家
    artist: String;
    // 音频名称
    name: String;
    // 音频链接
    url: String;
    // 音频封面
    cover: String;
    // 歌词
    lrc?: String;

    constructor(artist: String, name: String, url: String, cover: String, lrc?: String) {
        this.artist = artist;
        this.name = name;
        this.url = url;
        this.cover = cover;
        this.lrc = lrc;
    }
}

const props = defineProps({
    // 当前歌单的id 字符串
    songIdListStr: {
        type: String as PropType<string>,
        default: ''
    },
    // 当前歌曲id
    songId: {
        type: Number as PropType<number>,
        default: 0
    },
    // 开启吸底模式
    fixed: {
        type: Boolean as PropType<boolean>,
        default: true
    },
    // 开启迷你模式
    mini: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    // 音频自动播放
    autoplay: {
        type: Boolean as PropType<boolean>,
        default: true
    },
    // 主题色
    theme: {
        type: String as PropType<string>,
        default: 'rgba(255,255,255,0.2)'
    },
    // 音频循环播放
    loop: {
        type: String as PropType<'all' | 'one' | 'none'>,
        default: 'all'
    },
    // 音频循环顺序
    order: {
        type: String as PropType<'list' | 'random'>,
        default: 'random'
    },
    // 预加载
    preload: {
        type: String as PropType<'auto' | 'metadata' | 'none'>,
        default: 'auto'
    },
    // 默认音量
    volume: {
        type: Number as PropType<number>,
        default: 0.7,
        validator: (value: Number) => {
            return value >= 0 && value <= 1;
        }
    },
    // 歌曲服务器(netease-网易云, tencent-qq音乐, kugou-酷狗, xiami-小米音乐, baidu-百度音乐)
    songServer: {
        type: String as PropType<'netease' | 'tencent' | 'kugou' | 'xiami' | 'baidu'>,
        default: 'netease'
    },
    // 播放类型(song-歌曲, playlist-播放列表, album-专辑, search-搜索, artist-艺术家)
    songType: {
        type: String as PropType<string>,
        default: 'playlist'
    },
    // 互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    mutex: {
        type: Boolean as PropType<boolean>,
        default: true
    },
    // 传递歌词方式
    lrcType: {
        type: Number as PropType<number>,
        default: 1
    },
    // 列表是否默认折叠
    listFolded: {
        type: Boolean as PropType<boolean>,
        default: true
    },
    // 列表最大高度
    listMaxHeight: {
        type: String as PropType<string>,
        default: '100px'
    },
    // 存储播放器设置的 localStorage key
    storageName: {
        type: String as PropType<string>,
        default: 'aplayer-setting'
    }
});

const createInstance = (audioLists: Audio[]) => {
    instance = new APlayer({
        container: playerRef.value,
        fixed: props.fixed,
        mini: props.mini,
        autoplay: props.autoplay,
        theme: props.theme,
        loop: props.loop,
        order: props.order,
        preload: props.preload,
        volume: props.volume,
        mutex: props.mutex,
        lrcType: props.lrcType,
        listFolded: props.listFolded,
        listMaxHeight: props.listMaxHeight,
        storageName: props.storageName,
        audio: audioLists
    });
    instance.list.switch(initialIndex.value);
}

// 处理audio列表
const handleAudioList = async (songs: Song[]) => {
    const idList = songs.map(one => one.id);
    await getSongsUrlList(idList);
    getSongLyric(props.songId);
    audioLists.value = songs.map(item => {
        const currentSong = urlList.value.find(one => item.id === one.id);
        return new Audio(item.ar[0].name, item.name, currentSong.url, item.al.picUrl, songLyric.value);
    });
};

// 获取歌曲url
const getSongsUrlList = async (idList: number[]) => {
    const idListStr = idList.join(',');
    const { code, data } = await songsUrl(idListStr);
    if (code === 200) {
        urlList.value = data.map(item => {
            return {
                id: item.id,
                url: item.url
            }
        });
    }
};

// 获取歌曲歌词
const getSongLyric = async (id: number) => {
    const { code, lrc } = await getLyric(id);
    if (code === 200) {
        songLyric.value = lrc?.lyric;
      console.log('songLyric.value',songLyric.value)
    }
}

// 监视songId 获取新歌词
watch(() => props.songId, (newVal) => {
    if (newVal) {
        getSongLyric(newVal);
      console.log('newVal',newVal);
      console.log('audioList.value',audioList.value);
        const index = audioList.value.findIndex(item => item.id === newVal);
        instance.list.switch(index);
    }
})
watch(() => props.songIdListStr, async (newVal) => {
    if (newVal) {
        const { code, songs } = await getSongDetail(newVal);
        if (code === 200) {
            audioList.value = songs;
            initialIndex.value = audioList.value.findIndex(item => item.id === props.songId);
            await handleAudioList(audioList.value);

          console.log('audioList.value====>',audioList.value)
            createInstance(audioLists.value);
        }
    }
});

// 初始化
onMounted(() => {
    nextTick(() => {
        createInstance([]);
    })
})
// 销毁
onBeforeUnmount(() => {
    instance.destroy()
})
</script>

<style lang="scss" scoped>
.player-audio {
    :deep(.player) {
        left: 200px !important;
    }
    :deep(.aplayer-body) {
        @apply w-full
    }

    :deep(.aplayer-info) {
        display: block !important;
    }
}

</style>

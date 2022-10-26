import { IMenuList } from "../config/types"
import { Acoustic, DownloadThree, Fm, Like, Monitor, MusicMenu, Planet, PlayTwo } from '@icon-park/vue-next'
import { useRoute } from "vue-router";
import { ref } from "vue";
import { watch } from "fs";
export function useMenuList() {
    const menuList: IMenuList[] = [
        {
            name: '在线音乐',
            menus: [
                {
                    icon: Planet,
                    name: '推荐',
                    key: 'home'
                },
                {
                    icon: Acoustic,
                    name: '音乐馆',
                    key: 'music'
                },
                {
                    icon: Monitor,
                    name: '视频',
                    key: 'video'
                },
                {
                    icon: Fm,
                    name: '电台',
                    key: 'dj'
                },
            ]
        },
        {
            name: '我的音乐',
            menus: [
                {
                    icon: Like,
                    name: '我喜欢',
                    key: 'profile-love'
                },
                {
                    icon: MusicMenu,
                    name: '本地音乐',
                    key: 'local-music'
                },
                {
                    icon: DownloadThree,
                    name: '下载音乐',
                    key: 'download-music'
                },
                {
                    icon: PlayTwo,
                    name: '最近播放',
                    key: 'lastest-play'
                },
            ]
        },
    ];
    // 当前路由的key
    const route = useRoute();
    const currentKey = ref(route.meta.menu);

    watch(() => currentKey, (val) => {
        console.log(val);
    })

    return { menuList }

}
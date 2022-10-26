import { IMenuList } from "../config/types"
import { Planet } from '@icon-park/vue-next'
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
                    icon: <acoustic theme="outline" size="24" fill="#333" strokeLinecap="butt"/>,
                    name: '音乐馆',
                    key: 'music'
                },
                {
                    icon: 's',
                    name: '视频',
                    key: 'video'
                },
                {
                    icon: 's',
                    name: '电台',
                    key: 'dj'
                },
            ]
        },
        {
            name: '我的音乐',
            menus: [
                {
                    icon: 'el',
                    name: '我喜欢',
                    key: 'profile-love'
                },
                {
                    icon: 's',
                    name: '本地音乐',
                    key: 'music'
                },
                {
                    icon: 's',
                    name: '下载音乐',
                    key: 'video'
                },
                {
                    icon: 's',
                    name: '最近播放',
                    key: 'dj'
                },
            ]
        },
    ]

    return { menuList }

}
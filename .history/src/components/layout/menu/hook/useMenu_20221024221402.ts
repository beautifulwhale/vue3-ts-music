import { IMenuList } from "../config/types"

export function useMenuList() {
    const menuList: IMenuList[] = [
        {
            name: '在线音乐',
            menus: [
                {
                    icon: 'el',
                    name: '推荐',
                    key: 'home'
                },
                {
                    icon: 's',
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
    ]

    return { menuList }

}
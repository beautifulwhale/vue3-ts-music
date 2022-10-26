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
        }
    ]

    

}
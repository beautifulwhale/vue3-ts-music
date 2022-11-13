import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../pages/home/home.vue'),
            meta: {
                title: '首页',
                menu: 'home'
            },
            redirect: '/recommend',
            children: [
                {
                    path: '/recommend',
                    name: 'recommend',
                    component: () => import('@/pages/recommend/recommend.vue'),
                    meta: {
                        title: '推荐',
                        menu: 'recommend'
                    }
                },
                {
                    path: '/music',
                    name: 'music',
                    component: () => import('@/pages/music/music.vue'),
                    meta: {
                        title: '音乐馆',
                        menu: 'music'
                    }
                },
                {
                    path: '/video',
                    name: 'video',
                    component: () => import('@/pages/video/video.vue'),
                    meta: {
                        title: '视频',
                        menu: 'video'
                    }
                },
                {
                    path: '/dj',
                    name: 'dj',
                    component: () => import('@/pages/dj/dj.vue'),
                    meta: {
                        title: 'DJ',
                        menu: 'dj'
                    }
                },
                {
                    path: '/playlist/:id',
                    name: 'playlist',
                    component: () => import('@/pages/playlist/playlist.vue'),
                    meta: {
                        title: '歌单详情',
                        menu: 'playlist'
                    }
                }
            ]
        },
    ]
})

export default router
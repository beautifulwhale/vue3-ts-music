import { createRouter, createMemoryHistory } from "vue-router";

const router = createRouter({
    history: createMemoryHistory(),
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
                        title: '音乐馆',
                        menu: 'video'
                    }
                },
                
            ]
        },
    ]
})

export default router
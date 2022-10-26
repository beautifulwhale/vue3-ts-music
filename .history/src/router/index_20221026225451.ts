import path from "path";
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
                    component: () => import('@page/recommend/recommend.vue'),
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
                }
            ]
        },
    ]
})

export default router
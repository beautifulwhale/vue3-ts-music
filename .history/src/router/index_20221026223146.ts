import { createRouter, createMemoryHistory } from "vue-router";

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: () => import('../pages/home/home.vue'),
            meta: {
                title: '首页',
                menu: 'home'
            },
            redirect: '/',
            children:[]
        },
        {
            path: '/music',
            name: 'music',
            component: () => import('../pages/home/home.vue'),
            meta: {
                title: '音乐馆',
                menu: 'music'
            },
            children:[]
        }
    ]
})

export default router
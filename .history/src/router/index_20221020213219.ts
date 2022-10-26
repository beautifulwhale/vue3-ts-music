import { createRouter,createMemoryHistory } from "vue-router";

const router = createRouter({
    history:createMemoryHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component:()=>import('../pages/home/home.vue'),
            meta:{
                title:'shou ye'
            }
        }
    ]
})
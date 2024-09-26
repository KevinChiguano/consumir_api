import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        component:()=> import('@/modules/homeAnime/pages/HomeAnimePage')
    },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router
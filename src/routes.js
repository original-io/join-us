import Vue from 'vue'
import Router from 'vue-router'
import Item from '@/Item.vue'

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        component: Item
    }]
})

export default router;
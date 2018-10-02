import Vue from 'vue'
import Router from 'vue-router'
import Item from '@/views/Item'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Item
    }
  ]
})
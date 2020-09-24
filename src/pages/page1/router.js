import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'
import Detail from './views/Detail.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component:Home
    },
    {
      path: '/list',
      component:List
    },
    {
      path: '/detial',
      component:Detail
    }
  ]
})

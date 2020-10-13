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
      path: '/home',
      name:'home',
      component:Home
    },
    {
      path: '/list',
      name:'list',
      component:List
    },
    {
      path: '/detial',
      name:'detial',
      component:Detail
    }
  ]
})
// const originalPush = Router.prototype.push;
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
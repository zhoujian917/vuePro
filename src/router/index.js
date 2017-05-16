import Vue from 'vue'
import Router from 'vue-router'
// @是webpack规定的 代表src目录
import goods from '@/components/mods/goods'
import seller from '@/components/mods/seller'
import ratings from '@/components/mods/ratings'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/goods', component: goods },
    { path: '/seller', component: seller },
    { path: '/ratings', component: ratings }
  ]
})

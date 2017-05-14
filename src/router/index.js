import Vue from 'vue'
import Router from 'vue-router'
// @是webpack规定的 代表src目录
import Hello from '@/components/Hello'
import A from '@/components/a'
import B from '@/components/b'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/a',
      name: 'A',
      component: A
    },
    {
      path: '/b',
      name: 'B',
      component: B
    }
  ]
})

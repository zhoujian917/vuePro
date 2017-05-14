// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
// import router from './router'
import Router from 'vue-router'
// 使用router插件
Vue.use(Router)

const App = {
  template: `<div id="app">
  默认显示的内容
  <ul>
    <li><router-link to="/">首页</router-link></li>
    <li><router-link to="/a">href a</router-link></li>
    <li><router-link to="/b/bb">/b/bb</router-link></li>
    <li><router-link :to="{name:'d',params:{id:123}}">/d/dd</router-link></li>
    <li><router-link to="/e">重定向</router-link></li>
    <ul>
      <li><router-link to="/a/aa">/a/aa</router-link></li>
    </ul>
  </ul>
  <router-view></router-view>
  </div>`
}
const index = {
  template: `<div>
  这里是index
  </div>`
}
const a = {
  template: `<div>
  这里是a
  <router-view></router-view>
  </div>`
}
const aa = {
  template: `<div>这里是a的子路由</div>`
}
const b = Vue.component('b', {
  template: '<div>这里是b</div>',
  mounted () {
    console.log(this.$route)
  }
})
const c = {
  template: `<div>{{$route.params}}</div>`
}
const router = new Router({
  routes: [
    {path: '/', component: index},
    {path: '/b/:ccc', component: b},
    {path: '/e', redirect: '/a'},
    {path: '/d', name: 'd', component: c},
    {
      path: '/a',
      component: a,
      children: [
        {path: 'aa', component: aa}
      ]}
  ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
const state = {
  age: 18,
  name: 'abc',
  num: [
    {a: 'aa', age: '1'},
    {a: 'aa', age: '2'},
    {a: 'aa', age: '3'}
  ]
}
// 主要用来操控state里面的数据
const mutations = {
  addAge () {
    state.age++
  }
}
// 用来调用mutations里的方法，可以进行异步操作
const actions = {
  // 默认接收一个对象
  addagepro ({commit}) {
    console.log(commit('addAge'))
  }
}
// 相当于computed 作用于state 如过滤操作
/* const getters = {
  guolv (state) {
    return state.num.filter(i => i.age > 1)
  }
} */
Vue.config.productionTip = false

/* eslint-disable no-new */
export default new vuex.Store({
  state,
  mutations,
  actions
  // getters
})

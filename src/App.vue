<template>
  <div id="app">
    <v-header :aa="aaaa"></v-header>
    {{$store.state}}{{name}}
    {{guolv}}
    <button @click="a">点击显示state的数据</button>
    <button @click="addagepro">点击年龄增加</button>
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex'
  import header from './components/header.vue'
  export default {
    data: function () {
      return {
        aaaa: 'aaaa'
      }
    },
    computed: {
      ...mapState([
        'name',
        'age'
      ])
    },
    methods: {
      ...mapMutations([
        'addAge'
      ]),
      ...mapActions([
        'addagepro'
      ]),
      a () {
        alert(this.name)
      }
    },
    components: {
      'v-header': header
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

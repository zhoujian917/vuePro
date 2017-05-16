<template>
  <div id="app">
    <v-header :seller="datas.seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/mods/header.vue'
  import axios from 'axios'
  export default {
    data: function () {
      return {
        datas: {
          seller: {},
          // 商品
          goods: [],
          // 评论
          ratings: []
        }
      }
    },
    mounted () {
      axios.get('/static/data.json').then(res => {
        console.log(res)
        this.datas.seller = res.data.seller
        this.datas.goods = res.data.goods
        this.datas.ratings = res.data.ratings
      })
    },
    components: {
      'v-header': header
    }
  }
</script>
<style>
  .tab .tab-item .router-link-active{
    color: red
  }
</style>

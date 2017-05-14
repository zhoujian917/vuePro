<template>
    <div id="app">
      <ul>
        <li v-for="item in shop">
          <div>{{item.title}}</div>
          <p>购买数量<button @click="add(item)">购买</button></p>
          <button>+</button>
          <button @click="jian(item)">-</button>
        </li>
      </ul>
      <cart :cart="cart">{{cart}}</cart>
    </div>
</template>

<script>
  import cart from './cart.vue'
  export default {
    data () {
      return {
        shop: [
          {title: '电脑', price: 100},
          {title: '手机', price: 200},
          {title: '洗衣机', price: 400},
          {title: '油烟机', price: 80},
          {title: '电视', price: 3650}
        ]
      }
    },
    components: {
      cart
    },
    computed: {
      cart () {
        let a = []
        this.shop.forEach((val) => {
          if (val.num > 0) {
            a.push(val)
          }
        })
        return a
      }
    },
    methods: {
      add: function (item) {
        if (typeof item.num === 'undefined') {
          this.$set(item, 'num', 0)
        }
        item.num++
      },
      jian (item) {
        item.num --
      }
    }
  }
</script>

<style>

</style>

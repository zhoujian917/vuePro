<template>
    <div>
      这里是头部：{{aa}}
      <ul>
        <li v-for="item in nav">
          <router-link :to="item.path">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  props: ['aa'],
  data: function () {
    return {
      nav: [
        {title: '首页', path: '/'},
        {title: 'a', path: '/a'},
        {title: 'b', path: '/b'}
      ]
    }
  }
}
</script>

<style>
li{float: left;list-style: none;margin-left:10px;}
</style>

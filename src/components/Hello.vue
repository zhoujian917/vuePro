<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <aa></aa>
  </div>
</template>

<script>
  import aa from './a'
  export default {
    name: 'hello',
    data: function () {
      return {
        msg: '这里是hello页面'
      }
    },
    components: {
      aa: aa
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

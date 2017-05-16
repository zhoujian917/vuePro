<template>
    <div class="star star-48">
      <span class="star-item" :class="item" v-for="item in abc"></span>
    </div>
</template>

<script>
export default {
  props: ['score'],
  computed: {
    abc () {
      let arr = []
      // 取出整数部分
      let intNum = Math.floor(this.score)
      // 取出小数部分
      let doteNum = (this.score - intNum) >= 0.5
      for (let i = 0; i < intNum; i++) {
        arr.push('on')
      }
      if (doteNum) {
        arr.push('half')
      }
      while (arr.length < 5) {
        arr.push('off')
      }
      return arr
    }
  }
}
</script>

<style>

</style>

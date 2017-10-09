<template>
  <div>
    <baidu-map class='map' :scroll-wheel-zoom='true'>
      <bm-driving start='电子科技大学' end='四川大学' :auto-viewport='true'></bm-driving>
    </baidu-map>
  </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map'
import Vue from 'vue'

Vue.use(BaiduMap, {
  ak: 'fu6xOFGxYhEiIGWQIXk2CATSoYtS14Hg'
})
export default {
  name: 'navigation'
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.map {
  width: 100%;
  height: 50vh;
}
</style>
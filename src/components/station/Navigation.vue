<template>
  <div>
    <baidu-map class='map' :scroll-wheel-zoom='true' center="成都" :zoom="12">
      <!-- <bm-marker :position="{lng: 116.404, lat: 39.915}"></bm-marker> -->
      <bm-marker v-for="position in positionList" :key="position" :position="position"></bm-marker>"></bm-marker>
    </baidu-map>
  </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map'
import Vue from 'vue'

Vue.use(BaiduMap, {
  // ak: 'fu6xOFGxYhEiIGWQIXk2CATSoYtS14Hg'
  ak: 'EO5oHjEfgBz7QieWfqG08jcx'
})
export default {
  name: 'navigation',
  props: ['positionList']
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.map {
  width: 100%;
  height: 85vh;
}
</style>
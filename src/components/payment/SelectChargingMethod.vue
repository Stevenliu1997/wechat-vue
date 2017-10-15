<template>
  <div>
    <div style="padding-top:20vh;display:flex;justify-content:center;align-items:center;">
      <p>欢迎使用充电桩</p>
    </div>
    <div style="padding-top:5vh;display:flex;justify-content:center;align-items:center;" v-on:click="Scan">
      <mt-button id="button">扫码充电</mt-button>
    </div>
    <div style="padding-top:5vh;display:flex;justify-content:center;align-items:center;" v-on:click="Hand">
      <mt-button>手动输入充电桩编号</mt-button>
    </div>
  </div>
</template>
<script>
import router from './../../router/index.js'
export default {
  data() {
    return {}
  },
  methods: {
    Scan: function() {
      router.push({ path: '/payment/ChargingByScan' })
    },
    Hand: function() {
      router.push({ path: '/payment/input' })
    }
  }
}
</script>
<style>
#button {
  background-color: #4caf50;
  color: #ffffff;
}
</style>

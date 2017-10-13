<template>
  <div>
    <div id="text"><p>欢迎使用充电桩</p></div>
    <div id="bt-1" v-on:click="Scan"><mt-button id="button-1">扫码充电</mt-button></div>
    <div id="bt-2" v-on:click="Hand"><mt-button>手动输入充电桩编号</mt-button></div>
  </div>
</template>
<script>
  import router from './../../router/index.js'
  export default {
    data() {
      return {}
    },
    methods: {
      Scan: function () {
        router.push({path: '/payment/ChargingByScan'})
      },
      Hand: function () {
        router.push({path: '/payment/input'})
      }
    }
  }
</script>
<style>
  #button-1{
    background-color: #4caf50;
  }
  #text{
    padding-top: 100px;
    padding-left: 24%;
  }
  #bt-1{
    padding-top: 20px;
    padding-left: 27%;
   }
  #bt-2{
    padding-top: 30px;
    padding-left: 20%;
  }
</style>

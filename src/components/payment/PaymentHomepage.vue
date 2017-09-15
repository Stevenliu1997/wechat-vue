<template>
  <div>
    <div class="role">
      <img src="../../assets/PaymentPage/user.png" height="64" width="64"/>
    </div>
    <div class="clock">
      <img src="../../assets/PaymentPage/clock.png" height="64" width="64"/>
    </div>
    <div class="button payment-button">
      <router-link to="/payment/input" tag="div">
        <mt-button type="primary">点击充电</mt-button>
      </router-link>
    </div>
  </div>
</template>

<script>
  import { Button } from 'mint-ui'
  import Vue from 'vue'
  import {MP} from './map.js'
  Vue.component(Button.name, Button)
  export default {
    name: 'PaymentHomepage',
    mounted () {
      this.$nextTick(function() {
        var _this = this
        MP(_this.ak).then(Bmap => {
          var map = new BMap.Map('allmap')
          map.centerAndZoom(new BMap.Point(116.404, 39.915), 11)
          map.addControl(new BMap.MapTypeControl())
          map.setCurrentCity('北京')
          map.enableScrollWheelZoom(true)
        })
      })
    }
  }
</script>

<style>
  .payment-button{
    width:100px;
    margin:500px auto;
  }
  .role{
    display: inline;
    position: absolute;
    top:25px;
    left:25px;
  }
  .clock{
    display: inline;
    position: absolute;
    top:25px;
    right:25px;
  }
</style>

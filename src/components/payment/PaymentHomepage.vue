<template>
  <div>
    <baidu-map class="map"></baidu-map>
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
  import BaiduMap from 'vue-baidu-map'
  import { Button } from 'mint-ui'
  import Vue from 'vue'
  Vue.component(Button.name, Button)
  Vue.use(BaiduMap, {
    ak: 'fu6xOFGxYhEiIGWQIXk2CATSoYtS14Hg'
  })
  export default {
    name: 'PaymentHomepage'
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
  .map {
    width: 400px;
    height: 300px;
  }
</style>

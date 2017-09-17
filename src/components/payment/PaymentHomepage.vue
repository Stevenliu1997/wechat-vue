<template>
  <div>
    <baidu-map class="map" center="成都"></baidu-map>
    <div class="role">
      <router-link to="/self">
        <img src="../../assets/PaymentPage/user.png" height="64" width="64"/>
      </router-link>
    </div>
    <div class="clock">
      <router-link to="/nearbyStation">
        <img src="../../assets/PaymentPage/clock.png" height="64" width="64"/>
      </router-link>
    </div>
    <div class="button payment-button">
      <router-link to="/payment/input" tag="div">
        <mt-button type="primary" style="border-radius:100%;width: 140px;height: 140px;">点击充电</mt-button>
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
    display: inline;
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    width: 100%;
    height: 100vh;
    z-index: -1;
  }
</style>

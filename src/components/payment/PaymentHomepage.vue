<template>
  <div>
    <baidu-map class="map" center="成都"></baidu-map>
    <div class="role">
      <router-link to="/self">
        <img src="../../assets/PaymentPage/user.png" height="64" width="64"/>
      </router-link>
    </div>
    <!--<div class="clock">-->
    <!--<router-link to="/"></router-link>-->
    <!--</div>-->
    <div class="button payment-button">
      <router-link to="/payment/SelectChargingMethod" tag="div">
        <mt-button type="primary" style="border-radius:100%;width: 120px;height: 120px; background-color: #2ba245"><font
          color="#ffffff">点击充电</font></mt-button>
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
  .payment-button {
    display: inline;
    position: absolute;
    top: 65%;
    left: 35%;
    transform: translate(-50%, -50%);
  }

  .role {
    display: inline;
    position: absolute;
    top: 62%;
    left: 55%;
  }
  /*.clock {*/
    /*display: inline;*/
    /*position: absolute;*/
    /*width: 80%;*/
    /*height: 10%;*/
    /*top: 35px;*/
    /*right: 40px;*/
    /*border-radius: 25px;*/
    /*background-color: rgba(150, 160, 245, 0.7);*/
  /*}*/

  .map {
    width: 100%;
    height: 100vh;
    z-index: -1;
  }
</style>

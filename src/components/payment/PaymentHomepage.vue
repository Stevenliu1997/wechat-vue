<template>
  <div>
    <div class="role">
      <img src="../../assets/PaymentPage/user.png" height="64" width="64"/>
    </div>
    <div class="clock">
      <img src="../../assets/PaymentPage/clock.png" height="64" width="64"/>
    </div>
    <div class="button">
      <router-link to="/payment/input" tag="div">
        <mt-button type="primary" class="payment-button">我要充电</mt-button>
      </router-link>
    </div>
  </div>
</template>

<script>
  import { Button } from 'mint-ui'
  import Vue from 'vue'
  Vue.component(Button.name, Button)
  export default {
    name: 'PaymentHomepage'
  }
</script>

<style>
  .payment-button{
    top: 500px;
    margin:0 auto;
    display:block;
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

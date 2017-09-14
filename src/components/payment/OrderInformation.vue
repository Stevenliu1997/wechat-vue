<template>
  <div>
    <mt-cell title="主页"></mt-cell>
    <mt-cell title="订单编号" value="20155220503008"></mt-cell>
    <mt-cell title="充电时长" value="2小时3分钟"></mt-cell>
    <mt-cell title="用电量" value="12.5度"></mt-cell>
    <mt-cell title="总价" value="2毛钱"></mt-cell>
    <div class="button">
      <router-link to="/payment/success" tag="div">
        <mt-button type="primary" class="payment-button">确认支付</mt-button>
      </router-link>
    </div>
  </div>
</template>
<script>
  import { Cell } from 'mint-ui'
  import Vue from 'vue'
  Vue.component(Cell.name, Cell)
  export default {
    data () {
      return {
      }
    }
  }
</script>
<style>

</style>

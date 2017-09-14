<template>
  <div>
    <mt-cell title="我要充电"></mt-cell>
    <mt-cell title="已充时间" value="2个小时"></mt-cell>
    <mt-cell title="电价" value="5毛钱"></mt-cell>
    <mt-cell title="剩余时间" value="3分钟"></mt-cell>
    <div>
      %80
    </div>
    <img src=""/>
    <div class="button">
      <router-link to="/payment/success" tag="div">
        <mt-button type="primary" class="payment-button">结束充电</mt-button>
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

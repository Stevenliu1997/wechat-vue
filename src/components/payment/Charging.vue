<template>
  <div>
    <mt-cell title="我要充电"></mt-cell>
    <mt-cell title="已充时间" value="2个小时"></mt-cell>
    <mt-cell title="电价" value="5毛钱"></mt-cell>
    <mt-cell title="剩余时间" value="3分钟"></mt-cell>
    <div class="button payment-button">
      <router-link to="/payment/orderinformation" tag="div">
        <mt-button type="primary">结束充电</mt-button>
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
//    created: function () {
//      this.$http.get('/mock/charging.json').then(response => {
//        let data = response.data
//        this.ritems = data.ritems
//        this.pitems = data.pitems
//      }, response => {
//        console.log('failed')
//      })
//    }
  }
</script>
<style>
  .payment-button{
    width:100px;
    margin:300px auto;
  }
</style>

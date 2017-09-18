<template>
  <div>
    <mt-cell title="主页"></mt-cell>
    <mt-cell title="订单编号" v-model="ordernumber"></mt-cell>
    <mt-cell title="充电时长" v-model="chargetime"></mt-cell>
    <mt-cell title="用电量" value="无接口"></mt-cell>
    <mt-cell title="总价" v-model="total"></mt-cell>
    <div class="button payment-button">
      <mt-button type="primary" @click="submit()">确认支付</mt-button>
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
        orderid: this.$route.query.mykey,
        chargetime: '',
        total: '',
        ordernumber: this.$route.query.number
      }
    },
    created: function () {
      this.$http.post('/mock/charge/end.json', {orderid: this.orderid}).then(response => {
        let data = response.body
        if (data.code === '00') {
          this.chargetime = data.chargetime
          this.total = data.servicecharge + data.price
        }
      })
    },
    methods: {
      submit: function () {
        this.$router.push({
          path: '/payment/success',
          query: {
            mykey: this.orderid
          }
        })
      }
    }
  }
</script>
<style>
  .payment-button{
  }
</style>

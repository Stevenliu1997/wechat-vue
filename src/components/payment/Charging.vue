<template>
  <div>
    <mt-cell title="我要充电"></mt-cell>
    <mt-cell title="已充时间" v-model="chargetime"></mt-cell>
    <mt-cell title="电价" v-model="price"></mt-cell>
    <mt-cell title="剩余时间" value="无接口"></mt-cell>
    <div class="button payment-button">
      <mt-button type="primary" @click="submit()">结束充电</mt-button>
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
        chargetime: this.$route.query.chargetime,
        price: this.$route.query.price,
        startchargetime: this.$route.query.startchargetime,
        mykey: this.$route.query.mykey,
        number: this.$route.query.number,
        total: ''
      }
    },
    methods: {
      submit: function () {
        this.$http.post('/charge/end', {orderid: this.orderid}).then(response => {
          let data = response.body
          if (data.code === '00') {
            this.total = data.servicecharge + data.price
          }
        })
        this.$router.push({
          path: '/payment/orderinformation',
          query: {
            mykey: this.mykey,
            number: this.number,
            time: this.chargetime,
            total: this.total
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

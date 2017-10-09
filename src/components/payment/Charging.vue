<template>
  <div>
    <mt-cell title="已充时间" v-model="chargeTime"></mt-cell>
    <mt-cell title="电价" v-model="price"></mt-cell>
    <mt-cell title="服务费" v-model="serviceFee"></mt-cell>
    <mt-cell title="用电量" v-model="usedVoltage"></mt-cell>
    <mt-cell title="总价" v-model="totalPrice"></mt-cell>
    <div id="payment-button"><el-button type="primary" @click="show = !show" >确认支付</el-button></div>
    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition>
        <div v-show="show" class="transition-box">
          <hr>
          <div id="price"><i class="fa fa-jpy" aria-hidden="true">{{this.totalPrice}}</i></div>
          <div id="coupon">
            <i class="fa fa-caret-right" aria-hidden="true" v-on:click="">已使用七折折扣券</i>
          </div>
          <div id="wallet">
            <mt-button>钱包支付</mt-button>
          </div>
          <div id="WeChat">
            <mt-button @click="WeChatPay">微信支付</mt-button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
  import { Cell } from 'mint-ui'
  import Vue from 'vue'
  import router from './../../router/index.js'
  Vue.component(Cell.name, Cell)
//  router.go(0)
  export default {
    data () {
      return {
        chargeTime: null,
        show: false,
        price: null,
        pileId: null,
        status: 0,
        usedVoltage: null,
        serviceFee: null,
        timer: '',
        totalPrice: null
      }
    },
    methods: {
      submit: function () {
        this.pileId = this.$route.params.pileid
        this.$http.post('/charge/create', {pileid: this.pileId}).then(response => {
          let data = response.body
          if (data.code === '00') {
            this.price = data.price
            this.serviceFee = data.servicecharge
            this.usedVoltage = data.usedVoltage
            this.chargeTime = data.chargetime
            this.totalPrice = data.totalPrice
            this.status = data.status
          }
        })
      },
      WeChatPay: function () {
        router.push({path: '/payment/success', params: {pileid: this.pileId}})
      }
    },
    created: function () {
      this.submit()
      this.timer = setInterval(this.submit, 3000)
    }
  }
</script>
<style>
  #coupon, #wallet, #WeChat{
    padding-top: 20px;
  }
  #payment-button{
    padding-left: 35%;
  }
  .transition-box {
    /*margin-bottom: 10px;*/
    width: 100%;
    height: 250px;
    border-radius: 4px;
    background-color: white;
    text-align: center;
    color: black;
    padding: 20px 20px;
    box-sizing: border-box;
    /*margin-right: 20px;*/
  }
</style>

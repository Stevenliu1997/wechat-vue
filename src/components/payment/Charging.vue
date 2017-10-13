<template>
  <div>
    <mt-cell title="已充时间" v-model="chargeTime"></mt-cell>
    <mt-cell title="电价" v-model="price"></mt-cell>
    <mt-cell title="服务费" v-model="serviceFee"></mt-cell>
    <mt-cell title="用电量" v-model="usedVoltage"></mt-cell>
    <mt-cell title="总价" v-model="totalPrice"></mt-cell>
    <div v-show="show">订单编号: {{this.orderId}}</div>
    <div id="payment-button">
      <el-button type="primary" @click="show = !show">确认支付</el-button>
    </div>
    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition>
        <div v-show="show" class="transition-box">
          <hr>
          <div id="price"><i class="fa fa-jpy" aria-hidden="true">{{this.totalPrice}}</i></div>
          <div id="coupon">
            <i class="fa fa-caret-right" aria-hidden="true" v-on:click="">已使用七折折扣券</i>
          </div>
          <div id="wallet">
            <mt-button @click="WalletPay">钱包支付</mt-button>
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
  import MtButton from '../../../node_modules/mint-ui/packages/button/src/button.vue'
  import wx from 'weixin-js-sdk'

  Vue.component(Cell.name, Cell)
  export default {
    components: {MtButton},
    data () {
      return {
        chargeTime: null,
        show: false,
        price: null,
        pileId: null,
        orderId: null,
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
            this.orderId = data.orderid
          }
        })
      },
      WalletPay: function () {
        router.push({path: '/payment/success', params: {pileid: this.pileId}})
      },
      WeChatPay: function () {
        wx.ready(function () {
          wx.chooseWXPay({
            timestamp: 123456, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
            nonceStr: '123456', // 支付签名随机串，不长于 32 位
            package: '', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
            signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            paySign: '', // 支付签名
            success: function (res) {
              // 支付成功后的回调函数
              router.push({path: '/payment/success', params: {pileid: this.pileId}})
            },
            cancel: function (res) {
              alert('取消支付')
            },
            fail: function (res) {
              alert('支付失败')
            }
          })
        })
      }
    },
    created: function () {
      this.submit()
      this.timer = setInterval(this.submit, 3000)
    }
  }
</script>
<style>
  #coupon, #wallet, #WeChat {
    padding-top: 20px;
    padding-left: 0px;
  }

  #payment-button {
    padding-top: 50px;
    padding-left: 28%;
  }

  .transition-box {
    /*margin-bottom: 10px;*/
    width: 100%;
    height: 250px;
    border-radius: 4px;
    background-color: white;
    text-align: center;
    color: black;
    /*padding: 20px 20px;*/
    box-sizing: border-box;
    margin-right: 140px;
  }
</style>

<template>
  <div>
    <mt-cell title="已充时间" v-model="chargeTime"></mt-cell>
    <mt-cell title="电价" v-model="price"></mt-cell>
    <mt-cell title="服务费" v-model="serviceFee"></mt-cell>
    <mt-cell title="用电量" v-model="usedVoltage"></mt-cell>
    <mt-cell title="总价" v-model="totalPrice"></mt-cell>
    <div v-show="show">订单编号: {{this.orderId}}</div>
    <div style="display: flex; justify-content: center; align-items: center;">
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
        data: null,
        usedVoltage: null,
        serviceFee: null,
        timer: '',
        totalPrice: null
      }
    },
    methods: {
      submit: function () {
        this.pileId = router.history.current.query.pileid
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
        this.$http.post('/charge/walletpay', {orderid: this.orderId}).then(response => {
          let data = response.body
          if (data.code === '00') {
            console.log('付款成功')
            router.push({path: '/payment/success', params: {pileid: this.pileId}})
          }
        })
      },
      WeChatPay: function () {
        this.$http.post('/charge/wechatpay', {orderid: this.orderId}).then(response => {
          let data = response.body
          wx.ready(function () {
            if (data.code === '00') {
              alert('进入if')
              wx.chooseWXPay({
                timestamp: data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
                package: 'prepay_id=' + data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                paySign: data.paySign, // 支付签名
                success: function (res) {
                  // 支付成功后的回调函数
                  router.push({path: '/payment/success', params: {pileid: this.pileId}})
                },
                cancel: function (res) {
                  alert('取消支付')
                },
                fail: function (res) {
                  alert(JSON.stringify(res))
                  alert('支付失败')
                }
              })
            } else {
              alert('后端传入传输出错')
            }
          })
        })
      }
//        alert('进入WeChatPay')
//        if (typeof WeixinJSBridge === 'object' && typeof WeixinJSBridge.invoke === 'function') {
//          alert('进入if')
//          this.onBridgeReady()
//        } else {
//          alert('进入else')
//          if (document.addEventListener) {
//            alert('进入second if')
//            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false)
//          } else if (document.attachEvent) {
//            alert('进入second else')
//            document.attachEvent('WeixinJSBridgeReady', onBridgeReady)
//            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady)
//          }
//        }
//      },
//      onBridgeReady: function () {
//        alert('进入onBridge')
//        this.$http.post('/charge/wechatpay', {orderid: this.orderId}).then(response => {
//          alert('进入post')
//          this.data = response.body
//          alert(this.data.paySign)
//        })
//        WeixinJSBridge.invoke('getBrandWCPayRequest', {
//          appId: this.data.appId,
//          timeStamp: this.data.timeStamp,
//          nonceStr: this.data.nonceStr,
//          package: this.data.package,
//          signType: this.data.signType,
//          paySign: this.data.paySign
//        },
//          function (res) {
//            alert('进入function')
//            if (res.err_msg === 'get_brand_wcpay_request：ok') {
//              alert('进入res.err_msg')
//              router.push({path: '/payment/success', params: {pileid: this.pileId}})
//            } else {
//              alert(JSON.stringify(res))
//              alert('支付失败')
//            }
//          }
//        )
//      }
    },
    created: function () {
      this.$http.post('http://101.37.35.17:8888/wconfig', 'http://3297449167.tunnel.qydev.com/#/payment/Charging').then(function (data) {
        wx.config({
          debug: true,
          appId: data.data.appId,
          timestamp: data.data.timestamp,
          nonceStr: data.data.nonceStr,
          signature: data.data.signature,
          jsApiList: ['chooseWXPay']
        })
      })
      this.submit()
      this.timer = setInterval(this.submit, 3000)
    }
  }
</script>
<style>
  #coupon, #wallet, #WeChat {
    padding-top: 20px;
  }

  .transition-box {
    width: 100%;
    height: 250px;
    border-radius: 4px;
    background-color: white;
    text-align: center;
    color: black;
    padding: 20px 20px;
    box-sizing: border-box;
  }
</style>

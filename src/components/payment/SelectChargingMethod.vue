<template>
  <div>
    <div style="padding-top:20vh;display:flex;justify-content:center;align-items:center;">
      <p>欢迎使用充电桩</p>
    </div>
    <div style="padding-top:5vh;display:flex;justify-content:center;align-items:center;" v-on:click="Scan">
      <mt-button id="button">扫码充电</mt-button>
    </div>
    <div style="padding-top:5vh;display:flex;justify-content:center;align-items:center;" v-on:click="Hand">
      <mt-button>手动输入充电桩编号</mt-button>
    </div>
  </div>
</template>
<script>
  import router from './../../router/index.js'
  import wx from 'weixin-js-sdk'

  export default {
    data () {
      return {
        pileId: null
      }
    },
    methods: {
      Scan: function () {
        this.$http.post('http://101.37.35.17:8888/wconfig', 'http://3297449167.tunnel.qydev.com/#/payment/SelectChargingMethod').then(function (data) {
          wx.config({
            debug: true,
            appId: data.data.appId,
            timestamp: data.data.timestamp,
            nonceStr: data.data.nonceStr,
            signature: data.data.signature,
            jsApiList: ['scanQRCode']
          })
          wx.ready(function () {
            // 点击按钮扫描二维码
            wx.scanQRCode({
              needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
              scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
              success: function (res) {
                let result = res.resultStr // 当needResult 为 1 时，扫码返回的结果
                this.pileId = result.zhuangid
                router.push({path: '/payment/charging', query: {pileid: this.pileId}})
              },
              cancel: function () {
                alert('用户取消扫描')
              }
            })
            wx.error(function (res) {
              alert('出错了：' + res.errMsg) // 这个地方的好处就是wx.config配置错误，会弹出窗口哪里错误，然后根据微信文档查询即可。
            })
          })
        })
      },
      Hand: function () {
        router.push({path: '/payment/input'})
      }
    }
  }
</script>
<style>
  #button {
    background-color: #4caf50;
    color: #ffffff;
  }
</style>

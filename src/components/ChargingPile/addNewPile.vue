<template>
</template>
<script type="text/javascript">
  import wx from 'weixin-js-sdk'
  import router from './../../router/index.js'

  export default ({
    data () {
      return {}
    },
    created: function () {
      this.$http.post('http://101.37.35.17:8888/wconfig',
        {type: 'post'},
        {dataType: 'json'},
        {contentType: 'application/json'},
        {header: {'Access-Control-Allow-Origin': '*'}},
        {data: {'url': location.href.split('#')[0]}}).then(function (data) {
          wx.config({
            debug: true,
            appId: data.data.appId,
            timestamp: data.data.timestamp,
            nonceStr: data.data.nonceStr,
            signature: data.data.signature,
            jsApiList: ['getLocation', 'scanQRCode', 'chooseWXPay']
          })
        })
      wx.ready(function () {
        // 点击按钮扫描二维码
        wx.scanQRCode({
          needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
          scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
          success: function (res) {
            alert(location.href.split('#')[0])
            let result = res.resultStr // 当needResult 为 1 时，扫码返回的结果
            alert(result)
            alert('haha')
            router.push({path: '/ChargingPile/setInformation', params: {info: result}})
          },
          cancel: function () {
            alert('用户取消扫描')
          }
        })
        wx.error(function (res) {
          alert('出错了：' + res.errMsg) // 这个地方的好处就是wx.config配置错误，会弹出窗口哪里错误，然后根据微信文档查询即可。
        })
      })
    }
  })
</script>



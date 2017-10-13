<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import wx from 'weixin-js-sdk'
export default {
  name: 'app',
  created: function() {
    wx.config({
      debug: true,
      appId: 'wx3c908e74903f3b5f',
      timestamp: 123456,
      nonceStr: '123456',
      signature: '6bda47664cf917eac546d9281f3e7118c338b2ac',
      jsApiList: ['getLocation', 'scanQRCode', 'chooseWXPay']
    })
  }
}
</script>
<style>
body {
  margin: 0;
  font-size: 20px;
}

.el-cascader-menu {
  height: 35vh;
  min-width: 0;
}
</style>

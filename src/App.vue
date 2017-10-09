<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
  import wx from 'weixin-js-sdk'
  export default {
    name: 'app',
    created: function () {
      wx.config({
        debug: true,
        appId: 'wx3c908e74903f3b5f',
        timestamp: 1414587457,
        nonceStr: 'aaaaaaa',
        signature: '16950602dc93e4469158bd0cdad0e32d42bfc288',
        jsApiList: ['getLocation']
      })
    }
  }
</script>

<style>
  body {
    margin: 0;
    font-size: 20px;
  }
</style>

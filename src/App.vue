<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
//  import wx from 'weixin-js-sdk'
  //  import * as axios from 'axios'
  export default {
    name: 'app',
    created: function () {
//      this.$http.post('http://101.37.35.17:8888/wconfig',
//        {dataType: 'json'},
//        {contentType: 'application/json'},
//        {header: {'Access-Control-Allow-Origin': '*'}},
//        {url: location.href.split('#')[0]}).then(function (data) {
//          wx.config({
//            debug: true,
//            appId: data.data.appId,
//            timestamp: data.data.timestamp,
//            nonceStr: data.data.nonceStr,
//            signature: data.data.signature,
//            jsApiList: ['getLocation', 'scanQRCode', 'chooseWXPay']
//          })
//        })
//      $.ajax({
//        url: 'http://101.37.35.17:8888/wconfig',
//        type: 'post',
//        dataType: 'json',
//        contentType: 'application/json',
//        data: {
//          'url': location.href.split('#')[0]
//        },
//        success: function (data) {
//          wx.config({
//            debug: true,
//            appId: data.data.appId,
//            timestamp: data.data.timestamp,
//            nonceStr: data.data.nonceStr,
//            signature: data.data.signature,
//            jsApiList: ['getLocation', 'scanQRCode', 'chooseWXPay']
//          })
//        }
//      })
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

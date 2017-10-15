<template>
  <div>
    <div class="mid-section">
      <div class="mt-button">
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="datamodel.phoneNum"></mt-field>
      </div>
      <div class="mt-button">
        <mt-field label="验证码" placeholder="输入验证码" class="button" v-model="datamodel.verificationCode"></mt-field>
        <button v-on:click="getCode" class="button">
          <span v-if="sendMsgDisabled">{{time + '秒后获取'}}</span>
          <span v-if="!sendMsgDisabled">获取验证码</span>
        </button>
      </div>
      <mt-button type="primary" v-on:click="sendCode">确认登陆</mt-button>
    </div>
    <div>
      <p>点击登录，即表示阅读并同意
        <a href="/url">《充电服务条款》</a>
      </p>
    </div>
  </div>
</template>

<script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
<script>
import Vue from 'vue'
import wx from 'weixin-js-sdk'
import { Button } from 'mint-ui'
import MtButton from '../../../node_modules/mint-ui/packages/button/src/button'

Vue.component(Button.name, Button)

export default {
  components: { MtButton },
  name: 'login',
  data() {
    return {
      datamodel: {
        phoneNum: '',
        verificationCode: '',
        weixin: ''
      },
      time: 60,
      sendMsgDisabled: false
    }
  },
  methods: {
    getCode() {
      let me = this
      me.sendMsgDisabled = true
      this.$http.post('/getVerificationCode', { 'phoneNum': this.datamodel.phoneNum })
      let interval = window.setInterval(function() {
        if ((me.time--) <= 0) {
          me.time = 60
          me.sendMsgDisabled = false
          window.clearInterval(interval)
        }
      }, 1000)
    },
    sendCode() {
      localStorage.setItem('account', this.datamodel.weixin)
      this.$http.post('/perInformation/bindWxAndAccount', this.datamodel).then(response => {
        if (response.code === '00') {
          this.$router.push({ path: '/payment/HomePage' })
        }
      })
    }
  },
  created: function() {
    this.$http.post('http://101.37.35.17:8888/wconfig', 'http://3297449167.tunnel.qydev.com/login').then(function(data) {
      wx.config({
        debug: true,
        appId: data.data.appId,
        timestamp: data.data.timestamp,
        nonceStr: data.data.nonceStr,
        signature: data.data.signature,
        jsApiList: ['getLocation']
      })
      wx.ready(function() {
        wx.getLocation({
          type: 'wgs84',
          success: function(res) {
            var latitude = res.latitude
            var longitude = res.longitude
            console.log(latitude)
            console.log(longitude)
          },
          fail: function(res) {
            console.log('failed')
          }
        })
      })
    })
  }
}
</script>
<style scoped>
mt-button {
  display: block;
  margin-bottom: 8px;
  border-radius: 15px;
}

.mid-section {
  margin-top: 50px;
}

.button {
  display: inline-block;
  font-family: ".SF NS Display";
  margin-right: 30px;
}
</style>

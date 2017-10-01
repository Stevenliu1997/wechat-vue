<template>
  <div>
    <div class="mid-section">
      <mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
      <mt-field label="验证码" placeholder="输入验证码"></mt-field>
      <button @click="send">
        <span v-if="sendMsgDisabled">{{time+'秒后获取'}}</span>
        <span v-if="!sendMsgDisabled">send</span>
      </button>
    </div>
    <div>
      <p>点击登录，即表示阅读并同意 <a href="/url">《充电服务条款》</a> </p>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Button } from 'mint-ui'
  Vue.component(Button.name, Button)

  export default {
    name: 'login',
    data () {
      return {
        time: 60,
        sendMsgDisabled: false
      }
    },
    methods: {
      send() {
        let me = this
        me.sendMsgDisabled = true
        let interval = window.setInterval(function() {
          if ((me.time--) <= 0) {
            me.time = 60
            me.sendMsgDisabled = false
            window.clearInterval(interval)
          }
        }, 1000)
      }
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
</style>

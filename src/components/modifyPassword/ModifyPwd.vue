<template>
  <div novalidate>
    <mt-field label="原密码" placeholder="请输入原密码" v-model="pwd.oldPwd" type="password"></mt-field>
    <mt-field label="新密码" placeholder="请输入新密码" v-model="pwd.newPwd" type="password"></mt-field>
    <mt-field label="确认密码" placeholder="请输入确认密码" v-model="pwd.confirmPwd" type="password"></mt-field>
    <mt-button size="large" type="primary" @click="submit">保存</mt-button>
  </div>

</template>

<script>
  import { Toast } from 'mint-ui'
  import router from '@/router/index.js'

  export default {
    name: 'modify-pwd',
    data () {
      return {
        pwd: {
          oldPwd: null,
          newPwd: null,
          confirmPwd: null
        }
      }
    },
    methods: {
      submit: function () {
        if (!this.pwd.oldPwd || !this.pwd.newPwd || !this.pwd.confirmPwd) {
          Toast('请输入完整密码')
          return
        }
        if (this.pwd.newPwd !== this.pwd.confirmPwd) {
          Toast('两次密码不一致')
          return
        }
        // TODO 应该使用post的方式，因为模拟请求post拿不到json，mock时就用get
        // this.$http.post('/mock/modifyPwd.json', this.pwd)
        this.$http.get('/mock/modifyPwd.json', {params: this.pwd}).then(response => {
          let data = response.body
          if (data.code === '00') {
            Toast('修改密码成功')
            router.back()
          }
        }, response => {
          // error callback
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div>
    <div>
      <mt-header title="意见反馈">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
    </div>
    <div>
      <mt-field label="意见反馈" placeholder="意见反馈" type="textarea" rows="4" v-modal="introduction"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
      <mt-button type="default">提交</mt-button>
    </div>
  </div>
</template>

<script>
  import { Header, Field, Button } from 'mint-ui'
  import Vue from 'vue'

  Vue.component(Field.name, Field)
  Vue.component(Header.name, Header)
  Vue.component(Button.name, Button)

  export default {
    name: 'Feedback',
    data () {
      return {}
    }
  }
</script>

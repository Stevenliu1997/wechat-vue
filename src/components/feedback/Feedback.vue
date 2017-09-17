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
      <mt-field label="意见反馈" placeholder="意见反馈" type="textarea" rows="4" v-modal="datamodel.introduction"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="datamodel.phone"></mt-field>
      <mt-button type="default" v-on:click="feedback">提交</mt-button>
    </div>
  </div>
</template>

<script>
  import { Header, Field, Button, MessageBox } from 'mint-ui'
  import Vue from 'vue'

  Vue.component(Field.name, Field)
  Vue.component(Header.name, Header)
  Vue.component(Button.name, Button)

  export default {
    name: 'Feedback',
    data () {
      return {
        datamodel: {
          introduction: null,
          phone: null
        }
      }
    },
    methods: {
      feedback () {
        this.$http.get('').then(response => {
          if (response.code === '00') {
            MessageBox.alert('tips', 'success')
            this.datamodel = {}
          }
        })
      }
    }
  }
</script>

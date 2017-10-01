<template>
  <div>
    <div>
      <mt-header title="消息通知设置">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
    </div>
    <div>
      <div class="button">
        <mt-switch :value.sync="statevalue.charge">充值通知</mt-switch>
      </div>
      <div class="button">
        <mt-switch :value.sync="statevalue.start">充电开始通知</mt-switch>
      </div>
      <div class="button">
        <mt-switch :value.sync="statevalue.end">充电结束通知</mt-switch>
      </div>
      <div class="button">
        <mt-switch :value.sync="statevalue.failed">充电失败通知</mt-switch>
      </div>
    </div>
  </div>
</template>

<script>
  import { Header, Switch } from 'mint-ui'
  import Vue from 'vue'

  Vue.component(Switch.name, Switch)
  Vue.component(Header.name, Header)

  export default {
    name: 'setting',
    data () {
      return {
        statevalue: {
          charge: null,
          start: null,
          end: null,
          failed: null
        }
      }
    },
    methods: {
      sendstate () {
        this.$http.post('', this.statevalue).then(response => {

        })
      }
    }
  }
</script>

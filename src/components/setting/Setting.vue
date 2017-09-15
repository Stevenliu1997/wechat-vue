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
      <mt-switch v-model="value">充值通知</mt-switch>
      <mt-switch v-model="value">充电开始通知</mt-switch>
      <mt-switch v-model="value">充电结束通知</mt-switch>
      <mt-switch v-model="value">充电失败通知</mt-switch>
    </div>
  </div>
</template>

<script>
  import { Header, Switch } from 'mint-ui'
  import Vue from 'vue'

  Vue.component(Switch.name, Switch)
  Vue.component(Header.name, Header)
</script>

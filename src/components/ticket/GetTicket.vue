<template>
  <div>
    <div>
      <mt-header title="兑换优惠卷">
        <router-link to="/self" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <div>
      <div>
        <mt-field label="兑换码" placeholder="请输入兑换码" v-model="chargecode" type="text">
        </mt-field>
      </div>
      <div>
        <mt-button type="primary" v-on:click="getTicket">点击兑换</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
  import { MessageBox } from 'mint-ui'

  export default {
    name: 'getticket',
    data () {
      return {
        chargecode: null
      }
    },
    methods: {
      getTicket () {
        this.$http.get('').then(response => {
          if (response.code === '00') {
            MessageBox.alert('提示', '操作成功')
            this.chargecode = null
          }
        })
      }
    }
  }
</script>

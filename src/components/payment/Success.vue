<template>
  <div>
    <h1 style="text-align: center; padding-top: 150px;" v-html="msg"></h1>
    <div class="button payment-button">
      <router-link to="/payment/homepage" tag="div">
        <mt-button type="primary">回到首页</mt-button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      orderid: this.$route.query.mykey,
      msg: ''
    }
  },
  created: function () {
    this.$http.post('/charge/pay', {orderid: this.orderid}).then(response => {
      let data = response.body
      if (data.code === '00') {
        this.msg = data.message
      }
    })
  }
}
</script>
<style>
  .payment-button{
  }
</style>

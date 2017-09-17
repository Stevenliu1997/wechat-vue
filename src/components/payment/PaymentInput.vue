<template>
<div>
  <div class="QRcode">
    <router-link to="/payment/charging" tag="div">
      <img src="../../assets/PaymentPage/blackberry-qr-code-variant.png" height="64" width="64"/>
    </router-link>
  </div>
  <div class="input-hand">
    <div class="input-part">
      <span>请输入充电桩编号</span>
    </div>
    <br/><br/>
    <div class="input-part">
      <input type="text" v-model="pileid"/>
    </div>
    <br/><br/>
    <div class="input-part">
      <div class="button">
        <mt-button type="primary" @click="submit()">确认</mt-button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default{
  name: '',
  data () {
    return {
      pileid: ''
    }
  },
  methods: {
    submit: function () {
      this.$http.get('mock/charge/create.json', {pileid: this.pileid}).then(response => {
        let data = response.body
        if (data.code === '00') {
          this.$router.push({
            path: '/payment/charging',
            query: {
              mykey: data.orderid,
              number: data.ordernumber
            }
          })
        }
      })
    }
  }
}
</script>
<style>
.QRcode{
  display: inline;
  position: absolute;
  top:25px;
  right:25px;
}
  .input-hand{
    top: 380px;
    margin:0 auto;
    display:block;
    float:left;
    position:relative;
    left:50%;
  }
  .input-part{
    position:relative;
    left:-50%;
  }
</style>

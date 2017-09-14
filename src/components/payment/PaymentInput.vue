<template>
<div>
  <div class="QRcode">
    <img src="../../assets/PaymentPage/blackberry-qr-code-variant.png" height="64" width="64"/>
  </div>
  <div class="input-hand">
    <span class="input-part">请输入充电桩编号</span>
    <input type="text" placeholder="单行输入" v-model="code" class="input-part"/>
    <mt-button type="primary" class="input-part">确认</mt-button>
  </div>
</div>
</template>
<script>
export default{
  name: '',
  data () {
    return {
      code: ''
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
    top: 500px;
    margin:0 auto;
    display:block;
    position: relative;
    left: 50%;
  }
  .input-part{
    display: block;
    position: relative;
    left: -50%;
  }
</style>

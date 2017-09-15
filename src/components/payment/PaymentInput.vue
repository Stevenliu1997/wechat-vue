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
      <input type="text" placeholder="单行输入" v-model="code"/>
    </div>
    <br/><br/>
    <div class="input-part">
      <div class="button">
        <router-link to="/payment/charging" tag="div">
          <mt-button type="primary">确认</mt-button>
        </router-link>
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
    float:left;
    position:relative;
    left:50%;
  }
  .input-part{
    position:relative;
    left:-50%;
  }
</style>

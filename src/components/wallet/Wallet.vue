<template>
  <div class="container">
    <mt-header title="余额">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="middlessection">
      <div>
        <img v-bind:src="walletIcon" class="middleicon">
      </div>
      <div>
        可用余额
      </div>
      <div id="leftmoney">
        {{treasure.balance}}
      </div>
    </div>

    <div class="tailsection">
      <router-link to="/getrecharge" tag="div">
        <mt-button type="primary" class="button">
          充值
        </mt-button>
      </router-link>
      <router-link to="/orderlist" tag="div">
        <mt-button type="default" class="button">
          交易明细
        </mt-button>
      </router-link>
    </div>
  </div>
</template>
<script>
  import walletIcon from '@/assets/icon/self/009-wallet.svg'
  export default {
    name: 'wallet',
    data () {
      return {
        walletIcon: walletIcon,
        treasure: {
          balance: 0
        }
      }
    }
  }
</script>
<style>
  .middleicon {
    width: 150px;
    height: 150px;
    margin-top: 100px;
    margin-bottom: 20px;
  }
  .middlessection {
    height: 525px;
    text-align: center;
    font-family: ".SF NS Text";
    font-size: large;
  }
  #leftmoney {
    font-size: xx-large;
  }
  .tailsection{
    width: 100%;
    text-align: center;
    margin-bottom: 5px;
  }
  .button{
    margin-left: 75px;
    margin-bottom: 10px;
    width: 60%;
    display: block;
  }
</style>

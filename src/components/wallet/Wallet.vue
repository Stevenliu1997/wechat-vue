<template>
  <div>
    <div>
      <mt-header title="标题">
        <router-link to="/self" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
    </div>

    <div>
      <div>
        <img v-bind:src="walletIcon" class="middleicon">
      </div>
      <div>
        可用余额
      </div>
      <div>
        {{treasure.balance}}
      </div>
    </div>

    <div>
      <mt-button type="primary">
        <router-link to="" tag="div">
          充值
        </router-link>
      </mt-button>
      <mt-button type="default">
        <router-link to="/orderlist">
          交易明细
        </router-link>
      </mt-button>
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
    width: 120px;
    height: 120px;
  }
</style>

<template>
  <div>
    <div>
      <mt-header title="我的账户">
        <router-link to="/payment/homepage" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <div class="self-head">
      <div class="pt-8vh">
        <img v-bind:src="treasure.headImg" class="left-icon">
      </div>
      <router-link to="/infomation" tag="div">
        {{treasure.nickName}}
      </router-link>
    </div>

    <div>
      <mt-cell title="我的钱包">
        <img slot="icon" v-bind:src="walletIcon" class="left-icon">
      </mt-cell>
      <mt-cell>
        <div slot="title" class="cell-three-buttons">

          <div class="button">
            <div>
              <img v-bind:src="moneyIcon" class="left-icon">
            </div>
            <div>
              {{treasure.balance}}
            </div>
            <router-link to="/wallet" tag="div">
              余额
            </router-link>
          </div>

          <div class="button">
            <div>
              <img v-bind:src="ticketIcon" class="left-icon">
            </div>
            <div>
              {{treasure.voucherCount}}
            </div>
            <router-link to="/ticket" tag="div">
              折扣券
            </router-link>
          </div>
        </div>
      </mt-cell>
    </div>
    <div class="mt-2vh">
      <mt-cell title="我的订单" is-link router-link to="/orderlist" tag="div">
        <img slot="icon" v-bind:src="orderIcon" class="left-icon">
      </mt-cell>
      <mt-cell title="运维管理" is-link router-link to="/ChargingPile/ChargingPileInfo" tag="div">
        <img slot="icon" v-bind:src="manageIcon" class="left-icon">
      </mt-cell>
    </div>

    <div class="mt-2vh">
      <mt-cell title="意见反馈" is-link router-link to="/feedback" tag="div">
        <img slot="icon" v-bind:src="suggestIcon" class="left-icon">
      </mt-cell>
      <mt-cell title="设置" is-link router-link to="/setting" tag="div">
        <img slot="icon" v-bind:src="settingIcon" class="left-icon">
      </mt-cell>
    </div>
    <div>
      <mt-button type="danger">解除绑定</mt-button>
    </div>
  </div>
</template>

<script>
  import billIcon from '@/assets/icon/self/invoice.svg'
  import walletIcon from '@/assets/icon/self/009-wallet.svg'
  import moneyIcon from '@/assets/icon/self/008-dollar-bills.svg'
  import ticketIcon from '@/assets/icon/self/007-tickets.svg'
  import orderIcon from '@/assets/icon/self/006-list.svg'
  import receiptIcon from '@/assets/icon/self/005-receipt.svg'
  import suggestIcon from '@/assets/icon/self/004-commercial.svg'
  import manageIcon from '@/assets/icon/self/002-management.svg'
  import settingIcon from '@/assets/icon/self/001-cogwheel.svg'
  import accountIcon from '@/assets/icon/self/round-account.svg'
  import MtButton from '../../../node_modules/mint-ui/packages/button/src/button'

  export default {
    components: {MtButton},
    name: 'self',
    data () {
      return {
        walletIcon: walletIcon,
        moneyIcon: moneyIcon,
        ticketIcon: ticketIcon,
        orderIcon: orderIcon,
        receiptIcon: receiptIcon,
        suggestIcon: suggestIcon,
        manageIcon: manageIcon,
        settingIcon: settingIcon,
        selfPortrait: billIcon,
        accountIcon: accountIcon,
        cellPhone: null,
        treasure: {
          balance: null,
          headImg: null,
          voucherCount: null,
          nickName: null
        }
      }
    },
    methods: {
    },
    created: function () {
      this.$http.post('/perInformation/getBaseMsg', {}).then(response => {
        if (response.code === '00') {
          let data = response.body
          this.treasure.balance = data.userInfo.balance
          this.cellPhone = data.userInfo.cellPhone
        }
      }, response => {
        console.log('failed')
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .left-icon {
    width: 24px;
    height: 24px;
  }

  .self-head {
    height: 20vh;
    width: 100vw;
    text-align: center;
    font-size: 20px;
    margin-bottom: 3px;
    margin-top: 0px;
    padding-top: 1px;
  }

  .cell-three-buttons {
    width: 100vw;
    height: 70px;
    text-align: center;
  }

  .cell-three-buttons .button {
    width: 32%;
    margin-top: 5px;
    display: inline-block;
  }
</style>

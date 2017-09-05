<template>
  <div>
    <div class="self-head">
      <div class="pt-8vh">
        <img v-bind:src="selfPortrait" class="left-icon">
      </div>
      <div>
        {{cellPhone}}
      </div>
    </div>

    <div>
      <mt-cell title="我的钱包">
        <img slot="icon" v-bind:src="billIcon" class="left-icon">
      </mt-cell>
      <mt-cell>
        <div slot="title" class="cell-three-buttons">
          <div class="button">
            <div>
              <img v-bind:src="selfPortrait" class="left-icon">
            </div>
            <div>
              {{treasure.balance}}
            </div>
            <div>
              余额
            </div>
          </div>

          <div class="button">
            <div>
              <img v-bind:src="selfPortrait" class="left-icon">
            </div>
            <div>
              0.00
            </div>
            <div>
              代金券
            </div>
          </div>

          <div class="button">
            <div>
              <img v-bind:src="selfPortrait" class="left-icon">
            </div>
            <div>
              0.00
            </div>
            <div>
              优惠券
            </div>
          </div>
        </div>
      </mt-cell>

    </div>
    <div class="mt-2vh">
      <mt-cell title="我的账单" is-link router-link to="/recharge" tag="div">
        <img slot="icon" v-bind:src="billIcon" class="left-icon">
      </mt-cell>
      <mt-cell title="我的订单" is-link router-link to="/recharge" tag="div">
        <img slot="icon" v-bind:src="billIcon" class="left-icon">
      </mt-cell>
      <mt-cell title="我的发票" is-link router-link to="/recharge" tag="div">
        <img slot="icon" v-bind:src="billIcon" class="left-icon">
      </mt-cell>
    </div>

    <div class="mt-2vh">
      <mt-cell title="我的评论" is-link router-link to="/recharge" tag="div">
        <img slot="icon" v-bind:src="billIcon" class="left-icon">
      </mt-cell>
      <mt-cell title="意见反馈" is-link @click.native="feedback">
        <img slot="icon" v-bind:src="billIcon" class="left-icon">
      </mt-cell>
      <mt-cell title="修改密码" is-link router-link to="/modifyPwd" tag="div">
        <img slot="icon" v-bind:src="billIcon" class="left-icon">
      </mt-cell>
    </div>


  </div>
</template>

<script>
  import billIcon from '@/assets/icon/self/invoice.svg'
  import { Toast } from 'mint-ui'

  export default {
    name: 'self',
    data () {
      return {
        billIcon: billIcon,
        selfPortrait: billIcon,
        cellPhone: null,
        treasure: {
          balance: 0
        }
      }
    },
    methods: {
      feedback: function () {
        this.treasure.balance = 500
        Toast('feedBack')
      }
    },
    created: function () {
      this.$http.get('/mock/self.json').then(response => {
        let data = response.body
        this.treasure.balance = data.userInfo.balance
        this.cellPhone = data.userInfo.cellPhone
      }, response => {
        // error callback
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
    background: url("../../assets/logo.png") center no-repeat;
    background-size: 100vw 20vh;
    text-align: center;
    font-size: 20px;
    margin-bottom: 3px;
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

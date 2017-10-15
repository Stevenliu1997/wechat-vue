<template>
  <div>
    <div class="topsection">
      <div class="top">
        <mt-field label="代金券" placeholder="请输入兑换码" v-model="datamodel.voucher.code"></mt-field>
      </div>
      <div class="top">
        <mt-button type="primary" v-on:click="getTicket">兑换</mt-button>
      </div>
    </div>
    <div>
      <div>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="datamodel.rechargeRecord.phone"></mt-field>
      </div>
      <div>
        <div class=".cell-three-buttons">
          <div class="button" v-on:click="datamodel.rechargeRecord.amount = 100">
            100
          </div>
          <div class="button" v-on:click="datamodel.rechargeRecord.amount = 200">
            200
          </div>
          <div class="button" v-on:click="datamodel.rechargeRecord.amount = 300">
            300
          </div>
          <div class="button" v-on:click="datamodel.rechargeRecord.amount = 400">
            400
          </div>
          <div class="button" v-on:click="datamodel.rechargeRecord.amount = 500">
            500
          </div>
          <div class="button" v-on:click="datamodel.rechargeRecord.amount = 600">
            600
          </div>
        </div>
        <div>
          <mt-field label="金额" placeholder="请输入充值金额" type="number" v-model="datamodel.rechargeRecord.amount"></mt-field>
        </div>
      </div>
      <div>
        <mt-button type="primary" v-on:click="sendcharge" class="lastbutton">立即充值</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'getrecharge',
    data () {
      return {
        datamodel: {
          voucher: {
            code: '',
            starttime: '',
            account: ''
          },
          rechargeRecord: {
            payaccount: '',
            phone: '',
            amount: 0,
            paydate: ''
          },
          choose: null
        }
      }
    },
    method: {
      sendcharge () {
        this.datamodel.choose = 1
        this.datamodel.rechargeRecord.pavdate = new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate() + ' ' + new Date().toLocaleTimeString('en-GB')
        this.datamodel.rechargeRecord.payaccount = localStorage.getItem('account')
        this.$http.post('/rechargeorexchange', this.datamodel).then(response => {
          if (response.code === '00') {
            this.$router.push({path: '/self'})
          }
        }, response => {
          console.log('failed')
        })
      },
      getTicket () {
        this.datamodel.choose = 0
        this.datamodel.voucher.starttime = new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate()
        this.datamodel.voucher.account = localStorage.getItem('account')
        this.$http.post('/rechargeorexchange', this.datamodel).then(response => {
          if (response.code === '00') {
            this.MessageBox('success')
            this.$router.push({path: '/self'})
          }
        })
      }
    }
  }
</script>

<style>
  .cell-three-buttons {
    width: 32%;
    margin-top: 5px;
    display: inline-block;
  }
  .button {
    width: 32%;
    height: 50px;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 32px;
    display: inline-block;
    background-color: #26a2ff;
    text-align: center;
  }
  .top {
    display: inline-block;
  }
  .lastbutton {
    margin-top: 30px;
    margin-left: 120px;
  }
</style>

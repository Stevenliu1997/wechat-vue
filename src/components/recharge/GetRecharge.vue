<template>
  <div>
    <div class="topsection">
      <div class="top">
        <mt-field label="代金券" placeholder="请输入兑换码" v-model="moneycode"></mt-field>
      </div>
      <div class="top">
        <mt-button type="primary" v-on:click="getTicket">兑换</mt-button>
      </div>
    </div>
    <div>
      <div>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="datamodel.telephone"></mt-field>
      </div>
      <div>
        <div class=".cell-three-buttons">
          <div class="button" v-on:click="datamodel.chargeAmount = 100">
            100
          </div>
          <div class="button" v-on:click="datamodel.chargeAmount = 200">
            200
          </div>
          <div class="button" v-on:click="datamodel.chargeAmount = 300">
            300
          </div>
          <div class="button" v-on:click="datamodel.chargeAmount = 400">
            400
          </div>
          <div class="button" v-on:click="datamodel.chargeAmount = 500">
            500
          </div>
          <div class="button" v-on:click="datamodel.chargeAmount = 600">
            600
          </div>
        </div>
        <div>
          <mt-field label="金额" placeholder="请输入充值金额" type="number" v-model="datamodel.chargeAmount"></mt-field>
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
          telehpone: null,
          chargeAmount: 0
        },
        moneycode: null
      }
    },
    method: {
      sendcharge () {
        this.$http.post('').then(response => {
          if (response.code === '00') {
            let data = response.result
            alert(data) // todo change alert
            this.$router.push({path: '/self'})
          }
        }, response => {
          console.log('failed')
        })
      },
      getTicket () {
        this.$http.post('', this.moneycode).then(response => {
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

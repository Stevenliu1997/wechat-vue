<template>
  <div>
    <mt-header title="余额充值">
      <router-link to="/self" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
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
        <mt-button type="primary" v-on:click="sendcharge">立即充值</mt-button>
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
        }
      }
    },
    method: {
      rollback () {
        this.datamodel = {}
      },
      sendcharge () {
        this.$http.get('').then(response => {
          if (response.code === '00') {
            let data = response.result
            alert(data) // todo change alert
            this.rollback()
          }
        }, response => {
          console.log('failed')
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
</style>

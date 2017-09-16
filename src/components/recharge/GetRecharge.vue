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
        <mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
      </div>
      <div>
        <div class=".cell-three-buttons">
          <div class="button">
            100
          </div>
          <div class="button">
            100
          </div>
          <div class="button">
            100
          </div>
          <div class="button">
            100
          </div>
          <div class="button">
            100
          </div>
          <div class="button">
            100
          </div>
        </div>
        <div>
          <mt-field label="金额" placeholder="请输入充值金额" type="number"></mt-field>
        </div>
      </div>
      <div>
        <mt-button type="primary">立即充值</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'getrecharge',
    data () {
      return {}
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

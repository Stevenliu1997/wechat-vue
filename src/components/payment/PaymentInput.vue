<template>
  <div>
    <div style="display: flex; justify-content: center; align-items: center; padding-top: 30%">
      <p>请输入充电桩编号</p>
    </div>

    <div style="display: flex; justify-content: center; align-items: center; padding-top: 5%">
      <input type="text" placeholder="单行输入" v-model="pileId"/>
    </div>

    <div style="display: flex; justify-content: center; align-items: center; padding-top: 10%">
      <mt-button v-on:click="handIn">确认</mt-button>
    </div>

  </div>
</template>
<script>
  import router from './../../router/index.js'
  export default {
    data () {
      return {
        pileId: null
      }
    },
    methods: {
      handIn: function () {
        router.push({path: '/payment/charging', query: {pileid: this.pileId}})
      }
    }
  }
</script>
<style>
  input {
    border: 1px solid;
    border-radius: 10px;
    width: 200px;
    height: 40px;
  }
</style>

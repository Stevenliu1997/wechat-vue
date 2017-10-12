<template>
  <div>
    <div>
      <p>请输入充电桩编号</p>
    </div>

    <div id="div-2">
      <input type="text" placeholder="单行输入" v-model="pileId"/>
    </div>

    <div id="div-3" >
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
        router.push({path: '/payment/charging', params: {pileid: this.pileId}})
      }
    }
  }
</script>
<style>
  p {
    padding-top: 100px;
    padding-left: 30%;
  }

  input {
    border: 1px solid;
    border-radius: 10px;
    width: 200px;
    height: 40px;
  }

  #div-2 {
    padding-left: 25%;
  }

  #div-3 {
    padding-left: 40%;
    padding-top: 20px;
  }
</style>

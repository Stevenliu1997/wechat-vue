<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Cell } from 'mint-ui'

  Vue.component(Cell.name, Cell)

  export default {
    name: 'app'
  }
</script>

<style>
  body {
    margin: 0;
    font-size: 20px;
  }

  .pt-8vh {
    padding-top: 8vh;
  }

  .mt-2vh {
    margin-top: 2vh;
  }
</style>
<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Cell } from 'mint-ui'

  Vue.component(Cell.name, Cell)

  export default {
    name: 'app'
  }
</script>

<style>
  body {
    margin: 0;
    font-size: 20px;
  }

  .pt-8vh {
    padding-top: 8vh;
  }

  .mt-2vh {
    margin-top: 2vh;
  }


</style>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'app'
  }
</script>
<style>
  body {
    margin: 0;
    font-size: 20px;
  }
  .el-cascader-menu {
    height: 35vh;
    min-width: 0;
  }
</style>

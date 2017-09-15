<template>
  <div id="all">
    <div id="head">
      <mt-header id="mt-head">
        <mt-button v-link="'/'" slot="left"><i class="fa fa-arrow-left fa-lg">主页</i></mt-button>
        <mt-button slot="right"><i class="fa fa-user fa-lg"></i></mt-button>
      </mt-header>
    </div>
    <div id="body">
      <img src="./../../assets/ChargingPile/raw_1503022745.png" height="200" width="200">
      <h1>对不起，你没有这个权限</h1>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
  #mt-head{
    background-color: #393a3f;
  }
  img{
    padding-top: 80px;
  }
</style>

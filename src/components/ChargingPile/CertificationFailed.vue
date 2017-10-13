<template>
  <div id="all">
    <div id="head">
      <mt-header id="mt-head">
        <mt-button v-link="'/'" slot="left"><i class="fa fa-arrow-left fa-lg">主页</i></mt-button>
        <mt-button slot="right"><i class="fa fa-user fa-lg"></i></mt-button>
      </mt-header>
    </div>
    <div id="body">
      <i class="fa fa-exclamation fa-3x" aria-hidden="true" id="exclamation"></i>
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
  /*img{*/
    /*padding-left: 100px;*/
    /*padding-top: 80px;*/
  /*}*/
  #body{
    padding-top: 100px;
  }
  #exclamation{
    padding-left: 180px;
  }
</style>

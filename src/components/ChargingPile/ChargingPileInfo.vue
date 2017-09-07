<template>
  <div id="all">
    <div id="head">
      <mt-header id="mt-head">
        <mt-button v-link="'/'" slot="left"><i class="fa fa-arrow-left fa-lg">充电桩信息</i></mt-button>
      </mt-header>
    </div>
    <div id="middle">
      <button><i class="fa fa-angle-down" id="middle-font">筛选</i></button>
    </div>
    <div id="bottom">

    </div>
  </div>
</template>
<style scoped>
  #mt-head{
    background-color: #393a3f;
  }
  #middle{
    display: flex;
    justify-content: flex-start;
    padding-left: 40px;
  }
  #middle-font{
    font-size: large;
  }
  .icon-img{
    padding-left: 20px;
  }
</style>


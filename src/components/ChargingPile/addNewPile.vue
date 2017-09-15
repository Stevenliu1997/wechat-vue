<template>
  <div id="all">
    <h3>新增设备</h3>
    <!--添加一道横线-->
    <hr>
    <form action="form_action.asp" method="get" id="form1">
    <div id="body">
      <ul>
        <li><span style="display:inline-block;width:70px;text-align:left;">设备名称</span> <input class="input" type="text"/></li>
        <li><span style="display:inline-block;width:70px;text-align:left;">设备型号</span> <input class="input" type="text"/></li>
        <li><span style="display:inline-block;width:70px;text-align:left;">站点ID</span>  <input class="input" type="text"/></li>
        <li>
          <span style="display:inline-block;width:70px;text-align:left;">电源类型</span>
          <select name="cars">
            <option value="volvo">类型1</option>
            <option value="saab">类型2</option>
          </select>
        </li>
        <ul class="menu">
          <li>电压<input class="input-1" type="text"/></li>
          <li>电流<input class="input-1" type="text"/></li>
          <li>功率<input class="input-1" type="text"/></li>
        </ul>
        <br>
        <br>
        <li><span style="display:inline-block;width:70px;text-align:left;">接口类型</span> <input class="input" type="text"/></li>
        <li><span style="display:inline-block;width:70px;text-align:left;">接口标准</span> <input class="input" type="text"/></li>
        <li><span style="display:inline-block;width:70px;text-align:left;">程序ID</span> <input class="input" type="text"/></li>
        <li><span style="display:inline-block;width:70px;text-align:left;">产商ID</span> <input class="input" type="text"/></li>
        <li><span style="display:inline-block;width:70px;text-align:left;">设备备注</span> <input class="input" type="text"/></li>
        <li><span style="display:inline-block;width:70px;text-align:left;">地址信息</span> <input class="input" type="text"/></li>
        <!--<input type="submit" value="Submit">-->
      </ul>
    </div>
      <hr>
      <div id="bottom">
        <ul class="menu">
          <li class="bottom-li"><mt-button v-on:click="" >保存</mt-button></li>
          <li class="bottom-li"><mt-button @click="goBack" >返回</mt-button></li>
        </ul>
      </div>
    </form>

  </div>
</template>
<script>
  export default {
//    el: '#all',
    data () {
      return {}
    },
    methods: {
      goBack: function () {
        this.$route.push({path: '/ChargingPile/ChargingPileInfo'})
      }
    }
  }
</script>
<style scoped>
  h3{
    display: flex;
    padding-left:40px;
  }
  .input{
    margin-left: 15px;
    border: 1px solid;
  }
  li{
    display: flex;
    /*justify-content: flex-start;*/
    list-style-type :none;
    padding-top: 5px;
  }
  select{
    margin-left: 15px;
    border: 1px solid;
    width: 130px;
  }
  .menu li{
    float: left;
  }
  .input-1{
    width: 36px;
    margin-left: 10px;
    border: 1px solid;

  }
  .bottom-li{
    display: inline-block;
    padding-left: 95px;
  }
</style>

<template>
  <div id="all">
    <div id="head">
      <mt-header id="mt-head">
        <mt-button router-link="'/'" slot="left"><i class="fa fa-arrow-left fa-lg">充电桩信息</i></mt-button>
      </mt-header>
    </div>
    <div id="middle">
      <i @click="handleClick" class="fa fa-angle-down" id="middle-font" v-if="isVisible">筛选</i>
      <i @click="handleClick" class="fa fa-angle-up"  v-if="!isVisible">筛选</i>
      <mt-popup id="mt-popup" position="top" pop-transition="popup-fade" v-model="popupVisible">
        <mt-field label="设备ID" placeholder="请输入设备ID"></mt-field>
        <mt-field label="站点ID" placeholder="请输入站点ID"></mt-field>
        <mt-field label="厂商ID" placeholder="请输入厂商ID"></mt-field>
        <mt-field label="设备名称" placeholder="请输入设备名称"></mt-field>
        <mt-cell title="设备故障状态">
          <select>
            <option>是</option>
            <option>否</option>
          </select>
        </mt-cell>
        <mt-button id="search" @click="hunt">查询</mt-button>
      </mt-popup>
    </div>
    <!--<hr>-->
      <mt-cell v-for="(chargingPileInfo, index) in dataSet" :key="chargingPileInfo.pileid">
        <div slot="title" class="four-cells">
          <div class="cell" id="cell-serial">
              {{index+1}}
          </div>
          <div class="cell">
            <div><img src="./../../assets/ChargingPile/raw_1502702313.png" width="96" height="96"/></div>
            <div><img src="./../../assets/ChargingPile/1.png" width="24" height="24" class="img-2"/></div>
          </div>
          <div class="cell">
            <ul>
            <li>设备ID{{chargingPileInfo.pileid}}</li>
            <li>站点ID{{chargingPileInfo.siteid}}</li>
            <li>厂商ID{{chargingPileInfo.factoryid}}</li>
            <li>设备名称{{chargingPileInfo.pilename}}</li>
            </ul>
          </div>

          <div class="cell">
            <i id="angle-bottom" class="fa fa-angle-right fa-2x" aria-hidden="true" v-on:click="ChargingPileDetail(chargingPileInfo.pileid)"></i>
          </div>
        </div>

      </mt-cell>

    <div id="addNewPile" v-on:click="addNewPile">
      <i id="addNewPile-angle" class="fa fa-plus fa-1x" aria-hidden="true" ></i>
      <p>新增充电桩</p>
    </div>
  </div>
</template>
<script>
  import router from './../../router/index.js'
  import MtPopup from '../../../node_modules/mint-ui/packages/popup/src/popup.vue'
  import MtCell from '../../../node_modules/mint-ui/packages/cell/src/cell.vue'
  export default {
    components: {
      MtCell,
      MtPopup},
    data () {
      return {
        popupVisible: false,
        isVisible: true,
        serialNumber: 0,
        dataSet: []
      }
    },
    methods: {
      addNewPile: function () {
        router.push({path: '/ChargingPile/addNewPile'})
      },
      ChargingPileDetail: function (id) {
        router.push({path: '/ChargingPile/ChargingPileDetail', query: {id: id}})
      },
      handleClick: function () {
        this.isVisible = false
        this.popupVisible = true
      },
      hunt: function () {
        this.popupVisible = false
        this.isVisible = true
      }
    },
    created: function () {
      this.$http.post('/PileDetailInformation/Find').then(response => {
        let info = response.body
        this.dataSet = info.data
      }, response => {
        // error callback
      })
    }
  }
</script>
<style scoped>
  #search{
    margin-left: 40%;
  }
  #mt-popup{
    width: 100%;
    margin-top: 104px;
  }
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
    padding-top: 5px;
  }
  li{
    list-style-type: none;
  }
  #angle-bottom{
    margin-left: 50px;
    padding-top: 30px;
  }
  p{
    color: white;
    bottom: 0px;
    position:absolute;
    padding-bottom:10px;
    padding-left: 50%;
    margin:0px
  }
  #addNewPile{
    width: 100%;
    height: 50px;
    background-color: #858285;
    bottom: 0px;
    position:fixed;
    padding-bottom:0px;
    margin:0px
  }
  #addNewPile-angle{
    color: white;
    bottom: 0px;
    position:absolute;
    padding-bottom:15px;
    padding-left: 40%;
    margin:0px;
    color: white;
  }
  .four-cells {
    vertical-align: middle;
    width: 100%;
    height: auto;
    text-align: center;
  }
  .cell{
    margin-top: 5px;
    float: left;
  }
  #cell-serial{
    padding-top: 50px;
  }

</style>


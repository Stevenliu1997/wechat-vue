<template>
  <div id="all">
    <div id="head">
      <mt-header id="mt-head">
        <mt-button router-link="'/'" slot="left"><i class="fa fa-arrow-left fa-lg" v-on:click="goBack">详细信息</i></mt-button>
      </mt-header>
    </div>
    <div id="body">
      <table width="100%">
        <tr>
          <td width="50%">
            <ul>
              <li><img src="./../../assets/ChargingPile/e-gas-station-2151404_960_720.png" width="96" height="96"/></li>
            </ul>
          </td>
          <td><ul>
            <li>设备ID{{this.chargingPileInfo.deviceModel}}</li>
            <li>站点ID{{this.chargingPileInfo.stationId}}</li>
            <li>厂商ID{{this.chargingPileInfo.manufacturerId}}</li>
            <li>设备名称{{this.chargingPileInfo.deviceName}}</li>
          </ul></td>
        </tr>
      </table>
    </div>
    <div id="bottom">
      <mt-cell>
        <div slot="title">
          <div>设备型号</div>
        </div>
        <div>{{chargingPileInfo.deviceType}}</div>
      </mt-cell>
      <mt-cell>
        <div slot="title">
          <div>工作状态</div>
        </div>
        <div>{{chargingPileInfo.workstation}}</div>
      </mt-cell>
      <mt-cell>
        <div slot="title">
          <div>位置信息</div>
        </div>
        <div>{{chargingPileInfo.location}}</div>
      </mt-cell>
      <mt-cell>
        <div slot="title">
          <div>备注</div>
        </div>
        <div>{{chargingPileInfo.deviceNote}}</div>
      </mt-cell>
      <div id="bt" v-on:click="modifyNote">
        <mt-button>修改备注</mt-button>
      </div>
      <div id="div-message" v-show="isShow">
        <div><textarea id="message" placeholder="多行输入" v-model="modifiedNote"></textarea></div>
        <div id="bt-2" v-on:click="handIn"><mt-button>确认</mt-button></div>
      </div>
    </div>
  </div>
</template>
<script>
  import router from './../../router/index.js'
  import MtButton from '../../../node_modules/mint-ui/packages/button/src/button.vue'
  export default {
    components: {MtButton},
    data () {
      return {
        isShow: false,
        modifiedNote: null,
        pileId: null,
        chargingPileInfo: {
          deviceName: null,
          deviceModel: null,
          stationId: null,
          manufacturerId: null,
          location: null,
          deviceType: null,
          deviceNote: null,
          workstation: null
        }
      }
    },
    methods: {
      goBack: function () {
        router.push({path: '/ChargingPile/chargingPileInfo'})
      },
      modifyNote: function () {
        this.isShow = true
      },
      handIn: function () {
        this.$http.post('/PileInformation/ChangeRemarks', {pileid: this.pileId, remarks: this.modifiedNote}).then(response => {
        }, response => {})
      }
    },
    created: function () {
      this.pileId = router.history.current.query.id
      this.$http.post('/PilePartInformation/Find', this.pileId).then(response => {
        let info = response.body
        if (info.code === '00') {
          this.chargingPileInfo.deviceName = info.list.pilename
          this.chargingPileInfo.deviceModel = info.list.pileid
          this.chargingPileInfo.stationId = info.list.siteid
          this.chargingPileInfo.manufacturerId = info.list.factoryid
          this.chargingPileInfo.location = info.list.position
          this.chargingPileInfo.deviceNote = info.list.remarks
          this.chargingPileInfo.workstation = info.list.workstation
          this.chargingPileInfo.deviceType = info.list.type
        }
      }, response => {
      })
    }
  }
</script>
<style scoped>
  #bt{
    padding-left: 35%;
  }
  #bt-2{
    padding-top: 10px;
    padding-left: 22%;
  }
  li{
    list-style-type :none;
    text-align: center;
  }
  #mt-head{
    background-color: gray;
  }
  #div-message{
    padding-top: 20px;
    padding-left: 21%;
  }
  #message{
    border: 2px solid;
    width: 200px;
    height: 100px;
  }
</style>

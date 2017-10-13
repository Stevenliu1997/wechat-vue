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
      <mt-cell title="设备型号">
        <div>{{chargingPileInfo.deviceModel}}</div>
      </mt-cell>
      <mt-cell title="工作状态">
        <div>{{chargingPileInfo.workstation}}</div>
      </mt-cell>
      <mt-cell title="位置信息">
        <div style="padding-right: 120px">站点A</div>
        <mt-button v-on:click="binding">绑定</mt-button>
        <mt-popup id="mt-popup" position="top" pop-transition="popup-fade" v-model="popupVisible">
         <mt-cell>
           <div slot="title">
             站点A
           </div>
           <mt-button v-on:click="handleClick">绑定</mt-button>
         </mt-cell>
        </mt-popup>
      </mt-cell>
      <div id="bt">
        <mt-button v-on:click="handIn">提交</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
  import router from './../../router/index.js'
  import MtButton from '../../../node_modules/mint-ui/packages/button/src/button.vue'
  import MtCell from '../../../node_modules/mint-ui/packages/cell/src/cell.vue'
  import MtField from '../../../node_modules/mint-ui/packages/field/src/field.vue'
  export default {
    components: {
      MtField,
      MtCell,
      MtButton},
    data () {
      return {
        popupVisible: false,
        latitude: '',
        longitude: 0,
        chargingPileInfo: {
          deviceName: null,
          deviceModel: null,
          stationId: null,
          manufacturerId: null,
          location: null,
          deviceNote: null,
          workstation: null
        }
      }
    },
    methods: {
      goBack: function () {
        router.push({path: '/ChargingPile/chargingPileInfo'})
      },
      binding: function () {
        this.popupVisible = true
      },
      handIn: function () {
        this.$http.post('/PileDetailInformation/Find').then(response => {
          router.push({path: '/ChargingPile/ChargingPileInfo'})
        }, response => {})
      },
      handleClick: function () {
        this.popupVisible = false
      }
    },
    created: function () {
//      if (navigator.geolocation) {
//        let a1 = null
//        navigator.geolocation.getCurrentPosition(
//          function (position) {
//            console.log('haha')
//            a1 = position.coords.longitude
//            console.log(a1)
//            console.log(position.coords.latitude)
//          },
//          function (e) {
//            console.log('hahaha')
//            let msg = e.code
//            let dd = e.message
//            console.log(msg)
//            console.log(dd)
//          }
//        )
//        this.longitude = a1
//        console.log('呵呵')
//        console.log(a1)
//      }
      this.$http.post('/PileDetailInformation/Find').then(response => {
        let info = response.body
        this.chargingPileInfo.deviceName = info.data.pilename
        this.chargingPileInfo.deviceModel = info.data.pileid
        this.chargingPileInfo.stationId = info.data.siteid
        this.chargingPileInfo.manufacturerId = info.data.factoryid
        this.chargingPileInfo.location = info.data.position
        this.chargingPileInfo.deviceNote = info.data.remarks
        this.chargingPileInfo.workstation = info.data.workstation
      }, response => {
      })
    }
  }
</script>
<style scoped>
  #bt{
    padding-top: 15%;
    padding-left: 40%;
  }
  li{
    list-style-type :none;
    text-align: center;
  }
  #mt-head{
    background-color: gray;
  }
  #mt-popup{
    width: 100%;
    margin-top: 90%;
  }
</style>

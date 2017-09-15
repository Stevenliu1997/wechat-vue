<template>
  <div id="all">
    <div id="head">
      <mt-header id="mt-head">
        <mt-button v-link="'/'" slot="left"><i class="fa fa-arrow-left fa-lg" v-on:click="goback">详细信息</i></mt-button>
      </mt-header>
    </div>
    <div id="body">
      <table width="100%">
        <tr>
          <td width="50%">
            <ul>
              <li><img src="./../../assets/ChargingPile/raw_1502702313.png" width="96" height="96"/></li>
              <li><img src="./../../assets/ChargingPile/1.png" width="24" height="24"/></li>
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
        <div>{{chargingPileInfo.deviceModel}}</div>
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
    </div>
  </div>
</template>
<script>
  import router from './../../router/index.js'
  export default {
    data () {
      return {
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
      goback: function () {
        router.push({path: '/ChargingPile/chargingPileInfo'})
      }
    },
    created: function () {
      this.$http.get('/PileDetailInformation/Find').then(response => {
//        console.log(router.history.current.query.id)
        let info = response.body
        info.chargingPileInfo = info.chargingPileInfo.filter(function (item) {
          return item.deviceModel === router.history.current.query.id
        })
        this.chargingPileInfo.deviceName = info.data[0].pilename
        this.chargingPileInfo.deviceModel = info.data[0].pileid
        this.chargingPileInfo.stationId = info.data[0].siteid
        this.chargingPileInfo.manufacturerId = info.data[0].factoryid
        this.chargingPileInfo.location = info.data[0].position
        this.chargingPileInfo.deviceNote = info.data[0].remarks
        this.chargingPileInfo.workstation = info.data[0].workstation
//        console.log(this.data.deviceName)
//        console.log(this.data)
      }, response => {
      })
    }
  }
</script>
<style scoped>
  li{
    list-style-type :none;
    text-align: center;
  }
  #mt-head{
    background-color: gray;
  }
</style>

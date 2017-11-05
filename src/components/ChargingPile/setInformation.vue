<template>
  <div id='all'>
    <div id='head'>
      <mt-header id='mt-head'>
        <mt-button router-link="'/'" slot='left'><i class='fa fa-arrow-left fa-lg' v-on:click='goBack'>详细信息</i>
        </mt-button>
      </mt-header>
    </div>
    <div id='body'>
      <table width='100%'>
        <tr>
          <td width='50%'>
            <ul>
              <li><img src='./../../assets/ChargingPile/e-gas-station-2151404_960_720.png' width='96' height='96'/></li>
            </ul>
          </td>
          <td>
            <ul>
              <li>设备ID{{this.chargingPileInfo.deviceModel}}</li>
              <li>站点ID{{this.chargingPileInfo.stationId}}</li>
              <li>厂商ID{{this.chargingPileInfo.manufacturerId}}</li>
              <li>设备名称{{this.chargingPileInfo.deviceName}}</li>
            </ul>
          </td>
        </tr>
      </table>
    </div>
    <div id='bottom'>
      <mt-cell title='设备型号'>
        <div>{{chargingPileInfo.deviceModel}}</div>
      </mt-cell>
      <mt-cell title='工作状态'>
        <div>{{chargingPileInfo.workstation}}</div>
      </mt-cell>
      <mt-cell title='位置信息'>
        <div style='padding-right: 120px'>{{this.defaultStation}}</div>
        <mt-button v-on:click='binding'>绑定</mt-button>
        <mt-popup id='mt-popup' position='top' pop-transition='popup-fade' v-model='popupVisible'>
          <mt-cell v-for='nbStation in nearbyStation' :key='nbStation.siteid'>
            <div slot='title'>
              {{nbStation.sitename}}
            </div>
            <mt-button v-on:click='handleClick'>绑定</mt-button>
          </mt-cell>
        </mt-popup>
      </mt-cell>
      <div id='bt'>
        <mt-button v-on:click='handIn'>提交</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
  import router from './../../router/index.js'
  import MtButton from '../../../node_modules/mint-ui/packages/button/src/button.vue'
  import MtCell from '../../../node_modules/mint-ui/packages/cell/src/cell.vue'
  import MtField from '../../../node_modules/mint-ui/packages/field/src/field.vue'
  import wx from 'weixin-js-sdk'

  export default {
    components: {
      MtField,
      MtCell,
      MtButton
    },
    data () {
      return {
        popupVisible: false,
        latitude: 0,
        longitude: 0,
        result: null,
        nbStation: null,
        nearbyStation: null,
        defaultStation: '站点A',
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
        this.$http
          .post('/siteinformation/find', {
            longitude: this.longitude,
            latitude: this.latitude
          })
          .then(response => {
            this.nearbyStation = response.body
          })
        this.popupVisible = true
      },
      handIn: function () {
        this.$http.post('/Pile/Add', {info: this.result}).then(
          response => {
            router.push({path: '/ChargingPile/ChargingPileInfo'})
          },
          response => {}
        )
      },
      handleClick: function () {
        this.defaultStation = this.nbStation.sitename
        this.popupVisible = false
      }
    },
    created: function () {
      this.$http
        .post(
          'http://101.37.35.17:8888/wconfig',
          'http://3297449167.tunnel.qydev.com/#/ChargingPile/setInformation'
        )
        .then(function (data) {
          wx.config({
            debug: true,
            appId: data.data.appId,
            timestamp: data.data.timestamp,
            nonceStr: data.data.nonceStr,
            signature: data.data.signature,
            jsApiList: ['getLocation']
          })
          wx.ready(function () {
            wx.getLocation({
              type: 'wgs84',
              success: function (res) {
                this.latitude = res.latitude
                this.longitude = res.longitude
              },
              fail: function (res) {
                console.log('failed')
              }
            })
          })
        })
      this.result = router.history.current.query.info
      this.chargingPileInfo.deviceName = this.result.zhuangname
      this.chargingPileInfo.deviceModel = this.result.leixing
      this.chargingPileInfo.stationId = this.result.data.zhandianid
      this.chargingPileInfo.manufacturerId = this.result.data.changid
      this.chargingPileInfo.location = this.result.data.weizhi
      this.chargingPileInfo.deviceNote = this.result.data.beizhu
      this.chargingPileInfo.workstation = this.result.data.wworkstate
    }
  }
</script>
<style scoped>
  #bt {
    padding-top: 15%;
    padding-left: 40%
  }

  li {
    list-style-type: none;
    text-align: center
  }

  #mt-head {
    background-color: gray
  }

  #mt-popup {
    width: 100%;
    margin-top: 90%
  }
</style>

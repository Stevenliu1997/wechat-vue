<template>
  <div id="all">
    <div id="head">
      <mt-header id="mt-head">
        <mt-button router-link="'/'" slot="left">
          <i class="fa fa-arrow-left fa-lg">充电桩信息</i>
        </mt-button>
      </mt-header>
    </div>
    <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :topDistance=20 @bottom-status-change="handleBottomChange">
      <mt-cell v-for="(chargingPileInfo, index) in dataSet" :key="chargingPileInfo.pileid">
        <el-row slot="title" class="four-cells">

          <el-col :span="1">
            <div class="cell" id="cell-serial">
              {{index + 1}}
            </div>
          </el-col>

          <el-col :span="4" :offset="1">
            <div class="cell">
              <div><img src="./../../assets/ChargingPile/e-gas-station-2151404_960_720.png" width="72" height="72" />
              </div>
            </div>
          </el-col>

          <el-col :span="11" :offset="1">
            <div class="cell">
              <ul>
                <li>设备ID: {{chargingPileInfo.pileid}}</li>
                <li>站点ID: {{chargingPileInfo.siteid}}</li>
                <li>厂商ID: {{chargingPileInfo.factoryid}}</li>
                <li>设备名称: {{chargingPileInfo.pilename}}</li>
              </ul>
            </div>
          </el-col>

          <el-col :span="5" :offset="1">
            <div class="cell">
              <i id="angle-bottom" class="fa fa-angle-right fa-2x" aria-hidden="true" v-on:click="ChargingPileDetail(chargingPileInfo.pileid)"></i>
            </div>
          </el-col>

        </el-row>
      </mt-cell>
      <div slot="bottom" class="mint-loadmore-bottom">
        <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
        <span v-show="bottomStatus === 'loading'">
          <mt-spinner type="snake"></mt-spinner>
        </span>
      </div>
    </mt-loadmore>

    <div id="addNewPile" v-on:click="addNewPile">
      <i id="addNewPile-angle" class="fa fa-plus fa-1x" aria-hidden="true"></i>
      <p>新增充电桩</p>
    </div>
  </div>
</template>
<script>
import router from './../../router/index.js'
import MtPopup from '../../../node_modules/mint-ui/packages/popup/src/popup.vue'
import MtCell from '../../../node_modules/mint-ui/packages/cell/src/cell.vue'
import MtLoadmore from '../../../node_modules/mint-ui/packages/loadmore/src/loadmore.vue'
import ElCol from 'element-ui/packages/col/src/col'
import wx from 'weixin-js-sdk'

export default {
  components: {
    ElCol,
    MtLoadmore,
    MtCell,
    MtPopup
  },
  data() {
    return {
      popupVisible: false,
      isVisible: true,
      serialNumber: 1,
      allLoaded: false,
      pageNo: 1,
      translate: 0,
      pageSize: 5,
      totalPageNumber: 0,
      bottomStatus: '',
      selectedItem: {
        pileId: null,
        stationId: null,
        manufacturerId: null,
        deviceName: null,
        workstation: null
      },
      dataSet: null
    }
  },
  methods: {
    addNewPile: function() {
      this.$http.post('http://101.37.35.17:8888/wconfig', 'http://3297449167.tunnel.qydev.com/ChargingPile/ChargingPileInfo').then(function(data) {
        wx.config({
          debug: true,
          appId: data.data.appId,
          timestamp: data.data.timestamp,
          nonceStr: data.data.nonceStr,
          signature: data.data.signature,
          jsApiList: ['scanQRCode']
        })
        wx.ready(function() {
          // 点击按钮扫描二维码
          wx.scanQRCode({
            needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
            success: function(res) {
              let result = res.resultStr // 当needResult 为 1 时，扫码返回的结果
              alert(result)
              alert(location.href.split('#')[0])
              //            router.push({path: '/ChargingPile/setInformation', params: {info: result}})
            },
            cancel: function() {
              alert('用户取消扫描')
            }
          })
          wx.error(function(res) {
            alert('出错了：' + res.errMsg) // 这个地方的好处就是wx.config配置错误，会弹出窗口哪里错误，然后根据微信文档查询即可。
          })
        })
      })
    },
    ChargingPileDetail(id) {
      router.push({ path: '/ChargingPile/ChargingPileDetail', query: { id: id } })
    },
    handleClick: function() {
      this.isVisible = false
      this.popupVisible = true
    },
    loadBottom() {
      // load data
      this.pageNo = this.pageNo + 1
      setTimeout(function() {
        this.$http.post('/PileInformation/Find', {
          pageNumber: this.pageNo,
          pageSize: this.pageSize
        }).then(response => {
          let next = response.body
          this.dataSet = next.list
        }, response => {
          // error callback
        })
        this.$refs.loadmore.onBottomLoaded()
      }, 2000)
      if (this.pageNo === this.totalPageNumber) {
        this.allLoaded = true // 若数据已全部获取完毕
      }
    },
    handleBottomChange: function(status) {
      this.bottomStatus = status
    }
  },
  created: function() {
    this.$http.post('/PileInformation/Find', { pageNumber: this.pageNo, pageSize: this.pageSize }).then(response => {
      let info = response.body
      this.dataSet = info.list
      this.totalPageNumber = info.totalPages
    }, response => {
    })
  }
}
</script>
<style scoped>
img {
  padding-top: 10px;
  padding-left: 20px;
}

#mt-head {
  background-color: #393a3f;
}

li {
  list-style-type: none;
}

#angle-bottom {
  margin-left: 50px;
  padding-top: 30px;
}

p {
  color: white;
  bottom: 0px;
  position: absolute;
  padding-bottom: 10px;
  padding-left: 40%;
  margin: 0px
}

#addNewPile {
  width: 100%;
  height: 50px;
  background-color: #858285;
  bottom: 0px;
  position: fixed;
  padding-bottom: 0px;
  margin: 0px
}

#addNewPile-angle {
  color: white;
  bottom: 0px;
  position: absolute;
  padding-bottom: 15px;
  padding-left: 35%;
  margin: 0px;
  color: white;
}

.four-cells {
  vertical-align: middle;
  width: 100%;
  height: auto;
  text-align: center;
}

.cell {
  margin-top: 5px;
  float: left;
}

#cell-serial {
  padding-top: 50px;
}

.mint-loadmore-bottom span {
  display: inline-block;
  -webkit-transition: .2s linear;
  transition: .2s linear;
  vertical-align: middle
}

.mint-loadmore-bottom span.is-rotate {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg)
}
</style>


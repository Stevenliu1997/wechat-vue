<template>
  <div id="all">
    <div id="head">
      <mt-header id="mt-head">
        <mt-button router-link="'/'" slot="left"><i class="fa fa-arrow-left fa-lg">充电桩信息</i></mt-button>
      </mt-header>
    </div>
    <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"
                 ref="loadmore" :topDistance=20 @bottom-status-change="handleBottomChange">
      <mt-cell v-for="(chargingPileInfo, index) in dataSet" :key="chargingPileInfo.pileid">
        <div slot="title" class="four-cells">
          <div class="cell" id="cell-serial">
              {{index+1}}
          </div>
          <div class="cell">
            <div><img src="./../../assets/ChargingPile/26-512.png" width="96" height="96"/></div>
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
      <div slot="bottom" class="mint-loadmore-bottom">
        <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
        <span v-show="bottomStatus === 'loading'">
          <mt-spinner type="snake"></mt-spinner>
          </span>
      </div>
    </mt-loadmore>

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
  import MtLoadmore from '../../../node_modules/mint-ui/packages/loadmore/src/loadmore.vue'
  export default {
    components: {
      MtLoadmore,
      MtCell,
      MtPopup},
    data () {
      return {
        popupVisible: false,
        isVisible: true,
        serialNumber: 1,
        allLoaded: false,
        pageNo: 0,
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
      loadBottom() {
        // load data
        this.pageNo = this.pageNo + 1
        setTimeout(function () {
          this.$http.post('/PileInformation/Find', {pageNumber: this.pageNo, pageSize: this.pageSize}).then(response => {
            let next = response.body
            this.dataSet = next.data
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
    created: function () {
      this.$http.post('/PileInformation/Find', {currentPage: this.pageNo}).then(response => {
        let info = response.body
        this.dataSet = info.data
        this.totalPageNumber = info.totalPages
      }, response => {
        // error callback
      })
    }
  }
</script>
<style scoped>
  img{
    padding-left: 20px;
  }
  #mt-head{
    background-color: #393a3f;
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


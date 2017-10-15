<template>
  <div>
    <mt-cell>
      <div slot='title'>
        <table width='100%' style='text-align:center;padding:1vh;'>
          <tr>
            <td width='5%'>
            </td>
            <td width='75%'>
              <el-input placeholder='查找充电站' icon='search' v-model='stationFilter.sitename' :on-icon-click='search'></el-input>
            </td>
            <td width='20%'>
              <span @click='changeTab()' style='color:#aaaaaa'>{{ tab }}</span>
            </td>
          </tr>
        </table>
        <el-row :gutter='5' style='padding:1vh;display:flex;justify-content:center;align-items:center;'>
          <el-col :span='6'>
            <el-cascader :options='locationOptions' :show-all-levels='false' :props='locationProps' placeholder='位置' size='small' v-model='stationFilter.location' @change='filter'></el-cascader>
          </el-col>
          <el-col :span='6'>
            <el-select placeholder='距离' size='small' v-model='stationFilter.distance' @change='filter'>
              <el-option v-for='op in stationFilterList.distanceOptions' :key='op.value' :label='op.label' :value='op.value'>
              </el-option>
            </el-select>
          </el-col>
          <el-col :span='6'>
            <el-select placeholder='状态' size='small' v-model='stationFilter.state' @change='filter'>
              <el-option v-for='op in stationFilterList.stateOptions' :key='op.value' :label='op.label' :value='op.value'>
              </el-option>
            </el-select>
          </el-col>
          <el-col :span='6'>
            <el-select placeholder='排序' size='small' v-model='stationFilter.sort' @change='filter'>
              <el-option v-for='op in stationFilterList.sortOptions' :key='op.value' :label='op.label' :value='op.value'>
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </div>
    </mt-cell>
    <mt-tab-container v-model='activeTab'>
      <mt-tab-container-item id='list'>
        <mt-cell v-for='stationInfo in stationInfoList' :key='stationInfo.siteid' @click.native='toStationInfo(stationInfo.siteid)' v-infinite-scroll='loadMore' infinite-scroll-disabled='loading' infinite-scroll-distance='10'>
          <el-row slot='title'>
            <el-col :span='8' style='margin:1vh 0;'>
              <img class='stationIcon' :src='stationIcon' />
            </el-col>
            <el-col :span='16' style='margin:3vh 0;'>
              <el-row style='font-size:1.2em;'>
                <el-col :span='18'>
                  <span style='vertical-align:text-bottom;'>{{ stationInfo.sitename }}</span>
                </el-col>
                <el-col :span='6'>
                  <button v-if='stationInfo.hasfast > 0' class='fastButton'>快</button>
                  <button v-if='stationInfo.hasslow > 0' class='slowButton'>慢</button>
                </el-col>
              </el-row>
              <el-row style='margin-top:2vh;font-size:0.8em;'>
                <el-col :span='10'>
                  <star-rating :rating='stationInfo.star' :star-size='18' :increment='0.1' :fixed-points='1' :read-only='true' :show-rating='false'></star-rating>
                </el-col>
                <el-col :span='7'>
                  <div class='ellipsis'>
                    <span>{{ stationInfo.price }}元/度</span>
                  </div>
                </el-col>
                <el-col :span='7'>
                  <span style='color:#666666'>距您{{ (stationInfo.distance/1000).toFixed(1) }}km</span>
                </el-col>
              </el-row>
              <el-row style='margin-top:2vh;font-size:0.6em;'>
                <el-col :span='18'>
                  <div class='ellipsis'>
                    <span>{{ stationInfo.position }}</span>
                  </div>
                </el-col>
                <el-col :span='6'>
                  <span style='color:#33e02f'>空闲{{ stationInfo.pilenum }}</span>
                </el-col>
              </el-row>
              <el-row style='margin-top:2vh;'>
                <div class='dashedLine'></div>
              </el-row>
            </el-col>
          </el-row>
        </mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id='map'>
        <navigation :positionList='positionList'></navigation>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import Vue from 'vue'
import wx from 'weixin-js-sdk'
import StarRating from 'vue-star-rating'
import navigation from './Navigation'
import stationIcon from '@/assets/icon/station/station.png'

Vue.component('star-rating', StarRating)

export default {
  name: 'nearbyStation',
  data() {
    return {
      clientWidth: '',
      latitude: '',
      longitude: '',
      tab: '地图',
      activeTab: 'list',
      locationOptions: [],
      locationProps: {
        value: 'label'
      },
      location: [],
      stationFilterList: {},
      stationFilter: {
        'location': [],
        'distance': '',
        'state': '',
        'sort': '',
        'sitename': ''
      },
      stationParams: {
        'province': '四川省',
        'city': '成都市',
        'district': '',
        'sitename': '',
        'state': '',
        'requesttime': new Date().toString().slice(16, 21),
        'distance': 0,
        'commentfirst': 0,
        'cheapfirst': 0,
        'multiple': 0,
        'pageNumber': 1,
        'pageSize': 2
      },
      stationInfoList: [],
      stationIcon: stationIcon,
      totalPages: '',
      loading: false,
      positionList: []
    }
  },
  methods: {
    search(ev) {
      this.stationParams.province = '四川省'
      this.stationParams.city = '成都市'
      this.stationParams.district = ''
      this.stationParams.sitename = this.stationFilter.sitename
      this.stationParams.state = ''
      this.stationParams.requesttime = new Date().toString().slice(16, 21)
      this.stationParams.distance = 0
      this.stationParams.commentfirst = 0
      this.stationParams.cheapfirst = 0
      this.stationParams.multiple = 0
      this.stationParams.pageNumber = 1
      this.stationParams.pageSize = 2
      this.$http.post('/siteinformation/find', this.stationParams).then(response => {
        this.totalPages = response.body.totalPages
        this.stationInfoList = response.body.pageData
        for (let stationInfo of this.stationInfoList) {
          this.positionList.push({ lng: stationInfo.longitude, lat: stationInfo.latitude })
        }
      }, response => {
      })
    },
    filter(ev) {
      this.stationParams.sitename = this.stationFilter.sitename
      if (this.stationFilter.location.length !== 0) {
        this.stationParams.province = this.stationFilter.location[0]
        this.stationParams.city = this.stationFilter.location[1]
        this.stationParams.district = this.stationFilter.location[2]
      }
      if (this.stationFilter.distance !== null || this.stationFilter.distance !== undefined || this.stationFilter.distance !== '') {
        this.stationParams.distance = this.stationFilter.distance * 1000
      }
      if (this.stationFilter.state !== null || this.stationFilter.state !== undefined || this.stationFilter.state !== '') {
        this.stationParams.state = this.stationFilter.state
      }
      if (this.stationFilter.sort !== null || this.stationFilter.sort !== undefined || this.stationFilter.sort !== '') {
        this.stationParams.multiple = 0
        this.stationParams.commentfirst = 0
        this.stationParams.cheapfirst = 0
        if (this.stationFilter.sort === 'multiple') {
          this.stationParams.multiple = 1
        } else if (this.stationFilter.sort === 'distance') {
          // this.stationParams.distance = 1
        } else if (this.stationFilter.sort === 'commentfirst') {
          this.stationParams.commentfirst = 1
        } else if (this.stationFilter.sort === 'cheapfirst') {
          this.stationParams.cheapfirst = 1
        }
      }
      this.$http.post('/siteinformation/find', this.stationParams).then(response => {
        this.totalPages = response.body.totalPages
        if (this.stationParams.pageNumber === 1) {
          this.stationInfoList = response.body.pageData
        } else {
          this.stationInfoList = this.stationInfoList.concat(response.body.pageData)
        }
        for (let stationInfo of this.stationInfoList) {
          this.positionList.push({ lng: stationInfo.longitude, lat: stationInfo.latitude })
        }
      }, response => {
      })
    },
    changeTab() {
      this.tab = (this.tab === '地图') ? '列表' : '地图'
      this.activeTab = (this.activeTab === 'list') ? 'map' : 'list'
    },
    toStationInfo(index) {
      this.$router.push({
        name: 'stationInfo',
        params: {
          id: index
        }
      })
    },
    loadMore() {
      this.loading = true
      setTimeout(() => {
        if (this.stationParams.pageNumber < this.totalPages) {
          this.stationParams.pageNumber++
          this.filter()
        }
        this.loading = false
      }, 1000)
    }
  },
  created() {
    this.clientWidth = document.documentElement.clientWidth * 0.90
    this.$http.get('static/json/location.json').then(response => {
      this.locationOptions = response.body
    }, response => {
    })
    this.$http.get('static/json/stationFilter.json').then(response => {
      this.stationFilterList = response.body
    }, response => {
    })
    this.$http.post('http://101.37.35.17:8888/wconfig', 'http://3297449167.tunnel.qydev.com/nearbyStation').then(function(data) {
      wx.config({
        debug: true,
        appId: data.data.appId,
        timestamp: data.data.timestamp,
        nonceStr: data.data.nonceStr,
        signature: data.data.signature,
        jsApiList: ['getLocation']
      })
      wx.ready(function() {
        wx.getLocation({
          type: 'wgs84',
          success: function(res) {
            this.latitude = res.latitude
            this.longitude = res.longitude
            console.log(this.latitude)
            console.log(this.longitude)
          },
          fail: function(res) {
          }
        })
      })
    })
    this.$http.jsonp('http://api.map.baidu.com/geocoder?location=30.548397,104.04701&output=json').then(response => {
      console.log(response.body.result.addressComponent.city)
    }, response => {
    })
    this.$http.post('/siteinformation/find', {
      'province': '四川省',
      'city': '成都市',
      'district': '',
      'sitename': '',
      'state': '',
      'requesttime': new Date().toString().slice(16, 21),
      'distance': 0,
      'commentfirst': 0,
      'cheapfirst': 0,
      'multiple': 0,
      'pageNumber': 1,
      'pageSize': 2
    }).then(response => {
      this.stationInfoList = response.body.pageData
      this.totalPages = response.body.totalPages
      for (let stationInfo of this.stationInfoList) {
        this.positionList.push({ lng: stationInfo.longitude, lat: stationInfo.latitude })
      }
    }, response => {
    })
  },
  components: {
    navigation
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.filterIcon {
  width: 18px;
  height: 18px;
}

.stationIcon {
  width: 32vw;
  height: auto;
}

.dashedLine {
  border-top: 1px dashed #bbbbbb;
}

.fastButton {
  border-radius: 4px;
  border: 0;
  box-sizing: border-box;
  border: 1px solid #ef4f4f;
  background-color: #ef4f4f;
  box-shadow: none;
  color: #ffffff;
  display: inline-block;
  font-size: 14px;
  padding: 3px;
}

.slowButton {
  border-radius: 4px;
  border: 0;
  box-sizing: border-box;
  border: 1px solid #33e02f;
  background-color: #33e02f;
  box-shadow: none;
  color: #ffffff;
  display: inline-block;
  font-size: 14px;
  padding: 3px;
}

.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
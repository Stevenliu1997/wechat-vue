<template>
  <div>
    <mt-cell>
      <div slot="title">
        <table width="100%" style="text-align:center;padding:1vh;">
          <tr>
            <td width="5%">
            </td>
            <td width="75%">
              <el-input placeholder="查找充电站" icon="search" v-model="stationFilter.name" :on-icon-click="stationSearch" v-enter @enter.native="stationSearch"></el-input>
            </td>
            <td width="20%">
              <span @click="changeTab()" style="color:#aaaaaa">{{ tab }}</span>
            </td>
          </tr>
        </table>
        <el-row :gutter="5" style="padding:1vh;display:flex;justify-content:center;align-items:center;">
          <el-col :span="7">
            <el-cascader :options="locationOptions" :show-all-levels="false" :props="locationProps" placeholder="位置区域" size="small" v-model="stationFilter.location"></el-cascader>
          </el-col>
          <el-col :span="5">
            <el-select placeholder="距离我" size="small" v-model="stationFilter.distance">
              <el-option v-for="op in stationFilterList.distanceOptions" :key="op.value" :label="op.label" :value="op.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="5">
            <el-select placeholder="电站状态" size="small" v-model="stationFilter.devices">
              <el-option v-for="op in stationFilterList.devicesOptions" :key="op.value" :label="op.label" :value="op.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="7">
            <el-select placeholder="综合排序" size="small" v-model="stationFilter.sort">
              <el-option v-for="op in stationFilterList.sortOptions" :key="op.value" :label="op.label" :value="op.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </div>
    </mt-cell>
    <mt-tab-container v-model="activeTab">
      <mt-tab-container-item id="list">
        <mt-cell v-for="stationInfo in stationInfoList" :key="stationInfo.siteid">
          <el-row slot="title">
            <el-col :span="8">
              <div class="iconWrapper"><img class="stationIcon" :src="stationIcon" /></div>
            </el-col>
            <el-col :span="16" style="margin:3vh 0px;">
              <el-row style="font-size:1.1em;">
                <el-col :span="18">
                  <span style="vertical-align:text-bottom;">{{ stationInfo.sitename }}</span>
                </el-col>
                <el-col :span="6">
                  <button v-if="stationInfo.hasfast > 0" class="fastButton">快</button>
                  <button v-if="stationInfo.hasslow > 0" class="slowButton">慢</button>
                </el-col>
              </el-row>
              <el-row style="margin-top:2vh;font-size:0.8em;">
                <el-col :span="7" style="margin-top:-0.6vh;">
                  <el-rate v-model="stationInfo.score" disabled :max="3"></el-rate>
                </el-col>
                <el-col :span="10">
                  <div style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                    <span>{{ stationInfo.price }}元/度</span>
                  </div>
                </el-col>
                <el-col :span="7">
                  <span style="color:#666666">距您{{ stationInfo.distance }}km</span>
                </el-col>
              </el-row>
              <el-row style="margin-top:2vh;font-size:0.6em;">
                <el-col :span="18">
                  <div style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                    <span>{{ stationInfo.position }}</span>
                  </div>
                </el-col>
                <el-col :span="6">
                  <span style="color:#33e02f">空闲{{ stationInfo.pilenum }}</span>
                </el-col>
              </el-row>
              <el-row style="margin-top:2vh;">
                <div class="dashedLine"></div>
              </el-row>
            </el-col>
          </el-row>
        </mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="map">
        <baidu-map class="map" :scroll-wheel-zoom='true'>
          <!-- <bm-driving start='电子科技大学' end='四川大学' :auto-viewport='true'></bm-driving> -->
        </baidu-map>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'
import stationIcon from '@/assets/icon/station/station.png'

Vue.use(BaiduMap, {
  ak: 'fu6xOFGxYhEiIGWQIXk2CATSoYtS14Hg'
})

export default {
  name: 'nearbyStation',
  data() {
    return {
      clientWidth: '',
      locationOptions: [],
      locationProps: {
        value: 'label'
      },
      tab: '地图',
      activeTab: 'list',
      stationInfoList: {},
      stationFilterList: {},
      stationFilter: {
        'name': '',
        'location': [],
        'distance': '',
        'devices': '',
        'sort': ''
      },
      stationIcon: stationIcon
    }
  },
  methods: {
    toStationInfo(index) {
      this.$router.push({
        name: 'stationInfo',
        params: {
          id: index
        }
      })
    },
    stationSearch(ev) {
      console.log(this.stationFilter.name)
    },
    changeTab() {
      this.tab = (this.tab === '地图') ? '列表' : '地图'
      this.activeTab = (this.activeTab === 'list') ? 'map' : 'list'
    }
  },
  created() {
    this.clientWidth = document.documentElement.clientWidth * 0.90
    this.$http.get('static/json/location.json').then(response => {
      this.locationOptions = response.body
    }, response => {
    })
    this.$http.post('/siteinformation/find', {
      'province': '四川省',
      'city': '成都市',
      'requesttime': new Date().toString().slice(16, 21),
      'distance': 0,
      'pageNumber': 1,
      'pageSize': 10
    }).then(response => {
      console.log(response.body)
      this.stationInfoList = response.body.pageData
    }, response => {
      console.log('error!')
    })
    this.$http.get('static/json/stationFilter.json').then(response => {
      this.stationFilterList = response.body
    }, response => {
    })
  },
  directives: {
    enter: {
      bind: function(el, binding, vnode) {
        const input = el.getElementsByTagName('input')[0]
        input.addEventListener('keypress', function(e) {
          var key = e.which || e.keyCode
          if (key === 13) {
            el.dispatchEvent(new Event('enter'))
          }
        })
      },
      unbind: function(el, binding, vnode) {
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.filterIcon {
  width: 18px;
  height: 18px;
}

.iconWrapper {
  display: inline-block;
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

.map {
  width: 100%;
  height: 100%;
}
</style>
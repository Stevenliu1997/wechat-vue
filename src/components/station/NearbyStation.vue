<template>
  <div>
    <mt-cell>
      <div slot="title">
        <table width="100%">
          <tr>
            <td width="20%">
              <span @click="toChoseCity()">{{ location }}<img :src="arrowDownIcon" class="filterIcon" /></span>
            </td>
            <td width="60%">
              <input class="searchBar" type="text" placeholder="         查找充电站" />
            </td>
            <td width="20%">
              <span>{{ map }}</span>
            </td>
          </tr>
        </table>
        <table width="100%">
          <tr>
            <td width="30%">
              <el-popover ref="popover1" placement="bottom-start" trigger="click" :visible-arrow="false" width="380">
                <el-row>
                  <el-col :span="6" style="margin-top:8px;">
                    <mt-cell v-for="location in stationFilterList.location" :key="location.name">
                      <span slot="title" @click="changeTab($event)">{{ location.name }}</span>
                    </mt-cell>
                  </el-col>
                  <el-col :span="18">
                    <mt-tab-container v-model="activeTab">
                      <mt-tab-container-item v-for="location in stationFilterList.location" :key="location.id" :id="location.id">
                        <mt-radio v-if="location.type === 'radio'" v-model="locationFilter[location.id]" :options="location.options"></mt-radio>
                        <mt-checklist v-if="location.type === 'checkbox'" v-model="locationFilter[location.id]" :options="location.options"></mt-checklist>
                      </mt-tab-container-item>
                    </mt-tab-container>
                  </el-col>
                </el-row>
              </el-popover>
              <span v-popover:popover1 @click="showFilter($event)">位置区域<img :src="filterIcon" class="filterIcon" /></span>
            </td>
            <td width="25%">
              <el-popover ref="popover2" placement="bottom" trigger="click" :visible-arrow="false" width="380">
                <span style="float:right;color:#6579e0;">保存偏好设置</span>
                <div v-for="device in stationFilterList.devices" :key="device.name">
                  <span style="padding-left:10px;">{{ device.name }}</span>
                  <el-row>
                    <el-col :span="7" :offset="1" v-for="option in device.options" :key="option">
                      <button class="plainButton">{{ option }}</button>
                    </el-col>
                  </el-row>
                </div>
              </el-popover>
              <span v-popover:popover2 @click="showFilter($event)">设备<img :src="filterIcon" class="filterIcon" /></span>
            </td>
            <td width="15%"></td>
            <td width="25%">
              <el-popover ref="popover3" placement="bottom-end" trigger="click" :visible-arrow="false" width="380">
                <span style="float:right;color:#6579e0;">保存偏好设置</span>
                <div v-for="filter in stationFilterList.filters" :key="filter.name">
                  <span style="padding-left:10px;">{{ filter.name }}</span>
                  <el-row>
                    <el-col :span="7" :offset="1" v-for="option in filter.options" :key="option">
                      <button class="plainButton">{{ option }}</button>
                    </el-col>
                  </el-row>
                </div>
              </el-popover>
              <span v-popover:popover3 @click="showFilter($event)">筛选<img :src="filterIcon" class="filterIcon" /></span>
            </td>
          </tr>
        </table>
      </div>
    </mt-cell>
    <mt-cell v-for="(stationInfo,index) in stationInfoList" :key="stationInfo.name" @click.native="toStatinInfo(index)">
      <el-row slot="title">
        <el-col :span="8">
          <div class="iconWrapper"><img class="stationIcon" :src="stationIcon" /></div>
        </el-col>
        <el-col :span="16" style="margin:3vh 0px;">
          <el-row style="font-size:1.1em;">
            <el-col :span="20">
              <span style="vertical-align:text-bottom;">{{ stationInfo.name }}</span>
            </el-col>
            <el-col :span="4">
              <mt-button size="small" type="danger">快</mt-button>
            </el-col>
          </el-row>
          <el-row style="margin-top:2vh;font-size:0.8em;">
            <el-col :span="8" style="margin-top:-0.5vh;">
              <el-rate v-model="stationInfo.score" disabled :max="3"></el-rate>
            </el-col>
            <el-col :span="16">
              <div style="white-space:nowrap; overflow:hidden;text-overflow:ellipsis;">
                <span>电费：{{ stationInfo.electricity }}；服务费：{{ stationInfo.serviceCharge }}</span>
              </div>
            </el-col>
          </el-row>
          <el-row style="margin-top:2vh;font-size:0.6em;">
            <el-col :span="9">
              <span>{{ stationInfo.type }}</span>
            </el-col>
            <el-col :span="5">
              <span>{{ stationInfo.stationType }}</span>
            </el-col>
            <el-col :span="5">
              <span>{{ stationInfo.block }}</span>
            </el-col>
            <el-col :span="4" :offset="1">
              <span style="color:#33e02f">{{ stationInfo.stationStatus }}</span>
            </el-col>
          </el-row>
          <el-row style="margin-top:2vh;">
            <div class="dashedLine"></div>
          </el-row>
          <el-row style="margin-top:2vh">
            <button class="successButton">免费停车</button>
            <mt-button size="small" plain type="primary">不在服务时段</mt-button>
          </el-row>
        </el-col>
      </el-row>
    </mt-cell>
  </div>
</template>

<script>
import station from '@/assets/icon/station/station.jpeg'
import arrowUp from '@/assets/icon/station/arrow-up.svg'
import arrowDown from '@/assets/icon/station/arrow-down.svg'

export default {
  name: 'nearbyStation',
  data() {
    return {
      location: '北京',
      map: '地图',
      activeTab: 'distance',
      stationInfoList: {},
      stationFilterList: {},
      locationFilter: [],
      arrowDownIcon: arrowDown,
      filterIcon: arrowDown,
      stationIcon: station
    }
  },
  methods: {
    toChoseCity() {
      this.$router.push({
        name: 'choseCity'
      })
    },
    toStatinInfo(index) {
      this.$router.push({
        name: 'stationInfo',
        params: {
          id: index
        }
      })
    },
    showFilter(e) {
      e.currentTarget.childNodes[1].src = (e.currentTarget.childNodes[1].src === arrowDown) ? arrowUp : arrowDown
    },
    changeTab(e) {
      for (let location of this.stationFilterList.location) {
        if (location.name === e.currentTarget.innerText) {
          this.activeTab = location.id
        }
      }
    }
  },
  created() {
    this.$http.get('/mock/stationInfo.json').then(response => {
      this.stationInfoList = response.body
    }, response => {
      // error callback
    })
    this.$http.get('/mock/stationFilter.json').then(response => {
      this.stationFilterList = response.body
      for (let location of this.stationFilterList.location) {
        if (location.type === 'radio') {
          this.locationFilter[location.id] = ''
        }
        if (location.type === 'checkbox') {
          this.locationFilter[location.id] = []
        }
      }
    }, response => {
      // error callback
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  text-align: center;
  padding: 2vh;
}

.filterIcon {
  width: 16px;
  height: 16px;
}

.searchBar {
  width: 80%;
  line-height: 4vh;
  border: 1px solid #000000;
  border-radius: 6px;
  box-sizing: border-box;
  background: url("../../assets/icon/station/search.svg") no-repeat scroll left transparent;
  outline: none;
  -webkit-appearance: none;
}

.iconWrapper {
  margin: 5vh 0px;
  display: inline-block;
}

.stationIcon {
  width: 32vw;
  height: auto;
}

.dashedLine {
  border-top: 1px dashed #bbbbbb;
}

.successButton {
  border-radius: 4px;
  border: 0;
  box-sizing: border-box;
  border: 1px solid #33e02f;
  background-color: transparent;
  box-shadow: none;
  color: #33e02f;
  display: inline-block;
  font-size: 14px;
  padding: 0 12px;
  height: 33px;
}

.plainButton {
  width: 100%;
  border-radius: 4px;
  border: 0;
  box-sizing: border-box;
  border: 1px solid #bbbbbb;
  background-color: transparent;
  box-shadow: none;
  color: #000000;
  display: inline-block;
  font-size: 14px;
  padding: 0 12px;
  margin: 5px 0;
  height: 33px;
}
</style>
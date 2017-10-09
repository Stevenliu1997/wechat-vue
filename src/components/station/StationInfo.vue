<template>
  <div>
    <mt-cell>
      <div class="tab" slot="title" style="padding:2vh 0;">
        <mt-button type="primary" :plain="!isplain" @click="changeTab(1)">电站详情</mt-button>
        <mt-button type="primary" :plain="isplain" @click="changeTab(2)">充电终端</mt-button>
      </div>
    </mt-cell>
    <mt-tab-container v-model="activeTab">
      <mt-tab-container-item id="detail">
        <mt-cell>
          <el-row slot="title">
            <el-col :span="10">
              <div class="iconWrapper"><img class="stationIcon" :src="stationIcon" /></div>
            </el-col>
            <el-col :span="14" style="margin:3vh 0px;">
              <el-row style="font-size:1.1em;">
                <el-col :span="24">
                  <span style="vertical-align:text-bottom;">{{ stationInfo.name }}</span>
                </el-col>
              </el-row>
              <el-row style="margin-top:2vh;font-size:0.8em;">
                <el-col :span="10">
                  <el-rate v-model="stationInfo.score" disabled :max="3"></el-rate>
                </el-col>
                <el-col :span="12" style="margin-top:0.5vh;">
                  <div style="white-space:nowrap; overflow:hidden;text-overflow:ellipsis;font-size:0.2em;">
                    <span>价格：{{ stationInfo.electricity }}；环境：{{ stationInfo.environment }};服务费：{{ stationInfo.serviceCharge }}</span>
                  </div>
                </el-col>
              </el-row>
              <el-row style="margin-top:2vh;font-size:0.6em;">
                <el-col :span="5">
                  <span>{{ stationInfo.stationType }}</span>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </mt-cell>
        <mt-cell>
          <div slot="title">
            <table width="100%">
              <tr>
                <td width="50%">
                  <span>
                    <mt-button size="small" type="danger">快</mt-button>
                    空闲8/共8
                  </span>
                </td>
                <td width="50%">
                  <span>
                    <mt-button size="small" type="danger" style="background-color:#09bd06;">慢</mt-button>
                    空闲8/共8
                  </span>
                </td>
              </tr>
            </table>
          </div>
        </mt-cell>
        <div class="break"></div>
        <mt-cell>
          <el-row slot="title" style="display:flex;justify-content:center;align-items:center;">
            <el-col :span="4" style="display:flex;justify-content:center;align-items:center;">
              <div class="boltIcon">
                <i class="fa fa-bolt"></i>
              </div>
            </el-col>
            <el-col :span="16" style="display:flex;justify-content:center;align-items:center;">
              <span style="display:inline-block;">{{ stationInfo.address }}</span>
            </el-col>
            <el-col :span="4" style="display:flex;justify-content:center;align-items:center;">
              <span style="color:#999999" @click="navigate()">导航<img :src="moreIcon" class="moreIcon" /></span>
            </el-col>
          </el-row>
        </mt-cell>
        <div class="break"></div>
        <mt-cell>
          <el-row slot="title" style="display:flex;justify-content:center;align-items:center;padding:20px 0;">
            <el-col :span="6">
              <span class="label">充电单价</span>
            </el-col>
            <el-col :span="18">
              电费：{{ stationInfo.electricity }}；服务费：{{ stationInfo.serviceCharge }}
            </el-col>
          </el-row>
        </mt-cell>
        <mt-cell>
          <el-row slot="title" style="padding:20px 0;">
            <el-col :span="6">
              <span class="label">停车费</span>
            </el-col>
            <el-col :span="18">{{ stationInfo.parkingFee }}</el-col>
          </el-row>
        </mt-cell>
        <mt-cell>
          <el-row slot="title" style="padding:20px 0;">
            <el-col :span="6">
              <span class="label">运营公司</span>
            </el-col>
            <el-col :span="18">{{ stationInfo.company }}</el-col>
          </el-row>
        </mt-cell>
        <mt-cell>
          <el-row slot="title" style="padding:20px 0;">
            <el-col :span="6">
              <span class="label">营业时间</span>
            </el-col>
            <el-col :span="18">{{ stationInfo.businessHours }}</el-col>
          </el-row>
        </mt-cell>
        <mt-cell>
          <el-row slot="title" style="padding:20px 0;">
            <el-col :span="6">
              <span class="label">服务电话</span>
            </el-col>
            <el-col :span="18">{{ stationInfo.cellphone }}</el-col>
          </el-row>
        </mt-cell>
        <div class="break"></div>
        <mt-cell>
          <el-row slot="title" style="display:flex;justify-content:flex-start;align-items:center;">
            <el-col :span="8">
              <span class="label">网友评论（0）</span>
            </el-col>
          </el-row>
        </mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="terminal">
        <mt-cell v-for="(terminal,index) in stationInfo.terminals" :key="terminal.id">
          <el-row slot="title" style="display:flex;justify-content:center;align-items:center;">
            <el-col :span="5">
              <button class="numberButton">{{ terminal.name }}</button>
            </el-col>
            <el-col :span="10" :offset="1" style="font-size:0.8em;">
              <p class="ellipsis">编号：{{ terminal.id }}</p>
              <p class="ellipsis">终端类型：{{ terminal.type }}</p>
              <p class="ellipsis">充电接口：{{ terminal.interface }}</p>
              <p class="ellipsis">车位号：{{ terminal.parkingNum }}</p>
            </el-col>
            <el-col :span="7" :offset="1 ">
              <mt-button size="small" type="primary">空闲</mt-button>
              <mt-button size="small" type="danger">快</mt-button>
            </el-col>
          </el-row>
        </mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import stationIcon from '@/assets/icon/station/station.png'
import moreIcon from '@/assets/icon/station/more.svg'

export default {
  name: 'stationInfo',
  data() {
    return {
      isplain: true,
      activeTab: 'detail',
      stationInfo: {},
      stationIcon: stationIcon,
      moreIcon: moreIcon
    }
  },
  methods: {
    changeTab(index) {
      if (index === 1) {
        this.isplain = (this.activeTab === 'detail') ? this.isplain : !this.isplain
        this.activeTab = 'detail'
      } else if (index === 2) {
        this.isplain = (this.activeTab === 'terminal') ? this.isplain : !this.isplain
        this.activeTab = 'terminal'
      }
    },
    navigate() {
      window.location.href = 'http://api.map.baidu.com/direction?origin=latlng:30.679204000000,104.107936000000|name:电子科技大学&destination=四川大学&mode=driving&region=成都&output=html'
    }
  },
  created() {
    this.$http.get('/mock/stationInfo.json').then(response => {
      this.stationInfo = response.body[this.$route.params.id]
    }, response => {
      // error callback
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab {
  text-align: center
}

table {
  text-align: center;
  vertical-align: middle;
  border-collapse: collapse;
  padding: 3vh 0;
}

table td {
  border-right: 1px solid #d9d9d9;
}

table tr td:last-child {
  border-right: 0px;
}

.iconWrapper {
  display: inline-block;
}

.moreIcon {
  width: 18px;
  height: 18px;
}

.stationIcon {
  width: 40vw;
  height: auto;
}

.boltIcon {
  width: 35px;
  height: 35px;
  margin-left: 5vw;
  background-color: #33e02f;
  border-radius: 4px;
  color: white;
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.label {
  display: flex;
  justify-content: center;
  color: #858285;
}

.numberButton {
  width: 100%;
  border-radius: 4px;
  border: 0;
  box-sizing: border-box;
  border: 1px solid #cc924e;
  background-color: #cc924e;
  box-shadow: none;
  color: white;
  display: inline-block;
  font-size: 14px;
  padding: 0 12px;
  height: 33px;
}

.break {
  content: '';
  width: 100%;
  height: 2vh;
  display: block;
  background-color: #f2f2f2;
}

.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
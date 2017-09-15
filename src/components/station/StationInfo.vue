<template>
  <div>
    <mt-cell>
      <div class="tab" slot="title" style="padding:2vh 0;">
        <mt-button type="primary" :plain="!isplain" @click="changeTab()">电站详情</mt-button>
        <mt-button type="primary" :plain="isplain" @click="changeTab()">充电终端</mt-button>
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
                  <div style="white-space:nowrap; overflow:hidden;text-overflow:ellipsis;">
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
                    <mt-button size="small" type="danger">快</mt-button>
                    空闲0/共0
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
            <el-col :span="20" style="display:flex;justify-content:center;align-items:center;">
              <span style="display:inline-block;">{{ stationInfo.address }}</span>
            </el-col>
          </el-row>
        </mt-cell>
        <div class="break"></div>
        <mt-cell>
          <el-row slot="title" style="display:flex;justify-content:center;align-items:center;">
            <el-col :span="6">
              <span class="label">充电单价</span>
            </el-col>
            <el-col :span="18">
              电费：{{ stationInfo.electricity }}；服务费：{{ stationInfo.serviceCharge }}
            </el-col>
          </el-row>
        </mt-cell>
        <mt-cell>
          <el-row slot="title">
            <el-col :span="6">
              <span class="label">停车费</span>
            </el-col>
            <el-col :span="18">{{ stationInfo.parkingFee }}</el-col>
          </el-row>
        </mt-cell>
        <mt-cell>
          <el-row slot="title">
            <el-col :span="6">
              <span class="label">运营公司</span>
            </el-col>
            <el-col :span="18">{{ stationInfo.company }}</el-col>
          </el-row>
        </mt-cell>
        <mt-cell>
          <el-row slot="title">
            <el-col :span="6">
              <span class="label">营业时间</span>
            </el-col>
            <el-col :span="18">{{ stationInfo.businessHours }}</el-col>
          </el-row>
        </mt-cell>
        <mt-cell>
          <el-row slot="title">
            <el-col :span="6">
              <span class="label">服务电话</span>
            </el-col>
            <el-col :span="18">{{ stationInfo.cellphone }}</el-col>
          </el-row>
        </mt-cell>
        <div class="break"></div>
        <mt-cell>
          <el-row slot="title" style="display:flex;justify-content:center;align-items:center;">
            <el-col :span="8">
              <span class="label">网友评论（0）</span>
            </el-col>
            <el-col :span="12" :offset="4">
              <button class="commentButton">
                <i class="fa fa-pencil"></i>
                <span>&nbsp;&nbsp;&nbsp;我要评论</span>
              </button>
            </el-col>
          </el-row>
        </mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="terminal">
        <mt-cell>
          <div slot="title">
            <table width="100%">
              <tr>
                <td wdith="25%">
                  <span>空闲优先</span>
                </td>
                <td wdith="25%">
                  <span>快充优先</span>
                </td>
                <td wdith="25%">
                  <span>慢充优先</span>
                </td>
                <td wdith="25%">
                  <el-popover ref="popover" placement="bottom-end" trigger="click" :visible-arrow="false">
                    <div v-for="terminal in terminalFilter" :key="terminal.name">
                      <span style="padding-left:10px;">{{ terminal.name }}</span>
                      <el-row>
                        <el-col :span="5" :offset="2" v-for="option in terminal.options" :key="option">
                          <button class="plainButton">{{ option }}</button>
                        </el-col>
                      </el-row>
                    </div>
                    <span style="margin-left:10px;">输入编号/车位号查询</span>
                    <input class="searchBar" type="text" placeholder="         输入终端编号查询" style="margin-left:30px;" />
                    <mt-cell>
                      <el-row slot="title">
                        <el-col :span="10" :offset="2">
                          <button class="clearButton">清空</button>
                        </el-col>
                        <el-col :span="10" :offset="2">
                          <button class="confirmButton">确定</button>
                        </el-col>
                      </el-row>
                    </mt-cell>
                  </el-popover>
                  <span v-popover:popover @click="showFilter()">筛选<img :src="filterIcon" class="filterIcon" /></span>
                </td>
              </tr>
            </table>
          </div>
        </mt-cell>
        <mt-cell v-for="(terminal,index) in stationInfo.terminals" :key="terminal.id" is-link @click.native="toTerminalInfo(index)">
          <el-row slot="title" style="display:flex;justify-content:center;align-items:center;">
            <el-col :span="5">
              <button class="numberButton">{{ terminal.name }}</button>
            </el-col>
            <el-col :span="10" :offset="1">
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
import station from '@/assets/icon/station/station.jpeg'
import arrowUp from '@/assets/icon/station/arrow-up.svg'
import arrowDown from '@/assets/icon/station/arrow-down.svg'

export default {
  name: 'stationInfo',
  data() {
    return {
      isplain: true,
      activeTab: 'detail',
      stationInfo: {},
      terminalFilter: {},
      stationIcon: station,
      filterIcon: arrowDown
    }
  },
  methods: {
    changeTab() {
      this.activeTab = (this.activeTab === 'detail') ? 'terminal' : 'detail'
      this.isplain = !this.isplain
    },
    showFilter() {
      this.filterIcon = (this.filterIcon === arrowDown) ? arrowUp : arrowDown
    },
    toTerminalInfo(index) {
      this.$router.push({
        name: 'terminalInfo',
        params: {
          id: this.$route.params.id,
          index: index
        }
      })
    }
  },
  created() {
    this.$http.get('/mock/stationInfo.json').then(response => {
      this.stationInfo = response.body[this.$route.params.id]
    }, response => {
      // error callback
    })
    this.$http.get('/mock/terminalFilter.json').then(response => {
      this.terminalFilter = response.body
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

.iconWrapper {
  margin: 3vh 0px;
  display: inline-block;
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

.commentButton {
  width: 100%;
  border-radius: 4px;
  border: 0;
  box-sizing: border-box;
  border: 1px solid #bbbbbb;
  background-color: transparent;
  box-shadow: none;
  display: inline-block;
  font-size: 14px;
  padding: 0 12px;
  height: 33px;
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
  padding: 0 8px;
  margin: 3px 0;
}

.clearButton {
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
  padding: 0 8px;
  margin: 3px 0;
  height: 25px;
}

.confirmButton {
  width: 100%;
  border-radius: 4px;
  border: 0;
  box-sizing: border-box;
  border: 1px solid #4862e8;
  background-color: #4862e8;
  box-shadow: none;
  color: #ffffff;
  display: inline-block;
  font-size: 14px;
  padding: 0 8px;
  margin: 3px 0;
  height: 25px;
}

.break {
  content: '';
  width: 100%;
  height: 2vh;
  display: block;
  background-color: #f2f2f2;
}

.filterIcon {
  width: 16px;
  height: 16px;
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

.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.searchBar {
  width: 60%;
  line-height: 4vh;
  border: 1px solid #bbbbbb;
  border-radius: 6px;
  box-sizing: border-box;
  background: url("../../assets/icon/station/search.svg") no-repeat scroll left transparent;
  outline: none;
  -webkit-appearance: none;
}
</style>
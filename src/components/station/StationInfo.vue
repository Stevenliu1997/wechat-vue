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
          <el-row slot="title" style="display:flex;justify-content:center;align-items:center;">
            <el-col :span="9" style="margin:1vh 0;">
              <img class="stationIcon" :src="stationIcon" />
            </el-col>
            <el-col :span="15" style="margin:3vh 0;">
              <el-row style="font-size:1.2em;">
                <el-col :span="24">
                  <span style="vertical-align:text-bottom;">{{ stationInfo.sitename }}</span>
                </el-col>
              </el-row>
              <el-row style="margin-top:2vh;">
                <el-col :span="10" style="margin-top:0.3vh;">
                  <star-rating :rating="stationInfo.star" :star-size="18" :increment="0.1" :fixed-points="1" :read-only="true" :show-rating="false"></star-rating>
                </el-col>
                <el-col :span="14" style="margin-top:0.5vh;">
                  <div class="ellipsis">
                    <span style="color:#666666;font-size:0.8em;">价格--环境--服务费--</span>
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
                    &nbsp;空闲&nbsp;{{ stationInfo.fastfreenum }}&nbsp;/&nbsp;共&nbsp;{{ stationInfo.fastpilenum }}
                  </span>
                </td>
                <td width="50%">
                  <span>
                    <mt-button size="small" type="danger" style="background-color:#09bd06;">慢</mt-button>
                    &nbsp;空闲&nbsp;{{ stationInfo.slowfreenum }}&nbsp;/&nbsp;共&nbsp;{{ stationInfo.slowpilenum }}
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
              <span style="display:inline-block;font-size:0.9em;">{{ stationInfo.position }}</span>
            </el-col>
            <el-col :span="4" style="display:flex;justify-content:center;align-items:center;">
              <span style="color:#999999;font-size:0.9em;" @click="toNavigate(stationInfo.position)">导航<img :src="moreIcon" class="moreIcon" /></span>
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
              电费：{{ stationInfo.price }}元/度，服务费：{{ stationInfo.servicecharge }}元/度
            </el-col>
          </el-row>
        </mt-cell>
        <mt-cell>
          <el-row slot="title" style="padding:20px 0;">
            <el-col :span="6">
              <span class="label">运营公司</span>
            </el-col>
            <el-col :span="18">{{ stationInfo.operatorname }}</el-col>
          </el-row>
        </mt-cell>
        <mt-cell>
          <el-row slot="title" style="padding:20px 0;">
            <el-col :span="6">
              <span class="label">服务电话</span>
            </el-col>
            <el-col :span="18">{{ stationInfo.phone }}</el-col>
          </el-row>
        </mt-cell>
        <div class="break"></div>
        <mt-cell>
          <el-row slot="title" style="display:flex;justify-content:flex-start;align-items:center;">
            <span class="label" style="padding-left:5px;">网友评论（{{ stationInfo.totalcomment }}）</span>
            </el-col>
          </el-row>
        </mt-cell>
        <mt-cell v-for="comment in stationInfo.comments" :key="comment.commentid">
          <el-row slot="title" style="margin:2vh 0;font-size:0.6em;">
            <el-col :span="4">
              <img class="avatarIcon" :src="avatarIcon">
            </el-col>
            <el-col :span="20">
              <el-row>
                <el-col :span="12">
                  <span style="color:#00a6ca;">{{ comment.nickname }}</span>
                </el-col>
                <el-col :span="12">
                  <span style="color:#b4b5c1;display:flex;justify-content:flex-end;align-items:center;">{{ comment.senddate }}</span>
                </el-col>
              </el-row>
              <el-row style="margin-top:0.8vh;">
                <el-col :span="4" style="color:#999999;">打分</el-col>
                <el-col :span="20" style="margin-top:-0.3vh;">
                  <star-rating :rating="3.5" :star-size="15" :increment="0.1" :fixed-points="1" :read-only="true" :show-rating="false"></star-rating>
                </el-col>
              </el-row>
              <el-row style="margin-top:1vh;">
                <span style="line-height:1.5em;">{{ comment.content }}</span>
              </el-row>
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
import Vue from 'vue'
import StarRating from 'vue-star-rating'
import stationIcon from '@/assets/icon/station/station.png'
import moreIcon from '@/assets/icon/station/more.svg'
import avatarIcon from '@/assets/icon/station/avatar.svg'

Vue.component('star-rating', StarRating)

export default {
  name: 'stationInfo',
  data() {
    return {
      isplain: true,
      activeTab: 'detail',
      stationInfo: {},
      stationIcon: stationIcon,
      moreIcon: moreIcon,
      avatarIcon: avatarIcon
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
    toNavigate(position) {
      let url = 'http://api.map.baidu.com/direction?origin=latlng:30.679204000000,104.107936000000|name:电子科技大学&destination='
      url += 'position'
      url += '&mode=driving&region=成都&output=html'
      window.location.href = url
    }
  },
  created() {
    this.$http.post('/siteinformation/finddetails', {
      'siteid': this.$route.params.id
    }).then(response => {
      this.stationInfo = response.body.data
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
  border-right: 0;
}

.moreIcon {
  width: 18px;
  height: 18px;
}

.stationIcon {
  width: 35vw;
  height: auto;
}

.boltIcon {
  width: 30px;
  height: 30px;
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

.avatarIcon {
  width: 10vw;
  height: auto;
}
</style>
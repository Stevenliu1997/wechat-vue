<template>
  <div>
    <mt-cell>
      <el-row slot="title" style="display:flex;justify-content:center;align-items:center;">
        <el-col :span="5">
          <button class="numberButton">{{ terminalInfo.name }}</button>
        </el-col>
        <el-col :span="10" :offset="1">
          <p class="ellipsis">编号：{{ terminalInfo.id }}</p>
          <p class="ellipsis">终端类型：{{ terminalInfo.type }}</p>
          <p class="ellipsis">充电接口：{{ terminalInfo.interface }}</p>
          <p class="ellipsis">车位号：{{ terminalInfo.parkingNum }}</p>
        </el-col>
        <el-col :span="7" :offset="1 ">
          <el-row>
            <button class="opennessButton">{{ terminalInfo.openness }}</button>
          </el-row>
          <el-row style="margin-top:15px;">
            <mt-button size="small" type="primary">空闲</mt-button>
            <mt-button size="small" type="danger">快</mt-button>
          </el-row>
        </el-col>
      </el-row>
    </mt-cell>
    <div class="break" style="height:1.5vh;"></div>
    <mt-cell>
      <el-row slot="title">
        <el-col :span="8">
          <span class="label">停车费</span>
        </el-col>
        <el-col :span="16">{{ stationInfo.parkingFee }}</el-col>
      </el-row>
    </mt-cell>
    <div class="break" style="height:4vh;"></div>
    <mt-cell>
      <el-row slot="title" style="margin:20px 0;">
        <el-col :span="8">
          <span class="label">计费时段</span>
        </el-col>
        <el-col :span="16">{{ stationInfo.businessHours }}</el-col>
      </el-row>
      <el-row slot="title" style="margin:20px 0;">
        <el-col :span="8">
          <span class="label">电费</span>
        </el-col>
        <el-col :span="16">{{ stationInfo.electricity }}</el-col>
      </el-row>
      <el-row slot="title" style="margin:20px 0;">
        <el-col :span="8">
          <span class="label">服务费</span>
        </el-col>
        <el-col :span="16">{{ stationInfo.serviceCharge }}</el-col>
      </el-row>
    </mt-cell>
    <div class="break" style="height:3vh;"></div>
    <mt-cell is-link router-link to="/chargingMethod">
      <el-row slot="title">
        <el-col :span="8">
          <span class="label">充电方式</span>
        </el-col>
        <el-col :span="16">
          <span>
            <b>立即充电</b>
          </span>
        </el-col>
      </el-row>
    </mt-cell>
    <div class="break" style="height:35vh"></div>
    <div style="position:absolute;bottom:0;right:0;left:0;">
      <mt-cell>
        <el-row slot="title" style="display:flex;justify-content:center;align-items:center;">
          请插枪后刷新页面
        </el-row>
      </mt-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: 'terminalInfo',
  data() {
    return {
      stationInfo: {},
      terminalInfo: {}
    }
  },
  methods: {
  },
  created() {
    this.$http.get('/mock/stationInfo.json').then(response => {
      this.stationInfo = response.body[this.$route.params.id]
      this.terminalInfo = this.stationInfo.terminals[this.$route.params.index]
    }, response => {
      // error callback
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.numberButton {
  width: 100%;
  border-radius: 4px;
  border: 0;
  box-sizing: border-box;
  border: 1px solid #cc924e;
  background-color: #cc924e;
  box-shadow: none;
  color: #ffffff;
  display: inline-block;
  font-size: 14px;
  padding: 0 12px;
  height: 33px;
}

.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.opennessButton {
  width: 100%;
  border-radius: 4px;
  border: 0;
  box-sizing: border-box;
  border: 1px solid #e51c23;
  background-color: transparent;
  box-shadow: none;
  color: #000000;
  display: inline-block;
  font-size: 14px;
  padding: 0 12px;
  height: 33px;
}

.break {
  content: '';
  width: 100%;
  display: block;
  background-color: #f2f2f2;
}

.label {
  display: flex;
  justify-content: center;
}
</style>

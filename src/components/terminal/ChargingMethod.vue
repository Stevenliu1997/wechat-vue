<template>
  <div>
    <mt-cell>
      <el-row slot="title" style="display:flex;justify-content:center;align-items:center;">
        <el-col :span="12" :offset="2">
          <span class="label">立即充电</span>
        </el-col>
        <el-col :span="4" :offset="6">
          <span><img :src="checkIcon" class="checkIcon" /></span>
        </el-col>
      </el-row>
    </mt-cell>
    <mt-cell>
      <el-row slot="title">
        <el-col :span="12" :offset="2">
          <span class="label">定时充电</span>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
    </mt-cell>
    <mt-cell>
      <el-row slot="title">
        <el-col :span="12" :offset="2">
          <span class="label" style="color:#858285;">智能充电（敬请期待）</span>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
    </mt-cell>
    <div style="padding:15px 15px;height:80vh;background-color:#f2f2f2;color:#858285;font-size:0.6em;">
      <p>立即充电：点击充电按钮，系统会立即启动充电。</p>
      <p>定时充电：设置充电时间，到时系统会立即启动充电。</p>
      <p>智能充电：敬请期待...</p>
    </div>
  </div>
</template>

<script>
import check from '@/assets/icon/terminal/check.svg'
export default {
  name: 'chargingMethod',
  data() {
    return {
      checkIcon: check
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.label {
  display: flex;
  justify-content: flex-start;
}

.checkIcon {
  width: 20px;
  height: 20px;
}
</style>
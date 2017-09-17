<template>
  <div>
    <div>header</div>
    <div>
      <div>开票历史</div>
      <div>
        <mt-cell>
          <el-row>
            <el-col style="display: inline">ggg</el-col>
            <el-col style="display: inline">aaa</el-col>
            <el-col style="display: inline">yyy</el-col>
          </el-row>
        </mt-cell>

      </div>
    </div>
  </div>
</template>
<script>
  import ElCol from 'element-ui/packages/col/src/col'
  import MtCell from '../../../node_modules/mint-ui/packages/cell/src/cell'

  export default {
    components: {
      MtCell,
      ElCol},
    name: 'getticket',
    data () {
      return {}
    }
  }
</script>

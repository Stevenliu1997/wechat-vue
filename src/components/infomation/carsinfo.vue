<template>
  <div>
    <mt-field label="车辆品牌" placeholder="请输入车辆品牌" v-model="datamodel.car"></mt-field>
    <mt-field label="车辆型号" placeholder="请输入车辆型号" v-model="datamodel.carType"></mt-field>
    <mt-field label="车辆号" placeholder="请输入车辆号" v-model="datamodel.carNum"></mt-field>
    <mt-button type="primary" v-on:click="changecarinfo">保存</mt-button>
  </div>
</template>
<script>
  export default {
    name: 'carsinfo',
    data: {
      return: {
        datamodel: {
          account: '',
          nickname: '',
          name: '',
          phone: '',
          sex: '',
          birthday: '',
          car: '',
          carType: '',
          carNum: ''
        }
      }
    },
    methods: {
      changecarinfo () {
        this.datamodel.account = localStorage.getItem('account')
        this.$http.post('/perInformation/changeInformation', this.datamodel).then(response => {
          if (response.code === '00') {
            this.$router.push({path: '/self'})
          }
        })
      }
    }
  }
</script>


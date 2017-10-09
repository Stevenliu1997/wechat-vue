<template>
  <div>
    <mt-cell title="头像" is-link router-link to="" tag="div">
      <img slot="icon" v-bind:src="accountIcon" width="24" height="24">
    </mt-cell>
    <mt-cell title="昵称" is-link router-link to="/infomation/nickname" tag="div">
      {{info.nickname}}
    </mt-cell>
    <mt-cell title="姓名" is-link router-link to="/infomation/realname" tag="div">
      {{info.name}}
    </mt-cell>
    <mt-cell title="手机" is-link router-link to="" tag="div">
      {{info.phone}}
    </mt-cell>
    <mt-cell title="性别" is-link router-link to="" tag="div">
      {{info.sex}}
    </mt-cell>
    <mt-cell title="出生日期" is-link router-link to="" tag="div">
      {{info.birthday}}
    </mt-cell>
    <mt-cell title="车辆信息" is-link router-link to="/infomation/carsinfo" tag="div"></mt-cell>
  </div>
</template>
<script>
  import accountIcon from '@/assets/icon/self/round-account.svg'
  export default {
    name: 'infomation',
    data: {
      return: {
        accountIcon: accountIcon,
        info: {
          url: '',
          nickname: '',
          name: '',
          phone: '',
          sex: '',
          birthday: '',
          openId: '',
          car: '',
          arType: '',
          carNum: ''
        }
      }
    },
    created: function () {
      let account = localStorage.getItem('account')
      this.$http.post('/perInformation/getPerInformation', account).then(response => {
        if (response.code === '00') {
          this.info = response.perInformation
        }
      })
    }
  }
</script>

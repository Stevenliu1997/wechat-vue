<template>
  <div>
    <mt-field label="昵称" placeholder="请输入新昵称" v-model="datamodel.nickname"></mt-field>
    <mt-button type="primary" v-on:click="changenick"></mt-button>
  </div>
</template>
<script>
  export default {
    name: 'nickname',
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
      changenick () {
        this.datamodel.account = localStorage.getItem('account')
        this.$http.post('／perInformation/changeInformation', this.datamodel).then(response => {
          if (response.code === 'Success') {
            this.$router.push({path: '/self'})
          }
        })
      }
    }
  }
</script>

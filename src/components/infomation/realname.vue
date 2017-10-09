<template>
  <div>
    <mt-field label="昵称" placeholder="请输入新昵称" v-model="datamodel.name"></mt-field>
    <mt-button type="primary" v-on:click="changename"></mt-button>
  </div>
</template>
<script>
  import { MessageBox } from 'mint-ui'
  export default {
    name: 'realname',
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
      changename () {
        this.datamodel.account = localStorage.getItem('account')
        this.$http.post('／perInformation/changeInformation', this.datamodel).then(response => {
          if (response.code === '00') {
            MessageBox('success')
            this.$router.push({path: '/self'})
          }
        })
      }
    }
  }
</script>

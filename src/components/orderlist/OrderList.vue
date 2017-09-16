<template>
  <div>
    <div>
      <mt-header title="我的订单">
        <router-link to="/self" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <div>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">消费明细</mt-tab-item>
        <mt-tab-item id="2">充值明细</mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-cell v-for="itm in ritems " title="充电消费">{{itm.name}}</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="ite in pitems" title="充值明细">{{ite.name}}</mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>


  </div>
</template>

<script>
  import {Header, TabItem, Navbar, TabContainer, TabContainerItem} from 'mint-ui'
  import Vue from 'vue'

  Vue.component(Header.name, Header)
  Vue.component(Navbar.name, Navbar)
  Vue.component(TabItem.name, TabItem)
  Vue.component(TabContainer.name, TabContainer)
  Vue.component(TabContainerItem.name, TabContainerItem)

  export default {
    name: 'orderlist',
    data () {
      return {
        selected: '1',
        ritems: [{name: '88'}, {name: '66'}],
        pitems: [{name: '张三充值消费'}, {name: '李四充值消费'}]
      }
    }
    /* created: function () {
      this.$http.get('/mock/orderlist.json').then(response => {
        let data = response.data
        this.ritems = data.ritems
        this.pitems = data.pitems
      }, response => {
        console.log('failed')
      })
    }
  } */
  }
</script>

<style>
</style>

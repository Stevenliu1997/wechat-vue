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
          <mt-loadmore :bottom-method="loadBottom">
            <ul>
              <li v-for="item in ritems ">
                <mt-cell title="充电消费">{{item}}</mt-cell>
              </li>
            </ul>
          </mt-loadmore>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-loadmore :bottom-method="loadBottom">
            <ul>
              <li v-for="ite in pitems">
                <mt-cell title="充值明细">{{item}}</mt-cell>
              </li>
            </ul>
          </mt-loadmore>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>


  </div>
</template>

<script>
  // TODO solve the loadmore problem
  import {Header, TabItem, Navbar, TabContainer, TabContainerItem} from 'mint-ui'
  import Vue from 'vue'
  import MtLoadmore from '../../../node_modules/mint-ui/packages/loadmore/src/loadmore'

  Vue.component(Header.name, Header)
  Vue.component(Navbar.name, Navbar)
  Vue.component(TabItem.name, TabItem)
  Vue.component(TabContainer.name, TabContainer)
  Vue.component(TabContainerItem.name, TabContainerItem)

  export default {
    components: {MtLoadmore},
    name: 'orderlist',
    data () {
      return {
        selected: '1',
        ritems: [],
        pitems: [],
        loading: true
      }
    },
    methods: {
      getList () {
        this.$http.post('/hisConsumptionBill').then(response => {
          if (response.result === 'success') {
            let pdata = response.resultList
            this.pitems = pdata
          }
        })
      },
      loadBottom () {
      }
    },
    created: function () {
      this.$http.get('/hisConsumptionBill').then(response => {
        if (response.result === 'success') {
          let rdata = response.resultList
          this.ritems = rdata
        }
      }, response => {
        console.log('failed')
      })
    }
  }
</script>

<style>
</style>

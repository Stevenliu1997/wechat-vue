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
          <mt-loadmore :bottom-method="loadele" bottomDistance="10" bottomLoadingText="加载中...">
            <ul>
              <li v-for="item in ritems ">
                <div>
                  <mt-cell title="充电消费">{{item.payment}}</mt-cell>
                  <mt-cell>{{item.createdate}}</mt-cell>
                  <mt-cell>{{item.createtime}}</mt-cell>
                </div>
              </li>
            </ul>
          </mt-loadmore>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-loadmore :bottom-method="loadrec" bottomDistance="10" bottomLoadingText="加载中...">
            <ul>
              <li v-for="ite in pitems">
                <div>
                  <mt-cell title="充值明细">{{item.amount}}</mt-cell>
                  <mt-cell>{{item.paydate}}</mt-cell>
                </div>
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
  import MtCell from '../../../node_modules/mint-ui/packages/cell/src/cell'

  Vue.component(Header.name, Header)
  Vue.component(Navbar.name, Navbar)
  Vue.component(TabItem.name, TabItem)
  Vue.component(TabContainer.name, TabContainer)
  Vue.component(TabContainerItem.name, TabContainerItem)

  export default {
    components: {
      MtCell,
      MtLoadmore
    },
    name: 'orderlist',
    data () {
      return {
        selected: '1',
        ritems: [],
        pitems: [],
        loading: true,
        page1: {
          currentPage1: 0,
          pagesize1: 10,
          account: ''
        },
        page2: {
          currentPage2: 0,
          pagesize2: 10,
          account: ''
        }
      }
    },
    methods: {
      loadele () {
        this.page1.account = localStorage.getItem('account')
        this.page1.currentPage1 = this.page1.currentPage1 + 1
        this.$http.post('/hisConsumptionBill', this.page1).then(response => {
          if (response.code === '00') {
            let pdata = response.resultList
            this.pitems = pdata
          }
        })
      },
      loadrec () {
        this.page2.account = localStorage.getItem('account')
        this.page2.currentPage2 = this.page2.currentPage2 + 1
        this.$http.post('/hisRechargeBill', this.page2).then(response => {
          if (response.result === 'Success') {
            let rdata = response.resultList
            this.ritems = rdata
          }
        })
      }
    },
    created: function () {
      this.loadele()
    }
  }
</script>

<style>
</style>

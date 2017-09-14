import Vue from 'vue'
import Router from 'vue-router'
import CertificationFailed from '@/components/ChargingPile/CertificationFailed'
import ChargingPileInfo from '@/components/ChargingPile/ChargingPileInfo'
import ChargingPileDetail from '@/components/ChargingPile/ChargingPileDetail'
import addNewPile from '@/components/ChargingPile/addNewPile'

Vue.use(Router)

// 路由配置（使用lazyloading）
const Recharge = () => import('@/components/recharge/Recharge')
const Self = () => import('@/components/self/Self')
const ModifyPwd = () => import('@/components/modifyPassword/ModifyPwd')
const OrderList = () => import('@/components/orderlist/OrderList')
const Feedback = () => import('@/components/feedback/Feedback')
const Setting = () => import('@/components/setting/Setting')
const Wallet = () => import('@/components/wallet/Wallet')

export default new Router({
  routes: [
    { path: '/', redirect: '/self' },
    {
      path: '/self',
      name: 'Self',
      component: Self
    },
    {
      path: '/recharge',
      name: 'Recharge',
      component: Recharge
    },
    {
      path: '/modifyPwd',
      name: 'modifyPwd',
      component: ModifyPwd
    },
    {
      path: '/orderlist',
      name: 'OrderList',
      component: OrderList
    },
    {
      path: '/feedback',
      name: 'Feedback',
      component: Feedback
    },
    {
      path: '/wallet',
      name: '/Wallet',
      component: Wallet
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/ChargingPile/CertificationFailed',
      name: 'CertificationFailed',
      component: CertificationFailed
    },
    {
      path: '/ChargingPile/ChargingPileInfo',
      name: 'ChargingPileInfo',
      component: ChargingPileInfo
    },
    {
      path: '/ChargingPile/ChargingPileDetail',
      name: 'ChargingPileDetail',
      component: ChargingPileDetail
    },
    {
      path: '/ChargingPile/addNewPile',
      name: 'addNewPile',
      component: addNewPile
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import CertificationFailed from '@/components/ChargingPile/CertificationFailed'
import ChargingPileInfo from '@/components/ChargingPile/ChargingPileInfo'
import ChargingPileDetail from '@/components/ChargingPile/ChargingPileDetail'
import addNewPile from '@/components/ChargingPile/addNewPile'
import test from '@/components/ChargingPile/test'

Vue.use(Router)

// 路由配置（使用lazyloading）
const Recharge = () => import('@/components/recharge/Recharge')
const Self = () => import('@/components/self/Self')
const ModifyPwd = () => import('@/components/modifyPassword/ModifyPwd')

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
    },
    {
      path: '/ChargingPile/test',
      name: 'test',
      component: test
    }

  ]
})

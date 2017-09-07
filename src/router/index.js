import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Hello from '@/components/Hello'
import CertificationFailed from '@/components/ChargingPile/CertificationFailed'
import ChargingPileInfo from '@/components/ChargingPile/ChargingPileInfo'
import ChargingPileDetail from '@/components/ChargingPile/ChargingPileDetail'
import addNewPile from '@/components/ChargingPile/addNewPile'
=======
>>>>>>> 40bcdbd1f7f6eb947ce8cebdc3f29e9e4b3e47b9

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
<<<<<<< HEAD
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
=======
      path: '/modifyPwd',
      name: 'modifyPwd',
      component: ModifyPwd
>>>>>>> 40bcdbd1f7f6eb947ce8cebdc3f29e9e4b3e47b9
    }
  ]
})

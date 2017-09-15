import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 路由配置（使用lazyloading）
const Recharge = () =>
  import('@/components/recharge/Recharge')
const Self = () =>
  import('@/components/self/Self')
const ModifyPwd = () =>
  import('@/components/modifyPassword/ModifyPwd')
const NearbyStation = () =>
  import('@/components/station/NearbyStation')
const StationInfo = () =>
  import('@/components/station/StationInfo')
const ChoseCity = () =>
  import('@/components/choseCity/ChoseCity')
const TerminalInfo = () =>
  import('@/components/terminal/TerminalInfo')
const ChargingMethod = () =>
  import('@/components/terminal/ChargingMethod')

export default new Router({
  routes: [{
    path: '/',
    redirect: '/nearbyStation'
  },
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
    path: '/nearbyStation',
    name: 'nearbyStation',
    component: NearbyStation
  },
  {
    path: '/choseCity',
    name: 'choseCity',
    component: ChoseCity
  },
  {
    path: '/stationInfo/:id',
    name: 'stationInfo',
    component: StationInfo
  },
  {
    path: '/terminalInfo/:id/:index',
    name: 'terminalInfo',
    component: TerminalInfo
  },
  {
    path: '/chargingMethod',
    name: 'chargingMethod',
    component: ChargingMethod
  }
  ]
})

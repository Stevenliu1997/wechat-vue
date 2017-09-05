import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 路由配置（使用lazyloading）
const Recharge = () => import('@/components/recharge/Recharge')
const Self = () => import('@/components/self/Self')

export default new Router({
  routes: [
    {
      path: '/self',
      name: 'Self',
      component: Self
    },
    {
      path: '/recharge',
      name: 'Recharge',
      component: Recharge
    }
  ]
})

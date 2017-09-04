import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

const Recharge = () => import('@/components/recharge/Recharge')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/recharge',
      name: 'Recharge',
      component: Recharge
    }
  ]
})

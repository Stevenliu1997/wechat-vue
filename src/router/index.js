import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Recharge from '@/components/recharge/Recharge'

Vue.use(Router)

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

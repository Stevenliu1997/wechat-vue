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
const OrderList = () => import('@/components/orderlist/OrderList')
const Feedback = () => import('@/components/feedback/Feedback')
const Setting = () => import('@/components/setting/Setting')
const Wallet = () => import('@/components/wallet/Wallet')
const GetRecharge = () => import('@/components/recharge/GetRecharge')
const Ticket = () => import('@/components/ticket/Ticket')
const GetTicket = () => import('@/components/ticket/GetTicket')
const Receipt = () => import('@/components/receipt/Receipt')
const ReceiptHistory = () => import('@/components/receipt/ReceiptHistory')
const PaymentHomepage = () => import('@/components/payment/PaymentHomepage')
const PaymentInput = () => import('@/components/payment/PaymentInput')
const Charging = () => import('@/components/payment/Charging')
const OrderInformation = () => import('@/components/payment/OrderInformation')
const Success = () => import('@/components/payment/Success')

export default new Router({
  routes: [
    { path: '/', redirect: '/self' },
    {
      path: '/self',
      name: 'Self',
      component: Self
    },
    {
      path: '/getrecharge',
      name: 'GetRecharge',
      component: GetRecharge
    },
    {
      path: '/ticekt',
      name: 'Ticket',
      component: Ticket
    },
    {
      path: '/receipt',
      name: 'Receipt',
      component: Receipt
    },
    {
      path: '/receipt',
      name: 'ReceiptHistory',
      component: ReceiptHistory
    },
    {
      path: '/recharge',
      name: 'Recharge',
      component: Recharge
    },
    {
      path: '/ticket',
      name: 'GetTicket',
      component: GetTicket
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
      path: '/payment/homepage',
      name: 'PaymentHomepage',
      component: PaymentHomepage
    },
    {
      path: '/payment/input',
      name: 'PaymentInput',
      component: PaymentInput
    },
    {
      path: '/payment/charging',
      name: 'Charging',
      component: Charging
    },
    {
      path: '/payment/orderinformation',
      name: 'orderinformation',
      component: OrderInformation
    },
    {
      path: '/payment/success',
      name: 'Success',
      component: Success
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

import Vue from 'vue'
import Router from 'vue-router'
import CertificationFailed from '@/components/ChargingPile/CertificationFailed'
import ChargingPileInfo from '@/components/ChargingPile/ChargingPileInfo'
import ChargingPileDetail from '@/components/ChargingPile/ChargingPileDetail'
import addNewPile from '@/components/ChargingPile/addNewPile'
import SelectChargingMethod from '@/components/payment/SelectChargingMethod'
import setInformation from '@/components/ChargingPile/setInformation'

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
const Success = () => import('@/components/payment/Success')
const Login = () => import('@/components/login/Login')
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
const Infomation = () => import('@/components/infomation/Infomation')
const nickname = () => import('@/components/infomation/nickname')
const realname = () => import('@/components/infomation/realname')
const carsinfo = () => import('@/components/infomation/carsinfo')

export default new Router({
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/infomation',
      name: 'Infomation',
      component: Infomation
    },
    {
      path: '/infomation/nickname',
      name: 'nickname',
      component: nickname
    },
    {
      path: '/infomation/realname',
      name: 'realname',
      component: realname
    },
    {
      path: '/infomation/carsinfo',
      name: 'carsinfo',
      component: carsinfo
    },
    {
      path: '/self',
      name: 'Self',
      component: Self
    },
    {
      path: '/recharge/GetRecharge',
      name: 'GetRecharge',
      component: GetRecharge
    },
    {
      path: '/Ticket',
      name: 'Ticket',
      component: Ticket
    },
    {
      path: '/receipt/Receipt',
      name: 'Receipt',
      component: Receipt
    },
    {
      path: '/receipt/ReceiptHistory',
      name: 'ReceiptHistory',
      component: ReceiptHistory
    },
    {
      path: '/recharge/Recharge',
      name: 'Recharge',
      component: Recharge
    },
    {
      path: '/ticket/GetTicket',
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
      path: '/ChargingPile/setInformation',
      name: 'setInformation',
      component: setInformation
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
    },
    {
      path: '/payment/SelectChargingMethod',
      name: 'SelectChargingMethod',
      component: SelectChargingMethod
    }
  ]
})

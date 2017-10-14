// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueResource from 'vue-resource'
import 'font-awesome/css/font-awesome.css'
import VueCookie from 'vue-cookie'
import wx from 'weixin-js-sdk'
import Vuex from 'vuex'
// import $ from 'jquery'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(MintUI)
Vue.use(ElementUI)
Vue.use(VueCookie)
Vue.use(wx)
// Vue.use($)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})

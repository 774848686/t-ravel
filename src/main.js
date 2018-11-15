import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import 'babel-polyfill'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  loading: 'static/image/lazying.jpg'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App},
  template: '<App/>'
})

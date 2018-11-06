import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Home = () => import('@/pages/home/Home')
const City = () => import('@/pages/city/City')
const Detail = () => import('@/pages/detail/Detail')

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

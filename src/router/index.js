import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Home = () => import('@/pages/home/Home')
const City = () => import('@/pages/city/City')
const Detail = () => import('@/pages/detail/Detail')
const Cityplace = () =>import('@/pages/cityplace/Cityplace')

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
  }, {
    path: '/cityplace',
    name: 'Cityplace',
    component: Cityplace
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

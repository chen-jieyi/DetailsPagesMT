import Vue from 'vue'
import Router from 'vue-router'
// import Goods from '@/components/goods/Goods'
// import Ratings from '@/components/ratings/Ratings'
// import Seller from '@/components/seller/Seller'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/goods'
  },
  {
    path: '/goods',
    component: r => require.ensure([], () => r(require('@/components/goods/Goods')), 'group-foods')
  },
  {
    path: '/ratings',
    component: r => require.ensure([], () => r(require('@/components/ratings/Ratings')), 'group-foods')
  },
  {
    path: '/seller',
    component: r => require.ensure([], () => r(require('@/components/seller/Seller')), 'group-foods')
  }
]

//导航聚焦样式类名
const linkActiveClass = "active"

const mode = 'history'

export default new Router({
  routes,
  linkActiveClass,
  mode
})

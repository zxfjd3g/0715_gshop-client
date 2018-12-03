/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// import MSite from '../pages/MSite/MSite.vue'
// import Order from '../pages/Order/Order.vue'
// import Search from '../pages/Search/Search.vue'
// import Profile from '../pages/Profile/Profile.vue'

import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'

const MSite = () => import ('../pages/MSite/MSite.vue')
const Order = () => import ('../pages/Order/Order.vue')
const Search = () => import ('../pages/Search/Search.vue')
const Profile = () => import ('../pages/Profile/Profile.vue')


// 必须声明使用
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history', // 去掉#
  // 配置应用所有的路由
  routes: [
    {
      path: '/msite',
      component: MSite, // 只有当请求对应的path才会执行import()加载对应的包
      meta: {
        isShow: true // 标识显示底部导航
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        isShow: true // 标识显示底部导航
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        isShow: true // 标识显示底部导航
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        isShow: true // 标识显示底部导航
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: 'ratings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    },

    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
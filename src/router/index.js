/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

// 必须声明使用
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history', // 去掉#
  // 配置应用所有的路由
  routes: [
    {
      path: '/msite',
      component: MSite,
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
      path: '/',
      redirect: '/msite'
    }
  ]
})
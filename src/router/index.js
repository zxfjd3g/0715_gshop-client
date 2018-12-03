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

import A from '../pages/test/A.vue'
import B from '../pages/test/B.vue'
import B1 from '../pages/test/B1.vue'
import B2 from '../pages/test/B2.vue'

// 必须声明使用
Vue.use(VueRouter)

const router = new VueRouter({
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
      path: '/a',
      component: A
    },
    {
      path: '/b',
      component: B,
      children: [
        {
          path: '/b/b1',
          component: B1
        },
        {
          path: '/b/b2',
          component: B2
        },
      ]
    },

    {
      path: '/',
      redirect: '/msite'
    }
  ]
})

const pathes = ['/a', '/b', '/c', '/d']
// 注册全局前置守卫
router.beforeEach((to, from, next) => {
  console.log('global beforeEach()', to, from)
  // 如果请求的是a/b, 判断是否已经登陆, 如果没有登陆, 自动跳转的登陆页面, 其它所有情况放行
  if (pathes.indexOf(to.path) >= 0) {
    console.log(Vue.store)
    if (Vue.store.state.user._id) { // 已登陆
      next()
    } else { // 没登陆
      next('/login')
    }
  } else {
    // 放行
    next()
  }


})

export default router
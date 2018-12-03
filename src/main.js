import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'
import TopHeader from './components/TopHeader/TopHeader.vue'
import Split from './components/Split/Split.vue'
import loading from './common/images/loading.gif'

import './mock/mockServer'
import './filters'

// 注册全局组件
Vue.component('TopHeader', TopHeader)
Vue.component('Split', Split)
Vue.component(Button.name, Button) // <mt-button/>

Vue.use(VueLazyload, { // 内部定义了一个全局指令: lazy
  loading
})

// 将store保存Vue上
Vue.store = store  // 必须在创建vm之前执行

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  // render: h => h(App)
  /*render: function (createElement) {
    return createElement(App)  // 渲染<App/>
  }*/
  router,
  store, // 每个组件都有一个$store属性
})




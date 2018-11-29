import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import TopHeader from './components/TopHeader/TopHeader.vue'

// 注册全局组件
Vue.component('TopHeader', TopHeader)
Vue.component(Button.name, Button) // <mt-button/>


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

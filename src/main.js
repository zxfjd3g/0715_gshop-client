import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TopHeader from './components/TopHeader/TopHeader.vue'

// 注册全局组件
Vue.component('TopHeader', TopHeader)

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
  router
})

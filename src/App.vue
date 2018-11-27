<template>
  <div>
    <!--显示当前路由组件-->
    <router-view/>
    <FootGuide v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
  import FootGuide from './components/FootGuide/FootGuide.vue'
  import {reqAddress} from './api'

  export default {

    async mounted () {
      // 发异步ajax请求
      const result = await reqAddress('116.36867', '40.10038')
      console.log('result=', result)
    },

    components: { // 局部注册, 只能在当前组件中使用
      FootGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>

</style>
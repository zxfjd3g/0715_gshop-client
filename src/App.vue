<template>
  <div>
    <!--显示当前路由组件-->
    <router-view/>
    <FootGuide v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
  import FootGuide from './components/FootGuide/FootGuide.vue'

  export default {

    mounted () {
      // 异步获取地址数据(到state中)
      this.$store.dispatch('getAddress')
    },

    components: { // 局部注册, 只能在当前组件中使用
      FootGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>

</style>
<template>
  <div>
    B1组件
  </div>
</template>
<script>
  export default {
    // 适用于路由组件没有缓存
    /*mounted () {
      this.intervalId = setInterval(() => {
        console.log('做些事件...')
      }, 1000)
    },*/

    /*beforeDestroy() {
      clearInterval(this.intervalId)
    },*/

    // 在当前组件对象被创建前调用, 不能直接访问this(不是组件对象)
    // 但可以通过next(component => {}), 在回调函数中访问组件对象
    beforeRouteEnter (to, from, next) {
      next(component => {
        component.intervalId = setInterval(() => {
          console.log('做些事件...')
        }, 1000)
      })
    },

    // 在当前组件离开前调用, 可以访问this
    beforeRouteLeave (to, from, next) {
      clearInterval(this.intervalId)
      next()
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
<template>
  <div>ShopHeader</div>
</template>

<script>
  export default {
    mounted () {
      this.$store.dispatch('getShopInfo')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
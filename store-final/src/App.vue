<template>
  <div id="app">
    <div class="container-fluid">
      <appHeader></appHeader>
              <router-view></router-view>
    </div>
  </div>
</template>

<script>
// in my App let's add a method to initialize our stocks from vuex state
// uyse the created method to init
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    appHeader: Header
  },
  created() {
      // LETS DISPATCH OUR VUEX ACTION
      this.$store.dispatch('initStocks');
  }
}
</script>

<style lang="scss">
body{
  padding: 30px;
}
</style>

<template>
  <div id="app">
    <div class="container-fluid">
      <appHeader></appHeader>
              <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    appHeader: Header
  }
}
</script>

<style lang="scss">
body{
  padding: 30px;
}
</style>

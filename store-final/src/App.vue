<template>
  <div id="app">
    <div class="container-fluid">
      <appHeader></appHeader>
      <!-- Add animations between routes -->
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
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

/** add Animations **/

.slide-enter-active{
  animation: slide-in 300ms ease-out forwards; 
}
.slide-leave-active{
  animation: slide-out 300ms ease-out forwards;
}

@keyframes slide-in{
  from{
    transform: rotateY(-90deg);
    opacity:0
  }
  to{
    transform: rotateY(0);
    opacity: 1;
  }
}

@keyframes slide-out{
  from{
    transform: rotateY(0);
    opacity: 1;
  }
  to {
    transform: rotateY(-90deg);
    opacity: 0;
  }
}
</style>

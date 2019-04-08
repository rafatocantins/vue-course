<template>
  <div id="app">
    <div>
        <router-view></router-view>
    </div> 
  </div>
</template>


<script>

export default {
  name: 'app'
}
</script>

<style>

body{
  background-color: #000000;
}

#app{
  height: 100%;
  width: 100%;
  background-color: #000000;
}

</style>

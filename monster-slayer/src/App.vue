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

#app{
  padding-top: 25px;
}

.text-center {
    text-align: center;
}

.character{
  position: relative;
}

.healthbar {
    width: 80%;
    height: 40px;
    background-color: #eee;
    margin: auto;
    transition: width 500ms;
}

.controls, .log {
    margin-top: 30px;
    text-align: center;
    padding: 10px;
    border: 1px solid #ccc;
    box-shadow: 0px 3px 6px #ccc;
}

.turn {
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 22px;
}

.log ul {
    list-style: none;
    font-weight: bold;
    text-transform: uppercase;
}

.log ul li {
    margin: 5px;
}

.log ul .player-turn {
    color: white;
    background-color: green;
}

.log ul .monster-turn {
    color: white;
    background-color: red;
}

.log ul .health-turn {
    color: white;
    background-color: blue;
}

.log ul .special-turn {
    color: white;
    background-color: purple;
}

button {
    font-size: 20px;
    background-color: #eee;
    padding: 12px;
    box-shadow: 0 1px 1px black;
    margin: 10px;
}

#start-game {
    background-color: #aaffb0;
}

#start-game:hover {
    background-color: #76ff7e;
}

#attack {
    background-color: #ff7367;
}

#attack:hover {
    background-color: #ff3f43;
}

#special-attack {
    background-color: #ffaf4f;
}

#special-attack:hover {
    background-color: #ff9a2b;
}

#heal {
    background-color: #aaffb0;
}

#heal:hover {
    background-color: #76ff7e;
}

#give-up {
    background-color: #ffffff;
}

#give-up:hover {
    background-color: #c7c7c7;
}

.image{
  margin-bottom: 15px;
}

.image img{
  width: 100px;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform:translateX(-50%);
}

.wrapper{
  position: relative;
  min-height: 220px;
}

</style>

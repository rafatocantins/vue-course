<template>
  <div id="monster-slayer" class="container"> 
    <div>
      <section class="row character">
        <!-- Start of user component -->
        <div class="col-sm-6 col">
          <h1 class="text-center">{{user.name}}</h1>
          <div class="wrapper">
              <div class="image text-center">
                <img :src="user.image">
              </div>
          </div>
          <div class="healthbar">
              <div class="healthbar text-center" v-bind:style="{width: userLife + '%'}" style="background-color: green; margin: 0; color: white;">
                  {{ userLife }}
              </div>
          </div>
        </div>
        <!-- End of user component -->
        <!-- Start of monster component -->
        <div class="col-sm-6 col">
            <h1 class="text-center">{{monster.name}}</h1>
            <div class="wrapper">
                <div class="image text-center">
                  <img :src="monster.image">
                </div>
            </div>
            <div class="healthbar">
                <div class="healthbar text-center" :style="{width: monsterLife + '%'}" style="background-color: green; margin: 0; color: white;">
                  {{ monsterLife }}
                </div>
            </div>
        </div>
        <!-- End of monster component -->
    </section>
    <section class="row controls" v-if="!isRunning">
        <div class="col-sm-12 col">
            <button id="start-game" @click="startGame()" class="btn">START NEW GAME</button>
        </div>
    </section>
    <section class="row controls" v-if="isRunning">
        <div class="col-sm-12 col">
            <button id="attack" @click="attackEvent()" class="btn">ATTACK</button>
            <button id="special-attack" @click="specialAttack()" class="btn">SPECIAL ATTACK</button>
            <button id="heal" @click="heal()" class="btn">HEAL</button>
            <button id="give-up" class="btn" @click="giveUp()">GIVE UP</button>
        </div>
    </section>
    <section class="row log" v-if="isLogRunning">
        <div class="col-sm-12 col">
            <ul>
                <li v-for="battleLogs in battleLog" :key="battleLogs.index"
                    :class="{'player-turn': battleLogs.isPlayer , 'monster-turn': !battleLogs.isPlayer, 'health-turn': battleLogs.isHealth, 'special-turn': battleLogs.isSpecial}"
                    >
                    {{ battleLogs.text }}
                </li>
            </ul>
        </div>
    </section>
    </div> 
  </div>
</template>

<script>
import router from '../router'
// import { serverBus } from '../main';

export default {
  name: 'monster-player',  
  data() {
    return {
      user: {
        name: '',
        image: ''
      },
      monster: {
        name: '',
        image: ''
      },
      userLife: 100,
      monsterLife: 100,
      isRunning: false,
      battleLog: [],
      isLogRunning: false
    }
  },
  created() {
      // set user name and image
      this.user.name  = localStorage.getItem('userName')
      this.user.image = localStorage.getItem('userImage')

      // set monster name and image
      this.monster.name = localStorage.getItem('monsterName')
      this.monster.image = localStorage.getItem('monsterImage')
  },
  methods: {
    // Method to start the game
    startGame: function () {
        // Set values
        this.isRunning = true
        this.userLife = 100
        this.monsterLife = 100
        this.battleLog = []
        this.isLogRunning = false
        console.log(this.user.image)
    },
    // when the user attack
    attackEvent() {
      // get var for damage
      var damage = this.calculateDamage(3,10);
      // decrement life of monster
      this.monsterLife -= damage;
      // Add Log from the Battle
      this.battleLog.unshift({
        isPlayer: true,
        isHealth: false,
        isSpecial: false,
        text: 'You attack the beast by ' + damage + ' points',
      });
      // Set log to run
      this.isLogRunning = true
      // Confirm if it's victory
      if(this.confirmVictory()){
        return;
      }
      // Then monster attack
      this.monsterAttack();
    },
    // when the monster attack
    monsterAttack() {
      var damage = this.calculateDamage(2,7);
      this.userLife -= damage;
      this.battleLog.unshift({
        // set data to handle log requests
        isPlayer: false,
        isHealth: false,
        isSpecial: false,
        text: this.monster.name + ' attacked you by ' + damage + ' points'
      });

      if(this.confirmVictory()){
        return;
      }
    },
    // add method for special attack
    specialAttack() {
      var damage = this.calculateDamage(3,10);
      this.monsterLife -= damage;
      // handle the log
      this.battleLog.unshift({
        isPlayer: true,
        isHealth: false,
        isSpecial: true,
        text: 'Woow you did a special attack! you hit the beast by ' + damage + ' points'
      });
      this.isLogRunning = true
      if(this.confirmVictory()){
        return;
      }
      this.monsterAttack();
    },
    // Set a method for the heal functionallity
    heal(){
      var healing = this.calculateDamage(3,10);
      // Check if user has less than 100
      if(this.userLife <= 100){
        this.userLife += healing;
        // check if user is allready with 100 of life
        if(this.userLife >= 100){
          this.userLife = 100;
          this.battleLog.unshift({
          isPlayer: true,
          isHealth: true,
          text: 'Your health is fully restored'
        });
        }else{
          this.battleLog.unshift({
            isPlayer: true,
            isHealth: true,
            text: 'Your health was restored by ' + healing + ' points'
        });
        }

      this.isLogRunning = true
      }
    },
    // Method to give up
    giveUp(){
      if( confirm('Do you really want to give up?') ){
        this.startGame();
      }
    },
    // Method to confirm victory
    confirmVictory(){
      if (this.monsterLife <= 0) {
          if (confirm('You won! New Game?')) {
              this.startGame();
          } else {
              this.isLogRunning = false
              this.isRunning = false
              this.monsterLife = 0
          }
          return true;
      } else if (this.userLife <= 0) {
          console.log('it has arrived here');
          if (confirm('You lost! New Game?')) {
              this.startGame();
          } else {
              this.isLogRunning = false
              this.isRunning = false
              this.userLife = 0
          }
          return true;
      }
      return false;
    },
    // Method to calculate damage
    calculateDamage(min, max) {
        return Math.max(Math.floor(Math.random() * max) + 1, min);
    }
  }
}
</script>

<style scoped>

.main-title{
    padding-top: 25px;
    padding-bottom:10px;
}

.main-title h1{
    -webkit-text-stroke-width: 1px;
   -webkit-text-stroke-color: #febc28;
   font-weight: 900;
   color: black;
   padding: 30px;
}

.UserSelect-box-title h2{
    -webkit-text-stroke-width: 1px;
   -webkit-text-stroke-color: #febc28;
}

.text-center {
    text-align: center;
}


.healthbar {
    width: 60%;
    height: 25px;
    background-color: #eee;
    margin: auto;
    transition: width 500ms;
    margin-top: 25px;
    border-radius: 10px;
}

.controls, .log {
    margin-top: 30px;
    text-align: center;
    padding: 10px;
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
    border-radius: 10px;
}

.log ul .monster-turn {
    color: white;
    background-color: red;
    border-radius: 10px;
}

.log ul .health-turn {
    color: white;
    background-color: blue;
    border-radius: 10px;
}

.log ul .special-turn {
    color: white;
    background-color: purple;
    border-radius: 10px;
}

button {
    padding: 15px 25px;
    border: 2px solid #febc28;
    cursor:pointer;
    font-weight: bold;
    margin-left: 5px;
    margin-right: 5px;
}

#start-game {
    background-color: black;
    color: #febc28;
}

#start-game:hover {
    background-color: rgba(254, 188, 40,.6);
}

#attack {
    background-color: black;
    color: #febc28;
}

#attack:hover {
    background-color: #ff3f43;
    color: black;
}

#special-attack {
    background-color: black;
     color: #febc28;
}

#special-attack:hover {
    background-color: #ff9a2b;
    color: black;
}

#heal {
    background-color: black;
     color: #febc28;
}

#heal:hover {
    background-color: green;
    color: black;
}

#give-up {
    background-color: black;
     color: #febc28;
}

#give-up:hover {
    background-color: #c7c7c7;
    color: black;
}

.image{
  margin-bottom: 15px;
}

.image img{
  width: 250px;
}

.wrapper{
  position: relative;
  padding: 40px 10px;
    border: 4px solid #febc28;
    border-radius: 50px;
    overflow: hidden;
    height: 430px;
}

.character h1{
    -webkit-text-stroke-width: 1px;
   -webkit-text-stroke-color: #febc28;
   font-weight: 900;
   color: black;
   padding: 30px;
}

</style>

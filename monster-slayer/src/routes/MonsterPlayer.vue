<template>
  <div id="monster-slayer"> 
    <div>
      <section class="row character">
        <!-- Start of user component -->
        <div class="col-sm-6 col">
          <h1 class="text-center">{{user.name}}</h1>
          <div class="wrapper">
              <div class="image">
                <img :src="user.image[1]">
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
            <h1 class="text-center">MONSTER</h1>
            <div class="wrapper">
                <div class="image">
                  <img :src="monster.image[0]">
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
import { serverBus } from '../main';

export default {
  name: 'monster-player',  
  data() {
    return {
      user: {
        name: '',
        image: [
          '/src/assets/images/user/bart.png',
          '/src/assets/images/user/looney-chicken.png',
          '/src/assets/images/user/mario.png',
          '/src/assets/images/user/peter-griffin.png',
          '/src/assets/images/user/spongebob.png'
        ]
      },
      monster: {
        name: '',
        image: [
          '/src/assets/images/monster/cookie-monster.png',
          '/src/assets/images/monster/lizard.png',
          '/src/assets/images/monster/predator.png'
        ]
      },
      userLife: 100,
      monsterLife: 100,
      isRunning: false,
      battleLog: [],
      isLogRunning: false
    }
  },
  created() {
      serverBus.$on('userSelected', (name) =>{
          this.user.name = name;
      })
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
        text: 'The beast attacked you by ' + damage + ' points'
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
    },
  }
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

<template>
  <div id="app"> 
    <div>
      <section class="row">
        <div class="col-sm-6 col">
            <h1 class="text-center">YOU</h1>
            <div class="healthbar">
                <div class="healthbar text-center" v-bind:style="{width: userLife + '%'}" style="background-color: green; margin: 0; color: white;">
                    {{ userLife }}
                </div>
            </div>
        </div>
        <div class="col-sm-6 col">
            <h1 class="text-center">MONSTER</h1>
            <div class="healthbar">
                <div class="healthbar text-center" :style="{width: monsterLife + '%'}" style="background-color: green; margin: 0; color: white;">
                  {{ monsterLife }}
                </div>
            </div>
        </div>
    </section>
    <section class="row controls">
        <div class="col-sm-12 col">
            <button id="start-game" @click="isRunning = !isRunning" class="btn">START NEW GAME</button>
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
    <section class="row log">
        <div class="col-sm-12 col">
            <ul>
                <li v-for="battleLogs in battleLog" :key="battleLogs.index"
                    :class="{'player-turn': battleLogs.isPlayer , 'monster-turn': !battleLogs.isPlayer}"
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
export default {
  data() {
    return {
      userLife: 100,
      monsterLife: 100,
      isRunning: false,
      battleLog: []
    }
  },
  methods: {
    startGame: function () {
        this.isRunning = true;
        this.userLife = 100;
        this.monsterLife = 100;
        this.battleLog = [];
    },
    attackEvent() {
      var damage = this.calculateDamage(3,10);
      this.monsterLife -= damage;
      this.battleLog.unshift({
        isPlayer: true,
        text: 'You attack the beast by ' + damage + ' points'
      });
      
      if(this.confirmVictory()){
        return;
      }
      // set time out dá merda tenho que arranjar um prevent default para não clicar 
      this.monsterAttack();
    },
    monsterAttack() {
      var damage = this.calculateDamage(2,7);
      this.userLife -= damage;
      this.battleLog.unshift({
        isPlayer: false,
        text: 'The beast attacked you by ' + damage + ' points'
      });

    },
    specialAttack() {
      var damage = this.calculateDamage(5,15);
      this.monsterLife -= damage;
      this.battleLog.unshift({
        isPlayer: true,
        text: 'Woow you did a special attack! you hit the beast by ' + damage + ' points'
      });
      
      if(this.confirmVictory()){
        return;
      }
      this.monsterAttack();
    },
    heal(){
      var healing = this.calculateDamage(8,18);
      if(this.userLife <= 100){
        this.userLife += healing;
        if(this.userLife >= 100){
          this.userLife = 100;
        }
        this.battleLog.unshift({
        isPlayer: true,
        text: 'Your health was restored by ' + healing + ' points'
      });
      }
    },
    giveUp(){
      if( confirm('Do you really want to give up?') ){
        this.startGame();
      }
    },
    confirmVictory(){
      if (this.monsterLife <= 0) {
          if (confirm('You won! New Game?')) {
              this.startGame();
          } else {
              this.isRunning = false;
          }
          return true;
      } else if (this.userLife <= 0) {
          if (confirm('You lost! New Game?')) {
              this.startGame();
          } else {
              this.isRunning = false;
          }
          return true;
      }
      return false;
    },
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
</style>

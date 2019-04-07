<template>
    <div id="homepage">
        <section class="container select-character">
            <div class="row">
                <div class="col-sm-6 col UserSelect">
                    <div class="UserSelect-box">
                        <div class="UserSelect-box-title">
                            <h2>select your character</h2>
                        </div>
                        <div class="UserSelect-box-image">
                            <img alt="" :src="user.character">
                        </div>
                        <div class="UserSelect-box-image-selection">
                            <ul>
                                <li v-for="userImage in user.images" :key="userImage.id">
                                    <!-- Use of a function to get the src and use value -->
                                    <input type="image" :src="userImage" @click="setUserCharacter" :value="userImage">
                                </li>
                            </ul>
                        </div>
                        <div class="UserSelect-box-name">
                            <label>set your name</label>
                            <div class="UserSelect-box-name-box">
                                <h2>{{ user.name }}</h2>
                            </div>
                            <div class="UserSelect-box-name-input">
                                <input name="name" type="text" v-model="user.name" @input="setUserName">
                                <div class="error" v-if="!$v.name.minLength">must be 4 letters</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col MonsterSelect">
                    <div class="MonsteSelect-box">
                        <div class="MonsterSelect-box-title">
                            <h2>select your monster</h2>
                        </div>
                        <div class="MonsterSelect-box-image">
                            <img :src="monster.character" alt="">
                        </div>
                        <div class="MonsterSelect-box-image-selection">
                            <ul>
                                <li v-for="monsterImage in monster.images" :key="monsterImage.id">
                                    <input type="image" :src="monsterImage" @click="setMonsterCharacter" :value="monsterImage">
                                </li>
                            </ul>
                        </div>
                        <div class="MonsterSelect-box-name">
                            <label>set the monster name</label>
                            <div class="MonsterSelect-box-name-box">
                                <h2>{{ monster.name }}</h2>
                            </div>
                            <div class="MonsterSelect-box-name-input">
                                <input type="text" @input="setMonsterName">
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
        <div class=".row box-submition text-center">
            <div class="col col-sm-12">
                <button @click="toGame()" class="btn btn-primary">
                    Go to game
                </button>
            </div>
        </div>
        
    </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import { serverBus } from '../main';

export default {
    name: 'homepage',
    props: ['name'],
    data() {
        return {
            user: {
                name: '',
                character: '',
                images: [
                    '/src/assets/images/user/bart.png',
                    '/src/assets/images/user/looney-chicken.png',
                    '/src/assets/images/user/mario.png',
                    '/src/assets/images/user/peter-griffin.png',
                    '/src/assets/images/user/spongebob.png'
                ]
            },
            monster: {
                name: '',
                character: '',
                images: [
                    '/src/assets/images/monster/cookie-monster.png',
                    '/src/assets/images/monster/lizard.png',
                    '/src/assets/images/monster/predator.png'
                ]
            }
        }
    },
    validations: {
        name: {
            required,
            minLength: minLength(4)
        }  
    },
    methods: {
        toGame() {
                serverBus.$emit('userSelected', this.user.name)
                this.$router.push({
                name: 'monster-player'
                })
        },
        setUserName: function(event) {
            this.user.name = event.target.value    
            console.log(this.user.name)  
        },
        setMonsterName: function(event){
            this.monster.name = event.target.value
        },
        setUserCharacter: function(event) {
            this.user.character = event.target.value
            console.log('user image is: ' + this.user.character)
        },
        setMonsterCharacter: function(event) {
            this.monster.character = event.target.value
            console.log('monster image is:' + this.monster.character)
        }
    }
}
</script>

<style scoped>
li input{
    width: 50px;
}

.UserSelect-box-image img{
    width: 150px;
}

.MonsterSelect-box-image img{
    width: 150px;
}
</style>

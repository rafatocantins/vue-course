<template>
    <div id="homepage">
        <section class="container select-character">
            <div class="row">
                <div class="col-sm-6 col UserSelect">
                    <div class="UserSelect-box">
                        <div class="UserSelect-box-title text-center">
                            <h2>Select your Jedi</h2>
                        </div>
                        <div class="UserSelect-box-image text-center">
                            <img alt="" :src="user.character">
                        </div>
                        <div class="UserSelect-box-image-selection">
                            <ul class="text-center">
                                <li :class="{'selected': userImage.url === user.character}" v-for="userImage in user.images" :key="userImage.id">
                                    <!-- Use of a function to get the src and use value -->
                                    <input type="image" :src="userImage.url" @click="setUserCharacter" :value="userImage.url">
                                </li>
                            </ul>
                        </div>
                        <div class="UserSelect-box-name text-center">
                            <label>Set your Jedi name</label>
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
                        <div class="MonsterSelect-box-title text-center">
                            <h2>Select your Sith Lord</h2>
                        </div>
                        <div class="MonsterSelect-box-image text-center">
                            <img :src="monster.character" alt="">
                        </div>
                        <div class="MonsterSelect-box-image-selection">
                            <ul class="text-center">
                                <li :class="{ 'selected': monsterImage.url === monster.character }" v-for="monsterImage in monster.images" :key="monsterImage.id">
                                    <input type="image" :src="monsterImage.url" @click="setMonsterCharacter" :value="monsterImage.url">
                                </li>
                            </ul>
                        </div>
                        <div class="MonsterSelect-box-name text-center">
                            <label>Set your Sith name</label>
                            <div class="MonsterSelect-box-name-box">
                                <h2>{{ monster.name }}</h2>
                            </div>
                            <div class="MonsterSelect-box-name-input">
                                <input type="text" v-model="monster.name" @input="setMonsterName">
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
        <div class=".row box-submition text-center">
            <div class="col col-sm-12">
                <button @click="toGame()" class="btn star-button">
                    Go to game
                </button>
            </div>
        </div>
        
    </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
// import { serverBus } from '../main';

export default {
    name: 'homepage',
    // props: ['userName','userImage','monsterName','monsterImage'],
    data() {
        return {
            user: {
                name: 'Rafael',
                character: '/src/assets/images/user/anakin.png',
                images: [
                    {
                        url: '/src/assets/images/user/anakin.png',
                        isSelected: false
                    },
                    {
                        url: '/src/assets/images/user/chewbacca.png',
                        isSelected: false
                    },
                    {
                        url: '/src/assets/images/user/han-solo.png',
                        isSelected: false
                    },
                    {
                        url: '/src/assets/images/user/luke-skywalker.png',
                        isSelected: false
                    },
                    {
                        url: '/src/assets/images/user/yoda.png',
                        isSelected: false
                    }
                ]
            },
            monster: {
                name: 'Darth Maul',
                character: '/src/assets/images/monster/darth-maul.png',
                images: [
                    {
                        url: '/src/assets/images/monster/bobba-fett.png',
                        isSelected: false
                    },
                    {
                        url: '/src/assets/images/monster/darth-maul.png',
                        isSelected: false
                    },
                    {
                        url: '/src/assets/images/monster/darth-vader.png',
                        isSelected: false
                    },
                    {
                        url: '/src/assets/images/monster/kylo-ren.png',
                        isSelected: false
                    },
                    {
                        url: '/src/assets/images/monster/storm-tropper.png',
                        isSelected: false
                    }
                ],
                isSelected: false
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
           if(this.user.name.length < 4){
               alert('user name is less than 4 words');
           }else if(this.monster.name.length < 4){
               alert('Sith name is lesss than 4 words');
           }else{
                // set User
                localStorage.setItem('userName', this.user.name)
                localStorage.setItem('userImage', this.user.character)
                // Set sith
                localStorage.setItem('monsterName', this.monster.name);
                localStorage.setItem('monsterImage',this.monster.character);
                this.$router.push({
                name: 'monster-player'
                // params: {
                //   userName: localStorage.setItem('userName', this.user.name),
                //   userImage: localStorage.setItem('userImage', this.user.character),
                //   monsterName: this.monster.name,
                //   monsterImage: this.monster.character
                // }
            })
           }
        },
        checkData() {
            alert('user name is ' + this.user.name + ' and character is ' + this.user.character);
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
            this.user.images.isSelected = true
            console.log(this.user.images.isSelected)
        },
        setMonsterCharacter: function(event) {
            this.monster.character = event.target.value
            this.monster.isSelected = true
        }
    }
}
</script>

<style scoped>


.UserSelect-box-title h2{
    -webkit-text-stroke-width: 1px;
   -webkit-text-stroke-color: #febc28;
   font-weight: 900;
   color: black;
   padding: 30px;
}

.MonsterSelect-box-title h2{
    -webkit-text-stroke-width: 1px;
   -webkit-text-stroke-color: #febc28;
   font-weight: 900;
   color: black;
   padding: 30px;
}

.UserSelect-box-image-selection{
    padding: 20px 0;
    margin-top: 20px;
    text-align: center;
}

.MonsterSelect-box-image-selection{
    padding: 20px 0;
    margin-top: 20px;
    text-align: center;
}

.UserSelect-box-image-selection ul{
    list-style: none;
}

.MonsterSelect-box-image-selection ul{
    list-style: none;
}

.UserSelect-box-image-selection ul li{
    display: inline-block;
    width: 50px;
    height: 50px;
    overflow: hidden;
    margin-left: 20px;
    border: 2px solid #febc28;
    padding: 4px 0px;
    border-radius: 13px;
    transition: .3s linear;
}

.selected{
    transform:scale(1.1);
}

.selected input{
    transform:scale(1.2);
}

.UserSelect-box-image-selection ul li:hover{
    transform:scale(1.1);
}

.UserSelect-box-image-selection ul li:first-child{
    margin-left: -35px;
}

.MonsterSelect-box-image-selection ul li:first-child{
    margin-left: -35px;
}

.MonsterSelect-box-image-selection ul li{
    display: inline-block;
    width: 50px;
    height: 50px;
    overflow: hidden;
    margin-right: 20px;
    border: 2px solid #febc28;
    padding: 4px 0px;
    border-radius: 13px;
    transition: .3s linear;
}

.MonsterSelect-box-image-selection ul li:hover{
    transform:scale(1.1);
}

.MonsterSelect-box-image-selection ul li input{
    width: 60px;
    transition:.3s linear;
}

.MonsterSelect-box-image-selection ul li input:hover{
    transform:scale(1.2);
    
}

.UserSelect-box-image-selection ul li input{
    width: 60px;
    transition:.3s linear;
}

.UserSelect-box-image-selection ul li input:hover{
    transform:scale(1.2);
}


.UserSelect-box-image{
    padding: 40px 10px;
    border: 4px solid #febc28;
    border-radius: 50px;
    overflow: hidden;
    height: 430px;
}

.MonsterSelect-box-image{
    padding: 40px 10px;
    border: 4px solid #febc28;
    border-radius: 50px;
    overflow: hidden;
    height: 430px;
}

.UserSelect-box-image img{
    width: 250px;
}

.MonsterSelect-box-image img{
    width: 250px;
}

.UserSelect-box-name{
    margin-bottom: 2em;
}

.UserSelect-box-name label{
    font-size: 24px;
    margin-bottom: .5rem;
    font-weight: bolder;
    color: #febc28;
}

.MonsterSelect-box-name{
    margin-bottom: 2em;
}

.MonsterSelect-box-name label{
    font-size: 24px;
    margin-bottom: .5rem;
    font-weight: bolder;
    color: #febc28;
}

.UserSelect-box-name-box{
    margin-bottom: 15px;
}

.MonsterSelect-box-name-box{
    margin-bottom: 15px;
}

.UserSelect-box-name-box h2{
    font-weight: 900;
    color: black;
    -webkit-text-stroke-width: 1px;
   -webkit-text-stroke-color: #febc28;
}

.MonsterSelect-box-name-box h2{
    font-weight: 900;
    color: black;
    -webkit-text-stroke-width: 1px;
   -webkit-text-stroke-color: #febc28;
}

.MonsterSelect-box-name-input input{
    border: 2px solid #febc28;
    background-color: black;
    color: #febc28;
    padding: 2px 10px 4px 2px;
    border-radius: 10px;
    text-align: center;
}



.UserSelect-box-name-input input{
    border: 2px solid #febc28;
    background-color: black;
    color: #febc28;
    padding: 2px 10px 4px 2px;
    border-radius: 10px;
    text-align: center;
}

button.star-button{
    padding: 15px 25px;
    border: 2px solid #febc28;
    color: #febc28;
}

.box-submition{
    padding-bottom: 40px;
}

</style>

<template>
    <nav style="margin-bottom:30px" class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">Stock Trader</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                    <!-- Add a tag and active class to router link -->
                        <router-link to="/portfolio" tag="li" class="nav-item" activeClass="active"><a class="nav-link">Portfolio</a></router-link>
                        <router-link to="/stocks" tag="li" class="nav-item" activeClass="active"><a class="nav-link">Stocks</a></router-link>
                    </ul>
                    <li class="nav navbar-text"><a class="" href="#">End Day</a></li>
                    <li class="dropdown nav-item" style="list-style: none;">
                        <a 
                            href="" 
                            class="dropdown-toggle nav-link" 
                            role="button" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false"> Save / Load <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="">Save Data</a></li>
                            <li><a href="">Load Data</a></li>
                        </ul>
                    </li>
                    <strong class="nav navbar-text navbar-right nav-item">Funds: {{ funds }}</strong>
                </div>
            </div>
        </nav>
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds
        }
    }
}
</script>


<style scoped>


</style>

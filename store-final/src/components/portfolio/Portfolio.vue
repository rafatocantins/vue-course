<template>
    <div class="row">
        <appStock v-for="stock in stocks" :stock="stock" :key="stock.id"></appStock>
    </div>
</template>

<script>
// use mapGetters as an example
import {mapGetters} from 'vuex'
// import my stock from portfolio/stock
import Stock from './Stock'

export default {
    computed: {
        ...mapGetters({
        stocks: 'stockPortfolio' // get the getters from the portfolio method
    })
    },
    components: {
        appStock: Stock
    }
}
</script>

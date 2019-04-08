<template>
    <!-- This is my component to dealing all my stocks || to control ourt stocks let's have the login on mny stock component-->
    <div class="row">
        <!-- use the v-for on the component stock tag -->
        <!-- use props to load the data -->
        <appStock v-for="stock in stocks" :key="stock.id" :stock="stock"></appStock>
    </div>
</template>

<script>
// import my stock component to handle the data
import Stock from './Stock'
export default {
    components: {
        appStock: Stock
    },
    // use the computed method to get the data // that's on getters
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        }
    }
}
</script>


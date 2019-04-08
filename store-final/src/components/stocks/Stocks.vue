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
    data() {
        return {
            // get an array of stocks get an ID, a Name and a price
            stocks: [
                {id: 1, name: 'BMW', price: 110},
                {id: 2, name: 'Ferrari', price: 125},
                {id: 3, name: 'Google', price: 89},
                {id: 4, name: 'Amazon', price: 95}

            ]
        }
    },
    components: {
        appStock: Stock
    }
}
</script>


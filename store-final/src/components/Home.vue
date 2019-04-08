<template>
    <div class="row">
        <div class="col-md-12">
            <h1>View your Portfolio or make some trades</h1>
            <h6>You may save and load your data</h6>
            <h6>Click on End Day to begin a new day</h6>
            <hr>
            <p>Your funds: {{ funds }}</p>
        </div> 
    </div>  
</template>

<script>
export default {
    computed: {
        funds() {
            // I'm intersted on one getter so i will use the $store
            return this.$store.getters.funds
        }
    }
}
</script>


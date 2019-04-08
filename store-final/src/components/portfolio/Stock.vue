<template>
    <div class="col col-sm-6 col-md-4 stock-view">
        <div class="card border-info">
            <div class="card-header bg-info text-white">
                    {{stock.name}}
                    <small>(price: {{stock.price}} | Quantity: {{stock.quantity}} )</small>
            </div>
            <div class="card-body">
                <div class="float-left">
                    <input 
                        type="number"
                        class="form-control"
                        placeholder="Quantity"
                        v-model="quantity">
                </div>
                <div class="float-right">
                    <!-- use the disable attribute to shut the functionallity for undesire events -->
                    <!-- Number.isInteger() not functionally correct browser related issue - add a method to check if it's Integer -->
                    <button 
                    class="btn btn-info"
                    @click="sellStock()"
                    :disabled="quantity <= 0 || !isInt(quantity)"
                    >Sell
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// if i have multiple actions on this actions use mapActions. We'll do as an example here
import {mapActions} from 'vuex'

export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        ...mapActions({
            // this cannot have the same name so transform it into an object
            placeSellOrder: 'sellStock'
        }), 
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            this.placeSellOrder(order);
            this.quantity = 0;
        },
        isInt(n) {
            return n % 1 === 0;
        }
    }
}
</script>


<style scoped>
.stock-view{
    margin-bottom: 30px;
}
</style>


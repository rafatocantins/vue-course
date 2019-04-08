<template>
    <div class="col col-sm-6 col-md-4 stock-view">
        <div class="card border-success">
            <div class="card-header bg-success text-white">
                    {{stock.name}}
                    <small>(price: {{stock.price}})</small>
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
                    class="btn btn-success"
                    @click="buyStock()"
                    :disabled="quantity <= 0 || !isInt(quantity)"
                    >Buy
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            console.log(order);
            this.quantity = 0;
        },
        isInt(n) {
            return n % 1 === 0
        }
    }
}
</script>


<style scoped>
.stock-view{
    margin-bottom: 30px;
}
</style>

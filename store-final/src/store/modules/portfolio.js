// add the module portfolio

// get the state
const state = {
    // our funds
    funds: 100000,
    // get our portfolio stocks
    stocks: []
}

// get our mutations 
const mutations = {
    // the params we see on Buy_Stock are from the method on Stock.vue buyStock;
    'BUY_STOCK' (state, {stockId, quantity, stockPrice}) {
        // first check if stock is allready in array
        const record = state.stocks.find(element => element.id === stockId)
        if(record) {
            // if exists update quantity
            record.quantity += quantity
        }else{
            // if not create a new object
            state.stocks.push({
                id: stockId,
                quantity: quantity
            })
        }
        // update my funds when buying
        state.funds -= stockPrice * quantity
    },
    'SELL_STOCK'(state, {stockId, quantity, stockPrice}) {
        // first check if stock is allready in array
        const record = state.stocks.find(element => element.id === stockId)
        // if the quantity is higher than the quantity i wanna buy decrease our quantity
        if(record.quantity > quantity) {
            record.quantity -= quantity
        }else{
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }
        // update my funds when selling
        state.funds += stockPrice * quantity
    }
}

// get our actions
const actions = {
    sellStock({commit}, order) {
        commit('SELL_STOCK', order)
    }
}

// get our getters
const getters = {
    stockPortfolio (state, getters) {
        return state.stocks.map(stock =>{
            const record = getters.stocks.find(element => element.id == stock.id)
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        })
    },
    funds (state) {
        return state.funds
    }
}

// Export in a javascript object

export default {
    state,
    mutations,
    actions,
    getters
}
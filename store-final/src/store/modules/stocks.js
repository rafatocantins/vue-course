// create a folder modules and add our modules there. ex. stocks.js and portfolio.js
// import our data file
import stocks from '../../data/stocks'
// add a new state

const state = {
    stocks: [] // this will go to our getters
}

// add mutations to change our stocks 

const mutations = {
    // use namespaces
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS' (state) {
        // add a function to get random prices
        state.stocks.forEach(stock =>{
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
        })
    }
}

// define our actions 

const actions = {
    // to buy stocks
    buyStock: ({commit}, order) => {
        // commit the mutation you need to buy stocks / in this case the mutation is on portfolio module
        commit('BUY_STOCK', order);
    },
    initStocks: ({commit}) => {
        // set our data to our setStocks commit 
        commit('SET_STOCKS', stocks);
    },
    randomizeStocks: ({commit}) => {
        // commit the rnd_stocks from mutations
        commit('RND_STOCKS')
    }
}

// define our getters
const getters = {
    stocks: state => {
        return state.stocks;
    }
}

// Export as a javascript object
export default {
    state,
    mutations,
    actions,
    getters
}


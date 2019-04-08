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

    }
}

// define our actions 

const actions = {
    buyStock: ({commit}, order) => {
        commit();
    },
    initStocks: ({commit}) => {
        // set our data to our setStocks commit 
        commit('SET_STOCKS', stocks);
    },
    randomizeStocks: ({commit}) => {
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


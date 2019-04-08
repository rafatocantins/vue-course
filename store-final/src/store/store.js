// Add a vuex file to control the store
// Add npm install --save vuex and create a file store.js inside a folder store
import Vue from 'vue'
import Vuex from 'vuex'

// import my stocks.js modules
import stocks from './modules/stocks'

Vue.use(Vuex)

// add a new Vuex store
export default new Vuex.Store({
    modules: {
        stocks
    }
})
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// modules
import cart from './cart/#index'

export default new Vuex.Store({
    modules: {
        cart
    }
})
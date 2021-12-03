import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// modules
import cart from './cart/#index'
import phonesObj from './phones/#index'

export default new Vuex.Store({
    modules: {
        cart,
        phonesObj
    }
})
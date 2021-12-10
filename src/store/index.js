import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// modules
import cart from './cart/#index'
import auth from './auth/#index'
import phonesObj from './phones/#index'

export default new Vuex.Store({
    modules: {
        auth,
        cart,
        phonesObj
    }
})
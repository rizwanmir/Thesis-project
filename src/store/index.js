import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentMethod: []

  },
  mutations: {
    /* addPayment(state, paymentMethods) {
      state.selectedPayment.push(paymentMethods)
    },  */

    setPaymentMethod (state, paymentMethod) {
      state.paymentMethod = paymentMethod
    }

  },
  actions: {
    addPayment ({ commit }, paymentMethod) {
      commit('setPaymentMethod', paymentMethod)
    }
  },
  getters: {

  }
})

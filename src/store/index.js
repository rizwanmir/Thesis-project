import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    customerInfo: null,
    paymentOption: null,
    paymentMethod: null

  },
  mutations: {
    setCustomerInfo (state, customerInfo) {
      state.customerInfo = customerInfo
    },
    setPaymentOption (state, paymentOption) {
      state.paymentOption = paymentOption
    },

    setPaymentMethod (state, paymentMethod) {
      state.paymentMethod = paymentMethod
    }

  },
  actions: {
    saveCustomerInfo ({ commit }, customerInfo) {
      commit('setCustomerInfo', customerInfo)
    },
    savePaymentOption ({ commit }, paymentOption) {
      commit('setPaymentOption', paymentOption)
    },

    addPayment ({ commit }, paymentMethod) {
      commit('setPaymentMethod', paymentMethod)
    }
  },
  getters: {
    getCustomerInfo: (state) => {
      return state.customerInfo
    }

  }
})

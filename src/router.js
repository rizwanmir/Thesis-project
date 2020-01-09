import Vue from 'vue'
import Router from 'vue-router'
import Payment from './views/Payment.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Payment',
      component: Payment
    },

    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    
  ]
})
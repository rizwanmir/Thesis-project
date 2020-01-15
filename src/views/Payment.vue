<template>
  <div class="wrapper">
    <CustomerInfo />
    <PaymentOptions />
    <CheckOut v-if="payNow" />
    <OrderSend v-if="payLater" />
  </div>
</template>

<script>
import CustomerInfo from '@/components/CustomerInfo.vue'
import PaymentOptions from '@/components/PaymentOptions.vue'
import CheckOut from '@/components/CheckOut.vue'
import OrderSend from '@/components/OrderSend.vue'
import { mapState } from 'vuex'

export default {
  name: 'payment',
  components: {
    CustomerInfo,
    PaymentOptions,
    CheckOut,
    OrderSend
  },

  computed: {
    ...mapState([
      'paymentMethod'

    ]),
    payNow () {
      return this.paymentMethod === 'A'
    },
    payLater () {
      return this.paymentMethod === 'B'
    }
  }

}
</script>

<style scoped lang="less">

</style>

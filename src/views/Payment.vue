<template>
  <div class="wrapper">
    <CustomerInfo />
    <div class="address-check">
      <input type="checkbox" name="adress" v-model="checked">
        <label for="adress">Ändra Uppgifter</label>
        <i> &#9432; </i>
    </div>

    <form @submit.prevent="submitForm">
      <div class="change-adress" v-if="checked">
        <p>Fyll i din nya leveransadress och person uppgifter</p>

          <label for="lname">Nämn/Co</label>
          <input type="text" name="name" v-model="coName" placeholder="Ditt nämn på address..">

          <label for="lname">Postadress</label>
          <input type="text" name="postadress" v-model="address" placeholder="Ditt adress..">

          <label for="post-number">Postnummer/Ort</label>
            <div class="city-post">
              <input type="text" name="post-number" v-model="postNo" placeholder="Postnummer..">
              <input type="text" name="city" v-model="city" placeholder="Ort..">
            </div>

          <label for="lname">Land</label>
          <input type="text" name="country" v-model="country" placeholder="Ditt Land..">

          <label for="lname">Telefon</label>
          <input type="text" name="telephone" v-model="telephone" placeholder="Ditt nya telefon..">

      </div>

      <PaymentOptions />

      <CheckOut v-if="paymentOption === 'payNow'" />
      <OrderSend v-if="paymentOption === '10'" />
      <div class="shop-button">
        <input
          type="submit"
          name="submitForm"
          value="Genomför Köp"
          :disabled="isDisabled"
          :class="{ isActive: isDisabled }"
        >
      </div>

    </form>

  </div>
</template>

<script>
import CustomerInfo from '@/components/CustomerInfo.vue'
import PaymentOptions from '@/components/PaymentOptions.vue'
import CheckOut from '@/components/CheckOut.vue'
import OrderSend from '@/components/OrderSend.vue'
import { mapState, mapGetters } from 'vuex'
import { apiMakePayment } from '@/api/index.js'

export default {
  name: 'payment',
  components: {
    CustomerInfo,
    PaymentOptions,
    CheckOut,
    OrderSend

  },

  data () {
    return {
      checked: false
    }
  },

  computed: {
    ...mapState([
      'paymentMethod',
      'paymentOption',
      'customerInfo'

    ]),
    ...mapGetters([
      'getCustomerInfo'

    ]),
    isDisabled () {
      return this.paymentOption === null && this.paymentMethod === null
    }

  },

  methods: {
    async submitForm () {
      let apiData = {
        arbetsorderNumber: this.getCustomerInfo.arbetsOrder,
        customerNumber: this.getCustomerInfo.customerNumber,
        coAddress: this.coName,
        postAddress: this.address,
        postNumber: this.postNo,
        city: this.city,
        country: this.country,
        telephone: this.telephone,
        paymentMethod: this.paymentMethod

      }
      let result = await apiMakePayment(apiData)
      if (result.status) {
        alert(result.status)
      }
    }
  }

}
</script>

<style scoped lang="less">
.wrapper {

  @media (min-width: 1281px) { width: 80vw }
  @media (min-width: 1025px) and (max-width: 1280px) { width: 90vw }
  @media (min-width: 768px) and (max-width: 1024px) { width: 100vw }
}

.address-check {
  border: 2px solid #e7e7e7;
  margin-top: 2vh;
  height: 28px;
  background: #fff;
  padding: 20px;
  display: flex;
  align-items: center;

    label {
      padding-left: 4vw;
    }
    i {
      margin-left: auto;
    }

    @media (min-width: 1281px) { width: 30vw; }
    @media (min-width: 1025px) and (max-width: 1280px) { width: 50vw; }
    @media (min-width: 768px) and (max-width: 1024px) { width: 60vw;  }

}

.change-adress {
  border-radius: 5px;
  background-color: #fff;
  padding: 30px;
  margin-top: 4vh;

    p {
      margin-bottom: 2vh;
    }
    input[type=text] {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
  }
  /* input[type=submit] {
    background-color: rgb(97, 88, 180);
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
    &:hover {
      opacity: 0.7;
    }
  } */
  .city-post {
    display: flex;
    justify-content: space-between;
    justify-items: center;

      input[type=text] {
        width: 45%;
      }
  }

}
.shop-button {
  background: #fff;
  padding-bottom: 4vh;
  text-align: center;
  input {
    border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: rgb(97, 88, 180);

    cursor: pointer;
    width: 80%;
    font-size: 18px;
    border-radius: 4px;
    &:hover {
      opacity: 0.7;
    }

      @media (min-width: 1025px) { width: 50vw; }
  }
  .isActive {
    opacity: 0.27;
  }
  }

</style>

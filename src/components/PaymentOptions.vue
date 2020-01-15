<template>
  <div class="wrapper">
    <div class="heading">
      <img src="@/assets/payment-icon.png">
      <span>Välja betaltsätt</span>
    </div>

    <div class="payment-radio">
      <div class="pay-now">
        <input type="radio" name="pay-option" value="A" v-model="selected">
          <label>Betala nu</label>
      </div>
      <div class="pay-later">
        <input type="radio" name="pay-option" value="B" v-model="selected">
          <label>Betala senare</label>
      </div>
    </div>

    <div class="other-options" v-show="paymentMethod === 'A'">
      <div class="resurs-card">
        <div>
           <input type="radio" name="payment-options">
            <label>Resurskort</label>
        </div>
        <img src="@/assets/card.svg">
      </div>
      <div class="bills-radio">
        <div class="bills">
          <div>
            <input type="radio" name="payment-options" checked>
              <label>Faktura</label>
          </div>
          <span class="bills-amount">1250 kr</span>

        </div>
        <p>
          Fakturan skickas till angiven e-postadress. Läs vilkoren för faktura <a href="#"> här </a>
        </p>
      </div>
      <div class="debit">
        <input type="radio" name="payment-options">
          <label>Debitering</label>
      </div>
      <div class="swish">
        <div>
          <input type="radio" name="payment-options">
            <label>Swish</label>
        </div>
        <img src="@/assets/swish2.png" alt="">
      </div>
    </div>

    <PayLater v-show="paymentMethod === 'B'" />

  </div>
</template>

<script>
import PayLater from '@/components/PayLater.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'paymentOptions',
  components: {
    PayLater
  },

  methods: {
    ...mapActions([
      'addPayment'
    ])
  },

  computed: {
    ...mapState([
      'paymentMethod'
    ]),

    selected: {
      get () {
        return this.addPayment
      },
      set (value) {
        this.addPayment(value)
      }
    }
  }
}
</script>

<style scoped lang="less">
.wrapper {
  background: #fff;
  padding: 5%;
  margin-top: 3vh;

}
.heading  {
  display: flex;
  align-items: center;
  padding-bottom: 4vh;

    img {
      width: 30px;
      height: 30px;
    }
    span {
      padding-left: 7vw;
    }
}
.payment-radio {
  display: flex;
  justify-content: space-between;
  padding: 2vh 0 4vh 0;

    .pay-now {
      border: 1px solid grey;
      box-shadow: 0 0 3px #CC0000;
      height: 30px;
      width: 40vw;
      padding: 5px;
    }
    .pay-later {
      height: 30px;
      width: 40vw;
      border: 2px solid grey;
      box-shadow: 0 0 3px #CC0000;
      padding: 5px;
    }
    label {
      padding-left: 3vw;
    }
}
.other-options {
  padding: 10px;
  border: 2px solid #e7e7e7;
  margin: 1vh 2vw 4vh 0;

    .resurs-card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 2vh;
    }
    label {
      padding-left: 4vw;
    }
    .bills {
      display: flex;
      justify-content: space-between;
    }
    p {
      font-size: 0.8em;
      padding-top: 1vh;
    }

  .debit {
    padding: 3vh 0 3vh 0;
  }

  .swish {
    display: flex;
    justify-content: space-between;
    align-items: center;

      img {
        width: 25px;
        height: 25px;

      }
  }
}
</style>

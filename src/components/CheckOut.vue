<template>
  <div class="checkout-wrapper">
    <div class="checkout-heading">
      <img src="@/assets/checkout.png">
      <span>Slutför</span>
    </div>

    <div class="conditions">
      <input type="checkbox" name="conditions">
        <label for="condition">
          I agree that all information is correct. I agree that all information is correct. I agree that all information is correct.
        </label>
    </div>

    <div class="bills-amount">
      <div class="shipping-cost">
        <span>Fakturavgift: 30 kr</span>
      </div>

      <p>Summa 2050,50 :-</p>
    </div>

    <button class="shop-button">Genomför Köp </button>

  </div>
</template>

<script>
export default {
  name: 'checkOut'

}
</script>

<style scoped lang="less">
.checkout-wrapper {
  background: #fff;
  padding: 3vh 5vw 8vh 5vw;
  margin-top: 3vh;

    .checkout-heading {
      display: flex;
      align-items: center;

        span {
          padding-left: 7vw;
        }
        img {
          width: 30px;
          height: 30px;
        }
    }
  .conditions {
    padding-top: 3vh;
    display: flex;

     label {
       padding-left: 3vw;
       font-size: 0.8em;
     }

  }
  .bills-amount {
    text-align: center;
    padding-top: 3vh;

      .shipping-cost {
        border-bottom: 2px solid #e7e7e7;
        padding-bottom: 10px;
      }
      span {
        background:  #dddddd;
        font-size: 0.8em;
      }
      p {
        padding-top: 1vh;
        font-weight: bold;

      }
    }
  .shop-button {
    border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: rgb(97, 88, 180);
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
    margin-top: 4vh;
    &:hover {
      opacity: 0.7;
    }

  }

}
</style>

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
    <div class="shop-button">
      <button>Genomför Köp </button>
    </div>

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
  padding: 3vh 10vw 6vh 50px;
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
    text-align: center;

      button {
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
        border-radius: 4px;
        &:hover {
          opacity: 0.7;
        }

          @media (min-width: 1025px) { width: 50vw; }
        }

  }

}
</style>

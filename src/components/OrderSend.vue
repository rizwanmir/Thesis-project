<template>
  <div class="checkout-wrapper">
    <div class="checkout-heading">
      <img src="@/assets/checkout.png">
      <span>Slutför</span>
    </div>

    <div class="conditions">
      <span>
        Getting the order on the phone or email. Getting the order on the phone or email.
      </span>
    </div>

    <div class="bills-amount">
      <p>Summa 2050,50 :-</p>
    </div>

    <button class="shop-button">Skicka order </button>

  </div>
</template>

<script>
export default {
  name: 'orderSend'

}
</script>

<style scoped lang="less">
.checkout-wrapper {
  background: #fff;
  margin-top: 3vh;
  padding: 3vh 5vw 8vh 5vw;

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
    padding: 3vh 2vw 2vh 2vw;;

  }
  .bills-amount {
    text-align: center;
    margin-top: 3vh;
    border-bottom: 2px solid #e7e7e7;
    border-top: 2px solid #e7e7e7;
    padding: 1vh 0 1vh 0;

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

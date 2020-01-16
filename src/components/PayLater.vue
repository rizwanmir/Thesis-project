<template>
  <div class="wrapper">
    <p>Komplettera med uppgifter nedan</p>
    <div class="valid-date">
      <p>Giligtidtid:</p>
      <input type="date">
    </div>
    <div class="sending-options">
      <div class="options">
        <input type="radio" name="order">
          <label>Skicka order per SMS</label>
      </div>
      <div class="options">
         <input type="radio" name="order">
          <label>Skicka order per e-post</label>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'payLater'
}
</script>

<style scoped lang="less">
.wrapper {
  padding: 10px;
  border: 2px solid #e7e7e7;

    .valid-date {
      padding-top: 2vh;
      display: flex;
      align-items: center;
      text-align: center;

        input {

          padding-left: 6vw;
          border: 1px solid grey;
          box-shadow: 0 0 3px #CC0000;
          height: 30px;
          width: 45vw;
          margin-left: 2vw;

           @media (min-width: 1025px) { width: 20vw; }
        }
    }
    .sending-options {
      padding-top: 3vh;
    }
    label {
      padding-left: 3vw;
    }
    .options {
      padding: 1vh 0 1vh 0;
    }
}
</style>

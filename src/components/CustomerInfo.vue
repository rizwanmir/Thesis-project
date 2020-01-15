<template>
  <div class="wrapper">
    <div class="customer-heading">
      <img src="@/assets/profil.png" />
      <span>Hämta kundens uppgifter</span>
    </div>
    <span>Personnummer</span>
    <div class="persons-info">

      <input type="text" value="" >
      <button class="change-person">Byt Person</button>

    </div>
    <span>Kund uppgifter</span>
    <div class="customer-info">
      <span>
        Rizwan Mir 86021466545
        Finstastigen 88
        197 35 Stockholm
        +463235555
      </span>

    </div>
    <div class="edit-data">
      <a href="#">Ändra avgifter</a>
    </div>
    <div class="address-check">
      <input type="checkbox" name="adress">
        <label for="adress">Annan leveranaddress</label>
        <i> &#9432; </i>
    </div>

  </div>
</template>

<script>
export default {
  name: 'customerInfo'

}
</script>

<style scoped lang="less">
.wrapper {

  background: #ffffff;
  width: 100vw;
  padding: 5%;

}
.customer-heading  {
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
.persons-info {
  display: flex;
  justify-content: space-between;
  padding: 2vh 0 4vh 0;

    input {
      border: 1px solid grey;
      box-shadow: 0 0 3px #CC0000;
      height: 30px;
      width: 45vw;
      padding: 5px;
    }
    .change-person {
      background-color: white;
      color: black;
      width: 30vw;
      height: 30px;
      border: 2px solid #e7e7e7;
      box-shadow: 0 0 3px #CC0000;
    }
    /* .change-person:hover {
      background:rgb(141, 25, 25);
    } */

}
.customer-info {
  padding: 2vh 20vw 2vh 3vw;
  border: 2px solid #e7e7e7;
  margin: 3vh 0 3vh 0;
}
.edit-data {
  margin: 0 0 3vh 0;
  text-align: right;
  padding-right: 2vw;

    a {
        text-decoration: none;
    }

}
.address-check {
  border: 2px solid #e7e7e7;
  margin-top: 2vh;
  height: 28px;
  padding: 6px;
  display: flex;
  align-items: center;

    label {
      padding-left: 4vw;
    }
    i {
      margin-left: auto;
    }

}

</style>

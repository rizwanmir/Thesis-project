<template>
  <div class="wrapper">

    <div class="customer-heading">
      <img src="@/assets/profil.png" />
      <span>Hämta kundens uppgifter</span>
    </div>

    <span>Personnummer</span>
    <div class="persons-info">
      <input type="text" value="" >
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
      <input type="checkbox" name="adress" v-model="checked">
        <label for="adress">Annan leveranaddress</label>
        <i> &#9432; </i>
    </div>

    <div class="change-adress" v-if="checked">
      <p>Fyll i din nya leveransadress</p>
      <form>
        <label for="name">Nämn</label>
        <input type="text" name="name" placeholder="Ditt nämn..">

        <label for="lname">Postadress</label>
        <input type="text" name="postadress" placeholder="Ditt adress..">

        <label for="lname">Postadress 2</label>
        <input type="text" name="postadress2" placeholder="Ditt adress..">

        <label for="post-number">Postnummer/Ort</label>
          <div class="city-post">
            <input type="text" name="post-number" placeholder="Postnummer..">
            <input type="text" name="city" placeholder="Ort..">
          </div>

        <!-- <input type="submit" value="Submit"> -->
      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: 'customerInfo',
  data () {
    return {
      checked: false
    }
  }

}
</script>

<style scoped lang="less">
.wrapper {

  background: #ffffff;
  width: 100vw;
  padding: 3vh 10vw 3vh 50px;

}

.customer-heading  {
  display: flex;
  align-items: center;
  padding-bottom: 3vh;

    img {
      width: 25px;
      height: 25px;
    }
    span {
      padding-left: 7vw;
    }

}

.persons-info {
  display: flex;
  padding: 2vh 0 2vh 0;

    input {
      border: 1px solid grey;
      box-shadow: 0 0 3px #CC0000;
      height: 30px;
      width: 40vw;
      padding: 5px;

        @media (min-width: 1281px) { width: 20vw; height: 40px; }
        @media (min-width: 1025px) and (max-width: 1280px) { width: 25vw; height: 35px; }
        @media (min-width: 768px) and (max-width: 1024px) { width: 30vw; }
    }
}

.customer-info {
  padding: 2vh 20vw 2vh 3vw;
  border: 2px solid #e7e7e7;
  margin: 2vh 0 3vh 0;
  width: 50vw;

    @media (min-width: 1281px) { width: 30vw; padding-right: 15vw }
    @media (min-width: 1025px) and (max-width: 1280px) { width: 35vw; padding-right: 15vw  }
    @media (min-width: 768px) and (max-width: 1024px) { width: 40vw; }

}

.edit-data {
  margin: 0 0 3vh 0;
  text-align: right;
  padding-right: 2vw;

    a {
        text-decoration: none;
    }

    @media (min-width: 1281px) { width: 30vw; }
    @media (min-width: 1025px) and (max-width: 1280px) { width: 50vw }
    @media (min-width: 768px) and (max-width: 1024px) { width: 60vw }

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

    @media (min-width: 1281px) { width: 30vw; }
    @media (min-width: 1025px) and (max-width: 1280px) { width: 50vw; }
    @media (min-width: 768px) and (max-width: 1024px) { width: 60vw;  }

}

.change-adress {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
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

</style>

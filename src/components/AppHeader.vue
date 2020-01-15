<template>
  <header class="header-wrapper">
    <h3 @click="homePage">
      HOME
    </h3>
    <h3 @click="toContact">
      Kontakt
    </h3>
  </header>
</template>

<script>
export default {
  name: 'appHeader',
  components: {

  },
  methods: {
    homePage () {
      this.$router.push({ name: 'Payment' })
    },
    toContact () {
      this.$router.push({ name: 'Contact' })
    }
  }
}
</script>

<style scoped lang="less">
.header-wrapper {
  background-color: grey;
  height: 8vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  color: blue;
  cursor: pointer;
}
</style>

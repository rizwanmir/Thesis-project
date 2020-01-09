<template>
  <header class="header-wrapper">
    <h2 @click="homePage">
      HOME
    </h2>
    <h2 @click="toContact">
      Kontakt
    </h2>
  </header>
</template>

<script>
export default {
  name: 'appHeader',
  components: {
    
  },
  methods: {
      homePage() {
        this.$router.push({name:"Payment"})
      },
       toContact() {
        this.$router.push({name:"Contact"})
      },
  }
}
</script>

<style scoped lang="less">
.header-wrapper {
  background-color: grey;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
}
</style>
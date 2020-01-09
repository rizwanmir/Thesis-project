<template>
  <main>
    <AppHeader />
    <router-view></router-view>
  </main>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: "App",
  components: {
    AppHeader
  }
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}
#app {
  font-family: sans-serif;
}
main {
  padding: 0 0 0 0;
  display: flex;
  flex-direction: column;
}

</style>
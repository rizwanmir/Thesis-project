<template>
  <div class="footer-wrapper">
    <span>Safe shopping by:</span>
    <img src="@/assets/resursbank_logo.png" />
    <span class="footer-info">
      &#174; 2019 Resurs Bank AB (pub) Org nr 54654837 Box 222 00, SE-250 24 Helsingborg
      info@resursbank.se
    </span>
  </div>
</template>

<script>
export default {
  name: 'appFooter'

}
</script>

<style scoped lang="less">
.footer-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;

    img {
      width: 100px;
      height: 80px;
    }
    .footer-info {
      text-align: center;
      padding: 0 8vw 4vh 8vw;
      font-size: 0.8em;
    }
}

</style>

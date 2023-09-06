<template>
  <div class="container-page">
    <h3>page</h3>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
  .container-page {
    width: 86%;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 1024px) {
      width: 70%;
    }
    @media screen and (max-width: 768px) {
      margin-top: 50px;
    }
  }
</style>

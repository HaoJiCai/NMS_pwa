<template>
  <div class="frontEnd">
    <div class="pwa_header">
      <navbarFrontEnd/>
    </div>
    <div class="pwa_content">
      <router-view/>
    </div>
    <div class="pwa_footer">
      <footerFrontEnd/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// eslint-disable-next-line
import navbarFrontEnd from '@/components/Navbar_FrontEnd.vue';
// eslint-disable-next-line
import footerFrontEnd from '@/components/Footer_FrontEnd.vue';

export default {
  data() {
    return {
      fixApi: 'https://140.123.173.4',
      api: '',
    };
  },
  components: {
    navbarFrontEnd,
    footerFrontEnd,
  },
};
</script>

<style lang="scss">
  .frontEnd {
    .pwa_footer {
      margin-top: 60px;
    }
  }
</style>

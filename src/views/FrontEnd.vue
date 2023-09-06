<template>
  <navbarFrontEnd/>
  <router-view/>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// eslint-disable-next-line
import navbarFrontEnd from '@/components/Navbar_FrontEnd.vue';
import { checkSuccessMsg, checkErrorMsg } from './toastMessage';

export default {
  data() {
    return {
      fixApi: 'https://140.123.173.4',
      api: '',
    };
  },
  methods: {
    checkedLoginStatus() {
      // eslint-disable-next-line
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hasToken\s*\=\s*([^;]*).*$)|^.*$/, '$1'); // 取得名為 hasToken 的 cookie
      this.$http.defaults.headers.common.Authorization = token; // 把 Token 加入到 Headers Authorization 裡
      console.log(token);
      const api = `${this.fixApi}/nutritionist/loginCheck`;
      // 串接 /user/check API
      this.$http.get(api, { withCredentials: true }).then((status) => {
        // console.log(status);
        if (status.data.success) {
          checkSuccessMsg();
        }
      }).catch(() => {
        checkErrorMsg();
      });
    },
  },
  components: {
    navbarFrontEnd,
  },
  mounted() {
    // this.checkedLoginStatus();
  },
};
</script>

<style lang="scss">
</style>

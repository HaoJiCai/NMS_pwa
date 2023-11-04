<template>
  <div class="home-page">
    <div class="page-block">
      <h2>
        您好～ <span>{{ username }}</span> 營養師
      </h2>
      <p>歡迎使用 NMS營養資訊系統</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { checkSuccessMsg, checkErrorMsg } from '../toastMessage';

export default {
  data() {
    return {
      fixApi: 'https://140.123.173.4',
    };
  },
  methods: {
    // 檢查登入驗證
    checkedLoginStatus() {
      // eslint-disable-next-line
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hasToken\s*\=\s*([^;]*).*$)|^.*$/, '$1'); // 取得名為 hasToken 的 cookie
      this.$http.defaults.headers.common.Authorization = token; // 把 Token 加入到 Headers Authorization 裡
      // console.log(token);
      const api = `${this.fixApi}/nutritionist/loginCheck`;
      // 串接 /user/check API
      this.$http.get(api).then((status) => {
        // console.log(status);
        if (status.data.success) {
          checkSuccessMsg();
        }
      }).catch(() => {
        checkErrorMsg();
      });
    },
  },
  computed: {
    ...mapGetters(['getUserID', 'getUsername']), // 映射 Vuex getter
    username() {
      // 使用映射的 getter 從 Vuex 的 state 中獲取使用者姓名
      return this.getUsername;
    },
  },
  mounted() {
    this.checkedLoginStatus();
  },
};
</script>

<style lang="scss">
  .home-page {
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .page-block {
      h2 {
        font-size: 48px;
        font-weight: 600;
        color: rgb(88, 85, 85);
        padding: 12px 0;
        margin-bottom: 36px;
        @media screen and (max-width: 1024px) {
          font-size: 42px;
          padding: 12px 4px;
        }
        @media screen and (max-width: 768px) {
          font-size: 30px;
          padding: 12px 10px;
        }
        span {
          font-size: 56px;
          font-weight: bold;
          color: rgb(41, 87, 118);
          @media screen and (max-width: 1024px) {
            font-size: 48px;
          }
          @media screen and (max-width: 768px) {
            font-size: 36px;
          }
        }
      }
      p {
        font-size: 60px;
        font-weight: 500;
        color: rgb(104, 79, 79);
        padding: 12px 0;
        @media screen and (max-width: 1024px) {
          font-size: 44px;
          padding: 12px 4px;
        }
        @media screen and (max-width: 768px) {
          font-size: 28px;
          padding: 12px 10px;
        }
      }
    }
  }
</style>

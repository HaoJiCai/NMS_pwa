<template>
  <div class="wrapper-login">
    <div class="container-login">
      <div class="loginBlock">
        <h1>營養師登入</h1>
        <form class="loginInputBlock">
          <label for="accountInput">
            <input type="text" id="accountInput" v-model="nutritionist.account"
            placeholder="Account" requried>
          </label>
          <label for="passwordInput">
            <input type="password" id="passwordInput" v-model="nutritionist.password"
            placeholder="Password" requried autocomplete="current-password">
          </label>
          <button type="button" id="signinBtn" class="signinBtn" @click="login">登入</button>
          <button type="button" id="registerBtn" class="registerBtn" @click="goToRegister">註冊</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { loginMsg, loginErrorMsg } from './toastMessage';

export default {
  data() {
    return {
      nutritionist: {
        account: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      const baseURL = 'https://140.123.173.4';
      const loginAPI = '/nutritionist/login';
      this.$http.post(`${baseURL}${loginAPI}`, this.nutritionist)
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            const { token, expired, id, name } = res.data;
            // 呼叫 mutation 來更新 state
            this.$store.commit('SET_USERID', id);
            // this.$store.commit('SET_USERNAME', name);
            this.$store.dispatch('login', name);
            document.cookie = `hasToken=${token}; expires=${new Date(expired)};`;
            return loginMsg(); // 回傳 loginMsg() 的 Promise
          }
          return loginErrorMsg(); // 設定預設回傳值
        })
        .then(() => {
          this.$router.push('/frontEnd/homepage'); // 在 loginMsg() 完成後執行
        })
        .catch((err) => {
          console.log(err);
          loginErrorMsg();
        });
    },
    goToRegister() {
      this.$router.push('/userRegister');
    },
  },
};
</script>

<style lang="scss">
  // 設定電腦版（預設）
  .wrapper-login {
    background: url("../assets/login_background.jpg") no-repeat center/100%;
    background-size: cover;
    height: 100vh; /* 將高度設置為視窗高度 */
    .container-login {
      display: flex; /* 設置為 Flex 容器 */
      justify-content: center; /* 將內容水平置中 */
      align-items: center; /* 將內容垂直置中 */
      padding: 250px 0 0 0;
      .loginBlock {
        background-color: #ced4da;
        margin: 0 10%;
        padding: 25px 100px;
        border-radius: 1rem;
        h1 {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: rgba(49, 49, 49, 0.651);
          text-align: center;
        }
        .loginInputBlock {
          display: flex;
          flex-direction: column;
          width: 400px;
          input {
            width: 100%;
            line-height: 3;
            font-size: 1rem;
            margin-bottom: 20px;
            border: 10px solid #ced4da;
            border-radius: 1rem;
          }
          .signinBtn {
            width: 100%;
            font-size: 1rem;
            font-weight: 400;
            line-height: 2.5;
            color: whitesmoke;
            background-color: rgb(50, 50, 156);
            border: 1px solid #ced4da;
            border-radius: 0.25rem;
            cursor: pointer;
          }
          .signinBtn:hover {
            font-size: 1.25rem;
            background-color: rgb(36, 39, 122);
            transition-duration: 0.25s;
          }
          .registerBtn {
            width: 100%;
            font-size: 1rem;
            font-weight: 400;
            line-height: 2.5;
            color: whitesmoke;
            background-color: rgb(156, 61, 50);
            border: 1px solid #ced4da;
            border-radius: 0.25rem;
            cursor: pointer;
          }
          .registerBtn:hover {
            font-size: 1.25rem;
            background-color: rgb(122, 72, 36);
            transition-duration: 0.25s;
          }
        }
      }
    }
  }
  // 設定平板版
  @media screen and (max-width: 1024px) {
    .wrapper-login {
      background: url("../assets/login_background.jpg") no-repeat center/100%;
      background-size: cover;
      height: 100vh; /* 將高度設置為視窗高度 */
      .container-login {
        display: flex; /* 設置為 Flex 容器 */
        justify-content: center; /* 將內容水平置中 */
        align-items: center; /* 將內容垂直置中 */
        padding: 180px 0 0 0;
        .loginBlock {
          background-color: #ced4da;
          margin: 0 10%;
          padding: 25px 80px;
          border-radius: 1rem;
          h1 {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 24px;
            font-weight: 700;
            color: rgba(49, 49, 49, 0.651);
            text-align: center;
          }
          .loginInputBlock {
            display: flex;
            flex-direction: column;
            width: 250px;
            input {
              width: 100%;
              line-height: 3;
              font-size: 1rem;
              margin-bottom: 20px;
              border: 10px solid #ced4da;
              border-radius: 1rem;
            }
            .signinBtn {
              width: 100%;
              font-size: 1rem;
              font-weight: 400;
              line-height: 2.5;
              color: whitesmoke;
              background-color: rgb(50, 50, 156);
              border: 1px solid #ced4da;
              border-radius: 0.25rem;
              cursor: pointer;
            }
            .signinBtn:hover {
              font-size: 1.25rem;
              background-color: rgb(36, 39, 122);
              transition-duration: 0.25s;
            }
            .registerBtn {
              width: 100%;
              font-size: 1rem;
              font-weight: 400;
              line-height: 2.5;
              color: whitesmoke;
              background-color: rgb(156, 61, 50);
              border: 1px solid #ced4da;
              border-radius: 0.25rem;
              cursor: pointer;
            }
            .registerBtn:hover {
              font-size: 1.25rem;
              background-color: rgb(122, 72, 36);
              transition-duration: 0.25s;
            }
          }
        }
      }
    }
  }
  // 設定手機板
  @media screen and (max-width: 768px) {
    .wrapper-login {
      background: url("../assets/login_background.jpg") no-repeat center/100%;
      background-size: cover;
      height: 100vh; /* 將高度設置為視窗高度 */
      .container-login {
        display: flex; /* 設置為 Flex 容器 */
        justify-content: center; /* 將內容水平置中 */
        align-items: center; /* 將內容垂直置中 */
        padding: 150px 0 0 0;
        .loginBlock {
          background-color: #ced4da;
          margin: 0 10%;
          padding: 25px 40px;
          border-radius: 1rem;
          h1 {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
            font-weight: 700;
            color: rgba(49, 49, 49, 0.651);
            text-align: center;
          }
          .loginInputBlock {
            display: flex;
            flex-direction: column;
            width: 230px;
            input {
              width: 100%;
              line-height: 2.5;
              font-size: 1rem;
              margin-bottom: 20px;
              border: 10px solid #ced4da;
              border-radius: 1rem;
            }
            .signinBtn {
              width: 100%;
              font-size: 1rem;
              font-weight: 400;
              line-height: 2.5;
              color: whitesmoke;
              background-color: rgb(50, 50, 156);
              border: 1px solid #ced4da;
              border-radius: 0.75rem;
              cursor: pointer;
            }
            .signinBtn:hover {
              font-size: 1.1rem;
              background-color: rgb(36, 39, 122);
              transition-duration: 0.25s;
            }
            .registerBtn {
              width: 100%;
              font-size: 1rem;
              font-weight: 400;
              line-height: 2.5;
              color: whitesmoke;
              background-color: rgb(156, 61, 50);
              border: 1px solid #ced4da;
              border-radius: 0.75rem;
              cursor: pointer;
            }
            .registerBtn:hover {
              font-size: 1.1rem;
              background-color: rgb(122, 72, 36);
              transition-duration: 0.25s;
            }
          }
        }
      }
    }
  }
</style>

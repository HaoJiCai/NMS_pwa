<!--eslint-disable -->
<template>
  <div class="wrapper-register">
    <div class="container-register">
      <div class="title">
        <h2>營養師註冊</h2>
      </div>
      <div class="content">
        <v-form class="registerInputBlock" v-slot="{ errors }">
          <div class="nameInputBlock">
            <label for="nameInput">姓名：</label>
            <v-field type="text" id="nameInput" name="姓名" v-model="registerInfo.name" placeholder="請輸入姓名" :rules="{ required: true, max: 10 }" :class="{'is-invalid': errors['姓名']}"></v-field>
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>
          <div class="accountInputBlock">
            <label for="accountInput">設定帳號：</label>
            <v-field type="text" id="accountInput" name="帳號" v-model="registerInfo.account" placeholder="請輸入帳號" :rules="{ required: true, max: 16, regex: /^[^\u4e00-\u9fa5]+$/ }" :class="{'is-invalid': errors['帳號']}"></v-field>
            <error-message name="帳號" class="invalid-feedback"></error-message>
          </div>
          <div class="passwordInputBlock">
            <label for="passwordInput">設定密碼：</label>
            <v-field type="password" id="passwordInput" name="密碼" v-model="registerInfo.password" placeholder="請輸入密碼" :rules="{ required: true, max: 16, regex: /^[^\u4e00-\u9fa5]+$/ }" :class="{'is-invalid': errors['密碼']}"></v-field>
            <error-message name="密碼" class="invalid-feedback"></error-message>
          </div>
          <div class="emailInputBlock">
            <label for="emailInput">電子信箱：</label>
            <v-field type="email" id="emailInput" name="電子信箱" v-model="registerInfo.email" placeholder="請輸入email" :rules="{ required: true, email: true, max: 30 }" :class="{'is-invalid': errors['電子信箱']}"></v-field>
            <error-message name="電子信箱" class="invalid-feedback"></error-message>
          </div>
          <div class="phoneInputBlock">
            <label for="phoneInput">手機號碼：</label>
            <v-field type="tel" id="phoneInput" name="手機號碼" v-model="registerInfo.phone" placeholder="請輸入手機號碼" :rules="{ required: true, min: 10, max: 10, regex: /^09\d{8}$/ }" :class="{'is-invalid': errors['手機號碼']}"></v-field>
            <error-message name="手機號碼" class="invalid-feedback"></error-message>
          </div>
          <div class="btnBlock">
            <button type="button" class="register" @click="register">註冊</button>
            <button type="button" class="backStep" @click="backStep">返回</button>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import { Field as VField, Form as VForm, ErrorMessage, defineRule, configure } from 'vee-validate';
// 引入 VeeValidate 的驗證規則
import AllRules from '@vee-validate/rules';
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n';
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import { customizeSuccessMsg, customizeErrorMsg } from './toastMessage';

// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

export default {
  data() {
    return {
      registerInfo: {
        name: '',
        account: '',
        password: '',
        email: '',
        phone: '',
      },
    };
  },
  methods: {
    register() {
      const baseURL = 'https://140.123.173.4';
      const registerAPI = '/nutritionist/register';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // email正規表達式
      const phoneRegex = /^09\d{8}$/; // 手機正規表達式
      const chineseRegex = /[\u4e00-\u9fa5]/; // 中文正規表達式
      if (this.registerInfo.name === '' || this.registerInfo.account === '' || this.registerInfo.password === '' || this.registerInfo.email === '' || this.registerInfo.phone === '') {
        customizeErrorMsg('請填寫完整資訊');
      } else if (!emailRegex.test(this.registerInfo.email)) {
        customizeErrorMsg('請確認電子信箱格式');
      } else if (!phoneRegex.test(this.registerInfo.phone)) {
        customizeErrorMsg('請確認手機號碼格式');
      } else if (this.registerInfo.name.length > 10) {
        customizeErrorMsg('姓名不能超過10個字元');
      } else if (this.registerInfo.account > 16 || this.registerInfo.password > 16) {
        customizeErrorMsg('帳號與密碼不能超過16個字元');
      } else if (chineseRegex.test(this.registerInfo.account) || chineseRegex.test(this.registerInfo.password)) {
        customizeErrorMsg('帳號與密碼不能包含中文');
      } else {
        this.$http.post(`${baseURL}${registerAPI}`, this.registerInfo)
          .then((res) => {
            console.log(res.data);
            if (res.data && res.data.success) {
              return customizeSuccessMsg(res.data.msg); // 回傳 loginMsg() 的 Promise
            }
            return customizeErrorMsg(res.data ? res.data.msg : '註冊失敗，請稍後再試'); // 設定預設回傳值
          })
          .then(() => {
            this.$router.push('/userLogin');
          })
          .catch((err) => {
            console.log(err);
            customizeErrorMsg('此帳號已被註冊！！');
          });
        this.clearInput();
      }
    },
    backStep() {
      this.$router.push('/userLogin'); // 返回登入畫面
    },
    clearInput() {
      this.registerInfo = {
        name: '',
        account: '',
        password: '',
        email: '',
        phone: '',
      };
    },
  },
  components: {
    VField,
    VForm,
    ErrorMessage,
  },
};
</script>

<style lang="scss">
  // 設定電腦版（預設）
  .wrapper-register {
    margin: 0 auto;
    background: url("../assets/login_background.jpg") no-repeat center/100%;
    background-size: cover;
    height: 100vh; /* 將高度設置為視窗高度 */
    display: flex;
    justify-content: center;
    align-items: center;
    .container-register {
      max-width: 600px;
      padding: 30px 150px;
      background-color: #D99956;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      .title {
        text-align: center;
        margin-bottom: 20px;
        h2 {
          font-weight: bold;
          font-size: 30px;
          color: #333;
        }
      }
      .content {
        .registerInputBlock {
          .nameInputBlock,
          .accountInputBlock,
          .passwordInputBlock,
          .emailInputBlock,
          .phoneInputBlock {
            margin-bottom: 10px;
            label {
              display: block;
              font-size: 22px;
              color: #555;
              margin-bottom: 5px;
            }
            input {
              width: 100%;
              padding: 6px;
              border: 1px solid #ccc;
              border-radius: 4px;
              background-color: whitesmoke;
              font-size: 20px;
              &.is-invalid {
                border-color: rgba(213, 0, 0, 0.493);
              }
            }
            .invalid-feedback {
              color: rgba(213, 0, 0, 0.493);
              font-weight: 600;
              font-size: 18px;
              margin-top: 5px;
            }
          }
          .btnBlock {
            .register {
              background-color: #4caf50;
              color: #fff;
              padding: 10px 15px;
              border: none;
              border-radius: 4px;
              margin-top: 20px;
              cursor: pointer;
              font-size: 16px;
              &:hover {
                background-color: #45a049;
              }
            }
            .backStep {
              background-color: #388ad6;
              color: #fff;
              padding: 10px 15px;
              border: none;
              border-radius: 4px;
              margin-top: 20px;
              cursor: pointer;
              font-size: 16px;
              margin-left: 30px;
              &:hover {
                background-color: rgb(42, 121, 178);
              }
            }
          }
        }
      }
    }
  }

  // 設定平板版
  @media screen and (max-width: 1024px) {
    .wrapper-register {
      .container-register {
        padding: 30px 120px;
        .title {
          text-align: center;
          margin-bottom: 20px;
          h2 {
            font-size: 28px;
          }
        }
        .content {
          .registerInputBlock {
            .nameInputBlock,
            .accountInputBlock,
            .passwordInputBlock,
            .emailInputBlock,
            .phoneInputBlock {
              margin-bottom: 10px;
              label {
                display: block;
                font-size: 20px;
                color: #555;
                margin-bottom: 5px;
              }
              input {
                width: 100%;
                padding: 10px;
                font-size: 18px;
              }
              .invalid-feedback {
                font-size: 18px;
                margin-top: 5px;
              }
            }
            .btnBlock {
              .register {
                padding: 10px 15px;
                font-size: 16px;
              }
              .backStep {
                margin-left: 20px;
              }
            }
          }
        }
      }
    }
  }

  // 設定手機板
  @media screen and (max-width: 768px) {
    .wrapper-register {
      .container-register {
        padding: 20px 50px;
        .title {
          text-align: center;
          margin-bottom: 20px;
          h2 {
            font-size: 26px;
          }
        }
        .content {
          .registerInputBlock {
            .nameInputBlock,
            .accountInputBlock,
            .passwordInputBlock,
            .emailInputBlock,
            .phoneInputBlock {
              margin-bottom: 5px;
              label {
                display: block;
                font-size: 16px;
                color: #555;
                margin-bottom: 5px;
              }
              input {
                width: 100%;
                padding: 4px;
                font-size: 14px;
              }
              .invalid-feedback {
                font-size: 14px;
                margin-top: 5px;
              }
            }
            .btnBlock {
              .register {
                padding: 10px 15px;
                font-size: 16px;
              }
              .backStep {
                margin-left: 10px;
              }
            }
          }
        }
      }
    }
  }
</style>

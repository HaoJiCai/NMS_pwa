<!--eslint-disable -->
<template>
  <div class="wrapper-info">
    <div class="container-info">
      <div class="title">
        <h2>個人資料</h2>
      </div>
      <div class="content">
        <v-form class="infoInputBlock" v-slot="{ errors }">
          <div class="nameInputBlock">
            <label for="nameInput">姓名：</label>
            <v-field type="text" id="nameInput" name="姓名" v-model="userInfo.name" placeholder="請輸入姓名" :rules="{ required: true, max: 10 }" :class="{'is-invalid': errors['姓名']}"></v-field>
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>
          <div class="accountInputBlock">
            <label for="accountInput">帳號：</label>
            <v-field type="text" id="accountInput" name="帳號" v-model="userInfo.account" placeholder="請輸入帳號" :rules="{ required: true, max: 16, regex: /^[^\u4e00-\u9fa5]+$/ }" :class="{'is-invalid': errors['帳號']}"></v-field>
            <error-message name="帳號" class="invalid-feedback"></error-message>
          </div>
          <div class="passwordInputBlock">
            <label for="passwordInput">密碼：</label>
            <v-field type="password" id="passwordInput" name="密碼" v-model="userInfo.password" placeholder="請輸入密碼" :rules="{ required: true, max: 16, regex: /^[^\u4e00-\u9fa5]+$/ }" :class="{'is-invalid': errors['密碼']}"></v-field>
            <error-message name="密碼" class="invalid-feedback"></error-message>
          </div>
          <div class="emailInputBlock">
            <label for="emailInput">電子信箱：</label>
            <v-field type="email" id="emailInput" name="電子信箱" v-model="userInfo.email" placeholder="請輸入email" :rules="{ required: true, email: true, max: 30 }" :class="{'is-invalid': errors['電子信箱']}"></v-field>
            <error-message name="電子信箱" class="invalid-feedback"></error-message>
          </div>
          <div class="phoneInputBlock">
            <label for="phoneInput">手機號碼：</label>
            <v-field type="tel" id="phoneInput" name="手機號碼" v-model="userInfo.phone" placeholder="請輸入手機號碼" :rules="{ required: true, min: 10, max: 10, regex: /^09\d{8}$/ }" :class="{'is-invalid': errors['手機號碼']}"></v-field>
            <error-message name="手機號碼" class="invalid-feedback"></error-message>
          </div>
          <div class="btnBlock">
            <button type="button" class="updateInfo" @click="updateInfo">更新</button>
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
      userInfo: {},
    };
  },
  methods: {
    getUserInfo() {
      const baseURL = 'https://140.123.173.4';
      const infoAPI = '/nutritionist/info';
      const savedUserid = localStorage.getItem('userid');
      this.$http.get(`${baseURL}${infoAPI}/${savedUserid}`).then((res) => {
        // console.log(res.data);
        this.userInfo = { ...res.data[0] };
      });
    },
    updateInfo() {
      const baseURL = 'https://140.123.173.4';
      const infoAPI = '/nutritionist/info';
      const savedUserid = localStorage.getItem('userid');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // email正規表達式
      const phoneRegex = /^09\d{8}$/; // 手機正規表達式
      const chineseRegex = /[\u4e00-\u9fa5]/; // 中文正規表達式
      if (this.userInfo.name === '' || this.userInfo.account === '' || this.userInfo.password === '' || this.userInfo.email === '' || this.userInfo.phone === '') {
        customizeErrorMsg('請填寫完整資訊');
      } else if (!emailRegex.test(this.userInfo.email)) {
        customizeErrorMsg('請確認電子信箱格式');
      } else if (!phoneRegex.test(this.userInfo.phone)) {
        customizeErrorMsg('請確認手機號碼格式');
      } else if (this.userInfo.name.length > 10) {
        customizeErrorMsg('姓名不能超過10個字元');
      } else if (this.userInfo.account.length > 16 || this.userInfo.password.length > 16) {
        console.log(this.userInfo.account, this.userInfo.password);
        customizeErrorMsg('帳號與密碼不能超過16個字元');
      } else if (chineseRegex.test(this.userInfo.account) || chineseRegex.test(this.userInfo.password)) {
        customizeErrorMsg('帳號與密碼不能包含中文');
      } else {
        this.$http.put(`${baseURL}${infoAPI}/${savedUserid}`, this.userInfo)
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              customizeSuccessMsg(res.data.msg);
              this.$router.push('/userLogin');
            } else {
              customizeErrorMsg(res.data.msg);
            }
          })
          .catch((err) => {
            console.log(err);
            customizeErrorMsg('更新資料失敗');
          });
      }
    },
    backStep() {
      this.$router.push('/frontEnd/homePage'); // 返回登入畫面
    },
  },
  components: {
    VField,
    VForm,
    ErrorMessage,
  },
  created() {
    this.getUserInfo();
  },
};
</script>

<style lang="scss">
  // 設定電腦版（預設）
  .wrapper-info {
    margin: 0 auto;
    background-color: #333;
    height: 100vh; /* 將高度設置為視窗高度 */
    display: flex;
    justify-content: center;
    align-items: center;
    .container-info {
      max-width: 600px;
      padding: 30px 150px;
      background-color: #dbd9d7;
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
        .infoInputBlock {
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
            .updateInfo {
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
    .wrapper-info {
      .container-info {
        padding: 30px 120px;
        .title {
          text-align: center;
          margin-bottom: 20px;
          h2 {
            font-size: 28px;
          }
        }
        .content {
          .infoInputBlock {
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
              .updateInfo {
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
    .wrapper-info {
      .container-info {
        padding: 20px 50px;
        .title {
          text-align: center;
          margin-bottom: 20px;
          h2 {
            font-size: 26px;
          }
        }
        .content {
          .infoInputBlock {
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
              .updateInfo {
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

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
    <div class="container-fluid bar" :class="{barMargin: isbarMargin}">
      <div class="collapse navbar-collapse pageBar" id="navbarNav">
        <div class="logo">
          <h1><a href="/NMS_pwa/#/frontEnd/homePage">NMS</a></h1>
          <h2 class="logo_name">營養管理系統</h2>
        </div>
        <div class="logoType">
          <a href="#" class="logoTypeIpad" @click.prevent="toggleBar_mobile" aria-label="打開選單">
            <img class="buttonBar" src="../assets/outline_reorder_white_36dp.png" alt="outline_reorder_white_36dp.png">
          </a>
          <a href="#" class="logoTypePhone" @click.prevent="toggleBar_mobile" aria-label="打開選單">
            <img class="buttonBar" src="../assets/outline_reorder_white_24dp.png" alt="outline_reorder_white_24dp.png">
          </a>
        </div>
        <div class="logo_mobile">
          <h1><a href="/NMS_pwa/#/frontEnd/homePage">NMS</a></h1>
          <h2 class="logo_name">營養管理系統</h2>
        </div>
        <div class="funcBtn">
          <ul class="navbar-nav functionBar" :class="{active: isActive}">
            <li class="nav-item">
              <router-link to="/frontEnd/patientRecordSearchPage" class="nav-link" @click.prevent="toggleBar_close">病患紀錄篩查
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/frontEnd/nutritionalCarePage" class="nav-link" @click.prevent="toggleBar_close">營養照護專區
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/frontEnd/healthEducationPage/1" class="nav-link" @click.prevent="toggleBar_close">衛教專欄
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/frontEnd/inpatientMealPage" class="nav-link" @click.prevent="toggleBar_close">食譜管理
              </router-link>
            </li>
          </ul>
          <ul class="navbar-nav loginBar">
            <div class="dropdown">
              <button type="button" v-if="isLoggedIn" id="userDropdown" class="btn dropdown-toggle text-light" data-bs-toggle="dropdown" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                  <!-- 覆蓋 eslint 設置，僅能用在下一行 -->
                  <!-- eslint-disable-next-line max-len -->
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                </svg>
                <span>{{ isLoggedIn ? username : '登入' }}</span>
              </button>
              <router-link v-else to="/" class="nav-link text-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                  <!-- 覆蓋 eslint 設置，僅能用在下一行 -->
                  <!-- eslint-disable-next-line max-len -->
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                </svg>
                <span>{{ isLoggedIn ? username : '登入' }}</span>
              </router-link>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="userDropdown" style="min-width: 30px;">
                <li><button @click="logout" class="dropdown-item logoutBtn" type="button">登出</button></li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      isActive: false,
      isbarMargin: false,
    };
  },
  methods: {
    logout() {
      // 清除使用者資訊並導向登入頁面
      // this.$store.commit('CLEAR_USERNAME');
      this.$store.dispatch('logout'); // 使用 actions 呼叫 mutation
      this.$router.push('/userLogin');
    },
    toggleBar_mobile() {
      this.isActive = !this.isActive;
      this.isbarMargin = !this.isbarMargin;
    },
    toggleBar_close() {
      this.isActive = false;
      this.isbarMargin = false;
    },
  },
  computed: {
    ...mapGetters(['getUserID', 'getUsername']), // 映射 Vuex getter
    isLoggedIn() {
      // 從 Vuex 的 state 中獲取登入狀態
      return !!this.$store.state.username;
    },
    username() {
      // 使用映射的 getter 從 Vuex 的 state 中獲取使用者姓名
      return this.getUsername;
    },
  },
  mounted() {
    this.isbarMargin = false;
  },
};
</script>

<style lang="scss">
  nav {
    margin-bottom: 30px;
    .bar {
      margin: 0 20px;
      @media screen and (max-width: 1024px) {
        margin: 0 10px;
        padding: 0;
      }
      .pageBar {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo {
          display: flex;
          justify-content: center;
          align-items: center;
          h1 {
            a {
              width: 90px;
              height: 90px;
              background-image: url(../assets/logo_sm.png);
              background-repeat: no-repeat;
              display: block;
              text-indent: 101%;
              overflow: hidden;
              white-space: nowrap;
            }
          }
          .logo_name {
            color: whitesmoke;
            font-weight: bold;
            margin-left: 8px;
          }
          @media screen and (max-width: 1024px) {
            display: none;
          }
        }
        .logoType {
          .logoTypeIpad {
            display: none;
            @media screen and (max-width: 1024px) {
              display: block;
              cursor: pointer;
            }
            @media screen and (max-width: 768px) {
              display: none;
            }
          }
          .logoTypePhone {
            display: none;
            @media screen and (max-width: 768px) {
              display: block;
              cursor: pointer;
            }
          }
        }
        .logo_mobile {
          display: none;
          @media screen and (max-width: 1024px) {
            display: flex;
            justify-content: center;
            align-items: center;
            h1 {
              a {
                width: 90px;
                height: 90px;
                background-image: url(../assets/logo_sm.png);
                background-repeat: no-repeat;
                display: block;
                text-indent: 101%;
                overflow: hidden;
                white-space: nowrap;
              }
            }
            .logo_name {
              color: whitesmoke;
              font-weight: bold;
              margin-left: 8px;
            }
          }
          @media screen and (max-width: 768px) {
            h1 {
              margin: 0;
              a {
                width: 50px;
                height: 50px;
                background-image: url(../assets/logo_xs.png);
                background-repeat: no-repeat;
                display: block;
                text-indent: 101%;
                overflow: hidden;
                white-space: nowrap;
              }
            }
            .logo_name {
              display: none;
            }
          }
        }
        .funcBtn {
          display: flex;
          align-items: center;
          .functionBar {
            display: flex;
            align-items: center;
            max-height: 0;
            .nav-item{
              margin-left: 30px;
              .nav-link {
                color: white;
                font-size: 20px;
                &.router-link-exact-active {
                  font-size: 22px;
                  font-weight: bold;
                  color: #75e6b3;
                }
              }
            }
            @media screen and (max-width: 1024px) {
              position: absolute;
              left: 0;
              top: 100%;
              width: 100%;
              transition: all 0.25s;
              overflow: hidden;
              background: rgb(32, 32, 32);
              flex-direction: column;
              .nav-item {
                width: 100%;
                margin: 0;
                padding: 10px 0;
                text-align: center;
                &:hover{
                  background-color: rgb(184, 181, 181);
                }
                .nav-link {
                  font-size: 18px;
                }
              }
            }
            @media screen and (max-width: 768px) {
              .nav-link {
                font-size: 14px;
              }
            }
          }
          .active{
            @media screen and (max-width: 1024px) {
              max-height: 100vh;
              z-index: 10;
            }
          }
          .loginBar {
            font-size: 18px;
            margin-left: 220px;
            .logoutBtn {
              font-size: 16px;
            }
            @media screen and (max-width: 1024px) {
              margin-left: 0;
            }
            @media screen and (max-width: 768px) {
              span {
                display: none;
              }
              .logoutBtn {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
    .barMargin {
      margin: 0;
    }
  }
</style>

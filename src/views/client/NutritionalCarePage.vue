<template>
  <div class="container">
    <div class="nutrition-sidebar">
      <div class="menu-title">
        <h3>選單</h3>
      </div>
      <ul class="menu-bar">
        <li class="menu-item">
          <router-link to="/frontEnd/nutritionalCarePage/assessmentDiagnosis" class="menu-link txt-sm">營養評估診斷
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="/frontEnd/nutritionalCarePage/interventionAssistance" class="menu-link txt-sm">營養介入輔助
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="/frontEnd/nutritionalCarePage/surveillanceEvaluation" class="menu-link txt-sm">衛教監測評值
          </router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedMenu: null,
    };
  },
  methods: {
    selectMenu(menu) {
      this.selectedMenu = menu;

      // 在這裡可以執行相應的操作，例如顯示相應的內容
    },
  },
};
</script>
<style lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  .nutrition-sidebar {
    width: 12%;
    @media screen and (max-width: 1024px) {
      width: 25%;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    .menu-title {
      background-color: #c2cedb; /* 背景色 */
      h3 {
        font-size: 20px;
        text-align: center;
        font-weight: bold;
        color: whitesmoke;
        background: #4f6a85;
        margin: 0;
        padding: 16px 0;
      }
    }
    .menu-bar {
      text-align: center;
      font-weight: bold;
      list-style: none;
      margin: 0;
      padding: 0;
      .menu-item {
        border: 0.25px solid rgb(233, 233, 233);
        .menu-link {
          display: block;
          text-decoration: none;
          font-size: 16px;
          color: #49717a; /* 文字顏色 */
          padding: 16px 0;
          &:hover {
            color: whitesmoke; /* 鼠標懸停時的文字顏色 */
            background-color: #2c3e50; /* 鼠標懸停時的背景色 */
            transition: all 0.25s ease;
          }
        }
      }
    }
  }
}
</style>

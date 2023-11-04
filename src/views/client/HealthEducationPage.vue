<template>
  <div class="container">
    <div class="educationType">
      <div class="type-title">
        <h3>資料館</h3>
      </div>
      <ul class="type-bar">
        <li class="type-item" v-for="type in types" :key="type.eduType_id">
          <router-link :to="`/frontEnd/healthEducationPage/${type.eduType_id}`" class="type-link">{{ type.typeName }}</router-link>
        </li>
      </ul>
    </div>
    <div v-if="!showDetail" class="educationContent">
      <ul class="content-bar">
        <li class="content-item" v-for="item in items" :key="item.edu_id">
          <router-link @click.prevent="clickShowDetail" :to="`/frontEnd/healthEducationPage/${item.eduType_id}/${item.edu_id}`" class="content-link">
            <i class="bi bi-plus-circle-fill"></i><span>{{ item.title }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div v-else class="educationDetail">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fixApi: 'https://140.123.173.4',
      types: [],
      items: [],
      localEduType: this.eduType,
      showDetail: false,
    };
  },
  methods: {
    getHealthEducationType() {
      const api = `${this.fixApi}/healthEducation/type`;
      this.$http.get(api).then((res) => {
        this.types = res.data;
        this.getHealthEducationData();
      }).catch((err) => {
        console.log(err);
      });
    },
    getHealthEducationData() {
      const api = `${this.fixApi}/healthEducation/${this.localEduType}`;
      this.$http.get(api).then((res) => {
        this.items = res.data;
      }).catch((err) => {
        console.log(err);
      });
    },
    clickShowDetail() {
      this.showDetail = true;
    },
  },
  props: {
    eduType: String, // 從路由的 :eduType 參數傳遞過來
  },
  created() {
    this.getHealthEducationType();
    this.showDetail = false;
  },
  beforeRouteUpdate(to, from) {
    const targetRoutePath = to.path; // 使用 to
    const currentRoutePath = from.path; // 使用 from
    console.log(targetRoutePath);
    console.log(currentRoutePath);
    // 路由参数改變時，重新執行以下程式碼
    this.localEduType = to.params.eduType; // 更新 eduType 属性
    this.showDetail = false;
    this.getHealthEducationData();
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .educationType {
    width: 20%;
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
    .type-bar {
      text-align: center;
      font-weight: bold;
      list-style: none;
      margin: 0;
      padding: 0;
      @media screen and (max-width: 1024px) {
        margin-bottom: 20px;
      }
      @media screen and (max-width: 768px) {
        margin-bottom: 10px;
      }
      .type-item {
        border: 0.25px solid rgb(233, 233, 233);
        .type-link {
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
          &.router-link-exact-active {
            font-size: 18px;
            color: whitesmoke;
            background-color: #2c3e50;
          }
        }
      }
    }
  }
  .educationContent {
    width: 70%;
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
    .content-bar {
      text-align: center;
      font-weight: 500;
      list-style: none;
      margin: 0;
      padding: 0;
      .content-item {
        text-align: left;
        border: 1px solid rgb(233, 233, 233);
        .content-link {
          display: block;
          text-decoration: none;
          font-size: 20px;
          color: #49717a; /* 文字顏色 */
          padding: 16px 0;
          &:hover {
            color: whitesmoke; /* 鼠標懸停時的文字顏色 */
            background-color: #2c3e50; /* 鼠標懸停時的背景色 */
            transition: all 0.25s ease;
          }
          i {
            font-size: 20px;
            margin-right: 0px;
            padding: 0 16px;
            @media screen and (max-width: 1024px) {
              font-size: 18px;
            }
            @media screen and (max-width: 768px) {
              font-size: 16px;
            }
          }
          @media screen and (max-width: 1024px) {
            font-size: 18px;
          }
          @media screen and (max-width: 768px) {
            font-size: 16px;
          }
        }
      }
    }
  }
  .educationDetail {
    width: 70%;
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
  }
}
</style>

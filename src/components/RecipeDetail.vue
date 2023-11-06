<template>
  <div class="container-page-recipe">
    <ul class="recipeDetail-list">
      <li class="recipeDetail-type" v-for="(recipe, index) in recipelist.list" :key="recipe.recipe_id">
        <div class="recipeDetail-title">
          <h3>{{ recipe.name }}</h3>
        </div>
        <div class="recipeDetail-content">
          <p>碳水化合物： <span>{{ recipelist.nutrition_detail[index].totalCarbohydrates }}</span>（Cal）</p>
          <p>蛋白質： <span>{{ recipelist.nutrition_detail[index].totalProtein }}</span>（Cal）</p>
          <p>脂肪： <span>{{ recipelist.nutrition_detail[index].totalFat }}</span>（Cal）</p>
          <p>總卡路里： <span>{{ recipelist.nutrition_detail[index].totalCalories }}</span>（Cal）</p>
        </div>
        <div class="recipeDetail-btn">
          <button type="button" class="btn btn-outline-primary" @click="openModal('editModal', recipe)"><i class="bi bi-pencil-fill"></i></button>
          <button type="button" class="btn btn-outline-danger" @click="openModal('delModal', recipe)"><i class="bi bi-trash3-fill"></i></button>
        </div>
      </li>
    </ul>
    <div class="addBtn">
      <button type="button" @click="openModal('')"><i class="bi bi-plus-lg"></i></button>
    </div>
  </div>
  <!----- 畫面 Loading ----->
  <loading :active="isLoading"></loading>
  <RecipeModal :category-data="localCategoryID" :info-detail="recipe_InfoDetails" @add-recipe="closeModal('')"></RecipeModal>
  <RecipeEditModal :info-detail="recipe_InfoDetails" @edit-recipe="closeModal('editModal')"></RecipeEditModal>
  <RecipeDelModal :info-detail="recipe_InfoDetails" @delete-recipe="closeModal('delModal')"></RecipeDelModal>
</template>

<script>
/* eslint object-curly-newline: "off" */
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Loading from 'vue-loading-overlay';
import { mapGetters } from 'vuex';
import RecipeModal from './RecipeModal.vue';
import RecipeEditModal from './RecipeEditModal.vue';
import RecipeDelModal from './RecipeDelModal.vue';

export default {
  data() {
    return {
      fixApi: 'https://140.123.173.4',
      localCategoryID: this.category_id,
      recipelist: {
        list: [],
        nutrition_detail: [],
      },
      recipe_InfoDetails: {}, // 詳細資料
      recipeModal: {},
      recipeEditModal: {},
      recipeDelModal: {},
    };
  },
  methods: {
    getRecipeCategory() {
      const api = `${this.fixApi}/recipe/${this.localCategoryID}`;
      this.$http.get(api).then((res) => {
        this.recipelist.list = res.data;
        this.countCalories(this.recipelist.list);
      });
    },
    countCalories(listData) {
      const recipelist = Array.from(listData);
      if (recipelist.length !== 0) {
        recipelist.forEach((recipe, index) => {
          const totalObj = {
            no: '',
            totalCalories: 0,
            totalProtein: 0,
            totalCarbohydrates: 0,
            totalFat: 0,
          };
          const nutrition = JSON.parse(recipe.nutrition);
          nutrition.forEach((item) => {
            totalObj.no = index;
            totalObj.totalCalories += Math.round(item.calories);
            totalObj.totalProtein += Math.round(item.protein);
            totalObj.totalCarbohydrates += Math.round(item.carbohydrates);
            totalObj.totalFat += Math.round(item.fat);
          });
          this.recipelist.nutrition_detail[index] = totalObj;
        });
      }
    },
    openModal(modal, data) {
      if (modal === '') {
        this.recipe_InfoDetails = {};
        this.recipeModal.show();
      } else if (modal === 'editModal') {
        this.recipe_InfoDetails = JSON.parse(JSON.stringify(data)); // 深層拷貝
        this.recipeEditModal.show();
      } else if (modal === 'delModal') {
        this.recipe_InfoDetails = JSON.parse(JSON.stringify(data)); // 深層拷貝
        this.recipeDelModal.show();
      } else {
        console.log('openModal Error！！');
      }
    },
    // 操作 Modal 畫面（關閉）
    closeModal(modal) {
      if (modal === '') {
        this.recipeModal.hide();
      } else if (modal === 'editModal') {
        this.recipeEditModal.hide();
      } else if (modal === 'delModal') {
        this.recipeDelModal.hide();
      } else {
        console.log('closeModal Error！！');
      }
      this.getRecipeCategory();
    },
  },
  computed: {
    ...mapGetters(['isLoading']), // 导入isLoading状态
  },
  props: {
    category_id: String, // 從路由的 :category_id 參數傳遞過來
  },
  components: {
    RecipeModal,
    RecipeEditModal,
    RecipeDelModal,
    Loading,
  },
  created() {
    this.getRecipeCategory();
  },
  mounted() {
    this.recipeModal = new bootstrap.Modal(document.getElementById('recipeModal'));
    this.recipeEditModal = new bootstrap.Modal(document.getElementById('recipeEditModal'));
    this.recipeDelModal = new bootstrap.Modal(document.getElementById('recipeDelModal'));
  },
  beforeRouteUpdate(to, from) {
    const targetRoutePath = to.path; // 使用 to
    const currentRoutePath = from.path; // 使用 from
    console.log(targetRoutePath);
    console.log(currentRoutePath);
    // 路由参数改變時，重新執行以下程式碼
    this.localCategoryID = to.params.category_id;
    this.getRecipeCategory();
  },
};
</script>
<style lang="scss">
.container-page-recipe {
  width: 100%;
  .recipeDetail-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
    padding: 0;
    @media screen and (max-width: 1024px) {
      justify-content: space-evenly;
    }
    @media screen and (max-width: 768px) {
      justify-content: center;
    }
    .recipeDetail-type {
      width: 22.5%;
      border: 1px solid black;
      border-radius: 10px;
      background-color: rgb(243, 214, 177);
      padding: 20px;
      margin-right: 32px;
      margin-bottom: 20px;
      @media screen and (max-width: 1024px) {
        width: 45%;
        margin-right: 0;
        margin-bottom: 18px;
      }
      @media screen and (max-width: 768px) {
        width: 100%;
        margin-bottom: 15px;
      }
      .recipeDetail-title {
        margin-bottom: 16px;
        h3 {
          font-weight: bold;
          font-size: 32px;
          @media screen and (max-width: 1024px) {
            font-size: 30px;
          }
          @media screen and (max-width: 768px) {
            font-size: 28px;
          }
        }
      }
      .recipeDetail-content {
        margin-bottom: 16px;
        text-align: left;
        p {
          font-weight: 500;
          font-size: 18px;
          @media screen and (max-width: 1024px) {
            font-size: 16px;
          }
          @media screen and (max-width: 768px) {
            font-size: 18px;
          }
        }
        span {
          font-weight: 700;
          font-size: 20px;
          color: rgb(149, 49, 49);
          @media screen and (max-width: 1024px) {
            font-size: 18px;
          }
          @media screen and (max-width: 768px) {
            font-size: 20px;
          }
        }
      }
      .recipeDetail-btn {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        button {
          margin-left: 6px;
        }
      }
    }
  }
  .addBtn {
    position: fixed;
    bottom: 10%;
    right: 5%;
    button {
      width: 100px;
      height: 100px;
      font-weight: bold;
      font-size: 36px;
      background-color: #44aeae;
      color: whitesmoke;
      border: 1px solid #44aeae;
      border-radius: 50%;
      box-shadow: 3px 5px 5px 1px rgba(0,0,0,0.5);
      @media screen and (max-width: 1024px) {
        width: 80px;
        height: 80px;
        font-size: 28px;
      }
      @media screen and (max-width: 768px) {
        width: 60px;
        height: 60px;
        font-size: 22px;
      }
    }
  }
}
</style>

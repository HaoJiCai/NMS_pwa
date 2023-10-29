<!--eslint-disable -->
<template>
  <div id="recipeModal" ref="recipeModal" class="modal fade" tabindex="-1" aria-labelledby="recipeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl container-modal">
      <v-form class="modal-content border-0" v-slot="{ errors }">
        <div class="modal-header bg-dark text-white">
          <h5 id="recipeModalLabel" class="modal-title">
            <span>新增{{infoDetail.category_name}}食譜</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeClearData"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm body-content">
              <div class="content-header">
                <div class="form-group col content-recipeName">
                  <v-field id="recipe_name" name="食譜名稱" type="text" v-model="infoDetail.name" placeholder="請輸入食譜名稱" :rules="{ required: true, max: 10 }" :class="{'is-invalid': errors['食譜名稱']}"></v-field>
                  <error-message name="食譜名稱" class="invalid-feedback"></error-message>
                </div>
                <div class="nutrition-label">
                  <label for="nutrition">食材選擇：</label>
                  <select id="nutrition" v-model="selectedNutritionID">
                    <option value="" selected disabled>請選擇食材</option>
                    <option :value="nutrition.nutrition_id" v-for="nutrition in nutritions" :key="nutrition.nutrition_id">{{ nutrition.name }}</option>
                  </select>
                  <button class="btn btn-outline-danger" @click="select_Nutrition">加入</button>
                </div>
              </div>
              <div class="form-group col content-nutritions">
                <div class="nutrition-selected">
                  <label for="">已加入：</label>
                  <ul class="nutrition-list">
                    <li class="nutrition-item" v-for="selectedNutrition in selectedNutritions" :key="selectedNutrition.nutrition_id">
                      <span>{{ selectedNutrition.name }}</span>
                    </li>
                  </ul>
                  <button type="button" class="btn btn-danger" @click="remove_Nutrition"><i class="bi bi-trash3-fill"></i> 清除</button>
                </div>
              </div>
              <div class="form-textarea mb-4">
                <div class="form-label">
                  <label for="step">步驟做法：</label>
                </div>
                <textarea id="step" type="text" name="textarea" class="form-control" rows="10" cols="20" v-model="infoDetail.step" required></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="confirmPost">發佈</button>
        </div>
      </v-form>
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
import { customizeSuccessMsg, customizeErrorMsg } from '../views/toastMessage';

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
      fixApi: 'https://140.123.173.4',
      nutritions: [],
      selectedNutritions: [],
      selectedNutritionID: '',
    };
  },
  methods: {
    getNutrition() {
      const api = `${this.fixApi}/nutrition`;
      this.$http.get(api).then((res) => {
        this.nutritions = res.data;
      }).catch((err) => {
        console.log(err);
      });
    },
    select_Nutrition() {
      if (this.selectedNutritionID !== '') {
        // 找到所選擇的物件
        const selectedValue = this.nutritions.find((nutrition) => nutrition.nutrition_id === this.selectedNutritionID);

        // 將所選的物件加入到陣列
        if (selectedValue) {
          this.selectedNutritions.push(selectedValue);
        }

        // 重置所選物件
        this.selectedNutritionID = '';
      }
    },
    remove_Nutrition() {
      if (this.selectedNutritions.length !== 0) {
        // 將所選的所有物件移除陣列
        this.selectedNutritions = [];
        // 重置所選物件
        this.selectedNutritionID = '';
      }
    },
    confirmPost() {
      this.$store.dispatch('startLoading');
      const api = `${this.fixApi}/recipe/${this.categoryData}`;
      this.$http.post(api, this.infoDetailCopy).then((res) => {
        this.$emit('addRecipe');
        console.log(res.data);
        setTimeout(() => {
          this.$store.dispatch('stopLoading');
        }, 350);
        customizeSuccessMsg(res.data.msg);
      }).catch((err) => {
        console.log(err);
        customizeErrorMsg(err.response.data.msg);
      });
    },
    closeClearData() {
      this.selectedNutritionID = '';
      this.selectedNutritions = [];
    },
  },
  computed: {
    // 建立 infoDetail 的副本，包含 selectedNutritions
    infoDetailCopy() {
      const infoDetailCopy = { ...this.infoDetail }; // 使用物件解構複製

      // 添加 selectedNutritions
      infoDetailCopy.nutrition = this.selectedNutritions;

      return infoDetailCopy;
    },
  },
  props: {
    infoDetail: {
      default: {},
    },
    categoryData: {
      default: '',
    },
  },
  emits: ['addRecipe'], // 聲明繼承的自定義事件
  components: {
    VField,
    VForm,
    ErrorMessage,
  },
  created() {
    this.getNutrition();
    this.selectedNutritionID = '';
    this.selectedNutritions = [];
  },
};
</script>

<style lang="scss">
.container-modal {
 .modal-body {
  background-color: rgb(245, 245, 245);
  .body-content {
    input, select, textarea {
      border: 0 none;
      border-radius: 5px;
      background-color: burlywood;
      padding: 6px 4px;
    }
    .content-header {
      width: 100%;
      display: flex;
      align-items: flex-start;
      margin-bottom: 20px;
      @media screen and (max-width: 1024px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;
      }
      @media screen and (max-width: 768px) {
        margin-bottom: 10px;
      }
      .content-recipeName {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 1024px) {
          width: 100%;
          margin-bottom: 8px;
        }
      }
      .nutrition-label {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
          margin-left: 8px;
        }
        @media screen and (max-width: 1024px) {
          width: 100%;
          margin-bottom: 8px;
          label {
            display: none;
          }
        }
      }
    }
    .content-nutritions {
      margin-bottom: 20px;
      @media screen and (max-width: 1024px) {
        margin-bottom: 16px;
      }
      @media screen and (max-width: 768px) {
        margin-bottom: 10px;
      }
      .nutrition-selected {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: burlywood;
        border-radius: 5px;
        padding: 6px 4px;
        ul {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
          li {
            background-color: rgb(52, 42, 165);
            color: whitesmoke;
            border: 0.5px solid rgb(52, 80, 205);
            border-radius: 10px;
            padding: 4px 6px;
            margin-left: 8px;
          }
        }
        @media screen and (max-width: 1024px) {
          width: 100%;
          margin-bottom: 8px;
          label {
            display: none;
          }
        }
      }
    }
  }
 }
}
</style>

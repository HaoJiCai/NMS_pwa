<!--eslint-disable -->
<template>
  <div id="recipeEditModal" ref="recipeEditModal" class="modal fade" tabindex="-1" aria-labelledby="recipeEditModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <v-form class="modal-content border-0" v-slot="{ errors }">
        <div class="modal-header bg-dark text-white">
          <h5 id="recipeEditModalLabel" class="modal-title">
            <span>編輯{{infoDetail.category_name}}食譜</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeClearData"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm">
              <div class="form-group col">
                <label for="recipe_name">食譜名稱：</label>
                <v-field id="recipe_name" name="食譜名稱" type="text" v-model="infoDetail.name" :rules="{ required: true, max: 10 }" :class="{'is-invalid': errors['食譜名稱']}"></v-field>
                <error-message name="食譜名稱" class="invalid-feedback"></error-message>
              </div>
              <div class="form-group col">
                <div class="nutrition-label">
                  <label for="nutrition">請選擇食材：</label>
                  <select id="nutrition" v-model="selectedNutritionID">
                    <option value="" selected disabled>請選擇食材</option>
                    <option :value="nutrition.nutrition_id" v-for="nutrition in nutritions" :key="nutrition.nutrition_id">{{ nutrition.name }}</option>
                  </select>
                  <button class="btn btn-outline-danger" @click="select_Nutrition">加入</button>
                </div>
                <div class="nutrition-selected">
                  <label for="">已加入：</label>
                  <ul class="nutrition-list">
                    <li class="nutrition-item" v-for="selectedNutrition in selectedNutritions" :key="selectedNutrition.nutrition_id">
                      <p>{{ selectedNutrition.name }}</p>
                    </li>
                  </ul>
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
          <button type="button" class="btn btn-primary" @click="confirmEdit">更新</button>
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
    getSelectedNutritions() {
      if (this.infoDetail && this.infoDetail.nutrition) {
        try {
          this.selectedNutritions = JSON.parse(this.infoDetail.nutrition);
        } catch (error) {
          console.error('Error parsing infoDetail.nutrition:', error);
          this.selectedNutritions = []; // 在发生错误时设置为空数组或采取其他恰当的措施
        }
      }
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
    confirmEdit() {
      this.$store.dispatch('startLoading');
      const api = `${this.fixApi}/recipe/${this.infoDetail.category_id}/${this.infoDetail.recipe_id}`;
      this.$http.put(api, this.infoDetailCopy).then((res) => {
        this.$emit('editRecipe');
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
  watch: {
    infoDetail: {
      handler() {
        // 当 infoDetail 变化时，调用 getSelectedNutritions 方法
        this.getSelectedNutritions();
      },
      deep: true, // 监视对象内部属性的变化
      immediate: true, // 在组件创建时也立即调用
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
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['editRecipe'], // 聲明繼承的自定義事件
  components: {
    VField,
    VForm,
    ErrorMessage,
  },
  created() {
    this.getNutrition();
    this.selectedNutritionID = '';
  },
};
</script>

<style lang="scss">
  .btn-close {
    background-color: white;
  }
  .form-label {
    display: flex;
    justify-items: top;
  }
</style>

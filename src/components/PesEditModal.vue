<!--eslint-disable -->
<template>
  <div id="pesEditModal" ref="pesEditModal" class="modal fade" tabindex="-1" aria-labelledby="pesEditModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <v-form class="modal-content border-0" v-slot="{ errors }">
        <div class="modal-header bg-dark text-white">
          <h5 id="pesEditModalLabel" class="modal-title">
            <span>編輯紀錄</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm">
              <div class="row mb-3">
                <div class="form-group col-md-4">
                  <label for="diagnosis_no">病歷號碼：</label>
                  <v-field id="diagnosis_no" name="病歷號碼" type="number" v-model="infoDetail.diagnosis_no" :rules="{ required: true, min: 1, min_value: 1 }" :class="{'is-invalid': errors['病歷號碼']}" disabled></v-field>
                  <error-message name="病歷號碼" class="invalid-feedback"></error-message>
                </div>
                <div class="form-group col-md-4">
                  <label for="patient_id">病患編號：</label>
                  <v-field id="patient_id" name="病患編號" type="number" v-model="infoDetail.patient_id" :rules="{ required: true, min: 1, max: 7, min_value: 1 }" :class="{'is-invalid': errors['病患編號']}" disabled></v-field>
                  <error-message name="病患編號" class="invalid-feedback"></error-message>
                </div>
                <div class="form-group col-md-4">
                  <label for="patient_name">姓名：</label>
                  <v-field id="patient_name" name="姓名" type="text" v-model="infoDetail.name" :rules="{ required: true, max: 10 }" :class="{'is-invalid': errors['姓名']}" disabled></v-field>
                  <error-message name="姓名" class="invalid-feedback"></error-message>
                </div>
              </div>
              <div class="form-textarea mb-4">
                <div class="form-label">
                  <label for="problem">Problem：</label>
                </div>
                <textarea id="problem" type="text" name="textarea" class="form-control" rows="10" cols="30" v-model="infoDetail.problem" required></textarea>
              </div>
              <div class="form-textarea mb-4">
                <div class="form-label">
                  <label for="etiology">Etiology：</label>
                </div>
                <textarea id="etiology" type="text" name="textarea" class="form-control" rows="10" cols="30" v-model="infoDetail.etiology" required></textarea>
              </div>
              <div class="form-textarea mb-4">
                <div class="form-label">
                  <label for="symptoms">Symptoms：</label>
                </div>
                <textarea id="etiology" type="text" name="textarea" class="form-control" rows="10" cols="30" v-model="infoDetail.symptoms" required></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" @click="confirmEdit">確認</button>
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
import { mapGetters } from 'vuex';
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
    };
  },
  methods: {
    confirmEdit() {
      this.$store.dispatch('startLoading');
      const api = `${this.fixApi}/nutritionist/nutritionalAssessmentDiagnosis/${this.nutritionist_id}/${this.infoDetail.diagnosis_no}`;
      this.$http.put(api, this.infoDetail).then((res) => {
        this.$emit('editPes');
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
  },
  computed: {
    ...mapGetters(['getUserID']), // 映射 Vuex getter
    nutritionist_id() {
      // 使用映射的 getter 從 Vuex 的 state 中獲取使用者姓名
      return this.getUserID;
    },
  },
  props: {
    infoDetail: {
      default: {},
    },
  },
  emits: ['editPes'], // 聲明繼承的自定義事件
  components: {
    VField,
    VForm,
    ErrorMessage,
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

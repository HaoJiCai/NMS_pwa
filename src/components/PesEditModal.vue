<!--eslint-disable -->
<template>
  <div id="pesEditModal" ref="pesEditModal" class="modal fade" tabindex="-1" aria-labelledby="pesEditModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
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
                    <input id="diagnosis_no" type="number" v-model="infoDetail.diagnosis_no" disabled>
                </div>
                <div class="form-group col-md-4">
                  <label for="patient_id">病患編號：</label>
                  <input id="patient_id" type="number" v-model="infoDetail.patient_id" disabled>
                </div>
                <div class="form-group col-md-4">
                  <label for="patient_name">姓名：</label>
                  <input id="patient_name" type="text" v-model="infoDetail.name" disabled>
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { customizeSuccessMsg, customizeErrorMsg } from '../views/toastMessage';

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

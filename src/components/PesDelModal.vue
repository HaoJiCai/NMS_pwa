<template>
  <div id="pesDelModal" ref="pesDelModal" class="modal fade" tabindex="-1" aria-labelledby="pesDelModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="pesDelModalLabel" class="modal-title">
            <span>刪除紀錄</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          是否刪除 <strong class="text-danger">病歷編號：{{infoDetail.diagnosis_no}}</strong> 紀錄(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-danger" @click="confirmDel">確認刪除</button>
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
    confirmDel() {
      this.$store.dispatch('startLoading');
      const api = `${this.fixApi}/nutritionist/nutritionalAssessmentDiagnosis/${this.nutritionist_id}/${this.infoDetail.diagnosis_no}`;
      this.$http.delete(api).then((res) => {
        this.$emit('deletePes');
        console.log(res.data);
        this.$store.dispatch('stopLoading');
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
  emits: ['deletePes'], // 聲明繼承的自定義事件
};
</script>

<style lang="scss">
  .btn-close {
    background-color: white;
  }
</style>

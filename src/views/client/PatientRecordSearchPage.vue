<template>
  <div id="app">
    <label for="search">
      <div class="input-group mb-3">
        <input type="text" id="search" class="form-control" v-model="searchKeyWords" placeholder="輸入關鍵字">
        <button class="btn btn-outline-success searchBtn" @click="searchKeyword"><i class="bi bi-search"></i></button>
      </div>
    </label>
    <div class="table-responsive">
      <table class="table table-striped table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">姓名</th>
            <th scope="col">性別</th>
            <th scope="col">身分證字號</th>
            <th scope="col">電子信箱</th>
            <th scope="col">手機</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody v-for="patient in patients" :key="patient.patient_id">
          <tr>
            <td>{{ patient.name }}</td>
            <td>{{ genderText[patient.gender] }}</td>
            <td>{{ patient.ID_Number}}</td>
            <td>{{ patient.email }}</td>
            <td>{{ patient.phone}}</td>
            <td>
              <button class="btn btn-outline-secondary" @click="showDetails(patient.patient_id)"><i class="bi bi-eye-fill"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!----- 畫面 Loading ----->
    <loading :active="isLoading"></loading>
  </div>
  <PatientInfoDetailsModal :patientinfo-detail="healthConditions"></PatientInfoDetailsModal>
</template>

<script>
/* eslint object-curly-newline: "off" */
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Loading from 'vue-loading-overlay';
import { mapGetters } from 'vuex';
import { searchNoKeyword, searchDataNum } from '../toastMessage';
import PatientInfoDetailsModal from '../../components/PatientInfoDetailsModal.vue';

export default {
  data() {
    return {
      fixApi: 'https://140.123.173.4',
      searchKeyWords: '',
      patients: [],
      patientInfoDetails_modal: {},
      healthConditions: {
        modalTitle: '',
        modalContent: '',
      },
    };
  },
  computed: {
    ...mapGetters(['isLoading']), // 导入isLoading状态
    genderText() {
      return {
        0: '女',
        1: '男',
      };
    },
  },
  methods: {
    searchKeyword() {
      this.$store.dispatch('startLoading');
      const api = `${this.fixApi}/patient`;
      const keyword = this.searchKeyWords.trim();

      this.$http.get(api, { params: { keyword } }).then((res) => {
        console.log(res.data);
        this.patients = res.data[0].result;
        if (keyword === '') {
          searchNoKeyword();
        } else {
          searchDataNum(res.data[0].total);
        }
        // this.filterUserInfo();
        this.searchKeyWords = '';
        this.$store.dispatch('stopLoading');
      }).catch((err) => {
        console.log(err);
      });
    },
    search() {
      this.$store.dispatch('startLoading');
      const api = `${this.fixApi}/patient`;

      this.$http.get(api).then((res) => {
        // console.log(res.data);
        this.patients = res.data[0].result;
        this.searchKeyWords = '';
        this.$store.dispatch('stopLoading');
      }).catch((err) => {
        console.log(err);
      });
    },
    showDetails(patientID) {
      this.$store.dispatch('startLoading');
      const api = `${this.fixApi}/patient/healthConditions/${patientID}`;
      this.$http.get(api).then((res) => {
        this.healthConditions = res.data;
        console.log(res.data);
        // 設定彈跳視窗標題
        this.healthConditions.modalTitle = `${this.healthConditions[0].name} 詳細資料`;
        // 顯示 Modal 彈跳視窗
        this.patientInfoDetails_modal.show();
        this.$store.dispatch('stopLoading');
      }).catch((err) => {
        console.log(err);
        this.healthConditions.modalTitle = '錯誤';
        this.healthConditions.modalContent = '獲取用戶資訊失敗。請稍後再試。';
        this.patientInfoDetails_modal.show();
      });
    },
  },
  components: {
    PatientInfoDetailsModal,
    Loading,
  },
  created() {
    this.search();
  },
  mounted() {
    const modal = new bootstrap.Modal(document.getElementById('patientInfoDetailsModal'));
    this.patientInfoDetails_modal = modal;
  },
};
</script>
<style lang="scss">
</style>

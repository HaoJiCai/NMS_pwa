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
  </div>
  <PatientInfoDetailsModal :patientinfo-detail="healthConditions"></PatientInfoDetailsModal>
</template>

<script>
/* eslint object-curly-newline: "off" */
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { checkSuccessMsg, checkErrorMsg, searchNoKeyword, searchDataNum } from '../toastMessage';
import PatientInfoDetailsModal from '../../components/PatientInfoDetailsModal.vue';

export default {
  data() {
    return {
      fixApi: 'https://140.123.173.4',
      searchKeyWords: '',
      patients: [],
      // filtered_UserInfo: [],
      patientInfoDetails_modal: {},
      healthConditions: {
        modalTitle: '',
        modalContent: '',
      },
    };
  },
  computed: {
    // 回傳 filterUserInfo 方法，所篩選出的資料
    // filteredUserInfo() {
    //   return this.filtered_UserInfo;
    // },
    genderText() {
      return {
        0: '女',
        1: '男',
      };
    },
  },
  methods: {
    // filterUserInfo() {
    //   if (!this.searchKeyWords) {
    //     this.filtered_UserInfo = this.userInfo;
    //   } else {
    //     this.filtered_UserInfo = this.userInfo.filter((user) => Object.values(user).some((val) => String(val).toLowerCase().includes(this.searchKeyWords.toLowerCase())));
    //   }
    // },
    // 檢查登入驗證
    checkedLoginStatus() {
      // eslint-disable-next-line
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hasToken\s*\=\s*([^;]*).*$)|^.*$/, '$1'); // 取得名為 hasToken 的 cookie
      this.$http.defaults.headers.common.Authorization = token; // 把 Token 加入到 Headers Authorization 裡
      // console.log(token);
      const api = `${this.fixApi}/nutritionist/loginCheck`;
      // 串接 /user/check API
      this.$http.get(api).then((status) => {
        // console.log(status);
        if (status.data.success) {
          checkSuccessMsg();
        }
      }).catch(() => {
        checkErrorMsg();
      });
    },
    searchKeyword() {
      const api = `${this.fixApi}/patient/`;
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
      }).catch((err) => {
        console.log(err);
      });
    },
    search() {
      const api = `${this.fixApi}/patient/`;

      this.$http.get(api).then((res) => {
        console.log(res.data);
        this.patients = res.data[0].result;
        this.searchKeyWords = '';
      }).catch((err) => {
        console.log(err);
      });
    },
    showDetails(patientID) {
      const api = `${this.fixApi}/patient/healthConditions/${patientID}`;
      this.$http.get(api).then((res) => {
        this.healthConditions = res.data;

        // 設定彈跳視窗內容
        this.healthConditions.modalTitle = `${this.healthConditions.name} 詳細資料`;
        this.healthConditions.modalContent = `飲食醫囑：${this.healthConditions.doctorOrder}<br>`
          + `活動狀態：${this.healthConditions.activeStatus}<br>`
          + `運動情況：${this.healthConditions.sportsStatus}<br>`
          + `症狀：${this.healthConditions.symptom}<br>`
          + `疾病：${this.healthConditions.disease}<br>`
          + `營養知識：${this.healthConditions.knowledge}<br>`
          + `遵從度：${this.healthConditions.compliance}<br>`
          + `身高：${this.healthConditions.height}<br>`
          + `體重：${this.healthConditions.weight}<br>`
          + `BMI：${this.healthConditions.bmi}<br>`
          + `體重變化：${this.healthConditions.weight_change}<br>`
          + `總攝（灌）食量/天：${this.healthConditions.caloriesEaten} 大卡<br>`
          + `總需求量/天：${this.healthConditions.caloriesDemand} 大卡<br>`;
        console.log(this.healthConditions.modalContent);
        // 顯示 Modal 彈跳視窗
        this.patientInfoDetails_modal.show();
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
  },
  created() {
    this.search();
  },
  mounted() {
    this.checkedLoginStatus();

    const modal = new bootstrap.Modal(document.getElementById('patientInfoDetailsModal'));
    this.patientInfoDetails_modal = modal;
  },
};
</script>
<style lang="scss">
</style>

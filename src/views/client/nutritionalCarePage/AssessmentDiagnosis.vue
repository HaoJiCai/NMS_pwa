<!--eslint-disable -->
<template>
  <div class="container-page row">
    <div class="table-menu">
      <h3 class="tableName">營養評估診斷</h3>
      <div class="btnList">
        <div class="input-group searchList">
          <input type="text" id="search" class="form-control" v-model="searchKeyWords" placeholder="請輸入姓名">
          <button class="btn btn-outline-success searchBtn" @click="getSearch"><i class="bi bi-search"></i></button>
        </div>
        <div class="addModal">
          <button class="btn btn-secondary" @click="openModal('')"><i class="bi bi-pencil-square"></i><span> 建立</span></button>
        </div>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table table-striped table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">病患ID</th>
            <th scope="col">姓名</th>
            <th scope="col">初始建立時間</th>
            <th scope="col">最近更新時間</th>
            <th scope="col">編輯</th>
          </tr>
        </thead>
        <tbody v-for="pes in PES_arr" :key="pes.diagnosis_no">
          <tr>
            <td>{{ pes.patient_id }}</td>
            <td>{{ pes.name }}</td>
            <td>{{ formatDate(pes.create_time) }}</td>
            <td>{{ formatDate(pes.update_time) }}</td>
            <td>
              <div class="btn-group">
                <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal('editModal', pes)"><i class="bi bi-pencil-fill"></i></button>
                <button type="button" class="btn btn-outline-danger btn-sm" @click="openModal('delModal', pes)"><i class="bi bi-trash3-fill"></i></button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!----- 畫面 Loading ----->
    <loading :active="isLoading"></loading>
  </div>
  <!---------- ADD Modal ------------>
  <PesModal :info-detail="PES_InfoDetails" @add-pes="closeModal('')"></PesModal>
  <!---------- EDIT Modal ------------>
  <PesEditModal :info-detail="PES_InfoDetails" @edit-pes="closeModal('editModal')"></PesEditModal>
  <!---------- DELETE Modal ------------>
  <PesDelModal :info-detail="PES_InfoDetails" @delete-pes="closeModal('delModal')"></PesDelModal>
</template>

<script>
/* eslint object-curly-newline: "off" */
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Loading from 'vue-loading-overlay';
import { mapGetters } from 'vuex';
import PesModal from '../../../components/PesModal.vue';
import PesEditModal from '../../../components/PesEditModal.vue';
import PesDelModal from '../../../components/PesDelModal.vue';
import { searchNoKeyword, searchDataNum } from '../../toastMessage';

export default {
  data() {
    return {
      fixApi: 'https://140.123.173.4',
      searchKeyWords: '',
      PES_arr: [], // 所有資料陣列
      PES_InfoDetails: {}, // 詳細資料
      pesModal: {},
      pesEditModal: {},
      pesDelModal: {},
    };
  },
  methods: {
    getSearch() {
      this.$store.dispatch('startLoading');
      const api = `${this.fixApi}/nutritionist/nutritionalAssessmentDiagnosis/${this.nutritionist_id}`;
      const keyword = this.searchKeyWords.trim();
      this.$http.get(api, { params: { keyword } }).then((res) => {
        this.PES_arr = res.data[0].result;
        if (keyword === '') {
          searchNoKeyword();
        } else {
          searchDataNum(res.data[0].total);
        }
        this.searchKeyWords = '';
        this.$store.dispatch('stopLoading');
      }).catch((err) => {
        console.log(err);
      });
    },
    getAssessmentDiagnosis() {
      this.$store.dispatch('startLoading');
      const api = `${this.fixApi}/nutritionist/nutritionalAssessmentDiagnosis/${this.nutritionist_id}`;
      this.$http.get(api).then((res) => {
        this.PES_arr = res.data[0].result;
        this.searchKeyWords = '';
        this.$store.dispatch('stopLoading');
      }).catch((err) => {
        console.log(err);
      });
    },
    savedLocalUserID() {
      const savedUserid = localStorage.getItem('userid');
      if (savedUserid) {
        // 將使用者名稱設置到 Vuex store 中
        this.$store.commit('SET_USERID', savedUserid);
      }
    },
    // 日期時間格式轉換
    formatDate(dateTimeString) {
      // const date = new Date(dateTimeString);
      // const options = {
      //   year: 'numeric',
      //   month: '2-digit',
      //   day: '2-digit',
      //   hour: '2-digit',
      //   minute: '2-digit',
      //   second: '2-digit',
      //   hour12: true, // 啟用 AM/PM
      // };
      // return date.toLocaleString('en-TW', options);
      const date = new Date(dateTimeString);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 将月份转为两位数
      const day = date.getDate().toString().padStart(2, '0'); // 将日期转为两位数
      let hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

      // 如果超過12小時，将小时部分减去12
      if (hours > 12) {
        hours -= 12;
      }
      hours = hours.toString().padStart(2, '0'); // 超過雙位數，前面補0

      return `${year}/${month}/${day}, ${hours}:${minutes}:${seconds} ${ampm}`;
    },
    // 操作 Modal 畫面（開啟）
    openModal(modal, data) {
      if (modal === '') {
        this.PES_InfoDetails = {};
        this.pesModal.show();
      } else if (modal === 'editModal') {
        this.PES_InfoDetails = JSON.parse(JSON.stringify(data)); // 深層拷貝
        this.pesEditModal.show();
      } else if (modal === 'delModal') {
        this.PES_InfoDetails = JSON.parse(JSON.stringify(data)); // 深層拷貝
        this.pesDelModal.show();
      } else {
        console.log('openModal Error！！');
      }
    },
    // 操作 Modal 畫面（關閉）
    closeModal(modal) {
      if (modal === '') {
        this.pesModal.hide();
      } else if (modal === 'editModal') {
        this.pesEditModal.hide();
      } else if (modal === 'delModal') {
        this.pesDelModal.hide();
      } else {
        console.log('closeModal Error！！');
      }
      this.getAssessmentDiagnosis();
    },
  },
  computed: {
    ...mapGetters(['getUserID']), // 映射 Vuex getter
    ...mapGetters(['isLoading']), // 导入isLoading状态
    nutritionist_id() {
      // 使用映射的 getter 從 Vuex 的 state 中獲取使用者姓名
      return this.getUserID;
    },
  },
  components: {
    PesModal,
    PesEditModal,
    PesDelModal,
    Loading,
  },
  created() {
    this.savedLocalUserID();
    this.getAssessmentDiagnosis();
  },
  mounted() {
    this.pesModal = new bootstrap.Modal(document.getElementById('pesModal'));
    this.pesEditModal = new bootstrap.Modal(document.getElementById('pesEditModal'));
    this.pesDelModal = new bootstrap.Modal(document.getElementById('pesDelModal'));
  },
};
</script>

<style lang="scss">
  .container-page {
    width: 86%;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 1024px) {
      width: 70%;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
      margin-top: 50px;
    }
    .table-menu {
      display: flex;
      align-items: center;
      @media screen and (max-width: 1024px) {
        flex-direction: column;
      }
      .tableName {
        width: 30%;
        text-align: start;
        @media screen and (max-width: 1024px) {
          width: 100%;
          text-align: center;
          margin-bottom: 30px;
        }
        @media screen and (max-width: 768px) {
          margin-bottom: 20px;
        }
      }
      .btnList {
        width: 70%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media screen and (max-width: 1024px) {
          width: 100%;
        }
        .searchList {
          width: 85%;
          @media screen and (max-width: 1024px) {
            width: 70%;
          }
          @media screen and (max-width: 768px) {
            width: 80%;
          }
        }
        .addModal {
          text-align: end;
          button {
            span {
              @media screen and (max-width: 768px) {
                display: none;
              }
            }
          }
        }
      }
    }
  }
</style>

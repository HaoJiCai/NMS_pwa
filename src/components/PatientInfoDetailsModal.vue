<!--eslint-disable -->
<template>
  <div id="patientInfoDetailsModal" ref="patientInfoDetailsModal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ patientinfoDetail.modalTitle }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="close_btn"></button>
        </div>
        <div class="modal-body">
          <div class="selectedPatient">
            <label for="condNo" class="searchDateLabel">查詢日期：</label>
            <select id="condNo" class="searchDateSelect" v-model="selectedCondNo">
              <option value="" selected disabled>請選擇日期</option>
              <option :value="cond.cond_no" v-for="cond in patientInfoArray" :key="cond.cond_no">{{ formatDate(cond.date) }}</option>
            </select>
          </div>
          <div class="patientInfo" v-for="patientInfo in patientInfos" :key="patientInfo.cond_no">
            <p>飲食醫囑：{{ patientInfo.doctorOrder }}</p>
            <p>活動狀態：{{ patientInfo.activeStatus }}</p>
            <p>運動情況：{{ patientInfo.sportsStatus }}</p>
            <p>症狀：{{ patientInfo.symptom }}</p>
            <p>疾病：{{ patientInfo.disease }}</p>
            <p>營養知識：{{ patientInfo.knowledge }}</p>
            <p>遵從度：{{ patientInfo.compliance }}</p>
            <p>身高：{{ patientInfo.height }}</p>
            <p>體重：{{ patientInfo.weight }}</p>
            <p>BMI：{{ patientInfo.bmi }}</p>
            <p>體重變化：{{ patientInfo.weight_change }}</p>
            <p>總攝（灌）食量/天：{{ patientInfo.caloriesEaten }}</p>
            <p>總需求量/天：{{ patientInfo.caloriesDemand }}</p>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="close_btn">關閉</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fixApi: 'https://140.123.173.4',
      selectedCondNo: '',
      patientInfos: {},
    };
  },
  methods: {
    getPatientInfos() {
      this.patientInfos = {};
      // 處理當選擇下拉式選項時，傳遞到 patientID 當 api 參數
      let patientID = '';
      this.patientInfoArray.forEach((item) => {
        patientID = item.patient_id;
      });
      if (this.selectedCondNo !== '') {
        const api = `${this.fixApi}/patient/healthConditions/${patientID}/${this.selectedCondNo}`;
        this.$http.get(api).then((res) => {
          // console.log(res.data);
          this.patientInfos = res.data;
        }).catch((err) => {
          console.log(err);
        });
      }
    },
    close_btn() {
      this.selectedCondNo = '';
      this.getPatientInfos();
    },
    // 日期時間格式轉換
    formatDate(dateTimeString) {
      const date = new Date(dateTimeString);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 将月份转为两位数
      const day = date.getDate().toString().padStart(2, '0'); // 将日期转为两位数

      return `${year}-${month}-${day}`;
    },
  },
  watch: {
    selectedCondNo: { // 監聽下拉式選擇改變時，執行 getPatientInfos 方法
      handler() {
        this.getPatientInfos();
      },
      deep: true,
      immediate: false,
    },
  },
  computed: {
    patientInfoArray() {
      const patientInfoArray = Array.from(this.patientinfoDetail);
      return patientInfoArray;
    },
  },
  props: {
    patientinfoDetail: {
      default: [],
    },
  },
  created() {
    this.selectedCondNo = '';
    this.getPatientInfos();
  },
};
</script>

<style lang="scss">
.modal-content {
  .modal-header {
    h5 {
      font-weight: bold;
    }
  }
  .modal-body {
    text-align: left;
    .selectedPatient {
      width: 100%;
      padding: 18px 0;
      margin-bottom: 20px;
      .searchDateLabel {
        font-size: 22px;
        font-weight: 700;
        color: rgb(112, 53, 53);
      }
      .searchDateSelect {
        border: 0.25px solid rgb(202, 212, 230);
        border-radius: 3px;
        padding: 12px 0;
      }
    }
    .patientInfo {
      border-radius: 10px;
      padding: 30px 0;
      background-color: rgb(62, 62, 61);
      p {
        padding: 0 12px;
        color: whitesmoke;
      }
    }
  }
}
</style>

<!--eslint-disable -->
<template>
  <div class="container-page">
    <div class="selectPatient">
      <select id="patientID" class="patientID" v-model="selectedPatientID">
        <option value="" selected disabled>請選擇</option>
        <option :value="patient.patient_id" v-for="patient in patients" :key="patient.patient_id">{{ patient.name }}</option>
      </select>
    </div>
    <div class="chartBlock">
      <div class="bar-chart chart">
        <Bar
          id="weightBarChart"
          :options="weightBarOptions"
          :data="weightBarData"
        />
      </div>
      <div class="line-chart chart">
        <Line
          id="bmiLineChart"
          :options="bmiLineOptions"
          :data="bmiLineData"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Line, Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement);

export default {
  name: 'BarChart',
  data() {
    return {
      fixApi: 'https://140.123.173.4',
      selectedPatientID: '',
      patients: [],
      weightBarData: {
        labels: [],
        datasets: [
          {
            label: '體重（kg）',
            data: [],
            backgroundColor: '#B9B973',
          },
        ],
      },
      weightBarOptions: {
        responsive: true,
      },
      bmiLineData: {
        labels: [],
        datasets: [
          {
            label: 'BMI',
            data: [],
            borderColor: '#FFE66F',
            backgroundColor: '#f87979',
          },
        ],
      },
      bmiLineOptions: {
        responsive: true,
      },
    };
  },
  methods: {
    getPatients() {
      const api = `${this.fixApi}/patient/distinct`;
      this.$http.get(api).then((res) => {
        this.patients = res.data;
      }).catch((err) => {
        console.log(err);
      });
    },
    getWeightFlow() {
      const obj = {
        labels: [],
        datasets: [
          {
            label: '體重（kg）',
            data: [],
            backgroundColor: '#B9B973',
          },
        ],
      };
      // 重置 weightBarData
      obj.labels = [];
      obj.datasets[0].data = [];
      if (this.selectedPatientID !== '') {
        const api = `${this.fixApi}/patient/healthConditions/${this.selectedPatientID}`;
        console.log(api);
        this.$http.get(api).then((res) => {
          // console.log(res);
          res.data.forEach((item) => {
            obj.labels.push(this.formatDate(item.date));
            obj.datasets[0].data.push(item.weight);
          });
          // 加入資料到 weightBarData
          this.weightBarData = obj;
          // console.log(obj);
        }).catch((err) => {
          console.log(err);
        });
      } else {
        console.log('取不到 selectedPatientID');
      }
    },
    getBmiFlow() {
      const obj = {
        labels: [],
        datasets: [
          {
            label: 'BMI',
            data: [],
            borderColor: '#FFE66F',
            backgroundColor: '#f87979',
          },
        ],
      };
      // 重置 bmiLineData
      obj.labels = [];
      obj.datasets[0].data = [];
      if (this.selectedPatientID !== '') {
        const api = `${this.fixApi}/patient/healthConditions/${this.selectedPatientID}`;
        console.log(api);
        this.$http.get(api).then((res) => {
          // console.log(res);
          res.data.forEach((item) => {
            obj.labels.push(this.formatDate(item.date));
            obj.datasets[0].data.push(item.bmi);
          });
          // 加入資料到 weightBarData
          this.bmiLineData = obj;
          // console.log(obj);
        }).catch((err) => {
          console.log(err);
        });
      } else {
        console.log('取不到 selectedPatientID');
      }
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
    selectedPatientID: {
      handler() {
        this.getWeightFlow();
        this.getBmiFlow();
      },
      deep: true,
      immediate: false, // 在元件建立時不會立刻調用
    },
  },
  components: {
    Line,
    Bar,
  },
  created() {
    this.getPatients();
  },
};
</script>

<style lang="scss">
  .container-page {
    width: 86%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1024px) {
      width: 70%;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
      margin-top: 50px;
    }
    .selectPatient {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 30px;
      @media screen and (max-width: 1024px) {
        flex-direction: column;
        justify-content: center;
      }
      .patientID {
        width: 30%;
        border: 0 none;
        border-radius: 5px;
        background-color: rgb(234, 215, 200);
        padding: 14px 0;
        margin-left: 30px;
        @media screen and (max-width: 1024px) {
          width: 100%;
          margin-left: 0;
        }
      }
    }
    .chartBlock {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media screen and (max-width: 1024px) {
        flex-direction: column;
        justify-content: center;
      }
      .chart {
        width: 100%;
        padding: 15px 30px;
        @media screen and (max-width: 1024px) {
          padding: 15px 0;
        }
      }
    }
  }
</style>

<!--eslint-disable -->
<template>
  <div class="container-page-healthEducation">
    <div class="detail-title">
      <div class="title">
        <h5>標題：</h5>
      </div>
      <div class="content">
        <p>{{ data.title }}</p>
      </div>
    </div>
    <div class="detail-updateDate">
      <div class="title">
        <h5>張貼日期：</h5>
      </div>
      <div class="content">
        <p>{{ formatDate(data.update_date) }}</p>
      </div>
    </div>
    <div class="detail-content">
      <div class="title">
        <h5>內容：</h5>
      </div>
      <div class="content">
        <p>{{ data.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fixApi: 'https://140.123.173.4',
      data: {},
    };
  },
  methods: {
    getHealthEducationDetail() {
      const api = `${this.fixApi}/healthEducation/${this.eduType}/${this.eduId}`;
      this.$http.get(api).then((res) => {
        [this.data] = res.data;
        console.log(this.data);
      }).catch((err) => {
        console.error(err);
      });
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

      return `${year}-${month}-${day}`;
    },
  },
  props: {
    eduType: String, // 從路由的 :eduType 參數傳遞過來
    eduId: String, // 從路由的 :eduType 參數傳遞過來
  },
  created() {
    this.getHealthEducationDetail();
  },
};
</script>

<style lang="scss">
.container-page-healthEducation {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 0.1px solid black;
  padding: 20px 30px;
  .detail-title {
    display: flex;
    align-items: flex-start;
    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }
  }
  .detail-updateDate {
    display: flex;
    align-items: flex-start;
    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }
  }
  .detail-content {
    display: flex;
    align-items: flex-start;
    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }
    .content {
      width: 90%;
      text-align: left;
      @media screen and (max-width: 1024px) {
        width: 100%;
      }
    }
  }
  h5 {
    color: white;
    font-size: 16px;
    margin: 0;
    @media screen and (max-width: 1024px) {
      font-size: 15px;
    }
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
  p {
    font-size: 16px;
    margin: 0;
    @media screen and (max-width: 1024px) {
      font-size: 14px;
    }
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 8px;
    background-color: rgb(224, 91, 91);
    border-radius: 0.5rem;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 8px 20px;
    @media screen and (max-width: 1024px) {
      padding: 8px 0;
    }
  }
}
</style>
